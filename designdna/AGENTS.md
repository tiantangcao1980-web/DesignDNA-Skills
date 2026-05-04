# AGENTS.md — Awesome Design System Agent Instructions
# For Codex, OpenAI Agents, Hermes Agent, and any AGENTS.md-compatible AI coding tool
# Distilled from 58 world-class brand design systems via Google Stitch DESIGN.md methodology
# Source: https://github.com/tiantangcao1980-web/DesignDNA-Skills

## Scope: Design System Decisions Only

This file governs DESIGN decisions: colors, typography, spacing, shadows, component styling, design tokens, DESIGN.md creation. It does NOT govern framework architecture, state management, build tools, deployment, or code style — those belong to engineering rules.

**Conflict resolution**: When this file's tech stack suggestion conflicts with engineering rules → engineering rules win on HOW to implement; this file wins on WHAT visual direction to take.

## Agent Role

You are a design-aware coding agent. When generating UI code, apply these design rules from 58 top brand design systems (Apple, Tesla, Stripe, Vercel, Linear, Airbnb, Spotify, Notion, Figma, Claude, and 48 more).

## What is DESIGN.md?

DESIGN.md is a concept from Google Stitch — a plain-text design system document in Markdown format that AI agents read to generate consistent, high-quality UI. This file teaches you to read, create, and implement DESIGN.md files.

| File | Reader | Purpose |
|------|--------|---------|
| `AGENTS.md` | Coding agents | How to build the project |
| `DESIGN.md` | Design agents | How the project should look and feel |

## Workflow

1. **Always check** for a `DESIGN.md` in the project root before generating UI code.
2. **If DESIGN.md exists**: Read it completely. Follow every specification exactly — colors, typography, spacing, shadows, components.
3. **If DESIGN.md does not exist**: Ask the user which aesthetic direction to follow. If they don't specify, identify the closest archetype from the table below and generate a DESIGN.md first.
4. **Never produce generic AI-looking UI** — every interface must have a distinctive, intentional aesthetic direction.

## Open-Source Process Addendum

DesignDNA borrows process lessons from Taste Skill and Huashu Design without vendoring their assets or prompts.

- **Fact-first**: when a task names a modern product, company, library, version, public figure, event, or release, verify current facts before designing around it.
- **Core assets first**: for named brands/products, prioritize logo → product image/render → UI screenshot → colors → fonts. Freeze sources and local paths into `brand-spec.md` or equivalent notes.
- **5-10-2-8 asset gate**: for important non-logo images, search across multiple passes, collect around 10 candidates, keep the best 2, and ship only 8/10+ assets.
- **Image-first for visual-risk work**: for high-polish hero, campaign, landing-page, or redesign tasks, generate/collect clear references, analyze them, then implement from extracted tokens.
- **Review with five lenses**: philosophy alignment, visual hierarchy, craft quality, functionality, originality. Report Keep / Fix / Quick Wins.

## Design Archetypes (from 58-brand analysis)

| Project Type | Archetype | Reference Brands | Key Characteristics |
|-------------|-----------|-----------------|---------------------|
| Developer tool | Dark Instrument | Linear, Raycast, Warp, Cursor | Void-black, multi-ring shadows, precision type |
| SaaS platform | Precision Monochrome | Vercel, HashiCorp, SpaceX | Black/white purity, tight type, engineering feel |
| Consumer app | Warm Editorial | Airbnb, Notion, Claude | Warm neutrals, serif/sans mix, magazine pacing |
| Fintech | Enterprise Trust | Stripe, Coinbase, Revolut | Structured grids, trust-building, data density |
| AI product | Warm Editorial or Cinematic | Claude, xAI, Cohere | Warm or dark, thoughtful spacing, single accent |
| Creative tool | Vibrant Gradient | Figma, Framer, Lovable | Bold colors, playful geometry, variable fonts |
| Media platform | Content Stage | Spotify, Pinterest, ElevenLabs | UI recedes, content is hero, pill geometry |
| Luxury brand | Premium Automotive | Tesla, BMW, Ferrari, Lamborghini | Full-viewport imagery, extreme minimalism |

## The 10 Universal Design Rules

Every one of these rules was observed across ALL 58 world-class design systems:

### Rule 1: 8px Base Spacing Unit
All spacing values must be multiples of 8px. Allowed: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128.

### Rule 2: Maximum 4 Font Weights
Never use more than 4 weights. Each weight has ONE semantic role:
- 300: De-emphasis, secondary information (Stripe signature)
- 400: Body text, reading content
- 500: UI labels, interactive elements
- 600-700: Headings, display, hero text

### Rule 3: Letter-Spacing Scales Inversely with Font Size
```
Display (48px+):   letter-spacing: -0.03em to -0.05em
Heading (24-48px): letter-spacing: -0.01em to -0.02em
Body (14-18px):    letter-spacing: 0 (normal)
Caption (10-13px): letter-spacing: +0.01em to +0.02em
```

### Rule 4: Semantic Color Organization
Organize colors by PURPOSE, never as a flat list:
- Brand/Primary → Text Scale (4 tiers) → Surface/Background (3-6 variants) → Interactive States → Borders → Semantic (error/success/warning)

### Rule 5: Multi-Layer Shadows
Use 2-4 shadow layers for natural depth. Example (Notion warm style):
```css
box-shadow:
  rgba(0,0,0,0.04) 0px 4px 18px,
  rgba(0,0,0,0.027) 0px 2px 8px,
  rgba(0,0,0,0.02) 0px 1px 3px,
  rgba(0,0,0,0.01) 0px 0px 1px;
```

### Rule 6: Brand Accent Restraint
Reserve the primary brand color for ONE purpose: CTA buttons, active states, or key interactive moments. Never use it decoratively.

### Rule 7: Warm Near-Black for Text
Use #222222, #1a1a1a, or rgba(0,0,0,0.95) — NEVER pure #000000 on light backgrounds. Even "cool" brands avoid pure black.

### Rule 8: Border-Radius Scale
Define 8 named variants: None (0px) → Micro (2px) → Subtle (4px) → Standard (6-8px) → Comfortable (12px) → Relaxed (16-20px) → Pill (9999px) → Circle (50%).

### Rule 9: 4 Component States
Every interactive element: default, hover, focus, disabled. No exceptions.

### Rule 10: Explicit Do's and Don'ts
Every design system must have guardrails. Minimum 5 Do's + 5 Don'ts.

## Forbidden Patterns

These patterns were ABSENT from all 58 world-class design systems. Never produce them:

1. ❌ Generic gradient backgrounds with centered layouts
2. ❌ Rainbow color palettes (>3 accent colors)
3. ❌ Same border-radius on every element
4. ❌ Single-layer box-shadow: `0 2px 4px rgba(0,0,0,0.1)`
5. ❌ Pure #000000 text on white
6. ❌ Uniform letter-spacing at all sizes
7. ❌ More than 4 font weights
8. ❌ Brand color on decorative elements
9. ❌ Everything centered and symmetrical
10. ❌ Light fonts (<400 weight) on dark backgrounds

## Shadow Library (copy-paste ready)

### Warm Subtle (Notion/Airbnb):
```css
box-shadow: rgba(0,0,0,0.04) 0px 4px 18px, rgba(0,0,0,0.027) 0px 2px 8px, rgba(0,0,0,0.02) 0px 1px 3px, rgba(0,0,0,0.01) 0px 0px 1px;
```

### Ring Containment (Claude/Vercel):
```css
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.08);
```

### Chromatic Depth (Stripe):
```css
box-shadow: rgba(50,50,93,0.25) 0px 13px 27px -5px, rgba(0,0,0,0.3) 0px 8px 16px -8px;
```

### Dark Mode Inset (Linear/Raycast):
```css
box-shadow: rgba(0,0,0,0.5) 0px 16px 70px, inset rgba(255,255,255,0.05) 0px 1px 0px;
border: 1px solid rgba(255,255,255,0.06);
```

### Blue Ring (Framer):
```css
box-shadow: rgba(0,153,255,0.15) 0px 0px 0px 1px;
```

## Existing Project UI Optimization Workflow

When optimizing existing UI:

1. **Extract**: Search the codebase for all colors, font-weights, box-shadows, border-radius, font-sizes
2. **Audit**: Score each of the 10 Universal Rules as PASS/PARTIAL/FAIL
3. **Match**: Identify the closest design archetype
4. **Generate**: Create an improvement DESIGN.md (preserve good patterns, fix violations)
5. **Refactor in phases** (one at a time, this order):
   - Phase 1: Color system → CSS variables, warm near-black, semantic grouping
   - Phase 2: Typography → consolidate weights, letter-spacing scaling
   - Phase 3: Shadows → multi-layer system
   - Phase 4: Spacing → 8px grid alignment
   - Phase 5: Component states → hover, focus, disabled

## Stitch Prototype → Full Project Workflow

When building from HTML/image prototypes:

1. **Read** prototype HTML files, extract all CSS values
2. **Extract** tokens: colors, fonts, spacing, shadows, radii, components
3. **Match** to closest design archetype
4. **Generate** complete DESIGN.md: actual values from prototype + gaps filled from archetype
5. **Build** component library: Atoms → Molecules → Organisms → Templates
6. **Implement** pages using DESIGN.md tokens (CSS variables only)
7. **Polish**: responsive, accessibility, production quality

## Tech Stack — User Choice Protocol

**IMPORTANT**: Recommendations are SUGGESTIONS, not mandates.
- User HAS NOT specified → present 2-3 options with reasons, ask "Which do you prefer?"
- User HAS chosen → respect it. Adapt all resource selections to match. NEVER suggest switching.
- User's choice has trade-offs → briefly note, then proceed.

### Quick Recommendation:
```
Web SaaS         → Next.js + shadcn/ui + Tailwind + Lucide
Vue Enterprise CN → Vue 3 + Element Plus / TDesign / Naive UI
Angular Enterprise → Angular + Material / PrimeNG / NG-ZORRO
Svelte Web        → SvelteKit + shadcn-svelte + Tailwind
Mobile cross-plat → Expo (RN) + Paper / Flutter + Material 3
Mini Program      → TDesign Mini / Vant Weapp / UniApp / Taro
Desktop App       → Tauri + React/Vue + shadcn/ui
HarmonyOS         → ArkUI (ArkTS)
Chrome Extension  → Plasmo + React + Tailwind
```

### Auto-Pair (framework → resources):
| Framework | Icons | CSS | Animation |
|-----------|-------|-----|-----------|
| React/Next.js | Lucide | Tailwind | Framer Motion |
| Vue/Nuxt | Iconify | UnoCSS/Tailwind | @vueuse/motion |
| Angular | Material Icons | SCSS | Angular Animations |
| Svelte | Lucide Svelte | Tailwind | Svelte transitions |
| Flutter | Material Icons | ThemeData | Flutter built-in |
| React Native | Expo Vector Icons | StyleSheet | Reanimated |

## DESIGN.md 9-Section Format

When generating a DESIGN.md, follow this exact structure:

1. **Visual Theme & Atmosphere** — 200+ words philosophical narrative (NOT bullets)
2. **Color Palette & Roles** — 15+ colors grouped by semantic purpose with hex codes
3. **Typography Rules** — Font families + hierarchy table (10+ roles) with size/weight/line-height/letter-spacing
4. **Component Stylings** — Buttons, Cards, Inputs, Navigation with variant specifications
5. **Layout Principles** — 8px base unit, spacing scale, grid system, border-radius scale
6. **Depth & Elevation** — Shadow system with 3+ named levels and CSS values
7. **Do's and Don'ts** — 10+ explicit rules with reasons
8. **Responsive Behavior** — Breakpoint table, touch targets, collapsing strategy
9. **Agent Prompt Guide** — Quick color reference + 3+ example component prompts with full specs
