// Generator smoke tests — ensures CSS, Tailwind, JSON, TS output is valid.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toJson } from '../generators/json.js';
import { toCss } from '../generators/css.js';
import { toTailwind } from '../generators/tailwind.js';
import { toTypeScript } from '../generators/typescript.js';

const sampleTokens = {
  brand: 'sample',
  version: '1.0.0',
  colors: { primary: '#ff0000', surface: '#ffffff' },
  typography: { families: ['Inter'], sizes: { body: '16px' }, weights: [400, 700] },
  spacing: { 'space-1': '8px', 'space-2': '16px' },
  radius: { 'radius-1': '8px' },
  shadows: { 'shadow-1': '0 2px 4px rgba(0,0,0,0.1)' },
};

test('toJson produces valid JSON', () => {
  const out = toJson(sampleTokens);
  const parsed = JSON.parse(out);
  assert.equal(parsed.brand, 'sample');
  assert.equal(parsed.colors.primary, '#ff0000');
});

test('toCss contains :root block and variables', () => {
  const out = toCss(sampleTokens);
  assert.ok(out.includes(':root {'));
  assert.ok(out.includes('--color-primary: #ff0000'));
  assert.ok(out.includes('--font-family-1:'));
  assert.ok(out.includes('--space-1: 8px'));
});

test('toTailwind emits module.exports config', () => {
  const out = toTailwind(sampleTokens);
  assert.ok(out.includes('module.exports ='));
  assert.ok(out.includes('theme:'));
  assert.ok(out.includes('primary: "#ff0000"'));
});

test('toTypeScript emits a const assertion export', () => {
  const out = toTypeScript(sampleTokens);
  assert.ok(out.includes('export const tokens ='));
  assert.ok(out.includes('as const;'));
  assert.ok(out.includes('export type DesignTokens'));
});
