---
name: ant-design-mobile
description: Ant Design Mobile (antd-mobile) — Alibaba's React mobile H5 component library (11k stars, v5.x, active). Mobile-optimized components (Tabs, List, Form, Swiper, Popup, SafeArea) with iOS/Android adaptive styling. Includes install, catalog, theme tokens, and RN/H5 target distinctions.
---

# Ant Design Mobile — React Mobile H5

> **Source**: [ant-design/ant-design-mobile](https://github.com/ant-design/ant-design-mobile) · 11k ⭐ · v5.x · 🟢 active 2026
> **NPM**: `antd-mobile`
> **Docs**: https://mobile.ant.design/

## 1. When to use

- **React mobile web** (H5)
- Browsers on iOS / Android
- NOT for native apps — use React Native instead (`react-native-paper` or similar)

## 2. Install

```bash
npm install antd-mobile
```

```tsx
import { Button, List } from 'antd-mobile';

<Button color="primary" size="large" block>
  Submit
</Button>
```

No separate CSS import needed — components ship CSS-in-JS.

### Viewport meta

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">
```

## 3. Catalog

**Basic**: `Button` · `Tag` · `Icon` · `Divider` · `Space` · `SafeArea`

**Navigation**: `NavBar` · `Tabs` · `TabBar` · `Steps` · `IndexBar` · `SideBar` · `DotLoading`

**Data entry**: `Form` · `Input` · `TextArea` · `Checkbox` · `Radio` · `Switch` · `Rate` · `Selector` · `Slider` · `Stepper` · `Picker` · `DatePicker` · `CheckList` · `Cascader` · `Search` · `Searchbar` · `Uploader` · `CalendarPicker` · `NumberKeyboard`

**Layout**: `AutoCenter` · `Grid` · `PullToRefresh` · `InfiniteScroll` · `SpinLoading`

**Data display**: `List` · `Card` · `Empty` · `Image` · `ImageViewer` · `Tag` · `Avatar` · `Ellipsis` · `NoticeBar` · `ResultPage` · `Skeleton` · `Swiper` · `SwipeAction` · `VirtualList` · `Collapse` · `FloatingBubble` · `FloatingPanel`

**Feedback**: `Toast` · `Modal` · `Dialog` · `Popup` · `ActionSheet` · `Mask` · `ProgressBar` · `ProgressCircle`

Full catalog: https://mobile.ant.design/components/

## 4. Usage

### Button

```tsx
<Button color="primary" onClick={save}>保存</Button>
<Button color="danger" fill="outline">删除</Button>
<Button color="primary" loading>提交中</Button>
<Button color="primary" size="large" block shape="rounded">CTA</Button>
```

### List

```tsx
import { List } from 'antd-mobile';
import { RightOutline } from 'antd-mobile-icons';

<List header="设置">
  <List.Item prefix="👤" extra="Alice" onClick={goProfile}>姓名</List.Item>
  <List.Item prefix="📱" extra="138****8888">手机</List.Item>
  <List.Item prefix="📍" arrow onClick={goAddress}>收货地址</List.Item>
</List>
```

### Form

```tsx
import { Form, Input, Button, Toast } from 'antd-mobile';

function LoginForm() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    Toast.show({ icon: 'success', content: 'Saved' });
  };

  return (
    <Form form={form} onFinish={onFinish} footer={<Button block color="primary" type="submit">提交</Button>}>
      <Form.Item label="用户名" name="username" rules={[{ required: true }]}>
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item label="密码" name="password" rules={[{ required: true, min: 6 }]}>
        <Input type="password" />
      </Form.Item>
    </Form>
  );
}
```

### Popup / Dialog (imperative)

```tsx
import { Dialog, Toast } from 'antd-mobile';

Dialog.confirm({
  content: '确认删除？',
  confirmText: '删除',
  cancelText: '取消',
  onConfirm: () => handleDelete(),
});

Toast.show({ icon: 'success', content: '已保存' });
```

### TabBar (bottom nav)

```tsx
import { TabBar } from 'antd-mobile';
import { AppOutline, MessageOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons';

const tabs = [
  { key: 'home', title: '首页', icon: <AppOutline /> },
  { key: 'chat', title: '消息', icon: <MessageOutline />, badge: '3' },
  { key: 'todo', title: '待办', icon: <UnorderedListOutline /> },
  { key: 'me',   title: '我的', icon: <UserOutline /> },
];

<TabBar activeKey={active} onChange={setActive}>
  {tabs.map((t) => <TabBar.Item key={t.key} {...t} />)}
</TabBar>
```

### Picker

```tsx
import { Picker, Button } from 'antd-mobile';

<Picker
  columns={[[
    { label: '北京', value: 'bj' },
    { label: '上海', value: 'sh' },
  ]]}
  visible={visible}
  onClose={() => setVisible(false)}
  onConfirm={(val) => setCity(val[0])}
>
  {(items) => <Button>选择城市</Button>}
</Picker>
```

## 5. Theme

```tsx
import { ConfigProvider } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';

<ConfigProvider locale={zhCN}>
  <App />
</ConfigProvider>
```

### CSS variables

```css
:root {
  --adm-color-primary: #1677ff;
  --adm-color-success: #00b578;
  --adm-color-warning: #ff8f1f;
  --adm-color-danger:  #ff3141;

  --adm-font-size-main: 14px;
  --adm-color-text:       #333;
  --adm-color-weak:       #999;
  --adm-color-border:     #eee;
  --adm-color-background: #fff;
}
```

Dark mode:

```css
html[data-prefers-color-scheme='dark'] {
  --adm-color-background: #000;
  --adm-color-text: #e5e5e5;
}
```

## 6. BANNED

- ❌ NEVER use desktop `antd` for mobile — layouts won't adapt. Use `antd-mobile`.
- ❌ NEVER skip viewport meta tag — zooming + scaling issues
- ❌ NEVER hardcode `px` for layout — use `vw` or `rem` scaling
- ❌ NEVER omit `<SafeArea>` around fixed-bottom elements on iOS (home indicator)
- ❌ NEVER nest `<Swiper>` inside a scroll container without handling touch conflicts
- ❌ NEVER use wrong icon package — it's `antd-mobile-icons` (not `@ant-design/icons`)
- ❌ NEVER call `Toast.show` / `Dialog.confirm` during render
- ❌ NEVER mix antd-mobile with TDesign Mobile React / NutUI React in same project

## 7. Pre-flight checklist

```
- [ ] antd-mobile v5 installed (not legacy v2)
- [ ] antd-mobile-icons for icons
- [ ] Viewport meta tag set
- [ ] <SafeArea> applied to fixed-bottom elements
- [ ] Brand color customized via CSS variable --adm-color-primary
- [ ] Mobile-specific typography scale (base 14px)
- [ ] Form uses Form.useForm + Form.Item rules
- [ ] Tested on real devices (iPhone SE 375w, standard 390w, wide 428w)
- [ ] Dark mode CSS variables set if dark mode supported
```

## 8. Dial fit

formality: 4-5 · motion: 5 · density: 5 · warmth: 5 · contrast: 6
