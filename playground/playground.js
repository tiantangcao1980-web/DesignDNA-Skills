/**
 * DesignDNA Playground controller.
 *
 * Loads 58 brand design systems (from ../design-md/<brand>/...) and exposes
 * them through a tabbed explorer: Preview, Tokens, DESIGN.md, JSON, CSS,
 * Tailwind, TypeScript, and a ready-to-paste AI prompt generator.
 *
 * Data model
 * ----------
 * `BRANDS` array (sorted list)
 * per brand fetched lazily:
 *   - design.json   (cached as `tokens`)
 *   - DESIGN.md, variables.css, tailwind.config.js, tokens.ts (raw text, cached)
 *
 * State
 * -----
 *   current    — active brand slug
 *   activeTab  — 'preview' | 'tokens' | 'md' | 'json' | 'css' | 'tailwind' | 'ts' | 'prompt'
 *   theme      — 'light' | 'dark' (applies to preview iframe)
 *   promptType — 'page' | 'component' | 'dashboard' | 'landing' | 'pricing'
 */

const BRANDS = [
  'airbnb','airtable','apple','bmw','cal','claude','clay','clickhouse','cohere',
  'coinbase','composio','cursor','elevenlabs','expo','ferrari','figma','framer',
  'hashicorp','ibm','intercom','kraken','lamborghini','linear.app','lovable',
  'minimax','mintlify','miro','mistral.ai','mongodb','notion','nvidia','ollama',
  'opencode.ai','pinterest','posthog','raycast','renault','replicate','resend',
  'revolut','runwayml','sanity','sentry','spacex','spotify','stripe','supabase',
  'superhuman','tesla','together.ai','uber','vercel','voltagent','warp',
  'webflow','wise','x.ai','zapier'
];

// Category groupings — mirrors the README sections.
const CATEGORIES = {
  'AI & ML':       ['claude','cohere','elevenlabs','minimax','mistral.ai','ollama','opencode.ai','replicate','runwayml','together.ai','voltagent','x.ai'],
  'Dev Tools':     ['cursor','expo','linear.app','lovable','mintlify','posthog','raycast','resend','sentry','supabase','superhuman','vercel','warp','zapier'],
  'Infra & Cloud': ['clickhouse','composio','hashicorp','mongodb','sanity','stripe'],
  'Design & Productivity': ['airtable','cal','clay','figma','framer','intercom','miro','notion','pinterest','webflow'],
  'Fintech':       ['coinbase','kraken','revolut','wise'],
  'Consumer & Enterprise': ['airbnb','apple','ibm','nvidia','spacex','spotify','uber'],
  'Automotive':    ['bmw','ferrari','lamborghini','renault','tesla'],
};

// Brand → short description (for sidebar subtitle).
const SUBTITLES = {
  apple: 'Premium white space, SF Pro',
  tesla: 'Radical subtraction, cinematic',
  stripe: 'Purple gradients, weight-300 elegance',
  linear: 'Ultra-minimal, precise, purple accent',
  'linear.app': 'Ultra-minimal, precise, purple accent',
  claude: 'Warm terracotta, editorial layout',
  vercel: 'Black and white precision, Geist',
  figma: 'Vibrant multi-color, playful',
  notion: 'Warm minimalism, serif headings',
  airbnb: 'Coral accent, photography-driven',
  spotify: 'Vibrant green on dark',
  cursor: 'Sleek dark, gradient accents',
};

/* ══════════════════════════════════════════════════════════════════
   State
═════════════════════════════════════════════════════════════════ */

const cache = new Map(); // brand → { md, json, css, tailwind, ts, tokens }
const state = {
  current: null,
  activeTab: 'preview',
  theme: 'light',
  promptType: 'page',
};

/* ══════════════════════════════════════════════════════════════════
   DOM
═════════════════════════════════════════════════════════════════ */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

const sidebarList = $('#brand-list');
const search = $('#search');
const mainEmpty = $('#main-empty');
const detail = $('#detail');

/* ══════════════════════════════════════════════════════════════════
   Sidebar rendering
═════════════════════════════════════════════════════════════════ */

function renderSidebar(filter = '') {
  const q = filter.trim().toLowerCase();
  const frag = document.createDocumentFragment();
  let total = 0;

  for (const [cat, brands] of Object.entries(CATEGORIES)) {
    const matching = brands.filter((b) => !q || b.toLowerCase().includes(q));
    if (matching.length === 0) continue;

    const label = document.createElement('div');
    label.className = 'sidebar-group-label';
    label.textContent = cat;
    frag.appendChild(label);

    for (const brand of matching) {
      const item = document.createElement('div');
      item.className = 'brand-item';
      item.dataset.brand = brand;
      if (brand === state.current) item.classList.add('active');

      const name = document.createElement('span');
      name.textContent = brand;

      const badge = document.createElement('span');
      badge.className = 'brand-badge';
      badge.textContent = '5';

      item.appendChild(name);
      item.appendChild(badge);
      item.addEventListener('click', () => selectBrand(brand));
      frag.appendChild(item);
      total++;
    }
  }

  sidebarList.innerHTML = '';
  sidebarList.appendChild(frag);
  $('#total-count').textContent = `${total} brand${total === 1 ? '' : 's'}`;
}

search.addEventListener('input', (e) => renderSidebar(e.target.value));

/* ══════════════════════════════════════════════════════════════════
   Brand loader — fetches & caches all 5 format files
═════════════════════════════════════════════════════════════════ */

async function loadBrand(brand) {
  if (cache.has(brand)) return cache.get(brand);

  const base = `./design-md/${brand}`;
  const urls = {
    md:       `${base}/DESIGN.md`,
    json:     `${base}/design.json`,
    css:      `${base}/variables.css`,
    tailwind: `${base}/tailwind.config.js`,
    ts:       `${base}/tokens.ts`,
  };

  const results = await Promise.allSettled(
    Object.entries(urls).map(async ([k, u]) => [k, await (await fetch(u)).text()])
  );

  const data = {};
  for (const r of results) {
    if (r.status === 'fulfilled') {
      data[r.value[0]] = r.value[1];
    }
  }

  try { data.tokens = JSON.parse(data.json || '{}'); }
  catch { data.tokens = {}; }

  cache.set(brand, data);
  return data;
}

/* ══════════════════════════════════════════════════════════════════
   Brand selection & panel rendering
═════════════════════════════════════════════════════════════════ */

async function selectBrand(brand) {
  state.current = brand;
  renderSidebar(search.value);

  mainEmpty.style.display = 'none';
  detail.style.display = 'flex';

  $('#d-name').textContent = brand;
  $('#d-subtitle').textContent = SUBTITLES[brand] || '';

  // Clear stale content while loading
  ['md', 'json', 'css', 'tailwind', 'ts'].forEach((k) => {
    $(`#code-${k}`).textContent = 'Loading…';
  });

  const data = await loadBrand(brand);

  // Meta pills
  const tokens = data.tokens || {};
  const meta = $('#d-meta');
  meta.innerHTML = '';
  if (tokens.colors) {
    meta.appendChild(pill(`${Object.keys(tokens.colors).length} colors`));
  }
  const fontCount = (tokens.typography?.families || []).length;
  if (fontCount) meta.appendChild(pill(`${fontCount} fonts`));
  const radiiCount = Object.keys(tokens.radius || {}).length;
  if (radiiCount) meta.appendChild(pill(`${radiiCount} radii`));

  // Code panes
  $('#code-md').innerHTML = highlightMarkdown(data.md || 'Not available');
  $('#code-json').innerHTML = highlightJson(data.json || '{}');
  $('#code-css').innerHTML = highlightCss(data.css || '');
  $('#code-tailwind').innerHTML = highlightJs(data.tailwind || '');
  $('#code-ts').innerHTML = highlightJs(data.ts || '');

  // Tokens pane
  renderTokensPane(tokens);

  // Prompt pane
  renderPrompt();

  // Preview pane
  setPreviewTheme(state.theme);
}

function pill(text) {
  const el = document.createElement('span');
  el.className = 'meta-pill';
  el.textContent = text;
  return el;
}

/* ══════════════════════════════════════════════════════════════════
   Tokens visual summary
═════════════════════════════════════════════════════════════════ */

function renderTokensPane(tokens) {
  const container = $('#tokens-grid');
  container.innerHTML = '';

  // Colors card
  if (tokens.colors && Object.keys(tokens.colors).length > 0) {
    const card = document.createElement('div');
    card.className = 'token-card';
    card.innerHTML = '<h3>Colors</h3>';
    for (const [name, value] of Object.entries(tokens.colors)) {
      const row = document.createElement('div');
      row.className = 'swatch-row';
      const sw = document.createElement('span');
      sw.className = 'swatch';
      sw.style.background = value;
      const nm = document.createElement('span');
      nm.className = 'swatch-name';
      nm.textContent = name;
      const val = document.createElement('span');
      val.className = 'swatch-value';
      val.textContent = value;
      row.appendChild(sw);
      row.appendChild(nm);
      row.appendChild(val);
      card.appendChild(row);
    }
    container.appendChild(card);
  }

  // Typography card
  if (tokens.typography?.families?.length > 0) {
    const card = document.createElement('div');
    card.className = 'token-card';
    card.innerHTML = '<h3>Typography</h3>';
    for (const fam of tokens.typography.families) {
      const row = document.createElement('div');
      row.className = 'font-sample';
      row.style.fontFamily = `"${fam}", system-ui, sans-serif`;
      row.textContent = fam;
      card.appendChild(row);
    }
    container.appendChild(card);
  }

  // Spacing card
  if (tokens.spacing && Object.keys(tokens.spacing).length > 0) {
    const card = document.createElement('div');
    card.className = 'token-card';
    card.innerHTML = '<h3>Spacing</h3>';
    for (const [name, value] of Object.entries(tokens.spacing)) {
      const row = document.createElement('div');
      row.className = 'swatch-row';
      const sw = document.createElement('div');
      sw.style.width = value;
      sw.style.height = '4px';
      sw.style.background = 'var(--accent)';
      sw.style.borderRadius = '2px';
      sw.style.flexShrink = '0';
      row.appendChild(sw);
      const nm = document.createElement('span');
      nm.className = 'swatch-name';
      nm.textContent = name;
      row.appendChild(nm);
      const val = document.createElement('span');
      val.className = 'swatch-value';
      val.textContent = value;
      row.appendChild(val);
      card.appendChild(row);
    }
    container.appendChild(card);
  }

  // Radius card
  if (tokens.radius && Object.keys(tokens.radius).length > 0) {
    const card = document.createElement('div');
    card.className = 'token-card';
    card.innerHTML = '<h3>Radius</h3>';
    for (const [name, value] of Object.entries(tokens.radius)) {
      const row = document.createElement('div');
      row.className = 'swatch-row';
      const sw = document.createElement('div');
      sw.style.width = '24px';
      sw.style.height = '24px';
      sw.style.background = 'var(--border-mid)';
      sw.style.borderRadius = value;
      sw.style.flexShrink = '0';
      row.appendChild(sw);
      const nm = document.createElement('span');
      nm.className = 'swatch-name';
      nm.textContent = name;
      row.appendChild(nm);
      const val = document.createElement('span');
      val.className = 'swatch-value';
      val.textContent = value;
      row.appendChild(val);
      card.appendChild(row);
    }
    container.appendChild(card);
  }
}

/* ══════════════════════════════════════════════════════════════════
   Preview pane (iframe)
═════════════════════════════════════════════════════════════════ */

function setPreviewTheme(theme) {
  state.theme = theme;
  const file = theme === 'dark' ? 'preview-dark.html' : 'preview.html';
  const url = `./design-md/${state.current}/${file}`;
  $('#preview-frame').src = url;
  $$('.preview-theme-btn').forEach((b) => {
    b.classList.toggle('active', b.dataset.theme === theme);
  });
}

$$('.preview-theme-btn').forEach((b) => {
  b.addEventListener('click', () => {
    if (state.current) setPreviewTheme(b.dataset.theme);
  });
});

/* ══════════════════════════════════════════════════════════════════
   AI Prompt generator
═════════════════════════════════════════════════════════════════ */

const PROMPT_TEMPLATES = {
  page:      'Build a complete web page',
  component: 'Build a reusable component',
  dashboard: 'Build an analytics dashboard',
  landing:   'Build a marketing landing page',
  pricing:   'Build a pricing page with three tiers',
};

function renderPrompt() {
  const brand = state.current;
  const data = cache.get(brand);
  if (!data) return;

  const tokens = data.tokens || {};
  const instruction = PROMPT_TEMPLATES[state.promptType] || 'Build a UI';
  const colorsList = Object.entries(tokens.colors || {})
    .slice(0, 8)
    .map(([k, v]) => `  - ${k}: ${v}`)
    .join('\n');
  const fonts = (tokens.typography?.families || []).join(', ') || 'system-ui';

  const prompt = `${instruction} for a project using the ${brand} design system.

DESIGN SYSTEM REQUIREMENTS (from DESIGN.md):
- Brand: ${brand}
- Primary fonts: ${fonts}
- Color palette:
${colorsList}

STRICT RULES:
- Use ONLY the colors listed above; no other accent colors.
- Use ONLY the font families listed; no other typefaces.
- Follow the visual theme and spacing rules in DESIGN.md.
- Use semantic HTML with accessible contrast ratios.
- Output a complete, production-ready file (no pseudo-code, no TODOs).

Full design system reference is available at:
  design-md/${brand}/DESIGN.md

Implementation target: ${state.promptType === 'component' ? 'a single reusable component file' : 'a complete page with hero, main content, and footer'}.`;

  $('#prompt-body').textContent = prompt;
}

$('#prompt-template').addEventListener('change', (e) => {
  state.promptType = e.target.value;
  renderPrompt();
});

/* ══════════════════════════════════════════════════════════════════
   Tabs
═════════════════════════════════════════════════════════════════ */

$$('.tab').forEach((t) => {
  t.addEventListener('click', () => {
    state.activeTab = t.dataset.id;
    $$('.tab').forEach((x) => x.classList.toggle('active', x === t));
    $$('.pane').forEach((p) => p.classList.toggle('active', p.dataset.pane === t.dataset.id));
  });
});

/* ══════════════════════════════════════════════════════════════════
   Copy buttons
═════════════════════════════════════════════════════════════════ */

$$('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const kind = btn.dataset.copy;
    const data = cache.get(state.current);
    if (!data && kind !== 'prompt') return;

    let text;
    if (kind === 'prompt') {
      text = $('#prompt-body').textContent;
    } else {
      text = data[kind] || '';
    }
    try {
      await navigator.clipboard.writeText(text);
      btn.classList.add('copied');
      btn.textContent = 'Copied ✓';
      showToast(`${kind === 'prompt' ? 'Prompt' : kind.toUpperCase()} copied to clipboard`);
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.textContent = kind === 'prompt' ? 'Copy prompt' : 'Copy';
      }, 1500);
    } catch {
      showToast('Copy failed — select text manually');
    }
  });
});

function showToast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => t.classList.remove('show'), 1800);
}

/* ══════════════════════════════════════════════════════════════════
   Lightweight syntax highlighting (no external deps)
═════════════════════════════════════════════════════════════════ */

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function highlightJson(s) {
  return esc(s)
    .replace(/("[^"]*")(\s*:)/g, '<span class="s-key">$1</span>$2')
    .replace(/:\s*("[^"]*")/g, ': <span class="s-str">$1</span>')
    .replace(/\b(-?\d+(\.\d+)?)\b/g, '<span class="s-num">$1</span>');
}

function highlightCss(s) {
  return esc(s)
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="s-comm">$1</span>')
    .replace(/(--[\w-]+)/g, '<span class="s-key">$1</span>')
    .replace(/(#[0-9a-fA-F]{3,8})/g, '<span class="s-str">$1</span>');
}

function highlightJs(s) {
  return esc(s)
    .replace(/(\/\*[\s\S]*?\*\/|\/\/[^\n]*)/g, '<span class="s-comm">$1</span>')
    .replace(/("[^"]*"|'[^']*')/g, '<span class="s-str">$1</span>')
    .replace(/\b(\d+(?:\.\d+)?(?:px|rem)?)\b/g, '<span class="s-num">$1</span>');
}

function highlightMarkdown(s) {
  return esc(s)
    .replace(/^(#{1,6}\s[^\n]+)$/gm, '<span class="s-heading">$1</span>')
    .replace(/(`[^`]+`)/g, '<span class="s-str">$1</span>')
    .replace(/(#[0-9a-fA-F]{3,8})/g, '<span class="s-num">$1</span>');
}

/* ══════════════════════════════════════════════════════════════════
   Boot
═════════════════════════════════════════════════════════════════ */

renderSidebar();

// Auto-select via ?brand=xxx, or default to stripe for demo.
const params = new URLSearchParams(location.search);
const initialBrand = params.get('brand');
if (initialBrand && BRANDS.includes(initialBrand)) {
  selectBrand(initialBrand);
} else if (params.get('demo') !== 'false') {
  selectBrand('stripe');
}
