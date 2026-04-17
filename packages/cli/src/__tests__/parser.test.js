// Parser smoke tests — run with `node --test`.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseDesignMd } from '../utils/parser.js';

test('parseDesignMd extracts colors from a bold-labeled list', () => {
  const md = `
# DESIGN.md

## 2. Color Palette & Roles

- **Stripe Purple**: \`#533afd\` — primary accent
- **Deep Navy** (\`#061b31\`) — headline color
- **Pure White**: \`#FFFFFF\`
`;
  const tokens = parseDesignMd(md, { brand: 'test' });
  assert.equal(tokens.brand, 'test');
  assert.equal(tokens.colors['stripe-purple'], '#533afd');
  assert.equal(tokens.colors['deep-navy'], '#061b31');
  assert.equal(tokens.colors['pure-white'], '#ffffff');
});

test('parseDesignMd extracts fonts from typography section', () => {
  const md = `
## 3. Typography Rules

Primary font: Inter, sans-serif.
Display typeface: **Söhne** at weight 300.

Headlines use **Inter Display** for large sizes.
`;
  const tokens = parseDesignMd(md, { brand: 'x' });
  assert.ok(tokens.typography.families.length >= 1);
  assert.ok(tokens.typography.families.some((f) => f.toLowerCase().includes('inter')));
});

test('parseDesignMd ignores obviously-UI strings as fonts', () => {
  const md = `
## 3. Typography

Use **Sign in** as the button label.
Try **Get started** for the CTA.
`;
  const tokens = parseDesignMd(md, { brand: 'x' });
  // These should not be picked up as font families
  assert.ok(!tokens.typography.families.includes('Sign in'));
  assert.ok(!tokens.typography.families.includes('Get started'));
});

test('parseDesignMd extracts border radius', () => {
  const md = `
## 5. Layout Principles

- border-radius: 8px for cards
- border-radius: 4px for buttons
`;
  const tokens = parseDesignMd(md, { brand: 'x' });
  assert.ok(Object.values(tokens.radius).includes('8px'));
  assert.ok(Object.values(tokens.radius).includes('4px'));
});

test('parseDesignMd handles empty input without crashing', () => {
  const tokens = parseDesignMd('', { brand: 'empty' });
  assert.equal(tokens.brand, 'empty');
  assert.deepEqual(tokens.colors, {});
});
