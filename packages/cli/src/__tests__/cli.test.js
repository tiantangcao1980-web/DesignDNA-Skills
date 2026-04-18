import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

test('CLI accepts space-separated long flag values', async () => {
  const outDir = mkdtempSync(join(tmpdir(), 'designdna-cli-'));
  const cli = resolve(process.cwd(), 'packages/cli/bin/designdna.js');

  await execFileAsync(process.execPath, [
    cli,
    'add',
    'notion',
    '--format',
    'all',
    '--out',
    outDir,
  ], {
    cwd: process.cwd(),
  });

  assert.ok(existsSync(join(outDir, 'DESIGN.md')));
  assert.ok(existsSync(join(outDir, 'design.json')));
  assert.ok(existsSync(join(outDir, 'variables.css')));
  assert.ok(existsSync(join(outDir, 'tailwind.config.js')));
  assert.ok(existsSync(join(outDir, 'tokens.ts')));
});
