# Awesome Design System Rules
# Universal format for OpenClaw, OpenCode, Windsurf, Hermes Agent, and other AI coding tools
# Distilled from 58 world-class brand design systems via Google Stitch DESIGN.md methodology
# Source: https://github.com/tiantangcao1980-web/DesignDNA-Skills

---

## Scope: Design System, NOT General Frontend

This file covers DESIGN decisions: colors, typography, spacing, shadows, component styling, design tokens, DESIGN.md methodology, and design-driven tech stack advisory.

It does NOT cover: framework architecture, state management, build tools, deployment, code style, security, or accessibility implementation. For those, follow your project's standard engineering rules.

**Conflict resolution**: Engineering rules win on HOW to implement. This file wins on WHAT visual direction to take.

## Overview

This rule file teaches AI agents to generate production-grade UI by applying design patterns extracted from 58 world-class brand design systems. It follows the Google Stitch DESIGN.md methodology — encoding design systems as Markdown files that LLMs can directly understand and implement.

**Brands analyzed**: Apple, Tesla, Stripe, Vercel, Linear, Airbnb, Spotify, Notion, Figma, Claude, BMW, Ferrari, Lamborghini, Framer, Raycast, Supabase, Cursor, and 41 more.

---

## When This Rule Applies

This rule activates whenever:
- Generating UI code (HTML, CSS, React, Vue, Svelte, etc.)
- Creating pages, components, interfaces, or styles
- Setting up a design system or theme
- Writing a DESIGN.md file
- Reviewing UI code quality

---

## Step 1: Check for DESIGN.md

Before writing ANY UI code:

1. Check if a `DESIGN.md` file exists in the project root
2. If yes: read it completely and follow every specification
3. If no: identify the design archetype (see table below) and either:
   - Ask the user which brand aesthetic to follow, OR
   - Generate a DESIGN.md following the 9-section format

---

## Step 2: Identify Design Archetype

| Project Type | Archetype | Reference | Key Signature |
|-------------|-----------|-----------|---------------|
| Developer tool / CLI | Dark Instrument | Linear, Raycast, Warp | Void-black, multi-ring shadows, weight 510, Inter with cv01+ss03 |
| SaaS / Productivity | Precision Monochrome | Vercel, HashiCorp | Black/white, Geist font, shadow-as-border, 400/500/600 weights |
| Consumer / Marketplace | Warm Editorial | Airbnb, Notion | Warm near-black (#222), serif/sans mix, 4-layer warm shadows |
| Fintech / Data | Enterprise Trust | Stripe, Coinbase | Weight 300, blue-tinted shadows, tabular numbers, ss01 |
| AI / ML product | Warm Editorial | Claude, xAI | Parchment canvas, ring shadows, serif headings, olive neutrals |
| Creative tool | Vibrant Gradient | Figma, Framer | Variable weights (320-540), extreme letter-spacing, color gradients |
| Media / Content | Content Stage | Spotify, Pinterest | UI recedes, pill geometry, brand color reserved for ONE action |
| Automotive / Luxury | Premium Automotive | Tesla, BMW, Ferrari | Zero shadows, single CTA color, full-viewport photography |
| Friendly SaaS | Friendly Warm | Zapier, Lovable, Miro | Bright accents, rounded corners, illustration-driven |
| Infrastructure | Developer Native | Supabase, Resend, Expo | Monospace accents, dark emerald/green, code-forward |

---

## Step 3: Apply Universal Design Rules

### Rule 1 — 8px Base Spacing
All spacing (padding, margin, gap) must be multiples of 8px.
Allowed: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128px.

### Rule 2 — Maximum 4 Font Weights
Each weight has ONE semantic purpose:
| Weight | Purpose | Example Brand |
|--------|---------|--------------|
| 300 | De-emphasis, secondary info | Stripe |
| 400 | Body text, reading content | Universal |
| 500 | UI labels, interactive elements | Linear, Raycast |
| 600-700 | Headings, display, hero | Vercel, Airbnb |

### Rule 3 — Letter-Spacing Scales with Size
```
Display (48px+):   -0.03em to -0.05em
Heading (24-48px): -0.01em to -0.02em
Body (14-18px):    0 (normal)
Caption (10-13px): +0.01em to +0.02em
```
This rule is universal across ALL 58 brands. No exceptions.

### Rule 4 — Semantic Color Organization
Always organize by purpose:
```
Brand/Primary
  └─ Text Scale (primary → secondary → tertiary → disabled)
  └─ Surface/Background (base → elevated → overlay)
  └─ Interactive (default → hover → focus → active)
  └─ Borders (primary → subtle → focus ring)
  └─ Semantic (error → success → warning → info)
```

### Rule 5 — Multi-Layer Shadows
Minimum 2 layers. Choose a philosophy:

**Warm Subtle (Notion/Airbnb)**:
```css
box-shadow:
  rgba(0,0,0,0.04) 0px 4px 18px,
  rgba(0,0,0,0.027) 0px 2px 8px,
  rgba(0,0,0,0.02) 0px 1px 3px,
  rgba(0,0,0,0.01) 0px 0px 1px;
```

**Ring Containment (Claude/Vercel)**:
```css
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.08);
```

**Chromatic Depth (Stripe)**:
```css
box-shadow:
  rgba(50,50,93,0.25) 0px 13px 27px -5px,
  rgba(0,0,0,0.3) 0px 8px 16px -8px;
```

**Dark Mode Inset (Linear/Raycast)**:
```css
box-shadow: rgba(0,0,0,0.5) 0px 16px 70px;
border: 1px solid rgba(255,255,255,0.06);
```

### Rule 6 — Brand Accent Restraint
Brand color = ONE semantic purpose. Examples:
- Spotify green (#1ed760) → ONLY play/active
- Airbnb coral (#ff385c) → ONLY CTA
- Tesla blue (#3E6AE1) → ONLY primary action
- Never decorative. Never on borders. Never on backgrounds.

### Rule 7 — Warm Near-Black Text
Use #222222, #1a1a1a, or rgba(0,0,0,0.95).
NEVER pure #000000 on light backgrounds.

### Rule 8 — Border-Radius Scale (8 variants)
| Name | Value | Use |
|------|-------|-----|
| None | 0px | Dividers, inline tags |
| Micro | 2px | Small interactive elements |
| Subtle | 4px | Buttons, inputs |
| Standard | 6-8px | Cards, containers |
| Comfortable | 12px | Featured cards, panels |
| Relaxed | 16-20px | Large containers |
| Pill | 9999px | Badges, tags, pills |
| Circle | 50% | Avatars, icon buttons |

### Rule 9 — 4 Component States
Every interactive element: default, hover, focus, disabled. No exceptions.

### Rule 10 — Explicit Do's and Don'ts
Every design must have guardrails preventing drift.

---

## Forbidden Patterns

NEVER produce these — they were absent from all 58 world-class brands:

1. Generic gradient backgrounds with centered layouts (AI default aesthetic)
2. Rainbow palettes (>3 accent colors competing)
3. Same border-radius on all elements
4. Single-layer box-shadow
5. Pure #000000 text on white
6. Uniform letter-spacing at all sizes
7. >4 font weights
8. Brand color used decoratively
9. Everything centered and symmetrical
10. Light fonts (<400) on dark backgrounds

---

## DESIGN.md 9-Section Format

When creating a DESIGN.md, use exactly this structure:

### 1. Visual Theme & Atmosphere
200+ words of philosophical narrative describing emotional quality, density, and core design philosophy. Use sensory metaphors.

### 2. Color Palette & Roles
15+ colors organized by semantic purpose. Format: `**Color Name** (#hexcode): description and use case`

### 3. Typography Rules
Font families with fallback stacks + hierarchy table (10+ roles):
| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|

### 4. Component Stylings
Buttons (primary/secondary/ghost), Cards, Inputs, Navigation, Images, Distinctive elements. Each with: background, text, padding, radius, shadow, hover, focus, use case.

### 5. Layout Principles
8px base unit, full spacing scale, grid system, whitespace philosophy, border-radius scale table.

### 6. Depth & Elevation
Shadow system with 3-5 named levels, each with CSS values and use cases.

### 7. Do's and Don'ts
10+ explicit rules (5 Do + 5 Don't) with reasons.

### 8. Responsive Behavior
Breakpoint table (name/width/changes), touch targets (44px min), collapsing strategy.

### 9. Agent Prompt Guide
Quick color reference (5-15 colors with roles) + 3+ example component prompts with full specs + iteration tips.

---

## Color Temperature Quick Reference

### Warm Palette (Consumer, Editorial, AI):
```
--text-primary: #222222;
--text-secondary: #484848;
--text-tertiary: #717171;
--bg-primary: #ffffff;
--bg-warm: #fafaf8;
--bg-parchment: #f5f4ed;
--border: rgba(0,0,0,0.08);
```

### Cool Palette (Developer, SaaS, Technical):
```
--text-primary: #171717;
--text-secondary: #404040;
--text-tertiary: #737373;
--bg-primary: #ffffff;
--bg-subtle: #fafafa;
--border: rgba(0,0,0,0.06);
```

### Dark Palette (Developer tools, Media, Gaming):
```
--text-primary: rgba(255,255,255,0.95);
--text-secondary: rgba(255,255,255,0.6);
--text-tertiary: rgba(255,255,255,0.4);
--bg-void: #08090a;
--bg-surface: #111213;
--bg-elevated: #1a1b1e;
--border: rgba(255,255,255,0.06);
```

---

## Line-Height Scale

```
Display (64px+): line-height: 0.85-1.0
Hero (48-64px):  line-height: 1.0-1.1
Heading (24-48px): line-height: 1.1-1.25
Subheading (18-24px): line-height: 1.25-1.35
Body (14-18px): line-height: 1.4-1.6
Caption (10-13px): line-height: 1.3-1.5
```

---

## Existing Project UI Optimization

When asked to optimize/upgrade an existing project's UI:

### Audit Workflow
1. **Extract** current design DNA: search for all colors, font-weights, box-shadows, border-radius, font-sizes
2. **Score** each of the 10 Universal Rules as PASS / PARTIAL / FAIL
3. **Match** to closest design archetype from the table above
4. **Generate** improvement DESIGN.md preserving what works, fixing violations
5. **Refactor in 5 phases** (one at a time, highest impact first):

### Phase Order
| Phase | System | Impact | Risk | What to do |
|-------|--------|--------|------|-----------|
| 1 | Colors | Highest | Lowest | Extract to CSS variables, warm near-black, semantic grouping |
| 2 | Typography | High | Low | Consolidate to 2-4 weights, add letter-spacing scaling |
| 3 | Shadows | Medium | Low | Replace single-layer with multi-layer from shadow library |
| 4 | Spacing | Medium | Medium | Align to 8px grid, create spacing scale tokens |
| 5 | States | Lower | Low | Add missing hover, focus, disabled states |

---

## Stitch Prototype → Full Project

When building from HTML prototypes (Google Stitch or other tools):

### Extraction Workflow
1. **Read** all prototype HTML files, extract inline styles and `<style>` blocks
2. **Extract** tokens: list all unique colors, fonts, spacing, shadows, border-radius
3. **Match** to closest archetype from the 10-archetype table
4. **Generate** complete DESIGN.md:
   - Use ACTUAL extracted values for colors, type, components
   - Fill GAPS from matched archetype (missing states, responsive, elevation)
   - Expand sparse palettes (5 colors → 15+ semantic)
5. **Build** component library: Atoms → Molecules → Organisms → Templates
6. **Implement** full pages using DESIGN.md tokens (CSS variables, never hardcoded)
7. **Polish**: responsive at all breakpoints, 44px touch targets, WCAG AA contrast, focus rings

---

## Tech Stack — User Choice Protocol

**IMPORTANT**: Recommendations are SUGGESTIONS, not mandates.
- User HAS NOT specified a stack → present 2-3 options, ask "Which would you prefer?"
- User HAS chosen a stack → respect it, adapt resources to match, never suggest switching.
- User's choice has trade-offs → briefly note, then proceed without resistance.

### Smart Recommendation:
```
Web SaaS / Tool        → Next.js + shadcn/ui + Tailwind + Lucide
Web Admin / Dashboard   → Next.js + Ant Design (or TDesign / Element Plus for CN)
Web Landing Page        → Astro or Next.js + Tailwind + Framer Motion
Vue Enterprise (CN)     → Vue 3 + Element Plus or TDesign or Naive UI
Angular Enterprise      → Angular + Angular Material or PrimeNG or NG-ZORRO
Svelte Web             → SvelteKit + shadcn-svelte + Tailwind
Mobile (cross-platform) → Expo (RN) + Paper or Flutter + Material 3
Mobile (iOS only)       → SwiftUI
Mobile (Android only)   → Jetpack Compose
Mini Program (WeChat)   → Native + TDesign Mini or Vant Weapp
Mini Program (multi)    → UniApp + uView or Taro + NutUI
Desktop App            → Tauri + React/Vue + shadcn/ui + Tailwind
HarmonyOS              → ArkUI (ArkTS)
Chrome Extension       → Plasmo + React + Tailwind
Email Template         → React Email + Resend
3D / WebGL             → React Three Fiber
```

### Auto-Pair (user picks framework → auto-select resources):
| Framework | Icons | CSS | Animation |
|-----------|-------|-----|-----------|
| React / Next.js | Lucide React | Tailwind | Framer Motion |
| Vue / Nuxt | Iconify Vue | UnoCSS or Tailwind | @vueuse/motion |
| Angular | Material Icons | SCSS | Angular Animations |
| Svelte / SvelteKit | Lucide Svelte | Tailwind | Svelte transitions |
| Flutter | Material Icons | ThemeData | Flutter built-in |
| React Native / Expo | Expo Vector Icons | StyleSheet | Reanimated |
| Astro | astro-icon | Tailwind | View Transitions |

---

## Practical Usage Prompts

### Optimize existing UI:
> "Read my project's CSS and run a UI audit against the design rules. Score it and create a phased improvement plan."

### Build from Stitch prototype:
> "I have HTML prototypes in [directory]. Extract the design tokens, generate a DESIGN.md, then build the full project using [React/Vue/etc.]."

### Match a brand aesthetic:
> "Redesign my UI to match the [Stripe/Linear/Notion] aesthetic."

### Generate DESIGN.md:
> "Analyze my project and generate a DESIGN.md. It's a [type] with [aesthetic description]."

### Quick UI review:
> "Review my UI against production design standards. Score it and tell me what to fix first."
