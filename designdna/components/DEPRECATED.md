# Deprecated & Legacy Component Libraries

> Last audit: **2026-04**. Libraries listed here either: (a) received no commits for 2+ years, (b) are explicitly archived on GitHub, or (c) have been publicly superseded by a successor from the same team. **Do not start new projects on these.** If you are on an existing project using one of these, the "Migrate to" column shows the recommended successor.

## Critical archived (avoid entirely)

| Library | Last active | Archived | Why | Migrate to |
|---|---|---|---|---|
| [material-components-ios](https://github.com/material-components/material-components-ios) | 2025 | ✅ 2025-12 | Google ended support | SwiftUI + Apple HIG |
| [material-components-flutter](https://github.com/material-components/material-components-flutter) | 2023 | ✅ 2023-11 | Folded into Flutter SDK | `package:flutter/material` (built-in) |
| [material-components](https://github.com/material-components/material-components) | — | ✅ archived | Umbrella doc repo | See per-platform repos |
| [remaxjs/remax](https://github.com/remaxjs/remax) | 2022 | — | MiniProgram-with-React superseded | Taro |
| [iView Weapp](https://github.com/TalkingData/iview-weapp) | 2020-09 | — | 5+ years dormant, company pivoted | Vant Weapp or tdesign-miniprogram |
| [Wuss Weapp](https://github.com/phonycode/wuss-weapp) | 2020-05 | — | 6+ years dormant | Vant Weapp |
| [TouchWX](https://github.com/uileader/touchwx) | 2018-07 | — | 8+ years dormant, experimental | Vant Weapp or Taro |
| [NutUI Bingo](https://github.com/jd-opensource/nutui-bingo) | 2023-02 | — | 3+ years dormant, built on NutUI Vue 1.x | Build custom with GSAP / Lottie |

## Superseded (use successor)

| Library | Status | Successor |
|---|---|---|
| Bootstrap v4 | Security-only | Bootstrap v5.3 |
| Chakra UI v2 | Still deployed, but plateau | Chakra UI v3 (Panda CSS) or shadcn/ui |
| `@fluentui/react` v8 (Fabric) | Maintenance | `@fluentui/react-components` v9 |
| MWC (old `@material/*` Web Components) | Archived | material-web (Lit-based, in maintenance) |
| Vant Vue 2 | Legacy | Vant 4 (Vue 3) |
| Element UI (Vue 2) | Legacy | Element Plus (Vue 3) |
| Ant Design v4 | End-of-maintenance | Ant Design v5+ |

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
