# Web Component Libraries (by platform)

> Quick picks for Web / desktop-browser projects. Last audit: 2026-04.

## React

| Library | Style | Npm | Health | Best for |
|---|---|---|---|---|
| Ant Design | Styled, dense | `antd` | 🟢 | Global / overseas admin, huge community |
| TDesign React | Styled, modern | `tdesign-react` | 🟢 | Chinese B2B, multi-platform parity with TDesign Vue |
| MUI material-ui | Material M2/M3 | `@mui/material` | 🟢 | Material Design aesthetic, enterprise features via MUI X |
| MUI Base UI | Headless | `@base-ui-components/react` | 🟢 | Build your own design system, a11y-correct |
| Radix Primitives | Headless | `@radix-ui/react-*` | 🟢 | shadcn/ui's foundation; pair with Tailwind |
| Radix Themes | Styled | `@radix-ui/themes` | 🟢 | Ship fast with beautiful defaults + 12-step scales |
| Chakra UI v3 | Panda CSS | `@chakra-ui/react` | 🟢 | Modern DX, zero runtime, designer-friendly |
| Fluent UI v9 | Microsoft | `@fluentui/react-components` | 🟢 | Teams / M365 / Copilot visual alignment |
| Ant Design X | AI chat | `@ant-design/x` | 🟢 | LLM conversational UI |
| MUI X | Advanced data | `@mui/x-data-grid`, `@mui/x-charts` | 🟢 | Enterprise DataGrid, Charts, DatePicker |

## Vue 3

| Library | Style | Npm | Health | Best for |
|---|---|---|---|---|
| Ant Design Vue | Antd parity | `ant-design-vue` | 🟢 | Vue teams wanting Antd visual consistency |
| Element Plus | Neutral CN | `element-plus` | 🟢 | Chinese B2B admin, localized docs |
| Naive UI | TS-first modern | `naive-ui` | 🟢 | Strong types, flexible theming |
| TDesign Vue Next | Tencent | `tdesign-vue-next` | 🟢 | Tencent ecosystem, multi-platform parity |
| Vuetify | Material | `vuetify` | 🟢 | Material Design for Vue |
| Quasar | Cross-platform | `quasar` | 🟢 | One codebase → SPA/SSR/PWA/App/MiniProgram |
| Arco Design Vue | ByteDance | `@arco-design/web-vue` | 🟢 | ByteDance ecosystem, business-oriented |

## CSS-only / utility-first

| Library | Approach | Health | Best for |
|---|---|---|---|
| Bootstrap v5.3 | Component + utility classes | 🟢 | Internal tools, marketing sites, fast standup |
| Tailwind v4 | Utility-first | 🟢 | Design-driven, custom visuals, pair with shadcn/ui |
| Bootstrap Icons | 2,000+ SVG icons | 🟢 | Bootstrap projects |

## Web Components (framework-agnostic)

| Library | Health | Notes |
|---|---|---|
| `material-web` (Google) | 🟡 maintenance | Lit-based; Google seeking new maintainer |
| `@fluentui/web-components` v3 | 🟢 (RC) | Expected GA H1 2026 |
| Shoelace | 🟢 | Community darling, prefer for new WC projects |

## Anti-pattern warnings

- ❌ Do not start new React projects on Ant Design v4 (upgrade to v5)
- ❌ Do not start new projects on Fluent UI v8 / Fabric (use v9)
- ❌ Do not start new projects on Bootstrap v4 (security-only)
- ⚠️ Chakra v2 → v3 migration is non-trivial; evaluate before starting
