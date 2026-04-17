# Component Library Skills Index

> Sub-skills packaging Taro + NutUI ecosystem as AI-loadable SKILL.md files. Each skill teaches an AI coding agent how to install, use, and avoid pitfalls with one specific library.

Following [taste-skill](https://github.com/Leonxlnx/taste-skill) conventions — each `SKILL.md` has YAML frontmatter with `name` and `description`, so any AI IDE can auto-detect.

## Available skills (8)

| Skill | Package | Platform | Health | Size |
|---|---|---|---|---|
| [taro](./taro/SKILL.md) | `@tarojs/taro` | React/Vue → 7+ MiniPrograms + H5 + RN + HarmonyOS | 🟢 active | 37k ⭐ |
| [taro-ui](./taro-ui/SKILL.md) | `taro-ui` | Taro 2/3 + React | 🟡 maintenance | 4.7k ⭐ |
| [nutui-vue](./nutui-vue/SKILL.md) | `@nutui/nutui` / `@nutui/nutui-taro` | Vue 3 + Taro | 🟢 active | 6.5k ⭐ |
| [nutui-react](./nutui-react/SKILL.md) | `@nutui/nutui-react` / `@nutui/nutui-react-taro` | React + Taro | 🟢 active | 1.2k ⭐ |
| [nutui-uniapp](./nutui-uniapp/SKILL.md) | `nutui-uniapp` | UniApp + Vue 3 | 🟢 active (community) | 553 ⭐ |
| [nutui-icons](./nutui-icons/SKILL.md) | `@nutui/icons-vue` · `@nutui/icons-react` | Vue / React | 🟢 active | 12 ⭐ |
| [nutui-templates](./nutui-templates/SKILL.md) | page-level layouts | Vue / React | 🟢 active | 152 ⭐ |
| [nutui-biz](./nutui-biz/SKILL.md) | `@nutui/nutui-biz` | React (e-commerce) | 🟡 maintenance | 67 ⭐ |

## How to use these skills

### With Claude Code

Option 1 — install a specific skill:

```bash
npx designdna skills install nutui-react
# Copies the skill file to ~/.claude/skills/nutui-react/SKILL.md
```

Option 2 — load all relevant skills at once:

```bash
npx designdna skills install-stack --stack=taro-react
# Installs: taro + nutui-react + nutui-icons
```

### With Cursor / Windsurf

Concatenate the skill files into your `.cursorrules`:

```bash
cat designdna/skills/taro/SKILL.md \
    designdna/skills/nutui-react/SKILL.md \
    designdna/skills/nutui-icons/SKILL.md \
  >> .cursorrules
```

### With Codex / OpenAI agents

Concatenate into your project's `AGENTS.md`:

```bash
cat designdna/skills/taro/SKILL.md \
    designdna/skills/nutui-react/SKILL.md \
  >> AGENTS.md
```

### Ad-hoc (copy-paste into prompt)

For one-off AI conversations, paste the contents of the relevant skill file into your prompt, prefixed with:

> "Use the following skill as instructions for this task. Apply its BANNED patterns and Pre-flight checklist to all code you generate."

## Which skills to combine

### Scenario: Taro + React MiniProgram project

Load together:
- `taro/SKILL.md` (framework)
- `nutui-react/SKILL.md` (UI components)
- `nutui-icons/SKILL.md` (icons)
- Optionally `nutui-templates/SKILL.md` (page scaffolds)

### Scenario: Taro + Vue 3 MiniProgram project

Load together:
- `taro/SKILL.md`
- `nutui-vue/SKILL.md`
- `nutui-icons/SKILL.md`

### Scenario: UniApp + Vue 3 project

Load together:
- `nutui-uniapp/SKILL.md` (includes UniApp-specific patterns)
- `nutui-icons/SKILL.md`

### Scenario: Plain React mobile web

Load together:
- `nutui-react/SKILL.md`
- `nutui-icons/SKILL.md`

### Scenario: Legacy Taro 2/3 project with Taro UI

Load together:
- `taro/SKILL.md` (confirm Taro version)
- `taro-ui/SKILL.md` (will reference maintenance status)

## Skill composition with core DesignDNA

These library skills are **complementary** to the core DesignDNA skill:

- **Core DesignDNA** (`designdna/SKILL.md`): teaches **what** visual design to aim for (brand DNA, BANNED patterns, dials, pre-flight)
- **Library skills** (this folder): teach **how** to implement with a specific library

Best practice: load both. Example combined prompt:

> "I'm building a Taro + React e-commerce app with the Stripe design DNA. Use:
> - `designdna/SKILL.md` for overall design methodology
> - `design-md/stripe/DESIGN.md` for Stripe's design tokens
> - `design-md/stripe/BANNED.md` for anti-patterns
> - `skills/taro/SKILL.md` for framework setup
> - `skills/nutui-react/SKILL.md` for UI components
> - `skills/nutui-icons/SKILL.md` for icons"

The AI now has: design intent + library knowledge + anti-slop rules.

## Adding new library skills

To contribute a new skill:

1. Create `designdna/skills/<library-name>/SKILL.md`
2. Use YAML frontmatter:
   ```yaml
   ---
   name: library-name
   description: One-line description. Platform/framework. Health status. Key value prop.
   ---
   ```
3. Follow the 9-section structure established in existing skills:
   1. When to use / don't use
   2. Installation
   3. Component catalog (table)
   4. Usage examples (3-5 snippets covering typical cases)
   5. Theme / tokens
   6. BANNED patterns (library-specific)
   7. Pre-flight checklist
   8. Common gotchas
   9. Migration path (if the library is being superseded)

See existing skills as reference for format and tone.
