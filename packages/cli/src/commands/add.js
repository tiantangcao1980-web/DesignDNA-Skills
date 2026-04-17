// `designdna add <brand>` — install a brand design system into the current
// project. Copies DESIGN.md + optionally generates companion formats
// (json / css / tailwind / ts).

import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { resolveDesignMdRoot, joinCwd } from '../utils/paths.js';
import { parseDesignMd } from '../utils/parser.js';
import { toJson } from '../generators/json.js';
import { toCss } from '../generators/css.js';
import { toTailwind } from '../generators/tailwind.js';
import { toTypeScript } from '../generators/typescript.js';
import { c, logSuccess, logError, logStep, logBanner, logInfo } from '../utils/log.js';

const FORMAT_ORDER = ['md', 'json', 'css', 'tailwind', 'ts'];

export async function runAdd({ brand, flags = {} } = {}) {
  if (!brand) {
    logError('Brand name required. Example: npx designdna add stripe');
    logInfo('Run `npx designdna list` to see available brands.');
    process.exit(1);
  }

  const root = resolveDesignMdRoot();
  const brandDir = resolve(root, brand);

  try {
    const s = await stat(brandDir);
    if (!s.isDirectory()) throw new Error('not a directory');
  } catch {
    logError(`Brand "${brand}" not found in ${root}`);
    logInfo('Run `npx designdna list` to see available brands.');
    process.exit(1);
  }

  const mdPath = join(brandDir, 'DESIGN.md');
  let md;
  try {
    md = await readFile(mdPath, 'utf8');
  } catch {
    logError(`No DESIGN.md found for "${brand}" at ${mdPath}`);
    process.exit(1);
  }

  logBanner();
  console.log(`  Installing ${c.bold(brand)} design system\n`);

  // Decide output formats.
  const requestedFormats = parseFormats(flags.format);
  const outDir = flags.out ? joinCwd(flags.out) : process.cwd();
  await mkdir(outDir, { recursive: true });

  // Parse tokens once — reused across format generators.
  const tokens = parseDesignMd(md, { brand });
  const tokenSummary = summarizeTokens(tokens);

  // Always copy DESIGN.md — it's the skill agents read.
  if (requestedFormats.includes('md')) {
    await writeFile(join(outDir, 'DESIGN.md'), md);
    logSuccess(`DESIGN.md ${c.dim('(' + byteSize(md) + ')')}`);
  }

  if (requestedFormats.includes('json')) {
    const file = join(outDir, 'design.json');
    await writeFile(file, toJson(tokens));
    logSuccess(`design.json ${c.dim(tokenSummary)}`);
  }

  if (requestedFormats.includes('css')) {
    const file = join(outDir, 'variables.css');
    await writeFile(file, toCss(tokens));
    logSuccess(`variables.css ${c.dim(tokenSummary)}`);
  }

  if (requestedFormats.includes('tailwind')) {
    const file = join(outDir, 'tailwind.config.js');
    await writeFile(file, toTailwind(tokens));
    logSuccess(`tailwind.config.js ${c.dim(tokenSummary)}`);
  }

  if (requestedFormats.includes('ts')) {
    const file = join(outDir, 'tokens.ts');
    await writeFile(file, toTypeScript(tokens));
    logSuccess(`tokens.ts ${c.dim(tokenSummary)}`);
  }

  console.log('');
  logStep(`${c.dim('Next:')} tell your AI agent — ${c.cyan('"Use DESIGN.md to build the UI"')}`);
  console.log('');
}

function parseFormats(flag) {
  if (!flag || flag === true) return ['md'];
  if (flag === 'all') return FORMAT_ORDER;
  const list = String(flag)
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  const valid = list.filter((f) => FORMAT_ORDER.includes(f));
  return valid.length > 0 ? Array.from(new Set(['md', ...valid])) : ['md'];
}

function summarizeTokens(tokens) {
  const c = Object.keys(tokens.colors || {}).length;
  const f = (tokens.typography?.families || []).length;
  const s = Object.keys(tokens.spacing || {}).length;
  const r = Object.keys(tokens.radius || {}).length;
  return `${c} colors, ${f} fonts, ${s} spacing, ${r} radii`;
}

function byteSize(s) {
  const bytes = Buffer.byteLength(s, 'utf8');
  if (bytes < 1024) return bytes + ' B';
  return (bytes / 1024).toFixed(1) + ' KB';
}
