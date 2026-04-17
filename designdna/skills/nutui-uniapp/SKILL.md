---
name: nutui-uniapp
description: NutUI UniApp v1 component library skill — community-maintained port of NutUI for UniApp + Vue 3 projects (553 stars, 2026-04 active). Compiles to H5, all 9 MiniProgram vendors, iOS/Android via UniApp. Includes installation for Vite and Vue CLI setups, component reference, easycom auto-import, theme tokens.
---

# NutUI UniApp — UniApp + Vue 3 port of NutUI

> **Source**: [nutui-uniapp/nutui-uniapp](https://github.com/nutui-uniapp/nutui-uniapp) · 553 stars · 2026-04 active · v1.11.2
> **Health**: 🟢 active — community-maintained (not official JD), but reliable and actively developed
> **Docs**: https://nutui-uniapp.netlify.app/

## 1. When to use

- **UniApp + Vue 3** projects that need NutUI's design language
- Covers all UniApp targets: H5, iOS, Android, WeChat / Alipay / ByteDance / Baidu / QQ / Kuaishou / JD / Xiaohongshu / HarmonyOS MiniPrograms

## 2. Installation

### Vite-based UniApp project

```bash
pnpm install nutui-uniapp
# Peer: uni-app + vue 3
```

```ts
// main.ts
import { createSSRApp } from 'vue';
import App from './App.vue';

export function createApp() {
  const app = createSSRApp(App);
  return { app };
}
```

```css
/* uni.scss or App.vue <style> */
@import 'nutui-uniapp/styles/index.scss';
```

### Vue CLI (classic UniApp)

```json
// package.json dependencies
{
  "nutui-uniapp": "^1.11.2",
  "vue": "^3.2.0"
}
```

### Easycom auto-import

Easycom is UniApp's built-in component auto-import. Configure:

```json
// pages.json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^nut-(.*)": "nutui-uniapp/components/$1/$1.vue"
    }
  }
}
```

Now `<nut-button>` works anywhere without import.

## 3. Component catalog

NutUI UniApp mirrors the Vue 3 version's catalog. Components are prefixed with `nut-`:

### Basic
`nut-button` · `nut-icon` · `nut-cell` · `nut-cell-group` · `nut-divider` · `nut-tag` · `nut-avatar` · `nut-avatar-group` · `nut-grid` · `nut-grid-item`

### Layout
`nut-row` · `nut-col` · `nut-popup` · `nut-popover` · `nut-sticky` · `nut-skeleton` · `nut-empty`

### Navigation
`nut-navbar` · `nut-tabbar` · `nut-tabs` · `nut-steps` · `nut-sidenavbar` · `nut-menu` · `nut-elevator`

### Form
`nut-form` · `nut-form-item` · `nut-input` · `nut-textarea` · `nut-inputnumber` · `nut-radio` · `nut-checkbox` · `nut-switch` · `nut-range` · `nut-rate` · `nut-uploader` · `nut-picker` · `nut-datepicker` · `nut-timepicker` · `nut-cascader` · `nut-number-keyboard`

### Feedback
`nut-toast` · `nut-dialog` · `nut-actionsheet` · `nut-notify` · `nut-backtop` · `nut-loading` · `nut-infiniteloading` · `nut-pull-refresh` · `nut-progress` · `nut-countdown` · `nut-countup`

### Data display
`nut-swiper` · `nut-swipe-action` · `nut-collapse` · `nut-timeline` · `nut-virtual-list` · `nut-calendar` · `nut-calendar-card` · `nut-pagination`

### E-commerce
`nut-price` · `nut-price-change` · `nut-ecard` · `nut-address` · `nut-addresslist` · `nut-sku` · `nut-image-preview`

## 4. Usage examples

### Button

```vue
<template>
  <nut-button type="primary">Primary</nut-button>
  <nut-button type="info" size="small">Info</nut-button>
  <nut-button type="warning" plain>Plain</nut-button>
  <nut-button type="danger" round>Round</nut-button>
  <nut-button type="primary" block :loading="isLoading">Block</nut-button>
</template>
```

### Cell list

```vue
<template>
  <nut-cell-group title="Account">
    <nut-cell title="Name" desc="Alice" />
    <nut-cell title="Phone" desc="138****8888" />
    <nut-cell title="Address" is-link @click="goAddress">
      <template #link>
        <text>Shanghai, Pudong</text>
      </template>
    </nut-cell>
  </nut-cell-group>
</template>
```

### Form with validation

```vue
<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({ username: '', phone: '' });
const rules = {
  username: [{ required: true, message: 'Required' }],
  phone: [
    { required: true, message: 'Phone required' },
    { pattern: /^1[3-9]\d{9}$/, message: 'Invalid' },
  ],
};
</script>

<template>
  <nut-form :model-value="formData" :rules="rules" @submit="onSubmit">
    <nut-form-item label="Username" prop="username">
      <nut-input v-model="formData.username" />
    </nut-form-item>
    <nut-form-item label="Phone" prop="phone">
      <nut-input v-model="formData.phone" type="tel" />
    </nut-form-item>
    <nut-button native-type="submit" type="primary" block>Submit</nut-button>
  </nut-form>
</template>
```

### Toast (imperative via composable)

```vue
<script setup lang="ts">
import { useToast } from 'nutui-uniapp';

const toast = useToast();

const save = () => {
  toast.success('Saved');
};
</script>
```

### Dialog

```vue
<script setup lang="ts">
import { useDialog } from 'nutui-uniapp';

const dialog = useDialog();

const confirmDelete = () => {
  dialog.confirm({
    title: 'Confirm',
    content: 'Delete this?',
    onOk: () => handleDelete(),
  });
};
</script>
```

## 5. Theme customization

```scss
/* uni.scss */
:root, page {
  --nut-primary-color: #fa2c19;
  --nut-primary-color-end: #fa6419;
  --nut-help-color: #f7f8fa;
  --nut-title-color: #1a1a1a;
  --nut-text-color: #666666;
  --nut-border-color: #f5f5f5;
}
```

## 6. BANNED patterns

- ❌ NEVER use NutUI Vue 3 (`@nutui/nutui`) in UniApp — it doesn't compile to MiniProgram. Use `nutui-uniapp` (or `@nutui/nutui-taro` for Taro).
- ❌ NEVER forget `page` in CSS selectors — MiniProgram root is `page`, not `body`
- ❌ NEVER rely on DOM APIs (document, window) — UniApp sandboxes MiniProgram targets
- ❌ NEVER use `v-html` with untrusted content — MiniProgram rich-text has restrictions
- ❌ NEVER hardcode `px` for fonts — use `rpx` for uniform sizing across platforms
- ❌ NEVER use tree-shaking assumption without easycom — manual imports in `<script setup>` are required otherwise
- ❌ NEVER use web-only events like `onHover` — MiniProgram lacks hover state; use `@touchstart` / `@touchend`

## 7. Pre-flight checklist

```
- [ ] UniApp + Vue 3 (not Vue 2 legacy)
- [ ] easycom configured in pages.json for nut-* prefix
- [ ] SCSS global imports set via uni.scss
- [ ] Brand color customized via CSS variables
- [ ] Mobile units use rpx (or postcss-uvue-rpx)
- [ ] Target MiniPrograms tested (at least WeChat; ideally Alipay too)
- [ ] No DOM APIs used
- [ ] Use platform-conditional comments (// #ifdef MP-WEIXIN ...) where needed
```

## 8. Common gotchas

| Symptom | Fix |
|---|---|
| Component shows but without style | Missing `@import 'nutui-uniapp/styles/index.scss'` in uni.scss |
| Easycom not auto-importing | `autoscan: true` + pattern `^nut-(.*)` matches exactly |
| `nut-popup` renders under other elements | Set `:z-index="10000"` or check target platform z-index rules |
| Form validation silently fails | Ensure `<nut-form-item prop="field">` + matching rules key |
