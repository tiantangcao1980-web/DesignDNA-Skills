import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';

import { parseDesignMd } from '../utils/parser.js';
import { toJson } from '../generators/json.js';
import { toCss } from '../generators/css.js';
import { toTailwind } from '../generators/tailwind.js';
import { toTypeScript } from '../generators/typescript.js';
import { DIALS } from '../data/dials.js';

const BRAND_ROOT = resolve(process.cwd(), 'design-md');
const SUSPICIOUS_FONT_NAMES = new Set([
  'teal',
  'green',
  'orange',
  'pink',
  'purple',
  'ruby',
  'magenta',
  'white',
  'primary',
  'secondary',
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
]);

for (const brand of readdirSync(BRAND_ROOT).filter((entry) => {
  const full = join(BRAND_ROOT, entry);
  return statSync(full).isDirectory();
})) {
  test(`generated artifacts stay in sync for ${brand}`, () => {
    const dir = join(BRAND_ROOT, brand);
    const md = readFileSync(join(dir, 'DESIGN.md'), 'utf8');
    const parsed = parseDesignMd(md, { brand, dials: DIALS[brand] });

    assert.ok(Object.keys(parsed.colors).length >= 2, `${brand}: expected at least 2 colors`);
    assert.ok(parsed.typography.families.length >= 1, `${brand}: expected at least 1 font family`);
    assert.ok(parsed.typography.families.length <= 4, `${brand}: expected <= 4 font families`);

    for (const family of parsed.typography.families) {
      assert.ok(
        !SUSPICIOUS_FONT_NAMES.has(family.toLowerCase()),
        `${brand}: suspicious font family "${family}"`
      );
    }

    for (const value of Object.values(parsed.spacing)) {
      const numeric = parseFloat(value);
      assert.ok(numeric >= 2 && numeric <= 128, `${brand}: suspicious spacing value ${value}`);
    }

    assert.equal(readFileSync(join(dir, 'design.json'), 'utf8'), toJson(parsed), `${brand}: design.json out of sync`);
    assert.equal(readFileSync(join(dir, 'variables.css'), 'utf8'), toCss(parsed), `${brand}: variables.css out of sync`);
    assert.equal(readFileSync(join(dir, 'tailwind.config.js'), 'utf8'), toTailwind(parsed), `${brand}: tailwind.config.js out of sync`);
    assert.equal(readFileSync(join(dir, 'tokens.ts'), 'utf8'), toTypeScript(parsed), `${brand}: tokens.ts out of sync`);
  });
}
