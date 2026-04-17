// Minimal ANSI color logger. Avoids hard dependency on kleur so that the CLI
// works even before `npm install`, making `node bin/designdna.js list` viable
// for local contributors.

const isTTY = process.stdout.isTTY && !process.env.NO_COLOR;

function paint(code, s) {
  return isTTY ? `\x1b[${code}m${s}\x1b[0m` : s;
}

export const c = {
  dim:     (s) => paint(2, s),
  bold:    (s) => paint(1, s),
  red:     (s) => paint(31, s),
  green:   (s) => paint(32, s),
  yellow:  (s) => paint(33, s),
  blue:    (s) => paint(34, s),
  magenta: (s) => paint(35, s),
  cyan:    (s) => paint(36, s),
  gray:    (s) => paint(90, s),
};

export function logInfo(msg)    { console.log(`${c.cyan('ℹ')} ${msg}`); }
export function logSuccess(msg) { console.log(`${c.green('✓')} ${msg}`); }
export function logWarn(msg)    { console.log(`${c.yellow('⚠')} ${msg}`); }
export function logError(msg)   { console.error(`${c.red('✗')} ${msg}`); }
export function logStep(msg)    { console.log(`  ${c.dim('›')} ${msg}`); }
export function logBanner() {
  console.log('');
  console.log(`  ${c.bold('DesignDNA')} ${c.dim('— design systems as AI skills')}`);
  console.log('');
}
