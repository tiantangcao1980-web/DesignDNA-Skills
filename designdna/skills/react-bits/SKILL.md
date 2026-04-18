---
name: react-bits
description: React Bits — "the largest, most creative" React animated component library by David Haz (38.3k stars, active). 110+ animated components across text animations, UI elements, and backgrounds (including Three.js 3D effects). Distributed via shadcn CLI / jsrepo / manual copy. 4 technology variants per component (JS-CSS, JS-Tailwind, TS-CSS, TS-Tailwind). Perfect for memorable landing pages and marketing sites.
---

# React Bits — Animated React Components

> **Source**: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) · 38.3k ⭐ · 🟢 active 2026
> **Site**: https://reactbits.dev/
> **License**: MIT + Commons Clause (free use, no direct resale)

## 1. What it is

React Bits is **not a traditional component library** — it's a curated collection of **animated / creative React components** that you copy into your project. Every component has 4 variants covering major tech stacks:

| Variant | JavaScript | TypeScript |
|---|---|---|
| **CSS** | JS + CSS | TS + CSS |
| **Tailwind** | JS + Tailwind | TS + Tailwind |

Categories:
- **Text Animations** (split, typewriter, shimmer, gradient, glitch, wave, bounce, etc.)
- **UI Elements** (buttons, cards, modals, menus — with creative interactions)
- **Backgrounds** (animated gradients, particles, 3D scenes via Three.js, meshes, ball pits, wireframes)

Plus companion tools:
- **Background Studio** — build custom animated backgrounds
- **Shape Magic** — design rounded-corner shapes, export SVG
- **Texture Lab** — 20+ noise / dither / ASCII / halftone textures

## 2. When to use

- **Landing pages** that need a "wow" moment
- **Portfolio / creative sites** where memorability matters
- **Hero sections** wanting animated text/background
- **Marketing microsites** with creative visuals

### When NOT to use

- Internal admin UIs — React Bits is decoration-focused, not data-dense
- Performance-critical apps — many components use heavy CSS/Canvas animations
- If you already have a design system (antd, MUI) — don't mix heavy visuals inconsistently

## 3. Install

### Method 1: shadcn CLI (recommended)

React Bits components distribute via shadcn's registry format. You need shadcn/ui init first:

```bash
npx shadcn@latest init              # One-time setup
npx shadcn@latest add @react-bits/BlurText-TS-TW
npx shadcn@latest add @react-bits/Aurora-TS-TW
npx shadcn@latest add @react-bits/Ballpit-TS-TW
```

Naming convention: `@react-bits/{ComponentName}-{Lang}-{Style}` where:
- `Lang`: `JS` or `TS`
- `Style`: `CSS` or `TW` (Tailwind)

### Method 2: jsrepo

```bash
npx jsrepo add github.com/DavidHDev/react-bits@latest
```

### Method 3: Manual copy

Browse https://reactbits.dev/, find the component, copy its source directly into `src/components/`.

## 4. Component catalog highlights

### Text animations

- **BlurText** — blur-reveal characters
- **SplitText** — character-by-character entrance
- **TypewriterText** — classic typewriter
- **GradientText** — animated gradient fill
- **DecryptText** — matrix-style decryption
- **ShimmerText** — shimmer sweep
- **WaveText** — characters in sine wave
- **CountUp** — number counter animation
- **VariableProximity** — variable font responds to cursor

### UI elements

- **GlassSurface** — Apple-style frosted glass
- **MagnetLines** — magnetic cursor interaction
- **DockBar** — macOS-style dock animation
- **TiltedCard** — 3D tilt on hover
- **ProfileCard** — animated profile card
- **CircularText** — text arranged in circle
- **ElectricBorder** — animated electric outline
- **ClickSpark** — spark effects on click
- **Stepper** — animated step navigation

### Backgrounds

- **Aurora** — northern lights gradient
- **Ballpit** — physics-based ball pit (Three.js)
- **Beams** — light beam rays
- **Galaxy** — particle galaxy
- **Grid** — animated grid
- **Hyperspeed** — sci-fi tunnel
- **LightRays** — light rays effect
- **Particles** — configurable particle system
- **Silk** — silky cloth animation
- **Waves** — wave background

Full catalog: https://reactbits.dev/

## 5. Usage examples

### BlurText (text animation)

```tsx
import BlurText from '@/components/BlurText';

<BlurText
  text="Design systems as AI skills"
  delay={150}
  animateBy="words"
  direction="top"
  className="text-6xl font-bold"
/>
```

### Aurora (background)

```tsx
import Aurora from '@/components/Aurora';

<div className="relative h-screen">
  <Aurora
    colorStops={['#10b981', '#6366f1', '#ec4899']}
    blend={0.5}
    amplitude={1.0}
    speed={0.5}
  />
  <div className="relative z-10 flex items-center justify-center h-full">
    <h1 className="text-6xl text-white">Welcome</h1>
  </div>
</div>
```

### TiltedCard (UI element)

```tsx
import TiltedCard from '@/components/TiltedCard';

<TiltedCard
  imageSrc="/product.jpg"
  altText="Product"
  captionText="Featured Product"
  containerHeight="400px"
  containerWidth="300px"
  rotateAmplitude={14}
  scaleOnHover={1.08}
  showMobileWarning={false}
/>
```

### Ballpit (Three.js)

```tsx
import Ballpit from '@/components/Ballpit';

<div className="h-[500px] w-full">
  <Ballpit
    count={200}
    gravity={0.5}
    friction={0.9975}
    colors={[0x10b981, 0x6366f1, 0xec4899]}
  />
</div>
```

### CountUp

```tsx
import CountUp from '@/components/CountUp';

<div className="text-8xl">
  <CountUp from={0} to={58} separator="," direction="up" duration={2} />
  <span className="text-4xl"> brands</span>
</div>
```

## 6. Bundle size considerations

Animation components are heavier than typical UI:

| Component category | Approx size |
|---|---|
| Text animations | 5-15 KB each |
| UI elements | 10-30 KB each |
| Three.js backgrounds | 150-300 KB (includes Three.js) |

**Tips**:
- Only copy what you use (that's the whole point of the distribution model)
- Lazy-load heavy backgrounds via `React.lazy()` + `Suspense`
- Prefer CSS-based animations over Three.js where possible
- Use `prefers-reduced-motion` to disable animation for a11y

## 7. Accessibility

- Always respect `prefers-reduced-motion`:

```tsx
const shouldReduceMotion = useReducedMotion();  // from framer-motion

{!shouldReduceMotion && <Aurora ... />}
```

- For text animations, ensure the full text is readable in HTML for screen readers (don't rely solely on JS-rendered characters)
- For backgrounds, keep foreground content's contrast high

## 8. BANNED

- ❌ NEVER ship a React Bits background without respecting `prefers-reduced-motion`
- ❌ NEVER stack multiple Three.js backgrounds on one page — performance tank
- ❌ NEVER use React Bits as your primary component library for structural UI (buttons, forms) — use shadcn/ui, MUI, etc. for that
- ❌ NEVER forget that the library is MIT + Commons Clause — you can use components commercially, but cannot directly resell React Bits as a competing product
- ❌ NEVER import every variant of a component (JS+TS+CSS+TW) — pick one matching your stack
- ❌ NEVER use React Bits in a context where the "wow" is not desirable (internal tools, admin dashboards)
- ❌ NEVER assume React Bits components are accessible by default — most are decorative; wrap with accessibility helpers

## 9. Pre-flight checklist

```
- [ ] Project has shadcn init done (if using CLI method)
- [ ] Stack variant chosen: JS vs TS, CSS vs Tailwind
- [ ] Only needed components copied (not whole library)
- [ ] prefers-reduced-motion handler in place
- [ ] Bundle size checked (tree-shaking + lazy-loading for heavy components)
- [ ] Three.js components lazy-loaded if above the fold
- [ ] Primary UI uses stable component library (shadcn / MUI / antd) — React Bits only decorates
- [ ] Accessibility verified (alt text, keyboard nav, contrast)
- [ ] License understood (MIT + Commons Clause)
```

## 10. Combine with DesignDNA

React Bits components are **decoration**. DesignDNA brand DNAs are **structure**. They complement each other:

```tsx
// Use brand DNA colors for React Bits
import { tokens } from '../design-md/stripe/tokens';
import Aurora from '@/components/Aurora';

<Aurora colorStops={[tokens.colors['stripe-purple'], tokens.colors.magenta]} />
```

This ensures the "wow" effect stays on-brand.

## 11. Related

- **React Bits Pro** — paid tier with 65 exclusive components + animated UI blocks + 5 landing templates (by David Haz)
- **Vue Bits** — official Vue port: https://vuebits.dev
- **Framer Motion** — general-purpose React animation (use for app-wide motion)
- **GSAP** — imperative animation library (for complex timelines)
- **Lottie** — After Effects animations in React (see `ai-model-web` or search docs)

## 12. Dial fit

Depends on component — ranges from:
- **Decorative text animations**: motion: 6-8, formality: 3-5
- **Hero backgrounds**: motion: 7-9, warmth: varies by brand
- **3D scenes**: motion: 9, density: 2 (sparse content + heavy decor)

Use with restraint — 1-2 React Bits components per page is usually the right dose.
