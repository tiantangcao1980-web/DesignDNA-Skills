---
name: taro-ui
description: Taro UI component library skill for Taro 2.x/3.x React projects. Covers 50+ components (Button, Modal, Form, Tabs, SwipeAction, etc.) with usage snippets and props reference. ⚠️ MAINTENANCE MODE — last meaningful release 2024-08; Taro 4.x support lags. New projects on Taro 4+ should use `nutui-react` skill instead.
---

# Taro UI — Component Library for Taro React

> **Source**: [jd-opensource/taro-ui](https://github.com/jd-opensource/taro-ui) · 4.7k stars · v3.3.0 (2024-01)
> **Health**: 🟡 **MAINTENANCE** — 20+ months since last meaningful commit. Does not track Taro 4.x.
> **Docs**: https://taro-ui.jd.com/#/docs/introduction

## ⚠️ Status warning

This library has **not received meaningful updates since 2024-08**. It works with Taro 2.x and 3.x, but may break on Taro 4.x builds. Treat as:

- ✅ Keep using if already integrated in a stable Taro 2/3 project
- 🟡 Use for quick prototypes where specific Taro UI components save time
- ❌ Do not start a new Taro 4.x project with Taro UI — use NutUI React instead

See [DEPRECATED.md](../../components/DEPRECATED.md) for full migration guidance.

## 1. Installation

```bash
npm install taro-ui@3.3.0
# Peer deps must match your Taro version
npm install @tarojs/taro@3.x @tarojs/components@3.x
```

### Config — required

```js
// config/index.js
const config = {
  h5: {
    esnextModules: ['taro-ui'],  // H5 must transpile taro-ui ESNext
  },
};
```

### Global import

```tsx
// src/app.tsx
import 'taro-ui/dist/style/index.scss';  // Imports ALL component styles
```

Or **on-demand** (preferred for bundle size):

```tsx
// In any component
import 'taro-ui/dist/style/components/button.scss';
import { AtButton } from 'taro-ui';
```

## 2. Component catalog

### Basic

| Component | Purpose | Import |
|---|---|---|
| `AtButton` | Button with types/sizes/loading | `taro-ui` |
| `AtIcon` | Icon (built-in glyph names only) | `taro-ui` |
| `AtAvatar` | Circular/square avatar | `taro-ui` |
| `AtBadge` | Number/dot badge overlay | `taro-ui` |
| `AtTag` | Label tag | `taro-ui` |
| `AtLoadMore` | Infinite scroll indicator | `taro-ui` |
| `AtDivider` | Section divider | `taro-ui` |
| `AtFloatLayout` | Bottom sheet layout | `taro-ui` |

### Form

| Component | Purpose |
|---|---|
| `AtForm` | Form container |
| `AtInput` | Text input |
| `AtTextarea` | Multi-line input |
| `AtCheckbox` / `AtCheckboxGroup` | Checkbox (group variant) |
| `AtRadio` | Radio (single choice) |
| `AtSwitch` | On/off toggle |
| `AtSlider` | Numeric slider |
| `AtInputNumber` | Numeric stepper |
| `AtImagePicker` | Image upload |
| `AtRate` | Star rating |
| `AtSearchBar` | Search input |
| `AtPicker` | Column picker |
| `AtCalendar` | Date picker |

### Navigation

| Component | Purpose |
|---|---|
| `AtTabBar` | Bottom tab bar |
| `AtTabs` / `AtTabsPane` | Tab navigation |
| `AtSegmentedControl` | iOS-style segmented control |
| `AtNavBar` | Top navigation bar |
| `AtDrawer` | Side drawer |
| `AtPagination` | Pagination controls |
| `AtGrid` | Grid menu |

### Feedback

| Component | Purpose |
|---|---|
| `AtModal` | Modal dialog |
| `AtActionSheet` / `AtActionSheetItem` | Bottom action sheet |
| `AtActivityIndicator` | Loading spinner |
| `AtNoticebar` | Scrolling banner |
| `AtCurtain` | Full-screen overlay |
| `AtMessage` (imperative) | Top message toast |
| `AtToast` | Toast with icon |

### Layout / data

| Component | Purpose |
|---|---|
| `AtCard` | Content card |
| `AtList` / `AtListItem` | List rows |
| `AtAccordion` | Expandable panel |
| `AtSwipeAction` | Swipe-to-reveal action |
| `AtFab` | Floating action button |
| `AtTimeline` | Timeline event list |
| `AtCountdown` | Countdown clock |
| `AtSteps` | Step progress |

Full reference with live demos: https://taro-ui.jd.com/#/docs/button

## 3. Usage examples

### Button

```tsx
import { AtButton } from 'taro-ui';
import 'taro-ui/dist/style/components/button.scss';

<AtButton type="primary" size="normal" onClick={handleSubmit}>
  Submit
</AtButton>

<AtButton type="secondary" loading>
  Processing
</AtButton>

<AtButton type="primary" circle>
  Round CTA
</AtButton>
```

### Input with validation

```tsx
import { AtInput } from 'taro-ui';

function LoginForm() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  return (
    <AtInput
      name="phone"
      title="Phone"
      type="phone"
      placeholder="Enter phone number"
      value={phone}
      onChange={(value) => {
        setPhone(value as string);
        setError(String(value).length === 11 ? '' : 'Must be 11 digits');
      }}
      error={!!error}
    />
  );
}
```

### Modal

```tsx
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';

<AtModal isOpened={visible} onClose={() => setVisible(false)}>
  <AtModalHeader>Confirm Delete</AtModalHeader>
  <AtModalContent>This action cannot be undone.</AtModalContent>
  <AtModalAction>
    <button onClick={() => setVisible(false)}>Cancel</button>
    <button onClick={handleDelete}>Delete</button>
  </AtModalAction>
</AtModal>
```

### Tabs

```tsx
import { AtTabs, AtTabsPane } from 'taro-ui';

const tabList = [
  { title: 'Overview' },
  { title: 'Comments', badgeText: '3' },
  { title: 'Related' },
];

<AtTabs current={current} tabList={tabList} onClick={setCurrent}>
  <AtTabsPane current={current} index={0}>...</AtTabsPane>
  <AtTabsPane current={current} index={1}>...</AtTabsPane>
  <AtTabsPane current={current} index={2}>...</AtTabsPane>
</AtTabs>
```

### SwipeAction

```tsx
import { AtSwipeAction } from 'taro-ui';

<AtSwipeAction
  options={[
    { text: 'Archive', style: { backgroundColor: '#6190E8', color: '#fff' } },
    { text: 'Delete',  style: { backgroundColor: '#FF4949', color: '#fff' } },
  ]}
  onClick={(item) => console.log(item.text)}
>
  <View className="list-row">Swipe me left →</View>
</AtSwipeAction>
```

### Picker

```tsx
import { AtPicker } from 'taro-ui';

<AtPicker
  show={visible}
  title="Select city"
  pickerValue={[0, 0]}
  range={[['北京', '上海', '广州'], ['朝阳', '浦东', '天河']]}
  onCancel={() => setVisible(false)}
  onChange={(val) => {}}
  onConfirm={(val) => { setCity(val); setVisible(false); }}
/>
```

## 4. Theme customization

Taro UI uses SCSS variables:

```scss
// src/app.scss (before import)
$color-brand: #6190E8;        // Primary color
$color-brand-dark: #4A85E6;
$color-brand-light: #7BA2EB;

$color-border: #E1E1E1;
$color-border-split: #F5F5F5;

// Then import
@import 'taro-ui/dist/style/index.scss';
```

Full variables: https://github.com/jd-opensource/taro-ui/blob/master/src/style/common/variables.scss

## 5. Design tokens

| Token | Value | Notes |
|---|---|---|
| Brand color | `#6190E8` (blue) | Primary action, links |
| Success | `#13CE66` | Positive feedback |
| Warning | `#FFC82C` | Caution states |
| Error | `#FF4949` | Destructive, form errors |
| Text primary | `#333333` | Headers, body |
| Text secondary | `#666666` | Captions |
| Text tertiary | `#999999` | Hints, disabled |
| Border | `#E1E1E1` | Separators |
| BG body | `#F5F5F5` | Page background |
| Radius | `4px` | Default for cards/buttons |
| Radius circle | `999rpx` | Circular/pill |

## 6. Platform quirks

| Platform | Gotcha |
|---|---|
| **WeChat MP** | `AtFloatLayout` has z-index bug with native `cover-view`; avoid stacking |
| **Alipay MP** | `AtPicker` columns may mis-align — verify in simulator |
| **H5** | `AtSwipeAction` touch requires proper `esnextModules` config |
| **Baidu MP** | Some SVG icons don't render; use built-in `AtIcon` glyph names |

## 7. BANNED patterns

- ❌ NEVER use raw HTML tags (`<div>`, `<span>`) — use `@tarojs/components` (`<View>`, `<Text>`)
- ❌ NEVER skip the on-demand style import — global `index.scss` is ~500KB
- ❌ NEVER import `taro-ui` into a Taro 4.x project without first testing; expect build failures
- ❌ NEVER assume `AtIcon` supports custom SVGs — it only renders built-in glyph names
- ❌ NEVER use `AtButton type="primary"` with Taro UI's default blue if your brand isn't blue — override via SCSS
- ❌ NEVER stack multiple `AtModal` — only one open at a time
- ❌ NEVER rely on components not listed in the official docs catalog — undocumented exports may break

## 8. Pre-flight checklist

```
- [ ] Taro version is 2.x or 3.x (not 4.x — Taro UI lags)
- [ ] taro-ui installed at ^3.3.0
- [ ] esnextModules: ['taro-ui'] set in config/index.js for H5
- [ ] Using on-demand SCSS imports (not global)
- [ ] Using @tarojs/components (<View>, <Text>) — not raw HTML
- [ ] Brand color overridden via $color-brand SCSS variable (not hardcoded)
- [ ] Tested on at least the primary target platform
- [ ] If Taro 4.x planned → migration to NutUI React scheduled
```

## 9. Migration path (Taro UI → NutUI React)

| Taro UI | NutUI React equivalent |
|---|---|
| `AtButton` | `Button` |
| `AtModal` | `Dialog` |
| `AtInput` | `Input` |
| `AtTabs` | `Tabs` + `TabPane` |
| `AtNavBar` | `NavBar` |
| `AtList` | `List` + `Cell` |
| `AtSwipeAction` | `SwipeAction` |
| `AtActionSheet` | `ActionSheet` |
| `AtPicker` | `Picker` |
| `AtCalendar` | `CalendarCard` |
| `AtSearchBar` | `SearchBar` |
| `AtTabBar` | `Tabbar` + `TabbarItem` |

See `nutui-react/SKILL.md` for the modern equivalents.
