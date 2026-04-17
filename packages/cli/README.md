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
| Generic | `generic` | `./rules.md` |

```bash
npx designdna install --ide=claude-code
```

## Environment variables

| Variable | Purpose |
|---|---|
| `DESIGNDNA_ROOT` | Override path to `design-md/` directory |
| `DESIGNDNA_SKILL_ROOT` | Override path to `designdna/` skill directory |
| `DESIGNDNA_DEBUG` | Print stack traces on error |
| `NO_COLOR` | Disable ANSI colors |

## License

MIT &mdash; part of the [DesignDNA-Skills](https://github.com/tiantangcao1980-web/DesignDNA-Skills) project.
