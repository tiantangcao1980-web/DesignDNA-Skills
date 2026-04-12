# DESIGN.md — [Project Name]

> Design system for [Project Name]. Generated following the Google Stitch DESIGN.md standard.
> Reference: [awesome-design-md](https://github.com/tiantangcao1980-web/DesignDNA-Skills)

---

## 1. Visual Theme & Atmosphere

<!-- 
INSTRUCTIONS: Write 200-300 words of philosophical narrative prose. 
Do NOT use bullet points here. Describe:
- The emotional quality of the design (warm, clinical, cinematic, editorial, etc.)
- The design density (airy vs. data-dense)
- The core design philosophy in one sentence
- Use sensory/spatial metaphors

EXAMPLES from world-class brands:
- Vercel: "Precision-engineered monochrome...black/white purity"
- Claude: "Parchment warmth...editorial, magazine-like rhythm"
- Spotify: "Content-first darkness...theater-like environment where album art glows"
- Linear: "Swiss watch precision carved from obsidian...dark-mode-native, semi-transparent white layers"
- Tesla: "Radical subtraction...photography carries ALL emotional weight"
-->

[Write your 200+ word narrative here. Describe the soul of the design, not just its appearance.]

---

## 2. Color Palette & Roles

<!-- 
INSTRUCTIONS: Define 15+ colors organized by SEMANTIC PURPOSE.
Format: **Color Name** (`#hexcode`): description and use case
NEVER use a flat list. Always group by category.
-->

### Primary & Brand

- **[Brand Primary]** (`#______`): Primary brand color. Used for main CTA buttons and key interactive moments only.
- **[Brand Secondary]** (`#______`): Secondary brand color. Used for [specific purpose].

### Text Scale

- **Text Primary** (`#______`): Main body text and headings. [Warm near-black recommended, NEVER pure #000000]
- **Text Secondary** (`#______`): Supporting text, descriptions, metadata.
- **Text Tertiary** (`#______`): Placeholder text, captions, disabled labels.
- **Text Quaternary** (`#______`): Decorative text, watermarks.

### Surface & Background

- **Background Base** (`#______`): Primary page background.
- **Background Elevated** (`#______`): Cards, modals, elevated surfaces.
- **Background Subtle** (`#______`): Section alternation, subtle differentiation.

### Interactive States

- **Interactive Default** (`#______`): Links, clickable elements at rest.
- **Interactive Hover** (`#______`): Hover state for interactive elements.
- **Interactive Focus** (`#______`): Focus ring color for keyboard navigation.

### Borders & Dividers

- **Border Primary** (`rgba(0,0,0,___)`): Standard borders and dividers.
- **Border Subtle** (`rgba(0,0,0,___)`): Whisper-thin separators.
- **Focus Ring** (`#______`): Keyboard focus indicator.

### Semantic

- **Error** (`#______`): Error states, destructive actions.
- **Success** (`#______`): Success states, confirmations.
- **Warning** (`#______`): Warning states, caution indicators.

### Shadows

- **Shadow Color** (`rgba(0,0,0,___)`): Base shadow color at various opacities.

---

## 3. Typography Rules

### Font Families

- **Primary**: `'[Font Name]', [fallback stack]` — Used for [headings/body/both]
- **Secondary**: `'[Font Name]', [fallback stack]` — Used for [purpose]
- **Monospace**: `'[Mono Font]', 'SF Mono', 'Fira Code', monospace` — Used for code, data

### Type Hierarchy

<!-- 
INSTRUCTIONS: Define 10+ roles. Include ALL columns.
Letter-spacing MUST be negative for large sizes and zero/positive for small sizes.
-->

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Primary | 64px / 4rem | 700 | 0.95 | -3.2px | Hero sections only |
| Display | Primary | 48px / 3rem | 700 | 1.0 | -2.4px | Major section headers |
| Heading 1 | Primary | 36px / 2.25rem | 600 | 1.1 | -1.08px | Page titles |
| Heading 2 | Primary | 28px / 1.75rem | 600 | 1.15 | -0.56px | Section titles |
| Heading 3 | Primary | 22px / 1.375rem | 600 | 1.2 | -0.22px | Subsection titles |
| Subheading | Primary | 18px / 1.125rem | 500 | 1.3 | 0px | Card titles, labels |
| Body Large | Primary | 18px / 1.125rem | 400 | 1.5 | 0px | Lead paragraphs |
| Body | Primary | 16px / 1rem | 400 | 1.5 | 0px | Default body text |
| Body Small | Primary | 14px / 0.875rem | 400 | 1.45 | 0px | Secondary content |
| Caption | Primary | 12px / 0.75rem | 500 | 1.35 | +0.12px | Metadata, timestamps |
| Overline | Primary | 11px / 0.6875rem | 600 | 1.4 | +0.5px | Category labels, uppercase |
| Code | Monospace | 14px / 0.875rem | 400 | 1.5 | 0px | Inline code |

### Typography Principles

- Maximum **[2-4]** font weights used: [list weights and their purpose]
- Letter-spacing scales inversely with font size (negative at display, zero at body, positive at caption)
- Line-height compresses at larger sizes (0.85-1.0 for display, 1.4-1.6 for body)
- OpenType features: `font-feature-settings: "[features]";`

---

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#______`
- Text: `#______`, [size]px, weight [value]
- Padding: [value]px [value]px
- Radius: [value]px
- Shadow: [CSS shadow value or "none"]
- Hover: [describe state change]
- Focus: [describe focus ring]
- Use: Primary actions, form submissions

**Secondary**
- Background: `#______` or transparent
- Text: `#______`, [size]px, weight [value]
- Padding: [value]px [value]px
- Border: 1px solid `#______`
- Radius: [value]px
- Hover: [describe state change]
- Use: Secondary actions, cancel buttons

**Ghost / Text**
- Background: transparent
- Text: `#______`, [size]px, weight [value]
- Padding: [value]px [value]px
- Hover: [describe state change — underline, background tint, opacity]
- Use: Tertiary actions, inline links

### Cards & Containers

**Standard Card**
- Background: `#______`
- Border: [value or "none"]
- Radius: [value]px
- Shadow: [multi-layer CSS shadow value]
- Padding: [value]px
- Hover: [describe elevation change if any]

**Featured Card**
- [Same format with enhanced values]

### Input Fields

**Text Input**
- Background: `#______`
- Text: `#______`, [size]px, weight [value]
- Padding: [value]px [value]px
- Border: 1px solid `#______`
- Radius: [value]px
- Focus: [describe focus state — ring, border color, glow]
- Placeholder: `#______` at weight [value]

### Navigation

**Primary Nav**
- Background: `#______`
- Link text: [size]px, weight [value], color `#______`
- Active indicator: [describe — underline, background, weight change]
- Mobile: [describe collapse behavior]

### Images & Media

- Default aspect ratio: [16:9, 4:3, 1:1, or fluid]
- Border radius: [value]px
- Object-fit: [cover, contain, or fill]
- Overlay: [describe overlay treatment if any]

---

## 5. Layout Principles

### Spacing Scale

Base unit: **8px**

| Token | Value | Use |
|-------|-------|-----|
| space-1 | 4px | Inline element gaps |
| space-2 | 8px | Tight component padding |
| space-3 | 12px | Standard gaps |
| space-4 | 16px | Card padding, section gaps |
| space-5 | 24px | Section padding |
| space-6 | 32px | Large section gaps |
| space-7 | 48px | Major section separation |
| space-8 | 64px | Page-level spacing |
| space-9 | 96px | Hero section padding |
| space-10 | 128px | Viewport-level spacing |

### Grid System

- Max content width: [value]px
- Columns: [12 / flexible]
- Gutter: [value]px
- Page margin: [value]px (desktop) / [value]px (mobile)

### Whitespace Philosophy

[Describe how whitespace is used as a design element — generous/tight, structured/organic]

### Border Radius Scale

| Name | Value | Use |
|------|-------|-----|
| None | 0px | Dividers, inline tags |
| Micro | 2px | Small interactive elements |
| Subtle | 4px | Buttons, inputs |
| Standard | 8px | Cards, standard containers |
| Comfortable | 12px | Featured cards, panels |
| Relaxed | 16px | Large containers, media |
| Pill | 9999px | Badges, tags, status pills |
| Circle | 50% | Avatars, icon buttons |

---

## 6. Depth & Elevation

### Shadow System

<!-- Choose a shadow philosophy: warm/subtle, ring-based, chromatic, dark-mode, or zero-shadow -->

| Level | Shadow CSS | Use |
|-------|-----------|-----|
| 0 — Flat | none | Flush elements, backgrounds |
| 1 — Subtle | `rgba(0,0,0,0.04) 0px 1px 3px, rgba(0,0,0,0.02) 0px 0px 1px` | Cards at rest, input fields |
| 2 — Medium | `rgba(0,0,0,0.06) 0px 4px 12px, rgba(0,0,0,0.03) 0px 1px 4px` | Hovered cards, dropdowns |
| 3 — High | `rgba(0,0,0,0.08) 0px 8px 24px, rgba(0,0,0,0.04) 0px 2px 8px` | Modals, popovers |
| 4 — Highest | `rgba(0,0,0,0.12) 0px 16px 48px, rgba(0,0,0,0.06) 0px 4px 16px` | Overlays, floating panels |

### Shadow Philosophy

[Describe how depth communicates hierarchy in this design system]

---

## 7. Do's and Don'ts

### Do

- Use warm near-black (#222222 or similar) for text, not pure #000000
- Scale letter-spacing inversely with font size
- Use multi-layer shadows for natural depth
- Reserve brand accent color for ONE primary semantic purpose
- Maintain maximum [2-4] font weight variants
- [Add 3-5 more brand-specific Do rules]

### Don't

- Don't use pure #000000 for text on light backgrounds
- Don't apply uniform letter-spacing at all font sizes
- Don't use single-layer box shadows
- Don't use brand color decoratively on borders or backgrounds
- Don't exceed 4 font weight variants
- [Add 3-5 more brand-specific Don't rules]

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | 320px | Single column, stacked layout |
| Mobile | 375px | Standard mobile layout |
| Large Mobile | 428px | Slightly wider mobile |
| Tablet | 768px | 2-column layouts appear |
| Desktop Small | 1024px | Full navigation visible |
| Desktop | 1280px | Standard desktop layout |
| Large Desktop | 1440px | Max content width reached |
| Ultra-wide | 1920px+ | Content centered, wider margins |

### Touch Targets

- Minimum tap target: **44 x 44px**
- Recommended: **48 x 48px**
- Spacing between targets: minimum **8px**

### Collapsing Strategy

- 3-column → 2-column at tablet (768px)
- 2-column → 1-column at mobile (375px)
- Navigation collapses to hamburger at [breakpoint]
- Cards stack vertically on mobile

---

## 9. Agent Prompt Guide

### Quick Color Reference

<!-- List the 5-15 most-used colors for quick agent access -->

| Role | Color | Hex |
|------|-------|-----|
| Background | [name] | #______ |
| Text Primary | [name] | #______ |
| Text Secondary | [name] | #______ |
| Brand Accent | [name] | #______ |
| Border | [name] | rgba(0,0,0,___) |
| Surface | [name] | #______ |
| CTA Background | [name] | #______ |
| CTA Text | [name] | #______ |
| Error | [name] | #______ |
| Success | [name] | #______ |

### Example Component Prompts

<!-- 
Write 3-5 complete, natural-language component descriptions 
including ALL specifications: hex codes, sizes, weights, radii, shadows 
-->

**Prompt 1 — Hero Section**:
> "Create a hero section on [background color] background. Headline at [size]px [font] weight [value], line-height [value], letter-spacing [value]px, color [hex]. Subtitle at [size]px weight [value], color [hex]. CTA button: [bg hex] background, [text hex] text, [radius]px radius, [padding] padding."

**Prompt 2 — Card Component**:
> "Design a card: [bg hex] background, [radius]px radius. Title at [size]px weight [value], [text hex]. Body at [size]px weight [value], [text hex]. Shadow: [CSS shadow value]. Border: [value]. Hover: [describe change]."

**Prompt 3 — Navigation Bar**:
> "Build a navigation bar: [bg hex] background, height [value]px. Logo left. Nav links at [size]px weight [value], [text hex], [spacing]px gap. CTA button right: [bg hex], [text hex], [radius]px radius."

### Iteration Tips

1. Always use the exact hex values from this document — never approximate
2. [Brand-critical choice #1]
3. [Brand-critical choice #2]
4. Test with real content — avoid "Lorem ipsum" for final layouts
5. Check contrast ratios meet WCAG AA (4.5:1 for body text)
6. Verify touch targets are at least 44x44px on mobile
