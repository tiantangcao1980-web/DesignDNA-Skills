#!/usr/bin/env node
/**
 * DesignDNA CLI entry point.
 *
 * Usage:
 *   npx designdna <command> [options]
 *
 * Commands:
 *   add <brand>      Install a brand design system into the current project
 *   init             Interactive setup: pick a brand and install
 *   list             List all available brands
 *   preview <brand>  Open the brand's preview catalog in the browser
 *   install          Install the DesignDNA skill into your AI IDE
 *   help             Show help
 */

import { runAdd } from '../src/commands/add.js';
import { runInit } from '../src/commands/init.js';
import { runList } from '../src/commands/list.js';
import { runPreview } from '../src/commands/preview.js';
import { runInstallSkill } from '../src/commands/install.js';
import { runCraft } from '../src/commands/craft.js';
import { runResources } from '../src/commands/resources.js';
import { printHelp } from '../src/commands/help.js';
import { logError } from '../src/utils/log.js';

const [, , rawCommand, ...rawArgs] = process.argv;

// Normalize flags into { _: [...], flags: {...} }
function parseArgs(argv) {
  const out = { _: [], flags: {} };
  for (const arg of argv) {
    if (arg.startsWith('--')) {
      const eqIdx = arg.indexOf('=');
      if (eqIdx >= 0) {
        out.flags[arg.slice(2, eqIdx)] = arg.slice(eqIdx + 1);
      } else {
        out.flags[arg.slice(2)] = true;
      }
    } else if (arg.startsWith('-') && arg.length > 1) {
      out.flags[arg.slice(1)] = true;
    } else {
      out._.push(arg);
    }
  }
  return out;
}

const { _: positional, flags } = parseArgs(rawArgs);

async function main() {
  const command = rawCommand || 'help';

  switch (command) {
    case 'add':
      await runAdd({ brand: positional[0], flags });
      break;
    case 'init':
      await runInit({ flags });
      break;
    case 'list':
    case 'ls':
      await runList({ flags });
      break;
    case 'preview':
      await runPreview({ brand: positional[0], flags });
      break;
    case 'install':
      await runInstallSkill({ flags });
      break;
    case 'craft':
      await runCraft({ flags });
      break;
    case 'resources':
    case 'components':
      await runResources({ positional, flags });
      break;
    case 'help':
    case '--help':
    case '-h':
      printHelp();
      break;
    case 'version':
    case '--version':
    case '-v': {
      const { readFile } = await import('node:fs/promises');
      const { fileURLToPath } = await import('node:url');
      const { dirname, resolve } = await import('node:path');
      const here = dirname(fileURLToPath(import.meta.url));
      const pkg = JSON.parse(await readFile(resolve(here, '..', 'package.json'), 'utf8'));
      console.log(pkg.version);
      break;
    }
    default:
      logError(`Unknown command: ${command}`);
      printHelp();
      process.exit(1);
  }
}

main().catch((err) => {
  logError(err?.message || String(err));
  if (process.env.DESIGNDNA_DEBUG) {
    console.error(err);
  }
  process.exit(1);
});
