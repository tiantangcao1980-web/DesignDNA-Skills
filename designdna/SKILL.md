---
name: designdna
description: >
  Based on Google Stitch DESIGN.md methodology and 58 world-class brand design systems
  (Apple, Tesla, Stripe, Vercel, Linear, Airbnb, Spotify, Notion, etc.),
  this skill provides a complete framework for AI agents to generate production-grade UI
  with distinctive aesthetic quality. Covers design analysis, DESIGN.md creation,
  and pixel-perfect implementation across all frontend platforms.
version: 2.0.0
triggers:
  - design system
  - DESIGN.md
  - design token
  - design audit
  - UI audit
  - color palette
  - typography system
  - shadow system
  - design archetype
  - Stitch prototype
  - brand aesthetic
  - design resource
  - icon library selection
  - font selection
---

# DesignDNA — AI Design System Skill

## ⚠ Scope Boundary Declaration — Read First

### This skill IS (owns exclusively):
- **DESIGN.md methodology** — the 9-section standard, creation, and maintenance
- **Design system architecture** — tokens, scales, semantic organization
- **Design DNA analysis** — extracting and matching to 10 archetypes from 58 brands
- **UI audit & scoring** — evaluating existing UI against 10 Universal Design Rules
- **Design resource catalog** — icons, images, illustrations, colors, fonts, animations (RESOURCES.md)
- **Design-driven tech stack advisory** — recommending component libraries that best EXPRESS a design intent
- **Consistency enforcement** — the 5 C-rules preventing color/icon/font/illustration drift
- **A2UI protocol** — for agent-driven declarative UI

### This skill IS NOT (defers to other skills):
- **NOT a frontend implementation skill** → defer to `frontend-patterns` for React/Vue/Angular patterns, state management, component architecture, performance optimization
- **NOT a project scaffolding skill** → defer to `web-development` for build config, SDK integration, static hosting, deployment
- **NOT a coding standards skill** → defer to `coding-standards` for naming conventions, file organization, type safety, error handling
- **NOT a deployment skill** → defer to `deployment-patterns` for Docker, CI/CD, cloud config
- **NOT a mini program structure skill** → defer to `miniprogram-development` for project structure, WeChat DevTools, wx.cloud
- **NOT a security skill** → defer to `security-review` for OWASP, injection prevention, auth security
- **NOT an accessibility implementation skill** → defer to `frontend-patterns` for WCAG implementation code; this skill only defines contrast/touch-target SPECIFICATIONS in DESIGN.md

### Relationship with `ui-design` skill:

The `ui-design` skill and this skill are **complementary, not competing**:

| Concern | `ui-design` owns | `designdna` owns |
|---------|-------------------|------------------------------|
| **When to trigger** | User asks to create NEW page/component/interface | User asks about design SYSTEM, tokens, DESIGN.md, audit, brand matching |
| **Aesthetic direction** | Chooses aesthetic direction (e.g. "brutalist", "editorial") | Provides reference archetypes from 58 real brands |
| **Color selection** | Creative color choices for a specific page | Semantic color ORGANIZATION (4-tier text, surface hierarchy, accent rules) |
| **Typography** | Font SELECTION for a specific aesthetic feel | Typography SYSTEM (hierarchy table, weight roles, letter-spacing formula) |
| **Output** | Beautiful individual pages/components | Reusable design system documents (DESIGN.md) |

**Collaboration rules**:
1. If `ui-design` is active and this skill is also triggered → `ui-design` leads creative decisions, this skill provides the SYSTEM STRUCTURE to organize them
2. If a DESIGN.md already exists in the project → BOTH skills must follow it; neither may override it without user approval
3. If `ui-design` picks fonts/colors → this skill organizes them into semantic tokens, hierarchy tables, and CSS variables
4. If this skill recommends an archetype → `ui-design` may refine the aesthetic within that archetype's guardrails

### Tech Stack Advisory — Design Perspective Only

This skill recommends tech stacks **from a design expression perspective**:
- "Which component library best EXPRESSES this design archetype?"
- "Which icon set best MATCHES this visual language?"

It does NOT dictate:
- Framework architecture decisions → `frontend-patterns`
- Build tool configuration → `web-development`
- State management patterns → `frontend-patterns`
- API integration patterns → `backend-patterns` / `api-design`

**When this skill's tech stack suggestion conflicts with another skill**:
→ The OTHER skill wins on implementation details.
→ This skill wins on VISUAL/DESIGN rationale only.
→ Example: This skill says "use Lucide icons for this design archetype". `frontend-patterns` says "use dynamic imports for tree-shaking". Both apply — choose Lucide (design), import dynamically (implementation).

---

> Distilled from 58 world-class brand design systems following Google Stitch's DESIGN.md methodology.
> Source: [DesignDNA-Skills](https://github.com/tiantangcao1980-web/DesignDNA-Skills) | Design data: [awesome-design-md](https://github.com/VoltAgent/awesome-design-md)

## Pre-flight Checklist (MANDATORY)

**Before emitting any UI code, self-audit with this checklist. Print each item as `[x]` (passed) or `[ ]` (failed) in your output reasoning.**

This is a bias-correction checklist inspired by [taste-skill](https://github.com/Leonxlnx/taste-skill). LLMs have strong statistical priors toward generic patterns — these rules fight the mean.

### Typography
- [ ] No Inter unless the brand DNA specifies it
- [ ] ≤ 2 font families used on the page
- [ ] ≤ 4 font weights used total
- [ ] No all-caps headings > 16px
- [ ] Font families match the brand DNA exactly

### Color
- [ ] No pure `#000000` (use warm near-black from brand DNA)
- [ ] No pure `#FFFFFF` surfaces without a brand-specific off-white alternative
- [ ] No default AI purple `#8B5CF6` family unless brand specifies purple
- [ ] No rainbow blue→purple→pink gradient
- [ ] Accent color explicitly from brand DNA palette

### Layout
- [ ] Hero is NOT the generic "centered headline + subhead + 2 buttons" template
- [ ] No 3-column icon-card feature grid
- [ ] No "Trusted by" fake-logo bar
- [ ] At least one section breaks the symmetric 12-column grid
- [ ] Vertical rhythm matches VISUAL_DENSITY dial (< 3 → breathy, > 7 → dense)

### Copy & Content
- [ ] No placeholder names: "John Doe", "Jane Smith", "Acme", "Nexus", "Velocity", "Apex"
- [ ] No fake metrics: "99.99% uptime", "10x faster", "10,000+ users"
- [ ] No AI marketing-speak: "Effortlessly", "Seamlessly", "Revolutionary"
- [ ] No emoji in headings
- [ ] Headlines follow the brand's voice guide (declarative / object-first / conversational / etc.)

### Components
- [ ] No frosted-glass `backdrop-blur` on every card
- [ ] No animated mesh gradient hero background
- [ ] No `ring-purple-500/50` glow on buttons/cards (unless brand specifies purple)
- [ ] No generic stock imagery (brain circuits, chat bubbles, glowing networks)

### Brand DNA Conformance
- [ ] Loaded brand's `DESIGN.md`
- [ ] Loaded brand's `BANNED.md` if present
- [ ] Dial values declared (DESIGN_VARIANCE, MOTION_INTENSITY, VISUAL_DENSITY, WARMTH, CONTRAST)
- [ ] Every component references a brand token, not a hardcoded hex or px

**If any item is `[ ]`, revise before output. This checklist is not optional.**

See also: `designdna/anti-slop/SKILL.md` for the full reasoning and replacement patterns.

---

## Two-Stage Skill Model (how DesignDNA is meant to be used)

Inspired by [taste-skill's stitch-skill pattern](https://github.com/Leonxlnx/taste-skill), DesignDNA operates in two stages rather than as a single monolithic reference.

### Stage 1 — Methodology load (this file)
The AI editor loads this SKILL.md (~general methodology) once at session start. This teaches the agent:
- How to read a brand DNA directory
- How to apply the 9-section DESIGN.md standard
- How to enforce anti-slop rules and pre-flight checks
- How to pick a brand archetype for the user's project

### Stage 2 — Project artifact generation (CLI-generated)
Run `npx designdna craft --brand=<name>` from the user's project root. This generates a **`PROJECT-DESIGN.md`** file that:
- Bundles the chosen brand's DNA + BANNED patterns
- Declares the project's dial values (formality/motion/density/warmth/contrast)
- Embeds the pre-flight checklist
- Becomes the single source of truth for all future UI generations

After Stage 2, every UI prompt the user types should reference `PROJECT-DESIGN.md` rather than re-explaining the design system.

### Workflow summary

```
┌──────────────────┐      ┌─────────────────────┐      ┌────────────────────┐
│  SKILL.md        │      │  npx designdna      │      │  PROJECT-DESIGN.md │
│  (methodology)   │ ───► │  craft --brand=X    │ ───► │  (project artifact)│
│  Loaded once     │      │  Run once per proj  │      │  Read per prompt   │
└──────────────────┘      └─────────────────────┘      └────────────────────┘
                                     │
                                     ▼
                          Optionally: --blend=Y
                                     --motion=N
                                     --density=N
                                     ...dials overrides
```

### CLI craft examples

```bash
# Pure brand baseline
npx designdna craft --brand=apple --name="Acme Studio"

# Apple baseline, more motion, denser
npx designdna craft --brand=apple --motion=7 --density=5

# Blend two brands 50/50
npx designdna craft --brand=stripe --blend=vercel --name="Modern SaaS"

# 70/30 blend
npx designdna craft --brand=linear --blend=notion --blend-ratio=7:3
```

The resulting `PROJECT-DESIGN.md` is committed to the user's repo and becomes the durable design contract. When the design evolves, they edit this file — everyone (humans and AI) reads from it.

---

## What is DESIGN.md?

DESIGN.md is a concept from [Google Stitch](https://stitch.withgoogle.com/docs/design-md/overview/) — a plain-text design system document that AI agents read to generate consistent, high-quality UI. Markdown is the format LLMs read best; no Figma exports, no JSON schemas, no special tooling required.

| File | Who reads it | What it defines |
|------|-------------|-----------------|
| `AGENTS.md` | Coding agents | How to build the project |
| `DESIGN.md` | Design agents | How the project should look and feel |

---

## Part 1: The 9-Section DESIGN.md Standard

Every DESIGN.md MUST follow this exact 9-section architecture. This consistency enables AI agents to parse and implement any design system predictably.

### Section 1: Visual Theme & Atmosphere
**Purpose**: Establish the emotional and philosophical foundation of the design.

**Requirements**:
- 150-300 words of narrative prose, NOT bullet points
- Describe the emotional quality (warm, clinical, cinematic, editorial, etc.)
- Articulate design density (airy vs. data-dense)
- State the core design philosophy in one sentence
- Use sensory/spatial metaphors (e.g., "theater-like darkness", "Swiss watch precision", "parchment warmth")

**Patterns from world-class brands**:
- **Vercel**: "Precision-engineered monochrome" — black/white purity, Geist typeface authority
- **Stripe**: "Whisper-weight elegance" — weight-300 lightness, blue-tinted depth
- **Airbnb**: "Photography-driven warmth" — coral accent, warm near-black (#222222, not #000)
- **Linear**: "Precision in darkness" — dark-mode-native, semi-transparent white layers
- **Tesla**: "Radical subtraction" — zero shadows, single accent color, photography carries emotion
- **Claude**: "Editorial warmth" — parchment canvas, serif/sans split, magazine-like pacing
- **Spotify**: "Content-first darkness" — UI recedes, album art is the primary color source
- **Notion**: "Quality paper, not sterile glass" — warm neutrals, whisper borders
- **Figma**: "White gallery wall displaying colorful art" — monochrome chrome + vibrant showcases
- **Framer**: "Nightclub for web designers" — cinematic dark canvas, extreme letter-spacing compression

### Section 2: Color Palette & Roles
**Purpose**: Define every color with its semantic purpose.

**Organization** (NEVER use a flat list — always group by semantic purpose):

```
### Primary & Brand
- **Brand Color** (`#hexcode`): CSS variable name, semantic purpose and usage

### Secondary & Accent
- Variant 1: description
- Variant 2: description

### Text Scale (3-5 tiers)
- Primary text: color + when to use
- Secondary text: color + when to use
- Tertiary text: color + when to use
- Quaternary/Disabled: color + when to use

### Surface & Background (2-6 variants)
- Base background
- Elevated surface
- Overlay surface

### Interactive States
- Default, Hover, Focus, Active, Disabled

### Borders & Dividers
- Primary border, subtle border, focus ring

### Semantic
- Error, Success, Warning, Info

### Shadows
- Shadow colors with opacity values
```

**Key patterns from top brands**:
- **Always include hex code + semantic name + use case** in every color entry
- **Warm neutrals outperform cold grays**: Airbnb uses #222222 (warm near-black), Claude uses #5e5d59 (olive gray), Notion uses rgba(0,0,0,0.95) — NOT pure #000000
- **Brand accent restraint**: Tesla uses ONE accent color (#3E6AE1). Spotify reserves green ONLY for play/active. Coinbase uses blue only for primary CTAs
- **Dark mode colors**: Linear uses semi-transparent whites for borders (rgba(255,255,255,0.05-0.08)). Raycast uses double-ring containment technique

### Section 3: Typography Rules
**Purpose**: Define the complete type system.

**Required structure**:

1. **Font Families** — Primary, secondary, monospace with fallback stacks
2. **Hierarchy Table** (Markdown table format):

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | ... | ...px | ... | ... | ...px | ... |
| Section Heading | ... | ... | ... | ... | ... | ... |
| Body | ... | ... | ... | ... | ... | ... |

3. **Typography Principles** — Weight philosophy, spacing rules, OpenType features

**Key patterns from top brands**:

**Weight Systems** (no brand uses more than 4 weights):
- **2-weight systems**: Tesla (400/500), Claude (400/500) — hierarchy through serif/sans split or size alone
- **3-weight systems**: Vercel (400/500/600), Stripe (300/400/500) — strict role assignment per weight
- **Micro-weight systems**: Linear (300/400/510/590), Figma (320-540 variable) — precision through interpolation

**Letter-Spacing Rules**:
- **Negative at large sizes**: Universal rule. Vercel: -2.4px at 64px. Framer: -5.5px at 110px. Notion: -2.125px at 64px
- **Zero or positive at body**: Most systems use 0px at 14-16px body text
- **Positive at small sizes**: Raycast uses +0.2px to +0.4px for airy readability in dark UIs
- **Formula**: letter-spacing = -(fontSize * 0.03 to 0.05) for headlines; 0 for body; +(0.01 to 0.02) for captions

**OpenType Features** (frequently required):
- Stripe: `"ss01"` stylistic set required on ALL text
- Linear: `"cv01", "ss03"` on Inter — character variant + stylistic set
- Figma: `kern` enabled globally
- Raycast: `"calt", "kern", "liga", "ss03"` on Inter
- Notion: NotionInter with custom rendering

### Section 4: Component Stylings
**Purpose**: Define visual specifications for all major UI elements.

**Required components** (minimum):
1. **Buttons** — Primary, Secondary, Ghost/Text variants with all states
2. **Cards & Containers** — Standard, Elevated, Featured variants
3. **Input Fields** — Text input, Select, Textarea with focus states
4. **Navigation** — Header, sidebar, tabs, breadcrumbs
5. **Images & Media** — Aspect ratios, border radius, overlay treatment
6. **Distinctive Components** — Brand-specific unique elements

**Format for each component**:
```
### Component Name

**Variant Name (Context)**
- Background: color value
- Text/Color: value
- Padding: value (often asymmetric)
- Radius: value
- Border/Shadow: CSS value
- Hover: state change description
- Focus: state change description
- Use: explicit use case
```

**Key patterns from top brands**:

**Button Philosophies**:
- **Vercel**: Shadow-as-border technique (ring shadow instead of border property)
- **Stripe**: Blue-tinted shadows for chromatic depth
- **Spotify**: Pill-and-circle geometry (9999px radius), uppercase + wide letter-spacing
- **Linear**: Near-transparent backgrounds (rgba(255,255,255,0.02-0.05))
- **Framer**: Frosted pill with inset shadow + scale transform on hover
- **Raycast**: Opacity transition for hover (NOT background-color change)
- **Tesla**: Zero decoration — single blue CTA, everything else is ghost

**Card Patterns**:
- **Notion**: 4-5 layer shadow stacks with cumulative opacity never exceeding 0.05
- **Airbnb**: Three-layer graduated shadows (0.02 + 0.04 + 0.1 opacity) for "warm lift"
- **Framer**: Blue ring shadow border (`rgba(0,153,255,0.15) 0px 0px 0px 1px`)
- **Raycast**: Double-ring technique (outer + inset borders)
- **Claude**: Ring shadows (`0px 0px 0px 1px`) + whisper drops

### Section 5: Layout Principles
**Purpose**: Define spacing, grid, and spatial relationships.

**Required subsections**:
1. **Spacing Scale** — Base unit + full scale table
2. **Grid System** — Column count, gutter, max-width
3. **Whitespace Philosophy** — How space is used as a design element
4. **Border Radius Scale** — Named variants from sharp to pill

**Universal rule**: ALL world-class design systems use **8px as the base unit**.

**Border Radius Scale** (universal pattern — 8 named variants):
| Name | Value | Use |
|------|-------|-----|
| None/Sharp | 0px | Inline tags, dividers |
| Micro | 2px | Small interactive elements |
| Subtle | 4px | Buttons, inputs, small containers |
| Standard | 6-8px | Cards, standard containers |
| Comfortable | 12px | Featured cards, panels |
| Relaxed | 16-20px | Large containers, media |
| Pill | 9999px | Badges, tags, status pills |
| Circle | 50% | Avatars, icon buttons |

### Section 6: Depth & Elevation
**Purpose**: Define how visual layers are communicated.

**Required**: Level table (0 to 3-5 levels) with shadow CSS values and use cases.

**Key shadow philosophies from top brands**:
- **Multi-layer architectural** (Vercel): border + elevation + ambient + inner — each layer serves a distinct purpose
- **Chromatic-tinted** (Stripe): `rgba(50,50,93,0.25)` — shadows carry brand color
- **Warm graduated** (Airbnb): Progressive opacity (0.02 → 0.04 → 0.1) for natural lift
- **Inverted/dark** (Linear): Semi-transparent white borders + inset shadows on dark surfaces
- **Zero shadows** (Tesla): Elevation through z-index, opacity, and photography only
- **Ring-based** (Claude): `0px 0px 0px 1px` ring shadows + whisper ambient drops
- **Multi-ring containment** (Raycast): Outer ring + inset ring + ambient glow

### Section 7: Do's and Don'ts
**Purpose**: Explicit guardrails preventing design drift.

**Format**:
```
### Do
- Use [specific pattern] because [reason]
- Always [required behavior]

### Don't
- Don't use [anti-pattern] because [consequence]
- Never [forbidden behavior]
```

**Minimum 10 rules total** (5 Do + 5 Don't).

**Common patterns across all brands**:
- DO maintain weight restraint (max 3-4 weights)
- DO use brand accent color sparingly (one purpose, not decoration)
- DO include OpenType features when specified
- DO use warm neutrals over cold grays (unless brand dictates otherwise)
- DON'T use pure black (#000000) for text on light backgrounds
- DON'T skip letter-spacing adjustments at different sizes
- DON'T use light/thin weights on dark backgrounds (readability)
- DON'T apply brand colors decoratively (reserve for semantic purposes)
- DON'T use uniform shadow opacity across all elevation levels

### Section 8: Responsive Behavior
**Purpose**: Define how the design adapts across screen sizes.

**Required subsections**:
1. **Breakpoints** — Table with name, pixel width, key layout changes
2. **Touch Targets** — Minimum tap sizes (typically 44x44px minimum)
3. **Collapsing Strategy** — How multi-column layouts simplify
4. **Image Behavior** — How media scales and crops

### Section 9: Agent Prompt Guide
**Purpose**: Enable AI agents to generate brand-matching designs immediately.

**Required subsections**:
1. **Quick Color Reference** — 5-15 most-used colors with hex codes and roles
2. **Example Component Prompts** — 3-5 full natural-language component descriptions with ALL specifications (hex codes, sizes, weights, radii, shadows)
3. **Iteration Tips** — 4-8 practical tips emphasizing brand-critical choices

**Prompt format example**:
> "Create a dark card: #181818 background, 8px radius. Title at 16px weight 700, white text. Subtitle at 14px weight 400, #b3b3b3. Shadow rgba(0,0,0,0.3) 0px 8px 8px on hover."

---

## Part 2: Design Analysis Framework

When analyzing a website to create a DESIGN.md or when generating new UI, follow this systematic approach:

### Step 1: Identify the Design Archetype

Classify the design into one of these proven archetypes (from 58 brand analysis):

| Archetype | Characteristics | Example Brands |
|-----------|----------------|----------------|
| **Precision Monochrome** | Black/white purity, tight type, engineering feel | Vercel, HashiCorp, SpaceX |
| **Warm Editorial** | Parchment tones, serif/sans split, magazine pacing | Claude, Notion, Airbnb |
| **Dark Cinematic** | Deep blacks, single accent, photography-dominant | Tesla, SpaceX, RunwayML |
| **Vibrant Gradient** | Bold color transitions, light weights, data-rich | Stripe, Cohere, Figma |
| **Dark Instrument** | Void-black, multi-ring containment, tool-like precision | Linear, Raycast, Warp, Cursor |
| **Content Stage** | UI recedes, content is hero, pill geometry | Spotify, ElevenLabs, Pinterest |
| **Friendly Warm** | Bright accents, rounded corners, illustration-driven | Zapier, Lovable, Miro |
| **Premium Automotive** | Full-viewport imagery, extreme minimalism, custom type | BMW, Ferrari, Lamborghini, Renault |
| **Enterprise Trust** | Structured grids, blue palettes, data density | IBM, Coinbase, MongoDB |
| **Developer Native** | Monospace accents, code-forward, terminal aesthetic | Supabase, Resend, Expo, Warp |

### Step 2: Extract Design DNA

For each design, identify these 7 DNA markers:

1. **Signature Color Move** — What's the ONE color decision that makes this brand recognizable?
   - Stripe: purple gradients (#533afd)
   - Spotify: green ONLY for play (#1ed760)
   - Airbnb: Rausch Red (#ff385c) as sole accent

2. **Typography Signature** — What's the ONE type decision that defines the brand?
   - Stripe: weight 300 ("whisper-weight authority")
   - Linear: weight 510 (between regular and medium)
   - Framer: -5.5px letter-spacing at 110px (extreme compression)
   - Figma: variable weight 320-540 (never standard 400/500/600)

3. **Depth Philosophy** — How does the brand communicate layers?
   - Shadow-heavy (Vercel), shadow-free (Tesla), ring-based (Claude), chromatic (Stripe)

4. **Geometry DNA** — What shapes dominate?
   - Pill/circle (Spotify), sharp rectangles (Vercel), soft rounds (Airbnb), mixed (Linear)

5. **Temperature** — Warm or cool neutrals?
   - Warm: Claude, Notion, Airbnb (yellow-brown undertones in grays)
   - Cool: Vercel, Linear, IBM (blue-gray undertones)
   - Neutral: Tesla, SpaceX (true grays)

6. **Density** — How much content per viewport?
   - Sparse: Tesla, Apple, SpaceX (one message per screen)
   - Medium: Vercel, Stripe, Notion (balanced information)
   - Dense: Linear, Sentry, PostHog (data-rich dashboards)

7. **Motion Signature** — What's the characteristic animation?
   - Tesla: 0.33s cubic-bezier universal timing
   - Framer: scale(0.85) transform on buttons
   - Raycast: opacity transitions (never background-color changes)

### Step 3: Generate the DESIGN.md

Follow the 9-section structure exactly. Quality checklist:

- [ ] Section 1: 200+ words of philosophical narrative (NOT bullet points)
- [ ] Section 2: 15+ colors organized by semantic purpose (NOT a flat list)
- [ ] Section 3: 10+ typography roles in table format with all 6 columns
- [ ] Section 4: 4+ component categories with variant specifications
- [ ] Section 5: 8px base unit, full spacing scale, border radius table
- [ ] Section 6: 3+ elevation levels with exact CSS shadow values
- [ ] Section 7: 10+ Do/Don't rules with reasons
- [ ] Section 8: Breakpoint table, touch targets, collapsing strategy
- [ ] Section 9: Quick color reference + 3+ example prompts + iteration tips

---

## Part 3: Implementation Guidelines

When implementing UI from a DESIGN.md or generating new interfaces:

### Color Implementation Rules

1. **Never use pure black for text on light backgrounds** — Use warm near-black (#222222, rgba(0,0,0,0.95), or #1a1a1a)
2. **Organize CSS variables by semantic purpose**, not alphabetically:
   ```css
   /* Surface */
   --bg-primary: #ffffff;
   --bg-elevated: #fafafa;
   /* Text */
   --text-primary: #222222;
   --text-secondary: #666666;
   /* Brand */
   --accent: #ff385c;
   ```
3. **Reserve brand accent colors for semantic purposes** — CTAs, active states, links. Never decorative.
4. **Dark mode is not color inversion** — It's a separate palette with luminance-stacking (Linear model: background opacity steps)

### Typography Implementation Rules

1. **Letter-spacing MUST scale with font size**:
   - Display (48px+): negative (-0.03em to -0.05em)
   - Heading (24-48px): slightly negative (-0.01em to -0.02em)
   - Body (14-18px): 0 or normal
   - Caption (10-13px): slightly positive (+0.01em to +0.02em)

2. **Weight assignments must be strict** — each weight has ONE semantic purpose:
   - 300: De-emphasis, secondary information (Stripe model)
   - 400: Body text, reading content
   - 500: UI labels, interactive elements, emphasis
   - 600: Headings, section titles
   - 700: Display, hero statements

3. **Always specify OpenType features** when the design system requires them

4. **Line-height compression at scale**:
   - Display: 0.85-1.0
   - Heading: 1.0-1.2
   - Body: 1.4-1.6
   - Caption: 1.3-1.5

### Shadow Implementation Rules

1. **Multi-layer shadows are superior to single-layer** — Use 2-4 layers for natural depth
2. **Shadow opacity should never exceed 0.3** on any single layer (Notion rule: cumulative max 0.05)
3. **Match shadow temperature to the design**:
   - Warm designs: shadows with brown/yellow tint
   - Cool designs: shadows with blue tint (Stripe: `rgba(50,50,93,0.25)`)
   - Neutral: pure black at low opacity
4. **Ring shadows for containment** — `0px 0px 0px 1px rgba(...)` replaces border for cleaner rendering

### Component Implementation Rules

1. **Buttons**: Max 3 variants (primary, secondary, ghost). States: default, hover, focus, active, disabled
2. **Cards**: Always use multi-layer shadows. Hover state should enhance, not transform
3. **Inputs**: Focus state must be visually distinct (ring, glow, or color shift)
4. **Navigation**: Active state through weight or background change, not color alone

---

## Part 4: Design Quality Anti-Patterns

### Forbidden Patterns (from 58-brand analysis)

These patterns were ABSENT from all 58 world-class design systems:

1. **Generic AI aesthetic** — Default gradient backgrounds, centered layouts, stock imagery
2. **Rainbow color palettes** — More than 3 accent colors competing for attention
3. **Uniform border-radius** — Same radius on every element regardless of size
4. **Single-layer shadows** — `box-shadow: 0 2px 4px rgba(0,0,0,0.1)` alone
5. **Pure black text** (#000000) on white backgrounds
6. **Uniform letter-spacing** — Same tracking at all font sizes
7. **More than 4 font weights** — Weight proliferation dilutes hierarchy
8. **Decorative use of brand colors** — Brand color on borders, backgrounds, dividers
9. **Template-centered layouts** — Everything centered, symmetrical, predictable
10. **Thin/light fonts on dark backgrounds** — Below weight 400 on dark surfaces

### Quality Signals (present in ALL top brands)

1. Negative letter-spacing on headlines (every single one of 58 brands)
2. Multi-layer shadow systems (or deliberate zero-shadow philosophy)
3. Semantic color organization (never a flat color list)
4. Typography hierarchy with 8+ distinct roles
5. Explicit Do's and Don'ts preventing drift
6. Warm neutrals (even "cool" brands avoid pure gray)
7. 8px spacing base unit (universal)
8. Consistent border-radius scale (8 named variants)
9. Brand accent used for ONE primary purpose
10. Component states fully specified (hover, focus, active, disabled)

---

## Part 5: Quick Reference Card

### When starting any UI design task:

1. **Check for existing DESIGN.md** in the project root
2. **If exists**: Read it completely, follow it exactly
3. **If not exists**: Ask the user which brand aesthetic to follow, or identify the closest archetype
4. **Generate DESIGN.md first** before writing any UI code (unless user has existing pages to patch)

### The 10 Universal Design Rules (from 58 brands):

1. Use 8px as base spacing unit
2. Limit to 2-4 font weights maximum
3. Scale letter-spacing inversely with font size
4. Organize colors by semantic purpose
5. Use multi-layer shadows (or deliberately zero)
6. Reserve brand accent for ONE semantic purpose
7. Use warm near-black for text, never pure #000000
8. Define 8 border-radius variants from sharp to pill
9. Every component needs 4 states: default, hover, focus, disabled
10. Write Do's and Don'ts to prevent design drift

---

## Part 6: Existing Project UI Audit & Optimization

When the user wants to optimize or upgrade the UI of an existing project, follow this systematic workflow.

### Workflow Overview

```
Existing Project
  ├─ Step 1: Extract current design DNA (read code + screenshots)
  ├─ Step 2: Audit against 10 Universal Rules (identify violations)
  ├─ Step 3: Generate improvement DESIGN.md (target state)
  ├─ Step 4: Prioritized refactoring plan (high-impact first)
  └─ Step 5: Incremental implementation (one system at a time)
```

### Step 1: Extract Current Design DNA

Read the project's existing CSS/styles and identify the current state:

**What to extract**:
```
1. Colors currently in use:
   - grep/search for hex codes (#xxx, #xxxxxx), rgb(), rgba(), hsl()
   - List all unique colors, group by apparent purpose
   - Check: are they organized by semantic purpose? or random?

2. Typography currently in use:
   - font-family declarations (how many fonts?)
   - font-weight values (how many weights? which ones?)
   - font-size values (how many distinct sizes?)
   - letter-spacing values (are they scaling with size?)
   - line-height values (are they compressing at larger sizes?)

3. Spacing patterns:
   - padding/margin values (are they on 8px grid?)
   - gap values
   - Any evidence of a spacing scale?

4. Shadow system:
   - box-shadow declarations (single-layer or multi-layer?)
   - shadow colors (warm, cool, or pure black?)
   - how many distinct shadow levels?

5. Border radius:
   - border-radius values (how many unique values?)
   - are they systematic or random?

6. Component patterns:
   - Button variants and their states
   - Card patterns
   - Input styles
   - Navigation treatment
```

**Commands to run** (adjust for the project's tech stack):
```bash
# Find all color values
grep -rn '#[0-9a-fA-F]\{3,8\}' src/ --include="*.css" --include="*.scss" --include="*.tsx" --include="*.vue"

# Find all font-weight values
grep -rn 'font-weight' src/ --include="*.css" --include="*.scss"

# Find all box-shadow values
grep -rn 'box-shadow' src/ --include="*.css" --include="*.scss"

# Find all border-radius values
grep -rn 'border-radius' src/ --include="*.css" --include="*.scss"

# Find all font-size values
grep -rn 'font-size' src/ --include="*.css" --include="*.scss"
```

### Step 2: Audit Against 10 Universal Rules

Score each rule as PASS / PARTIAL / FAIL:

| # | Rule | Check | Common Violations |
|---|------|-------|-------------------|
| 1 | 8px base spacing | Are padding/margin/gap on 8px grid? | Random values like 13px, 17px, 25px |
| 2 | Max 4 font weights | Count distinct font-weight values | 5+ weights scattered without purpose |
| 3 | Letter-spacing scales | Negative at display, zero at body? | Uniform 0px or uniform -1px everywhere |
| 4 | Semantic color organization | Colors grouped by purpose in variables? | Flat list, or colors defined inline |
| 5 | Multi-layer shadows | 2+ shadow layers per elevation? | Single `0 2px 4px rgba(0,0,0,0.1)` everywhere |
| 6 | Brand accent restraint | Brand color used for ONE purpose? | Brand color on borders, backgrounds, dividers |
| 7 | Warm near-black text | Text color is warm, not #000? | Pure #000000 on white backgrounds |
| 8 | Border-radius scale | Systematic radius variants? | Random values or same radius everywhere |
| 9 | 4 component states | hover/focus/disabled defined? | Missing focus states, no disabled styles |
| 10 | Do's/Don'ts exist | Any design guardrails documented? | No documentation, inconsistent patterns |

### Step 3: Generate Improvement DESIGN.md

Based on the audit, generate a DESIGN.md that:
1. **Preserves** what's already working well (don't break what's good)
2. **Fixes** rule violations with specific improvements
3. **Elevates** the design toward the closest world-class archetype

**Output format for the user**:
```markdown
## UI Audit Report

### Current State
- Design archetype: closest to [archetype]
- Overall score: X/10 rules passing

### Critical Issues (fix first)
1. [Violation]: [current state] → [target state]
2. ...

### Enhancement Opportunities
1. [Improvement]: [why] → [how]
2. ...

### Generated DESIGN.md
[Full 9-section DESIGN.md targeting the improved state]
```

### Step 4: Prioritized Refactoring Plan

Always refactor in this order (highest visual impact → lowest risk):

**Phase 1 — Color System (biggest visual impact, lowest risk)**
- Extract all colors into CSS custom properties
- Reorganize by semantic purpose
- Replace pure #000 with warm near-black
- Establish text hierarchy (4 tiers)

**Phase 2 — Typography (high impact, low risk)**
- Consolidate to 2-4 weights with strict roles
- Add negative letter-spacing to headlines
- Fix line-height compression at scale
- Add OpenType features if applicable

**Phase 3 — Shadow & Depth (medium impact, low risk)**
- Replace single-layer shadows with multi-layer
- Choose a shadow philosophy (warm/ring/chromatic)
- Create elevation scale (3-5 levels)

**Phase 4 — Spacing & Layout (medium impact, medium risk)**
- Align all values to 8px grid
- Create spacing scale tokens
- Normalize border-radius to 8-variant scale

**Phase 5 — Component States (lower visual impact, higher completeness)**
- Add missing hover states
- Add focus rings for keyboard navigation
- Add disabled state styles
- Ensure 44px minimum touch targets

### Step 5: Incremental Implementation

**Key principle**: Implement ONE system at a time. Never mix phases.

For each phase:
1. Create the new design tokens (CSS variables / theme config)
2. Find-and-replace old values → new tokens
3. Visual regression check (screenshot before/after)
4. Commit the phase as a single atomic change

**Example — Phase 1 Color Refactoring**:
```css
/* BEFORE: scattered, flat, pure black */
.title { color: #000; }
.subtitle { color: gray; }
.card { background: white; border: 1px solid #ddd; }

/* AFTER: semantic, warm, organized */
:root {
  --text-primary: #222222;
  --text-secondary: #666666;
  --text-tertiary: #999999;
  --bg-primary: #ffffff;
  --bg-elevated: #fafafa;
  --border-primary: rgba(0,0,0,0.08);
  --border-subtle: rgba(0,0,0,0.04);
}
.title { color: var(--text-primary); }
.subtitle { color: var(--text-secondary); }
.card { background: var(--bg-elevated); border: 1px solid var(--border-primary); }
```

---

## Part 7: Stitch Prototype → Full Project Workflow

When the user has generated prototypes with Google Stitch (or any tool that produces HTML/images), follow this workflow to extract the design system and build the complete project.

### Workflow Overview

```
Stitch Output (HTML + Images)
  ├─ Step 1: Analyze prototype files (read HTML/CSS, view images)
  ├─ Step 2: Extract design tokens (colors, type, spacing, shadows)
  ├─ Step 3: Identify the design archetype (match to 58-brand patterns)
  ├─ Step 4: Generate complete DESIGN.md (fill gaps from archetype)
  ├─ Step 5: Build component library (from prototype patterns)
  ├─ Step 6: Implement full pages (using DESIGN.md + components)
  └─ Step 7: Responsive & production polish
```

### Step 1: Analyze Prototype Files

**For HTML files**:
```
1. Read ALL HTML files the user provides
2. Extract inline styles and <style> blocks
3. Identify linked stylesheets
4. List all unique CSS property values:
   - colors (hex, rgb, rgba, hsl)
   - font-family, font-size, font-weight, letter-spacing, line-height
   - padding, margin, gap (spacing values)
   - border-radius values
   - box-shadow values
   - background (gradients, images)
   - border values
5. Identify component patterns (buttons, cards, inputs, nav)
6. Note layout approach (flexbox, grid, float)
```

**For image files** (screenshots, mockups):
```
1. View the image to understand overall aesthetic direction
2. Note the dominant colors, typography style, spacing density
3. Identify the layout grid and spatial rhythm
4. Identify components visible in the mockup
5. Assess the emotional quality (warm, clinical, cinematic, etc.)
```

### Step 2: Extract Design Tokens

Create a structured extraction from the prototype:

```markdown
## Extracted Tokens from Prototype

### Colors Found
| Hex/Value | Where Used | Suggested Role |
|-----------|-----------|----------------|
| #______ | hero background | bg-primary |
| #______ | heading text | text-primary |
| #______ | CTA button | brand-accent |
| ... | ... | ... |

### Typography Found
| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| h1 | ... | ...px | ... | ... | ... |
| body | ... | ...px | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |

### Spacing Values Found
[list all padding/margin/gap values]

### Shadow Values Found
[list all box-shadow declarations]

### Border Radius Found
[list all border-radius values]

### Components Identified
[list buttons, cards, inputs, nav patterns found]
```

### Step 3: Identify Design Archetype

Compare the extracted tokens against the 10 archetypes:

**Matching heuristics**:
- Dark background + ring shadows + monospace → **Dark Instrument** (Linear/Raycast)
- White background + strict black/white + geometric type → **Precision Monochrome** (Vercel)
- Warm tones + serif headings + photography → **Warm Editorial** (Airbnb/Claude)
- Purple/blue gradients + light weights + data tables → **Enterprise Trust** (Stripe)
- Vivid multi-color + variable fonts + playful → **Vibrant Gradient** (Figma)
- Dark + content-first + pill shapes → **Content Stage** (Spotify)
- Bright accent + rounded + illustrations → **Friendly Warm** (Zapier)
- Full-viewport images + minimal UI + custom type → **Premium Automotive** (Tesla)

### Step 4: Generate Complete DESIGN.md

The prototype likely only covers PART of the design system. Fill the gaps:

**From prototype** (use actual extracted values):
- Section 2: Color Palette — use the extracted colors, organize semantically
- Section 3: Typography — use the extracted type specs
- Section 4: Component Stylings — codify the prototype's component patterns

**Fill from archetype** (use the matched archetype's patterns):
- Section 1: Visual Theme — write narrative based on prototype's aesthetic
- Section 5: Layout Principles — align extracted spacing to 8px grid, create scale
- Section 6: Depth & Elevation — systemize shadows found, or create from archetype
- Section 7: Do's and Don'ts — derive from prototype decisions + archetype rules
- Section 8: Responsive Behavior — create breakpoints matching prototype layout
- Section 9: Agent Prompt Guide — write prompts using actual extracted values

**Gap-filling rules**:
- If prototype has 5 colors → expand to 15+ using archetype's pattern
- If prototype has 3 type sizes → expand to 10+ role hierarchy
- If prototype has no shadows → add the archetype's shadow system
- If prototype has no focus states → add from archetype
- If spacing is not on 8px grid → snap to nearest 8px multiple
- If only light mode → create dark mode palette following archetype

### Step 5: Build Component Library

Extract reusable components from the prototype:

```
1. Identify ALL unique components in the prototype HTML
2. For each component, create a reusable version:
   - Use DESIGN.md tokens (CSS variables, not hardcoded values)
   - Add ALL 4 states (default, hover, focus, disabled)
   - Make responsive (test at mobile/tablet/desktop)
   - Add proper semantic HTML + accessibility attributes

3. Component hierarchy (build in this order):
   Level 1 — Atoms: Button, Input, Badge, Avatar, Icon
   Level 2 — Molecules: Card, Form Group, Nav Item, List Item
   Level 3 — Organisms: Navigation, Hero, Feature Section, Footer
   Level 4 — Templates: Full page layouts
```

### Step 6: Implement Full Pages

With the DESIGN.md + component library ready:

```
1. Create page layouts matching prototype structure
2. Use components from the library (never inline styles)
3. Populate with real content (not Lorem ipsum for final)
4. Check every element against DESIGN.md specifications
5. Verify: colors ✓, type ✓, spacing ✓, shadows ✓, radius ✓, states ✓
```

### Step 7: Production Polish

Final quality gate:

```
□ All colors use CSS variables from DESIGN.md
□ Typography follows the hierarchy table exactly
□ All spacing on 8px grid
□ All shadows match the elevation system
□ All interactive elements have 4 states
□ Responsive at all breakpoints (320px → 1920px)
□ Touch targets ≥ 44px on mobile
□ Contrast ratios meet WCAG AA (4.5:1 body, 3:1 large)
□ Focus rings visible for keyboard navigation
□ No pure #000000 text on light backgrounds
□ Brand accent used for ONE purpose only
□ Design matches prototype intent (screenshot comparison)
```

---

## Part 8: Practical Usage Scenarios

### Scenario A: "Optimize my existing project's UI"

**What to say to AI**:
> "Read my project's CSS/styles and run a UI audit against the DesignDNA rules. Show me what violations exist and create a phased improvement plan."

**What happens**:
1. AI reads your styles (CSS/SCSS/Tailwind config/styled-components)
2. Scores against 10 Universal Rules
3. Identifies closest archetype
4. Generates improvement DESIGN.md
5. Provides Phase 1-5 refactoring plan
6. Implements changes incrementally

### Scenario B: "I have Stitch prototypes, build the full project"

**What to say to AI**:
> "I have HTML prototypes from Google Stitch in [directory]. Extract the design tokens, generate a complete DESIGN.md, then build the full project using [React/Vue/etc.]."

**What happens**:
1. AI reads your prototype HTML files (and views any images)
2. Extracts all design tokens (colors, type, spacing, shadows)
3. Identifies the closest design archetype
4. Generates complete DESIGN.md (filling gaps from archetype)
5. Builds component library using extracted tokens
6. Implements full pages matching prototype layout
7. Adds responsive behavior + production polish

### Scenario C: "Make my UI look like [brand]"

**What to say to AI**:
> "Redesign my project's UI to match the [Stripe/Linear/Notion/etc.] aesthetic. Use the awesome-design-md reference for [brand]."

**What happens**:
1. AI reads the reference brand's DESIGN.md from awesome-design-md collection
2. Audits your current UI against that brand's design system
3. Generates a project-specific DESIGN.md adapting the brand's patterns
4. Implements the redesign following the phased plan

### Scenario D: "Generate a DESIGN.md for my project"

**What to say to AI**:
> "Analyze my project and generate a DESIGN.md. My project is a [type] and I want the aesthetic to feel [description]."

**What happens**:
1. AI identifies the closest archetype
2. Reads your existing code for any design patterns already in place
3. Generates a complete 9-section DESIGN.md
4. Provides example component prompts tuned to your project

### Scenario E: "Review my UI quality"

**What to say to AI**:
> "Review my project's UI against production design standards. Score it and tell me what to fix first."

**What happens**:
1. AI extracts current design DNA from your code
2. Scores each of the 10 Universal Rules
3. Compares against world-class brand patterns
4. Provides prioritized fix list with specific CSS changes

---

### Archetype Quick Selector:

| If the project is... | Use archetype | Reference brands |
|----------------------|---------------|-----------------|
| Developer tool / CLI | Dark Instrument | Linear, Raycast, Warp |
| SaaS / Productivity | Precision Monochrome | Vercel, HashiCorp |
| Consumer / Marketplace | Warm Editorial | Airbnb, Notion |
| Fintech / Data | Enterprise Trust + Gradient | Stripe, Coinbase |
| AI / ML product | Warm Editorial or Dark Cinematic | Claude, xAI |
| Creative tool | Vibrant Gradient | Figma, Framer |
| Media / Content | Content Stage | Spotify, Pinterest |
| Automotive / Luxury | Premium Automotive | Tesla, BMW, Ferrari |
| E-commerce | Friendly Warm | Zapier, Lovable |
| Backend / Infra | Developer Native | Supabase, Resend |

---

## Part 9: Design Resource Integration & Consistency Enforcement

> **Core Problem**: LLMs often produce inconsistent colors, missing icons, and ugly placeholder graphics because they lack concrete resource anchoring. This section solves that by binding every design decision to a specific, accessible resource.
>
> See `RESOURCES.md` for the complete resource catalog.

### The 5 Consistency Killers (and How to Fix Them)

| # | Problem | Root Cause | Solution |
|---|---------|-----------|----------|
| 1 | **Colors drift across pages** | Colors defined inline, not as tokens | ALL colors MUST be CSS variables or theme tokens. NEVER use inline hex values in components. |
| 2 | **Icons inconsistent** | Mixing icon sets, or using emoji/text as icons | Choose ONE icon library per project. Install via npm for offline reliability. |
| 3 | **Illustrations missing or ugly** | LLM generates placeholder text instead of real assets | Specify exact illustration source + search term in DESIGN.md. Use SVG illustrations from unDraw/Storyset. |
| 4 | **Typography breaks on different OS** | Using system fonts without fallbacks | Always specify font via Fontsource (npm install) + proper fallback stack. |
| 5 | **Components look different across pages** | Not using a component library consistently | Choose ONE component library. Import from it. Never hand-code what the library provides. |

### Consistency Enforcement Rules (MANDATORY)

**Rule C1 — One Icon Library Per Project**
```
BEFORE writing any UI code, declare the icon library:
  "This project uses [Lucide/Heroicons/Tabler/etc.]"
  
Then ALWAYS import from that library. NEVER:
  ❌ Mix Lucide icons with Heroicons
  ❌ Use emoji as icons (🔍 ← never this)
  ❌ Use Unicode symbols as icons (→ ← never this in UI)
  ❌ Use text characters as icons ("X" for close ← never this)
  
Install offline:
  npm i lucide-react          # React
  npm i @heroicons/react       # React + Tailwind
  npm i @tabler/icons-react    # React (largest set)
  npm i lucide-vue-next        # Vue
  npm i @iconify/react          # Universal (200k+ icons)

LOCAL FALLBACK (no npm needed):
  DesignDNA includes 750 pre-downloaded SVG icons in assets/icons/:
  - assets/icons/lucide/     → 436 icons, 20 categories
  - assets/icons/material/   → 314 icons, 16 categories
  - assets/ICON-INDEX.md     → searchable catalog with quick lookup table
  
  Copy SVGs directly into your project:
    cp designdna/assets/icons/lucide/actions/search.svg src/assets/icons/
    cp -r designdna/assets/icons/lucide/navigation/ src/assets/icons/
```

**Rule C2 — One Color Source of Truth**
```
ALL colors MUST flow from ONE source:
  Option A: DESIGN.md → CSS custom properties → components
  Option B: Component library theme (Tailwind config / Ant Design theme / etc.)
  
NEVER:
  ❌ Use inline color values: style={{ color: '#3b82f6' }}
  ❌ Use unnamed colors in CSS: color: #666;
  ❌ Approximate colors: "use a blue similar to..."
  
ALWAYS:
  ✅ color: var(--text-secondary);
  ✅ className="text-gray-600"  (Tailwind)
  ✅ Use theme tokens from chosen component library
```

**Rule C3 — Font Installation via npm (Offline-First)**
```
NEVER rely on Google Fonts CDN in production code.
ALWAYS install via Fontsource for offline reliability:

  npm i @fontsource-variable/inter
  npm i @fontsource-variable/jetbrains-mono
  npm i @fontsource/plus-jakarta-sans
  
Then import in your entry file:
  import '@fontsource-variable/inter';

Fallback stacks MUST include system fonts:
  font-family: 'Inter Variable', 'Inter', -apple-system, 
    BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 
    'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
```

**Rule C4 — Illustration Strategy (Never Leave Blank)**
```
For EVERY section that needs an illustration or image, specify:
  1. Source: which resource to use (unDraw, Unsplash, Storyset, etc.)
  2. Search terms: exact keywords to find the right asset
  3. Format: SVG for illustrations, WebP for photos
  4. Fallback: CSS gradient or pattern if image fails to load

Example in DESIGN.md:
  "Empty state illustration: unDraw 'no_data' in brand primary color #3b82f6"
  "Hero image: Unsplash search 'minimal workspace laptop' → WebP 1920x1080"
  "User avatars: UI Faces API or DiceBear generative avatars"
  
For programmatic avatar generation (no network needed):
  npm i @dicebear/core @dicebear/collection
```

**Rule C5 — Component Library Discipline**
```
Choose ONE primary component library at project start.
NEVER hand-build what the library already provides.
NEVER mix component libraries on the same page.

If the library lacks a specific component:
  1. Check if a headless version exists (Radix, Headless UI)
  2. Build it using the library's design tokens
  3. Style it consistently with the library's patterns
```

### Offline Resource Checklist

For production reliability, install these locally at project initialization:

```bash
# Icons (choose ONE)
npm i lucide-react                    # or lucide-vue-next

# Fonts (choose as needed)
npm i @fontsource-variable/inter
npm i @fontsource-variable/jetbrains-mono

# Animation
npm i framer-motion                   # React
npm i @vueuse/motion                  # Vue

# Illustrations (for generative avatars/placeholders)
npm i @dicebear/core @dicebear/collection

# Component library (choose ONE, see Tech Stack Matrix below)
npm i @radix-ui/themes                # or ant-design, etc.
```

---

## Part 10: Design-Driven Tech Stack Catalog & Recommendation

> **Scope**: This section recommends tech stacks from a **design expression** perspective — "which library best expresses this design intent?" For framework architecture, state management, build tools, and implementation patterns, defer to `frontend-patterns`, `web-development`, and `coding-standards` skills.
>
> **User Choice Protocol**:
> 1. When the user has NOT specified a tech stack → present the top 2-3 options with **design-focused** reasons, then ask "Which would you prefer?"
> 2. When the user HAS already chosen a stack → respect their choice, NEVER suggest switching. Adapt all design resource selections to match.
> 3. When the user's choice differs from recommendation → acknowledge, adapt, proceed. Design advice remains valid regardless of framework.
> 4. When another skill (e.g. `frontend-patterns`) recommends a different framework for engineering reasons → BOTH recommendations are valid. Present both perspectives, let user decide.

### 10.1 Web UI Frameworks — Complete Catalog

#### React Ecosystem

| Framework | Meta-Framework | Component Library Options | Best For |
|-----------|---------------|--------------------------|----------|
| **React** | — | Radix, shadcn/ui, Ant Design, Mantine, Chakra, NextUI, MUI | Interactive SPAs, complex state |
| **Next.js** | React SSR/SSG/RSC | shadcn/ui (recommended), Ant Design, Mantine | Full-stack web apps, SEO-critical |
| **Remix** | React SSR | shadcn/ui, Mantine, Chakra | Data-heavy apps, nested routing |
| **Gatsby** | React SSG | MUI, Chakra, Theme UI | Content sites, blogs, marketing |

**React Component Libraries — Full List**:

| Library | GitHub | Styling | Strength | Stars |
|---------|--------|---------|----------|-------|
| shadcn/ui | shadcn-ui/ui | Tailwind | Copy-paste, full control, best DX | 80k+ |
| Radix UI Primitives | radix-ui/primitives | Unstyled | Accessibility-first headless | 16k+ |
| Radix Themes | radix-ui/themes | Built-in | Pre-styled Radix | 5k+ |
| Ant Design | ant-design/ant-design | CSS-in-JS/Less | Enterprise CN, data-dense | 93k+ |
| MUI (Material UI) | mui/material-ui | Emotion/Styled | Material Design, largest component set | 95k+ |
| Mantine | mantinedev/mantine | CSS Modules | 100+ hooks, batteries-included | 27k+ |
| Chakra UI | chakra-ui/chakra-ui | Emotion | Accessible, great theming API | 38k+ |
| NextUI | nextui-org/nextui | Tailwind | Modern, beautiful defaults | 22k+ |
| Headless UI | tailwindlabs/headlessui | Tailwind | Official Tailwind unstyled | 26k+ |
| React Aria | adobe/react-spectrum | Any | Adobe's accessibility primitives | 13k+ |
| Arco Design | arco-design/arco-design | Less | ByteDance enterprise | 4k+ |
| Semi Design | DouyinFE/semi-design | SCSS | ByteDance modern enterprise | 8k+ |
| Geist UI | geist-org/geist-ui | CSS-in-JS | Vercel-style minimalist | 4k+ |
| Park UI | park-ui/park-ui | Tailwind | Ark UI + Park styling | 2k+ |
| DaisyUI | saadeghi/daisyui | Tailwind | Tailwind component classes | 34k+ |
| Flowbite React | themesberg/flowbite-react | Tailwind | Tailwind pre-built | 2k+ |

#### Vue Ecosystem

| Framework | Meta-Framework | Component Library Options | Best For |
|-----------|---------------|--------------------------|----------|
| **Vue 3** | — | TDesign, Element Plus, Naive UI, Vuetify, PrimeVue | Progressive web apps |
| **Nuxt 3** | Vue SSR/SSG | Naive UI, TDesign, Element Plus, PrimeVue | Full-stack Vue, SEO |

**Vue Component Libraries — Full List**:

| Library | GitHub | Styling | Strength | Stars |
|---------|--------|---------|----------|-------|
| Element Plus | element-plus/element-plus | SCSS | Most popular CN Vue3, forms | 25k+ |
| TDesign Vue Next | Tencent/tdesign-vue-next | Less/CSS | Tencent design, bilingual | 3k+ |
| Naive UI | tusen-ai/naive-ui | CSS-in-JS | TypeScript-first, 90+ components | 16k+ |
| Vuetify | vuetifyjs/vuetify | SASS | Material Design Vue, complete | 40k+ |
| PrimeVue | primefaces/primevue | CSS | 90+ components, enterprise | 10k+ |
| Ant Design Vue | vueComponent/ant-design-vue | Less | Ant Design in Vue | 20k+ |
| Arco Design Vue | arco-design/arco-design-vue | Less | ByteDance Vue | 2k+ |
| Vant 4 | vant-ui/vant | Less | Mobile-first Vue | 23k+ |
| NutUI | jd-opensource/nutui | SCSS | JD mobile Vue | 6k+ |
| Radix Vue | radix-vue/radix-vue | Unstyled | Radix primitives for Vue | 3k+ |
| shadcn-vue | radix-vue/shadcn-vue | Tailwind | shadcn/ui ported to Vue | 4k+ |
| Headless UI Vue | tailwindlabs/headlessui | Tailwind | Official Tailwind Vue unstyled | — |
| Flowbite Vue | themesberg/flowbite-vue | Tailwind | Tailwind pre-built Vue | 800+ |

#### Angular Ecosystem

| Framework | Component Library Options | Best For |
|-----------|--------------------------|----------|
| **Angular** | Angular Material, PrimeNG, NG-ZORRO, Clarity, Kendo UI | Large enterprise, strict structure |

**Angular Component Libraries**:

| Library | Styling | Strength |
|---------|---------|----------|
| Angular Material | SCSS | Google official Material Design |
| PrimeNG | CSS | 90+ components, enterprise |
| NG-ZORRO | Less | Ant Design for Angular, CN enterprise |
| Clarity | SCSS | VMware design system, data-heavy |
| Kendo UI | SCSS | Telerik commercial, powerful grids |
| Nebular | SCSS | Auth/theming/layout framework |
| Taiga UI | CSS | Tinkoff open-source, modern |

#### Svelte Ecosystem

| Framework | Meta-Framework | Component Library Options | Best For |
|-----------|---------------|--------------------------|----------|
| **Svelte** | — | Skeleton, shadcn-svelte, Flowbite Svelte | Lightweight, compiler-driven |
| **SvelteKit** | Svelte SSR/SSG | Skeleton, shadcn-svelte, Bits UI | Full-stack Svelte |

**Svelte Component Libraries**:

| Library | Styling | Strength |
|---------|---------|----------|
| shadcn-svelte | Tailwind | shadcn/ui ported to Svelte |
| Skeleton | Tailwind | Full design system, theming |
| Bits UI | Unstyled | Headless Svelte primitives |
| Flowbite Svelte | Tailwind | Pre-built Tailwind Svelte |
| DaisyUI + Svelte | Tailwind | Via DaisyUI classes |

#### Other Web Frameworks

| Framework | Type | Component Ecosystem | Best For |
|-----------|------|---------------------|----------|
| **Solid.js** | Reactive UI | Solid UI, Kobalte (headless) | Maximum performance, fine-grained reactivity |
| **SolidStart** | Solid meta-framework | Same as Solid.js | Full-stack Solid |
| **Qwik** | Resumable | Qwik UI | Instant page loads, O(1) startup |
| **Astro** | Content-first SSG | Any (React/Vue/Svelte islands) | Content sites, docs, blogs, marketing |
| **Lit** | Web Components | Shoelace (now Web Awesome) | Framework-agnostic, design system sharing |
| **Alpine.js** | Lightweight interactivity | + Tailwind/DaisyUI | Simple sites, progressive enhancement |
| **HTMX** | Hypermedia | + Tailwind/Bootstrap | Server-rendered interactivity, minimal JS |
| **Preact** | Lightweight React | Most React libraries | Size-critical React alternative |

### 10.2 Mobile Development — Complete Catalog

| Platform | Framework | UI Library | Best For |
|----------|-----------|-----------|----------|
| **React Native** | Expo (recommended) | React Native Paper, NativeBase, Tamagui, Gluestack | Cross-platform iOS + Android |
| **React Native** | Bare RN | Same + custom native modules | When Expo limits are hit |
| **Flutter** | Flutter SDK | Material 3, Cupertino, FluentUI | High-fidelity custom UI, both platforms |
| **iOS Native** | SwiftUI | Native components | Apple-exclusive, best iOS UX |
| **iOS Native** | UIKit | Native + third-party | Legacy iOS, complex custom UI |
| **Android Native** | Jetpack Compose | Material 3 Compose | Modern Android-exclusive |
| **Android Native** | XML Views | Material Components | Legacy Android |
| **Kotlin Multiplatform** | Compose Multiplatform | Material 3 | Kotlin across iOS + Android + Desktop |
| **Ionic** | Capacitor + React/Vue/Angular | Ionic Framework | Web-based hybrid mobile |
| **.NET MAUI** | XAML | .NET MAUI controls | C#/.NET cross-platform |
| **HarmonyOS** | ArkUI (ArkTS) | HarmonyOS components | Huawei HarmonyOS devices |

**React Native UI Libraries**:

| Library | Style | Strength |
|---------|-------|----------|
| React Native Paper | Material Design | Google Material, widely used |
| Tamagui | Optimizing compiler | Universal (web + native), fast |
| Gluestack UI | NativeWind/Tailwind | Tailwind-like for RN |
| NativeBase | Styled System | Accessible, themeable |
| React Native Elements | Customizable | Easy to start |
| RNUI (by Wix) | Customizable | Production-tested at Wix |
| Kitten UI | Eva Design | Design system with dark mode |

### 10.3 Mini Program — Complete Catalog

| Platform | Framework Options | UI Library | Best For |
|----------|-------------------|-----------|----------|
| **WeChat Mini** | Native WXML | TDesign Mini, Vant Weapp, WeUI, Lin UI | Single-platform WeChat |
| **Alipay Mini** | Native AXML | Ant Design Mini | Alipay ecosystem |
| **ByteDance Mini** | Native TTML | Arco Design Mini | Douyin/TikTok ecosystem |
| **UniApp** | Vue-based cross-platform | uView, TuniaoUI, uni-ui | Multi-platform mini + H5 + App |
| **Taro** | React/Vue cross-platform | NutUI, Vant Weapp, TDesign | Multi-platform from React/Vue |
| **mpx** | Vue-enhanced WXML | Any WeChat library | Enhanced native mini program |

**UniApp UI Libraries**:

| Library | Strength |
|---------|----------|
| uni-ui | Official, lightweight |
| uView | Popular, comprehensive |
| TuniaoUI | Modern, well-documented |
| tmui | Theme-powered, rich |
| FirstUI | Commercial quality, free tier |

### 10.4 Desktop Application — Complete Catalog

| Framework | Language | Web Engine | UI Options | Best For |
|-----------|---------|------------|-----------|----------|
| **Electron** | JS/TS | Chromium | Any React/Vue/Svelte lib | Feature-rich, large community |
| **Tauri** | Rust + JS/TS | System WebView | Any web lib | Small binary, secure, modern |
| **Wails** | Go + JS/TS | System WebView | Any web lib | Go developers |
| **Neutralino** | JS/TS | System WebView | Any web lib | Ultra-lightweight |
| **.NET MAUI** | C# | Native | MAUI controls | .NET enterprise |
| **WPF** | C# | Native | WPF controls | Windows-only enterprise |
| **SwiftUI Mac** | Swift | Native | Native macOS | Apple-native Mac apps |
| **Compose Desktop** | Kotlin | Skia | Material 3 | Kotlin cross-platform |
| **Qt** | C++/Python | Native | Qt Widgets/QML | Industrial, cross-platform |
| **GTK** | C/Rust/Python | Native | GTK4 widgets | Linux-native |
| **Flutter Desktop** | Dart | Skia | Material 3, Cupertino | From mobile to desktop |

### 10.5 CSS Strategy — Complete Catalog

| Approach | Library | Philosophy | Best Paired With |
|----------|---------|-----------|------------------|
| **Utility-First** | Tailwind CSS | Utility classes in HTML | shadcn/ui, Headless UI, DaisyUI, any headless |
| **Utility-First** | UnoCSS | Atomic, instant, extensible | Naive UI, Vue ecosystem |
| **Utility-First** | Windi CSS | Tailwind alternative (deprecated) | Legacy projects |
| **Component Classes** | Bootstrap | Pre-built component classes | jQuery, HTMX, traditional web |
| **Component Classes** | Bulma | Modern, no JS dependency | Simple sites, prototyping |
| **CSS Modules** | Built-in (CRA/Vite) | Scoped per-component | Mantine, custom design systems |
| **CSS-in-JS** | Styled Components | Tagged template literals | Chakra, custom React |
| **CSS-in-JS** | Emotion | Performant CSS-in-JS | MUI, Chakra |
| **CSS-in-JS** | Vanilla Extract | Zero-runtime, type-safe | High-performance, SSR |
| **CSS-in-JS** | Panda CSS | Zero-runtime utility | Modern type-safe styling |
| **CSS-in-JS** | StyleX | Facebook's atomic CSS-in-JS | Large-scale React apps |
| **CSS Variables** | Open Props | Pre-made custom properties | Any framework, progressive |
| **Pre-processor** | SASS/SCSS | Nesting, variables, mixins | Angular Material, Bootstrap |
| **Pre-processor** | Less | Simpler than SASS | Ant Design, Element Plus |

### 10.6 Special Scenario — Complete Catalog

| Scenario | Framework | UI Approach | Recommended Stack |
|----------|-----------|-----------|-------------------|
| **Chrome Extension** | React/Vue + Manifest V3 | shadcn/ui or Tailwind | Plasmo + React + Tailwind |
| **VS Code Extension** | VS Code Webview API | VS Code Toolkit | @vscode/webview-ui-toolkit |
| **Figma Plugin** | React in iframe | Figma Plugin DS | React + Figma DS tokens |
| **CLI UI** | Node.js | Ink (React for CLI) | Ink + Pastel |
| **Terminal TUI** | Node.js/Rust/Go | Blessed, Bubbletea, Ratatui | Go: Bubbletea; Rust: Ratatui |
| **Email Template** | React Email / MJML | Inline CSS | React Email + Resend |
| **PDF Generation** | React-PDF | In-document styling | @react-pdf/renderer |
| **3D / WebGL** | Three.js | React Three Fiber | R3F + Drei + Tailwind overlay |
| **Game UI** | Phaser / PixiJS | Canvas-based | Phaser 3 + custom UI |
| **Slideshows** | Reveal.js / Slidev | Markdown + themes | Slidev (Vue) for dev talks |
| **Documentation** | VitePress/Docusaurus/Nextra | Built-in themes | VitePress (Vue), Nextra (React) |
| **Blog/CMS** | Astro/Next.js/Nuxt | Content-focused | Astro + Tailwind + MDX |
| **Landing Page** | Next.js/Astro | Animation-heavy | Next.js + Tailwind + Framer Motion |
| **Admin/Dashboard** | Next.js/Nuxt | Data-dense | Ant Design / TDesign / Tremor |
| **E-commerce** | Next.js/Nuxt | Product-focused | Medusa + Next.js + shadcn/ui |
| **Real-time / Chat** | Next.js/Nuxt | Stream-based | shadcn/ui + Socket.io/WebSocket |
| **Map / GIS** | Any + Mapbox/Leaflet | Overlay UI | Tailwind + Mapbox GL JS |
| **PWA** | Any SSR framework | Service Worker | Next.js + next-pwa |
| **TV / Large Screen** | React Native TV / Compose TV | Focus-based navigation | Expo for TV |
| **Watch / Wearable** | SwiftUI / Wear Compose | Ultra-compact UI | Native per platform |

### 10.7 Design-Driven Recommendation Engine

> **Note**: This recommendation is from a DESIGN perspective — "which stack best expresses the target aesthetic?"
> If `frontend-patterns` or `web-development` skills are also active, their engineering perspective may differ. Present both and let the user decide.

**When the user asks to build something, follow this decision flow:**

```
Step 1: Ask "What platform?" (if not obvious from context)
   ├─ Web app       → Step 2a
   ├─ Mobile app    → Step 2b
   ├─ Mini program  → Step 2c
   ├─ Desktop app   → Step 2d
   ├─ Cross-platform → Step 2e
   └─ Special       → Step 2f

Step 2a (Web): Ask "What type of web app?"
   ├─ SaaS / Tool         → Next.js + shadcn/ui + Tailwind + Lucide
   ├─ Admin / Dashboard    → Next.js + Ant Design (or TDesign for CN)
   ├─ Landing page         → Astro or Next.js + Tailwind + Framer Motion
   ├─ Blog / Documentation → Astro + Tailwind (or VitePress for Vue)
   ├─ E-commerce           → Next.js + shadcn/ui + Commerce SDK
   ├─ Real-time / Chat     → Next.js + shadcn/ui + WebSocket
   ├─ Data visualization   → Next.js + Tremor or Recharts + Tailwind
   ├─ Chinese enterprise   → Vue 3 + Element Plus or TDesign
   └─ Portfolio / Creative → Astro or Next.js + Tailwind + GSAP

Step 2b (Mobile): Ask "Which platforms?"
   ├─ iOS + Android   → Expo (React Native) + Paper or Tamagui
   ├─ iOS only         → SwiftUI (native)
   ├─ Android only     → Jetpack Compose (native)
   ├─ High-fidelity UI → Flutter + Material 3
   └─ HarmonyOS        → ArkUI (ArkTS)

Step 2c (Mini Program): Ask "Which platform?"
   ├─ WeChat only       → Native + TDesign Mini or Vant Weapp
   ├─ Multi-platform    → UniApp + uView or Taro + NutUI
   ├─ Alipay            → Native + Ant Design Mini
   └─ ByteDance         → Native + Arco Design Mini

Step 2d (Desktop): Ask "Main language?"
   ├─ TypeScript/JS → Tauri + React/Vue + shadcn/ui + Tailwind
   ├─ Go            → Wails + Vue + Naive UI
   ├─ Rust          → Tauri native or Tauri + web frontend
   ├─ C#/.NET       → WPF or MAUI
   ├─ Kotlin        → Compose Desktop
   ├─ Swift         → SwiftUI macOS
   └─ C++/Python    → Qt or GTK

Step 2e (Cross-platform): Ask "Which surfaces?"
   ├─ Web + Mobile         → Next.js (web) + Expo (mobile) + shared Tailwind tokens
   ├─ Mobile + Desktop     → Flutter (all) or Compose Multiplatform
   ├─ Web + Mobile + Mini  → UniApp (Vue) or Taro (React)
   └─ All platforms        → Flutter or separate best-of-breed per platform

Step 2f (Special):
   ├─ Chrome extension → Plasmo + React + Tailwind
   ├─ VS Code extension → @vscode/webview-ui-toolkit
   ├─ CLI tool         → Ink (React for CLI)
   ├─ Email template   → React Email + Resend
   └─ 3D / Game        → Three.js + React Three Fiber
```

### 10.8 User Choice Override Protocol

**When the user has already chosen a stack that differs from our recommendation:**

```
User says: "I want to use [X]"

AI response pattern:
  1. Acknowledge: "Great, I'll build this with [X]."
  2. (Optional brief note ONLY if there's a significant trade-off):
     "Quick note: [X] works well for this. [Y] is also popular for this type of project 
      due to [reason], but [X] is a solid choice. Let's proceed with [X]."
  3. Adapt ALL selections to match:
     - Icon set → pick the best match for [X]
     - CSS approach → pick what's native to [X]
     - Animation → pick compatible library
     - Fonts → same (universal)
  4. Proceed without further questioning.
```

**Adaptation table — when user picks a specific framework, automatically pair:**

| User Chooses | Auto-Pair Icons | Auto-Pair CSS | Auto-Pair Animation |
|-------------|----------------|---------------|---------------------|
| React + any | Lucide React | Tailwind CSS | Framer Motion |
| Next.js | Lucide React | Tailwind CSS | Framer Motion |
| Vue + any | Iconify Vue | UnoCSS or Tailwind | @vueuse/motion |
| Nuxt | Iconify Vue | UnoCSS or Tailwind | @vueuse/motion |
| Angular | Angular Material Icons | SCSS | Angular Animations |
| Svelte / SvelteKit | Lucide Svelte | Tailwind CSS | Svelte transitions |
| Solid.js | Lucide (generic SVG) | Tailwind CSS | Solid Transition Group |
| Flutter | Material Icons | Flutter ThemeData | Flutter built-in |
| React Native / Expo | Expo Vector Icons | StyleSheet / NativeWind | Reanimated |
| UniApp | uni-icons | UniApp built-in | uni.animation |
| Taro | @tarojs/icons | Taro CSS | Taro animation API |
| Electron + React | Lucide React | Tailwind CSS | Framer Motion |
| Tauri + Vue | Iconify Vue | UnoCSS | @vueuse/motion |
| Wails + Vue | Iconify Vue | UnoCSS | @vueuse/motion |
| HTMX | Lucide (SVG) | Tailwind CSS | CSS transitions |
| Astro | Astro Icon | Tailwind CSS | View Transitions |

### 10.9 Project Bootstrap Quick Commands

**React / Next.js (Most Common)**:
```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint --app
cd my-app && npx shadcn@latest init
npm i lucide-react @fontsource-variable/inter framer-motion
```

**Vue / Nuxt**:
```bash
npx nuxi@latest init my-app
cd my-app && npm i naive-ui @iconify/vue @vueuse/motion
npm i @fontsource-variable/inter unocss -D
```

**Angular**:
```bash
ng new my-app --style=scss --routing
cd my-app && ng add @angular/material
npm i @fontsource-variable/inter
```

**Svelte / SvelteKit**:
```bash
npx sv create my-app
cd my-app && npx shadcn-svelte@latest init
npm i lucide-svelte @fontsource-variable/inter
```

**Astro**:
```bash
npm create astro@latest my-app -- --template minimal
cd my-app && npx astro add tailwind
npm i astro-icon @fontsource-variable/inter
```

**Expo (React Native)**:
```bash
npx create-expo-app my-app --template blank-typescript
cd my-app && npm i react-native-paper react-native-safe-area-context
npx expo install react-native-reanimated
```

**Flutter**:
```bash
flutter create my_app --platforms=android,ios
cd my_app
# Material 3 is built-in, enable in ThemeData
```

**Tauri (Desktop)**:
```bash
npm create tauri-app@latest my-app -- --template react-ts
cd my-app && npx shadcn@latest init
npm i lucide-react @fontsource-variable/inter framer-motion
```

**WeChat Mini Program + TDesign**:
```bash
# In mini program project root:
npm i tdesign-miniprogram
# Build npm in WeChat DevTools → Tools → Build npm
```

**UniApp**:
```bash
npx degit dcloudio/uni-preset-vue#vite-ts my-app
cd my-app && npm i uview-plus
```

**Chrome Extension**:
```bash
npm create plasmo@latest my-ext -- --with-tailwindcss
cd my-ext && npm i lucide-react @fontsource-variable/inter
```

---

## Part 11: Integrated Design-to-Development Workflow

This is the complete workflow that combines design resources, DESIGN.md, and tech stack into a seamless pipeline.

### Phase 0: Project Initialization

```
1. Identify project type and platform
2. Select tech stack from Part 10 matrix
3. Choose design archetype from Part 2
4. Initialize project with Quick Commands from Part 10
5. Install offline resources (icons, fonts, animation)
```

### Phase 1: Design System Setup

```
1. Generate DESIGN.md (9-section format from Part 1)
2. In Section 2 (Colors): 
   - Derive from archetype palette OR use Realtime Colors to preview
   - Define ALL as CSS variables or Tailwind theme
3. In Section 3 (Typography):
   - Install chosen fonts via Fontsource (offline)
   - Define hierarchy table with exact values
4. In Section 4 (Components):
   - Map to chosen component library's components
   - Document which library component implements each design element
5. Create theme configuration file matching DESIGN.md to library
```

### Phase 2: Asset Preparation

```
1. Icons: Import from chosen icon library (npm installed, offline)
   - List ALL icons needed by name: <Search />, <Settings />, <User />, etc.
   - NEVER use placeholder text for icons
   
2. Illustrations: Source from unDraw/Storyset
   - Download SVGs for: empty states, error pages, onboarding, features
   - Customize SVG colors to match DESIGN.md palette
   - Store locally in /public/illustrations/ or /src/assets/
   
3. Images: Source from Unsplash/Pexels
   - Download hero images, optimize to WebP
   - Generate responsive srcset versions
   - Store in /public/images/
   
4. Avatars: Use DiceBear for programmatic generation
   - No network dependency, consistent across reloads
```

### Phase 3: Component Implementation

```
1. Build from library primitives (shadcn/ui, Ant Design, etc.)
2. Apply DESIGN.md tokens via theme configuration
3. Verify: every component uses tokens, never inline values
4. Add all 4 states (default, hover, focus, disabled)
5. Screenshot each component → compare against DESIGN.md specs
```

### Phase 4: Page Assembly & Polish

```
1. Assemble pages from components
2. Populate with real content (not Lorem ipsum)
3. Insert illustrations and images from Phase 2
4. Add animations from chosen library (Framer Motion, etc.)
5. Responsive check at all breakpoints
6. Accessibility audit (contrast, focus, touch targets)
7. Visual regression: does it match the DESIGN.md intent?
```

### Consistency Verification Checklist

```
Before marking any page complete:
□ All colors come from CSS variables / theme tokens
□ All icons come from ONE icon library (npm installed)
□ All fonts installed via Fontsource (no CDN dependency)
□ All illustrations are real SVGs, not placeholder text
□ All images are optimized WebP with srcset
□ All components come from ONE library (no mixing)
□ All spacing on 8px grid
□ All interactive elements have hover + focus + disabled states
□ All text meets WCAG AA contrast (4.5:1 body, 3:1 heading)
□ All touch targets ≥ 44px on mobile
□ Dark mode works (if supported)
□ No inline styles with hardcoded color/size values
```

---

## Part 12: Advanced Integration — A2UI, Pretext & Automation

> Open-source projects that take AI-driven UI generation from "approximate" to "verifiable".

### 12.1 Google A2UI — Agent-to-User Interface Protocol

**What**: An open-source declarative protocol by Google for AI agents to generate structured, renderable UI — purpose-built for LLMs.
**Repo**: https://github.com/google/A2UI (13.9k stars, Apache 2.0)
**Site**: https://a2ui.org/

**Why it matters for this skill**:
A2UI solves the fundamental fragility of LLM-generated UI. Instead of asking a model to produce raw HTML/CSS (which can be subtly broken), A2UI defines a **JSON component schema** that renderers on each platform convert to native widgets. The model outputs data, not code.

**Core architecture**:
```
AI Agent → A2UI JSON (declarative components) → Platform Renderer → Native UI
                                                  ├─ React renderer
                                                  ├─ Angular renderer
                                                  ├─ Flutter renderer
                                                  ├─ Lit (Web Components)
                                                  └─ Markdown fallback
```

**When to use A2UI**:
- Building AI agent products that need to render dynamic UI based on LLM output
- When you need **guaranteed valid** UI output (no broken HTML/CSS)
- When targeting **multiple platforms** from a single agent (web + mobile + desktop)
- Streaming UI generation (A2UI's incremental `updateComponents` model matches token-by-token LLM output)

**When NOT to use A2UI**:
- Traditional web/app development (use standard frameworks)
- Static websites, marketing pages, blogs
- Projects where the developer writes all UI manually

**Integration with this skill**:
When building an A2UI-based agent:
1. Use DESIGN.md to define the visual system (colors, typography, spacing)
2. Map DESIGN.md tokens to A2UI component properties
3. The agent generates A2UI JSON referencing design tokens
4. Platform renderers apply the DESIGN.md styles
5. Result: consistent, cross-platform UI driven by both design system AND agent intelligence

**A2UI component example**:
```json
{
  "type": "card",
  "id": "product-card-1",
  "properties": {
    "title": "Product Name",
    "subtitle": "Description text",
    "image": "https://...",
    "actions": [
      { "type": "button", "label": "Add to Cart", "variant": "primary" }
    ]
  }
}
```

**Install**:
```bash
npm i @anthropic-ai/sdk  # or any LLM SDK
# + A2UI renderer for your platform:
npm i @anthropic-ai/a2ui-react   # React
npm i @anthropic-ai/a2ui-angular # Angular
# See https://a2ui.org/ for latest packages
```

### 12.2 Pretext — Verifiable Text Layout

**What**: A pure TypeScript library (by the creator of React Motion) for multiline text measurement and layout WITHOUT DOM access. 300-1,242x faster than `getBoundingClientRect()`.
**Repo**: https://github.com/chenglou/pretext (42.8k stars, MIT)

**Why it matters for this skill**:
The #1 layout bug in AI-generated UI is **text overflow** — the LLM designs a container assuming text fits in 2 lines, but real text wraps to 4 lines and breaks the layout. Pretext lets you **mathematically verify** text will fit before rendering.

**When to use Pretext**:
- Canvas / SVG / WebGL rendering (no DOM available)
- Design-time validation: "Will this heading fit in one line at 375px width?"
- Performance-critical text layout (dashboards with thousands of labels)
- Building design preview tools that need accurate text measurement

**Integration with this skill**:
```typescript
import { prepare, layout } from 'pretext';

// Verify text fits in designed container
const font = await prepare('Inter', { size: 16, weight: 400 });
const result = layout(font, 'Your long product description text here...', {
  maxWidth: 280,  // container width from DESIGN.md
});

if (result.lines.length > 2) {
  console.warn('Text overflows designed 2-line container!');
  // → truncate, reduce font size, or expand container
}
```

**Install**:
```bash
npm i pretext
```

### 12.3 Material Symbols — Variable Icon Font (Parametric Icon System)

**What**: Google's next-gen icon system. Unlike static SVG icons (Lucide, Heroicons), Material Symbols are a **variable font** with 4 adjustable axes — one set of icons transforms into dozens of visual variants.
**Repo**: https://github.com/google/material-design-icons (53k stars, Apache 2.0)
**Browser**: https://fonts.google.com/icons

#### The 4 Axes Explained

```
┌─────────────────────────────────────────────────────────────────┐
│                 MATERIAL SYMBOLS — 4 AXES                       │
├──────────────┬──────────┬───────────────────────────────────────┤
│ Axis         │ Range    │ What it controls                     │
├──────────────┼──────────┼───────────────────────────────────────┤
│ FILL         │ 0 — 1    │ 空心(0) ↔ 实心(1)                    │
│              │          │ Outlined vs Filled                    │
│              │          │ 0 = line icon, 1 = solid fill         │
├──────────────┼──────────┼───────────────────────────────────────┤
│ wght (Weight)│ 100—700  │ 图标笔画粗细                          │
│              │          │ 100 = ultra-thin hairline             │
│              │          │ 400 = regular (default)               │
│              │          │ 700 = bold heavy strokes              │
├──────────────┼──────────┼───────────────────────────────────────┤
│ GRAD (Grade) │ -25—200  │ 图标强调度/胖瘦                       │
│              │          │ -25 = thinner (de-emphasized)         │
│              │          │ 0 = normal                            │
│              │          │ 200 = thicker (high emphasis)         │
│              │          │ Adjusts stroke WITHOUT changing size  │
├──────────────┼──────────┼───────────────────────────────────────┤
│ opsz         │ 20—48    │ 光学尺寸（小图标更简化，大图标更细节） │
│ (Optical Size)│         │ 20 = simplified for small use         │
│              │          │ 48 = detailed for large display       │
└──────────────┴──────────┴───────────────────────────────────────┘
```

#### CSS Implementation — Base Setup

```css
/* Step 1: Import the variable font */
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

/* Step 2: Base class */
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  /* Default: outlined, regular weight, normal grade, 24px optical */
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

/* Step 3: HTML usage */
/* <span class="material-symbols-outlined">search</span>  */
/* <span class="material-symbols-outlined">home</span>    */
/* <span class="material-symbols-outlined">settings</span> */
```

#### Offline Installation (npm, no CDN dependency)

```bash
npm i material-symbols
```
```javascript
// In your entry file (main.ts / app.tsx / main.js)
import 'material-symbols';
```

#### 实际场景 — 图标形态变换

**场景 1: 金刚区（Feature Grid / Quick Action Zone）**

金刚区需要图标醒目、有重量感，通常用实心 + 较粗：

```css
/* 金刚区图标 — 大尺寸、实心、加粗 */
.icon-hero-zone {
  font-variation-settings: 'FILL' 1, 'wght' 600, 'GRAD' 0, 'opsz' 40;
  font-size: 40px;
  color: var(--accent);
}

/* 金刚区背景圆 */
.hero-zone-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.hero-zone-icon-bg {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: var(--accent-light);  /* 浅色品牌背景 */
  display: flex;
  align-items: center;
  justify-content: center;
}
```

```html
<!-- 金刚区 HTML -->
<div class="hero-zone-item">
  <div class="hero-zone-icon-bg">
    <span class="material-symbols-outlined icon-hero-zone">shopping_cart</span>
  </div>
  <span class="hero-zone-label">购物车</span>
</div>
```

**场景 2: 导航栏（Tab Bar）— 选中实心/未选中空心**

```css
/* 未选中：空心、常规粗细 */
.tab-icon {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  font-size: 24px;
  color: var(--text-tertiary);
  transition: font-variation-settings 0.2s ease;
}

/* 选中：实心、加粗 —— 同一图标，不同形态 */
.tab-icon.active {
  font-variation-settings: 'FILL' 1, 'wght' 600, 'GRAD' 0, 'opsz' 24;
  color: var(--accent);
}
```

**场景 3: 按钮内图标 — 匹配文字粗细**

```css
/* 轻量按钮（ghost/text button）*/
.btn-ghost .icon {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' -25, 'opsz' 20;
  font-size: 18px;
}

/* 主按钮（primary CTA）*/
.btn-primary .icon {
  font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 20;
  font-size: 20px;
}

/* 强调按钮（加粗实心）*/
.btn-emphasis .icon {
  font-variation-settings: 'FILL' 1, 'wght' 600, 'GRAD' 200, 'opsz' 24;
  font-size: 20px;
}
```

**场景 4: Hover 动态变换 — 空心变实心**

```css
/* 交互式图标：hover 从空心变实心 */
.icon-interactive {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  transition: font-variation-settings 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}
.icon-interactive:hover {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
```

**场景 5: 暗色/亮色模式适配**

```css
/* 亮色模式：正常 grade */
.icon { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }

/* 暗色模式：提高 grade 补偿暗背景上的视觉减弱 */
@media (prefers-color-scheme: dark) {
  .icon { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 200, 'opsz' 24; }
}
```

**场景 6: 不同尺寸自动适配**

```css
/* 小图标（侧边栏、列表项）— 简化细节 */
.icon-sm {
  font-size: 18px;
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20;
}

/* 中图标（工具栏、卡片）— 标准 */
.icon-md {
  font-size: 24px;
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

/* 大图标（金刚区、空状态、引导页）— 丰富细节 */
.icon-lg {
  font-size: 40px;
  font-variation-settings: 'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 40;
}

/* 超大图标（Hero、空状态插图替代）— 最大细节 */
.icon-xl {
  font-size: 64px;
  font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 48;
}
```

#### 与 DESIGN.md 集成

在 DESIGN.md 的 Section 4 (Component Stylings) 中，为图标定义标准化的变体：

```markdown
### Icon Variants

| Variant | FILL | wght | GRAD | opsz | Use Case |
|---------|------|------|------|------|----------|
| Outlined Light | 0 | 300 | -25 | 20 | 辅助文字旁、ghost 按钮、弱化场景 |
| Outlined Regular | 0 | 400 | 0 | 24 | 默认 UI 图标、工具栏、列表 |
| Outlined Bold | 0 | 600 | 0 | 24 | 强调操作、重要提示 |
| Filled Regular | 1 | 400 | 0 | 24 | 选中状态、活跃 Tab |
| Filled Bold | 1 | 600 | 0 | 40 | 金刚区、功能入口、大图标 |
| Filled Hero | 1 | 500 | 0 | 48 | 空状态、引导页、特大展示 |
```

#### 在 React/Vue/小程序中使用

**React**:
```tsx
import 'material-symbols';

// 基础组件
function Icon({ name, fill = false, weight = 400, grade = 0, size = 24, className = '' }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${size}`,
        fontSize: size,
      }}
    >
      {name}
    </span>
  );
}

// 金刚区用法
<Icon name="shopping_cart" fill size={40} weight={600} />
// 导航未选中
<Icon name="home" size={24} />
// 导航选中
<Icon name="home" fill weight={600} />
```

**Vue**:
```vue
<template>
  <span
    class="material-symbols-outlined"
    :style="{ fontVariationSettings: settings, fontSize: size + 'px' }"
  >
    {{ name }}
  </span>
</template>

<script setup>
const props = defineProps({
  name: String,
  fill: { type: Boolean, default: false },
  weight: { type: Number, default: 400 },
  grade: { type: Number, default: 0 },
  size: { type: Number, default: 24 },
});
const settings = computed(() =>
  `'FILL' ${props.fill ? 1 : 0}, 'wght' ${props.weight}, 'GRAD' ${props.grade}, 'opsz' ${props.size}`
);
</script>
```

**微信小程序（WXSS + WXML）**:
```css
/* app.wxss — 引入字体（需要下载到本地或使用CDN） */
@font-face {
  font-family: 'Material Symbols Outlined';
  src: url('https://fonts.gstatic.com/s/materialsymbolsoutlined/v200/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oFsI.woff2') format('woff2');
}
.ms-icon {
  font-family: 'Material Symbols Outlined';
  font-size: 24px;
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.ms-icon-filled { font-variation-settings: 'FILL' 1, 'wght' 600, 'GRAD' 0, 'opsz' 24; }
```
```html
<!-- index.wxml -->
<text class="ms-icon">search</text>
<text class="ms-icon ms-icon-filled">favorite</text>
```

**Flutter**:
```dart
// Flutter 原生支持 Material Symbols
Icon(
  Icons.shopping_cart,  // 自动跟随 Theme
  size: 40,
  fill: 1.0,           // Flutter 3.16+ 支持 fill 参数
  weight: 600,
  grade: 0,
  opticalSize: 40,
)
```

#### 何时选择 Material Symbols vs Lucide

| 需求 | 选 Material Symbols | 选 Lucide |
|------|-------------------|-----------| 
| 需要同一图标多种形态（空心/实心/粗/细） | ✅ | ❌ 需要切换不同 SVG |
| 金刚区、Tab 栏选中/未选中切换 | ✅ 动态 FILL 轴 | ❌ 需要准备两套 SVG |
| hover 时图标变实心的交互 | ✅ CSS transition | ❌ 需要 JS 切换组件 |
| 暗色模式图标加粗补偿 | ✅ GRAD 轴 | ❌ 无此能力 |
| 图标与文字粗细精确匹配 | ✅ wght 轴 100-700 | ❌ 固定粗细 |
| 轻量级、Tree-shaking 友好 | ❌ 字体文件约 2MB | ✅ 按需导入单个 SVG |
| Tailwind 生态原生集成 | ❌ 需额外配置 | ✅ Lucide 原生支持 |
| React/Vue 组件化使用 | 需自建 Icon 组件 | ✅ 官方 React/Vue 包 |

### 12.4 Google zx — Design Asset Automation

**What**: Write shell scripts in JavaScript/TypeScript with `await $\`command\`` syntax. 45k stars.
**Repo**: https://github.com/google/zx (Apache 2.0)

**How it enhances this skill**:
zx enables scriptable design asset pipelines — automating the tedious parts of design-to-development:

**Use case 1 — Icon export automation**:
```javascript
#!/usr/bin/env npx zx
// Export all used icons from Lucide to optimized SVGs
const icons = ['search', 'settings', 'user', 'menu', 'x'];
for (const icon of icons) {
  await $`npx lucide-static export ${icon} --format svg --output ./public/icons/`;
}
await $`npx svgo ./public/icons/*.svg --multipass`;
echo`Exported and optimized ${icons.length} icons.`;
```

**Use case 2 — Font subset for performance**:
```javascript
#!/usr/bin/env npx zx
// Subset font to only include characters actually used in the project
const text = await $`grep -roh '[^\x00-\x7F]' src/ | sort -u | tr -d '\n'`;
await $`npx glyphhanger --whitelist="${text}" --subset=fonts/Inter.woff2`;
echo`Font subsetted to project's actual character set.`;
```

**Use case 3 — Visual regression check**:
```javascript
#!/usr/bin/env npx zx
// Screenshot before/after UI changes for comparison
await $`npx playwright screenshot http://localhost:3000 --output=before.png`;
echo('Make your UI changes, then press Enter...');
await question('');
await $`npx playwright screenshot http://localhost:3000 --output=after.png`;
await $`npx pixelmatch before.png after.png diff.png --threshold 0.1`;
echo`Diff saved to diff.png`;
```

**Install**:
```bash
npm i -g zx    # Global CLI
# Or per-project:
npm i -D zx
```

### 12.5 Architecture Reference — Closure Templates Safety Pattern

**From**: google/closure-templates (686 stars)

While not a direct dependency, Closure Templates demonstrates a critical pattern for AI-generated UI: **contextual auto-escaping**.

**The pattern**: When a template (or LLM) generates UI markup, the engine automatically applies the correct escaping based on context:
- Inside HTML attributes → HTML attribute escaping
- Inside `<script>` tags → JavaScript escaping
- Inside CSS `style` blocks → CSS escaping
- Inside URLs → URL encoding

**Apply this to our skill**:
When generating UI code, the AI agent should:
1. Never inject raw user-provided strings into HTML without escaping
2. Use framework-native binding (React JSX, Vue templates) which auto-escape by default
3. Never use `dangerouslySetInnerHTML` / `v-html` with dynamic content
4. Always sanitize URLs before binding to `href` or `src`

This is captured as a new rule in the consistency checklist:
```
□ No raw string injection — all dynamic content uses framework binding (auto-escaped)
```

---

## Part 12A: Motion Design System — Animation as Communication Language

> Animation is NOT decoration. Every motion communicates an INTENT or EMOTION.
> This section provides a complete, reusable motion design system.

### 12A.1 Standard Easing Curve Library

Define these as CSS variables in EVERY project:

```css
:root {
  /* Standard — most UI interactions (button clicks, toggles, hover) */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

  /* Enter — elements appearing (fade in, slide in, scale up) */
  --ease-enter: cubic-bezier(0, 0, 0.2, 1);

  /* Exit — elements disappearing (fade out, slide out, scale down) */
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);

  /* Spring — bouncy, needs attention (success, favorite, delight) */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Elegant — slow, luxurious (brand pages, hero animations, premium feel) */
  --ease-elegant: cubic-bezier(0.16, 1, 0.3, 1);

  /* Linear — ONLY for loading spinners and progress bars */
  --ease-linear: linear;

  /* Duration scale */
  --duration-instant: 100ms;   /* micro-feedback: button press, toggle */
  --duration-fast: 200ms;      /* standard transitions: hover, focus */
  --duration-normal: 300ms;    /* modal open/close, slide transitions */
  --duration-slow: 500ms;      /* complex animations, page transitions */
  --duration-elegant: 800ms;   /* brand/luxury animations */
}
```

### 12A.2 Animation Emotion Map

When choosing an animation, START from the emotion you want to convey:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ANIMATION EMOTION MAP                                    │
├──────────────┬──────────┬──────────────────┬───────────────────────────────┤
│ Emotion      │ Duration │ Easing           │ Effect                        │
├──────────────┼──────────┼──────────────────┼───────────────────────────────┤
│ Confirmation │ 200-300ms│ ease-spring      │ Scale bounce, checkmark draw  │
│ "成功了！"    │          │                  │ Green color + bounce          │
├──────────────┼──────────┼──────────────────┼───────────────────────────────┤
│ Warning      │ 300-400ms│ ease-standard    │ Horizontal shake, red flash   │
│ "出错了"      │          │                  │ Shake 3-4 times + red border  │
├──────────────┼──────────┼──────────────────┼───────────────────────────────┤
│ Attention    │ 400-600ms│ ease-standard    │ Pulse breathing, gentle slide │
│ "看这里"      │          │                  │ Scale 1→1.1→1 loop           │
├──────────────┼──────────┼──────────────────┼───────────────────────────────┤
│ Waiting      │ 1-2s     │ linear           │ Spin, skeleton shimmer        │
│ "请稍等"      │          │                  │ Infinite loop until done      │
├──────────────┼──────────┼──────────────────┼───────────────────────────────┤
│ Delight      │ 300-500ms│ ease-spring      │ Bouncy pop, confetti, sparkle │
│ "太棒了！"    │          │                  │ Overshoot + settle            │
├──────────────┼──────────┼──────────────────┼───────────────────────────────┤
│ Calm         │ 200-400ms│ ease-enter/exit  │ Fade, gentle slide            │
│ "自然过渡"    │          │                  │ Opacity + translateY(16px)    │
├──────────────┼──────────┼──────────────────┼───────────────────────────────┤
│ Urgency      │ 100-200ms│ ease-standard    │ Fast flash, countdown pulse   │
│ "快！"        │          │                  │ Rapid opacity toggle          │
├──────────────┼──────────┼──────────────────┼───────────────────────────────┤
│ Premium      │ 500-800ms│ ease-elegant     │ Slow reveal, parallax scroll  │
│ "高级感"      │          │                  │ Long duration + subtle motion │
└──────────────┴──────────┴──────────────────┴───────────────────────────────┘
```

### 12A.3 Icon State Machine (8 States)

Every interactive icon in a UI goes through these states. Define ALL of them in your DESIGN.md:

```css
/* === ICON STATE MACHINE — 8 STATES === */

/* 1. Default — idle, waiting for interaction */
.icon-state-default {
  font-variation-settings: 'FILL' 0, 'wght' 400;
  color: var(--text-tertiary);
  transition: all var(--duration-fast) var(--ease-standard);
}

/* 2. Hover — mouse over, inviting interaction */
.icon-state-default:hover {
  font-variation-settings: 'FILL' 0, 'wght' 500;
  color: var(--text-primary);
  transform: scale(1.05);
}

/* 3. Pressed — actively being clicked */
.icon-state-default:active {
  font-variation-settings: 'FILL' 1, 'wght' 500;
  color: var(--accent);
  transform: scale(0.95);
}

/* 4. Selected / Active — current state */
.icon-state-selected {
  font-variation-settings: 'FILL' 1, 'wght' 600;
  color: var(--accent);
}

/* 5. Disabled — not available */
.icon-state-disabled {
  font-variation-settings: 'FILL' 0, 'wght' 300;
  color: var(--text-quaternary);
  opacity: 0.5;
  pointer-events: none;
}

/* 6. Success — operation completed */
.icon-state-success {
  font-variation-settings: 'FILL' 1, 'wght' 500;
  color: var(--color-success);
  animation: bounce-in var(--duration-normal) var(--ease-spring);
}

/* 7. Error — operation failed */
.icon-state-error {
  font-variation-settings: 'FILL' 1, 'wght' 600;
  color: var(--color-error);
  animation: shake var(--duration-normal) var(--ease-standard);
}

/* 8. Loading — waiting for result */
.icon-state-loading {
  font-variation-settings: 'FILL' 0, 'wght' 400;
  color: var(--accent);
  animation: spin 1s var(--ease-linear) infinite;
}
```

### 12A.4 Interaction Intent Expression Framework

Use this table when designing ANY interactive element:

```
USER ACTION          → UI RESPONSE                    → EMOTION CONVEYED
─────────────────────────────────────────────────────────────────────────
Tap button           → Scale 0.95 → 1.0               → "Received"
Submit success       → ✓ icon bounces in + green       → "Done!"
Input error          → Input shakes + red border       → "Fix this"
Loading data         → Skeleton shimmer / spinner      → "Working on it"
Drag item            → Shadow deepens + follows cursor → "You control this"
Delete item          → Slide left + fade out           → "It's gone"
New notification     → Bell pulses + red dot appears   → "Something for you"
Favorite / Like      → Heart: outline → filled + bounce→ "Loved!"
Tab switch           → Icon: outline → filled + slide  → "You are here"
Page enter           → Content fades in from below     → "Welcome"
Page leave           → Content fades up and out        → "Goodbye"
Pull to refresh      → Spinner → ✓ bounce              → "Fresh data"
Long press           → Scale up slowly + haptic        → "Extra options"
Swipe card           → Card follows finger + tilt      → "Your choice"
Scroll to section    → Element fades in when visible   → "Discover more"
Empty state          → Illustration + subtle float     → "Nothing yet, but..."
Error page           → Sad illustration + shake        → "Oops, let's fix this"
```

### 12A.5 Standard Keyframe Library

Copy these into every project:

```css
/* Success — bouncy entrance */
@keyframes bounce-in {
  0%   { transform: scale(0); opacity: 0; }
  60%  { transform: scale(1.15); }
  100% { transform: scale(1); opacity: 1; }
}

/* Error — horizontal shake */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%      { transform: translateX(-4px); }
  40%      { transform: translateX(4px); }
  60%      { transform: translateX(-3px); }
  80%      { transform: translateX(3px); }
}

/* Loading — rotation */
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Attention — pulse breathing */
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%      { transform: scale(1.08); opacity: 0.85; }
}

/* Content enter — fade in up */
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Content exit — fade out up */
@keyframes fade-out-up {
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-16px); }
}

/* Skeleton loading shimmer */
@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Notification dot — pop in */
@keyframes dot-pop {
  0%   { transform: scale(0); }
  60%  { transform: scale(1.3); }
  100% { transform: scale(1); }
}

/* Slide in from right */
@keyframes slide-in-right {
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}

/* Slide out to left (for delete) */
@keyframes slide-out-left {
  from { transform: translateX(0); opacity: 1; }
  to   { transform: translateX(-100%); opacity: 0; }
}
```

### 12A.6 Skeleton Component Template

Every loading state should use skeleton screens, not spinners (unless the area is < 100px):

```css
.skeleton {
  background: linear-gradient(90deg,
    var(--bg-elevated) 25%,
    color-mix(in srgb, var(--bg-elevated) 85%, var(--text-quaternary)) 50%,
    var(--bg-elevated) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s var(--ease-linear) infinite;
  border-radius: var(--radius-subtle);
}
.skeleton-text   { height: 16px; width: 80%; margin-bottom: 8px; }
.skeleton-title  { height: 24px; width: 60%; margin-bottom: 12px; }
.skeleton-avatar { height: 48px; width: 48px; border-radius: 50%; }
.skeleton-image  { height: 200px; width: 100%; border-radius: var(--radius-standard); }
.skeleton-button { height: 40px; width: 120px; border-radius: var(--radius-subtle); }
```

---

## Part 12B: Mini Program — Material Symbols Implementation & Performance

> Solving the challenge: Stitch prototypes using Material Symbols → mini program production code.

### 12B.1 The Core Problem

Material Symbols is a variable font (~2MB). Mini programs have strict size limits:
- WeChat: total package ≤ 2MB (main), subpackages ≤ 2MB each
- Alipay: total ≤ 4MB
- Douyin: total ≤ 4MB

**You CANNOT bundle the full Material Symbols font into a mini program.**

### 12B.2 Three Solutions (choose by scenario)

**Solution A: Font Subset (Recommended for < 50 icons)**

Extract only the glyphs you actually use, reducing ~2MB → ~20-50KB:

```bash
# Step 1: List all icon names used in your mini program
grep -roh 'icon-name="[^"]*"' pages/ | sort -u > used-icons.txt

# Step 2: Use glyphhanger or fonttools to subset
npx glyphhanger --whitelist="search,home,favorite,settings,..." \
  --subset=node_modules/material-symbols/material-symbols-outlined.woff2 \
  --output=assets/fonts/

# Result: ~20-50KB font file with only your icons
```

**Solution B: SVG Sprite (Recommended for 50-200 icons)**

Convert needed Material icons to an SVG sprite file:

```bash
# Use designdna's pre-downloaded Material SVGs
# Create sprite from needed icons
npx svg-sprite \
  --mode symbol \
  --dest assets/ \
  designdna/assets/icons/material/navigation/*.svg \
  designdna/assets/icons/material/actions/*.svg
```

```html
<!-- WXML usage -->
<svg class="icon" style="width:48rpx;height:48rpx;fill:{{color}};">
  <use href="/assets/icons-sprite.svg#search" />
</svg>
```

**Solution C: Image Component with CDN (Recommended for rapid prototyping)**

Use Google's Material Symbols CDN to generate PNG/SVG on the fly:

```javascript
// utils/icon.js — Generate icon URL
function getMaterialIconUrl(name, { fill = 0, weight = 400, grade = 0, size = 24, color = '333333' } = {}) {
  // Use Google Fonts API to render the icon as an image
  return `https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/${name}/default/${size}px.svg`;
}

// For offline: use the pre-downloaded SVGs from designdna
function getLocalIconPath(name, category = 'actions') {
  return `/assets/icons/material/${category}/${name}.svg`;
}
```

### 12B.3 Mini Program Icon Performance Checklist

```
□ Total icon assets < 200KB (for main package)
□ Icon font subsetted to only used glyphs (if using font approach)
□ SVG sprites used for repeated icons (if using SVG approach)
□ TabBar icons are PNG format, 81×81px, < 40KB each
□ Icons lazy-loaded in subpackages (not all in main package)
□ Dark mode icon variants handled via CSS filter or color property
□ Touch targets ≥ 88rpx (44px equivalent) on all icon buttons
□ Icon loading has placeholder (no blank flash)
```

### 12B.4 Mini Program Visual Design Quality Checklist

```
□ Navigation bar color matches page background
□ Safe area handled (iPhone notch / home indicator)
□ rpx units used for all sizes (not px)
□ Font loaded with wx.loadFontFace or embedded base64
□ Images use lazy-load and WebP format
□ Skeleton screens for all loading states
□ Transitions on page enter (fade-in-up)
□ Gold standard: 首屏渲染 < 1.5s, 交互响应 < 100ms
```

---

## Part 12C: Interaction Design Pattern Library & Experience Accumulation

> Solving: How to design professional interactions for Stitch prototypes, and how to accumulate interaction design experience across projects.

### 12C.1 Core Interaction Patterns (from 58-brand analysis)

These patterns were observed repeatedly across the 58 world-class brands:

**Pattern 1: Progressive Disclosure**
> Show only what's needed now; reveal more on demand.
```
Use when: Complex forms, settings pages, onboarding
How: Accordion sections, "Show more" links, stepped wizards
Brands: Stripe (checkout), Notion (slash commands), Linear (filters)
```

**Pattern 2: Optimistic Updates**
> Update the UI immediately, sync with server in background.
```
Use when: Like/favorite, toggle, drag-reorder, message send
How: Change UI state → send API → if error, revert + show toast
Brands: Twitter/X (like), Notion (drag blocks), Linear (status change)
```

**Pattern 3: Skeleton → Content**
> Show content shape before data arrives.
```
Use when: Any data-loading page, list, card grid, profile
How: Skeleton placeholder → fade-in real content
Brands: LinkedIn, YouTube, Notion, Airbnb (ALL use skeleton)
```

**Pattern 4: Contextual Actions**
> Actions appear only when relevant, near the content they affect.
```
Use when: List items, cards, table rows, text blocks
How: Hover/long-press reveals action buttons; right-click context menu
Brands: Notion (block hover), Linear (issue hover), VS Code (gutter)
```

**Pattern 5: Inline Editing**
> Edit content in-place without navigating to a form page.
```
Use when: Titles, descriptions, tags, status fields
How: Click text → transforms to input → blur/Enter saves
Brands: Notion (all text), Linear (issue title), Figma (layer names)
```

**Pattern 6: Command Palette**
> Keyboard-first search over all actions.
```
Use when: Power-user tools, developer apps, productivity software
How: Cmd/Ctrl+K opens search → fuzzy match actions/pages → execute
Brands: Linear, Raycast, VS Code, Notion, Vercel
```

**Pattern 7: Drag to Reorder**
> Direct manipulation for ordering items.
```
Use when: Lists, kanban boards, navigation items, dashboard widgets
How: Long-press/grip handle → drag with shadow → drop with animation
Brands: Trello, Notion, Linear, Miro
```

**Pattern 8: Empty State with CTA**
> Never show a blank screen. Guide the user to the first action.
```
Use when: First-time use, search no results, empty list, no data
How: Illustration + message + primary CTA button
Brands: ALL 58 brands have empty state designs
```

**Pattern 9: Toast/Snackbar for Non-Blocking Feedback**
> Confirm actions without interrupting the flow.
```
Use when: Save, copy, delete, send, any background operation
How: Bottom/top notification → auto-dismiss 3-5s → optional undo
Brands: Google (undo), Notion (saved), Vercel (deployed)
```

**Pattern 10: Pull to Refresh (Mobile/Mini Program)**
> Physical gesture to request fresh data.
```
Use when: Feed, list, dashboard on mobile/mini program
How: Pull down → loading animation → content updates → bounce back
Brands: Twitter, Instagram, any mobile-first app
```

### 12C.2 Page State Machine

Every page in your app exists in one of these states. Design ALL of them:

```
┌─────────────┐
│   Loading    │ ← Skeleton screens, NOT spinner
├─────────────┤
│   Empty      │ ← Illustration + "Get started" CTA
├─────────────┤
│   Content    │ ← Normal state with data
├─────────────┤
│   Error      │ ← Error illustration + "Retry" button
├─────────────┤
│   Partial    │ ← Some data loaded, some failed
├─────────────┤
│   Offline    │ ← Cached data + "No connection" banner
└─────────────┘
```

**In DESIGN.md, add this to Section 4 (Component Stylings):**

```markdown
### Page States

| State | Background | Content | Action |
|-------|-----------|---------|--------|
| Loading | Skeleton shimmer | Placeholder shapes | None |
| Empty | Illustration (from unDraw/Storyset) | "No [items] yet" | Primary CTA "Create first [item]" |
| Content | Normal | Real data | Normal interactions |
| Error | Error illustration | "Something went wrong" | "Try again" button |
| Offline | Yellow/orange banner at top | Cached data (grayed) | "Retry when online" |
```

### 12C.3 Form Interaction Patterns

```
Field validation timing:
  Email/Phone     → validate on blur (not every keystroke)
  Password        → strength indicator on keystroke
  Required fields → validate on submit attempt, then on blur after first error
  Real-time search→ debounce 300ms after typing stops

Error display:
  Inline error    → red text below field + red border (for specific field errors)
  Toast           → for general server errors
  Banner          → for form-level validation ("Please fix 3 errors above")

Submit states:
  Idle            → "Submit" (primary button)
  Submitting      → "Submitting..." (disabled + spinner)
  Success         → "✓ Done" (green, 1.5s) → redirect or reset
  Error           → Shake button + show error message
```

### 12C.4 Experience Accumulation System

**After each project, record interaction patterns that worked well or poorly:**

When the user completes a project with interaction design, the AI should suggest:

```
"Project completed. Should I record these interaction decisions for future reference?"

If yes, create a file: designdna/experience/[project-name]-interactions.md

## [Project Name] — Interaction Decisions Log

### What worked well
- Progressive disclosure on settings page reduced cognitive load
- Optimistic updates on favorite button felt instant
- Skeleton screens eliminated perceived loading time

### What didn't work
- Inline editing on mobile was hard to trigger (touch targets too small)
- Toast auto-dismiss was too fast (2s → increased to 4s)

### Patterns to reuse
- Card swipe-to-delete with undo toast (3s window)
- Bottom sheet for mobile actions (instead of dropdown)
- Haptic feedback on drag reorder
```

**Over time, build a project-specific interaction design knowledge base in `designdna/experience/`.**

This connects with the `hierarchical-memory` skill — when that skill is available, interaction experience automatically feeds into the long-term memory system. When it's not available, the `designdna/experience/` directory serves as a standalone knowledge base.

---

## Part 12D: Lottie Animation Integration

> Lottie renders After Effects animations in real-time as vector graphics.
> JSON format, tiny file size, infinite scalability, no quality loss at any resolution.
> Source: https://app.lottiefiles.com/ | https://github.com/airbnb/lottie-web

### 12D.1 When to Use Lottie vs CSS vs GIF

```
┌──────────────────────────────────────────────────────────────────────┐
│                 ANIMATION TECHNOLOGY DECISION                        │
├──────────────┬───────────┬──────────┬───────────┬───────────────────┤
│ Scenario     │ CSS Anim  │ Lottie   │ GIF/APNG  │ Best Choice       │
├──────────────┼───────────┼──────────┼───────────┼───────────────────┤
│ Button hover │ ✅ Best    │ Overkill │ ❌        │ CSS transition    │
│ Loading spin │ ✅ Simple  │ ✅ Rich  │ ❌        │ CSS (simple) or   │
│              │           │          │           │ Lottie (branded)  │
│ Success ✓    │ ✅ OK     │ ✅ Best  │ ❌        │ Lottie (smooth)   │
│ Empty state  │ ❌ Limited │ ✅ Best  │ OK        │ Lottie (engaging) │
│ Onboarding   │ ❌        │ ✅ Best  │ ❌        │ Lottie (complex)  │
│ Icon anim    │ ❌        │ ✅ Best  │ ❌        │ Lottie (precise)  │
│ Page trans   │ ✅ Best    │ ❌       │ ❌        │ CSS / Framer      │
│ Scroll anim  │ ✅ Best    │ ✅ OK   │ ❌        │ CSS + Intersection│
│ Brand intro  │ ❌        │ ✅ Best  │ ❌        │ Lottie (cinematic)│
│ Confetti     │ ❌        │ ✅ Best  │ ❌        │ Lottie (particles)│
└──────────────┴───────────┴──────────┴───────────┴───────────────────┘
```

**Rule: If the animation involves more than 2 elements moving independently → use Lottie.**

### 12D.2 Lottie Integration by Platform

**React**:
```bash
npm i lottie-react
```
```tsx
import Lottie from 'lottie-react';
import successAnim from './animations/success.json';

function SuccessFeedback() {
  return <Lottie animationData={successAnim} loop={false} style={{ width: 120, height: 120 }} />;
}
```

**Vue**:
```bash
npm i vue3-lottie
```
```vue
<template>
  <Vue3Lottie :animationData="loadingAnim" :loop="true" :width="80" :height="80" />
</template>
<script setup>
import { Vue3Lottie } from 'vue3-lottie';
import loadingAnim from './animations/loading.json';
</script>
```

**Mini Program (WeChat)**:
```bash
npm i lottie-miniprogram
```
```html
<!-- WXML -->
<canvas id="lottie-canvas" type="2d" style="width:200rpx;height:200rpx;" />
```
```javascript
// JS
import lottie from 'lottie-miniprogram';
Page({
  onReady() {
    const query = this.createSelectorQuery();
    query.select('#lottie-canvas').node(res => {
      const canvas = res[0].node;
      lottie.setup(canvas);
      lottie.loadAnimation({
        path: '/animations/loading.json',
        loop: true,
        autoplay: true,
        rendererSettings: { context: canvas.getContext('2d') }
      });
    }).exec();
  }
});
```

**React Native**:
```bash
npm i lottie-react-native
```
```tsx
import LottieView from 'lottie-react-native';
<LottieView source={require('./animations/success.json')} autoPlay loop={false} style={{ width: 120, height: 120 }} />
```

**Flutter**:
```yaml
# pubspec.yaml
dependencies:
  lottie: ^3.0.0
```
```dart
Lottie.asset('assets/animations/success.json', width: 120, height: 120, repeat: false)
```

### 12D.3 Lottie 使用场景与推荐动画

| UI 场景 | Lottie 动画类型 | LottieFiles 搜索词 | 时长 | 循环 |
|---------|---------------|-------------------|------|------|
| **加载等待** | 品牌化 Loading | `loading`, `spinner` | 1-2s | ✅ 循环 |
| **操作成功** | 打勾 + 庆祝 | `success`, `checkmark` | 1-1.5s | ❌ 单次 |
| **操作失败** | 叉号 + 抖动 | `error`, `failed` | 0.8-1s | ❌ 单次 |
| **空状态** | 人物 + 场景 | `empty`, `no data`, `not found` | 2-4s | ✅ 缓慢循环 |
| **欢迎引导** | 步骤演示 | `onboarding`, `welcome` | 3-5s | ❌ 单次 |
| **下拉刷新** | 品牌 Loading | `pull refresh`, `loading` | 1-2s | ✅ 循环 |
| **点赞/收藏** | 心跳 / 星星爆炸 | `like`, `heart`, `favorite` | 0.5-1s | ❌ 单次 |
| **发送消息** | 纸飞机飞出 | `send`, `paper plane` | 0.8s | ❌ 单次 |
| **支付成功** | 钱包 + 打勾 | `payment success` | 1.5s | ❌ 单次 |
| **404 页面** | 迷路/断线 | `404`, `lost`, `broken` | 3-5s | ✅ 缓慢循环 |
| **网络断开** | 断开连接 | `no connection`, `offline` | 2-3s | ✅ 循环 |
| **上传进度** | 文件飞入云端 | `upload`, `cloud upload` | 2-3s | ✅ 循环 |
| **删除确认** | 垃圾桶吞噬 | `delete`, `trash` | 0.8s | ❌ 单次 |
| **解锁/VIP** | 皇冠/星光 | `premium`, `crown`, `unlock` | 1.5s | ❌ 单次 |

### 12D.4 Lottie 性能与质量规范

```
□ JSON 文件 < 100KB（超过则简化动画或拆分）
□ 帧率 30fps（手机）或 60fps（桌面）
□ 不包含图片资源（纯矢量最优，避免嵌入位图）
□ 颜色可通过代码动态修改（设计时使用纯色填充）
□ 尺寸自适应（设置 viewBox，不用固定像素）
□ 首帧和末帧是"干净"状态（不要首帧就在动画中间）
□ 循环动画要"无缝衔接"（首尾帧一致）
□ 小程序中用 canvas 渲染（不用 SVG 渲染模式，性能更好）
□ React Native 中用 native 模式（不用 web 模式）
```

### 12D.5 Lottie 颜色动态化

Lottie 的一大优势是**可以在运行时修改颜色**，让同一个动画适配不同主题：

```tsx
// React — 修改 Lottie 颜色匹配品牌色
import Lottie from 'lottie-react';
import { useMemo } from 'react';

function BrandedAnimation({ animationData, brandColor = '#3b82f6' }) {
  // 将动画中的蓝色替换为品牌色
  const modified = useMemo(() => {
    const json = JSON.parse(JSON.stringify(animationData));
    // Lottie 颜色格式是 [r, g, b, a] 范围 0-1
    const [r, g, b] = hexToRgb01(brandColor);
    // 遍历替换所有颜色
    replaceColors(json, [r, g, b, 1]);
    return json;
  }, [animationData, brandColor]);

  return <Lottie animationData={modified} />;
}

function hexToRgb01(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255];
}
```

---

## Part 12E: Modern UI Patterns — Canvas, AI, Collaboration, Smart Tables

> Patterns for the most complex modern UI scenarios, extracted from products like Figma, Notion, Miro, Google Docs, Airtable, and AI-native tools.

### 12E.1 Canvas Editor Pattern (Figma/Miro/Excalidraw style)

**Core architecture**:
```
Canvas Editor = Viewport + Objects + Tools + Panels

Viewport:
  - Infinite pan/zoom (wheel zoom, space+drag pan, pinch zoom)
  - Coordinate system: screen coords ↔ canvas coords transform
  - Rendering: HTML Canvas 2D / WebGL / SVG (choose by complexity)

Objects:
  - Each has: id, type, position(x,y), size(w,h), rotation, style, z-index
  - Selection: click to select, shift+click multi-select, drag to box-select
  - Transform: drag to move, handles to resize, rotate handle

Tools:
  - Selection tool (default), shape tools, text tool, pen tool, hand tool
  - Active tool changes cursor and click behavior

Panels:
  - Property panel (right): shows selected object's properties
  - Layer panel (left): z-order tree view
  - Toolbar (top/left): tool selection
```

**Performance rules for canvas UIs**:
```
□ Virtual rendering: only draw objects visible in viewport
□ Level-of-detail: simplify objects when zoomed out
□ Debounce: group rapid transform updates (60fps throttle)
□ Offscreen canvas: heavy rendering on worker thread
□ Spatial indexing: R-tree or quadtree for hit testing
```

### 12E.2 AI Content Generation UI Pattern

**Streaming text (ChatGPT/Claude style)**:
```
┌─────────────────────────────────────────────┐
│ User message          [avatar]              │
├─────────────────────────────────────────────┤
│ [avatar]  AI response                       │
│                                             │
│ Text streams in token by token...           │
│ With a blinking cursor ▌ at the end         │
│                                             │
│ [Stop] [Copy] [Regenerate]                  │
└─────────────────────────────────────────────┘

Key interaction patterns:
  - Token-by-token rendering (NOT character-by-character)
  - Blinking cursor at stream end (▌)
  - Auto-scroll follows new content
  - "Stop generating" button during stream
  - Code blocks render with syntax highlighting after complete
  - Markdown renders progressively
  - Copy button appears on hover over code blocks
  - Regenerate button after completion
```

**CSS for streaming cursor**:
```css
.streaming-cursor::after {
  content: '▌';
  animation: blink 1s step-end infinite;
  color: var(--accent);
}
@keyframes blink {
  50% { opacity: 0; }
}
```

**AI-generated UI (A2UI pattern)**:
```
Agent generates structured UI components → renderer displays them

Key patterns:
  - Progressive rendering: show components as they're generated
  - Skeleton → real component transition
  - Interactive components respond immediately (optimistic)
  - Error boundary: if component fails, show fallback not crash
  - Tool calls: show "Searching..." / "Analyzing..." status
```

### 12E.3 Real-time Collaboration Pattern (Google Docs/Notion/Figma style)

**Presence indicators**:
```
┌─────────────────────────────────────────────┐
│ [Doc Title]                    👤A 👤B 👤C  │ ← online user avatars
│                                             │
│ This is some text that user A│is editing    │ ← colored cursor
│                         ▲                   │
│                    [User A] ← name label    │
│                                             │
│ User B selected █this block█               │ ← colored selection
│               [User B]                      │
└─────────────────────────────────────────────┘

Design rules:
  - Each user gets a unique color (from a predefined palette, not random)
  - Cursor shows user name label (fade after 3s idle)
  - Selection highlight uses user's color at 15% opacity
  - Avatar stack in header (max 5 visible + "+N" overflow)
  - Online dot: green; away: yellow; offline: remove
```

**User color palette for collaboration** (max contrast, accessible):
```css
:root {
  --collab-user-1: #ef4444;  /* Red */
  --collab-user-2: #3b82f6;  /* Blue */
  --collab-user-3: #22c55e;  /* Green */
  --collab-user-4: #f59e0b;  /* Amber */
  --collab-user-5: #8b5cf6;  /* Violet */
  --collab-user-6: #ec4899;  /* Pink */
  --collab-user-7: #14b8a6;  /* Teal */
  --collab-user-8: #f97316;  /* Orange */
}
```

**Conflict resolution UI**:
```
Local edit → send to server → if conflict:
  Option A: Last-writer-wins (real-time docs, most common)
  Option B: Show conflict dialog (Git-style, for structured data)
  
NEVER silently discard user input. Always show what happened.
```

### 12E.4 Smart Table / Database View Pattern (Airtable/Notion style)

```
┌──────────────────────────────────────────────────────────┐
│ [🔍 Filter] [↕ Sort] [👁 Hide] [+ New Column] [⚙ View] │
├──────┬──────────────┬──────────┬─────────┬──────────────┤
│ ☐    │ Name ↕       │ Status ↕ │ Date    │ Assignee     │
├──────┼──────────────┼──────────┼─────────┼──────────────┤
│ ☐    │ Task Alpha   │ 🟢 Done  │ Apr 11  │ 👤 Alice     │
│ ☐    │ Task Beta    │ 🟡 In    │ Apr 12  │ 👤 Bob       │
│ ☐    │ Task Gamma   │ 🔴 Block │ Apr 13  │ 👤 Carol     │
├──────┼──────────────┼──────────┼─────────┼──────────────┤
│ + New Row                                                │
└──────────────────────────────────────────────────────────┘

Key interactions:
  - Click cell → inline edit (no modal, no page navigation)
  - Click column header → sort ascending/descending
  - Drag column border → resize column
  - Drag row handle → reorder rows
  - Checkbox column → batch select + bulk actions appear
  - Status column → dropdown with color-coded options
  - Date column → date picker popup
  - Assignee column → user search dropdown
  - Right-click row → context menu (duplicate, delete, move)
  - Cmd+Z → undo last edit
  
Performance for large datasets:
  □ Virtual scrolling (only render visible rows + buffer)
  □ Sticky header (stays visible during scroll)
  □ Column virtualization (for 50+ columns)
  □ Debounced search/filter (300ms after typing stops)
  □ Optimistic updates (show change → sync background)
```

### 12E.5 Document Editor Pattern (Notion/Google Docs style)

**Block-based editing**:
```
Every piece of content is a "block":
  - Text block (paragraph, heading 1-6)
  - List block (bullet, numbered, toggle, checklist)
  - Media block (image, video, embed, file)
  - Data block (table, database, chart)
  - Code block (with language selector + syntax highlight)
  - Divider block
  - Callout block (info, warning, error)

Block interactions:
  - Drag handle (⠿) on left → reorder blocks
  - "/" command → insert new block type (slash menu)
  - "+" button between blocks → insert here
  - Block toolbar on hover → transform, duplicate, delete, move
  - Select multiple blocks → bulk operations
  - Indent/outdent with Tab/Shift+Tab
  - Turn into → convert block type (text → heading, list → checklist)
```

**Slash command menu**:
```
Type "/" anywhere → floating menu appears:

  📝 Text
  ── Heading 1
  ── Heading 2
  ── Heading 3
  📋 To-do list
  • Bulleted list
  1. Numbered list
  ▶ Toggle list
  ── Divider
  " Quote
  ! Callout
  💻 Code
  📷 Image
  📊 Table
  🔗 Embed
  
Fuzzy search: type "/cod" → highlights "Code"
Keyboard: arrow keys to navigate, Enter to select, Esc to close
```

---

## Part 12F: 3D Interaction, Virtual Reality & Spatial UI

> Patterns for 3D product viewers, virtual house tours, AR try-on, WebXR, and spatial interfaces.
> Tech: Three.js, React Three Fiber (R3F), A-Frame, Babylon.js, Model Viewer.

### 12F.1 3D Interaction Scenarios & Tech Selection

| Scenario | Complexity | Recommended Tech | Why |
|----------|-----------|-----------------|-----|
| **3D 产品展示** (旋转/缩放) | Low | `<model-viewer>` | Google Web Component, zero code, accessible |
| **三维看房/全景** | Medium | A-Frame or Pannellum | 360 panorama optimized, VR-ready |
| **三维看房 (可漫游)** | High | Three.js / R3F | Full camera control, floor plan navigation |
| **AR 试穿/试戴** | High | WebXR + R3F | Camera access + 3D overlay |
| **数据可视化 3D** | Medium | R3F + Drei | React integration, declarative 3D |
| **虚拟展厅/展览** | High | Three.js / Babylon.js | Large scene management, PBR materials |
| **地图 3D 建筑** | Medium | Mapbox GL + 3D | GIS + 3D buildings + POI |
| **游戏化交互** | High | Babylon.js or PlayCanvas | Physics, advanced rendering |

### 12F.2 3D Product Viewer (最常用 — 电商/产品页)

**最简方案：Google `<model-viewer>`**
```bash
npm i @google/model-viewer
```
```html
<!-- 零代码 3D 产品展示：旋转、缩放、AR -->
<model-viewer
  src="/models/product.glb"
  alt="Product 3D view"
  camera-controls
  auto-rotate
  ar
  shadow-intensity="1"
  environment-image="neutral"
  style="width: 100%; height: 400px; background: var(--bg-elevated);"
>
  <!-- 加载占位 -->
  <div slot="poster" class="skeleton-image" style="width:100%;height:100%;"></div>
  <!-- AR 按钮 -->
  <button slot="ar-button" class="btn-primary">在现实中查看</button>
</model-viewer>
```

**UI 设计规范**：
```
3D Viewer Container:
  □ 背景色用 --bg-elevated（微妙区分页面背景）
  □ 圆角与卡片统一（--radius-standard）
  □ 阴影用 Level 1（不喧宾夺主）
  □ 加载时显示骨架屏 → 模型加载后淡入
  □ 底部显示手势提示："拖拽旋转 · 双指缩放"
  □ 移动端检测 AR 能力 → 显示"AR 查看"按钮

Controls:
  □ 旋转：单指/鼠标拖拽
  □ 缩放：双指捏合/滚轮
  □ 平移：双指拖拽/右键拖拽
  □ 重置：双击回到初始视角
  □ 自动旋转：idle 5s 后启动，触摸后停止
```

### 12F.3 Virtual House Tour (三维看房)

**方案 A：全景照片看房（720 度全景）**
```
技术：Pannellum / A-Frame / Photo-Sphere-Viewer
输入：360 全景照片（Insta360、Ricoh Theta 等设备拍摄）
体验：驻足观察 → 点击热点 → 切换房间

UI 要素：
  ┌─────────────────────────────────────────┐
  │ [返回]  客厅 (1/5)           [全屏] [VR]│ ← 顶部导航
  │                                         │
  │         ← 360 全景画面 →                │
  │              ○ 热点：厨房               │ ← 可点击热点
  │              ○ 热点：卧室               │
  │                                         │
  │ [客厅] [厨房] [卧室] [卫浴] [阳台]      │ ← 房间切换
  │ ─────●──────────────────────            │ ← 楼层/进度
  └─────────────────────────────────────────┘
```

**方案 B：可漫游 3D 看房**
```
技术：Three.js + R3F
输入：3D 建模文件（glTF/FBX）或 LiDAR 扫描（Matterport 格式）
体验：WASD 或点击地面移动 → 自由漫游

UI 交互层（HTML Overlay on 3D Canvas）：
  ┌─────────────────────────────────────────┐
  │ [返回]     楼层切换 [1F] [2F]     [🔍]  │
  │                                         │
  │         ← 3D 场景 →                     │
  │                                         │
  │                          [📏 测量]       │ ← 工具面板
  │                          [📷 截图]       │
  │                          [☀️ 日照]       │
  │                                         │
  │ ┌──────────┐                            │
  │ │  小地图   │  面积：89.3㎡              │ ← 缩略平面图
  │ │  ● 你在这 │  朝向：南                  │
  │ └──────────┘                            │
  └─────────────────────────────────────────┘
```

**3D 看房性能规范**：
```
□ 模型 < 10MB（使用 Draco/Meshopt 压缩 glTF）
□ 纹理用 KTX2/Basis 压缩（比 PNG 小 75%）
□ LOD（Level of Detail）：远处用低精度模型
□ 分步加载：先加载当前房间 → 预加载相邻房间
□ 首帧渲染 < 3s（显示加载进度条 0-100%）
□ 60fps 在中端手机（降级策略：关闭阴影/反射）
□ 触控手势流畅（惯性阻尼，不突然停止）
```

### 12F.4 AR / 虚拟现实 UI 规范

```
AR 模式设计规则：
  □ 半透明 UI 覆盖层（不遮挡现实世界）
  □ 按钮放底部（拇指可达区域）
  □ 文字用白色 + 深色投影（在任意背景上可读）
  □ 最小触控目标 56px（AR 中精度降低）
  □ 提供"退出 AR"按钮（始终可见）
  □ 引导提示："缓慢移动设备扫描地面"

VR 模式设计规则：
  □ UI 面板固定在世界空间（不跟随头部转动）
  □ UI 距离眼睛 1-2 米（避免对焦疲劳）
  □ 字号 ≥ 24px（VR 中分辨率有效降低）
  □ 避免纯白背景（VR 中刺眼）
  □ 按钮间距 ≥ 20px（控制器精度有限）
  □ 提供舒适度选项（传送 vs 平滑移动）
```

### 12F.5 3D 技术栈 Quick Reference

```bash
# 产品展示（最简）
npm i @google/model-viewer

# React 3D（最灵活）
npm i three @react-three/fiber @react-three/drei

# 全景看房
npm i pannellum   # 或 npm i aframe

# WebXR (AR/VR)
npm i @react-three/xr

# 3D 模型压缩
npx gltf-transform optimize input.glb output.glb --compress draco

# 3D 物理（碰撞、重力）
npm i @react-three/rapier
```

---

## Part 12G: Knowledge Graph Visualization UI

> Patterns for graph/network visualization, entity relationship, mind maps, and knowledge exploration interfaces.
> Tech: D3.js, Cytoscape.js, vis-network, G6/Graphin, React Flow, Sigma.js.

### 12G.1 Knowledge Graph Scenarios & Tech Selection

| Scenario | Node Count | Recommended Tech | Why |
|----------|-----------|-----------------|-----|
| **关系图谱** (人物/企业) | < 500 | G6 / Graphin (AntV) | 中文生态最佳，交互丰富 |
| **知识图谱浏览** | < 1,000 | Cytoscape.js | 学术标准，算法丰富 |
| **大规模图谱** | > 10,000 | Sigma.js (WebGL) | GPU 渲染，百万节点 |
| **流程/工作流** | < 200 | React Flow | React 原生，拖拽编排 |
| **思维导图** | < 500 | @antv/g6 或自建 | 树状布局原生支持 |
| **数据血缘** | < 1,000 | React Flow / G6 | 有向图 + 层次布局 |
| **社交网络** | < 5,000 | vis-network | 力导向布局，简单易用 |
| **D3 自定义** | Any | D3.js | 完全控制，学习曲线高 |

### 12G.2 Knowledge Graph UI Layout

```
┌─────────────────────────────────────────────────────────┐
│ [🔍 搜索实体]              [布局▾] [筛选▾] [导出]  [⛶] │ ← 工具栏
├──────────┬──────────────────────────────────────────────┤
│          │                                              │
│ 图例     │          ← 图谱画布 →                        │
│ ● 人物   │                                              │
│ ● 企业   │     ┌──┐     ┌──┐                           │
│ ● 事件   │     │A │────│B │                            │
│ ● 地点   │     └──┘╲   └──┘                            │
│          │          ╲  ┌──┐                              │
│ 关系类型  │           ╲│C │                              │
│ ── 任职  │            └──┘                              │
│ ── 投资  │                                              │
│ ·· 关联  │                                              │
│          │                                              │
├──────────┤                                              │
│ 详情面板  │                                              │
│          │                                              │
│ [实体名]  │   ← 点击节点后显示                           │
│ 类型：人物│                                              │
│ 关系：15  │                                              │
│ [展开]    │                                              │
└──────────┴──────────────────────────────────────────────┘
```

### 12G.3 Graph Interaction Patterns

```
Node (节点) 交互：
  单击          → 选中，高亮关联边，显示详情面板
  双击          → 展开子图（加载关联节点）
  右键          → 上下文菜单（展开/收起/隐藏/定位/详情）
  拖拽          → 移动节点位置（其他节点力导向重排）
  Hover         → 显示 tooltip（名称 + 类型 + 关系数）

Edge (边) 交互：
  单击          → 高亮边 + 两端节点，显示关系详情
  Hover         → 显示关系类型标签

Canvas (画布) 交互：
  拖拽空白      → 平移画布
  滚轮          → 缩放画布
  框选          → 批量选中节点
  双击空白      → 重置视图（fit-to-screen）

键盘：
  Ctrl+F        → 搜索节点
  Delete        → 隐藏选中节点
  Ctrl+Z        → 撤销操作
  +/-           → 缩放
```

### 12G.4 Graph Visual Encoding Rules

```
节点大小 = f(重要性)
  重要性高 → 节点大（40-60px）
  重要性低 → 节点小（16-24px）
  公式：size = Math.max(16, Math.min(60, baseSize + connections * 2))

节点颜色 = f(类型)
  每种实体类型一个颜色（从设计系统调色板取）
  最多 8 种颜色（超过则归入"其他"灰色）
  颜色方案来自 DESIGN.md Section 2 的调色板

边粗细 = f(关系强度)
  强关系 → 粗边（3-4px）
  弱关系 → 细边（1px）
  推测/不确定 → 虚线

边颜色 = f(关系类型)
  同类关系同色，但比节点颜色浅 30%
  或统一灰色（当边类型太多时）

标签：
  节点标签 → 始终显示（缩放过小时隐藏）
  边标签   → hover 时显示（避免文字过密）
  字号 = max(10px, 14px * zoomLevel)（随缩放适配）
```

### 12G.5 Graph Performance Rules

```
□ < 500 节点：Canvas 2D 渲染足够
□ 500-5,000 节点：WebGL 渲染（Sigma.js / G6 GPU 模式）
□ > 5,000 节点：分层加载 + 聚类折叠 + WebGL
□ 布局计算放 Web Worker（不阻塞主线程）
□ 力导向布局限制迭代次数（300 次足够稳定）
□ 缩放层级切换：宏观（聚类）→ 中观（节点）→ 微观（标签+详情）
□ 鱼眼放大：焦点区域放大，周边压缩（探索大图的利器）
```

### 12G.6 Tech Quick Reference

```bash
# AntV G6（中文生态首选）
npm i @antv/g6

# React Flow（流程编排/工作流）
npm i reactflow

# Cytoscape.js（学术/复杂分析）
npm i cytoscape

# vis-network（快速社交图谱）
npm i vis-network

# Sigma.js（超大规模 WebGL）
npm i sigma graphology

# D3 Force Layout（完全自定义）
npm i d3-force d3-selection
```

---

## Part 12H: Intelligent Search UI/UX

> Patterns for search experiences: instant search, faceted filters, AI-powered semantic search,
> search suggestions, search results, and no-results states.
> Reference brands: Algolia, Elasticsearch, Google, Notion, Linear, Raycast, Spotlight.

### 12H.1 Search Complexity Levels

| Level | Type | Example | UI Pattern |
|-------|------|---------|-----------|
| **L1** | Simple keyword | Blog search | Input + results list |
| **L2** | Filter + sort | E-commerce | Search bar + faceted sidebar + sort dropdown |
| **L3** | Instant/typeahead | Spotlight/Raycast | Floating palette + instant results |
| **L4** | AI semantic | "Find meetings about budget" | NLP query + smart results + intent chips |
| **L5** | Conversational | ChatGPT + search | Chat input → structured results + follow-up |

### 12H.2 Search UI Anatomy

**Level 2-3: Standard Search Page**
```
┌─────────────────────────────────────────────────────────┐
│ ┌──────────────────────────────────────────────────┐    │
│ │ 🔍 Search products...               [Filters] [×]│    │ ← 搜索栏
│ └──────────────────────────────────────────────────┘    │
│                                                         │
│ Recent: [iPhone case] [USB-C cable] [wireless mouse]    │ ← 最近搜索
│ Trending: [summer sale] [new arrivals]                  │ ← 热门搜索
│                                                         │
│ ┌─── After typing ───────────────────────────────────┐  │
│ │ Suggestions:                                       │  │
│ │   🔍 wireless charger                             │  │ ← 搜索建议
│ │   🔍 wireless earbuds                             │  │
│ │   🔍 wireless keyboard                            │  │
│ │ Products:                                          │  │
│ │   📦 Anker Wireless Charger — $29.99              │  │ ← 即时结果
│ │   📦 MagSafe Charger — $39.00                     │  │
│ │ Categories:                                        │  │
│ │   📁 Electronics > Chargers                        │  │ ← 分类匹配
│ └────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

**Level 3: Command Palette (Raycast/Linear/Notion style)**
```
┌──────────────────────────────────────────────┐
│ 🔍 Type a command or search...               │
├──────────────────────────────────────────────┤
│ ACTIONS                                      │
│   ▶ Create new document          ⌘N          │
│   ▶ Open settings                ⌘,          │
│ RECENT                                       │
│   📄 Q4 Budget Report           2h ago       │
│   📊 Analytics Dashboard        yesterday    │
│ PAGES                                        │
│   📄 Getting Started Guide                   │
│   📄 API Documentation                       │
└──────────────────────────────────────────────┘

交互规则：
  - Cmd/Ctrl+K 全局唤起（任何页面）
  - 输入即搜索（debounce 150ms）
  - 箭头键导航，Enter 执行，Esc 关闭
  - 模糊匹配 + 高亮匹配文字
  - 分组展示（Actions / Pages / People）
  - 记忆最近使用（下次优先显示）
```

**Level 4: AI-Powered Search**
```
┌──────────────────────────────────────────────────────┐
│ 🔍 Find all meetings about budget in the last month  │ ← 自然语言查询
├──────────────────────────────────────────────────────┤
│ AI understood: meetings + topic:budget + time:30d    │ ← 意图解析展示
│ ┌──────────────────────────────────────────────────┐ │
│ │ 🏷️ [meetings] [budget] [last 30 days] [× clear] │ │ ← 可编辑意图标签
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ Found 12 results                          [Relevance▾]│
│                                                      │
│ 📅 Q4 Budget Review — Oct 15             98% match   │ ← 相关度评分
│    "...discussed the quarterly budget allocation..."  │ ← 高亮摘要
│                                                      │
│ 📅 Team Budget Planning — Oct 8          94% match   │
│    "...team budget for next quarter..."              │
│                                                      │
│ 💡 Did you mean: [budget approval] [expense reports]  │ ← AI 建议扩展
└──────────────────────────────────────────────────────┘
```

### 12H.3 Search Interaction Patterns

```
INPUT BEHAVIOR:
  空状态（未输入）     → 显示：最近搜索 + 热门搜索 + 快捷操作
  输入 1-2 字符       → 显示：搜索建议（基于前缀匹配）
  输入 3+ 字符        → 显示：即时结果（debounce 150-300ms）
  输入中 + 等待       → 显示：加载骨架（非 spinner）
  清空输入            → 回到空状态
  按 Esc              → 关闭搜索面板

RESULTS BEHAVIOR:
  有结果              → 按相关度排序，高亮匹配文字
  无结果              → 友好提示 + 建议（拼写修正、相关词、放宽条件）
  结果过多            → 显示总数 + 建议添加筛选条件
  加载中              → 骨架屏 placeholder（不清除旧结果）

HIGHLIGHT RULES:
  匹配文字加粗        → <mark> 或 font-weight: 600
  匹配文字颜色        → var(--accent) 或 var(--text-primary)
  非匹配文字          → var(--text-secondary)
```

### 12H.4 Search Results Design Patterns

```
List View（默认）:
  ┌──────────────────────────────────────────┐
  │ 📄 Title (matched text bolded)           │
  │ Description snippet with ...highlight... │
  │ Category · Date · Author                 │
  └──────────────────────────────────────────┘

Grid View（图片类）:
  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
  │ img  │ │ img  │ │ img  │ │ img  │
  │ Title│ │ Title│ │ Title│ │ Title│
  └──────┘ └──────┘ └──────┘ └──────┘

Grouped View（分类）:
  DOCUMENTS (5)
    📄 Result 1
    📄 Result 2
  PEOPLE (3)
    👤 Result 3
  CHANNELS (2)
    # Result 4
```

### 12H.5 No-Results State Design

```
永远不要只显示 "No results found."

标准无结果页面：
  ┌──────────────────────────────────────┐
  │                                      │
  │        [🔍 插图或 Lottie]            │
  │                                      │
  │    No results for "xyzabc"           │
  │                                      │
  │    Suggestions:                      │
  │    • Check your spelling             │
  │    • Try more general keywords       │
  │    • Remove some filters             │
  │                                      │
  │    Did you mean: [xyz] [abc]         │ ← 拼写纠正
  │                                      │
  │    Popular searches:                 │ ← 热门推荐
  │    [trending 1] [trending 2]         │
  │                                      │
  └──────────────────────────────────────┘
```

### 12H.6 Faceted Filter Design

```
┌─ Filters ────────────────┐
│                          │
│ Category                 │
│ ☑ Electronics (234)      │ ← 带数量的多选
│ ☐ Books (56)             │
│ ☑ Accessories (128)      │
│ [Show more...]           │
│                          │
│ Price Range              │
│ [$10] ───●───●─── [$500] │ ← 范围滑块
│                          │
│ Rating                   │
│ ★★★★☆ & up (89)         │ ← 星级筛选
│ ★★★☆☆ & up (156)        │
│                          │
│ Color                    │
│ ⬤ ⬤ ⬤ ⬤ ⬤ ⬤           │ ← 色板选择
│                          │
│ [Clear all filters]      │
└──────────────────────────┘

交互规则：
  □ 选择筛选后即时刷新结果（不需要点"应用"）
  □ 每个筛选项显示匹配数量
  □ 已选筛选显示为可删除标签（上方汇总）
  □ "Clear all" 一键清除所有筛选
  □ 移动端：筛选收起为底部抽屉
  □ URL 同步筛选状态（可分享/书签）
```

### 12H.7 Search Performance Standards

```
□ 搜索建议响应 < 100ms（本地缓存 + 服务端预测）
□ 搜索结果响应 < 300ms（含网络延迟）
□ 输入 debounce 150-300ms（避免每个字符都请求）
□ 骨架屏保留旧结果（新结果渐入替换，不闪烁）
□ 搜索词高亮用 <mark> 标签（可被屏幕阅读器识别）
□ 键盘完全可用（Tab/Arrow/Enter/Esc）
□ 搜索历史存 localStorage（最近 20 条，可清除）
□ 热门搜索缓存 5 分钟（减少 API 调用）
```

### 12H.8 Tech Quick Reference

```bash
# 客户端即时搜索（小数据集 < 10,000 条）
npm i fuse.js           # 模糊搜索
npm i minisearch        # 轻量全文搜索

# 搜索 UI 组件
npm i @algolia/autocomplete-js    # Algolia 搜索 UI
npm i cmdk              # Command palette（shadcn 用它）
npm i kbar              # 另一个 command palette

# 服务端搜索引擎
# Elasticsearch, Meilisearch, Typesense (self-hosted)
# Algolia (SaaS)

# AI 语义搜索
# OpenAI Embeddings + pgvector
# Pinecone / Weaviate / Qdrant (vector DB)
```

---

## Part 12I: Learn from Any Website or Screenshot — Design DNA Extraction

> When the user says "I like this website" or shares a screenshot, extract its design DNA and apply it.

### 12I.1 Input Methods & What AI Can Do

| User Provides | AI Capability | How |
|---------------|--------------|-----|
| **Website URL** | Read live CSS/HTML → extract all tokens | Use WebFetch to read page, or Claude in Chrome to inspect |
| **Screenshot (image)** | Analyze visual: colors, type style, spacing, shadows, layout | Multimodal image understanding (built-in) |
| **Multiple screenshots** | Compare patterns across pages for consistency | Batch analysis |
| **"I like Notion's style"** | Look up brand in DesignDNA's 58-brand collection | Direct reference from Part 2 archetypes |

### 12I.2 Workflow: URL → Design DNA

When the user provides a URL:

```
Step 1: ACCESS
  - Use WebFetch or browser tools to load the page
  - Read HTML structure and CSS stylesheets

Step 2: EXTRACT (automated)
  Colors:
    - Extract all color values from CSS (hex, rgb, rgba, hsl, oklch)
    - Group by frequency → identify primary, secondary, accent, text, bg
    - Check: warm or cool neutrals? How many accent colors?
  
  Typography:
    - Extract font-family declarations → identify primary/secondary/mono
    - Extract font-size scale → build hierarchy table
    - Extract font-weight usage → identify weight system
    - Extract letter-spacing patterns → check if scaling with size
    - Extract line-height patterns → check compression at scale
  
  Spacing:
    - Extract padding/margin/gap → check if on 8px grid
    - Identify spacing scale
  
  Shadows:
    - Extract all box-shadow values → identify elevation system
    - Analyze: single-layer or multi-layer? warm or cool tinted?
  
  Radius:
    - Extract border-radius → identify systematic scale or random
  
  Components:
    - Identify button styles (primary, secondary, ghost)
    - Identify card patterns
    - Identify navigation patterns

Step 3: MATCH
  Compare extracted DNA against 10 archetypes (Part 2):
  "This website most closely matches [Archetype] — similar to [Brand]"

Step 4: REPORT
  Output a structured analysis to the user:
  
  ## Design DNA Analysis: [URL]
  
  ### Archetype Match: [Name] (like [Brand])
  
  ### Extracted Tokens
  | Category | Values Found |
  |----------|-------------|
  | Primary color | #xxx |
  | Text color | #xxx (warm/cool) |
  | ... | ... |
  
  ### What makes this design effective
  1. [Observation about color usage]
  2. [Observation about typography]
  3. [Observation about spacing/layout]
  
  ### Patterns worth adopting
  - [Specific technique with CSS example]
  
  ### Generated DESIGN.md
  [Optional: full 9-section DESIGN.md if user wants to adopt this style]

Step 5: SAVE (if user approves)
  Save the analysis to designdna/experience/references/[site-name].md
  for future cross-project reference.
```

### 12I.3 Workflow: Screenshot → Design DNA

When the user provides a screenshot:

```
Step 1: OBSERVE
  Look at the image and identify:
  - Overall color temperature (warm/cool/neutral)
  - Dominant background color (light/dark/colored)
  - Accent color and where it's used
  - Typography style (serif/sans/mono, weight range, density)
  - Spacing density (airy/standard/dense)
  - Shadow treatment (none/subtle/heavy)
  - Corner radius treatment (sharp/rounded/pill)
  - Layout pattern (centered/sidebar/asymmetric)

Step 2: MATCH
  Map observations to the closest archetype:
  
  Quick matching heuristics from visual observation:
    Dark + monospace + ring shadows  → Dark Instrument
    White + black type + minimal     → Precision Monochrome
    Warm tones + serif headings      → Warm Editorial
    Gradients + light weights        → Vibrant Gradient/Enterprise Trust
    Photography-dominant + minimal   → Premium Automotive
    Bright colors + rounded + icons  → Friendly Warm
    Dark + content-first + pills     → Content Stage

Step 3: DESCRIBE
  Tell the user what you see and which archetype matches:
  
  "From this screenshot, I can see:
   - Dark background (#0a0a0b) with a single green accent
   - Sans-serif type, likely Inter or similar, medium weight
   - Tight letter-spacing on headings
   - Multi-layer ring shadows on cards
   - 8px radius corners
   → This matches the **Dark Instrument** archetype (like Linear/Raycast)
   
   Want me to generate a DESIGN.md based on this style?"

Step 4: GENERATE
  Create a DESIGN.md using:
  - Approximate color values from visual analysis
  - Matched archetype's typography system as baseline
  - Archetype's shadow/spacing/radius systems
```

### 12I.4 Practical Usage Prompts

```
"Look at https://example.com and tell me what makes its design good.
 Extract the design tokens and generate a DESIGN.md for my project."

"Here's a screenshot of an app I like [attached image].
 Analyze its design and tell me which archetype it matches."

"I want my project to look like Linear but with warmer colors.
 Generate a DESIGN.md that combines Linear's layout precision
 with Claude's warm color palette."

"Compare these two screenshots and tell me which has better
 typography and why."
```

### 12I.5 Experience Library Growth

Over time, the `designdna/experience/references/` directory grows into a curated collection:

```
designdna/experience/
├── references/
│   ├── stripe-checkout-flow.md     ← design DNA + what works
│   ├── notion-block-editor.md      ← design DNA + interaction patterns
│   ├── linear-dashboard.md         ← design DNA + dark UI techniques
│   └── client-project-xyz.md       ← screenshot analysis + decisions
└── interactions/
    └── [project interaction logs from Part 12C]
```

This becomes a **personal design knowledge base** that improves every recommendation over time.

---

## Part 12J: Map & Location Services UI/UX

> Patterns for map interfaces, location selection, route navigation, geofencing,
> and location-based services (LBS).
> Reference products: Google Maps, Apple Maps, Uber, Didi, Meituan, Airbnb, Amap.

### 12J.1 Map Scenarios & Tech Selection

| Scenario | Recommended Map SDK | Why |
|----------|-------------------|-----|
| **Web (Global)** | Mapbox GL JS | Beautiful custom styling, 3D buildings, globe view |
| **Web (China)** | AMap (高德地图) JS API | China compliance, POI accuracy, Chinese address |
| **Web (Alternative)** | Leaflet + tiles | Lightweight, open-source, no vendor lock |
| **Web (Google)** | Google Maps JS API | Largest POI database, Street View |
| **React Native** | react-native-maps | Native rendering, cross-platform |
| **Flutter** | google_maps_flutter | Official Google Maps plugin |
| **Mini Program (WeChat)** | wx.map component | Native map component, built-in |
| **Mini Program (Alipay)** | my.map component | Amap-based, built-in |

### 12J.2 Map UI Layout Patterns

**Pattern A: Full-Screen Map (Uber/Didi/Navigation)**
```
┌─────────────────────────────────────────────┐
│ [←]  Where to?                    [🎤]      │ ← 搜索栏浮在地图上
│                                             │
│              ← MAP FULL SCREEN →            │
│                                             │
│                    📍                        │ ← 中心定位点
│                                             │
│                                        [◎]  │ ← 定位按钮（右下）
│                                        [+]  │ ← 缩放按钮
│                                        [-]  │
│ ┌─────────────────────────────────────────┐ │
│ │ ▔▔▔▔▔ (drag handle)                    │ │ ← 底部抽屉
│ │ 📍 Current Location                     │ │
│ │ ★ Home — 123 Main St                   │ │
│ │ ★ Work — 456 Office Ave                │ │
│ │ 🕐 Recently: Coffee Shop               │ │
│ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

底部抽屉交互：
  - 向上滑动展开（半屏 → 全屏）
  - 向下滑动收起（全屏 → 半屏 → 最小化）
  - 3 个停靠位置：peek(120px) / half(50%) / full(90%)
```

**Pattern B: Map + List Split (Airbnb/房产/外卖)**
```
桌面端（左右分屏）：
┌──────────────────────┬──────────────────────┐
│                      │                      │
│    RESULT LIST       │      MAP             │
│                      │                      │
│  ┌────────────────┐  │    📍 A              │
│  │ A. Result 1    │  │          📍 B        │
│  │ ⭐4.8 · $120  │  │    📍 C              │
│  └────────────────┘  │              📍 D    │
│  ┌────────────────┐  │                      │
│  │ B. Result 2    │  │                      │
│  │ ⭐4.5 · $95   │  │                      │
│  └────────────────┘  │                      │
│                      │                      │
└──────────────────────┴──────────────────────┘

交互联动：
  - hover 列表项 → 地图上对应标记高亮放大
  - 点击地图标记 → 列表滚动到对应项
  - 拖动地图 → 列表只显示当前视野内的结果
  - 列表筛选 → 地图标记同步增减

移动端（切换模式）：
  [列表] [地图] ← 顶部切换按钮
  或底部抽屉覆盖在地图上（Airbnb 模式）
```

**Pattern C: Route Display (导航/物流追踪)**
```
┌─────────────────────────────────────────────┐
│ 📍 Starting Point                           │
│ 📍 Destination              [Swap ⇅]       │
│ [Car] [Transit] [Walk] [Bike]               │ ← 出行方式
├─────────────────────────────────────────────┤
│                                             │
│   A ●━━━━━━━━━━━━━━━━━━━● B               │ ← 路线在地图上
│                                             │
│                                             │
├─────────────────────────────────────────────┤
│ Route 1: 25 min · 12 km          [Go]       │ ← 路线选项
│ Route 2: 32 min · 15 km (toll)   [Go]       │
│ Route 3: 40 min · 11 km          [Go]       │
└─────────────────────────────────────────────┘

路线样式：
  - 主路线：品牌色，4px 宽，100% 透明
  - 备选路线：灰色，3px 宽，50% 透明
  - 拥堵段：红色叠加
  - 已走过的段：颜色变浅
  - 动态车标：沿路线平滑移动
```

### 12J.3 Map Markers (标记点) Design

```
Standard Markers:
  ● 圆点标记（默认，最小视觉干扰）
  📍 Pin 标记（目的地，需要强调）
  💲 带内容标记（价格/评分，Airbnb 风格）
  🔢 带编号标记（路线节点，A→B→C）
  👤 用户头像标记（社交/协作场景）

标记状态：
  Default   → 品牌色，标准大小
  Hover     → 放大 1.2x + 弹出信息卡
  Selected  → 放大 1.3x + 颜色加深 + 信息卡展开
  Cluster   → 圆形 + 数字（"12+"） → 点击展开

Airbnb 价格标记样式：
  ┌─────────┐
  │ ¥128/晚  │ ← 白色背景 + 圆角 + 阴影
  └────┬────┘
       ▼      ← 底部三角指向位置

  Hover: 背景变深色，文字变白
  Selected: 黑色背景，白色文字，放大
```

### 12J.4 Location Picker (位置选择器)

```
场景：用户需要选择/确认一个地址

┌─────────────────────────────────────────────┐
│ [← 返回]  选择位置                           │
│                                             │
│ ┌─────────────────────────────────────────┐ │
│ │ 🔍 搜索地址、小区、商圈...              │ │ ← 搜索框
│ └─────────────────────────────────────────┘ │
│                                             │
│              ← MAP →                        │
│                                             │
│                 📍                           │ ← 中心 Pin（固定不动）
│                                             │ ← 地图在 Pin 下方移动
│                                        [◎]  │
│                                             │
│ ┌─────────────────────────────────────────┐ │
│ │ 📍 北京市朝阳区xxx街道xxx号              │ │ ← 逆地理编码结果
│ │    附近：xxx 大厦 (50m)                  │ │ ← 附近 POI
│ │                                         │ │
│ │         [确认位置]                       │ │ ← 确认按钮
│ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

交互规则：
  - 地图拖动时中心 Pin 保持不动（视觉锚定）
  - 地图拖动停止后 300ms → 发起逆地理编码
  - 逆地理编码时显示 loading（Pin 下方小 spinner）
  - 搜索框输入 → 下拉搜索建议（地址 + POI）
  - 点击搜索建议 → 地图飞到该位置
  - "定位"按钮 → 回到用户当前位置
```

### 12J.5 Map Overlay UI Design Rules

```
浮在地图上的 UI 元素必须遵守：
  □ 半透明或磨砂背景（不完全遮挡地图）
     background: rgba(255,255,255,0.95);  /* 亮色 */
     backdrop-filter: blur(12px);          /* 磨砂 */
  □ 投影加强层次感（区分 UI 层和地图层）
     box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  □ 圆角统一（与整体设计系统一致）
  □ 按钮放右下角（不遮挡地图中心信息）
  □ 定位按钮用明确的图标（◎ 或 crosshair）
  □ 缩放按钮可选（移动端靠双指手势，可省略）
  □ 安全距离：浮动 UI 距离屏幕边缘 ≥ 16px
  □ 底部抽屉不超过屏幕 50%（peek 状态），留足地图可视区

地图内的文字必须遵守：
  □ 标记标签用白底+阴影（确保在任何瓦片上可读）
  □ 信息窗口（InfoWindow）用卡片设计系统（DESIGN.md）
  □ 距离/时间标注用半透明 pill badge
  □ 路线标注不超过 3 种颜色
```

### 12J.6 Map Accessibility & Performance

```
无障碍：
  □ 地图区域有 aria-label="Interactive map showing [context]"
  □ 标记点可键盘聚焦（Tab 顺序）
  □ 信息窗口可用 Esc 关闭
  □ 提供列表视图替代方案（不依赖纯地图浏览）

性能：
  □ 地图懒加载（不在首屏时 defer 加载 SDK）
  □ 标记点 > 100 个时使用聚类（clustering）
  □ 标记点 > 1,000 个时使用 Canvas/WebGL 渲染
  □ 自定义标记用 SVG（不用 PNG，更清晰更小）
  □ 地图交互用 passive event listeners
  □ 移动端地图使用 will-change: transform 硬件加速

中国合规：
  □ 使用合规地图 SDK（高德/百度/腾讯地图）
  □ 坐标系：GCJ-02（中国偏移坐标），不用 WGS-84
  □ 地图数据不出境存储
  □ 敏感区域标注遵守国家要求
```

### 12J.7 Map Tech Quick Reference

```bash
# Web — Mapbox GL JS（全球最佳视觉）
npm i mapbox-gl
npm i react-map-gl        # React 封装

# Web — 高德地图（中国项目首选）
npm i @amap/amap-jsapi-loader

# Web — Leaflet（开源轻量）
npm i leaflet
npm i react-leaflet        # React 封装

# Web — 腾讯地图
# Script 标签引入 + 腾讯位置服务 Key

# React Native
npm i react-native-maps

# Flutter
flutter pub add google_maps_flutter

# 小程序 — 内置 map 组件，无需安装
# <map latitude="..." longitude="..." markers="{{markers}}" />
```

---

## Part 13: Standalone Essentials — Self-Sufficient Design Implementation

> When this skill runs WITHOUT companion skills (`frontend-patterns`, `coding-standards`, `ui-design`, etc.),
> it must carry enough implementation knowledge to produce professional results independently.
> These essentials are absorbed from companion skills but scoped to DESIGN IMPLEMENTATION only.

### 13.1 Component Architecture Essentials (from frontend-patterns)

**When writing UI components, follow this hierarchy**:

```
Atoms    → Single-purpose, no internal state (Button, Input, Badge, Avatar, Icon)
Molecules → Combine 2-3 atoms (FormField = Label + Input + Error, SearchBar = Input + Button)
Organisms → Sections with business logic (Header, HeroSection, ProductCard, Footer)
Templates → Full page layouts composing organisms
Pages    → Templates populated with real data
```

**Component file structure**:
```
ComponentName/
├── ComponentName.tsx        # Component logic
├── ComponentName.styles.ts  # Styles (or .module.css / Tailwind classes)
├── ComponentName.types.ts   # TypeScript interfaces
└── index.ts                 # Re-export
```

**State management for UI**:
- Local UI state (open/closed, hover, active) → `useState` / `ref()`
- Shared UI state (theme, sidebar, modal) → Context / Pinia / Zustand
- Server state (data fetching) → React Query / SWR / useFetch

### 13.2 CSS Architecture Essentials (from coding-standards)

**CSS variable naming convention**:
```css
/* Semantic token layers: primitive → semantic → component */

/* Layer 1: Primitives (raw values) */
--color-blue-500: #3b82f6;
--color-gray-900: #222222;
--font-size-16: 1rem;
--space-4: 16px;

/* Layer 2: Semantic (purpose-based, reference primitives) */
--text-primary: var(--color-gray-900);
--bg-primary: #ffffff;
--accent: var(--color-blue-500);
--gap-default: var(--space-4);

/* Layer 3: Component (specific use, reference semantic) */
--button-bg: var(--accent);
--button-text: #ffffff;
--card-bg: var(--bg-primary);
--card-shadow: var(--shadow-md);
```

**Tailwind best practices**:
```jsx
// ✅ GOOD: Semantic class grouping, readable
<button className="
  bg-blue-600 text-white font-medium
  px-4 py-2 rounded-lg
  hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
  transition-colors duration-150
">

// ❌ BAD: Random order, hard to scan
<button className="text-white rounded-lg bg-blue-600 py-2 px-4 hover:bg-blue-700">
```

### 13.3 Accessibility Essentials (from frontend-patterns)

**Minimum requirements for every UI**:

```
1. Color contrast: WCAG AA → 4.5:1 for body text, 3:1 for large text (18px+)
2. Focus indicators: Every interactive element MUST have visible focus ring
3. Touch targets: Minimum 44x44px on mobile
4. Keyboard navigation: Tab order must be logical, Enter/Space activate buttons
5. Semantic HTML: Use <button> not <div onClick>, <nav> not <div class="nav">
6. Alt text: Every <img> has meaningful alt or alt="" if decorative
7. ARIA: Only when semantic HTML isn't sufficient; aria-label for icon-only buttons
```

**Focus ring pattern** (use in every project):
```css
/* Modern focus-visible ring */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
:focus:not(:focus-visible) {
  outline: none;
}
```

### 13.4 Responsive Essentials (from frontend-patterns)

**Mobile-first breakpoint pattern**:
```css
/* Base: mobile (320px+) */
.container { padding: 16px; }

/* Tablet: 768px+ */
@media (min-width: 768px) {
  .container { padding: 24px; max-width: 720px; }
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  .container { padding: 32px; max-width: 960px; }
}

/* Wide: 1280px+ */
@media (min-width: 1280px) {
  .container { max-width: 1200px; }
}
```

**Responsive typography scale**:
```css
/* Fluid type: scales between mobile and desktop */
h1 { font-size: clamp(2rem, 5vw, 4rem); }
h2 { font-size: clamp(1.5rem, 3vw, 2.5rem); }
body { font-size: clamp(0.875rem, 1.5vw, 1rem); }
```

---

## Part 14: Design System Compliance Protocol

> **THE core problem this solves**: You create a DESIGN.md → tell the LLM to follow it → LLM partially ignores it.
> This protocol makes compliance MECHANICAL, not optional.

### 14.1 The Pre-Flight Check (MANDATORY before writing ANY UI code)

Every time the AI agent is about to write UI code for a page or component, it MUST execute this protocol BEFORE writing the first line:

```
┌─────────────────────────────────────────────────────┐
│           DESIGN SYSTEM PRE-FLIGHT CHECK            │
├─────────────────────────────────────────────────────┤
│                                                     │
│  1. READ: Open and read the project's DESIGN.md     │
│     (or design system config file) completely.      │
│     If it doesn't exist → STOP, create it first.   │
│                                                     │
│  2. DECLARE: Before writing code, list explicitly:  │
│     "I will use these tokens from DESIGN.md:"       │
│     - Colors: [list specific hex/variable names]    │
│     - Typography: [list specific roles/sizes]       │
│     - Spacing: [list specific values]               │
│     - Shadows: [list specific levels]               │
│     - Radius: [list specific variants]              │
│     - Components: [list library components to use]  │
│                                                     │
│  3. WRITE: Implement using ONLY declared tokens.    │
│     Every CSS value must trace to DESIGN.md.        │
│                                                     │
│  4. VERIFY: After writing, run the Post-Flight.     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### 14.2 The Post-Flight Check (MANDATORY after writing ANY UI code)

```
┌─────────────────────────────────────────────────────┐
│          DESIGN SYSTEM POST-FLIGHT CHECK            │
├─────────────────────────────────────────────────────┤
│                                                     │
│  For EVERY new/modified file, verify:               │
│                                                     │
│  COLORS:                                            │
│  □ Zero inline hex values (all use variables)       │
│  □ No color not in DESIGN.md palette                │
│  □ Brand accent used for correct purpose only       │
│                                                     │
│  TYPOGRAPHY:                                        │
│  □ Font family matches DESIGN.md                    │
│  □ Font sizes from hierarchy table only             │
│  □ Font weights from approved list only             │
│  □ Letter-spacing scales with size                  │
│                                                     │
│  SPACING:                                           │
│  □ All values on 8px grid                           │
│  □ All values use spacing tokens                    │
│                                                     │
│  SHADOWS:                                           │
│  □ Shadows match elevation system levels            │
│  □ No invented shadow values                        │
│                                                     │
│  COMPONENTS:                                        │
│  □ 4 states: default, hover, focus, disabled        │
│  □ Using design system component, not hand-built    │
│                                                     │
│  ICONS:                                             │
│  □ All from declared icon library                   │
│  □ No emoji or text-as-icon                         │
│                                                     │
│  If ANY check fails → FIX before moving on.         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### 14.3 The Compliance Report (output to user)

After every significant UI implementation, output a brief compliance report:

```markdown
## Design System Compliance Report

### Files modified: 3
- src/components/ProductCard.tsx ✅ PASS
- src/pages/Dashboard.tsx ✅ PASS
- src/components/Sidebar.tsx ⚠️ 1 issue

### Issues found:
1. Sidebar.tsx line 42: `color: #666` → should be `var(--text-secondary)` → **FIXED**

### Tokens used from DESIGN.md:
- Colors: --text-primary, --text-secondary, --bg-elevated, --accent, --border-primary
- Typography: Body (16px/400), Heading 3 (22px/600), Caption (12px/500)
- Spacing: space-3 (12px), space-4 (16px), space-6 (32px)
- Shadows: Level 1 (card rest)
- Radius: Standard (8px), Pill (9999px)

### Compliance: 100% (after fix)
```

### 14.4 The "Show Me the Token" Rule

**When the LLM writes any CSS value, it must be able to answer: "Which DESIGN.md token is this?"**

```
✅ TRACEABLE:
  color: var(--text-primary)           → DESIGN.md Section 2, Text Primary
  font-size: 16px                      → DESIGN.md Section 3, Body role
  padding: 16px                        → DESIGN.md Section 5, space-4
  border-radius: 8px                   → DESIGN.md Section 5, Standard
  box-shadow: var(--shadow-card)       → DESIGN.md Section 6, Level 1

❌ UNTRACEABLE (violation):
  color: #555                          → Not in DESIGN.md! Which token?
  font-size: 15px                      → Not in hierarchy table!
  padding: 13px                        → Not on 8px grid!
  border-radius: 5px                   → Not in radius scale!
  box-shadow: 0 2px 4px rgba(0,0,0,0.1) → Not in elevation system!
```

---

## Part 15: Design System Evolution Protocol

> **THE other core problem**: You update the design system, but changes don't propagate to existing code.

### 15.1 When to Evolve the Design System

Trigger design system evolution when:
- A design decision proves wrong in practice ("this blue CTA doesn't convert well")
- New features need tokens not yet in the system ("we need a warning state")
- Brand refresh or aesthetic adjustment ("make it warmer")
- Accessibility audit finds contrast issues
- User explicitly says "update the design system"

### 15.2 The Evolution Workflow

```
Step 1: DOCUMENT the change
  ├─ What: "Change primary CTA from #3b82f6 to #2563eb"
  ├─ Why: "Contrast ratio was 3.8:1, needs 4.5:1 for WCAG AA"
  └─ Scope: "All primary buttons, links, and focus rings"

Step 2: UPDATE DESIGN.md
  ├─ Edit the specific token in the DESIGN.md file
  ├─ Update Section 9 (Agent Prompt Guide) if hex values are referenced
  ├─ Update Section 7 (Do's/Don'ts) if rules are affected
  └─ Add a changelog entry at bottom of DESIGN.md:
      ## Changelog
      - [date] Changed --accent from #3b82f6 to #2563eb (WCAG contrast fix)

Step 3: FIND all usages of the old value
  Run search across entire codebase:
    - grep for old hex value (#3b82f6)
    - grep for the CSS variable name (--accent)
    - grep for Tailwind class (bg-blue-500 → bg-blue-600)
    - List ALL files and line numbers

Step 4: UPDATE all usages
  ├─ If using CSS variables → update ONLY the variable definition (one place!)
  ├─ If using Tailwind → find-replace class names
  ├─ If hardcoded values exist → replace with variable reference
  └─ Verify zero remaining old values

Step 5: VERIFY with Post-Flight Check
  Run the Post-Flight Check on ALL modified files
  Output a Compliance Report showing the migration is complete

Step 6: CONFIRM with user
  "Design system updated: --accent changed from #3b82f6 to #2563eb.
   Updated in 12 files. Zero remaining old values. Compliance: 100%."
```

### 15.3 Adding New Tokens

When the design system needs to grow (new color, new typography role, new component):

```
1. Check: does an existing token already cover this need?
   (Often a "new" color is just an existing token used differently)

2. If truly new:
   a. Add to the correct section of DESIGN.md
   b. Choose a semantic name (--status-warning, not --yellow-500)
   c. Add the CSS variable to the theme file
   d. Document its purpose and usage rules
   e. Add a Do/Don't if the new token has constraints

3. Update Section 9 (Agent Prompt Guide) to include the new token
```

### 15.4 Design System Changelog

Every DESIGN.md should end with a changelog section:

```markdown
---

## Changelog

| Date | Change | Reason | Scope |
|------|--------|--------|-------|
| 2026-04-11 | Initial DESIGN.md | Project creation | Full system |
| 2026-04-15 | --accent: #3b82f6 → #2563eb | WCAG contrast fix | Buttons, links, focus |
| 2026-04-20 | Added --status-warning: #f59e0b | New notification feature | Alerts, badges |
| 2026-04-25 | Body line-height: 1.5 → 1.6 | Readability improvement | All body text |
```

### 15.5 The "Single Source of Truth" Enforcement

```
DESIGN.md is the SINGLE SOURCE OF TRUTH.

When there's a conflict between:
  - DESIGN.md says #2563eb
  - Code says #3b82f6
  → DESIGN.md WINS. Fix the code.

When there's a conflict between:
  - DESIGN.md says font-weight: 600
  - A component uses font-weight: 700
  → DESIGN.md WINS. Fix the component.

The ONLY exception:
  - User explicitly says "change the design system to match what's in the code"
  → Then update DESIGN.md to match, making the code the new truth.
  → This is a DESIGN SYSTEM EVOLUTION, follow 15.2 workflow.
```
