---
name: tdesign-mobile
description: TDesign Mobile component libraries for Vue 3 and React — Tencent's mobile H5 component libraries (tdesign-mobile-vue 410⭐ + tdesign-mobile-react 96⭐, both active). Covers mobile-optimized components (Tabbar, NavBar, ActionSheet, SwipeCell, etc.) with responsive sizing and iOS/Android-adaptive styling.
---

# TDesign Mobile — Vue 3 & React Mobile H5

> **Sources**:
> - [Tencent/tdesign-mobile-vue](https://github.com/Tencent/tdesign-mobile-vue) · 410 ⭐ · 🟢 active (mature)
> - [Tencent/tdesign-mobile-react](https://github.com/Tencent/tdesign-mobile-react) · 96 ⭐ · 🟢 active (emerging)
>
> **Docs**:
> - https://tdesign.tencent.com/mobile-vue/overview
> - https://tdesign.tencent.com/mobile-react/components/button

## 1. When to use

- **Mobile web / H5** (not MiniProgram — use `tdesign-miniprogram` for that)
- Vue 3 or React project targeting mobile browsers
- Want cross-platform design parity with TDesign Desktop

## 2. Install

### Vue 3

```bash
npm install tdesign-mobile-vue
```

```ts
import { createApp } from 'vue';
import TDesignMobile from 'tdesign-mobile-vue';
import 'tdesign-mobile-vue/es/style/index.css';

createApp(App).use(TDesignMobile).mount('#app');
```

### React

```bash
npm install tdesign-mobile-react
```

```tsx
import 'tdesign-mobile-react/es/style/index.css';
import { Button } from 'tdesign-mobile-react';
```

### Required viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">
```

## 3. Component catalog

**Basic**: `Button` · `Cell` · `CellGroup` · `Tag` · `Avatar` · `Image` · `Grid` · `Divider`

**Navigation**: `NavBar` · `Tabbar` · `TabbarItem` · `Tabs` · `Steps` · `Sticky` · `BackTop`

**Form**: `Form` · `Input` · `Textarea` · `Radio` · `Checkbox` · `Switch` · `Stepper` · `Picker` · `DateTimePicker` · `Slider` · `Rate` · `Search` · `Upload` · `Cascader`

**Data**: `Swiper` · `SwipeCell` · `Collapse` · `IndexBar` · `Rate` · `Badge` · `Progress` · `Skeleton`

**Feedback**: `Dialog` · `ActionSheet` · `Popup` · `Toast` · `Message` · `Notify` · `Loading` · `PullDownRefresh`

Full catalog: https://tdesign.tencent.com/mobile-vue/components/button

## 4. Usage (Vue 3)

### Button

```vue
<template>
  <t-button theme="primary" @click="save">保存</t-button>
  <t-button theme="primary" shape="round" block>Block CTA</t-button>
  <t-button theme="danger" variant="outline">删除</t-button>
</template>
```

### Cell list

```vue
<template>
  <t-cell-group title="设置">
    <t-cell title="个人资料" arrow @click="goProfile" />
    <t-cell title="通知" note="开启">
      <template #rightIcon>
        <t-switch v-model="notif" />
      </template>
    </t-cell>
    <t-cell title="注销" arrow theme="danger" @click="logout" />
  </t-cell-group>
</template>
```

### Tabbar (bottom nav)

```vue
<template>
  <t-tabbar v-model="active" fixed safe-area-inset-bottom>
    <t-tabbar-item icon="home" value="home">首页</t-tabbar-item>
    <t-tabbar-item icon="discover" value="discover">发现</t-tabbar-item>
    <t-tabbar-item icon="app" value="app">应用</t-tabbar-item>
    <t-tabbar-item icon="user" value="user">我的</t-tabbar-item>
  </t-tabbar>
</template>
```

### Swipe cell (swipe-to-reveal)

```vue
<template>
  <t-swipe-cell>
    <t-cell title="项目 A" />
    <template #right>
      <t-button theme="danger" shape="square">删除</t-button>
    </template>
  </t-swipe-cell>
</template>
```

### Picker

```vue
<template>
  <t-picker
    v-model:value="selected"
    :columns="[[{label: '北京', value: 'bj'}, {label: '上海', value: 'sh'}]]"
    title="选择城市"
    confirm-btn="确认"
    cancel-btn="取消"
  />
</template>
```

### Usage (React) — Button

```tsx
import { Button } from 'tdesign-mobile-react';

<Button theme="primary" onClick={save}>保存</Button>
<Button theme="primary" shape="round" block>Block CTA</Button>
```

## 5. Theme (CSS variables)

```css
:root {
  --td-brand-color: #0052d9;
  --td-brand-color-disabled: #b5c7ff;
  --td-font-size-m: 14px;
  --td-radius-default: 6px;
  --td-safe-area-bottom: env(safe-area-inset-bottom);
}
```

## 6. BANNED

- ❌ NEVER use the desktop `tdesign-vue-next` for mobile — layouts don't adapt to narrow screens. Use `tdesign-mobile-vue`.
- ❌ NEVER skip the `<meta viewport>` tag
- ❌ NEVER hardcode `px` for font sizes — use `vw` / `rem` with scaling or use TDesign's tokens
- ❌ NEVER omit `safe-area-inset-bottom` on `<Tabbar fixed>` — iOS home-indicator overlap
- ❌ NEVER nest `<Swiper>` inside a scroll container without `touch-action` config
- ❌ NEVER use React mobile + Vue mobile in the same project
- ❌ NEVER style components with high-specificity selectors — override CSS variables

## 7. Pre-flight checklist

```
- [ ] Chose the right package: mobile-vue for Vue, mobile-react for React
- [ ] Viewport meta tag set
- [ ] safe-area-inset applied to fixed-bottom components
- [ ] Using mobile variants (not desktop)
- [ ] Tested on physical device at common widths (375px, 390px, 414px)
- [ ] Brand color overridden if not Tencent-blue
- [ ] Tabbar items have fixed icons (not dynamic emoji)
- [ ] Pull-to-refresh / infinite-scroll tested on real touch
```

## 8. Dial fit

formality: 5 · motion: 5 · density: 4 · warmth: 5 · contrast: 6
