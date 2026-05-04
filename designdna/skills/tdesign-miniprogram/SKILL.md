---
name: tdesign-miniprogram
description: TDesign WeChat MiniProgram component library skill — Tencent's official native WeChat MP component library (v1.14.x, active). Covers 60+ components matching TDesign's cross-platform visual DNA. Includes npm install, component catalog, theme tokens, retail starter template, and WeChat Developer Tools integration.
---

# TDesign MiniProgram — WeChat MiniProgram Library

> **Source**: [Tencent/tdesign-miniprogram](https://github.com/Tencent/tdesign-miniprogram) · v1.14.0 · 1.6k ⭐ · 🟢 active 2026-05
> **Docs**: https://tdesign.tencent.com/miniprogram/overview

## 1. When to use

- Native **WeChat MiniProgram** (no Taro / UniApp)
- Want Tencent's design language + active maintenance (alternative to Vant Weapp)
- Building Tencent-integrated WeChat products

## 2. Install

### Via npm

```bash
npm install tdesign-miniprogram
```

Then in WeChat DevTools: **Tools → Build npm**. Configure `app.json` styles.

### Manual fallback (only if npm is blocked)

Prefer npm. Only copy source manually when your MiniProgram pipeline cannot use npm packages.

### Register components

```json
// pages/index/index.json
{
  "usingComponents": {
    "t-button": "tdesign-miniprogram/button/button",
    "t-cell": "tdesign-miniprogram/cell/cell",
    "t-cell-group": "tdesign-miniprogram/cell-group/cell-group",
    "t-icon": "tdesign-miniprogram/icon/icon"
  }
}
```

## 3. Component catalog (60+)

**Basic**: `t-button` · `t-icon` · `t-cell` · `t-cell-group` · `t-tag` · `t-avatar` · `t-divider` · `t-empty` · `t-skeleton`

**Navigation**: `t-navbar` · `t-tabs` · `t-tab-bar` · `t-tab-panel` · `t-steps` · `t-indexes` · `t-side-bar` · `t-tabs` · `t-fab`

**Form**: `t-input` · `t-textarea` · `t-radio` · `t-checkbox` · `t-switch` · `t-stepper` · `t-picker` · `t-date-time-picker` · `t-search` · `t-rate` · `t-upload`

**Feedback**: `t-toast` · `t-dialog` · `t-action-sheet` · `t-message` · `t-pull-down-refresh` · `t-progress` · `t-loading`

**Data**: `t-swiper` · `t-swiper-nav` · `t-swipe-cell` · `t-grid` · `t-grid-item` · `t-collapse` · `t-collapse-panel` · `t-calendar` · `t-count-down` · `t-image` · `t-image-viewer`

Full catalog: https://tdesign.tencent.com/miniprogram/components/button

## 4. Usage

### Button (WXML)

```xml
<t-button theme="primary" bind:tap="save">保存</t-button>
<t-button theme="danger" variant="outline">删除</t-button>
<t-button theme="primary" loading>提交中</t-button>
<t-button theme="primary" size="large" shape="round" block>大按钮</t-button>
```

### Cell group

```xml
<t-cell-group title="个人信息">
  <t-cell title="姓名" note="张三" arrow />
  <t-cell title="手机" note="138****8888" />
  <t-cell title="地址" bind:click="onAddressTap" arrow>
    <view slot="note">上海市浦东新区</view>
  </t-cell>
</t-cell-group>
```

### Toast (imperative)

```js
import Toast from 'tdesign-miniprogram/toast/index';

Page({
  onSave() {
    Toast({ context: this, selector: '#t-toast', message: '保存成功', theme: 'success', direction: 'column' });
  },
});
```

```xml
<!-- Must include Toast element -->
<t-toast id="t-toast" />
```

### Dialog (imperative)

```js
import Dialog from 'tdesign-miniprogram/dialog/index';

Page({
  confirmDelete() {
    Dialog.confirm({
      title: '确认删除',
      content: '此操作不可恢复',
      confirmBtn: '删除',
    }).then(() => this.handleDelete());
  },
});
```

```xml
<t-dialog id="t-dialog" />
```

## 5. Theme (WXSS variables)

```css
/* app.wxss */
page {
  --td-brand-color: #0052d9;
  --td-brand-color-light: #d9e1ff;
  --td-font-gray-1: rgba(0, 0, 0, 0.9);
  --td-font-gray-3: rgba(0, 0, 0, 0.6);
  --td-radius-default: 6rpx;
}
```

### Starter

For retail/e-commerce MiniProgram shells, inspect Tencent's official starter before building layout and store flows manually:

```text
https://github.com/Tencent/tdesign-miniprogram-starter-retail
```

## 6. BANNED

- ❌ NEVER use HTML tags (`<div>`) — WXML uses `<view>`, `<text>`, `<image>`
- ❌ NEVER import CSS globally AND per-component — causes duplicate styles
- ❌ NEVER use Taro UI / Vant Weapp in the same project as TDesign MiniProgram
- ❌ NEVER skip `usingComponents` registration — WeChat MP requires explicit registration
- ❌ NEVER use `px` for layout — use `rpx` for consistent sizing (750rpx = screen width)
- ❌ NEVER call imperative APIs (`Toast`, `Dialog`) without the matching element in WXML
- ❌ NEVER forget `context: this` on imperative calls in pages
- ❌ NEVER copy source manually when npm + Build npm works — it makes upgrades harder

## 7. Pre-flight checklist

```
- [ ] Package: tdesign-miniprogram installed + miniprogram_npm built
- [ ] app.json references component tree
- [ ] Each page's .json declares usingComponents for the components it uses
- [ ] Using rpx (not px) for responsive layout
- [ ] Toast / Dialog elements included in WXML where used
- [ ] CSS variables overridden in app.wxss if not Tencent-blue
- [ ] Official retail starter checked for e-commerce / store flows
- [ ] Tested in WeChat Developer Tools and on-device
```

## 8. Alternatives (same niche)

If TDesign MiniProgram doesn't fit, consider:

- **Vant Weapp** (18.4k ⭐) — larger community, e-commerce-flavored
- See `../miniprogram-native.md` for comparison
- For multi-vendor MP: switch to Taro + NutUI instead (see `taro` skill)

## 9. Dial fit

formality: 6 · motion: 4 · density: 5 · warmth: 5 · contrast: 6
