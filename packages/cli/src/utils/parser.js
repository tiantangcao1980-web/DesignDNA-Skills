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
const HEX_RE = new RegExp(`#(${HEX_CHAR}{8}|${HEX_CHAR}{6}|${HEX_CHAR}{3})(?!${HEX_CHAR})`, 'g');
const COLOR_LITERAL_RE = /((?:#[0-9a-fA-F]{8}|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3})|(?:(?:rgba?|hsla?|oklch|oklab)\([^)\n]+\)))/i;

/**
 * Extract a section body by matching a heading and keeping nested subheadings
 * inside that section. We stop only when we hit a heading of the same or
 * higher level, so `## Typography` still includes its `### Font Family`
 * subsection contents.
 */
function section(md, headingPattern) {
  const lines = md.split('\n');
  const targetHeadingRe = new RegExp(`^(#{1,6})\\s+.*${headingPattern}.*$`, 'i');
  const anyHeadingRe = /^(#{1,6})\s+/;

  let start = -1;
  let level = 0;

  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(targetHeadingRe);
    if (match) {
      start = i + 1;
      level = match[1].length;
      break;
    }
  }

  if (start === -1) return null;

  let end = lines.length;
  for (let i = start; i < lines.length; i++) {
    const heading = lines[i].match(anyHeadingRe);
    if (heading && heading[1].length <= level) {
      end = i;
      break;
    }
  }

  return lines.slice(start, end).join('\n').trim();
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

function normalizeColor(value) {
  if (!value) return null;
  const trimmed = value.trim();
  if (trimmed.startsWith('#')) return normalizeHex(trimmed);

  const fn = trimmed.match(/^([a-z]+)\((.*)\)$/i);
  if (!fn) return null;

  const name = fn[1].toLowerCase();
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'oklch', 'oklab'].includes(name)) return null;

  const args = fn[2]
    .replace(/\s+/g, ' ')
    .replace(/\s*,\s*/g, ', ')
    .trim();

  return `${name}(${args})`;
}

function pickFontCandidates(raw) {
  return raw
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => part.replace(/^['"`]+|['"`]+$/g, '').trim())
    .filter(Boolean);
}

function firstUsefulFontCandidate(raw) {
  for (const candidate of pickFontCandidates(raw)) {
    if (isLikelyFontFamily(candidate)) return candidate;
  }
  return null;
}

function isGenericFontFamily(name) {
  return /^(?:serif|sans-serif|monospace|system-ui|ui-monospace|-apple-system|inherit|initial|unset)$/i.test(name);
}

function isLikelyFontFamily(name) {
  if (!name) return false;

  const cleaned = name.replace(/^['"`]+|['"`]+$/g, '').trim();
  if (!cleaned || cleaned.length < 2 || cleaned.length > 60) return false;
  if (/^\d+$/.test(cleaned)) return false;
  if (isGenericFontFamily(cleaned)) return false;

  const lower = cleaned.toLowerCase();
  const blockedExact = new Set([
    'primary',
    'secondary',
    'family',
    'families',
    'heading',
    'label',
    'display',
    'identity',
    'disabled',
    'overlay',
    'text',
    'primary text',
    'secondary text',
    'tertiary text',
    'teal',
    'green',
    'orange',
    'pink',
    'purple',
    'ruby',
    'magenta',
    'white',
  ]);
  if (blockedExact.has(lower)) return false;

  return /^[A-Za-z0-9][A-Za-z0-9 .'+\-]*$/.test(cleaned);
}

function parseMarkdownTables(text) {
  const lines = text.split('\n');
  const tables = [];

  for (let i = 0; i < lines.length - 1; i++) {
    const headerLine = lines[i].trim();
    const separatorLine = lines[i + 1].trim();
    if (!headerLine.startsWith('|')) continue;
    if (!/^\|?(?:\s*:?-{3,}:?\s*\|)+\s*:?-{3,}:?\s*\|?$/.test(separatorLine)) continue;

    const header = headerLine.split('|').slice(1, -1).map((cell) => cell.trim().toLowerCase());
    const rows = [];
    i += 2;
    while (i < lines.length && lines[i].trim().startsWith('|')) {
      const cells = lines[i].split('|').slice(1, -1).map((cell) => cell.trim());
      if (cells.length === header.length) {
        rows.push(Object.fromEntries(header.map((key, idx) => [key, cells[idx]])));
      }
      i++;
    }
    i -= 1;
    tables.push(rows);
  }

  return tables;
}

function canonicalTypeSizeKey(role) {
  const lower = role.toLowerCase();
  if (/\bhero\b/.test(lower)) return 'hero';
  if (/\bdisplay\b/.test(lower)) return 'display';
  if (/\bbody\b/.test(lower)) return 'body';
  if (/\bcaption\b/.test(lower)) return 'caption';
  if (/\bsmall\b/.test(lower)) return 'small';
  if (/\blarge\b/.test(lower)) return 'large';
  if (/\bh1\b|\bheading 1\b/.test(lower)) return 'h1';
  if (/\bh2\b|\bheading 2\b/.test(lower)) return 'h2';
  if (/\bh3\b|\bheading 3\b/.test(lower)) return 'h3';
  if (/\bbutton\b/.test(lower)) return 'button';
  if (/\blabel\b/.test(lower)) return 'label';
  if (/\bmono\b/.test(lower)) return 'mono';
  return slug(role).slice(0, 40);
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
                    ?? section(md, 'visual\\s*theme')
                    ?? md;

  const lines = colorSection.split('\n');
  const colors = {};
  const seenHex = new Set();

  const patterns = [
    // **Name** ... #hex  (name must NOT contain newline or start with digit only)
    new RegExp(`\\*\\*([A-Za-z][A-Za-z0-9 \\-/]{1,39})\\*\\*[^\\n]{0,80}?${COLOR_LITERAL_RE.source}`),
    // - Name: color
    new RegExp(`^[\\s\\-*]+([A-Za-z][A-Za-z0-9 \\-/]{1,39})\\s*[:—-]\\s*` + COLOR_LITERAL_RE.source),
    // `--var`: color
    new RegExp(String.raw`\`--([a-z][a-z0-9\-]{1,39})\`\s*[:—-]?\s*` + COLOR_LITERAL_RE.source),
  ];

  for (const line of lines) {
    for (const re of patterns) {
      const m = line.match(re);
      if (m && isGoodLabel(m[1])) {
        const key = slug(m[1]);
        const color = normalizeColor(m[2]);
        if (key && color && !seenHex.has(color) && !colors[key]) {
          colors[key] = color;
          seenHex.add(color);
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
  const typoSection = section(md, '(?:typography|font)') ?? md;
  const familySection = section(typoSection, 'font(?:\\s+family|\\s+families)?') || typoSection;

  const families = [];
  const seen = new Set();
  const remember = (family) => {
    const cleaned = family.trim();
    const key = cleaned.toLowerCase();
    if (!isLikelyFontFamily(cleaned) || seen.has(key)) return;
    families.push(cleaned);
    seen.add(key);
  };

  // Explicit `Primary` / `Monospace` lines usually provide the canonical font
  // names before fallbacks. We keep only the first few non-generic families.
  for (const line of familySection.split('\n')) {
    const namedFontLine = line.match(/^\s*[-*]\s*\*\*([^*]+)\*\*:\s*(.+)$/);
    if (namedFontLine) {
      const label = namedFontLine[1].trim();
      const rhs = namedFontLine[2];
      if (!/^no\b/i.test(label) && isLikelyFontFamily(label)) {
        remember(label);
      }
      const backtickGroups = [...rhs.matchAll(/`([^`]+)`/g)];
      for (const group of backtickGroups) {
        const candidate = firstUsefulFontCandidate(group[1]);
        if (candidate) remember(candidate);
      }
    }

    const roleLine = line.match(/^\s*[-*]?\s*\*\*(?:Primary|Secondary|Display|Body|Monospace|Universal)\*\*:\s*(.+)$/i);
    if (roleLine) {
      const backtickGroups = [...roleLine[1].matchAll(/`([^`]+)`/g)];
      for (const group of backtickGroups) {
        const candidate = firstUsefulFontCandidate(group[1]);
        if (candidate) remember(candidate);
      }
      continue;
    }

    const inlineDecl = line.match(/(?:^#{1,6}\s*)?(?:font(?:\s+family)?|typeface|primary\s+font)\s*:\s*(.+)$/i);
    if (inlineDecl) {
      const backtickGroups = [...inlineDecl[1].matchAll(/`([^`]+)`/g)];
      if (backtickGroups.length > 0) {
        for (const group of backtickGroups) {
          const candidate = firstUsefulFontCandidate(group[1]);
          if (candidate) remember(candidate);
        }
      } else {
        const candidate = firstUsefulFontCandidate(inlineDecl[1]);
        if (candidate) remember(candidate);
      }
    }
  }

  for (const line of typoSection.split('\n')) {
    const headingFontDecl = line.match(/^#{1,6}\s*(?:font(?:\s+family)?|typeface)\s*:\s*(.+)$/i);
    if (!headingFontDecl) continue;
    const backtickGroups = [...headingFontDecl[1].matchAll(/`([^`]+)`/g)];
    for (const group of backtickGroups) {
      const candidate = firstUsefulFontCandidate(group[1]);
      if (candidate) remember(candidate);
    }
  }

  // Fall back to the hierarchy table's Font column, which is typically the
  // most reliable structured source in these DESIGN.md files.
  const tables = parseMarkdownTables(typoSection);
  for (const rows of tables) {
    for (const row of rows) {
      if (!row.font) continue;
      for (const candidate of pickFontCandidates(row.font)) {
        remember(candidate);
      }
    }
  }

  // Font sizes via clear size-label pairings
  const sizes = {};
  let m;
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

  for (const rows of tables) {
    for (const row of rows) {
      if (!row.role || !row.size) continue;
      const match = row.size.match(/(\d+(?:\.\d+)?(?:px|rem))/i);
      if (!match) continue;
      const key = canonicalTypeSizeKey(row.role);
      if (!(key in sizes)) {
        sizes[key] = match[1];
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

  for (const rows of tables) {
    for (const row of rows) {
      if (!row.weight) continue;
      const matches = row.weight.match(/\b(\d{3})\b/g) || [];
      for (const match of matches) {
        const w = Number(match);
        if (w >= 100 && w <= 900 && !wSeen.has(w)) {
          weights.push(w);
          wSeen.add(w);
        }
      }
    }
  }
  weights.sort((a, b) => a - b);

  return { families: families.slice(0, 4), sizes, weights };
}

function extractRadii(md) {
  const scope = section(md, '(?:component|layout|radius)') ?? md;
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
  const scope = section(md, '(?:spacing|layout\\s*principles|grid)') ?? md;
  const values = new Set();
  for (const line of scope.split('\n')) {
    if (!/(?:spacing|scale|base unit|padding|margin|gap)/i.test(line)) continue;
    for (const match of line.matchAll(/(\d+(?:\.\d+)?(?:px|rem))/gi)) {
      const value = match[1];
      const num = parseFloat(value);
      if (num >= 2 && num <= 128) values.add(value);
    }
  }
  const sorted = [...values].sort((a, b) => parseFloat(a) - parseFloat(b));
  const out = {};
  sorted.slice(0, 10).forEach((v, i) => {
    out[`space-${i + 1}`] = v;
  });
  return out;
}

function extractShadows(md) {
  const scope = section(md, '(?:depth|elevation|shadow)') ?? md;
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

  if (Object.keys(shadows).length === 0) {
    const lineValueRe = /^\s*[-*]?\s*\*\*([^*]+shadow[^*]*)\*\*\s*\(`?([^`]+?)`?\)/gim;
    while ((m = lineValueRe.exec(scope)) !== null && i < 6) {
      const key = slug(m[1]);
      const value = m[2].trim();
      if (key && value.length >= 10) {
        shadows[key] = value;
        i++;
      }
    }
  }

  if (Object.keys(shadows).length === 0) {
    const fallbackValueRe = /`([^`\n]{10,200})`/g;
    while ((m = fallbackValueRe.exec(scope)) !== null && i < 6) {
      const value = m[1].trim();
      if (/(?:rgba?|hsla?|oklch|oklab)\(/i.test(value) || /\b\d+px\b/.test(value)) {
        shadows[`shadow-${i + 1}`] = value;
        i++;
      }
    }
  }

  return shadows;
}

/**
 * Main parser: DESIGN.md text → token object.
 * If a DIALS map is provided, the brand's dials are attached to the output.
 */
export function parseDesignMd(md, { brand, dials } = {}) {
  const out = {
    brand: brand || 'unknown',
    version: '1.0.0',
    $schema: 'https://designdna.dev/schemas/tokens-v1.json',
    colors: extractColors(md),
    typography: extractFonts(md),
    spacing: extractSpacing(md),
    radius: extractRadii(md),
    shadows: extractShadows(md),
  };
  if (dials) out.dials = dials;
  return out;
}
