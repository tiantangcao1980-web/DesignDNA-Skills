# Alibaba Ecosystem — Component Libraries

> Last audit: 2026-04. Health: `active` / `maintenance` / `deprecated`.

## Summary

Alibaba's frontend ecosystem centers on **Ant Design** as the de-facto Chinese B2B admin/dashboard standard (93k stars). The full matrix covers core components, scenario components (Pro, X for AI, Charts/AntV), application framework (Umi), form engine (Formily), docs generator (Dumi), and hooks utilities (ahooks). DingTalk Standard is a **Figma spec + design tokens only** — no standalone component library — and in practice enterprise integrators wrap `antd` to meet DingTalk visual guidelines.

## Roster

### Core

| Library | Platform | Stars | Last commit | Latest ver | Health | NPM |
|---|---|---|---|---|---|---|
| [ant-design](https://github.com/ant-design/ant-design) | React 18/19 (desktop) | 93k | 2026 active | 5.22+ | active | `antd` |
| [ant-design-vue](https://github.com/vueComponent/ant-design-vue) | Vue 3 (desktop, community) | 20k | 2026 active | 4.x | active | `ant-design-vue` |
| [ant-design-mobile](https://github.com/ant-design/ant-design-mobile) | React (mobile H5) | 11k | 2026 active | 5.x | active | `antd-mobile` |

### Scenario & pro

| Library | Purpose | Stars | Health | NPM |
|---|---|---|---|---|
| [ant-design-pro](https://github.com/ant-design/ant-design-pro) | Admin scaffold (React + Umi) | 37k | active | `@ant-design/pro-components` |
| [pro-components](https://github.com/ant-design/pro-components) | High-level business components | 4k | active | `@ant-design/pro-components` |
| [ant-design/x](https://github.com/ant-design/x) | **AI / LLM conversation UI** (1.x) | 3k+ | active (new) | `@ant-design/x` |
| [pro-chat](https://github.com/ant-design/pro-chat) | AI chat component | 1k | active | `@ant-design/pro-chat` |
| [ant-design-charts](https://github.com/ant-design/ant-design-charts) | Data-viz components (React) | 2k | active | `@ant-design/charts` |
| [ant-design-web3](https://github.com/ant-design/ant-design-web3) | Web3 / wallet UI | 1k | active | `@ant-design/web3` |

### Engineering

| Library | Purpose | Stars | Health | NPM |
|---|---|---|---|---|
| [umi](https://github.com/umijs/umi) | Enterprise React app framework | 16k | active | `umi` / `@umijs/max` |
| [dumi](https://github.com/umijs/dumi) | Component documentation site generator | 4k | active | `dumi` |
| [formily](https://github.com/alibaba/formily) | Complex dynamic form / low-code | 12k | active | `@formily/core`, `@formily/react` |
| [ahooks](https://github.com/alibaba/hooks) | React Hooks utility library | — | active | `ahooks` |

### Visualization (AntV group)

| Library | Purpose | NPM |
|---|---|---|
| [@antv/g2](https://github.com/antvis/G2) | Statistical charts | `@antv/g2` |
| [@antv/g6](https://github.com/antvis/G6) | Graph / network viz | `@antv/g6` |
| [@antv/x6](https://github.com/antvis/X6) | Flowchart / diagram editor | `@antv/x6` |

All AntV libraries: ~25k combined stars, active through 2026.

### DingTalk Standard

| Attribute | Value |
|---|---|
| URL | https://standard.dingtalk.com/ |
| Nature | **Figma spec + design tokens only**; no official npm component package |
| Coverage | Mobile / Desktop / MiniApp guidelines |
| Practical use | Wrap `antd` or `antd-mobile` and override tokens to match DingTalk colors/spacing |

### Maintenance / deprecated

| Library | Why not |
|---|---|
| [ant-design-landing](https://github.com/ant-design/ant-design-landing) | Marketing page builder, ~no update since 2023 (`maintenance`) |
| [remaxjs/remax](https://github.com/remaxjs/remax) | Write MiniPrograms with React — stopped 2022, `deprecated`. Use Taro instead. |

## Vue-side alternatives (for perspective)

When you're on Vue, pick based on visual and team context:

| Library | Stars | Best for |
|---|---|---|
| Ant Design Vue | 20k | B2B admin, visual parity with React antd |
| Element Plus | 26k | Chinese B2B admin, localized docs |
| Naive UI | 17k | TS-first, modern, flexible theming (endorsed by Evan You) |
| Vuetify | 40k | Material Design flavor |
| Quasar | 26k | Cross-platform (SPA/SSR/PWA/App/MiniProgram) |
| Arco Design Vue | 4k | ByteDance's Arco visual language |

## Ant vs TDesign — decision cheat sheet

| Criterion | Ant Design | TDesign |
|---|---|---|
| Community reach | Huge (93k) | Medium (7 repos × 1-3k) |
| Ecosystem depth | Pro / X / Charts / Umi / Formily | Flutter + MiniProgram + Mobile React/Vue — multi-runtime parity |
| Visual feel | Dense, established B2B | Cleaner, more modern, more whitespace |
| Best for | Existing antd teams, overseas community | Tencent-integrated products, multi-platform consistency |

## Dial fit

| Dial | Ant Design positioning |
|---|---|
| Formality | 8-9 (established B2B) |
| Motion | 3-4 (understated) |
| Density | 6-7 (data-heavy) |
| Warmth | 4-5 (neutral-cool) |
| Contrast | 6-7 (professional legibility) |
