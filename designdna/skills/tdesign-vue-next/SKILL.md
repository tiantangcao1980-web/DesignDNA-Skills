---
name: tdesign-vue-next
description: TDesign Vue 3 desktop component library skill — Tencent's flagship Vue 3 enterprise library (2.1k stars, active, v1.19.x). Covers 60+ desktop components for B2B admin/dashboard. Includes installation with on-demand imports, component catalog, theme customization via CSS variables, and Tencent-ecosystem integration patterns.
---

{% raw %}


# TDesign Vue Next — Vue 3 Desktop Component Library

> **Source**: [Tencent/tdesign-vue-next](https://github.com/Tencent/tdesign-vue-next) · 2.1k ⭐ · v1.19.x · 🟢 active 2026-04
> **Docs**: https://tdesign.tencent.com/vue-next/overview

## 1. When to use

- **Vue 3 desktop** admin / dashboard / B2B apps
- Tencent-ecosystem products or Tencent Cloud integrations
- Need **multi-platform design parity** (TDesign covers Vue/React/Mobile/MiniProgram/Flutter with identical visual DNA)

## 2. Install

```bash
npm install tdesign-vue-next
```

```ts
// main.ts — full registration
import { createApp } from 'vue';
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import App from './App.vue';

createApp(App).use(TDesign).mount('#app');
```

### Auto-import (recommended)

```ts
// vite.config.ts
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';

export default {
  plugins: [
    Components({
      resolvers: [TDesignResolver({ library: 'vue-next' })],
    }),
  ],
};
```

## 3. Component catalog (60+)

**Basic**: `Button` · `Icon` · `Link` · `Divider` · `Space` · `Tag` · `Avatar`

**Layout**: `Row`/`Col` · `Grid` · `Layout` · `Affix` · `BackTop`

**Navigation**: `Menu` · `Breadcrumb` · `Pagination` · `Steps` · `Tabs` · `Anchor` · `Head`

**Form**: `Form` · `Input` · `InputNumber` · `InputAdornment` · `Textarea` · `Select` · `Cascader` · `TreeSelect` · `DatePicker` · `TimePicker` · `Upload` · `Switch` · `Radio` · `Checkbox` · `Slider` · `Rate`

**Data display**: `Table` · `List` · `Tree` · `Card` · `Descriptions` · `Collapse` · `Image` · `ImageViewer` · `Statistic` · `Timeline` · `Calendar`

**Feedback**: `Alert` · `Dialog` · `Drawer` · `Loading` · `Message` · `Notification` · `Popup` · `Progress` · `Skeleton`

Full catalog: https://tdesign.tencent.com/vue-next/components/

## 4. Usage

### Button

```vue
<template>
  <t-button theme="primary" @click="save">保存</t-button>
  <t-button theme="danger" variant="outline">删除</t-button>
  <t-button theme="primary" :loading="true">提交中</t-button>
  <t-button theme="primary" size="large" shape="round">大按钮</t-button>
</template>
```

### Form with validation

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { FormRules, MessagePlugin } from 'tdesign-vue-next';

const form = ref({ name: '', email: '' });
const rules: FormRules = {
  name: [{ required: true, message: '必填', type: 'error' }],
  email: [{ email: true, message: '邮箱格式错误' }],
};

const onSubmit = ({ validateResult }: any) => {
  if (validateResult === true) MessagePlugin.success('已保存');
};
</script>

<template>
  <t-form :data="form" :rules="rules" @submit="onSubmit">
    <t-form-item label="姓名" name="name">
      <t-input v-model="form.name" />
    </t-form-item>
    <t-form-item label="邮箱" name="email">
      <t-input v-model="form.email" />
    </t-form-item>
    <t-form-item>
      <t-button theme="primary" type="submit">提交</t-button>
    </t-form-item>
  </t-form>
</template>
```

### Data table

```vue
<template>
  <t-table
    row-key="id"
    :data="list"
    :columns="[
      { colKey: 'name', title: '姓名', width: 150 },
      { colKey: 'email', title: '邮箱' },
      { colKey: 'status', title: '状态', cell: 'statusCell' },
    ]"
    :pagination="{ pageSize: 10, total: 100, current: 1 }"
    hover
    stripe
  >
    <template #statusCell="{ row }">
      <t-tag :theme="row.status === 'active' ? 'success' : 'default'">{{ row.status }}</t-tag>
    </template>
  </t-table>
</template>
```

### Dialog (imperative)

```ts
import { DialogPlugin } from 'tdesign-vue-next';

DialogPlugin.confirm({
  header: '确认删除',
  body: '此操作不可恢复',
  confirmBtn: '删除',
  cancelBtn: '取消',
  theme: 'danger',
  onConfirm: () => handleDelete(),
});
```

## 5. Theme (CSS variables)

```css
:root {
  --td-brand-color: #0052d9;              /* 主色 */
  --td-brand-color-hover: #366ef4;
  --td-brand-color-focus: #d9e1ff;
  --td-brand-color-active: #0034b5;
  --td-brand-color-disabled: #b5c7ff;

  --td-text-color-primary: rgba(0,0,0,.9);
  --td-text-color-secondary: rgba(0,0,0,.6);
  --td-text-color-placeholder: rgba(0,0,0,.3);

  --td-bg-color-page: #f3f3f3;
  --td-bg-color-container: #ffffff;

  --td-component-border: #dcdcdc;
  --td-radius-default: 3px;
}
```

Dark mode: add `theme-mode="dark"` attribute on `<html>` or use TDesign's `ConfigProvider`.

## 6. BANNED

- ❌ NEVER use `tdesign-vue` (v2) in a Vue 3 project — use `tdesign-vue-next`
- ❌ NEVER import full CSS if tree-shaking matters — use on-demand via unplugin-vue-components
- ❌ NEVER style over components with high-specificity selectors — override CSS variables instead
- ❌ NEVER mix TDesign with Element Plus / Ant Design Vue — pick one
- ❌ NEVER use the default blue `#0052d9` if the project is not Tencent-branded — override `--td-brand-color`
- ❌ NEVER skip `<t-form-item name="field">` + `:rules` — form validation depends on name binding
- ❌ NEVER call `MessagePlugin` / `DialogPlugin` from render functions — only from event handlers

## 7. Pre-flight checklist

```
- [ ] Vue 3 + vite/nuxt project (not Vue 2)
- [ ] Package: tdesign-vue-next installed
- [ ] On-demand imports configured (unplugin-vue-components + TDesignResolver)
- [ ] CSS variables overridden for brand color (if not Tencent-blue)
- [ ] Forms use <t-form-item name=... :rules=...>
- [ ] Imperative plugins (MessagePlugin, DialogPlugin, NotificationPlugin) called from handlers only
- [ ] Locale configured via ConfigProvider (default is zh-CN)
- [ ] Dark mode strategy chosen (theme-mode attr or dynamic)
```

## 8. Dial fit

formality: 7-8 · motion: 4 · density: 6 · warmth: 4 · contrast: 7

{% endraw %}
