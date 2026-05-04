// `designdna install --ide=<id>` — copy the full DesignDNA skill into the
// target AI IDE's conventional location.

import { readFile, writeFile, mkdir, stat, readdir, cp } from 'node:fs/promises';
import { resolve, join, dirname } from 'node:path';
import { homedir } from 'node:os';
import { resolveSkillRoot, resolveRepoRoot } from '../utils/paths.js';
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
  'codex-full': {
    target: '~/.codex/skills/designdna',
    label: 'Codex / OpenAI (full repo skill)',
    mode: 'codex-full',
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

  if (spec.mode === 'codex-full') {
    await installCodexFull(spec);
    return;
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

async function installCodexFull(spec) {
  const skillRoot = resolveSkillRoot();
  const repoRoot = resolveRepoRoot();
  const targetPath = expandTarget(spec.target);
  const repoTarget = join(targetPath, 'repo');

  await copyDirectoryContents(skillRoot, targetPath);
  await mkdir(repoTarget, { recursive: true });

  for (const entry of [
    'design-md',
    'packages',
    'playground',
    'showcase',
    'assets',
    '.github',
    'README.md',
    'CONTRIBUTING.md',
    'LICENSE',
    'index.html',
    'playground.html',
    '.gitignore',
  ]) {
    const sourcePath = resolve(repoRoot, entry);
    try {
      await stat(sourcePath);
      await cp(sourcePath, join(repoTarget, entry), {
        recursive: true,
        force: true,
        filter: (src) => !shouldSkipCopy(src),
      });
    } catch {
      // Skip missing optional entries.
    }
  }

  logBanner();
  logSuccess(`Installed DesignDNA skill for ${c.bold(spec.label)}`);
  console.log(`  ${c.dim('→')} ${targetPath}`);
  console.log(`  ${c.dim('→')} ${repoTarget} ${c.dim('(repo mirror)')}`);
  console.log('');
  logInfo('Restart your AI editor to pick up the new skill.');
}

async function copyDirectoryContents(sourceDir, targetDir) {
  await mkdir(targetDir, { recursive: true });
  const entries = await readdir(sourceDir, { withFileTypes: true });
  for (const entry of entries) {
    const sourcePath = resolve(sourceDir, entry.name);
    const targetPath = join(targetDir, entry.name);
    await cp(sourcePath, targetPath, {
      recursive: true,
      force: true,
      filter: (src) => !shouldSkipCopy(src),
    });
  }
}

function shouldSkipCopy(path) {
  const name = path.split('/').pop();
  return ['.DS_Store', '.git', '.omx', '_site', 'node_modules'].includes(name);
}

function expandTarget(template) {
  let out = template.replace(/\$\{cwd\}/g, process.cwd());
  if (out.startsWith('~')) {
    out = join(homedir(), out.slice(1));
  }
  return out;
}
