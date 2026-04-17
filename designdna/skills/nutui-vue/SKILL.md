---
name: nutui-vue
description: NutUI 4 Vue 3 component library skill — JD's flagship mobile-first component library (6.5k stars, actively maintained). Covers 70+ components across basics, forms, navigation, feedback, layout, and business patterns. Optimized for mobile H5 + Taro MiniPrograms. Includes installation, component reference, theme tokens, and on-demand imports.
---

# NutUI Vue 3 — JD Mobile Component Library

> **Source**: [jdf2e/nutui](https://github.com/jdf2e/nutui) · 6.5k stars · 2026-04 active · v4.3.14-beta.3
> **Health**: 🟢 active — the flagship of JD's front-end component ecosystem
> **Docs**: https://nutui.jd.com/h5/vue/4x/#/en-US/guide/intro-new

## 1. What this library is for

- **Mobile H5** (Vue 3 single-page apps)
- **Taro + Vue 3** MiniPrograms (multi-vendor)
- **E-commerce, retail, logistics** UI — NutUI's visual DNA is JD-red (#FA2C19) with warm, rounded, product-focused aesthetics

## 2. Installation

### Pure Vue 3 / Vite / Nuxt 3

```bash
npm install @nutui/nutui
```

```ts
// main.ts — full registration
import { createApp } from 'vue';
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/style.css';
import App from './App.vue';

createApp(App).use(NutUI).mount('#app');
```

### Taro + Vue 3

```bash
npm install @nutui/nutui-taro
```

```ts
// main.ts
import NutUI from '@nutui/nutui-taro';
import '@nutui/nutui-taro/dist/style.css';
```

Register components on-demand for better tree-shaking:

```ts
import { Button, Cell, Tabs } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/button/style';
import '@nutui/nutui/dist/packages/cell/style';

app.use(Button).use(Cell).use(Tabs);
```

### Vite auto-import (recommended)

```ts
// vite.config.ts
import Components from 'unplugin-vue-components/vite';
import { NutUIResolver } from '@nutui/auto-import-resolver';

export default {
  plugins: [
    Components({
      resolvers: [NutUIResolver()],
    }),
  ],
};
```

Now components are auto-imported on first use — zero manual registration, minimal bundle.

## 3. Component catalog (70+)

### Basic

| Component | Purpose |
|---|---|
| `Button` | Button with type/size/plain/round/block |
| `Icon` | Icon font with 500+ glyphs |
| `Cell` / `CellGroup` | List row |
| `Divider` | Horizontal divider |
| `Tag` | Label tag |
| `Avatar` / `AvatarGroup` | User avatar, grouped stack |
| `Grid` / `GridItem` | Grid menu |
| `Image` | Responsive image with lazy-load |

### Layout

| Component | Purpose |
|---|---|
| `Row` / `Col` | 24-column grid |
| `Layout` | Flex layout helper |
| `Sticky` | Sticky positioning wrapper |
| `Animate` | Preset animations |
| `Popover` | Floating popover |
| `Skeleton` | Loading skeleton |
| `Empty` | Empty-state placeholder |
| `Popup` | Popup modal (bottom, center, etc.) |

### Navigation

| Component | Purpose |
|---|---|
| `NavBar` | Top nav bar |
| `Tabbar` / `TabbarItem` | Bottom tab bar |
| `Tabs` / `TabPane` | Horizontal tabs |
| `Steps` / `Step` | Step progress |
| `SideNavBar` | Vertical side nav |
| `Menu` / `MenuItem` | Category filter dropdown |
| `FixedNav` | Floating action button + menu |
| `ElevatorNav` | A-Z index scroll |

### Form

| Component | Purpose |
|---|---|
| `Form` / `FormItem` | Form container with validation |
| `Input` / `Textarea` | Text inputs |
| `InputNumber` | Numeric stepper |
| `Radio` / `RadioGroup` | Radio |
| `Checkbox` / `CheckboxGroup` | Checkbox |
| `Switch` | Toggle |
| `Range` | Range slider |
| `Rate` | Star rating |
| `Uploader` | File/image upload |
| `Picker` / `DatePicker` / `TimePicker` | Pickers |
| `ShortPassword` | PIN entry |
| `TextArea` | Multi-line |

### Feedback

| Component | Purpose |
|---|---|
| `Toast` | Toast message (imperative) |
| `Dialog` | Modal dialog |
| `ActionSheet` | Bottom action sheet |
| `Notify` | Top notification |
| `Backtop` | Back-to-top button |
| `Loading` | Spinner |
| `InfiniteLoading` | Infinite scroll trigger |
| `PullRefresh` | Pull-to-refresh |
| `Progress` | Progress bar |
| `CountDown` / `CountUp` | Counters |

### Data display

| Component | Purpose |
|---|---|
| `Swiper` | Carousel |
| `SwipeGroup` | Image carousel |
| `SwipeAction` | Swipe-to-reveal action |
| `Collapse` | Accordion |
| `Timeline` | Timeline events |
| `Video` | Video player wrapper |
| `VirtualList` | Virtualized scroller |
| `Calendar` / `CalendarCard` | Calendar picker |
| `Pagination` | Pagination |
| `Table` | Data table |
| `Ecard` | E-gift card |

### E-commerce

| Component | Purpose |
|---|---|
| `Price` | Currency price display |
| `PriceChange` | Price delta indicator |
| `Tab` | Item tabs |
| `ImagePreview` | Full-screen image viewer |
| `SKU` | Product SKU selector |
| `AddressList` | Address list |
| `Address` | Address picker |
| `Barrage` | Scrolling comments |

Full catalog: https://nutui.jd.com/h5/vue/4x/#/en-US/component

## 4. Usage examples

### Button

```vue
<script setup lang="ts">
import { Button } from '@nutui/nutui';
</script>

<template>
  <Button type="primary">Primary</Button>
  <Button type="info" size="small">Info small</Button>
  <Button type="warning" plain>Plain warning</Button>
  <Button type="danger" round>Round danger</Button>
  <Button type="primary" :loading="true">Loading…</Button>
  <Button type="primary" block>Block CTA</Button>
</template>
```

### Cell list

```vue
<script setup>
import { CellGroup, Cell } from '@nutui/nutui';
import { ArrowRight } from '@nutui/icons-vue';
</script>

<template>
  <CellGroup title="My account">
    <Cell title="Name" value="Alice" />
    <Cell title="Phone" value="138****8888" :center="true" />
    <Cell title="Address" @click="goAddress">
      <template #value>
        Shanghai, Pudong
        <ArrowRight />
      </template>
    </Cell>
  </CellGroup>
</template>
```

### Form with validation

```vue
<script setup lang="ts">
import { Form, FormItem, Input, Button, Toast } from '@nutui/nutui';
import { ref } from 'vue';

const formData = ref({ username: '', phone: '' });

const rules = {
  username: [{ required: true, message: 'Username is required' }],
  phone: [
    { required: true, message: 'Phone required' },
    { pattern: /^1[3-9]\d{9}$/, message: 'Invalid phone' },
  ],
};

const onSubmit = (valid: any) => {
  if (valid) Toast.success('Submitted');
  else Toast.fail('Please fix errors');
};
</script>

<template>
  <Form :model-value="formData" :rules="rules" @submit="onSubmit">
    <FormItem label="Username" prop="username">
      <Input v-model="formData.username" placeholder="Enter username" />
    </FormItem>
    <FormItem label="Phone" prop="phone">
      <Input v-model="formData.phone" type="tel" placeholder="11-digit mobile" />
    </FormItem>
    <Button native-type="submit" type="primary" block>Submit</Button>
  </Form>
</template>
```

### Dialog

```vue
<script setup>
import { Dialog } from '@nutui/nutui';

const confirmDelete = () => {
  Dialog.confirm({
    title: 'Confirm',
    message: 'Delete this item? This cannot be undone.',
  }).then(() => {
    // user clicked OK
  }).catch(() => {
    // user cancelled
  });
};
</script>
```

### Swipe action (list with swipe-to-delete)

```vue
<script setup>
import { SwipeAction, Cell, Button } from '@nutui/nutui';
</script>

<template>
  <SwipeAction>
    <Cell title="Swipe me left" />
    <template #right-action>
      <Button type="danger">Delete</Button>
    </template>
  </SwipeAction>
</template>
```

### SKU selector (e-commerce)

```vue
<script setup lang="ts">
import { SKU } from '@nutui/nutui';

const skuData = {
  image: 'https://...',
  goods_name: 'T-Shirt',
  price: '198.00',
  stock: 99,
  skuList: [
    { id: 1, goods_name: 'Red / M', price: '198.00', stock: 20, attrs: [{ name: 'Color', val: 'Red' }, { name: 'Size', val: 'M' }] },
    // ...
  ],
};
</script>

<template>
  <SKU :sku="skuData" @on-change="onSkuChange" />
</template>
```

## 5. Theme customization

NutUI uses CSS variables. Override in your app's root stylesheet:

```css
:root {
  /* Brand */
  --nut-primary-color: #fa2c19;          /* JD red */
  --nut-primary-color-end: #fa6419;      /* gradient end */
  --nut-help-color: #f7f8fa;

  /* Typography */
  --nut-font-family: -apple-system, 'Helvetica Neue', sans-serif;
  --nut-base-font-size: 14px;

  /* Layout */
  --nut-cell-border-radius: 8px;
  --nut-button-border-radius: 4px;
  --nut-button-small-height: 28px;
  --nut-button-default-height: 38px;

  /* Colors */
  --nut-title-color: #1a1a1a;
  --nut-text-color: #666666;
  --nut-disable-color: #c3c3c3;
  --nut-border-color: #f5f5f5;
}
```

Full token list: https://nutui.jd.com/h5/vue/4x/#/en-US/guide/theme

## 6. Design tokens

| Token | Default |
|---|---|
| `--nut-primary-color` | `#fa2c19` (JD red) |
| `--nut-primary-color-end` | `#fa6419` |
| `--nut-help-color` | `#f7f8fa` |
| `--nut-title-color` | `#1a1a1a` |
| `--nut-text-color` | `#666666` |
| `--nut-disable-color` | `#c3c3c3` |
| `--nut-border-color` | `#f5f5f5` |
| `--nut-base-font-size` | `14px` |

## 7. BANNED patterns

- ❌ NEVER import `@nutui/nutui/dist/style.css` AND also on-demand `packages/*/style` — duplicate CSS
- ❌ NEVER use NutUI 3.x docs — you're on v4 (breaking changes from 3 → 4)
- ❌ NEVER use `@nutui/nutui` for React — use `@nutui/nutui-react` (see nutui-react skill)
- ❌ NEVER style buttons with raw `background-color` overrides — use CSS variables so the whole theme responds
- ❌ NEVER skip `<Form>` + `<FormItem>` wrapping if you want validation — NutUI's validation is form-scoped
- ❌ NEVER use `v-model` without `:model-value` in Form items for v4 syntax
- ❌ NEVER import all icons — use `@nutui/icons-vue` and import individually: `import { ArrowRight, User } from '@nutui/icons-vue'`
- ❌ NEVER assume JD-red is the only accent — override `--nut-primary-color` for non-JD brands

## 8. Pre-flight checklist (NutUI Vue projects)

```
- [ ] Using NutUI v4 (not legacy v3)
- [ ] Package: @nutui/nutui for Vue / @nutui/nutui-taro for Taro
- [ ] Registered via app.use() or unplugin-vue-components + NutUIResolver
- [ ] Icons imported individually from @nutui/icons-vue (not whole library)
- [ ] Theme overridden via CSS variables (not SCSS hacks)
- [ ] JD-red replaced if the project is not JD-branded
- [ ] Form validation uses <Form> + <FormItem> + :rules
- [ ] Imperative APIs (Toast, Dialog, Notify) called as functions, not as components
- [ ] Mobile viewport meta tag set: <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
- [ ] rem/viewport unit configured (postcss-px-to-viewport) for consistent sizing across devices
```

## 9. Platform-specific notes

### Vue 3 + Vite
Zero extra config needed. Tree-shaking works out of the box.

### Nuxt 3
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nutui/nuxt-nutui'],
  css: ['@nutui/nutui/dist/style.css'],
});
```

### Taro + Vue 3
Use `@nutui/nutui-taro` (not `@nutui/nutui`). CSS requires PostCSS transform for MiniProgram platforms — Taro handles this automatically.

### UniApp + Vue 3
Use `nutui-uniapp` (community port — see `nutui-uniapp` skill).
