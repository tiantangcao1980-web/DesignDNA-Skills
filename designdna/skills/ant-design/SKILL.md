---
name: ant-design
description: Ant Design (antd) React component library skill — Alibaba's flagship enterprise React UI (93k stars, v5.x, active). The de-facto standard for B2B admin/dashboard in China and widely used globally. Covers 60+ components with Form / Table / ProComponents patterns, CSS-in-JS theming, dark mode, and v4 → v5 migration notes.
---

# Ant Design (antd) — React Enterprise UI

> **Source**: [ant-design/ant-design](https://github.com/ant-design/ant-design) · 93k ⭐ · v5.x · 🟢 active 2026
> **NPM**: `antd`
> **Docs**: https://ant.design/components/overview-cn/

## 1. When to use

- **React 18/19 desktop** admin / dashboard / B2B
- Need the **largest React ecosystem** (biggest community, most integrations)
- Working with Alibaba Cloud / Ant Group / Chinese enterprise context
- Want mature `Form`, `Table`, `Tree`, `Select` out of the box

## 2. Install

```bash
npm install antd
```

```tsx
// App.tsx
import { Button, ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';  // Global reset + defaults

<ConfigProvider locale={zhCN}>
  <App />
</ConfigProvider>
```

### Next.js App Router

```tsx
// app/layout.tsx
import { AntdRegistry } from '@ant-design/nextjs-registry';
import 'antd/dist/reset.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
```

## 3. Catalog (60+)

**General**: `Button` · `Icon` · `Typography` (Text/Title/Paragraph) · `Divider`

**Layout**: `Layout` (Header/Sider/Content/Footer) · `Grid` (Row/Col) · `Space` · `Flex`

**Navigation**: `Menu` · `Breadcrumb` · `Pagination` · `Steps` · `Tabs` · `Dropdown` · `Anchor`

**Data entry**: `Form` · `Input` · `InputNumber` · `Select` · `Checkbox` · `Radio` · `Switch` · `Slider` · `Rate` · `Cascader` · `TreeSelect` · `DatePicker` · `TimePicker` · `Upload` · `Mentions` · `AutoComplete` · `ColorPicker`

**Data display**: `Table` · `List` · `Card` · `Descriptions` · `Empty` · `Statistic` · `Tree` · `Timeline` · `Tag` · `Badge` · `Image` · `Avatar` · `Collapse` · `Calendar` · `Tour`

**Feedback**: `Alert` · `Modal` · `Message` · `Notification` · `Progress` · `Spin` · `Skeleton` · `Result` · `Popconfirm`

Full catalog: https://ant.design/components/overview/

## 4. Usage

### Button

```tsx
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

<Button type="primary" onClick={save}>保存</Button>
<Button type="default">取消</Button>
<Button type="primary" danger icon={<DeleteOutlined />}>删除</Button>
<Button type="primary" loading>提交中</Button>
<Button type="primary" size="large" shape="round" block>CTA</Button>
<Button type="link">链接按钮</Button>
<Button type="text">文本按钮</Button>
```

### Form (with v5 hooks API)

```tsx
import { Form, Input, Button, message } from 'antd';

function LoginForm() {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    await api.login(values);
    message.success('登录成功');
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      requiredMark={false}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '必填' }]}
      >
        <Input placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[
          { required: true, message: '必填' },
          { min: 6, message: '至少 6 位' },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>登录</Button>
      </Form.Item>
    </Form>
  );
}
```

### Table

```tsx
import { Table, Tag, Space, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface User { id: string; name: string; email: string; status: 'active' | 'banned'; }

const columns: ColumnsType<User> = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '邮箱', dataIndex: 'email', key: 'email' },
  {
    title: '状态',
    dataIndex: 'status',
    render: (s) => <Tag color={s === 'active' ? 'success' : 'error'}>{s}</Tag>,
  },
  {
    title: '操作',
    key: 'actions',
    render: (_, row) => (
      <Space>
        <Button type="link" onClick={() => edit(row)}>编辑</Button>
        <Button type="link" danger onClick={() => del(row)}>删除</Button>
      </Space>
    ),
  },
];

<Table<User> columns={columns} dataSource={users} rowKey="id" />
```

### Modal (imperative)

```tsx
import { Modal } from 'antd';

Modal.confirm({
  title: '确认删除',
  content: '此操作不可恢复',
  okText: '删除',
  okType: 'danger',
  cancelText: '取消',
  onOk: () => handleDelete(),
});
```

Or use App context (v5 recommended for theme consistency):

```tsx
import { App } from 'antd';

function MyComponent() {
  const { modal } = App.useApp();
  const confirm = () => modal.confirm({ title: '...' });
  return <Button onClick={confirm}>删除</Button>;
}

// App root:
<App>
  <MyComponent />
</App>
```

## 5. Theme (v5 token-based)

```tsx
import { ConfigProvider } from 'antd';

<ConfigProvider
  theme={{
    token: {
      colorPrimary: '#1890ff',
      borderRadius: 6,
      fontFamily: 'Inter, system-ui',
    },
    components: {
      Button: { borderRadius: 4 },
      Table: { headerBg: '#fafafa' },
    },
  }}
>
  <App />
</ConfigProvider>
```

### Dark mode

```tsx
import { ConfigProvider, theme } from 'antd';

<ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
  <App />
</ConfigProvider>
```

## 6. v4 → v5 breaking changes (migration)

| v4 | v5 |
|---|---|
| LESS variables | JS token API (`ConfigProvider.theme`) |
| `antd/dist/antd.css` | `antd/dist/reset.css` |
| `Modal.confirm` standalone | Can use `App.useApp()` for hook-style |
| `<Comment>`, `<PageHeader>` | Removed (use `@ant-design/pro-components`) |
| `message.*` standalone | Also available via `App.useApp()` |

## 7. BANNED

- ❌ NEVER import full CSS if tree-shaking is set up — v5 uses CSS-in-JS, just import `reset.css`
- ❌ NEVER use v4 LESS customization on v5 — tokens are the new way
- ❌ NEVER use `<Comment>` or `<PageHeader>` — removed in v5
- ❌ NEVER mix antd with MUI / Chakra / TDesign in the same project
- ❌ NEVER skip `<ConfigProvider>` for locale — defaults to English
- ❌ NEVER call `Modal.confirm` / `message.success` without `App` wrapper if you need theme consistency — use `App.useApp()`
- ❌ NEVER use `<Table>` without `rowKey` — React key warnings + broken selection
- ❌ NEVER hardcode colors — use theme tokens (`token.colorPrimary`, etc.)
- ❌ NEVER use `@ant-design/icons` import without individual named imports — `import { HomeOutlined } from '@ant-design/icons'`

## 8. Pre-flight checklist

```
- [ ] antd v5+ installed (not v4)
- [ ] ConfigProvider wraps the app with locale + theme
- [ ] antd/dist/reset.css imported (not antd.css)
- [ ] For Next.js: AntdRegistry wrapper in layout
- [ ] Theme tokens customized (not inline styles)
- [ ] Dark mode algorithm configured if needed
- [ ] Form uses Form.useForm() + Form.Item rules
- [ ] Table has rowKey and typed columns (ColumnsType<T>)
- [ ] Imperative APIs called via App.useApp() for theme consistency
- [ ] Icons imported individually
```

## 9. Ecosystem

- **`@ant-design/pro-components`** — high-level business components (`ProTable`, `ProForm`, `ProLayout`) — see `ant-design-pro` skill
- **`@ant-design/x`** — AI conversation UI — see `ant-design-x` skill
- **`@ant-design/charts`** — data viz — see `antv` skill
- **`@formily/react`** — complex dynamic forms
- **`ahooks`** — React hooks utility library
- **`umi`** — enterprise React framework

## 10. Dial fit

formality: 8-9 · motion: 3-4 · density: 6-7 · warmth: 4-5 · contrast: 6-7
