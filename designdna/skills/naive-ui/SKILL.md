---
name: naive-ui
description: Naive UI — modern TypeScript-first Vue 3 component library (17k stars, active, endorsed by Evan You). No CSS file to import (CSS-in-JS), full TS types, flexible theming via JS config. 80+ components. Best for Vue 3 teams wanting typed API and modern-flexible theming without CSS overhead.
---

# Naive UI — Vue 3 TypeScript-First

> **Source**: [tusen-ai/naive-ui](https://github.com/tusen-ai/naive-ui) · 17k ⭐ · v2.40+ · 🟢 active 2026
> **NPM**: `naive-ui`
> **Docs**: https://www.naiveui.com/

## 1. When to use

- Vue 3 projects valuing **TypeScript-first** API and rich type coverage
- Want **JS-based theming** (no CSS variable overrides)
- Prefer **flexible modern design** (not as dense as antd, not as classic as Element Plus)
- Endorsed by Evan You himself

## 2. Install

```bash
npm install naive-ui
```

```ts
// main.ts — no CSS import needed (CSS-in-JS)
import { createApp } from 'vue';
import naive from 'naive-ui';
import App from './App.vue';

createApp(App).use(naive).mount('#app');
```

### Auto-import (recommended, full tree-shaking)

```ts
// vite.config.ts
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

export default {
  plugins: [
    Components({ resolvers: [NaiveUiResolver()] }),
  ],
};
```

### Font setup

Naive UI uses Inter by default. Install optional fonts:

```ts
// main.ts
import 'vfonts/Lato.css';          // Sans
import 'vfonts/FiraCode.css';       // Mono
```

## 3. Catalog (80+)

Components prefixed `n-*`.

**Basic**: `n-button` · `n-icon` · `n-divider` · `n-space` · `n-tag` · `n-avatar`

**Layout**: `n-layout` · `n-grid` / `n-grid-item` · `n-row` / `n-col` · `n-scrollbar`

**Navigation**: `n-menu` · `n-breadcrumb` · `n-pagination` · `n-steps` · `n-tabs` · `n-dropdown` · `n-anchor` · `n-back-top`

**Form**: `n-form` · `n-form-item` · `n-input` · `n-input-number` · `n-select` · `n-cascader` · `n-date-picker` · `n-time-picker` · `n-radio` · `n-checkbox` · `n-switch` · `n-slider` · `n-rate` · `n-upload` · `n-color-picker` · `n-transfer` · `n-mention`

**Data display**: `n-data-table` · `n-tree` · `n-tree-select` · `n-card` · `n-descriptions` · `n-collapse` · `n-timeline` · `n-calendar` · `n-image` · `n-empty` · `n-statistic` · `n-thing` · `n-result`

**Feedback**: `n-alert` · `n-dialog` · `n-drawer` · `n-modal` · `n-message` · `n-notification` · `n-popover` · `n-popconfirm` · `n-loading-bar` · `n-spin` · `n-tooltip`

## 4. Usage

### Button

```vue
<template>
  <n-button type="primary" @click="save">保存</n-button>
  <n-button type="error" ghost>删除</n-button>
  <n-button type="primary" :loading="loading">提交中</n-button>
  <n-button type="primary" size="large" round block>CTA</n-button>
  <n-button text>链接</n-button>
</template>
```

### Form

```vue
<script setup lang="ts">
import { ref } from 'vue';
import type { FormInst, FormRules } from 'naive-ui';
import { useMessage } from 'naive-ui';

const formRef = ref<FormInst | null>(null);
const form = ref({ username: '', password: '' });
const rules: FormRules = {
  username: { required: true, message: '必填', trigger: 'blur' },
  password: { required: true, min: 6, message: '至少 6 位', trigger: 'blur' },
};

const message = useMessage();

const onSubmit = () => {
  formRef.value?.validate((errors) => {
    if (!errors) message.success('已保存');
  });
};
</script>

<template>
  <n-form ref="formRef" :model="form" :rules="rules" label-placement="left" label-width="80">
    <n-form-item label="用户名" path="username">
      <n-input v-model:value="form.username" />
    </n-form-item>
    <n-form-item label="密码" path="password">
      <n-input v-model:value="form.password" type="password" show-password-on="click" />
    </n-form-item>
    <n-form-item>
      <n-button type="primary" @click="onSubmit">提交</n-button>
    </n-form-item>
  </n-form>
</template>
```

### DataTable

```vue
<script setup lang="ts">
import { h } from 'vue';
import type { DataTableColumns } from 'naive-ui';
import { NTag } from 'naive-ui';

interface User { id: string; name: string; status: 'active' | 'banned' }

const columns: DataTableColumns<User> = [
  { title: '姓名', key: 'name' },
  { title: '邮箱', key: 'email' },
  {
    title: '状态',
    key: 'status',
    render: (row) => h(NTag, { type: row.status === 'active' ? 'success' : 'error' }, { default: () => row.status }),
  },
];
</script>

<template>
  <n-data-table :columns="columns" :data="users" :row-key="(r) => r.id" striped />
</template>
```

### Message / Dialog (via providers)

```vue
<!-- App.vue — wrap providers -->
<template>
  <n-message-provider>
    <n-dialog-provider>
      <n-notification-provider>
        <RouterView />
      </n-notification-provider>
    </n-dialog-provider>
  </n-message-provider>
</template>
```

```vue
<script setup>
import { useDialog, useMessage, useNotification } from 'naive-ui';

const dialog = useDialog();
const message = useMessage();

const confirmDelete = () => {
  dialog.warning({
    title: '确认删除',
    content: '此操作不可恢复',
    positiveText: '删除',
    negativeText: '取消',
    onPositiveClick: () => message.success('已删除'),
  });
};
</script>
```

## 5. Theme (JS-based)

```vue
<script setup>
import { darkTheme, type GlobalThemeOverrides } from 'naive-ui';

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#6366f1',
    primaryColorHover: '#818cf8',
    primaryColorPressed: '#4f46e5',
    borderRadius: '6px',
  },
  Button: {
    textColor: '#ffffff',
  },
};

// Light:
<n-config-provider :theme-overrides="themeOverrides" />
// Dark:
<n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides" />
</script>
```

## 6. BANNED

- ❌ NEVER import CSS file — Naive UI has no CSS file. You don't need to import one.
- ❌ NEVER use v-model on `<n-input>` — use `:value` + `@update:value` OR `v-model:value`
- ❌ NEVER use Naive Icons without setting the Icon provider context
- ❌ NEVER skip provider wrappers (`<n-message-provider>`, `<n-dialog-provider>`) — hooks fail without them
- ❌ NEVER use `<n-data-table>` without `rowKey` function — selection / expand won't persist
- ❌ NEVER style with global `.n-button__xxx` selectors — use theme overrides
- ❌ NEVER mix Naive with Element Plus / Ant Design Vue — pick one

## 7. Pre-flight checklist

```
- [ ] Vue 3 + naive-ui installed
- [ ] NO CSS file import
- [ ] Providers wrapping root: n-config-provider + n-message-provider + n-dialog-provider
- [ ] Theme overrides configured via :theme-overrides
- [ ] Forms use path="field" (not prop=)
- [ ] DataTable has :row-key function
- [ ] Imperative APIs via hooks: useMessage(), useDialog(), useNotification()
- [ ] Font setup if you want custom typefaces (vfonts or similar)
```

## 8. Dial fit

formality: 6-7 · motion: 4 · density: 5 · warmth: 4 · contrast: 7
