---
name: tdesign-react
description: TDesign React desktop component library skill — Tencent's React 16-18 enterprise library (943 stars, active). Covers 60+ desktop components for B2B admin/dashboard. Includes installation, component catalog, theme customization via CSS variables, and Next.js SSR setup.
---

{% raw %}


# TDesign React — React Desktop Component Library

> **Source**: [Tencent/tdesign-react](https://github.com/Tencent/tdesign-react) · 943 ⭐ · 🟢 active 2026-04
> **Docs**: https://tdesign.tencent.com/react/overview

## 1. When to use

- **React 16-18 desktop** admin / dashboard
- Tencent-ecosystem products
- Projects that also use TDesign on mobile/MiniProgram/Flutter (design parity)

## 2. Install

```bash
npm install tdesign-react
```

```tsx
// Root
import 'tdesign-react/es/style/index.css';
import { Button } from 'tdesign-react';
```

### Next.js

```tsx
// app/layout.tsx (App Router)
import 'tdesign-react/es/style/index.css';
```

### On-demand (babel-plugin-import)

```json
{
  "plugins": [
    ["import", { "libraryName": "tdesign-react", "libraryDirectory": "es", "style": true }]
  ]
}
```

## 3. Component catalog (60+)

Same surface as `tdesign-vue-next`. Notable React-specific conveniences:

- **Form**: `Form.FormItem` with render-prop style validation
- **Table**: `PrimaryTable` (controlled) / `BaseTable` (uncontrolled)
- **Message / Notification / Dialog**: imperative `message.success()`, `notification.info()`, `Dialog.confirm()`

## 4. Usage

### Button

```tsx
import { Button } from 'tdesign-react';

<Button theme="primary" onClick={save}>保存</Button>
<Button theme="danger" variant="outline">删除</Button>
<Button theme="primary" loading>提交中</Button>
<Button theme="primary" size="large" shape="round">大按钮</Button>
```

### Form

```tsx
import { Form, Input, Button, MessagePlugin } from 'tdesign-react';
const { FormItem } = Form;

function LoginForm() {
  const [form] = Form.useForm();

  const onSubmit = ({ validateResult }: any) => {
    if (validateResult === true) MessagePlugin.success('已保存');
  };

  return (
    <Form form={form} onSubmit={onSubmit} labelWidth={100}>
      <FormItem label="用户名" name="username" rules={[{ required: true, message: '必填' }]}>
        <Input placeholder="请输入" />
      </FormItem>
      <FormItem label="邮箱" name="email" rules={[{ email: true, message: '格式错误' }]}>
        <Input />
      </FormItem>
      <FormItem>
        <Button theme="primary" type="submit">提交</Button>
      </FormItem>
    </Form>
  );
}
```

### Table

```tsx
import { Table, Tag } from 'tdesign-react';

<Table
  rowKey="id"
  data={list}
  columns={[
    { colKey: 'name', title: '姓名', width: 150 },
    { colKey: 'email', title: '邮箱' },
    {
      colKey: 'status',
      title: '状态',
      cell: ({ row }) => (
        <Tag theme={row.status === 'active' ? 'success' : 'default'}>{row.status}</Tag>
      ),
    },
  ]}
  pagination={{ pageSize: 10, total: 100, current: 1 }}
  hover
  stripe
/>
```

### Dialog (imperative)

```tsx
import { Dialog } from 'tdesign-react';

Dialog.confirm({
  header: '确认删除',
  body: '此操作不可恢复',
  theme: 'danger',
  onConfirm: () => handleDelete(),
});
```

## 5. Theme

Same CSS variables as tdesign-vue-next (see that skill). Apply at `:root` or with `ConfigProvider`:

```tsx
import { ConfigProvider } from 'tdesign-react';
import zhCN from 'tdesign-react/es/locale/zh_CN';
import enUS from 'tdesign-react/es/locale/en_US';

<ConfigProvider globalConfig={zhCN}>
  <App />
</ConfigProvider>
```

## 6. BANNED

- ❌ NEVER use React 15 or earlier — TDesign React requires React 16+
- ❌ NEVER import full CSS in component files — import once at root
- ❌ NEVER mix TDesign React with Ant Design or MUI — pick one
- ❌ NEVER call imperative APIs (`Dialog.confirm`, `MessagePlugin.success`) from render bodies — only from handlers or effects
- ❌ NEVER use default Tencent-blue if the brand isn't Tencent — override `--td-brand-color`
- ❌ NEVER forget `rowKey` on `<Table>` — React needs stable keys

## 7. Pre-flight checklist

```
- [ ] React 16+ installed
- [ ] tdesign-react installed
- [ ] CSS imported once at app root
- [ ] Brand color overridden if not Tencent-blue
- [ ] <Form> uses form instance + FormItem with name + rules
- [ ] <Table> has rowKey prop
- [ ] Imperative APIs used from handlers only
- [ ] For Next.js: CSS imported in layout.tsx
```

## 8. Dial fit

formality: 7-8 · motion: 4 · density: 6 · warmth: 4 · contrast: 7

{% endraw %}
