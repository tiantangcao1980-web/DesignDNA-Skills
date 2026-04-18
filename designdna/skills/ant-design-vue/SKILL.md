---
name: ant-design-vue
description: Ant Design Vue (antdv) — community Vue 3 port of Ant Design (20k stars, v4.x, active). Visual and API parity with React antd. For Vue 3 B2B admin apps wanting antd's design language. Covers installation, component catalog, v3 → v4 migration, on-demand imports, and theme tokens.
---

{% raw %}


# Ant Design Vue (antdv) — Vue 3 Port

> **Source**: [vueComponent/ant-design-vue](https://github.com/vueComponent/ant-design-vue) · 20k ⭐ · v4.x · 🟢 active 2026
> **NPM**: `ant-design-vue`
> **Docs**: https://antdv.com/components/overview/

## 1. When to use

- **Vue 3 desktop** admin / B2B
- Want Ant Design visual parity in a Vue project (e.g., team also has React antd elsewhere)
- Large existing community

## 2. Install

```bash
npm install ant-design-vue@4
```

```ts
// main.ts
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import App from './App.vue';

createApp(App).use(Antd).mount('#app');
```

### On-demand import

```ts
// vite.config.ts
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default {
  plugins: [
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: 'css' })],
    }),
  ],
};
```

## 3. Catalog

Same surface as React antd. Components are `<a-*>` prefixed (e.g. `<a-button>`).

Full catalog: https://antdv.com/components/overview

## 4. Usage

### Button

```vue
<template>
  <a-button type="primary" @click="save">保存</a-button>
  <a-button type="primary" danger>删除</a-button>
  <a-button type="primary" :loading="loading">提交中</a-button>
  <a-button type="primary" size="large" shape="round" block>CTA</a-button>
  <a-button type="link">链接</a-button>
</template>
```

### Form

```vue
<script setup lang="ts">
import { reactive } from 'vue';
import { message } from 'ant-design-vue';

const form = reactive({ username: '', password: '' });
const rules = {
  username: [{ required: true, message: '必填' }],
  password: [
    { required: true, message: '必填' },
    { min: 6, message: '至少 6 位' },
  ],
};

const onFinish = () => { message.success('登录成功'); };
</script>

<template>
  <a-form
    :model="form"
    :rules="rules"
    layout="vertical"
    @finish="onFinish"
  >
    <a-form-item label="用户名" name="username">
      <a-input v-model:value="form.username" />
    </a-form-item>
    <a-form-item label="密码" name="password">
      <a-input-password v-model:value="form.password" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" block>登录</a-button>
    </a-form-item>
  </a-form>
</template>
```

### Table

```vue
<script setup lang="ts">
const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '邮箱', dataIndex: 'email', key: 'email' },
  { title: '状态', dataIndex: 'status', key: 'status' },
];
</script>

<template>
  <a-table :columns="columns" :data-source="users" row-key="id">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'status'">
        <a-tag :color="record.status === 'active' ? 'success' : 'error'">{{ record.status }}</a-tag>
      </template>
    </template>
  </a-table>
</template>
```

### Modal (imperative)

```ts
import { Modal } from 'ant-design-vue';

Modal.confirm({
  title: '确认删除',
  content: '此操作不可恢复',
  okText: '删除',
  okType: 'danger',
  onOk: () => handleDelete(),
});
```

## 5. Theme

```vue
<script setup lang="ts">
import { ConfigProvider, theme } from 'ant-design-vue';
</script>

<template>
  <ConfigProvider
    :theme="{
      token: { colorPrimary: '#1890ff', borderRadius: 6 },
      algorithm: theme.darkAlgorithm,
    }"
    :locale="zhCN"
  >
    <App />
  </ConfigProvider>
</template>
```

## 6. v3 → v4 migration

- v3 used Vue 2 or early Vue 3 Composition API — v4 is Vue 3 only, fully typed
- CSS approach same as React v5 (tokens via ConfigProvider)
- Dropped components: `<Comment>`, `<PageHeader>` — use `@ant-design-vue/pro-components`

## 7. BANNED

- ❌ NEVER use v1 / v2 (Vue 2 era) — use v4 on Vue 3
- ❌ NEVER hardcode LESS variables — use ConfigProvider tokens
- ❌ NEVER import entire component library when on-demand is available
- ❌ NEVER skip `name` on `<a-form-item>` — validation binding breaks
- ❌ NEVER skip `row-key` on `<a-table>`
- ❌ NEVER mix antdv with element-plus / tdesign-vue-next — pick one
- ❌ NEVER import icons wholesale — use named imports from `@ant-design/icons-vue`

## 8. Pre-flight checklist

```
- [ ] ant-design-vue v4+ installed
- [ ] Vue 3 + Vite/Nuxt
- [ ] Auto-import via unplugin-vue-components if tree-shaking desired
- [ ] <ConfigProvider> wraps app with locale + theme
- [ ] ant-design-vue/dist/reset.css imported
- [ ] Form uses v-model, name, rules properly
- [ ] Table has row-key
- [ ] Icons from @ant-design/icons-vue with named imports
- [ ] Imperative APIs (Modal / message / notification) imported by name
```

## 9. Ecosystem notes

- **ant-design-vue-pro**: Vue 3 pro components (analog to @ant-design/pro-components React)
- **Vben Admin**: popular open-source admin template using ant-design-vue
- **AntV G2/G6**: framework-agnostic charts, works with Vue

## 10. Dial fit

Same as React antd: formality: 8-9 · motion: 3 · density: 6-7 · warmth: 4 · contrast: 6-7

{% endraw %}
