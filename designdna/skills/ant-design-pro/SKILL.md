---
name: ant-design-pro
description: Ant Design Pro — enterprise React admin scaffold + pro-components library. Scaffold (37k stars) gives a full B2B admin starter with layouts, routes, authentication, i18n. Pro-components (4k stars) provides high-level business components (ProTable, ProForm, ProLayout, ProDescriptions). Both active through 2026.
---

{% raw %}


# Ant Design Pro — React Admin Scaffold + Pro Components

> **Sources**:
> - [ant-design/ant-design-pro](https://github.com/ant-design/ant-design-pro) · 37k ⭐ · scaffold
> - [ant-design/pro-components](https://github.com/ant-design/pro-components) · 4k ⭐ · component library
>
> **Health**: 🟢 active 2026
> **Docs**: https://pro.ant.design/ · https://procomponents.ant.design/

## 1. When to use

- Building a **B2B admin / dashboard** and want a head start (auth, layout, routes, i18n all wired)
- Want `ProTable` (paginated data table with filters + actions) and `ProForm` (form abstraction over antd `Form`) — avoids writing boilerplate
- React ecosystem + Umi framework

## 2. Scaffold (new project)

```bash
# Clone a pro template
npm create @umijs/umi-app
# or directly
pro create myapp
cd myapp && npm install && npm start
```

Or TypeScript version:

```bash
yarn create umi myapp --ant-design-pro
```

## 3. Add pro-components to existing project

```bash
npm install @ant-design/pro-components
# Peer deps: antd 5+, react 18+
```

```tsx
import { ProTable, ProForm, ProFormText, ProLayout } from '@ant-design/pro-components';
```

## 4. Pro-component catalog

### Layout

| Component | Purpose |
|---|---|
| `ProLayout` | Full admin layout (header + sider + breadcrumb + content) |
| `PageContainer` | Page wrapper with auto-breadcrumb + action bar |
| `FooterToolbar` | Fixed-bottom action bar (sticky save button) |
| `WaterMark` | Background watermark |

### Data

| Component | Purpose |
|---|---|
| `ProTable` | Table with built-in filter form, pagination, CRUD actions |
| `ProList` | List view with same semantics as ProTable |
| `ProDescriptions` | Detail view (label-value layout, edit-in-place) |
| `StatisticCard` | Stat card with trends |
| `EditableProTable` | Inline-editable table |

### Form

| Component | Purpose |
|---|---|
| `ProForm` | Form with built-in submit / reset / layout modes |
| `LoginForm` | Login-page form |
| `StepsForm` | Multi-step wizard |
| `ModalForm` / `DrawerForm` | Form in modal / drawer |
| `ProFormText` / `ProFormSelect` / `ProFormDatePicker` / `ProFormDigit` / `ProFormTextArea` / `ProFormRadio` / `ProFormCheckbox` / `ProFormDependency` | Form fields with validation built-in |
| `QueryFilter` | Collapsible filter form for ProTable |
| `LightFilter` | Inline filter chips |

### Utility

| Component | Purpose |
|---|---|
| `ProCard` | Enhanced Card with tabs / gutter / split |
| `ProSkeleton` | Skeleton for pro-components |
| `BetaSchemaForm` | Schema-driven form builder |

## 5. Usage

### ProTable (most common)

```tsx
import { ProTable, ProColumns } from '@ant-design/pro-components';

interface User { id: string; name: string; status: 'active' | 'banned'; }

const columns: ProColumns<User>[] = [
  { title: '姓名', dataIndex: 'name' },
  {
    title: '状态',
    dataIndex: 'status',
    valueEnum: {
      active: { text: '启用', status: 'Success' },
      banned: { text: '禁用', status: 'Error' },
    },
  },
  {
    title: '操作',
    valueType: 'option',
    render: (_, row) => [
      <a key="edit" onClick={() => edit(row)}>编辑</a>,
      <a key="del" onClick={() => del(row)}>删除</a>,
    ],
  },
];

<ProTable<User>
  columns={columns}
  rowKey="id"
  request={async (params) => {
    const { data, total } = await api.list(params);
    return { data, total, success: true };
  }}
  pagination={{ pageSize: 20 }}
  toolBarRender={() => [
    <Button key="add" type="primary" onClick={goAdd}>新建</Button>,
  ]}
/>
```

### ProForm

```tsx
import { ProForm, ProFormText, ProFormSelect } from '@ant-design/pro-components';

<ProForm
  onFinish={async (values) => {
    await api.save(values);
    message.success('已保存');
  }}
>
  <ProFormText
    name="name"
    label="姓名"
    rules={[{ required: true, message: '必填' }]}
  />
  <ProFormSelect
    name="status"
    label="状态"
    options={[
      { label: '启用', value: 'active' },
      { label: '禁用', value: 'banned' },
    ]}
  />
</ProForm>
```

### ProLayout

```tsx
import { ProLayout } from '@ant-design/pro-components';
import { UserOutlined, TeamOutlined } from '@ant-design/icons';

<ProLayout
  title="Admin"
  logo="/logo.svg"
  route={{
    path: '/',
    routes: [
      { path: '/users', name: '用户', icon: <UserOutlined /> },
      { path: '/teams', name: '团队', icon: <TeamOutlined /> },
    ],
  }}
  menuItemRender={(item, dom) => <Link to={item.path!}>{dom}</Link>}
>
  <Outlet />
</ProLayout>
```

## 6. BANNED

- ❌ NEVER use `ProTable` without `rowKey` and typed columns `ProColumns<T>[]`
- ❌ NEVER write filter forms by hand when `ProTable.search` gives them for free
- ❌ NEVER use the scaffold template's default auth without swapping in your real auth
- ❌ NEVER mix `Form` (antd plain) and `ProForm` in the same file — pick one per form
- ❌ NEVER skip `valueEnum` — it gives you filter + render + status color for free
- ❌ NEVER start a new project on `@ant-design/pro-components` v1 — use v2+
- ❌ NEVER ignore Umi-specific features if you scaffolded from ant-design-pro — use Umi's max routing / model / request

## 7. Pre-flight checklist

```
- [ ] antd v5+ and @ant-design/pro-components v2+ installed
- [ ] Using ProLayout for admin chrome (if full scaffold)
- [ ] ProTable columns typed: ProColumns<YourType>[]
- [ ] ProTable has request() returning { data, total, success }
- [ ] Forms use ProForm and ProFormXxx fields (not raw antd Form)
- [ ] valueEnum used for status columns (filter + render in one)
- [ ] ProCard for grouped content
- [ ] Language / locale set via ConfigProvider
- [ ] Custom menu items have icons
```

## 8. Dial fit

formality: 8-9 · motion: 3 · density: 7 · warmth: 4 · contrast: 6

{% endraw %}
