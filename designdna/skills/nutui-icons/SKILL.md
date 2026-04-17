---
name: nutui-icons
description: NutUI official icon library skill — 500+ mobile-first glyphs for both Vue and React (two sibling packages, tree-shakeable). Covers install, on-demand import, custom sizing/color, SVG output, and alternatives (Lucide, Tabler) when NutUI doesn't have a glyph.
---

# NutUI Icons — Mobile Icon Library

> **Source**: [jdf2e/nutui-icons](https://github.com/jdf2e/nutui-icons) · 12 stars · 2026-03 active
> **Packages**: `@nutui/icons-vue` · `@nutui/icons-react`
> **Docs**: https://nutui-icons.jd.com/

## 1. Why NutUI Icons

- **Paired with NutUI component libraries** — visual consistency guaranteed
- **SVG-based** — crisp at any size, customizable color via CSS
- **Tree-shakeable** — import only what you use
- **500+ glyphs** — retail/commerce-focused but broad (navigation, feedback, e-commerce)

## 2. Installation

### Vue 3

```bash
npm install @nutui/icons-vue
```

```vue
<script setup lang="ts">
import { ArrowRight, User, Cart, Star } from '@nutui/icons-vue';
</script>

<template>
  <ArrowRight />
  <User color="#fa2c19" size="16" />
  <Cart :size="24" color="#333" />
  <Star size="20" />
</template>
```

### React

```bash
npm install @nutui/icons-react
```

```tsx
import { ArrowRight, User, Cart, Star } from '@nutui/icons-react';

<ArrowRight />
<User color="#fa2c19" size={16} />
<Cart size={24} color="#333" />
<Star size={20} />
```

### UniApp (Taro)

Use `@nutui/icons-react-taro` for Taro React projects.

## 3. Icon categories

NutUI icons cluster into these families. Pick glyphs from the same family for consistency:

### Navigation
`ArrowLeft` · `ArrowRight` · `ArrowUp` · `ArrowDown` · `Back` · `Close` · `More` · `Menu` · `Home`

### User / Account
`User` · `UserAdd` · `Contacts` · `Lock` · `Unlock` · `Eye` · `EyeClose` · `Key` · `Shield`

### E-commerce
`Cart` · `Cart2` · `CartSwitch` · `Coupon` · `Gift` · `Shop` · `ShopFollow` · `Bag` · `Package` · `Receipt` · `Invoice`

### Payment
`Pay` · `PayCircle` · `Wallet` · `RMB` · `Dollar` · `CreditCard`

### Communication
`Chat` · `Comment` · `Mail` · `Phone` · `Telephone` · `PhoneCircle` · `Service`

### Feedback
`Check` · `Checked` · `Cross` · `CrossCircle` · `Minus` · `Plus` · `Warning` · `WarningCircle` · `Info` · `Success`

### Media
`Camera` · `Image` · `Images` · `Video` · `VideoPlay` · `VideoPause` · `VideoStop` · `Voice` · `Music` · `Mute`

### Actions
`Edit` · `Delete` · `Share` · `ShareRound` · `Copy` · `Download` · `Upload` · `Send` · `Print` · `Search` · `Scan` · `QR`

### Status
`Star` · `StarFill` · `Heart` · `HeartFill` · `Flag` · `Pin` · `Tag` · `Fire` · `Hot` · `New`

### Time
`Clock` · `Watch` · `Calendar` · `Date` · `Time`

Full catalog: https://nutui.jd.com/h5/vue/4x/#/en-US/component/icon (same glyph names apply to React)

## 4. Custom sizing and color

All icons accept `size` (px number or string) and `color`:

```tsx
<User size={20} color="#fa2c19" />
<Star size="24" color="red" />
<Cart size="1.5em" color="currentColor" />
```

In CSS, icons inherit `color` from parent:

```html
<div style="color: #fa2c19; font-size: 20px;">
  <User size="1em" color="currentColor" />
</div>
```

## 5. Render as SVG string (React advanced)

```tsx
import { getIconElement } from '@nutui/icons-react';

const svg = getIconElement('User', { size: 16, color: '#fa2c19' });
// svg is a JSX element you can insert anywhere
```

## 6. When NutUI Icons is not enough

NutUI covers ~500 glyphs with commerce/mobile focus. For specialized needs:

| Need | Alternative |
|---|---|
| File type icons | [Lucide](https://lucide.dev) |
| Brand logos | [Simple Icons](https://simpleicons.org) |
| Data-science glyphs | [Tabler Icons](https://tabler.io/icons) |
| Emoji-like / playful | [Phosphor Icons](https://phosphoricons.com) |
| Google Material | [Material Symbols](https://fonts.google.com/icons) |

**Rule**: pick ONE library per project for consistency. Mixing creates visual incoherence. See [designdna/assets/ICON-INDEX.md](../../assets/ICON-INDEX.md) for the full catalog.

## 7. BANNED patterns

- ❌ NEVER import the whole library (`import * from '@nutui/icons-vue'`) — defeats tree-shaking
- ❌ NEVER mix NutUI Icons with Lucide / Tabler / Material in the same view — visually incoherent
- ❌ NEVER use CSS `background-image` for icons — loses retina sharpness, breaks color inheritance
- ❌ NEVER use icon fonts as an alternative (e.g., FontAwesome) — SVG is better
- ❌ NEVER hardcode sizes as fixed `px` when the icon should scale with parent font size — use `size="1em"` + `color="currentColor"`
- ❌ NEVER use NutUI Icons in a project that isn't NutUI-based and has a different visual style

## 8. Pre-flight checklist

```
- [ ] Package installed: @nutui/icons-vue OR @nutui/icons-react (pick the right one)
- [ ] Icons imported individually (named imports), not wildcard
- [ ] Size specified explicitly (px or em) — never default-assume
- [ ] Color explicitly set or "currentColor" for theme adaptation
- [ ] ≤ 1 icon library in the project (no mixing)
- [ ] If project uses Tailwind/CSS variables, icon color matches token
```

## 9. Usage pattern for consistency

In the DesignDNA spirit, declare once, reuse:

```tsx
// src/components/Icon.tsx — project-wide wrapper
import {
  ArrowRight as _ArrowRight,
  User as _User,
  Cart as _Cart,
  // ...
} from '@nutui/icons-react';

const DEFAULTS = { size: 16, color: 'currentColor' };

export const ArrowRight = (p: any) => <_ArrowRight {...DEFAULTS} {...p} />;
export const User = (p: any) => <_User {...DEFAULTS} {...p} />;
export const Cart = (p: any) => <_Cart {...DEFAULTS} {...p} />;
```

Now every import is `from '@/components/Icon'` and sizing/color is consistent.
