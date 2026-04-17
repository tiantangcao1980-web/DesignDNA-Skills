// DESIGN.md parser → design tokens.
//
// Regex-based extraction. DESIGN.md files follow a loose but consistent
// markdown convention, so we:
//   1. Split the doc into sections by heading
//   2. Scan each line for labeled hex colors, font-family declarations,
//      shadow/radius/spacing patterns
//   3. Reject obviously-bad captures (overly long names, numeric-only labels)
//
// Goal: ~90% extraction quality on typical DESIGN.md files.

const HEX_CHAR = '[0-9a-fA-F]';
const HEX_RE = new RegExp(`#(${HEX_CHAR}{6}|${HEX_CHAR}{3})(?!${HEX_CHAR})`, 'g');

/**
 * Extract a section's body text by heading regex (case-insensitive).
 * Matches `# Heading`, `## 2. Heading`, `### Color Palette & Roles` etc.
 */
function section(md, headingPattern) {
  const re = new RegExp(
    `^#{1,3}[^\\n]*?${headingPattern}[^\\n]*\\n([\\s\\S]*?)(?=\\n#{1,3}\\s|$)`,
    'im'
  );
  const m = md.match(re);
  return m ? m[1] : '';
}

/** Check if a string is a reasonable design-token label. */
function isGoodLabel(s) {
  if (!s) return false;
  const trimmed = s.trim();
  if (trimmed.length < 2 || trimmed.length > 40) return false;
  if (/^\d+$/.test(trimmed)) return false;                  // all digits
  if ((trimmed.match(/\s/g) || []).length > 4) return false; // 4+ spaces = sentence
  return true;
}

/** Normalize hex to #rrggbb lowercase. */
function normalizeHex(hex) {
  if (!hex) return null;
  hex = hex.toLowerCase();
  if (!hex.startsWith('#')) hex = '#' + hex;
  if (/^#[0-9a-f]{3}$/.test(hex)) {
    hex = '#' + hex.slice(1).split('').map((c) => c + c).join('');
  }
  if (/^#[0-9a-f]{6}([0-9a-f]{2})?$/.test(hex)) return hex;
  return null;
}

/** Convert a label to a CSS-safe kebab-case key. */
function slug(s) {
  return s
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Line-by-line color extractor.
 * Matches these per line, in priority order:
 *   - "**Name**" followed by `#hex` within ≤60 chars
 *   - "- Name: #hex"  (dash list)
 *   - "`--var-name`: #hex" (CSS variable line)
 */
function extractColors(md) {
  const colorSection = section(md, '(?:color\\s*palette|color|palette)')
                    || section(md, 'visual\\s*theme')
                    || md;

  const lines = colorSection.split('\n');
  const colors = {};
  const seenHex = new Set();

  const patterns = [
    // **Name** ... #hex  (name must NOT contain newline or start with digit only)
    /\*\*([A-Za-z][A-Za-z0-9 \-/]{1,39})\*\*[^\n]{0,80}?(#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3})(?![0-9a-fA-F])/,
    // - Name: #hex
    /^[\s\-*]+([A-Za-z][A-Za-z0-9 \-/]{1,39})\s*[:—-]\s*`?(#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3})(?![0-9a-fA-F])/,
    // `--var`: #hex
    /`--([a-z][a-z0-9\-]{1,39})`\s*[:—-]?\s*`?(#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3})(?![0-9a-fA-F])/,
  ];

  for (const line of lines) {
    for (const re of patterns) {
      const m = line.match(re);
      if (m && isGoodLabel(m[1])) {
        const key = slug(m[1]);
        const hex = normalizeHex(m[2]);
        if (key && hex && !seenHex.has(hex) && !colors[key]) {
          colors[key] = hex;
          seenHex.add(hex);
          break;
        }
      }
    }
  }

  // Fallback: take up to 8 unlabeled hexes if we found fewer than 3 labeled
  if (Object.keys(colors).length < 3) {
    const all = [...colorSection.matchAll(HEX_RE)]
      .map((m) => normalizeHex('#' + m[1]))
      .filter(Boolean);
    let i = 0;
    for (const hex of all) {
      if (!seenHex.has(hex) && i < 8) {
        colors[`color-${i + 1}`] = hex;
        seenHex.add(hex);
        i++;
      }
    }
  }

  return colors;
}

/**
 * Font extractor. Only accepts fonts mentioned in contexts that strongly
 * suggest a typography declaration, to avoid picking up UI labels like
 * "Sign in" or "Start now" that happen to be in quotes.
 */
function extractFonts(md) {
  const typoSection = section(md, '(?:typography|type|font)') || md;

  const families = [];
  const seen = new Set();

  // Strong signals — regex look for explicit font-family / typeface / "Font:" lines
  const signalRe = new RegExp(
    // e.g. "font-family: 'Söhne', Inter, sans-serif"
    // e.g. "Typeface: Söhne"
    // e.g. "Headlines use **Söhne** weight 300"
    '(?:font-family\\s*:?|typeface\\s*:?|primary\\s+font\\s*:?|font\\s*:\\s*|uses?\\s+\\*\\*)' +
    '\\s*["\'\\*]*' +
    '([A-Z][A-Za-z0-9][A-Za-z0-9 \\-]{1,30})',
    'gi'
  );

  let m;
  while ((m = signalRe.exec(typoSection)) !== null) {
    const fam = m[1].trim().replace(/\s+/g, ' ');
    // Reject obviously-generic or UI labels
    if (['default', 'system', 'sans', 'serif', 'monospace', 'none'].includes(fam.toLowerCase())) continue;
    if (/^(sign|start|contact|click|tap|get|try|view|open|close|learn|read|buy|join|free|new|more|all)\b/i.test(fam)) continue;
    if (!seen.has(fam.toLowerCase()) && fam.length >= 3) {
      families.push(fam);
      seen.add(fam.toLowerCase());
    }
  }

  // Also accept the common pattern: **"Inter"** or **Inter**
  const boldedRe = /\*\*["']?([A-Z][A-Za-z0-9][A-Za-z0-9 \-]{2,30})["']?\*\*/g;
  while ((m = boldedRe.exec(typoSection)) !== null) {
    const fam = m[1].trim();
    // Require it to look like a font name: typically one capitalized word,
    // maybe with " Mono" / " Sans" / " Serif" / " Display" suffix
    if (!/^[A-Z][A-Za-z0-9\-]*(?:\s(?:Mono|Sans|Serif|Display|Text|Pro|Regular|Neue|UI))*$/.test(fam)) continue;
    if (!seen.has(fam.toLowerCase())) {
      families.push(fam);
      seen.add(fam.toLowerCase());
    }
  }

  // Font sizes via clear size-label pairings
  const sizes = {};
  const sizeRe = /\b(h[1-6]|hero|display|body|caption|small|large|xl)\b[^a-z\n]{0,20}?(\d+(?:\.\d+)?(?:px|rem))\b/gi;
  const sSeen = new Set();
  while ((m = sizeRe.exec(typoSection)) !== null) {
    const key = m[1].toLowerCase();
    if (!sSeen.has(key)) {
      const num = parseFloat(m[2]);
      // Filter out clearly wrong values: h1 should be >=20px, body ~14-18, etc.
      if (num >= 10 && num <= 200) {
        sizes[key] = m[2];
        sSeen.add(key);
      }
    }
  }

  // Weights
  const weights = [];
  const wRe = /\b(?:font-?weight|weight)\s*[:=]?\s*(\d{3})\b/gi;
  const wSeen = new Set();
  while ((m = wRe.exec(typoSection)) !== null) {
    const w = Number(m[1]);
    if (w >= 100 && w <= 900 && !wSeen.has(w)) {
      weights.push(w);
      wSeen.add(w);
    }
  }
  weights.sort((a, b) => a - b);

  return { families: families.slice(0, 4), sizes, weights };
}

function extractRadii(md) {
  const scope = section(md, '(?:component|layout|radius)') || md;
  const radii = {};
  const re = /\b(?:border-?radius|radius|corner)\s*[:=]?\s*(\d+(?:\.\d+)?(?:px|rem))\b/gi;
  const seen = new Set();
  let m;
  let i = 1;
  while ((m = re.exec(scope)) !== null) {
    if (!seen.has(m[1]) && i <= 6) {
      radii[`radius-${i}`] = m[1];
      seen.add(m[1]);
      i++;
    }
  }
  return radii;
}

function extractSpacing(md) {
  const scope = section(md, '(?:spacing|layout\\s*principles|grid)') || md;
  // Only accept values that appear in an enumerated spacing scale context
  const scaleRe = /(?:spacing|gap|padding|margin)[^\n]{0,80}?(\d+(?:\.\d+)?(?:px|rem))/gi;
  const values = new Set();
  let m;
  while ((m = scaleRe.exec(scope)) !== null) {
    const num = parseFloat(m[1]);
    if (num > 0 && num <= 128) values.add(m[1]);
  }
  const sorted = [...values].sort((a, b) => parseFloat(a) - parseFloat(b));
  const out = {};
  sorted.slice(0, 10).forEach((v, i) => {
    out[`space-${i + 1}`] = v;
  });
  return out;
}

function extractShadows(md) {
  const scope = section(md, '(?:depth|elevation|shadow)') || md;
  const shadows = {};
  const re = /box-shadow\s*:?\s*(?:`|"|')?([^`"'\n]{10,200}?)(?:`|"|'|;|\n)/gi;
  let m;
  let i = 0;
  while ((m = re.exec(scope)) !== null && i < 6) {
    const val = m[1].trim();
    if (val && val !== 'none' && !val.includes('...')) {
      shadows[`shadow-${i + 1}`] = val;
      i++;
    }
  }
  return shadows;
}

/**
 * Main parser: DESIGN.md text → token object.
 */
export function parseDesignMd(md, { brand } = {}) {
  return {
    brand: brand || 'unknown',
    version: '1.0.0',
    $schema: 'https://designdna.dev/schemas/tokens-v1.json',
    colors: extractColors(md),
    typography: extractFonts(md),
    spacing: extractSpacing(md),
    radius: extractRadii(md),
    shadows: extractShadows(md),
  };
}
