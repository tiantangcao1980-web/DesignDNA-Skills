---
name: tailwindcss
description: Tailwind CSS v4 — utility-first CSS framework (87k+ stars, active). The dominant CSS choice for modern React/Vue/Svelte projects. v4 uses Oxide engine (much faster) and native CSS `@theme` directive. Covers install, v3 → v4 migration, design token customization, and common UI patterns.
---

# Tailwind CSS v4 — Utility-First CSS

> **Source**: [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss) · 87k+ ⭐ · v4.x · 🟢 active 2026
> **Docs**: https://tailwindcss.com/

## 1. When to use

- Any React / Vue / Svelte / vanilla project wanting fast styling
- Pairs natively with **shadcn/ui**, **Radix Primitives**, **Base UI**
- Preferred for design-driven products (not default admin dashboards)

## 2. Install (v4)

### Vite

```bash
npm install tailwindcss @tailwindcss/vite
```

```ts
// vite.config.ts
import tailwindcss from '@tailwindcss/vite';

export default {
  plugins: [tailwindcss()],
};
```

```css
/* src/index.css */
@import "tailwindcss";
```

### Next.js 15+

```bash
npm install tailwindcss @tailwindcss/postcss
```

```js
// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

```css
/* app/globals.css */
@import "tailwindcss";
```

## 3. v3 → v4 breaking changes

| v3 | v4 |
|---|---|
| `tailwind.config.js` | CSS-based config via `@theme` |
| `@tailwind base; @tailwind components; @tailwind utilities;` | Single `@import "tailwindcss";` |
| `@layer` imports | Automatic |
| `theme.extend.colors` | `@theme { --color-brand: ... }` |
| PostCSS required | Optional (Vite plugin is standalone) |

**v3 projects still work** — v4 adds a compatibility layer. But new projects should adopt v4-native conventions.

## 4. Theme customization (v4)

```css
@import "tailwindcss";

@theme {
  --color-brand-50: oklch(0.97 0.02 270);
  --color-brand-500: oklch(0.55 0.22 270);
  --color-brand-900: oklch(0.25 0.15 270);

  --font-sans: "Inter", "system-ui", "sans-serif";
  --font-mono: "JetBrains Mono", "monospace";

  --radius-default: 0.5rem;
  --radius-lg: 1rem;

  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

Now `bg-brand-500`, `text-brand-900`, `font-sans`, `rounded-default` all work.

## 5. Common patterns

### Layout

```html
<!-- Stack -->
<div class="flex flex-col gap-4">...</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-6">...</div>

<!-- Responsive -->
<div class="flex flex-col md:flex-row lg:grid lg:grid-cols-4 gap-4">...</div>
```

### Typography

```html
<h1 class="text-4xl font-bold tracking-tight leading-tight">Heading</h1>
<p class="text-base text-gray-600 leading-relaxed max-w-prose">Body copy…</p>
```

### Card

```html
<div class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
  <h3 class="text-lg font-semibold mb-2">Title</h3>
  <p class="text-sm text-gray-600 dark:text-gray-400">Description</p>
</div>
```

### Button

```html
<button class="inline-flex items-center gap-2 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:opacity-50">
  Click
</button>
```

### Form input

```html
<label class="block">
  <span class="text-sm font-medium text-gray-700">Email</span>
  <input
    type="email"
    class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:ring focus:ring-brand-500/20"
  />
</label>
```

## 6. Dark mode

### Class strategy (recommended)

```css
@import "tailwindcss";
@variant dark (&:where(.dark, .dark *));
```

```html
<html class="dark">
  <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
```

Use with **next-themes** for automatic system/manual switching.

## 7. Plugins

```bash
npm install @tailwindcss/typography @tailwindcss/forms @tailwindcss/aspect-ratio
```

```css
@plugin "@tailwindcss/typography";
@plugin "@tailwindcss/forms";
```

## 8. BANNED

- ❌ NEVER mix v3 `tailwind.config.js` and v4 `@theme` — pick one per project
- ❌ NEVER write huge `class="..."` strings (20+ classes) inline — extract with `cva` or component abstraction
- ❌ NEVER use arbitrary values as a substitute for design tokens (`class="bg-[#fa2c19]"` is a smell; add `--color-brand-500` token)
- ❌ NEVER skip `focus-visible` styling — accessibility requirement
- ❌ NEVER rely on `@apply` for everything — it defeats utility-first; use sparingly for reuse
- ❌ NEVER turn on `darkMode: 'media'` and also toggle `.dark` class — pick one strategy
- ❌ NEVER hardcode colors like `text-gray-600` for theme-aware text in dark mode without `dark:text-gray-400`

## 9. Pre-flight checklist

```
- [ ] Tailwind v4 installed + @tailwindcss/vite (or @tailwindcss/postcss for Next)
- [ ] @import "tailwindcss"; in global CSS
- [ ] Custom design tokens declared in @theme { ... }
- [ ] Brand colors tokenized (not inline arbitrary hex)
- [ ] Dark mode strategy chosen (class or media)
- [ ] Font family tokenized (--font-sans)
- [ ] focus-visible styles on all interactive elements
- [ ] Responsive classes used (sm: md: lg:) for breakpoints
- [ ] Extracted reusable combos with cva / component wrappers
```

## 10. Tailwind + shadcn/ui

Tailwind is the styling engine for shadcn/ui. Adopt both together for maximum leverage. See `shadcn-ui` skill.

## 11. Dial fit

Depends on how you compose — Tailwind enables any dial vector. Common pairings:
- **Design-driven SaaS**: Tailwind + shadcn/ui → formality: 6, motion: 4-6
- **Admin dashboard**: Tailwind + custom components → formality: 7, density: 7
