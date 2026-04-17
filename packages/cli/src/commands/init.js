// `designdna init` — interactive setup.
// Without `prompts` installed (pre-install dev mode), falls back to
// reading stdin line-by-line so the command still works.

import { readdir } from 'node:fs/promises';
import { createInterface } from 'node:readline';
import { resolveDesignMdRoot } from '../utils/paths.js';
import { runAdd } from './add.js';
import { c, logBanner, logInfo } from '../utils/log.js';

export async function runInit({ flags = {} } = {}) {
  const root = resolveDesignMdRoot();
  const entries = await readdir(root, { withFileTypes: true });
  const brands = entries.filter((e) => e.isDirectory()).map((e) => e.name).sort();

  logBanner();
  console.log(`  ${c.bold('Interactive setup')}\n`);

  const brand = await selectFrom(brands, 'Which brand?');
  const formatChoices = ['md', 'md+css', 'md+tailwind', 'md+json', 'all'];
  const formatKey = await selectFrom(formatChoices, 'Which output formats?');

  const formatMap = {
    'md': 'md',
    'md+css': 'md,css',
    'md+tailwind': 'md,tailwind',
    'md+json': 'md,json',
    'all': 'all',
  };

  console.log('');
  await runAdd({ brand, flags: { format: formatMap[formatKey] || 'md' } });

  logInfo(`Consider running: npx designdna install --ide=claude-code`);
}

async function selectFrom(options, label) {
  console.log(`  ${c.bold(label)}`);
  options.forEach((opt, i) => {
    console.log(`    ${c.dim(String(i + 1).padStart(2))}.  ${opt}`);
  });

  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const answer = await new Promise((res) => rl.question(`\n  › `, res));
  rl.close();

  const trimmed = answer.trim();
  if (/^\d+$/.test(trimmed)) {
    const idx = parseInt(trimmed, 10) - 1;
    if (idx >= 0 && idx < options.length) return options[idx];
  }
  // Allow free-text matches too
  const match = options.find((o) => o.toLowerCase() === trimmed.toLowerCase());
  if (match) return match;

  throw new Error(`Invalid selection: ${trimmed}`);
}
