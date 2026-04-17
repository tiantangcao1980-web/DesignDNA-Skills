# Tencent Ecosystem — Component Libraries

> Last audit: 2026-04. Health: `active` = last commit < 6 months, `maintenance` = 6-24 months, `deprecated` = 2+ years or archived.

## Summary

Tencent's component library strategy converges on **TDesign** as the cross-platform design system, covering 7 runtimes (Vue 2/3, React, Mobile Vue/React, WeChat MiniProgram, Flutter) with unified design tokens. WeUI, the older CSS-only system, has been demoted from "MiniProgram default" to "lightweight WeChat H5 styling" — still maintained but no longer the recommended primary choice.

## Roster

| Library | Platform | Stars | Last commit | Latest ver | Health | NPM |
|---|---|---|---|---|---|---|
| [tdesign](https://github.com/Tencent/tdesign) | Design system meta-repo | 3.8k | 2026-04 | — | active | — |
| [tdesign-vue-next](https://github.com/Tencent/tdesign-vue-next) | Vue 3 (desktop) | 2.1k | 2026-04 | 1.19.x | active | `tdesign-vue-next` |
| [tdesign-vue](https://github.com/Tencent/tdesign-vue) | Vue 2 (desktop) | 1.0k | 2026-04 | latest | active | `tdesign-vue` |
| [tdesign-react](https://github.com/Tencent/tdesign-react) | React 16-18 (desktop) | 943 | 2026-04 | latest | active | `tdesign-react` |
| [tdesign-mobile-vue](https://github.com/Tencent/tdesign-mobile-vue) | Vue 3 (mobile H5) | 410 | 2026-04 | latest | active | `tdesign-mobile-vue` |
| [tdesign-mobile-react](https://github.com/Tencent/tdesign-mobile-react) | React (mobile H5) | 96 | 2026-04 | latest | active (emerging) | `tdesign-mobile-react` |
| [tdesign-miniprogram](https://github.com/Tencent/tdesign-miniprogram) | WeChat MiniProgram | 1.6k | 2026-04 | latest | active | `tdesign-miniprogram` |
| [tdesign-flutter](https://github.com/Tencent/tdesign-flutter) | Flutter | 1.1k | 2026-04 | latest | active | pub.dev: `tdesign_flutter` |
| [tdesign-vue-next-chat](https://github.com/Tencent/tdesign-vue-next/tree/develop/packages/tdesign-vue-next-chat) | Vue 3 AI Chat (new since 2025-04) | (monorepo) | 2026-04 | independent | active | `@tdesign-vue-next/chat` |
| [WeUI](https://github.com/Tencent/weui) | CSS (WeChat H5) | 27.4k | 2026-03 | 2.x | maintenance | `weui` |
| [weui-wxss](https://github.com/Tencent/weui-wxss) | WXSS (MiniProgram) | 15.3k | 2026-03 | 2.x | maintenance | — |

## Official starter templates

| Template | URL |
|---|---|
| Vue 2 dashboard | https://tdesign.tencent.com/starter/vue/dashboard/base |
| Vue 3 dashboard | https://tdesign.tencent.com/starter/vue-next/dashboard/base |
| React dashboard | https://tdesign.tencent.com/starter/react/dashboard/base |
| MiniProgram overview | https://tdesign.tencent.com/miniprogram/overview |

## Official documentation

| Topic | URL |
|---|---|
| Home | https://tdesign.tencent.com/ |
| Vue 2 | https://tdesign.tencent.com/vue/overview |
| Vue 3 | https://tdesign.tencent.com/vue-next/overview |
| React | https://tdesign.tencent.com/react/overview |
| Mobile Vue | https://tdesign.tencent.com/mobile-vue/overview |
| Mobile React | https://tdesign.tencent.com/mobile-react/components/button |
| UniApp | https://tdesign.tencent.com/uniapp/overview |
| Flutter | https://tdesign.tencent.com/flutter/overview |
| WeUI | https://weui.io |

## When to choose

### Choose TDesign when
- You need **unified design language across 3+ platforms** (e.g. web dashboard + MiniProgram + mobile H5)
- You're building a Tencent-ecosystem product or integrating Tencent Cloud services
- You want **modern clean aesthetics** (vs Ant's denser corporate look)
- You need **both Vue and React** variants with identical visual parity

### Do NOT choose when
- Your team is already deep in Ant Design (switching cost > design system benefit)
- You need overseas community resources (English-first docs are thinner than Ant's)

### WeUI guidance
- Use only for **legacy WeChat H5 webviews** where you want native-WeChat look with minimal JS
- Don't use as a primary MiniProgram component library → use `tdesign-miniprogram` or `vant-weapp` instead

## AI Chat specialization

[`tdesign-vue-next-chat`](https://github.com/Tencent/tdesign-vue-next/tree/develop/packages/tdesign-vue-next-chat) (released 2025-04) is Tencent's official answer to AI/LLM conversation UI. Features:
- Streaming message rendering
- Markdown + code block support
- Tool-call bubble rendering
- Typing indicators, scroll-anchor management

Use for: AI copilots, customer service bots, LLM playground interfaces.

## Dial fit

| Dial | TDesign positioning |
|---|---|
| Formality | 6-8 (professional, polished) |
| Motion | 4-5 (subtle, not showy) |
| Density | 5-6 (balanced, data-friendly) |
| Warmth | 4-5 (neutral-cool) |
| Contrast | 6-7 (legible B2B) |
