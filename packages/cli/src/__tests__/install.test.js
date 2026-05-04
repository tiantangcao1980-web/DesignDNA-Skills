import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { runInstallSkill } from '../commands/install.js';

test('runInstallSkill installs full Codex package into ~/.codex/skills/designdna', async () => {
  const home = mkdtempSync(join(tmpdir(), 'designdna-home-'));
  const previousHome = process.env.HOME;
  process.env.HOME = home;

  try {
    await runInstallSkill({ flags: { ide: 'codex-full' } });

    const base = join(home, '.codex', 'skills', 'designdna');
    assert.ok(existsSync(join(base, 'SKILL.md')));
    assert.ok(existsSync(join(base, 'repo', 'design-md', 'notion', 'DESIGN.md')));
    assert.ok(existsSync(join(base, 'repo', 'packages', 'cli', 'scripts', 'generate-all-variants.js')));
    assert.ok(existsSync(join(base, 'repo', 'playground', 'catalog-data.js')));
    assert.ok(existsSync(join(base, 'repo', '.github', 'workflows', 'quality.yml')));
    assert.ok(!existsSync(join(base, 'repo', '_site')));
    assert.ok(!existsSync(join(base, 'repo', '.omx')));
  } finally {
    if (previousHome === undefined) {
      delete process.env.HOME;
    } else {
      process.env.HOME = previousHome;
    }
  }
});
