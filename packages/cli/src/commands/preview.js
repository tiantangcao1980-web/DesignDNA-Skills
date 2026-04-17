// `designdna preview <brand>` — open brand's preview.html in default browser.

import { resolve } from 'node:path';
import { stat } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { resolveDesignMdRoot } from '../utils/paths.js';
import { c, logError, logSuccess } from '../utils/log.js';

export async function runPreview({ brand, flags = {} } = {}) {
  if (!brand) {
    logError('Brand name required. Example: npx designdna preview stripe');
    process.exit(1);
  }

  const root = resolveDesignMdRoot();
  const variant = flags.dark ? 'preview-dark.html' : 'preview.html';
  const filePath = resolve(root, brand, variant);

  try {
    await stat(filePath);
  } catch {
    logError(`Preview not found: ${filePath}`);
    process.exit(1);
  }

  const opener = process.platform === 'darwin' ? 'open'
              : process.platform === 'win32'  ? 'start'
              : 'xdg-open';

  spawn(opener, [filePath], { detached: true, stdio: 'ignore' }).unref();
  logSuccess(`Opening ${c.bold(brand)} preview ${flags.dark ? '(dark)' : ''}`);
}
