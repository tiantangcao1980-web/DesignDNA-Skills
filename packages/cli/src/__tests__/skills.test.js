import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';

const execFileAsync = promisify(execFile);
const repoRoot = resolve(fileURLToPath(import.meta.url), '..', '..', '..', '..', '..');
const cli = resolve(repoRoot, 'packages/cli/bin/designdna.js');

test('skills install supports windsurf and keeps embedded installs idempotent', async () => {
  const cwd = mkdtempSync(join(tmpdir(), 'designdna-skills-windsurf-'));

  await execFileAsync(process.execPath, [
    cli,
    'skills',
    'install',
    'fluent-ui',
    '--ide',
    'windsurf',
  ], { cwd });

  await execFileAsync(process.execPath, [
    cli,
    'skills',
    'install',
    'fluent-ui',
    '--ide',
    'windsurf',
  ], { cwd });

  const rulesPath = join(cwd, '.windsurfrules');
  assert.ok(existsSync(rulesPath));

  const text = readFileSync(rulesPath, 'utf8');
  const markerCount = (text.match(/<!-- designdna skill: fluent-ui -->/g) || []).length;
  assert.equal(markerCount, 1);
  assert.match(text, /<!-- \/designdna skill: fluent-ui -->/);
});

test('skills install supports codex-full target directory', async () => {
  const cwd = mkdtempSync(join(tmpdir(), 'designdna-skills-codexfull-cwd-'));
  const home = mkdtempSync(join(tmpdir(), 'designdna-skills-codexfull-home-'));

  await execFileAsync(process.execPath, [
    cli,
    'skills',
    'install',
    'fluent-ui',
    '--ide',
    'codex-full',
  ], {
    cwd,
    env: {
      ...process.env,
      HOME: home,
    },
  });

  assert.ok(existsSync(join(home, '.codex', 'skills', 'fluent-ui', 'SKILL.md')));
});

test('skills list and ai-visual stack expose gpt-image-2', async () => {
  const cwd = mkdtempSync(join(tmpdir(), 'designdna-skills-ai-visual-'));

  const { stdout } = await execFileAsync(process.execPath, [
    cli,
    'skills',
    'list',
    '--json',
  ], { cwd });

  const json = JSON.parse(stdout);
  assert.ok(json.skills.includes('gpt-image-2'));
  assert.equal(json.count, json.skills.length);

  await execFileAsync(process.execPath, [
    cli,
    'skills',
    'install-stack',
    'ai-visual',
    '--ide',
    'generic',
  ], { cwd });

  assert.ok(existsSync(join(cwd, '.gpt-image-2-skill.md')));
});
