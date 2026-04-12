<div align="center">
  <img src="assets/banner.svg" alt="DesignDNA - AI Design System Skill" width="100%" />
</div>

<br/>

<div align="center">
    <strong>Not just a collection of DESIGN.md files &mdash; a production system for AI-generated UI quality.</strong>
    <br />
    <br />
    Drop a DESIGN.md into your project. Tell your AI agent &ldquo;build me a page that looks like this.&rdquo;<br/>
    Get pixel-perfect, brand-quality UI instead of generic AI aesthetics.
</div>

<br/>

<div align="center">

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
![Brands](https://img.shields.io/badge/brands-58-10b981?style=flat)
![Rules](https://img.shields.io/badge/rules-10-818cf8?style=flat)
![Archetypes](https://img.shields.io/badge/archetypes-10-c084fc?style=flat)
[![License](https://img.shields.io/badge/license-MIT-f472b6?style=flat)](LICENSE)
[![Last Update](https://img.shields.io/github/last-commit/tiantangcao1980-web/DesignDNA-Skills?label=updated&style=flat)](https://github.com/tiantangcao1980-web/DesignDNA-Skills)

</div>

<br/>

<div align="center">
  <img src="assets/features.svg" alt="DesignDNA Features Overview" width="100%" />
</div>

<br/>

---

## Why DesignDNA?

AI agents generate UI that all looks the same &mdash; safe colors, centered layouts, predictable spacing. The root cause: **agents lack design knowledge.**

DesignDNA solves this by distilling **58 world-class brand design systems** into a structured AI skill that any coding agent can read and apply. It goes far beyond raw DESIGN.md files:

| Capability | Raw DESIGN.md Collection | DesignDNA Skill |
|---|---|---|
| Brand design systems | 58 files | 58 files |
| Universal design rules | &mdash; | 10 meta-patterns extracted across all brands |
| Consistency enforcement | &mdash; | 5 C-Rules preventing design drift |
| Resource library | &mdash; | Icons, images, components, fonts, animations |
| Design archetypes | &mdash; | 10 ready-to-use reference patterns |
| Multi-IDE support | GitHub only | Claude Code, Cursor, Windsurf, Codex, Stitch, Cline, Trae |
| Agent prompt guide | Basic | Complete prompt templates per archetype |

---

## Quick Start

**Option 1 &mdash; Use a brand's design system directly:**

```bash
# Copy any brand's DESIGN.md into your project
cp design-md/stripe/DESIGN.md ./DESIGN.md

# Tell your AI agent
> "Build me a dashboard page following DESIGN.md"
```

**Option 2 &mdash; Install the full DesignDNA skill:**

| AI Editor | File to use | Install |
|---|---|---|
| Claude Code | `designdna/SKILL.md` | Copy to `~/.claude/skills/designdna/` |
| Cursor | `designdna/.cursorrules` | Copy to project root as `.cursorrules` |
| Windsurf | `designdna/.cursorrules` | Copy to project root |
| Codex / OpenAI | `designdna/AGENTS.md` | Copy to project root as `AGENTS.md` |
| Google Stitch | `design-md/*/DESIGN.md` | Drop into Stitch project |
| Other agents | `designdna/rules.md` | Copy to project root |

---

## What is DESIGN.md?

[DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview/) is a concept introduced by Google Stitch &mdash; a plain-text design system document that AI agents read to generate consistent UI.

No Figma exports, no JSON schemas, no special tooling. Just a markdown file in your project root.

| File | Who reads it | What it defines |
|------|-------------|-----------------|
| `AGENTS.md` | Coding agents | How to build the project |
| `DESIGN.md` | Design agents | How the project should look and feel |

### The 9-Section Standard

Every DESIGN.md in this collection follows an extended format:

| # | Section | What it captures |
|---|---------|-----------------|
| 1 | Visual Theme & Atmosphere | Mood, density, design philosophy |
| 2 | Color Palette & Roles | Semantic name + hex + functional role |
| 3 | Typography Rules | Font families, full hierarchy table |
| 4 | Component Stylings | Buttons, cards, inputs, navigation with states |
| 5 | Layout Principles | Spacing scale, grid, whitespace philosophy |
| 6 | Depth & Elevation | Shadow system, surface hierarchy |
| 7 | Do's and Don'ts | Design guardrails and anti-patterns |
| 8 | Responsive Behavior | Breakpoints, touch targets, collapsing strategy |
| 9 | Agent Prompt Guide | Quick color reference, ready-to-use prompts |

Each brand directory includes:

| File | Purpose |
|------|---------|
| `DESIGN.md` | The design system (what agents read) |
| `preview.html` | Visual catalog &mdash; color swatches, type scale, buttons, cards |
| `preview-dark.html` | Same catalog with dark surfaces |

---

## Project Structure

```
DesignDNA-Skills/
  design-md/              # 58 brand DESIGN.md files
    airbnb/
    apple/
    stripe/
    ...
  designdna/               # The AI skill (meta-layer)
    SKILL.md               # Claude Code skill (most comprehensive)
    AGENTS.md              # Codex / OpenAI agents format
    .cursorrules           # Cursor / Windsurf format
    rules.md               # Generic agent format
    RESOURCES.md           # Curated resource library
    README.md              # Skill documentation
    assets/                # Font & icon indexes
    examples/              # DESIGN.md templates
    experience/            # Interaction patterns & references
  assets/                  # Project banner & diagrams
  index.html               # Visual preview of all 58 brands
```

---

## Request a DESIGN.md

[Open a GitHub issue with this template](https://github.com/tiantangcao1980-web/DesignDNA-Skills/issues/new?template=design-md-request.yml) to request a DESIGN.md generation for any website.

---

## Collection

### AI & Machine Learning

- [**Claude**](design-md/claude/) - Anthropic's AI assistant. Warm terracotta accent, clean editorial layout
- [**Cohere**](design-md/cohere/) - Enterprise AI platform. Vibrant gradients, data-rich dashboard aesthetic
- [**ElevenLabs**](design-md/elevenlabs/) - AI voice platform. Dark cinematic UI, audio-waveform aesthetics
- [**Minimax**](design-md/minimax/) - AI model provider. Bold dark interface with neon accents
- [**Mistral AI**](design-md/mistral.ai/) - Open-weight LLM provider. French-engineered minimalism, purple-toned
- [**Ollama**](design-md/ollama/) - Run LLMs locally. Terminal-first, monochrome simplicity
- [**OpenCode AI**](design-md/opencode.ai/) - AI coding platform. Developer-centric dark theme
- [**Replicate**](design-md/replicate/) - Run ML models via API. Clean white canvas, code-forward
- [**RunwayML**](design-md/runwayml/) - AI video generation. Cinematic dark UI, media-rich layout
- [**Together AI**](design-md/together.ai/) - Open-source AI infrastructure. Technical, blueprint-style design
- [**VoltAgent**](design-md/voltagent/) - AI agent framework. Void-black canvas, emerald accent, terminal-native
- [**xAI**](design-md/x.ai/) - Elon Musk's AI lab. Stark monochrome, futuristic minimalism

### Developer Tools & Platforms

- [**Cursor**](design-md/cursor/) - AI-first code editor. Sleek dark interface, gradient accents
- [**Expo**](design-md/expo/) - React Native platform. Dark theme, tight letter-spacing, code-centric
- [**Linear**](design-md/linear.app/) - Project management for engineers. Ultra-minimal, precise, purple accent
- [**Lovable**](design-md/lovable/) - AI full-stack builder. Playful gradients, friendly dev aesthetic
- [**Mintlify**](design-md/mintlify/) - Documentation platform. Clean, green-accented, reading-optimized
- [**PostHog**](design-md/posthog/) - Product analytics. Playful hedgehog branding, developer-friendly dark UI
- [**Raycast**](design-md/raycast/) - Productivity launcher. Sleek dark chrome, vibrant gradient accents
- [**Resend**](design-md/resend/) - Email API for developers. Minimal dark theme, monospace accents
- [**Sentry**](design-md/sentry/) - Error monitoring. Dark dashboard, data-dense, pink-purple accent
- [**Supabase**](design-md/supabase/) - Open-source Firebase alternative. Dark emerald theme, code-first
- [**Superhuman**](design-md/superhuman/) - Fast email client. Premium dark UI, keyboard-first, purple glow
- [**Vercel**](design-md/vercel/) - Frontend deployment platform. Black and white precision, Geist font
- [**Warp**](design-md/warp/) - Modern terminal. Dark IDE-like interface, block-based command UI
- [**Zapier**](design-md/zapier/) - Automation platform. Warm orange, friendly illustration-driven

### Infrastructure & Cloud

- [**ClickHouse**](design-md/clickhouse/) - Fast analytics database. Yellow-accented, technical documentation style
- [**Composio**](design-md/composio/) - Tool integration platform. Modern dark with colorful integration icons
- [**HashiCorp**](design-md/hashicorp/) - Infrastructure automation. Enterprise-clean, black and white
- [**MongoDB**](design-md/mongodb/) - Document database. Green leaf branding, developer documentation focus
- [**Sanity**](design-md/sanity/) - Headless CMS. Red accent, content-first editorial layout
- [**Stripe**](design-md/stripe/) - Payment infrastructure. Signature purple gradients, weight-300 elegance

### Design & Productivity

- [**Airtable**](design-md/airtable/) - Spreadsheet-database hybrid. Colorful, friendly, structured data aesthetic
- [**Cal.com**](design-md/cal/) - Open-source scheduling. Clean neutral UI, developer-oriented simplicity
- [**Clay**](design-md/clay/) - Creative agency. Organic shapes, soft gradients, art-directed layout
- [**Figma**](design-md/figma/) - Collaborative design tool. Vibrant multi-color, playful yet professional
- [**Framer**](design-md/framer/) - Website builder. Bold black and blue, motion-first, design-forward
- [**Intercom**](design-md/intercom/) - Customer messaging. Friendly blue palette, conversational UI patterns
- [**Miro**](design-md/miro/) - Visual collaboration. Bright yellow accent, infinite canvas aesthetic
- [**Notion**](design-md/notion/) - All-in-one workspace. Warm minimalism, serif headings, soft surfaces
- [**Pinterest**](design-md/pinterest/) - Visual discovery platform. Red accent, masonry grid, image-first
- [**Webflow**](design-md/webflow/) - Visual web builder. Blue-accented, polished marketing site aesthetic

### Fintech & Crypto

- [**Coinbase**](design-md/coinbase/) - Crypto exchange. Clean blue identity, trust-focused, institutional feel
- [**Kraken**](design-md/kraken/) - Crypto trading platform. Purple-accented dark UI, data-dense dashboards
- [**Revolut**](design-md/revolut/) - Digital banking. Sleek dark interface, gradient cards, fintech precision
- [**Wise**](design-md/wise/) - International money transfer. Bright green accent, friendly and clear

### Enterprise & Consumer

- [**Airbnb**](design-md/airbnb/) - Travel marketplace. Warm coral accent, photography-driven, rounded UI
- [**Apple**](design-md/apple/) - Consumer electronics. Premium white space, SF Pro, cinematic imagery
- [**IBM**](design-md/ibm/) - Enterprise technology. Carbon design system, structured blue palette
- [**NVIDIA**](design-md/nvidia/) - GPU computing. Green-black energy, technical power aesthetic
- [**SpaceX**](design-md/spacex/) - Space technology. Stark black and white, full-bleed imagery, futuristic
- [**Spotify**](design-md/spotify/) - Music streaming. Vibrant green on dark, bold type, album-art-driven
- [**Uber**](design-md/uber/) - Mobility platform. Bold black and white, tight type, urban energy

### Car Brands

- [**BMW**](design-md/bmw/) - Luxury automotive. Dark premium surfaces, precise German engineering aesthetic
- [**Ferrari**](design-md/ferrari/) - Luxury automotive. Chiaroscuro black-white editorial, Ferrari Red with extreme sparseness
- [**Lamborghini**](design-md/lamborghini/) - Luxury automotive. True black cathedral, gold accent, LamboType custom Neo-Grotesk
- [**Renault**](design-md/renault/) - French automotive. Vivid aurora gradients, NouvelR proprietary typeface, zero-radius buttons
- [**Tesla**](design-md/tesla/) - Electric vehicles. Radical subtraction, cinematic full-viewport photography, Universal Sans

---

## Acknowledgments

This project stands on the shoulders of great work:

- **[Awesome DESIGN.md](https://github.com/VoltAgent/awesome-design-md)** &mdash; The original curated collection of DESIGN.md files by the [VoltAgent](https://github.com/VoltAgent) team. They did the foundational work of extracting design systems from 58 world-class brand websites into structured DESIGN.md format. Without their effort, this project would not exist.
- **[Google Stitch](https://stitch.withgoogle.com/docs/design-md/overview/)** &mdash; For introducing the [DESIGN.md format](https://stitch.withgoogle.com/docs/design-md/format/) that makes design systems readable by AI agents.

**What DesignDNA adds:** The VoltAgent team provided excellent raw design system examples. DesignDNA builds on top of that foundation to bridge the gap from **UI design reference to engineering-ready, plug-and-play AI skill** &mdash; adding 10 universal design rules, 5 consistency enforcement rules, 10 design archetypes, a curated resource library, multi-IDE skill formats, and production workflow guidance. The goal is simple: copy it in, and your AI agent immediately produces brand-quality UI.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

- **Improve existing files**: Fix wrong colors, missing tokens, weak descriptions
- **Report issues**: Let us know if something looks off

Before opening a PR, please [open an issue](https://github.com/tiantangcao1980-web/DesignDNA-Skills/issues) first to discuss.

## License

MIT License - see [LICENSE](LICENSE)

This repository provides design system documents extracted from public websites. All DESIGN.md files are provided "as is" without warranty. The extracted design tokens represent publicly visible CSS values. We do not claim ownership of any site's visual identity. These documents exist to help AI agents generate consistent UI.
