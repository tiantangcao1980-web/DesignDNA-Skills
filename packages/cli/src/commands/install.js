// `designdna install --ide=<id>` — copy the full DesignDNA skill into the
// target AI IDE's conventional location.

import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { resolve, join, dirname } from 'node:path';
import { homedir } from 'node:os';
import { resolveSkillRoot } from '../utils/paths.js';
import { c, logSuccess, logError, logBanner, logInfo } from '../utils/log.js';

/**
 * Each IDE describes:
 *   source   — which file in designdna/ to install
 *   target   — where it goes (supports ~ and ${cwd})
 *   mode     — "file" (single file) or "dir-copy" (future)
 */
const IDES = {
  'claude-code': {
    source: 'SKILL.md',
    target: '~/.claude/skills/designdna/SKILL.md',
    label: 'Claude Code',
  },
  'cursor': {
    source: '.cursorrules',
    target: '${cwd}/.cursorrules',
    label: 'Cursor',
  },
  'windsurf': {
    source: '.cursorrules',
    target: '${cwd}/.windsurfrules',
    label: 'Windsurf',
  },
  'codex': {
    source: 'AGENTS.md',
    target: '${cwd}/AGENTS.md',
    label: 'Codex / OpenAI',
  },
  'generic': {
    source: 'rules.md',
    target: '${cwd}/rules.md',
    label: 'Generic agent',
  },
};

export async function runInstallSkill({ flags = {} } = {}) {
  const ide = flags.ide || 'claude-code';
  const spec = IDES[ide];
  if (!spec) {
    logError(`Unknown IDE: ${ide}`);
    logInfo(`Choose one of: ${Object.keys(IDES).join(', ')}`);
    process.exit(1);
  }

  const skillRoot = resolveSkillRoot();
  const sourcePath = resolve(skillRoot, spec.source);
  let content;
  try {
    content = await readFile(sourcePath, 'utf8');
  } catch {
    logError(`Skill source not found: ${sourcePath}`);
    process.exit(1);
  }

  const targetPath = expandTarget(spec.target);
  await mkdir(dirname(targetPath), { recursive: true });
  await writeFile(targetPath, content);

  logBanner();
  logSuccess(`Installed DesignDNA skill for ${c.bold(spec.label)}`);
  console.log(`  ${c.dim('→')} ${targetPath}`);
  console.log('');
  logInfo('Restart your AI editor to pick up the new skill.');
}

function expandTarget(template) {
  let out = template.replace(/\$\{cwd\}/g, process.cwd());
  if (out.startsWith('~')) {
    out = join(homedir(), out.slice(1));
  }
  return out;
}
