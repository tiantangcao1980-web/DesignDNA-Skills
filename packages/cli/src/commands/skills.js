// `designdna skills` — browse and install library sub-skills.
//
// Subcommands:
//   (none)                      show the skills index
//   list                        list all sub-skills (also supports --json)
//   show <name>                 print a skill's SKILL.md to stdout
//   install <name>              copy skill to ~/.claude/skills/ (or --ide=cursor|codex)
//   install-stack <stack>       install a preset combination (taro-react|taro-vue|uniapp|react|vue)

import { readFile, writeFile, readdir, mkdir, stat } from 'node:fs/promises';
import { resolve, join, dirname } from 'node:path';
import { homedir } from 'node:os';
import { resolveSkillRoot } from '../utils/paths.js';
import { c, logBanner, logSuccess, logError, logInfo } from '../utils/log.js';

const STACKS = {
  // Taro + NutUI stacks
  'taro-react':  ['taro', 'nutui-react', 'nutui-icons'],
  'taro-vue':    ['taro', 'nutui-vue', 'nutui-icons'],
  'uniapp':      ['uniapp', 'nutui-uniapp', 'nutui-icons'],
  'legacy-taro': ['taro', 'taro-ui'],

  // React ecosystems
  'react-enterprise': ['ant-design', 'ant-design-pro', 'antv'],
  'react-modern':     ['shadcn-ui', 'radix-ui', 'tailwindcss'],
  'react-material':   ['mui-material', 'mui-x'],
  'react-mobile':     ['nutui-react', 'nutui-icons', 'ant-design-mobile'],
  'react-ai-chat':    ['ant-design-x', 'shadcn-ui'],

  // Vue ecosystems
  'vue-enterprise':   ['ant-design-vue', 'antv'],
  'vue-modern':       ['naive-ui', 'tailwindcss'],
  'vue-element':      ['element-plus', 'antv'],
  'vue-mobile':       ['nutui-vue', 'nutui-icons'],

  // TDesign multi-platform
  'tdesign-stack':      ['tdesign-vue-next', 'tdesign-react', 'tdesign-mobile'],
  'tdesign-full':       ['tdesign-vue-next', 'tdesign-react', 'tdesign-miniprogram', 'tdesign-mobile', 'tdesign-flutter', 'tdesign-chat'],

  // Microsoft
  'microsoft':   ['fluent-ui'],

  // Flutter
  'flutter':     ['flutter-material', 'tdesign-flutter'],

  // Android / iOS native
  'android-native': ['material-components-android'],
  'ios-native':     ['apple-hig'],

  // Web marketing / animation
  'video':         ['remotion', 'react-bits', 'tailwindcss'],
  'creative':      ['react-bits', 'shadcn-ui', 'tailwindcss'],

  // MiniProgram native
  'miniprogram-wechat':    ['vant-weapp', 'tdesign-miniprogram'],
  'miniprogram-multi':     ['taro', 'nutui-react', 'nutui-icons'],

  // Legacy shortcuts
  'react':       ['nutui-react', 'nutui-icons'],
  'vue':         ['nutui-vue', 'nutui-icons'],
};

const IDE_TARGETS = {
  'claude-code': (name) => join(homedir(), '.claude', 'skills', name, 'SKILL.md'),
  'cursor':      () => join(process.cwd(), '.cursorrules'),
  'codex':       () => join(process.cwd(), 'AGENTS.md'),
  'generic':     (name) => join(process.cwd(), `.${name}-skill.md`),
};

export async function runSkills({ positional = [], flags = {} } = {}) {
  const [sub, ...rest] = positional;
  const root = resolve(resolveSkillRoot(), 'skills');

  try {
    await readdir(root);
  } catch {
    logError(`skills/ directory not found at ${root}`);
    process.exit(1);
  }

  const availableSkills = await listSkills(root);

  if (!sub || sub === 'list' || sub === 'ls') {
    return showList(root, availableSkills, flags);
  }

  if (sub === 'show' || sub === 'cat') {
    const name = rest[0];
    if (!name) { logError('Usage: designdna skills show <name>'); process.exit(1); }
    return printSkill(root, name);
  }

  if (sub === 'install') {
    const name = rest[0];
    if (!name) { logError('Usage: designdna skills install <name> [--ide=...]'); process.exit(1); }
    return installSkill(root, name, flags);
  }

  if (sub === 'install-stack') {
    const stack = rest[0] || flags.stack;
    if (!stack) {
      logError('Usage: designdna skills install-stack <name>');
      logInfo(`Available stacks: ${Object.keys(STACKS).join(', ')}`);
      process.exit(1);
    }
    const list = STACKS[stack];
    if (!list) {
      logError(`Unknown stack: ${stack}`);
      logInfo(`Available: ${Object.keys(STACKS).join(', ')}`);
      process.exit(1);
    }
    logBanner();
    console.log(`  Installing ${c.bold(stack)} stack: ${list.join(' + ')}\n`);
    for (const skill of list) {
      await installSkill(root, skill, flags, /*silent*/ true);
    }
    console.log('');
    logSuccess(`${list.length} skills installed`);
    return;
  }

  // Default: treat sub as a skill name and show it
  if (availableSkills.includes(sub)) {
    return printSkill(root, sub);
  }

  logError(`Unknown skill or command: ${sub}`);
  logInfo(`Run \`designdna skills list\` to see available skills.`);
  process.exit(1);
}

async function listSkills(root) {
  const entries = await readdir(root, { withFileTypes: true });
  const dirs = entries.filter((e) => e.isDirectory()).map((e) => e.name);
  const skills = [];
  for (const d of dirs) {
    try {
      await stat(join(root, d, 'SKILL.md'));
      skills.push(d);
    } catch {}
  }
  return skills.sort();
}

async function showList(root, skills, flags) {
  if (flags.json) {
    const out = { count: skills.length, skills };
    for (const s of skills) {
      const md = await readFile(join(root, s, 'SKILL.md'), 'utf8');
      const m = md.match(/^---\s*\nname:\s*(.+?)\ndescription:\s*([\s\S]+?)\n---/);
      if (m) {
        out[s] = { name: m[1].trim(), description: m[2].trim() };
      }
    }
    console.log(JSON.stringify(out, null, 2));
    return;
  }

  logBanner();
  console.log(`  ${c.bold('Library sub-skills')} ${c.dim('(' + skills.length + ' available)')}\n`);

  for (const s of skills) {
    const md = await readFile(join(root, s, 'SKILL.md'), 'utf8');
    const match = md.match(/^---\s*\n.*?\ndescription:\s*(.+?)(?:\n|$)/s);
    const desc = match ? match[1].trim().split('\n')[0].slice(0, 80) : '';
    console.log(`  ${c.cyan(s.padEnd(18))} ${c.dim(desc)}`);
  }

  console.log('');
  console.log(`  ${c.bold('Commands')}`);
  console.log(`    ${c.cyan('designdna skills show')} <name>       Print skill content`);
  console.log(`    ${c.cyan('designdna skills install')} <name>    Install into AI IDE`);
  console.log(`    ${c.cyan('designdna skills install-stack')} <name>`);
  console.log('');
  console.log(`  ${c.bold('Stacks')} ${c.dim('(preset skill combinations)')}`);
  for (const [stack, list] of Object.entries(STACKS)) {
    console.log(`    ${c.cyan(stack.padEnd(14))} ${c.dim(list.join(' + '))}`);
  }
  console.log('');
}

async function printSkill(root, name) {
  const path = join(root, name, 'SKILL.md');
  try {
    const md = await readFile(path, 'utf8');
    process.stdout.write(md);
    if (!md.endsWith('\n')) process.stdout.write('\n');
  } catch {
    logError(`Skill "${name}" not found.`);
    process.exit(1);
  }
}

async function installSkill(root, name, flags, silent = false) {
  const srcPath = join(root, name, 'SKILL.md');
  let content;
  try {
    content = await readFile(srcPath, 'utf8');
  } catch {
    logError(`Skill "${name}" not found at ${srcPath}`);
    process.exit(1);
  }

  const ide = flags.ide || 'claude-code';
  const resolveTarget = IDE_TARGETS[ide];
  if (!resolveTarget) {
    logError(`Unknown --ide: ${ide}`);
    logInfo(`Choose from: ${Object.keys(IDE_TARGETS).join(', ')}`);
    process.exit(1);
  }
  const target = resolveTarget(name);

  await mkdir(dirname(target), { recursive: true });

  if (ide === 'cursor' || ide === 'codex') {
    // Append mode — don't overwrite existing file
    let existing = '';
    try { existing = await readFile(target, 'utf8'); } catch {}
    const separator = existing && !existing.endsWith('\n') ? '\n\n' : '\n';
    await writeFile(target, existing + separator + `<!-- designdna skill: ${name} -->\n` + content);
    if (!silent) logSuccess(`Appended ${c.bold(name)} to ${target}`);
    return;
  }

  // Claude Code / generic — write fresh
  await writeFile(target, content);
  if (!silent) {
    logSuccess(`Installed ${c.bold(name)} → ${target}`);
  } else {
    console.log(`  ${c.green('✓')} ${name}`);
  }
}
