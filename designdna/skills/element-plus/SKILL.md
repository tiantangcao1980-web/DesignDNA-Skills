---
name: element-plus
description: Element Plus — Vue 3 flagship desktop component library from Eleme/Ele.me (26k stars, active). Chinese-localized, mature, most-used Vue 3 B2B admin library in China. Covers 60+ components with full Vue 3 Composition API, theme tokens, and SFC-optimized imports.
---

{% raw %}


# Element Plus — Vue 3 Desktop

> **Source**: [element-plus/element-plus](https://github.com/element-plus/element-plus) · 26k ⭐ · v2.9+ · 🟢 active 2026
> **NPM**: `element-plus`
> **Docs**: https://element-plus.org/

## 1. When to use

- **Vue 3 desktop** admin / B2B
- Chinese-first projects (docs localized, community thriving in CN)
- Prefer "classic" visual language (soft, pastel, traditional admin look)

## 2. Install

```bash
npm install element-plus
```

```ts
// main.ts — full
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

createApp(App).use(ElementPlus, { locale: zhCn }).mount('#app');
```

### Auto-import

```ts
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default {
  plugins: [
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] }),
  ],
};
```

## 3. Catalog

Prefix: `el-*`.

**Basic**: `el-button` · `el-icon` · `el-link` · `el-space` · `el-tag` · `el-avatar` · `el-divider`

**Layout**: `el-container` · `el-header` · `el-aside` · `el-main` · `el-footer` · `el-row` / `el-col`

**Navigation**: `el-menu` · `el-breadcrumb` · `el-pagination` · `el-steps` · `el-tabs` · `el-backtop` · `el-anchor`

**Form**: `el-form` · `el-form-item` · `el-input` · `el-input-number` · `el-select` · `el-option` · `el-checkbox` · `el-radio` · `el-switch` · `el-cascader` · `el-date-picker` · `el-time-picker` · `el-upload` · `el-slider` · `el-rate` · `el-color-picker` · `el-transfer`

**Data**: `el-table` · `el-tree` · `el-tree-select` · `el-card` · `el-descriptions` · `el-collapse` · `el-timeline` · `el-calendar` · `el-image` · `el-empty` · `el-statistic`

**Feedback**: `el-alert` · `el-dialog` · `el-drawer` · `el-message` · `el-message-box` · `el-notification` · `el-loading` · `el-popconfirm` · `el-popover` · `el-tooltip`

## 4. Usage

### Button

```vue
<template>
  <el-button type="primary" @click="save">保存</el-button>
  <el-button type="danger" plain>删除</el-button>
  <el-button type="primary" :loading="loading">提交中</el-button>
  <el-button type="primary" size="large" round>大按钮</el-button>
  <el-button link>链接</el-button>
</template>
```

### Form

```vue
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { FormInstance, FormRules, ElMessage } from 'element-plus';

const formRef = ref<FormInstance>();
const form = reactive({ username: '', password: '' });
const rules: FormRules = {
  username: [{ required: true, message: '必填', trigger: 'blur' }],
  password: [
    { required: true, message: '必填', trigger: 'blur' },
    { min: 6, message: '至少 6 位', trigger: 'blur' },
  ],
};

const onSubmit = async () => {
  await formRef.value?.validate();
  ElMessage.success('已保存');
};
</script>

<template>
  <el-form ref="formRef" :model="form" :rules="rules" label-width="80">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" type="password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>
```

### Table

```vue
<script setup lang="ts">
import { ElTag } from 'element-plus';

const users = [
  { id: 1, name: 'Alice', email: 'a@x.com', status: 'active' },
  { id: 2, name: 'Bob', email: 'b@x.com', status: 'banned' },
];
</script>

<template>
  <el-table :data="users" row-key="id" stripe>
    <el-table-column prop="name" label="姓名" width="150" />
    <el-table-column prop="email" label="邮箱" />
    <el-table-column prop="status" label="状态" width="120">
      <template #default="{ row }">
        <el-tag :type="row.status === 'active' ? 'success' : 'danger'">{{ row.status }}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>
```

### Message box

```ts
import { ElMessageBox } from 'element-plus';

ElMessageBox.confirm('确认删除？', '警告', {
  confirmButtonText: '删除',
  cancelButtonText: '取消',
  type: 'warning',
}).then(() => handleDelete());
```

## 5. Theme

### CSS variables (preferred)

```css
:root {
  --el-color-primary: #409eff;
  --el-color-success: #67c23a;
  --el-color-warning: #e6a23c;
  --el-color-danger:  #f56c6c;
  --el-color-info:    #909399;

  --el-text-color-primary:    #303133;
  --el-text-color-regular:    #606266;
  --el-border-radius-base:    4px;
  --el-font-size-base:        14px;
}
```

### Dark mode

```html
<!-- Toggle on html element -->
<html class="dark">
```

Plus import `import 'element-plus/theme-chalk/dark/css-vars.css';`

## 6. BANNED

- ❌ NEVER use Element UI (legacy v2, Vue 2) — use Element Plus (v2 = Vue 3)
- ❌ NEVER skip locale config — defaults differ by component
- ❌ NEVER omit `prop` on `<el-form-item>` — form validation needs it
- ❌ NEVER use `<el-button>` without `type=...` when it's an action — creates visual inconsistency
- ❌ NEVER hardcode `#409EFF` primary — override `--el-color-primary`
- ❌ NEVER style internals with high-specificity (e.g. `.el-input__inner`) — use CSS variables
- ❌ NEVER mix Element Plus with Ant Design Vue / TDesign Vue — pick one

## 7. Pre-flight checklist

```
- [ ] Vue 3 + element-plus v2.9+
- [ ] Auto-import configured via unplugin-auto-import / unplugin-vue-components
- [ ] Locale set (zh-cn / en)
- [ ] Theme primary color customized via CSS variable
- [ ] Dark mode CSS imported if supported
- [ ] Form uses prop on <el-form-item> for validation
- [ ] Table has row-key
- [ ] Imperative APIs (ElMessage / ElMessageBox / ElNotification) imported by name
```

## 8. Dial fit

formality: 7 · motion: 3 · density: 6 · warmth: 5 · contrast: 5

## 9. Related

- **soybean-admin** / **Vue Element Admin** — popular admin scaffolds built on Element Plus
- Alternative in same niche: Ant Design Vue (see skill), Naive UI, TDesign Vue Next, Arco Design Vue

{% endraw %}
