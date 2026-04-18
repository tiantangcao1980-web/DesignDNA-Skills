---
name: nutui-react
description: NutUI React v3 component library skill — JD's mobile-first React component library (1.2k stars, active). Covers 70+ components across basics, forms, feedback, layout, e-commerce. Works with plain React, Next.js, and Taro + React. Includes installation, component reference, theme tokens, on-demand imports, and Taro integration patterns.
---

{% raw %}


# NutUI React — JD Mobile React Library

> **Source**: [jdf2e/nutui-react](https://github.com/jdf2e/nutui-react) · 1.2k stars · 2026-04 active · v3.0.18
> **Health**: 🟢 active — the recommended React mobile library for Taro 4.x and standalone React apps
> **Docs**: https://nutui.jd.com/h5/react/3x/#/zh-CN/guide/intro

## 1. When to use

- **Taro 4.x + React** MiniPrograms (primary use case)
- **React mobile H5** apps (Vite, Next.js mobile)
- **E-commerce** or **retail** apps with a JD-like visual DNA
- Use alongside `taro/SKILL.md` for Taro project setup

## 2. Installation

### Plain React / Vite

```bash
npm install @nutui/nutui-react
```

```tsx
// src/App.tsx
import { Button, Cell, Tabs } from '@nutui/nutui-react';
import '@nutui/nutui-react/dist/style.css';  // Full styles

export default function App() {
  return <Button type="primary">Click</Button>;
}
```

### Next.js (SSR-friendly)

```tsx
// app/layout.tsx
import '@nutui/nutui-react/dist/style.css';
```

### Taro 4.x + React

```bash
npm install @nutui/nutui-react-taro
```

```tsx
import { Button } from '@nutui/nutui-react-taro';
import '@nutui/nutui-react-taro/dist/style.css';
```

### Auto-import / tree-shake

With **babel-plugin-import**:

```json
// babel.config.json
{
  "plugins": [
    ["import", { "libraryName": "@nutui/nutui-react", "style": true }]
  ]
}
```

Now `import { Button } from '@nutui/nutui-react'` only loads Button + its CSS.

## 3. Component catalog

### Basic

| Component | Purpose |
|---|---|
| `Button` | type=primary/info/warning/danger/success |
| `Cell` / `CellGroup` | List row with title/value/extra |
| `Icon` (from `@nutui/icons-react`) | Icon font + SVGs |
| `Avatar` / `AvatarGroup` | Avatars |
| `Tag` | Label tag |
| `Grid` / `GridItem` | Grid menu |
| `Divider` | Horizontal/vertical divider |
| `Image` | Responsive image with lazy-load |

### Layout

| Component | Purpose |
|---|---|
| `Row` / `Col` | 24-column grid |
| `Layout` | Flex helper |
| `Popup` | Popup modal (bottom/center/top/left/right) |
| `Popover` | Floating popover |
| `Sticky` | Sticky wrapper |
| `Skeleton` | Loading skeleton |
| `Empty` | Empty state |

### Navigation

| Component | Purpose |
|---|---|
| `NavBar` | Top nav |
| `Tabbar` / `TabbarItem` | Bottom tab bar |
| `Tabs` / `Tabs.TabPane` | Horizontal tabs |
| `Steps` / `Steps.Step` | Step progress |
| `SideNavBar` | Vertical side nav |
| `Menu` / `Menu.Item` | Dropdown filter menu |
| `ElevatorNav` | A-Z index scroll |
| `FixedNav` | Floating fab menu |

### Form

| Component | Purpose |
|---|---|
| `Form` / `Form.Item` | Form container |
| `Input` / `InputNumber` / `TextArea` | Inputs |
| `Radio` / `Radio.Group` | Radio |
| `Checkbox` / `Checkbox.Group` | Checkbox |
| `Switch` | Toggle |
| `Range` | Range slider |
| `Rate` | Star rating |
| `Uploader` | Upload |
| `Picker` / `DatePicker` / `TimePicker` | Pickers |
| `ShortPassword` | PIN |
| `Cascader` | Cascading selector |
| `NumberKeyboard` | Numeric keyboard |

### Feedback

| Component | Purpose |
|---|---|
| `Toast` | Toast (imperative: `Toast.show({...})`) |
| `Dialog` | Modal dialog (imperative: `Dialog.alert({...})`) |
| `ActionSheet` | Bottom action sheet |
| `Notify` | Top notification |
| `Backtop` | Back to top |
| `Loading` | Spinner |
| `InfiniteLoading` | Infinite scroll |
| `PullToRefresh` | Pull-to-refresh |
| `Progress` | Progress bar |
| `CountDown` / `CountUp` | Counters |

### Data display

| Component | Purpose |
|---|---|
| `Swiper` | Carousel |
| `SwipeAction` | Swipe-to-reveal |
| `Collapse` / `Collapse.Item` | Accordion |
| `Timeline` | Timeline events |
| `VirtualList` | Virtualized scroller |
| `Calendar` / `CalendarCard` | Calendar |
| `Pagination` | Pagination |
| `Table` | Data table |
| `ImagePreview` | Full-screen viewer |

### E-commerce specific

| Component | Purpose |
|---|---|
| `Price` | Currency formatting |
| `PriceChange` | Price delta |
| `Ecard` | E-gift card |
| `Address` | Address picker |
| `AddressList` | Address list |
| `SKU` | Product SKU selector |

Full catalog: https://nutui.jd.com/h5/react/3x/#/zh-CN/component

## 4. Usage examples

### Button

```tsx
import { Button } from '@nutui/nutui-react';

<Button type="primary">Primary</Button>
<Button type="info" size="small">Info</Button>
<Button type="warning" fill="outline">Outline</Button>
<Button type="danger" shape="round">Round</Button>
<Button type="primary" loading>Processing</Button>
<Button type="primary" block>Block CTA</Button>
```

### Cell list with navigation

```tsx
import { CellGroup, Cell } from '@nutui/nutui-react';
import { ArrowRight } from '@nutui/icons-react';

<CellGroup title="Account">
  <Cell title="Name" extra="Alice" />
  <Cell title="Phone" extra="138****8888" />
  <Cell title="Address" extra="Shanghai, Pudong" onClick={goAddress} />
</CellGroup>
```

### Form with validation

```tsx
import { Form, Input, Button, Toast } from '@nutui/nutui-react';

function LoginForm() {
  const onFinish = (values: any) => {
    Toast.show({ content: JSON.stringify(values) });
  };

  return (
    <Form
      onFinish={onFinish}
      footer={<Button type="primary" nativeType="submit" block>Submit</Button>}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Required' }]}
      >
        <Input placeholder="Enter username" />
      </Form.Item>
      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          { required: true, message: 'Phone required' },
          { pattern: /^1[3-9]\d{9}$/, message: 'Invalid phone' },
        ]}
      >
        <Input type="tel" placeholder="Enter mobile" />
      </Form.Item>
    </Form>
  );
}
```

### Dialog (imperative)

```tsx
import { Dialog } from '@nutui/nutui-react';

const confirmDelete = () => {
  Dialog.alert({
    title: 'Confirm',
    content: 'Delete this item?',
    closeOnOverlayClick: false,
    onConfirm: () => handleDelete(),
  });
};
```

### Toast (imperative)

```tsx
import { Toast } from '@nutui/nutui-react';

Toast.show({ content: 'Saved', icon: 'success' });
Toast.show({ content: 'Failed', icon: 'fail' });
Toast.show({ content: 'Loading...', icon: 'loading', duration: 0 });
```

### Tabs

```tsx
import { Tabs } from '@nutui/nutui-react';

<Tabs value={value} onChange={(v) => setValue(v)}>
  <Tabs.TabPane title="All" value="all">
    <div>All items</div>
  </Tabs.TabPane>
  <Tabs.TabPane title="Unread" value="unread">
    <div>Unread items</div>
  </Tabs.TabPane>
</Tabs>
```

### Infinite Loading

```tsx
import { InfiniteLoading } from '@nutui/nutui-react';

<InfiniteLoading
  hasMore={hasMore}
  onLoadMore={async () => {
    const more = await fetchNext();
    setList([...list, ...more]);
  }}
>
  {list.map((item) => (
    <div key={item.id}>{item.text}</div>
  ))}
</InfiniteLoading>
```

### SwipeAction (swipe-to-delete)

```tsx
import { SwipeAction, Button, Cell } from '@nutui/nutui-react';

<SwipeAction
  rightActions={[
    <Button key="del" type="danger">Delete</Button>,
  ]}
>
  <Cell title="Swipe left on me" />
</SwipeAction>
```

## 5. Theme customization

```css
/* src/index.css */
:root {
  --nutui-color-primary: #fa2c19;             /* JD red */
  --nutui-color-primary-stop-1: #fa6419;
  --nutui-color-primary-disabled: #fde3d2;

  --nutui-color-text: #1d1e1e;
  --nutui-color-text-secondary: #666;
  --nutui-color-text-disabled: #c3c3c3;

  --nutui-color-border: #ececec;
  --nutui-color-background: #f2f2f2;

  --nutui-base-font-size: 14px;
  --nutui-border-radius-base: 4px;
  --nutui-cell-padding: 10px 16px;
}
```

Full token list: https://nutui.jd.com/h5/react/3x/#/zh-CN/guide/theme-custom

## 6. Icons

Icons live in a separate package — install and tree-shake individually:

```bash
npm install @nutui/icons-react
```

```tsx
import { ArrowRight, User, Cart, Star } from '@nutui/icons-react';

<ArrowRight />
<User color="#fa2c19" size="16" />
```

See `nutui-icons` skill for the full icon catalog.

## 7. Taro integration

Use `@nutui/nutui-react-taro` instead of `@nutui/nutui-react`. API is identical, but the Taro package ships MiniProgram-compatible styles.

```tsx
// Taro + React project
import { Button, Cell } from '@nutui/nutui-react-taro';
import '@nutui/nutui-react-taro/dist/style.css';
```

## 8. BANNED patterns

- ❌ NEVER import `@nutui/nutui-react` in a Taro project — use `@nutui/nutui-react-taro` (different CSS build)
- ❌ NEVER use `<Form.Item rules={[{required:true}]}>` without `name` prop — validation needs `name`
- ❌ NEVER style buttons with inline `style={{background}}` — override CSS variables
- ❌ NEVER call `Toast.show` from render — only from event handlers or effects
- ❌ NEVER import `Dialog` as a JSX component — it's imperative (`Dialog.alert({...})`)
- ❌ NEVER mix `@nutui/nutui-react` with `@nutui/nutui` (Vue) in the same project — they're separate
- ❌ NEVER use v2.x docs — you're on v3 (breaking changes from 2 → 3)
- ❌ NEVER style over NutUI components with high-specificity selectors — makes theme variable overrides fragile
- ❌ NEVER use Taro UI and NutUI React in the same project — pick one

## 9. Pre-flight checklist

```
- [ ] Package: @nutui/nutui-react (web) OR @nutui/nutui-react-taro (Taro)
- [ ] React >= 18 installed
- [ ] Icons imported individually from @nutui/icons-react
- [ ] Theme overridden via CSS variables (not SCSS overrides of compiled classes)
- [ ] JD-red replaced if project is not JD-branded (--nutui-color-primary)
- [ ] Form uses <Form.Item name=... rules=...> for validation
- [ ] Imperative APIs (Toast, Dialog, Notify) used from event handlers only
- [ ] Mobile viewport meta tag set
- [ ] If Taro project: also followed taro/SKILL.md pre-flight
- [ ] Bundle size verified (tree-shaking effective; check with source-map-explorer)
```

## 10. Bundle size tips

- Use babel-plugin-import to avoid pulling all component styles
- Import icons individually: `import { Star } from '@nutui/icons-react'` (not `import * as Icons`)
- In production Taro builds, set `mini.optimizeMainPackage: { enable: true }` in config/prod.ts

{% endraw %}
