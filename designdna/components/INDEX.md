# Component Library Index

> Last audit: **2026-05**. This is the curated master index of component libraries surveyed for DesignDNA-Skills. Libraries marked `deprecated` (2+ years no update or archived) are intentionally excluded from the skill's tech-stack matrix.

## Navigation

- By ecosystem: [tencent](./by-ecosystem/tencent.md) · [alibaba](./by-ecosystem/alibaba.md) · [jd](./by-ecosystem/jd.md) · [google-material](./by-ecosystem/google-material.md) · [modern-web](./by-ecosystem/modern-web.md) · [miniprogram-native](./by-ecosystem/miniprogram-native.md)
- By platform: [web](./by-platform/web.md) · [mobile](./by-platform/mobile.md) · [miniprogram](./by-platform/miniprogram.md) · [desktop](./by-platform/desktop.md) · [cross-platform](./by-platform/cross-platform.md)
- [Deprecated & legacy](./DEPRECATED.md)

## Health legend

- 🟢 **active** — commits within the last 6 months, recommended for new projects
- 🟡 **maintenance** — commits 6 months to ~3 years ago, safe for existing projects, evaluate before adopting for new greenfield work
- 🔴 **deprecated** — ~3+ years dormant, archived with no migration path, or explicitly superseded — avoid for new projects unless you own the fork

## Top-level picks by use case

| Use case | Primary pick | Alternative |
|---|---|---|
| React admin / dashboard (EN/global) | 🟢 Ant Design | 🟢 MUI material-ui |
| React admin / dashboard (CN) | 🟢 Ant Design | 🟢 TDesign React |
| Vue 3 admin / dashboard | 🟢 Ant Design Vue | 🟢 Element Plus / Naive UI / TDesign Vue Next |
| Tailwind + headless composition | 🟢 shadcn/ui (Radix Primitives) | 🟢 Radix Themes |
| React mobile / H5 | 🟢 antd-mobile | 🟢 TDesign Mobile React |
| Vue mobile / H5 | 🟢 Vant | 🟢 NutUI / TDesign Mobile Vue |
| Cross-platform MiniProgram (3+ vendors) | 🟢 Taro + NutUI | 🟢 UniApp + uni-ui |
| WeChat MiniProgram only | 🟢 Vant Weapp | 🟢 TDesign MiniProgram |
| React Native app | 🟢 React Native Paper / Tamagui | — (NutUI RN too early) |
| Flutter | 🟢 Flutter SDK `material` + 🟢 TDesign Flutter | Use Flutter SDK defaults |
| Android (Compose) | 🟢 `androidx.compose.material3` | — |
| Android (View legacy) | 🟢 `material-components-android` | — |
| iOS native | 🟢 SwiftUI + Apple HIG | — (Google `material-components-ios` archived) |
| Web Components | 🟡 Shoelace / 🟡 material-web | Use Radix or Chakra for React-first |
| Microsoft Teams / M365 plugins | 🟢 `@fluentui/react-components` v9 | — |
| Enterprise content / marketing site | 🟢 Bootstrap v5.3 | 🟢 Tailwind + shadcn/ui |
| AI / LLM conversation UI | 🟢 Ant Design X | 🟢 tdesign-vue-next-chat |
| AI visual asset generation | 🟢 GPT Image 2 workflow | Curated real assets when provenance matters |
| Complex DataGrid / Charts / DatePicker | 🟢 MUI X | AG Grid / Handsontable |
| Form engine (dynamic / low-code) | 🟢 Formily | React Hook Form |
| E-commerce (CN-style, business components) | 🟢 NutUI + NutUI Biz | Vant + custom |
| Marketing gamification (spinner, lottery) | Build custom with GSAP/Lottie | — (NutUI Bingo is **deprecated**) |
| Web3 / wallet UI | 🟢 Ant Design Web3 | — |

## Ecosystem summary

### 🟢 Active & recommended

| Ecosystem | Flagships |
|---|---|
| Tencent (TDesign + WeUI) | tdesign-vue-next, tdesign-react, tdesign-miniprogram, tdesign-mobile-vue, tdesign-flutter |
| Alibaba (Ant Design family) | antd v6, ant-design-vue, antd-mobile, Pro Components, Ant Design X v2, AntV, Formily, Umi |
| JD (Taro + NutUI) | Taro 3.6, NutUI Vue 3, NutUI React, nutui-uniapp |
| MUI (React carrier of Material) | material-ui v7, base-ui, mui-x |
| Google Material (platform) | material-components-android (active); Flutter SDK Material (bundled) |
| Modern Web | Bootstrap v5.3, Radix Themes, Chakra v3, Fluent UI v9, Tailwind v4 |
| MiniProgram Native | Vant Weapp, TDesign MiniProgram |
| UniApp | UniApp (Vue 3), UniApp X (UTS) |

### 🟡 Maintenance

- Taro UI (lags Taro 4.x support)
- Wux Weapp (one commit in past year)
- WeUI (still shipping, but positioning demoted)
- material-web (Lit-based MWC replacement; no active dev, seeking maintainer)
- MUI Toolpad (no active development)
- MUI Pigment CSS (alpha — experimental)

### 🔴 Deprecated / archived

Libraries with ~3+ years of dormancy or no migration path. See [DEPRECATED.md](./DEPRECATED.md) for the full list with evacuation guidance.

- iView Weapp (5+ years dormant)
- Wuss Weapp (6+ years dormant)
- TouchWX (8+ years dormant)
- material-components umbrella (archived, historical docs only)
- Remax (stopped 2022 — use Taro)
- Bootstrap v4 (security-only; superseded by v5)

### Other "consolidated / superseded" (still functional)

- `material-components-ios` — archived 2025-12; functional for existing projects, plan migration to SwiftUI + HIG on your own cadence
- `material-components-flutter` — consolidated into Flutter SDK 2023-11; use `package:flutter/material`
- `@fluentui/react` v8 (Fabric) — maintenance only; v9 `@fluentui/react-components` is the active path
- NutUI Bingo — low activity; either use as source reference or build custom
- Ant Design Landing — maintenance; still functional for marketing pages
- Chakra v2 — still widely deployed; v3 is the modern path
