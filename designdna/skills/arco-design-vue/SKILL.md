---
name: arco-design-vue
description: Arco Design Vue — ByteDance's Vue 3 enterprise component library (4k stars, active). Paired Vue sibling of Arco Design React. Used extensively inside ByteDance products (Lark, Feishu) — polished, commercial visual aesthetics. 60+ components, tree-shakeable, TypeScript-friendly.
---

{% raw %}


# Arco Design Vue — ByteDance Vue 3 UI

> **Source**: [arco-design/arco-design-vue](https://github.com/arco-design/arco-design-vue) · 4k ⭐ · v2.57+ · 🟢 active 2026
> **NPM**: `@arco-design/web-vue`
> **Docs**: https://arco.design/vue/docs/start

## 1. When to use

- Vue 3 projects wanting a **polished, commercial visual style** (ByteDance / Lark aesthetic)
- Teams using Arco on React elsewhere — get cross-framework consistency
- Alternative to Ant Design Vue / Element Plus for teams wanting a different look

## 2. Install

```bash
npm install @arco-design/web-vue
```

```ts
// main.ts — full
import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

createApp(App).use(ArcoVue).mount('#app');
```

### On-demand

```ts
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';

export default {
  plugins: [Components({ resolvers: [ArcoResolver({ importStyle: 'less' })] })],
};
```

## 3. Catalog (60+)

Prefix `a-*`.

**Basic**: `a-button` · `a-icon` · `a-link` · `a-typography` · `a-divider` · `a-space` · `a-tag` · `a-avatar`

**Layout**: `a-layout` · `a-grid` · `a-grid-item` · `a-affix` · `a-back-top`

**Navigation**: `a-menu` · `a-breadcrumb` · `a-pagination` · `a-steps` · `a-tabs` · `a-dropdown` · `a-anchor`

**Form**: `a-form` · `a-input` · `a-input-number` · `a-input-password` · `a-textarea` · `a-select` · `a-cascader` · `a-tree-select` · `a-date-picker` · `a-time-picker` · `a-radio` · `a-checkbox` · `a-switch` · `a-slider` · `a-rate` · `a-upload` · `a-transfer` · `a-color-picker` · `a-auto-complete`

**Data**: `a-table` · `a-tree` · `a-list` · `a-card` · `a-descriptions` · `a-collapse` · `a-timeline` · `a-calendar` · `a-empty` · `a-statistic` · `a-watermark`

**Feedback**: `a-alert` · `a-message` · `a-modal` · `a-drawer` · `a-notification` · `a-popconfirm` · `a-popover` · `a-progress` · `a-spin` · `a-skeleton`

## 4. Usage

### Button

```vue
<template>
  <a-button type="primary" @click="save">保存</a-button>
  <a-button type="outline">取消</a-button>
  <a-button type="primary" status="danger">删除</a-button>
  <a-button type="primary" :loading="loading">提交中</a-button>
  <a-button type="primary" size="large" shape="round" long>CTA</a-button>
  <a-button type="text">文本</a-button>
</template>
```

### Form

```vue
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { FormInstance, Message } from '@arco-design/web-vue';

const formRef = ref<FormInstance>();
const form = reactive({ username: '', password: '' });

const onSubmit = async () => {
  const err = await formRef.value?.validate();
  if (!err) Message.success('已保存');
};
</script>

<template>
  <a-form ref="formRef" :model="form" layout="vertical">
    <a-form-item
      field="username"
      label="用户名"
      :rules="[{ required: true, message: '必填' }]"
    >
      <a-input v-model="form.username" />
    </a-form-item>
    <a-form-item
      field="password"
      label="密码"
      :rules="[{ required: true, minLength: 6, message: '至少 6 位' }]"
    >
      <a-input-password v-model="form.password" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="onSubmit">提交</a-button>
    </a-form-item>
  </a-form>
</template>
```

### Table

```vue
<script setup lang="ts">
const columns = [
  { title: '姓名', dataIndex: 'name' },
  { title: '邮箱', dataIndex: 'email' },
  { title: '状态', dataIndex: 'status', slotName: 'statusCell' },
];
</script>

<template>
  <a-table :columns="columns" :data="users" :pagination="{ pageSize: 10 }" row-key="id">
    <template #statusCell="{ record }">
      <a-tag :color="record.status === 'active' ? 'green' : 'red'">{{ record.status }}</a-tag>
    </template>
  </a-table>
</template>
```

### Modal

```ts
import { Modal } from '@arco-design/web-vue';

Modal.confirm({
  title: '确认删除',
  content: '此操作不可恢复',
  okText: '删除',
  okButtonProps: { status: 'danger' },
  onOk: () => handleDelete(),
});
```

## 5. Theme

### CSS variables

```css
:root {
  --color-primary-6: #165DFF;
  --color-primary-5: #4080FF;
  --color-primary-7: #0E42D2;

  --color-border-1: #e5e6eb;
  --color-bg-2: #ffffff;
  --color-text-1: #1d2129;
  --color-text-2: #4e5969;
}
```

### Dark mode

```js
// Toggle data-theme on body
document.body.setAttribute('arco-theme', 'dark');
```

### Locale

```ts
import enUS from '@arco-design/web-vue/es/locale/lang/en-us';
import { ConfigProvider } from '@arco-design/web-vue';

<a-config-provider :locale="enUS">
  <App />
</a-config-provider>
```

## 6. BANNED

- ❌ NEVER confuse `@arco-design/web-vue` (Vue 3) with `@arco-design/web-react` (React) — different packages
- ❌ NEVER use Arco v1 (alpha) — use v2+
- ❌ NEVER skip `field` prop on `<a-form-item>` — validation depends on it
- ❌ NEVER skip `row-key` on `<a-table>`
- ❌ NEVER use `status="danger"` on non-delete buttons — semantic mismatch
- ❌ NEVER style internals with `.arco-btn__*` selectors — use CSS variables
- ❌ NEVER mix Arco Vue with Ant Design Vue / Element Plus / TDesign Vue Next

## 7. Pre-flight checklist

```
- [ ] Vue 3 + @arco-design/web-vue v2.57+
- [ ] Auto-import or full-registration configured
- [ ] Dark mode attribute handler implemented if dual-theme
- [ ] Locale set via <a-config-provider>
- [ ] Forms use field="..." + :rules
- [ ] Tables have row-key
- [ ] Brand color overridden if not ByteDance-blue (--color-primary-6)
- [ ] Imperative APIs (Message, Modal, Notification) imported by name
```

## 8. Dial fit

formality: 7-8 · motion: 4 · density: 6 · warmth: 4 · contrast: 6

{% endraw %}
