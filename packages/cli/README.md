# designdna

> Install world-class brand design systems into your AI-agent project with one command.

```bash
npx designdna add stripe
# ✓ DESIGN.md (20 KB)
```

## Install

```bash
# One-off (recommended)
npx designdna <command>

# Global
npm install -g designdna
designdna <command>
```

## Commands

### `add <brand>`

Install a brand's design system into the current directory.

```bash
npx designdna add stripe
npx designdna add linear --format=tailwind
npx designdna add apple --format=all
npx designdna add tesla --format=md,css --out=./design
```

**Formats** (`--format=`):

| Value | Output file | Purpose |
|---|---|---|
| `md` *(default)* | `DESIGN.md` | Human/AI-readable spec |
| `json` | `design.json` | Machine-readable tokens |
| `css` | `variables.css` | CSS custom properties |
| `tailwind` | `tailwind.config.js` | Tailwind preset |
| `ts` | `tokens.ts` | TypeScript tokens |
| `all` | everything above | — |

Multiple: `--format=md,css,tailwind`.

### `init`

Interactive prompt: pick a brand, pick formats, install.

```bash
npx designdna init
```

### `list`

Enumerate all 58 available brands.

```bash
npx designdna list
npx designdna list --json    # machine-readable
```

### `preview <brand>`

Open the brand's visual preview catalog in your browser.

```bash
npx designdna preview stripe
npx designdna preview tesla --dark
```

### `install --ide=<id>`

Install the DesignDNA skill into your AI IDE.

| IDE | `--ide=` value | Install location |
|---|---|---|
| Claude Code | `claude-code` | `~/.claude/skills/designdna/SKILL.md` |
| Cursor | `cursor` | `./.cursorrules` |
| Windsurf | `windsurf` | `./.windsurfrules` |
| Codex / OpenAI | `codex` | `./AGENTS.md` |
| Codex / OpenAI (full repo skill) | `codex-full` | `~/.codex/skills/designdna/` |
| Generic | `generic` | `./rules.md` |

```bash
npx designdna install --ide=claude-code
npx designdna install --ide=codex-full
```

### `skills`

Browse or install library-specific skills, including Ant Design v6, TDesign, and GPT Image 2 workflows.

```bash
npx designdna skills list
npx designdna skills install ant-design
npx designdna skills install tdesign-chat --ide=codex
npx designdna skills install-stack ai-visual
```

## Environment variables

| Variable | Purpose |
|---|---|
| `DESIGNDNA_ROOT` | Override path to `design-md/` directory |
| `DESIGNDNA_SKILL_ROOT` | Override path to `designdna/` skill directory |
| `DESIGNDNA_DEBUG` | Print stack traces on error |
| `NO_COLOR` | Disable ANSI colors |

## Contributor maintenance

When DESIGN.md files or parser/generator logic changes, keep the checked-in
brand artifacts synchronized:

```bash
npm run regen:brands   # rewrite design.json / CSS / Tailwind / TS for all brands
npm run check:brands   # fail if any generated artifact is stale
```

The repository CI also runs:

- `node --test packages/cli/src/__tests__/*.test.js`
- `npm run check:brands`
- GitHub Pages parity build via `ghcr.io/actions/jekyll-build-pages:v1.0.13`

## License

MIT &mdash; part of the [DesignDNA-Skills](https://github.com/tiantangcao1980-web/DesignDNA-Skills) project.
