---
name: apple-hig
description: Apple Human Interface Guidelines skill — spec (not code library) for iOS / iPadOS / macOS / visionOS / watchOS / tvOS native apps. Use as design token source for SwiftUI or as visual reference when replicating Apple aesthetics on the web. Includes SF Pro typography, spacing scale, corner radius tokens, dynamic system colors, Liquid Glass materials (WWDC 2025), and HIG principles.
---

# Apple Human Interface Guidelines — Design Spec Reference

> **Source**: https://developer.apple.com/design/
> **Nature**: Specification only — not a component library. Extract as design tokens.
> **Latest**: Liquid Glass materials introduced at WWDC 2025
> **Health**: 🟢 active (continuously updated)

## 1. When to use

- Building **native iOS / macOS / visionOS** apps (implement via SwiftUI — this is the design spec)
- Replicating **Apple-style web pages** or marketing sites
- AI agents generating UI for products that should feel "Apple-like"
- Extract as brand DNA in DesignDNA (see `design-md/apple/DESIGN.md`)

## 2. Typography — SF Pro family

| Face | Use case |
|---|---|
| **SF Pro Display** | Headlines, large titles (≥ 20pt) |
| **SF Pro Text** | Body, labels, small UI copy (< 20pt) |
| **SF Pro Rounded** | Playful contexts (games, kids apps) |
| **SF Mono** | Code, technical data |
| **SF Arabic / SF Hebrew** | Non-Latin localization |
| **SF Symbols** | Icon font (6,000+ symbols) |

### Dynamic Type sizes (iOS)

| Size | Default pt | Range |
|---|---|---|
| Large Title | 34 | 23–60 |
| Title 1 | 28 | 18–48 |
| Title 2 | 22 | 14–36 |
| Title 3 | 20 | 12–32 |
| Headline | 17 (semibold) | 11–30 |
| Body | 17 | 11–53 |
| Callout | 16 | 10–29 |
| Subheadline | 15 | 9–28 |
| Footnote | 13 | 7–25 |
| Caption 1 | 12 | 6–23 |
| Caption 2 | 11 | 5–22 |

Apps must respect the user's chosen Dynamic Type size.

## 3. Spacing — 4pt / 8pt grid

- Baseline grid: **4pt** (also shown as 4px at 1x)
- Most spacing multiples of **8pt**: 8 / 16 / 24 / 32 / 48 / 64
- Min touch target: **44 × 44 pt** (iOS) · **40 × 40 pt** (macOS)
- Safe area insets honored via `safe-area-inset-*` CSS or SwiftUI `safeAreaInset`

## 4. Corner radius

| Context | Radius |
|---|---|
| Buttons, text fields | 10–12 pt |
| Cards, popovers | 16 pt |
| Sheets (half / form) | 10 pt top corners only |
| Widgets | 22 pt (iOS 17+) |
| App icon rounded rect | 22.37% of icon width |
| Continuous corners (squircle) | Preferred over strict circle — looks less harsh |

On iOS/macOS use `.cornerRadius(16)` OR `.clipShape(RoundedRectangle(cornerRadius: 16, style: .continuous))` (squircle).

## 5. Dynamic system colors

Apple's colors **auto-adapt** light/dark. Do not hardcode grays.

| Token | Light | Dark |
|---|---|---|
| label | #000 | #fff |
| secondaryLabel | #3c3c4399 | #ebebf599 |
| tertiaryLabel | #3c3c434c | #ebebf54c |
| systemBackground | #fff | #000 |
| secondarySystemBackground | #f2f2f7 | #1c1c1e |
| tertiarySystemBackground | #fff | #2c2c2e |
| separator | #3c3c4349 | #54545899 |
| systemBlue | #007aff | #0a84ff |
| systemRed | #ff3b30 | #ff453a |
| systemGreen | #34c759 | #30d158 |

In web / Tailwind, replicate with CSS variables:

```css
:root {
  --label: rgba(0, 0, 0, 1);
  --secondary-label: rgba(60, 60, 67, 0.6);
  --system-background: #fff;
  --system-blue: #007aff;
}
@media (prefers-color-scheme: dark) {
  :root {
    --label: rgba(255, 255, 255, 1);
    --secondary-label: rgba(235, 235, 245, 0.6);
    --system-background: #000;
    --system-blue: #0a84ff;
  }
}
```

## 6. Liquid Glass (WWDC 2025)

Introduced for iOS 18+ / macOS 15+. Translucent layered materials with depth.

### Material layers

| Material | Opacity | Use |
|---|---|---|
| Ultra thin | ~40% | Floating nav, tab bar over content |
| Thin | ~60% | Sheets over background |
| Regular | ~80% | Standard modals |
| Thick | ~90% | Emphasized overlays |
| Ultra thick | ~95% | Fallback when blur isn't supported |

### Web approximation

```css
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  border: 0.5px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}
@media (prefers-color-scheme: dark) {
  .glass {
    background: rgba(20, 20, 22, 0.7);
    border-color: rgba(255, 255, 255, 0.1);
  }
}
```

**Use sparingly** — overuse defeats the depth contrast. Reserve for nav bars, floating modals, picker popovers.

## 7. Motion principles

| Principle | Guideline |
|---|---|
| Purposeful | Animation should communicate state or navigation |
| Responsive | < 400ms for interaction feedback |
| Natural | Use spring-like easing, not linear |
| Consistent | Same action = same animation |
| Respectful | Honor `prefers-reduced-motion` |

Default easing: `cubic-bezier(0.25, 0.1, 0.25, 1)` (ease-out-ish).

## 8. Layout principles

- **Space over decoration**: whitespace carries meaning
- **Photography-first**: product imagery dominates marketing pages
- **Sentence case for titles**: "Get started" not "Get Started"
- **One primary action per screen**: resist stacking CTAs
- **Consistent alignment**: left-align most content; centered only for hero

## 9. Web-side implementation (when to use)

| Scenario | Recommendation |
|---|---|
| Apple marketing page clone | Use HIG tokens as brand DNA |
| iOS-native app | Use SwiftUI — respects HIG automatically |
| Progressive web app mimicking iOS feel | Use HIG tokens + Liquid Glass CSS approximation |
| Enterprise app | Probably don't mimic — HIG is context-specific; use MUI / Fluent / Ant instead |

## 10. BANNED (when targeting Apple aesthetic)

- ❌ NEVER use pure `#000` text — use `#1d1d1f` warm near-black
- ❌ NEVER use pure `#fff` surfaces — use `#fafaf9` warm off-white
- ❌ NEVER use generic system fonts — SF Pro (or fallback to `-apple-system`)
- ❌ NEVER use thick borders — Apple uses very subtle `rgba(0,0,0,0.08)` or separators
- ❌ NEVER use saturated neon colors as accents — Apple's accents are restrained (system blue, muted)
- ❌ NEVER use all-caps headings (except tiny eyebrow labels ≤ 12pt)
- ❌ NEVER stack multiple primary CTAs — Apple uses ONE primary, optionally one secondary link
- ❌ NEVER use fake-looking "Loading..." placeholders — Apple uses shimmer skeletons or spinner
- ❌ NEVER use emoji in headings or buttons
- ❌ NEVER override dynamic system colors with hardcoded hex (on iOS native)

## 11. Pre-flight checklist (Apple-style UI)

```
- [ ] Typography uses SF Pro (native) or -apple-system fallback (web)
- [ ] Spacing on 4pt/8pt grid
- [ ] Touch targets ≥ 44pt
- [ ] Warm near-black text, not #000
- [ ] Off-white backgrounds, not pure #fff
- [ ] Dynamic system colors used (iOS) or CSS variables with light/dark (web)
- [ ] Border radius uses continuous corners (squircle) where possible
- [ ] Liquid Glass used sparingly (nav, modals only)
- [ ] One primary action per section
- [ ] Safe area insets honored
- [ ] prefers-reduced-motion respected
- [ ] Animation easing is natural (not linear)
```

## 12. Dial fit (Apple aesthetic)

formality: 9 · motion: 4 · density: 2 · warmth: 6 · contrast: 7

## 13. Related

- **Apple brand DNA**: `design-md/apple/DESIGN.md` + `design-md/apple/BANNED.md` in this repo
- **SwiftUI**: Apple's native UI framework — automatically respects HIG
- **For native iOS**: do NOT use `material-components-ios` (archived 2025-12). Use SwiftUI directly.
