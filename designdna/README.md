# DesignDNA

> **Extract. Apply. Enforce.** — AI design system skill for professional UI/UX.
> Distilled from 58 world-class brand design systems.
> Based on [Google Stitch](https://stitch.withgoogle.com/docs/design-md/overview/) DESIGN.md methodology.
> Source data: [awesome-design-md](https://github.com/tiantangcao1980-web/DesignDNA-Skills)

## What is this?

This is a **portable AI skill** that teaches any AI coding agent to generate production-grade UI with distinctive aesthetic quality. It encodes design knowledge from 58 top brands — Apple, Tesla, Stripe, Vercel, Linear, Airbnb, Spotify, Notion, Figma, Claude, BMW, Ferrari, and 46 more — into formats that every major AI IDE can understand.

### The Problems

1. **Generic AI aesthetic** — AI-generated UI looks bland: centered layouts, rainbow gradients, uniform styling
2. **Inconsistency** — Colors drift, icons mix, fonts break across pages
3. **Missing assets** — Placeholder text instead of real icons/illustrations, broken images
4. **Wrong tech stack** — Mismatched component libraries, redundant dependencies

### The Solution

Google Stitch introduced **DESIGN.md** — a plain-text design system document that AI agents can directly read and implement. The [awesome-design-md](https://github.com/tiantangcao1980-web/DesignDNA-Skills) project collected DESIGN.md files from 58 top brands.

This skill **distills ALL 58 design systems** into an actionable AI skill, adds a **curated design resource library** (icons, images, illustrations, colors, components, fonts, animations), and provides a **smart tech stack matching matrix** — ensuring every generated UI is professional, consistent, and production-ready.

## Supported IDE Tools

| IDE Tool | File to Use | Installation |
|----------|-------------|-------------|
| **Claude Code** | `SKILL.md` | Copy to `~/.claude/skills/designdna/` |
| **Cursor** | `.cursorrules` | Copy to project root |
| **Codex / OpenAI** | `AGENTS.md` | Copy to project root |
| **OpenClaw** | `rules.md` | Copy to `.claw/rules/` or project root |
| **OpenCode** | `rules.md` | Copy to project configuration |
| **Windsurf** | `.cursorrules` | Rename to `.windsurfrules`, copy to project root |
| **Trae / TRAE SOLO** | `rules.md` | Copy to project rules directory |
| **Hermes Agent** | `rules.md` | Copy to agent rules/prompt directory |
| **Any other AI IDE** | `rules.md` | Follow IDE's custom rules mechanism |

## Quick Install

### Claude Code

```bash
mkdir -p ~/.claude/skills/designdna
cp SKILL.md ~/.claude/skills/designdna/
```

### Cursor

```bash
cp .cursorrules /path/to/your/project/
```

### Codex

```bash
cp AGENTS.md /path/to/your/project/
```

### OpenClaw / OpenCode / Other

```bash
cp rules.md /path/to/your/project/
```

## What's Inside

### Core Knowledge (from 58 brands)

**10 Universal Design Rules** — observed across ALL 58 world-class brands:
1. 8px base spacing unit
2. Maximum 2-4 font weights
3. Letter-spacing scales inversely with font size
4. Semantic color organization
5. Multi-layer shadow systems
6. Brand accent restraint (one purpose only)
7. Warm near-black for text (never pure #000)
8. 8-variant border-radius scale
9. 4 component states (default, hover, focus, disabled)
10. Explicit Do's and Don'ts guardrails

**10 Design Archetypes** — covering every common project type:

| Archetype | For | Reference Brands |
|-----------|-----|-----------------|
| Dark Instrument | Developer tools | Linear, Raycast, Warp |
| Precision Monochrome | SaaS platforms | Vercel, HashiCorp |
| Warm Editorial | Consumer apps | Airbnb, Notion, Claude |
| Enterprise Trust | Fintech | Stripe, Coinbase |
| Vibrant Gradient | Creative tools | Figma, Framer |
| Content Stage | Media platforms | Spotify, Pinterest |
| Friendly Warm | Friendly SaaS | Zapier, Lovable, Miro |
| Premium Automotive | Luxury brands | Tesla, BMW, Ferrari |
| Developer Native | Infrastructure | Supabase, Resend |
| Enterprise Trust | Enterprise | IBM, MongoDB |

**Shadow Library** — 5 copy-paste shadow systems:
- Warm Subtle (Notion/Airbnb)
- Ring Containment (Claude/Vercel)
- Chromatic Depth (Stripe)
- Dark Mode Inset (Linear/Raycast)
- Blue Ring (Framer)

**Color Temperature Systems** — Warm, Cool, and Dark palette presets.

**Typography Patterns** — Weight signatures, letter-spacing formulas, line-height scales, OpenType feature requirements.

### Design Resource Library (NEW in v1.2)

**Icons** — 10+ icon libraries with npm offline installation:
- Lucide, Heroicons, Tabler, Phosphor, Google Material, Remix, Feather
- Lottie Files for animated icons, Iconify as universal aggregator

**Images & Illustrations** — 15+ free sources:
- Unsplash, Pexels, Pixabay, StockSnap, FoodiesFeed, Hippopx
- unDraw, Humaaans, Storyset, Open Doodles (SVG illustrations)
- DiceBear for programmatic avatar generation (offline)

**Color Systems** — 8 palette tools:
- ColorHub, Coolors, Realtime Colors, Happy Hues, Radix Colors, Open Color

**Component Libraries** — 20+ libraries mapped by platform:
- React: Radix UI, shadcn/ui, Ant Design, Semi Design, Mantine, NextUI
- Vue: TDesign, Element Plus, Naive UI, Vuetify, PrimeVue
- Mobile: React Native Paper, Expo, Vant, NutUI
- Mini Program: TDesign Mini, Vant Weapp, WeUI
- Desktop: Electron/Tauri with React/Vue

**Typography** — Chinese + Latin font pairing guide with Fontsource offline installation

**Animation** — Framer Motion, GSAP, Animate.css, Auto-Animate

### Tech Stack Smart Matching (NEW in v1.2)

Complete decision matrix matching: **Platform** × **Project Type** → **Component Library** + **Icon Set** + **CSS Framework** + **Animation** + **Chinese Font**

### 5 Consistency Enforcement Rules (NEW in v1.2)

Solving the #1 problem of AI-generated UI — inconsistency:
- C1: One icon library per project (npm installed, offline)
- C2: One color source of truth (CSS variables only)
- C3: Fonts via Fontsource npm (no CDN dependency)
- C4: Illustration strategy (never leave blank, specify exact source)
- C5: Component library discipline (never mix libraries)

### DESIGN.md Template

The `examples/DESIGN-TEMPLATE.md` provides a complete, fill-in-the-blank template for creating new DESIGN.md files following the Google Stitch 9-section standard.

## File Structure

```
awesome-design-skill/
├── README.md                         # This file — overview & installation guide
├── SKILL.md                          # Claude Code skill (most comprehensive, 1100+ lines)
├── .cursorrules                      # Cursor / Windsurf rules
├── AGENTS.md                         # Codex / OpenAI / Hermes Agent instructions
├── rules.md                          # OpenClaw / OpenCode / universal format
├── RESOURCES.md                      # Complete design resource catalog (icons, images, colors, components, fonts, animations)
└── examples/
    └── DESIGN-TEMPLATE.md            # Template for creating new DESIGN.md files
```

## How It Works

### For new projects:

1. AI agent reads the skill file for your IDE
2. When you ask to create UI, the agent identifies the closest design archetype
3. Agent generates a DESIGN.md for your project using the 9-section format
4. Agent implements UI following the DESIGN.md specifications
5. Result: distinctive, production-grade UI instead of generic AI aesthetic

### For existing projects with DESIGN.md:

1. AI agent reads the skill file + your project's DESIGN.md
2. Agent implements UI exactly matching the design system
3. Agent follows the Do's and Don'ts to prevent design drift

### For existing projects without DESIGN.md:

1. AI agent reads the skill file
2. Agent applies the 10 Universal Design Rules
3. Agent uses the archetype closest to your project type
4. Result: significantly better UI than default AI output

## Brands Analyzed

The knowledge in this skill was extracted from the design systems of these 58 brands:

**AI & Machine Learning**: Claude, Cohere, ElevenLabs, Minimax, Mistral AI, Ollama, OpenCode AI, Replicate, RunwayML, Together AI, VoltAgent, xAI

**Developer Tools**: Cursor, Expo, Linear, Lovable, Mintlify, PostHog, Raycast, Resend, Sentry, Supabase, Superhuman, Vercel, Warp, Zapier

**Infrastructure**: ClickHouse, Composio, HashiCorp, MongoDB, Sanity, Stripe

**Design & Productivity**: Airtable, Cal.com, Clay, Figma, Framer, Intercom, Miro, Notion, Pinterest, Webflow

**Fintech**: Coinbase, Kraken, Revolut, Wise

**Enterprise & Consumer**: Airbnb, Apple, IBM, NVIDIA, SpaceX, Spotify, Uber

**Automotive**: BMW, Ferrari, Lamborghini, Renault, Tesla

## Credits

- **Design data source**: [awesome-design-md](https://github.com/tiantangcao1980-web/DesignDNA-Skills) by VoltAgent
- **DESIGN.md concept**: [Google Stitch](https://stitch.withgoogle.com/docs/design-md/overview/)
- **Skill compilation**: Distilled and structured for multi-IDE AI agent consumption

## License

MIT License — Same as the source [awesome-design-md](https://github.com/tiantangcao1980-web/DesignDNA-Skills) repository.
