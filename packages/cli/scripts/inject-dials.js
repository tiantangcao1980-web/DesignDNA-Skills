#!/usr/bin/env node
/**
 * Inject the `dials` field into every design.json file.
 * Re-runs safely: overwrites existing dials entries with authoritative values.
 */

import { readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { DIALS } from '../src/data/dials.js';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..', '..', '..', 'design-md');

let ok = 0;
let missing = [];

for (const [brand, dials] of Object.entries(DIALS)) {
  const jsonPath = join(root, brand, 'design.json');
  try {
    const text = await readFile(jsonPath, 'utf8');
    const obj = JSON.parse(text);
    obj.dials = dials;
    await writeFile(jsonPath, JSON.stringify(obj, null, 2) + '\n');
    console.log(`  ✓ ${brand.padEnd(16)} ${JSON.stringify(dials)}`);
    ok++;
  } catch (err) {
    missing.push(brand);
  }
}

console.log('');
console.log(`  ${ok} brands updated, ${missing.length} missing json`);
if (missing.length) {
  console.log(`  Missing: ${missing.join(', ')}`);
}
