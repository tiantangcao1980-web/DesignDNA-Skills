#!/usr/bin/env node
/**
 * Batch-generate JSON/CSS/Tailwind/TS variants for every brand in design-md/.
 * Writes the companion files directly next to each brand's DESIGN.md so the
 * repo showcases the multi-format capability without requiring CLI install.
 *
 * Usage:
 *   node packages/cli/scripts/generate-all-variants.js                 # all brands
 *   node packages/cli/scripts/generate-all-variants.js stripe linear   # selected
 */

import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { parseDesignMd } from '../src/utils/parser.js';
import { toJson } from '../src/generators/json.js';
import { toCss } from '../src/generators/css.js';
import { toTailwind } from '../src/generators/tailwind.js';
import { toTypeScript } from '../src/generators/typescript.js';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..', '..', '..', 'design-md');

async function main() {
  const args = process.argv.slice(2);
  const entries = await readdir(root, { withFileTypes: true });
  const allBrands = entries.filter((e) => e.isDirectory()).map((e) => e.name);
  const targets = args.length > 0 ? args : allBrands;

  let ok = 0;
  let skipped = 0;
  const failed = [];

  for (const brand of targets) {
    const brandDir = resolve(root, brand);
    const mdPath = join(brandDir, 'DESIGN.md');
    try {
      await stat(mdPath);
    } catch {
      skipped++;
      continue;
    }

    try {
      const md = await readFile(mdPath, 'utf8');
      const tokens = parseDesignMd(md, { brand });

      await writeFile(join(brandDir, 'design.json'), toJson(tokens));
      await writeFile(join(brandDir, 'variables.css'), toCss(tokens));
      await writeFile(join(brandDir, 'tailwind.config.js'), toTailwind(tokens));
      await writeFile(join(brandDir, 'tokens.ts'), toTypeScript(tokens));

      const cCount = Object.keys(tokens.colors).length;
      const fCount = tokens.typography.families.length;
      console.log(`  ✓ ${brand.padEnd(16)} ${cCount} colors, ${fCount} fonts`);
      ok++;
    } catch (err) {
      failed.push({ brand, error: err.message });
      console.log(`  ✗ ${brand} — ${err.message}`);
    }
  }

  console.log('');
  console.log(`  ${ok} generated, ${skipped} skipped, ${failed.length} failed`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
