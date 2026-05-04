// `designdna resources` — browse the component library catalog.
//
// Subcommands:
//   (none)                         show index (ecosystems + platforms)
//   <ecosystem>                    print an ecosystem file (tencent / alibaba / jd / ...)
//   platform <name>                print a platform file (web / mobile / miniprogram / ...)
//   deprecated                     print the deprecated list
//   list                           machine-readable JSON index

import { readFile, readdir } from 'node:fs/promises';
import { resolve, join, basename } from 'node:path';
import { resolveSkillRoot } from '../utils/paths.js';
import { c, logBanner, logError, logInfo } from '../utils/log.js';

export async function runResources({ positional = [], flags = {} } = {}) {
  const [sub, name] = positional;
  const root = resolve(resolveSkillRoot(), 'components');

  try {
    await readdir(root);
  } catch {
    logError(`components/ catalog not found at ${root}`);
    logInfo('Make sure you have the full DesignDNA-Skills repo checked out.');
    process.exit(1);
  }

  // No args → index
  if (!sub) {
    return showIndex(root);
  }

  // Subcommands
  if (sub === 'deprecated') {
    return printFile(join(root, 'DEPRECATED.md'));
  }

  if (sub === 'list') {
    return printJsonIndex(root, flags);
  }

  if (sub === 'platform' || sub === 'p') {
    if (!name) {
      logError('Usage: designdna resources platform <web|mobile|miniprogram|desktop|cross-platform>');
      process.exit(1);
    }
    const file = join(root, 'by-platform', `${name}.md`);
    return printFile(file);
  }

  // ecosystem shortcut
  const ecoFile = join(root, 'by-ecosystem', `${sub}.md`);
  try {
    await readFile(ecoFile, 'utf8');
    return printFile(ecoFile);
  } catch {
    logError(`Unknown resource: "${sub}". Run \`designdna resources\` for the index.`);
    process.exit(1);
  }
}

async function showIndex(root) {
  logBanner();
  console.log(`  ${c.bold('Component Library Catalog')} ${c.dim('(2026-05 audit)')}\n`);

  const ecoDir = join(root, 'by-ecosystem');
  const platDir = join(root, 'by-platform');

  const ecos = await safeListMd(ecoDir);
  const plats = await safeListMd(platDir);

  console.log(`  ${c.bold('By ecosystem')}`);
  for (const name of ecos) {
    console.log(`    ${c.cyan('designdna resources')} ${name}`);
  }
  console.log('');
  console.log(`  ${c.bold('By platform')}`);
  for (const name of plats) {
    console.log(`    ${c.cyan('designdna resources platform')} ${name}`);
  }
  console.log('');
  console.log(`  ${c.bold('Other')}`);
  console.log(`    ${c.cyan('designdna resources deprecated')}  ${c.dim('— libraries to avoid')}`);
  console.log(`    ${c.cyan('designdna resources list --json')}  ${c.dim('— machine-readable catalog')}`);
  console.log('');
  console.log(`  ${c.dim('Full browsable index:')} designdna/components/INDEX.md`);
  console.log(`  ${c.dim('Open-source skill learnings:')} designdna/OPEN-SOURCE-LEARNINGS.md`);
  console.log('');
}

async function safeListMd(dir) {
  try {
    const entries = await readdir(dir);
    return entries
      .filter((f) => f.endsWith('.md'))
      .map((f) => basename(f, '.md'))
      .sort();
  } catch {
    return [];
  }
}

async function printFile(path) {
  try {
    const text = await readFile(path, 'utf8');
    process.stdout.write(text);
    if (!text.endsWith('\n')) process.stdout.write('\n');
  } catch {
    logError(`File not found: ${path}`);
    process.exit(1);
  }
}

async function printJsonIndex(root, flags) {
  const ecos = await safeListMd(join(root, 'by-ecosystem'));
  const plats = await safeListMd(join(root, 'by-platform'));
  const out = {
    auditDate: '2026-05',
    ecosystems: ecos,
    platforms: plats,
    deprecatedListUrl: 'components/DEPRECATED.md',
    indexUrl: 'components/INDEX.md',
    openSourceLearningsUrl: 'designdna/OPEN-SOURCE-LEARNINGS.md',
  };
  console.log(JSON.stringify(out, null, 2));
}
