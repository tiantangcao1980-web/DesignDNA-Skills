import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { runAdd } from '../commands/add.js';

test('runAdd writes JSON tokens with real typography and dials', async () => {
  const outDir = mkdtempSync(join(tmpdir(), 'designdna-add-'));

  await runAdd({
    brand: 'notion',
    flags: {
      format: 'json',
      out: outDir,
    },
  });

  const tokens = JSON.parse(readFileSync(join(outDir, 'design.json'), 'utf8'));
  assert.equal(tokens.brand, 'notion');
  assert.ok(tokens.typography.families.includes('NotionInter'));
  assert.ok(tokens.typography.families.includes('Inter'));
  assert.ok(!tokens.typography.families.includes('Teal'));
  assert.deepEqual(tokens.dials, {
    formality: 5,
    motion: 3,
    density: 3,
    warmth: 8,
    contrast: 4,
  });
});
