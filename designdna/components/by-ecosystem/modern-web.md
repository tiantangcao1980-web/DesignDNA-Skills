# Modern Web Component Libraries

> Last audit: 2026-04. Covers Bootstrap, Radix, Chakra, Fluent 2, UniApp, and Apple HIG.

## Roster

| Library | Platform | Stars | Last commit | Latest ver | Health | NPM |
|---|---|---|---|---|---|---|
| [twbs/bootstrap](https://github.com/twbs/bootstrap) | CSS + JS | 174k | 2026-04 | v5.3.8 | **active** | `bootstrap` |
| [twbs/icons](https://github.com/twbs/icons) | SVG icons | 7.9k | 2026-04 | v1.13.1 | **active** | `bootstrap-icons` |
| [dcloudio/uni-app](https://github.com/dcloudio/uni-app) | Vue → cross-platform | 41.5k | 2026-04 | v5.07 | **active** | `@dcloudio/uni-app` |
| UniApp X (same repo, `uni-app-x` tag) | UTS → native + MiniProgram | — | 2026-04 | 4.x stable | **active** (new flagship) | — |
| [radix-ui/themes](https://github.com/radix-ui/themes) | React (styled) | 8.3k | 2026-04 | 3.3.0 | **active** | `@radix-ui/themes` |
| [radix-ui/primitives](https://github.com/radix-ui/primitives) | React (headless) | 18.8k | 2026-02 | per-package | **active (slowed)** | `@radix-ui/react-*` |
| [chakra-ui/chakra-ui](https://github.com/chakra-ui/chakra-ui) | React (Panda CSS) | 40.4k | 2026-04 | v3.x | **active** | `@chakra-ui/react` |
| [microsoft/fluentui](https://github.com/microsoft/fluentui) | React v9 + Web Components v3 RC | 19.9k | 2026-04 | v9 stable / WC 3.0-rc.6 | **active** | `@fluentui/react-components`, `@fluentui/web-components` |
| [Fluent 2 design spec](https://fluent2.microsoft.design/) | Cross-platform spec | — | — | continuous | **active** | — |
| [Apple HIG](https://developer.apple.com/design/) | iOS/macOS/visionOS spec | — | WWDC 2025 (Liquid Glass) | — | **active** | — |

## Decision matrix (2026 new project)

| Scenario | Recommended stack |
|---|---|
| Design-driven SaaS / product site | **Tailwind v4 + shadcn/ui** (built on Radix Primitives) + Radix Themes tokens |
| Enterprise admin / internal tools | Bootstrap v5.3 (quick) OR Chakra v3 (modern) |
| Microsoft ecosystem (Teams, M365 plugins) | `@fluentui/react-components` v9 |
| Cross-platform app with MiniProgram + iOS/Android | UniApp (Vue 3) for breadth; UniApp X for performance-critical native |
| iOS / visionOS native | Apple HIG + SwiftUI (use HIG as design token source, don't look for a 3rd-party Material-style library) |
| Need both DataGrid + Charts + DatePicker | MUI X (see google-material.md) |

## Detailed notes

### Bootstrap v5 vs Tailwind
Not either/or. 2026 pattern:
- Tailwind + shadcn/ui for custom-designed marketing and SaaS frontends.
- Bootstrap v5 for internal tools, back-offices, content sites that need "install a theme and ship."
- **Bootstrap v4**: security-only; do not start new projects on v4.

### UniApp vs UniApp X
- **UniApp (Vue 3 + JS)**: broadest platform support — all 9 MiniProgram vendors + H5 + iOS/Android + HarmonyOS. Choose when coverage matters more than per-platform performance.
- **UniApp X**: UTS (TypeScript-ish) + native rendering. Near-native performance, but MiniProgram support is WeChat + HarmonyOS only as of 2026. Choose when iOS/Android performance is critical and the MiniProgram side is primarily WeChat.

### Radix — Themes vs Primitives
- **Primitives** (`@radix-ui/react-*`): headless, a11y-correct primitives (Dialog, Popover, Select, etc.). Used by shadcn/ui and countless custom design systems.
- **Themes** (`@radix-ui/themes`): opinionated styled layer with 12-step scales. Drop-in if you don't want to write CSS.
- Use Primitives when building your own design system; Themes when you want to ship faster.

### Chakra UI v3
- Migrated to Panda CSS (zero runtime), removed emotion dependency.
- API now closer to Radix Themes.
- v2 still widely deployed; migration non-trivial.
- Adoption growth plateauing as shadcn/ui captures the "headless + Tailwind" segment.

### Fluent UI
- `@fluentui/react-components` (v9): active flagship. Used by Microsoft Teams, Copilot.
- `@fluentui/web-components` v3: currently RC, expected GA in H1 2026. Framework-agnostic option.
- `@fluentui/react` (v8, "Fabric"): **maintenance** mode. Do not start new projects on it.

### Apple HIG as design token source
HIG is not a component library — it's a specification. In DesignDNA, extract it as a brand DNA with these tokens:
- **Typography**: SF Pro (Display + Text + Mono), dynamic type
- **Spacing**: 4pt / 8pt grid
- **Radius**: 10-16px for most surfaces, continuous corners for buttons
- **Color**: dynamic system colors (automatic light/dark)
- **Touch targets**: ≥ 44pt
- **Material (Liquid Glass — WWDC 2025)**: layered frosted blur with depth, used for modals, popovers, translucent nav

## Dial fit

| Library | Formality | Motion | Density | Warmth | Contrast |
|---|---|---|---|---|---|
| Bootstrap v5 | 7 | 3 | 6 | 4 | 6 |
| Radix Themes | 7 | 4 | 4 | 4 | 7 |
| Chakra v3 | 6 | 4 | 5 | 5 | 6 |
| Fluent 2 (React v9) | 7 | 5 | 5 | 4 | 7 |
| Apple HIG | 9 | 4 | 2 | 6 | 7 |
