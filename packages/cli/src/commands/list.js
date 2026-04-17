// `designdna list` — enumerate all available brands in the repo.

import { readdir } from 'node:fs/promises';
import { resolveDesignMdRoot } from '../utils/paths.js';
import { c, logBanner } from '../utils/log.js';

export async function runList({ flags = {} } = {}) {
  const root = resolveDesignMdRoot();
  let entries;
  try {
    entries = await readdir(root, { withFileTypes: true });
  } catch (err) {
    throw new Error(
      `Could not read design-md directory at ${root}. ` +
      `Set DESIGNDNA_ROOT=/path/to/design-md to override.`
    );
  }

  const brands = entries
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();

  if (flags.json) {
    console.log(JSON.stringify({ total: brands.length, brands }, null, 2));
    return;
  }

  logBanner();
  console.log(`  ${c.bold(brands.length)} brand design systems available:\n`);

  const cols = 4;
  const maxLen = brands.reduce((m, b) => Math.max(m, b.length), 0) + 2;
  const rows = Math.ceil(brands.length / cols);
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let col = 0; col < cols; col++) {
      const brand = brands[col * rows + r];
      if (brand) row.push(brand.padEnd(maxLen));
    }
    console.log('  ' + row.join(''));
  }
  console.log('');
  console.log(`  ${c.dim('Install:')} npx designdna add ${c.cyan('<brand>')}`);
  console.log(`  ${c.dim('Preview:')} npx designdna preview ${c.cyan('<brand>')}\n`);
}
