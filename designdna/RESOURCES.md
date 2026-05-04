# Design Resource Catalog

> Curated free design resources for AI-driven UI/UX development.
> Organized by category with platform compatibility, offline support, and integration guidance.

---

## 1. Icon Systems

### 1.1 Line / Outline Icons

| Resource | URL | Format | Offline | Best For |
|----------|-----|--------|---------|----------|
| **Lucide** | https://lucide.dev/ | SVG, React, Vue, npm | `npm i lucide-react` / `lucide-vue-next` | Modern SaaS, developer tools, clean UI |
| **Heroicons** | https://heroicons.com/ | SVG, React, Vue, npm | `npm i @heroicons/react` / `@heroicons/vue` | Tailwind CSS projects, minimal interfaces |
| **Feather Icons** | https://feathericons.com/ | SVG, npm | `npm i feather-icons` | Lightweight apps, clean line aesthetic |
| **Tabler Icons** | https://tabler.io/icons | SVG, React, Vue, npm | `npm i @tabler/icons-react` | Dashboard, admin panels (5000+ icons) |
| **Phosphor Icons** | https://phosphoricons.com/ | SVG, React, Vue, Flutter, npm | `npm i @phosphor-icons/react` | Flexible weight system (thin→bold→fill) |

### 1.2 Filled / Solid Icons

| Resource | URL | Format | Offline | Best For |
|----------|-----|--------|---------|----------|
| **Google Material Icons** | https://fonts.google.com/icons | SVG, Web Font, npm | `npm i @material-design-icons/svg` | Material Design projects, Android apps |
| **Remix Icon** | https://remixicon.com/ | SVG, Web Font, npm | `npm i remixicon` | Chinese-friendly, business apps (2500+) |
| **Bootstrap Icons** | https://icons.getbootstrap.com/ | SVG, Web Font, npm | `npm i bootstrap-icons` | Bootstrap projects, traditional web |
| **Iconfont** | https://www.iconfont.cn/ | SVG, icon font, Symbol, project sets | Download/project CDN | Alibaba/CN enterprise icon projects, custom team icon libraries |
| **TDesign Icons** | https://github.com/Tencent/tdesign-icons | SVG, Vue, React, MiniProgram-aligned | `tdesign-icons-*` packages | Tencent/TDesign cross-platform apps |

### 1.3 Animated Icons

| Resource | URL | Format | Offline | Best For |
|----------|-----|--------|---------|----------|
| **Lottie Files** | https://app.lottiefiles.com/ | JSON (Lottie), npm | `npm i lottie-react` / `lottie-web` | Loading states, micro-interactions, onboarding |
| **Lordicon** | https://lordicon.com/ | JSON, SVG animated | Download individual files | Interactive trigger-based icon animations |
| **Animated Icons (useAnimations)** | https://useanimations.com/ | Lottie JSON | Download ZIP | Menu toggles, loading, status indicators |

### 1.4 Icon Aggregator

| Resource | URL | Format | Offline | Best For |
|----------|-----|--------|---------|----------|
| **Iconify** | https://iconify.design/ | Universal API, React, Vue | `npm i @iconify/react` | Access 200,000+ icons from 150+ sets in ONE API |

### Icon Selection Guide

```
Project Type          → Recommended Icon Set
─────────────────────────────────────────────
React + Tailwind      → Lucide (best Tailwind integration)
Vue + any             → Iconify (universal) or Lucide
Next.js               → Lucide or Heroicons
Material Design       → Google Material Icons
Dashboard / Admin     → Tabler Icons (largest set)
Flexible weight needs → Phosphor Icons (6 weight variants)
Chinese business app  → Remix Icon
Mini Program          → TDesign Icons or custom SVG
Flutter               → Material Icons or Phosphor Flutter
React Native          → Expo Vector Icons (bundled)
Desktop (Electron)    → Lucide or Tabler
Ant Design            → @ant-design/icons + Iconfont for custom enterprise sets
TDesign               → TDesign Icons first, Iconfont only for product-specific additions
```

---

## 2. Image & Photography Resources

> **Source priority for design projects**
> Tier 1: **Pexels** + **Huaban** first.
> Tier 2: **Unsplash / Pixabay / Coverr / Mixkit** when Tier 1 cannot satisfy the brief.
> Tier 3: specialized sources such as **FoodiesFeed / Hippopx / UI Faces / YSJF** only when the domain clearly calls for them.
> Always verify the license on the specific asset page before shipping.

### 2.1 General Purpose

| Resource | URL | License | API | Best For |
|----------|-----|---------|-----|----------|
| **Unsplash** | https://unsplash.com/ | Free commercial use | REST API available | Hero images, backgrounds, lifestyle |
| **Pexels** | https://www.pexels.com/ | Free commercial use | REST API available | Default source for project photos, lifestyle shots, and stock video stills |
| **Huaban** | https://huaban.com/ | Varies by asset; check item page | No public API | Chinese-market references, downloadable materials, moodboards |
| **Pixabay** | https://pixabay.com/ | Free commercial use | REST API available | Illustrations + photos + vectors |
| **StockSnap** | https://stocksnap.io/ | CC0 Public Domain | No API | High-quality editorial photography |

### 2.2 Specialized

| Resource | URL | License | Speciality |
|----------|-----|---------|-----------|
| **FoodiesFeed** | https://www.foodiesfeed.com/ | Free commercial use | Food & beverage photography |
| **Hippopx** | https://www.hippopx.com/ | CC0 Public Domain | Nature, landscapes, textures |
| **UI Faces** | https://uifaces.co/ | Free for mockups | Avatar/profile picture placeholders |
| **Undraw** | https://undraw.co/ | Free, customizable color | Flat illustration scenes (SVG) |
| **YSJF** | https://www.ysjf.com/material | Chinese resource | Mixed media materials |

### 2.3 Video Resources

| Resource | URL | License | Best For |
|----------|-----|---------|----------|
| **Pexels Videos** | https://www.pexels.com/videos/ | Free commercial use | Background videos, hero sections |
| **Huaban Videos / Materials** | https://huaban.com/ | Varies by asset; check item page | Localized campaign videos, motion references, downloadable CN-market materials |
| **Coverr** | https://coverr.co/ | Free commercial use | Website background loops |
| **Mixkit** | https://mixkit.co/ | Free commercial use | Promotional videos, motion backgrounds |

### Image Usage Guide

```
Use Case                → Recommended Source     → Format
────────────────────────────────────────────────────────
Hero/Banner             → Tier 1: Pexels, Huaban → WebP/AVIF, 1920px wide
Card thumbnails         → Tier 1: Pexels, Huaban → WebP, 400-800px wide
Avatar placeholders     → UI Faces               → WebP, 64-128px
Food/Restaurant app     → Tier 3: FoodiesFeed    → WebP, various
Nature/Travel app       → Tier 2: Unsplash, Tier 3: Hippopx → WebP/AVIF
Product illustration    → Undraw (SVG)           → SVG (inline, color-customizable)
Background video        → Tier 1: Pexels Videos, Huaban → MP4/WebM, 1080p
CN marketing material   → Tier 1: Huaban         → JPG/PNG/PSD/MOV as available
Loading animation       → LottieFiles            → JSON (Lottie)
```

### 2.4 AI Image Generation

| Resource | Model / API | Best For | Notes |
|----------|-------------|----------|-------|
| **OpenAI GPT Image 2** | `gpt-image-2` via Image API / Responses API | Custom hero images, visual exploration, high-fidelity edits, DesignDNA-guided campaign assets | See [`skills/gpt-image-2`](./skills/gpt-image-2/SKILL.md); no transparent backgrounds; draft with low quality, finalize with medium/high |

Use AI-generated images when curated assets cannot express the brief. Still run the normal image checks: crop safety, text legibility, accessibility role, file format, compression, and provenance notes.

---

## 3. Illustration & Vector Resources

| Resource | URL | License | Style | Best For |
|----------|-----|---------|-------|----------|
| **unDraw** | https://undraw.co/ | MIT | Flat, customizable color | Empty states, onboarding, feature sections |
| **Humaaans** | https://humaaans.com/ | Free | Modular human figures | About pages, team sections |
| **Open Doodles** | https://opendoodles.com/ | CC0 | Hand-drawn sketchy | Friendly, casual interfaces |
| **Storyset** | https://storyset.com/ | Free with attribution | Animated flat scenes | Onboarding, error pages, feature highlights |
| **Blush** | https://blush.design/ | Free tier | Multiple artist styles | Diverse illustration needs |
| **Drawkit** | https://drawkit.io/ | Free tier | Clean vector | SaaS marketing, landing pages |
| **Icons8 Illustrations** | https://icons8.com/illustrations | Free tier | Multiple styles | Consistent cross-page illustration sets |

---

## 4. Design Inspiration & Pattern Research

Use these as visual research inputs, not as assets to copy. Extract principles: layout rhythm, density, interaction timing, image treatment, content hierarchy, and motion language.

| Resource | URL | Best For | Guardrail |
|----------|-----|----------|-----------|
| **Dribbble** | https://dribbble.com/ | Visual style exploration, component moodboards | Treat as inspiration; validate usability before adopting |
| **Awwwards** | https://www.awwwards.com/ | High-polish marketing, motion, editorial art direction | Avoid copying site-specific layouts or brand assets |
| **Page Flows** | https://pageflows.com/ | Real product flows, onboarding, checkout, settings | Use to learn interaction sequencing |
| **Muzli** | https://muz.li/ | Daily design trend scanning | Filter trends through the project's DESIGN.md |
| **ZCOOL** | https://www.zcool.com.cn/ | Chinese-market visual language and campaign aesthetics | Verify rights before using any asset |
| **Alibaba UED** | https://www.aliued.com/ | Enterprise/product design thinking in Alibaba ecosystem | Use as pattern rationale, not visual cloning |

Research workflow:

```
1. Collect 3-5 references that match the product type.
2. Extract reusable decisions: grid, density, imagery, type scale, icon style, motion.
3. Map those decisions into DESIGN.md tokens and component rules.
4. Reject anything that conflicts with accessibility, project brand DNA, or component-library constraints.
```

### 4.1 Open-Source Skill References

Use these projects as methodology references for AI design-skill behavior. Do not copy proprietary assets, demos, scripts, or prompt text without checking the source license.

| Project | URL | What To Borrow | Guardrail |
|----------|-----|----------------|-----------|
| **Huashu Design** | https://github.com/alchaincyf/huashu-design | Fact-first workflow, core asset protocol, 5-10-2-8 asset gate, direction-advisor fallback, five-dimensional critique, Playwright/video verification mindset | Personal-use license; DesignDNA studies public methods only and does not vendor its assets/scripts/reference docs |
| **Taste Skill** | https://github.com/Leonxlnx/taste-skill | Single-responsibility skill topology, dials, anti-slop bans, image-generation reference skills, image-to-code workflow | MIT; attribute when adapting patterns |

Distilled DesignDNA notes: [`OPEN-SOURCE-LEARNINGS.md`](./OPEN-SOURCE-LEARNINGS.md)

---

## 5. Color & Palette Resources

| Resource | URL | Features | Best For |
|----------|-----|----------|----------|
| **ColorHub** | https://www.colorhub.app/browse | Curated palettes by mood | Finding brand-appropriate palettes |
| **Coolors** | https://coolors.co/ | Generator + contrast checker | Rapid palette generation |
| **Realtime Colors** | https://www.realtimecolors.com/ | Live preview on page template | Testing palette in realistic UI context |
| **Happy Hues** | https://www.happyhues.co/ | Full website examples per palette | Seeing how palettes work in context |
| **Color Hunt** | https://colorhunt.co/ | Community-voted palettes | Trending color combinations |
| **Tailwind Color Palette** | https://tailwindcss.com/docs/colors | Systematic 50-950 scales | Tailwind CSS projects |
| **Radix Colors** | https://www.radix-ui.com/colors | Accessible, auto dark mode | Radix UI projects, accessibility-first |
| **Open Color** | https://yeun.github.io/open-color/ | Optimized for UI, 13 hues | Consistent UI color system |

### Color Consistency Rules

```
NEVER generate random colors. ALWAYS derive from:
1. The project's DESIGN.md palette (if exists)
2. The component library's built-in color system (Tailwind, Radix, Ant Design, etc.)
3. A curated palette from the resources above
4. Archetype reference brand palette (from awesome-design-md collection)

Color consistency checklist:
□ All colors defined as CSS variables or theme tokens
□ Text colors use warm near-black (never #000000)
□ Brand accent used for ONE semantic purpose
□ Dark mode palette is a separate design, not auto-inverted
□ Contrast ratios verified (WCAG AA: 4.5:1 body, 3:1 large text)
```

---

## 6. Component Library & UI Framework

> **Last audit: 2026-05**. Health legend: 🟢 active · 🟡 maintenance · 🔴 deprecated.
> For the full breakdown with GitHub stars, commit dates, migration paths, and per-ecosystem analysis, see **[components/](./components/)**:
> [INDEX](./components/INDEX.md) · [tencent](./components/by-ecosystem/tencent.md) · [alibaba](./components/by-ecosystem/alibaba.md) · [jd](./components/by-ecosystem/jd.md) · [google-material](./components/by-ecosystem/google-material.md) · [modern-web](./components/by-ecosystem/modern-web.md) · [miniprogram-native](./components/by-ecosystem/miniprogram-native.md) · [deprecated](./components/DEPRECATED.md)

### 6.1 React Ecosystem (Web)

| Library | NPM | Style | Health | Best For |
|---------|-----|-------|--------|----------|
| **Ant Design** | `antd` | Enterprise-dense | 🟢 | B2B admin / dashboard, largest React ecosystem (97k+ ⭐, v6.x) |
| **Ant Design X** | `@ant-design/x` | AI conversation | 🟢 | AI / LLM chat UI (v2.x, antd 6 peer) |
| **MUI material-ui** | `@mui/material` | Material Design | 🟢 | Material feel, Figma kits, v7 (98k ⭐) |
| **MUI X** | `@mui/x-*` | DataGrid / Charts / DatePicker | 🟢 | Heavy enterprise components, v9 |
| **MUI Base UI** | `@base-ui-components/react` | Headless primitives | 🟢 | Alternative to Radix, v1.1 stable |
| **TDesign React** | `tdesign-react` | Tencent, modern | 🟢 | Tencent-integrated / CN enterprise |
| **Chakra UI v3** | `@chakra-ui/react` | Panda CSS (zero-runtime) | 🟢 | Modern product apps |
| **Radix Themes** | `@radix-ui/themes` | Styled layer on Primitives | 🟢 | Quick styled output on Radix |
| **Radix Primitives** | `@radix-ui/react-*` | Headless, a11y | 🟢 | Custom design system foundation (used by shadcn/ui) |
| **shadcn/ui** | copy-in, not npm | Tailwind + Radix | 🟢 | Full-control, owned code |
| **Fluent UI v9** | `@fluentui/react-components` | Microsoft Fluent 2 | 🟢 | Teams / M365 plugins |
| **Semi Design** | `@douyinfe/semi-ui` | ByteDance, modern | 🟢 | Bilingual apps |
| **Mantine** | `@mantine/core` | Batteries-included | 🟢 | 100+ hooks included |
| **antd-mobile** | `antd-mobile` | Mobile H5 | 🟢 | React mobile web |
| ~~`@fluentui/react` v8 (Fabric)~~ | — | — | 🟡 | Maintenance only — use v9 |

### 6.2 Vue 3 Ecosystem (Web)

| Library | NPM | Style | Health | Best For |
|---------|-----|-------|--------|----------|
| **Ant Design Vue** | `ant-design-vue` | antd parity | 🟢 | Vue B2B admin |
| **Element Plus** | `element-plus` | CN-localized | 🟢 | CN B2B admin, docs-friendly |
| **Naive UI** | `naive-ui` | TS-first | 🟢 | Modern Vue 3 apps, Evan You endorsed |
| **TDesign Vue Next** | `tdesign-vue-next` | Tencent | 🟢 | Multi-platform parity with TDesign React |
| **TDesign Vue Next Chat** | `@tdesign-vue-next/chat` | AI chat | 🟢 | Streaming LLM conversation UI with custom SSE / AG-UI support |
| **Vuetify** | `vuetify` | Material Design | 🟢 | Material flavor |
| **Quasar** | `quasar` | Multi-output | 🟢 | SPA/SSR/PWA/App from one codebase |
| **PrimeVue** | `primevue` | Themeable enterprise | 🟢 | Large Vue enterprise |
| **Arco Design Vue** | `@arco-design/web-vue` | ByteDance | 🟢 | Byte ecosystem, commercial visual |

### 6.3 CSS Framework

| Library | NPM | Health | Best For |
|---------|-----|--------|----------|
| **Tailwind v4** | `tailwindcss` | 🟢 | Utility-first, modern SaaS |
| **Bootstrap v5.3** | `bootstrap` | 🟢 | Enterprise admin, marketing sites |
| **UnoCSS** | `unocss` | 🟢 | On-demand atomic CSS (Vue/Nuxt) |
| ~~Bootstrap v4~~ | — | 🔴 | Security-only — upgrade to v5 |

### 6.4 Mobile (Native + H5)

| Library | Platform | Health | Best For |
|---------|----------|--------|----------|
| **Vant 4** | Vue 3 H5 | 🟢 | Most popular Vue mobile library (CN) |
| **NutUI Vue 3** | Vue 3 H5 / Taro | 🟢 | JD e-commerce styled |
| **NutUI React** | React H5 / Taro | 🟢 | React mobile for Taro projects |
| **TDesign Mobile Vue** | Vue 3 H5 | 🟢 | Tencent-aligned mobile |
| **TDesign Mobile React** | React H5 | 🟢 | Tencent-aligned, emerging |
| **antd-mobile** | React H5 | 🟢 | Alibaba mobile |
| **TDesign Flutter** | Flutter | 🟢 | Alternate flavor on Flutter SDK Material |
| **React Native Paper** | React Native | 🟢 | Material feel for RN |
| **Tamagui** | RN + Web universal | 🟢 | Same components on RN + web |
| **Flutter `package:material`** | Flutter SDK | 🟢 | Built-in, Material 3 |
| **`androidx.compose.material3`** | Android Compose | 🟢 | Native Android Material 3 |
| **material-components-android** | Android View | 🟢 | Legacy View-system Android |
| **SwiftUI + Apple HIG** | iOS native | 🟢 | **Recommended for new iOS** |
| ~~material-components-ios~~ | iOS | 🔴 | Archived 2025-12 — use SwiftUI |
| ~~material-components-flutter~~ | Flutter | 🔴 | Archived 2023-11 — use SDK built-in |
| ~~NutUI React Native~~ | RN | 🟡 | Too early (v0.0.8) |

### 6.5 Mini Program

**Native WeChat** (no compilation layer):

| Library | Platform | Health | Best For |
|---------|----------|--------|----------|
| **Vant Weapp** | WeChat native | 🟢 | Most popular native option (18.4k ⭐) |
| **TDesign MiniProgram** | WeChat native | 🟢 | Tencent-integrated |
| ~~Wux Weapp~~ | WeChat native | 🟡 | Fallback only |
| ~~iView Weapp~~ | WeChat native | 🔴 | 5+ years dormant |
| ~~Wuss Weapp~~ | WeChat native | 🔴 | 6+ years dormant |
| ~~TouchWX~~ | WeChat native | 🔴 | 8+ years dormant |
| ~~WeUI~~ | WeChat H5 styles | 🟡 | Demoted — use for legacy H5 webviews only |

**Cross-vendor MiniProgram** (compile from React/Vue):

| Framework + UI | Vendors supported | Health | Best For |
|----------------|-------------------|--------|----------|
| **Taro + NutUI React** | 7 vendors + H5 + RN + Harmony | 🟢 | React dev, max coverage |
| **Taro + NutUI Vue** | Same as above | 🟢 | Vue dev, max coverage |
| **UniApp + uni-ui** | 9 vendors + H5 + App + Harmony | 🟢 | DCloud ecosystem |
| **UniApp + nutui-uniapp** | Same | 🟢 | NutUI style in UniApp |
| **UniApp X** | WeChat MP + Harmony + native | 🟢 | High-perf UniApp next-gen |
| ~~Taro UI~~ | Taro 2/3 | 🟡 | Lags Taro 4.x support |
| ~~Remax~~ | WeChat via React | 🔴 | Stopped 2022 — use Taro |

### 6.6 Desktop Application

| Shell | UI layer | Health | Best For |
|-------|----------|--------|----------|
| **Tauri** | any web UI | 🟢 | Lightweight (3-10 MB), Rust backend |
| **Electron** | any web UI | 🟢 | Mature, heavier bundle, full Node |
| **Wails** | any web UI | 🟢 | Go backend alternative |
| **WinUI 3** | XAML + Fluent 2 | 🟢 | Windows 11 native |
| **SwiftUI** | native | 🟢 | macOS native, Apple HIG |
| **.NET MAUI** | XAML | 🟢 | Cross-platform Microsoft ecosystem |
| **Flutter desktop** | Flutter material | 🟢 | Windows / macOS / Linux from Flutter |

### 6.7 AI / LLM Conversation UI

| Library | Framework | Health |
|---------|-----------|--------|
| **Ant Design X** | React | 🟢 |
| **TDesign Vue Next Chat** | Vue 3 | 🟢 |
| **ProChat** | React | 🟢 |

### 6.8 Form Engines

| Library | Framework | Health |
|---------|-----------|--------|
| **Formily** | React / Vue | 🟢 |
| **React Hook Form** | React | 🟢 |
| **VeeValidate** | Vue 3 | 🟢 |

### 6.9 Data Viz

| Library | Framework | Health |
|---------|-----------|--------|
| **AntV G2 / G6 / X6** | framework-agnostic | 🟢 |
| **ECharts** | framework-agnostic | 🟢 |
| **Ant Design Charts** | React | 🟢 |
| **MUI X Charts** | React | 🟢 |
| **Recharts** | React | 🟢 |

---

## 7. Typography / Font Resources

| Resource | URL | License | Best For |
|----------|-----|---------|----------|
| **Google Fonts** | https://fonts.google.com/ | Open Source | Web fonts, vast selection |
| **Fontsource** | https://fontsource.org/ | Self-hosted npm packages | `npm i @fontsource/inter` — offline, fast |
| **Font Squirrel** | https://www.fontsquirrel.com/ | Free commercial use | Web font generator, @font-face kits |
| **Chinese fonts (阿里巴巴普惠体)** | https://www.alibabafonts.com/ | Free commercial use | Chinese body text |
| **HarmonyOS Sans** | https://developer.huawei.com/consumer/cn/design/resource/ | Free commercial use | Chinese + Latin harmony |
| **LXGW WenKai (霞鹜文楷)** | https://github.com/lxgw/LxgwWenKai | SIL Open Font License | Chinese literary/editorial style |
| **Source Han Sans (思源黑体)** | https://github.com/adobe-fonts/source-han-sans | SIL Open Font License | CJK sans-serif, professional |

### Font Selection Guide

```
Project Type              → Latin Font         → Chinese Font         → Monospace
──────────────────────────────────────────────────────────────────────────────────
Developer tool            → Inter, Geist       → Source Han Sans      → JetBrains Mono, Fira Code
SaaS / Business           → Inter, DM Sans     → 阿里巴巴普惠体        → IBM Plex Mono
Consumer / Warm           → Plus Jakarta Sans  → HarmonyOS Sans       → Source Code Pro
Editorial / Content       → Fraunces (serif)   → LXGW WenKai          → iA Writer Mono
Creative / Design         → Sora, Space Grotesk → Source Han Sans     → Space Mono
Enterprise / Corporate    → IBM Plex Sans      → Source Han Sans      → IBM Plex Mono
Mini Program (WeChat)     → system default     → system default       → Menlo

Install via Fontsource (offline, no CDN dependency):
  npm i @fontsource-variable/inter
  npm i @fontsource-variable/jetbrains-mono
  npm i @fontsource/plus-jakarta-sans
```

---

## 8. Animation & Motion Resources

| Resource | URL | Type | Best For |
|----------|-----|------|----------|
| **Framer Motion** | https://www.framer.com/motion/ | React animation library | Page transitions, gesture, layout animation |
| **GSAP** | https://gsap.com/ | Universal JS animation | Scroll-triggered, timeline, complex motion |
| **Animate.css** | https://animate.style/ | CSS keyframe library | Simple enter/exit animations |
| **Auto-Animate** | https://auto-animate.formkit.com/ | Zero-config transitions | List reordering, mount/unmount |
| **Motion One** | https://motion.dev/ | Lightweight Web Animations API | Performance-critical micro-animations |
| **React Spring** | https://react-spring.dev/ | Physics-based React | Natural, spring-physics motion |
| **Vue Use Motion** | https://motion.vueuse.org/ | Vue 3 motion | Vue composable-based animation |

---

## 9. Design Token & Theming Tools

| Resource | URL | Purpose |
|----------|-----|---------|
| **Style Dictionary** | https://amzn.github.io/style-dictionary/ | Transform design tokens to any platform format |
| **Tailwind CSS Theme** | https://tailwindcss.com/docs/theme | Tailwind-native theme configuration |
| **Radix Colors** | https://www.radix-ui.com/colors | Accessible color scales with auto dark mode |
| **Open Props** | https://open-props.style/ | Ready-made CSS custom properties |
| **Theme UI** | https://theme-ui.com/ | React theme specification |

---

## 10. Accessibility & Quality Assurance

| Resource | URL | Purpose |
|----------|-----|---------|
| **WebAIM Contrast Checker** | https://webaim.org/resources/contrastchecker/ | WCAG color contrast verification |
| **Axe DevTools** | https://www.deque.com/axe/ | Automated accessibility testing |
| **Lighthouse** | Built into Chrome DevTools | Performance, accessibility, SEO audit |
| **Storybook** | https://storybook.js.org/ | Component isolation, visual testing |
| **Chromatic** | https://www.chromatic.com/ | Visual regression testing |

---

## 11. AI-Driven UI & Layout Verification

| Resource | URL | Purpose | Install |
|----------|-----|---------|---------|
| **Google A2UI** | https://github.com/google/A2UI | Declarative UI protocol for AI agents → structured JSON instead of raw HTML | See a2ui.org |
| **Pretext** | https://github.com/chenglou/pretext | Pure-math text measurement (300-1242x faster than DOM), verify text fits containers | `npm i pretext` |
| **Material Symbols** | https://github.com/google/material-design-icons | Variable-axis icons (weight/fill/grade/optical-size) matching text weight | `npm i material-symbols` |
| **Google zx** | https://github.com/google/zx | JS/TS shell scripts for design asset pipelines and automation | `npm i -g zx` |

### When to use A2UI vs traditional frameworks

```
Building an AI agent product that generates UI dynamically → Use A2UI protocol
Building a standard web/mobile app with a design system    → Use traditional frameworks (React/Vue/etc.)
Need cross-platform agent UI (web + mobile + desktop)      → A2UI (single JSON → multiple renderers)
```
