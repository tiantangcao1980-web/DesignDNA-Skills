# Deprecated & Legacy Component Libraries

> Last audit: **2026-05**. Health threshold: ~3+ years dormant OR explicitly archived with no migration path. Libraries that are officially archived but consolidated into a successor (e.g., `material-components-flutter` folding into Flutter SDK) are **not** flagged deprecated — they're documented in the successor's skill file.
>
> **For new projects**: don't start on anything in this file. **For existing projects**: the "Migrate to" column shows the recommended successor.

## Deprecated — avoid for new projects

| Library | Last active | Why | Migrate to |
|---|---|---|---|
| [material-components](https://github.com/material-components/material-components) | — | Archived umbrella doc repo | See per-platform repos |
| [remaxjs/remax](https://github.com/remaxjs/remax) | 2022 | MiniProgram-with-React superseded ~3+ years | Taro |
| [iView Weapp](https://github.com/TalkingData/iview-weapp) | 2020-09 | 5+ years dormant, company pivoted | Vant Weapp or tdesign-miniprogram |
| [Wuss Weapp](https://github.com/phonycode/wuss-weapp) | 2020-05 | 6+ years dormant | Vant Weapp |
| [TouchWX](https://github.com/uileader/touchwx) | 2018-07 | 8+ years dormant, experimental | Vant Weapp or Taro |

## Consolidated / superseded (still functional for existing projects)

These are NOT deprecated — either archived with a clear successor from the same team, or maintenance-mode with predictable behavior. Safe to continue using; plan migration on your own schedule.

| Library | Status | Successor / guidance |
|---|---|---|
| [material-components-ios](https://github.com/material-components/material-components-ios) | Archived 2025-12 (4 months old) | SwiftUI + Apple HIG — migrate on your cadence; library still works on supported iOS |
| [material-components-flutter](https://github.com/material-components/material-components-flutter) | Consolidated into Flutter SDK 2023-11 | `package:flutter/material` is the continuation — just remove the standalone dep |
| [material-web](https://github.com/material-components/material-web) | Maintenance mode (seeking maintainer) | Safe for existing projects; evaluate Shoelace or MUI for new React work |

## Major-version superseded (use successor)

| Library | Status | Successor |
|---|---|---|
| Bootstrap v4 | Security-only (2+ years of v5) | Bootstrap v5.3 |
| Chakra UI v2 | Still deployed, v3 is the modern path | Chakra UI v3 (Panda CSS) or shadcn/ui |
| `@fluentui/react` v8 (Fabric) | Maintenance | `@fluentui/react-components` v9 |
| MWC (old `@material/*` Web Components) | Archived | material-web (Lit-based, maintenance) |
| Vant Vue 2 | Legacy | Vant 4 (Vue 3) |
| Element UI (Vue 2) | Legacy | Element Plus (Vue 3) |
| Ant Design v4 | End-of-maintenance | Ant Design v6 for new work; latest v5 only as an intermediate migration step |
| NutUI Bingo | Low activity since 2023 | Source-reference or build custom with GSAP/Lottie |
| Ant Design Landing | No update since 2023, still functional | Build marketing pages with Tailwind + shadcn |

## Maintenance mode (evaluate before adopting)

These libraries still receive occasional commits but have lost momentum. Safe for existing projects, risky for greenfield.

| Library | Last meaningful update | Notes |
|---|---|---|
| [material-web](https://github.com/material-components/material-web) | 2024-25 | Lit-based MWC replacement. Google is seeking a new maintainer. No active dev. |
| [MUI Toolpad](https://github.com/mui/toolpad) | 2025-06 | Low-code builder, deprioritized by MUI team |
| [MUI Pigment CSS](https://github.com/mui/pigment-css) | ongoing | Still alpha; RSC-compatible CSS-in-JS experiment |
| [Taro UI](https://github.com/jd-opensource/taro-ui) | 2024-08 | Taro 4.x support lags; use NutUI-React with modern Taro |
| [Wux Weapp](https://github.com/wux-weapp/wux-weapp) | 2024-04 | Last meaningful release; single CI commit since. Use only as fallback for missing Vant components |
| [WeUI (CSS)](https://github.com/Tencent/weui) | 2026-03 | Still shipping but demoted from WeChat MiniProgram default. Use for legacy H5 webviews only |
| [weui-wxss](https://github.com/Tencent/weui-wxss) | 2026-03 | Same as WeUI — maintenance, demoted |
| [NutUI Biz](https://github.com/jdf2e/nutui-biz) | 2025-01 | E-commerce business components, last ver 2023-03 |
| [NutUI React Native](https://github.com/jd-opensource/nutui-react-native) | 2025-03 | Early stage (v0.0.8), prefer React Native Paper / Tamagui |
| [Ant Design Landing](https://github.com/ant-design/ant-design-landing) | 2023 | Marketing page builder, no update since 2023 |
| [Radix Primitives](https://github.com/radix-ui/primitives) | 2026-02 | Still maintained but team focus is on Radix Themes. Safe to depend on. |

## Red flags to watch

When evaluating an unfamiliar component library:

1. **GitHub repo archive banner** — immediate disqualification for greenfield
2. **Latest release > 18 months old** — flag for review
3. **"Looking for new maintainer" in README** — treat as maintenance mode
4. **Stale dependencies** (e.g., React 17 peer-dep in 2026) — usually means unmaintained
5. **Unresolved high-severity issues > 6 months** — community health indicator
6. **Documentation site down or moved without redirect** — ownership changed or abandoned

## What we keep advertising vs what we drop

### Dropped from DesignDNA-Skills recommendations (previous versions listed these)

- iView Weapp, Wuss Weapp, TouchWX (were mentioned as MiniProgram options)
- material-components-ios (was in mobile recommendations)
- `@fluentui/react` v8 (prefer v9 now)

### Added as new recommendations (2026 audit)

- Ant Design X (new AI/LLM conversation library)
- tdesign-vue-next-chat (new, new AI chat for TDesign Vue 3)
- UniApp X (new high-performance UniApp tier)
- Radix Themes (graduated from early to recommended)
- Chakra v3 (new architecture)
- Fluent UI v9 + Web Components v3 RC
- MUI Base UI (graduated to v1.1 stable)
