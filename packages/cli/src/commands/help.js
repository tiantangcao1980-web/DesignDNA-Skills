// Help screen for the DesignDNA CLI.

import { c } from '../utils/log.js';

export function printHelp() {
  console.log('');
  console.log(`  ${c.bold('DesignDNA')} ${c.dim('— design systems as AI skills')}`);
  console.log('');
  console.log(`  ${c.dim('Install a brand design system into your project in one command.')}`);
  console.log('');
  console.log(`  ${c.bold('Usage')}`);
  console.log(`    npx designdna ${c.cyan('<command>')} [options]`);
  console.log('');
  console.log(`  ${c.bold('Commands')}`);
  console.log(`    ${c.cyan('add')} ${c.dim('<brand>')}         Install a brand design system`);
  console.log(`    ${c.cyan('init')}                 Interactive picker`);
  console.log(`    ${c.cyan('list')}                 List all 58 available brands`);
  console.log(`    ${c.cyan('preview')} ${c.dim('<brand>')}     Open brand's preview catalog in browser`);
  console.log(`    ${c.cyan('install')}              Install the DesignDNA skill into your AI IDE`);
  console.log(`    ${c.cyan('version')}              Print version`);
  console.log(`    ${c.cyan('help')}                 Show this help`);
  console.log('');
  console.log(`  ${c.bold('Examples')}`);
  console.log(`    ${c.dim('# Install Stripe DESIGN.md only')}`);
  console.log(`    $ npx designdna add stripe`);
  console.log('');
  console.log(`    ${c.dim('# Install Stripe with Tailwind preset')}`);
  console.log(`    $ npx designdna add stripe --format=md,tailwind`);
  console.log('');
  console.log(`    ${c.dim('# Install all formats for Linear')}`);
  console.log(`    $ npx designdna add linear --format=all`);
  console.log('');
  console.log(`    ${c.dim('# Install skill into Cursor')}`);
  console.log(`    $ npx designdna install --ide=cursor`);
  console.log('');
  console.log(`    ${c.dim('# List brands as JSON')}`);
  console.log(`    $ npx designdna list --json`);
  console.log('');
  console.log(`  ${c.bold('Formats')} ${c.dim('(--format=...)')}`);
  console.log(`    md        ${c.dim('DESIGN.md — human/AI readable spec')} ${c.green('(default)')}`);
  console.log(`    json      ${c.dim('design.json — machine-readable tokens')}`);
  console.log(`    css       ${c.dim('variables.css — CSS custom properties')}`);
  console.log(`    tailwind  ${c.dim('tailwind.config.js — Tailwind preset')}`);
  console.log(`    ts        ${c.dim('tokens.ts — TypeScript tokens')}`);
  console.log(`    all       ${c.dim('everything above')}`);
  console.log('');
  console.log(`  ${c.bold('Learn more')}`);
  console.log(`    https://github.com/tiantangcao1980-web/DesignDNA-Skills`);
  console.log('');
}
