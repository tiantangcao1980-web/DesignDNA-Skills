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
```

---

## 2. Image & Photography Resources

### 2.1 General Purpose

| Resource | URL | License | API | Best For |
|----------|-----|---------|-----|----------|
| **Unsplash** | https://unsplash.com/ | Free commercial use | REST API available | Hero images, backgrounds, lifestyle |
| **Pexels** | https://www.pexels.com/zh-cn/ | Free commercial use | REST API available | General photography, diverse styles |
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
| **Coverr** | https://coverr.co/ | Free commercial use | Website background loops |
| **Mixkit** | https://mixkit.co/ | Free commercial use | Promotional videos, motion backgrounds |

### Image Usage Guide

```
Use Case                → Recommended Source     → Format
────────────────────────────────────────────────────────
Hero/Banner             → Unsplash, Pexels       → WebP/AVIF, 1920px wide
Card thumbnails         → Unsplash, Pixabay      → WebP, 400-800px wide
Avatar placeholders     → UI Faces               → WebP, 64-128px
Food/Restaurant app     → FoodiesFeed            → WebP, various
Nature/Travel app       → Hippopx, Unsplash      → WebP/AVIF
Product illustration    → Undraw (SVG)           → SVG (inline, color-customizable)
Background video        → Coverr, Mixkit         → MP4/WebM, 1080p
Loading animation       → LottieFiles            → JSON (Lottie)
```

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

## 4. Color & Palette Resources

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

## 5. Component Library & UI Framework

### 5.1 React Ecosystem

| Library | URL | GitHub | Style | Best For |
|---------|-----|--------|-------|----------|
| **Radix UI + Themes** | https://www.radix-ui.com/ | radix-ui/themes | Unstyled primitives + theme | Custom design systems, accessibility-first |
| **shadcn/ui** | https://ui.shadcn.com/ | shadcn-ui/ui | Tailwind + Radix | Copy-paste components, full control |
| **Ant Design** | https://ant.design/index-cn | ant-design/ant-design | Enterprise Chinese-friendly | Chinese enterprise apps, admin panels |
| **Semi Design** | https://semi.design/zh-CN/ | DouyinFE/semi-design | Modern enterprise | ByteDance ecosystem, bilingual apps |
| **Chakra UI** | https://chakra-ui.com/ | chakra-ui/chakra-ui | Accessible, themeable | Rapid prototyping, accessibility |
| **Mantine** | https://mantine.dev/ | mantinedev/mantine | Modern, batteries-included | Full-featured apps, 100+ hooks |
| **NextUI** | https://nextui.org/ | nextui-org/nextui | Modern, Tailwind-based | Next.js projects, sleek design |
| **Headless UI** | https://headlessui.com/ | tailwindlabs/headlessui | Unstyled, Tailwind | Custom-styled Tailwind projects |

### 5.2 Vue Ecosystem

| Library | URL | GitHub | Style | Best For |
|---------|-----|--------|-------|----------|
| **TDesign Vue** | https://tdesign.tencent.com/ | Tencent/tdesign | Tencent design language | Tencent ecosystem, enterprise apps |
| **Element Plus** | https://element-plus.org/ | element-plus/element-plus | Enterprise Chinese-friendly | Vue 3 admin panels, forms |
| **Naive UI** | https://www.naiveui.com/ | tusen-ai/naive-ui | Modern, TypeScript-first | Vue 3 modern apps, 90+ components |
| **Vuetify** | https://vuetifyjs.com/ | vuetifyjs/vuetify | Material Design | Material Design Vue projects |
| **PrimeVue** | https://primevue.org/ | primefaces/primevue | Enterprise, themeable | Large-scale Vue enterprise apps |
| **Ant Design Vue** | https://antdv.com/ | vueComponent/ant-design-vue | Ant Design for Vue | Ant Design ecosystem in Vue |

### 5.3 CSS Framework

| Library | URL | GitHub | Best For |
|---------|-----|--------|----------|
| **Tailwind CSS** | https://tailwindcss.com/ | tailwindlabs/tailwindcss | Utility-first, any framework |
| **Bootstrap** | https://getbootstrap.com/ | twbs/bootstrap | Traditional web, rapid prototyping |
| **UnoCSS** | https://unocss.dev/ | unocss/unocss | High-performance atomic CSS |

### 5.4 Mobile & Cross-Platform

| Library | URL | Platform | Best For |
|---------|-----|----------|----------|
| **React Native Paper** | https://reactnativepaper.com/ | React Native | Material Design mobile apps |
| **NativeBase** | https://nativebase.io/ | React Native | Cross-platform accessible components |
| **Expo** | https://expo.dev/ | React Native | Full mobile dev platform |
| **Flutter Material** | https://m3.material.io/ | Flutter | Material 3 design system |
| **Vant** | https://vant-ui.github.io/ | Vue Mobile | Mobile-first Vue components |
| **NutUI** | https://nutui.jd.com/ | Vue/React Mobile | JD ecosystem mobile components |

### 5.5 Mini Program

| Library | URL | Platform | Best For |
|---------|-----|----------|----------|
| **TDesign Mini** | https://tdesign.tencent.com/miniprogram/ | WeChat Mini | Tencent ecosystem mini programs |
| **Vant Weapp** | https://vant-ui.github.io/vant-weapp/ | WeChat Mini | E-commerce mini programs |
| **WeUI** | https://weui.io/ | WeChat Mini | Official WeChat style |
| **Lin UI** | https://doc.mini.talelin.com/ | WeChat Mini | Minimalist component library |

### 5.6 Desktop Application

| Library | URL | Platform | Best For |
|---------|-----|----------|----------|
| **Radix UI** | https://www.radix-ui.com/ | Electron/Tauri (React) | Custom design system desktop apps |
| **shadcn/ui** | https://ui.shadcn.com/ | Electron/Tauri (React) | Full control desktop apps |
| **Wails + Vue** | https://wails.io/ | Go + Vue desktop | Go-based desktop with Vue UI |
| **Tauri + any** | https://tauri.app/ | Rust + any web framework | Lightweight, secure desktop apps |

---

## 6. Typography / Font Resources

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

## 7. Animation & Motion Resources

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

## 8. Design Token & Theming Tools

| Resource | URL | Purpose |
|----------|-----|---------|
| **Style Dictionary** | https://amzn.github.io/style-dictionary/ | Transform design tokens to any platform format |
| **Tailwind CSS Theme** | https://tailwindcss.com/docs/theme | Tailwind-native theme configuration |
| **Radix Colors** | https://www.radix-ui.com/colors | Accessible color scales with auto dark mode |
| **Open Props** | https://open-props.style/ | Ready-made CSS custom properties |
| **Theme UI** | https://theme-ui.com/ | React theme specification |

---

## 9. Accessibility & Quality Assurance

| Resource | URL | Purpose |
|----------|-----|---------|
| **WebAIM Contrast Checker** | https://webaim.org/resources/contrastchecker/ | WCAG color contrast verification |
| **Axe DevTools** | https://www.deque.com/axe/ | Automated accessibility testing |
| **Lighthouse** | Built into Chrome DevTools | Performance, accessibility, SEO audit |
| **Storybook** | https://storybook.js.org/ | Component isolation, visual testing |
| **Chromatic** | https://www.chromatic.com/ | Visual regression testing |

---

## 10. AI-Driven UI & Layout Verification

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
