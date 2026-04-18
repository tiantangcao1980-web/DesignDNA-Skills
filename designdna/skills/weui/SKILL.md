---
name: weui
description: WeUI — Tencent's CSS-only style library for WeChat H5 pages and WeChat MiniProgram (27.4k + 15.3k stars, maintenance mode 2026). Demoted from "MiniProgram default" to "lightweight WeChat H5 webview styling". Use only for legacy WeChat H5 embedded pages. For MiniProgram component libraries, use Vant Weapp or TDesign MiniProgram.
---

# WeUI — WeChat Style Library

> **Sources**:
> - [Tencent/weui](https://github.com/Tencent/weui) · 27.4k ⭐ (CSS for H5)
> - [Tencent/weui-wxss](https://github.com/Tencent/weui-wxss) · 15.3k ⭐ (WXSS for MiniProgram)
>
> **Health**: 🟡 **maintenance** (last commits 2026-03, but positioning is "legacy H5 styling")
> **Docs**: https://weui.io

## ⚠️ Status & positioning

WeUI is actively receiving minor maintenance fixes, but WeChat's own documentation no longer recommends it as the primary MiniProgram component library. Its role has shifted:

- **Past (2017-2020)**: Official MiniProgram default style
- **Present (2026)**: Legacy H5 webview styling for pages embedded inside WeChat

**Use WeUI only when**:
- You're building **H5 pages embedded inside WeChat** (e.g., articles, payment pages, campaign pages in webviews)
- You want the native-WeChat look **with zero JS** (CSS-only)

**Don't use WeUI when**:
- Building a **MiniProgram** with many components → use **Vant Weapp** (see skill) or **TDesign MiniProgram** (see skill)
- Building a **regular mobile web app** → use Vant, NutUI, or TDesign Mobile

## 1. Install

### WeUI for H5

```html
<!-- CDN -->
<link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/2.6.0/weui.min.css">
```

Or npm:

```bash
npm install weui.js weui
```

```js
import 'weui';  // or import 'weui/dist/style/weui.min.css'
```

### weui-wxss (MiniProgram)

Copy the .wxss files from the repo into your MiniProgram's styles folder, or use via npm:

```bash
npm install weui-miniprogram
```

Add to `app.wxss`:

```css
@import "/miniprogram_npm/weui-miniprogram/weui-wxss/style/weui.wxss";
```

## 2. Component catalog (CSS classes)

WeUI is **CSS-only**. Apply classes to existing HTML elements:

### Cells (list rows)

```html
<div class="weui-cells">
  <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label">Name</label></div>
    <div class="weui-cell__bd"><input class="weui-input" type="text" placeholder="Enter name" /></div>
  </div>
</div>
```

### Buttons

```html
<a href="#" class="weui-btn weui-btn_primary">Primary</a>
<a href="#" class="weui-btn weui-btn_default">Default</a>
<a href="#" class="weui-btn weui-btn_warn">Danger</a>
<a href="#" class="weui-btn weui-btn_disabled weui-btn_primary">Disabled</a>
<a href="#" class="weui-btn weui-btn_plain-primary">Plain</a>
```

### Forms (full form layout)

```html
<div class="weui-cells__title">Login</div>
<div class="weui-cells">
  <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label">Phone</label></div>
    <div class="weui-cell__bd"><input class="weui-input" type="tel" placeholder="Mobile" /></div>
  </div>
  <div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label">Code</label></div>
    <div class="weui-cell__bd"><input class="weui-input" placeholder="SMS code" /></div>
    <div class="weui-cell__ft"><a href="#" class="weui-vcode-btn">Send code</a></div>
  </div>
</div>
```

### Toast

```html
<div id="toast" class="weui-toast weui-toast_text" style="display:none">
  <p class="weui-toast__content">Success</p>
</div>
```

With weui.js:

```js
weui.toast('Saved');
```

### Dialog

With weui.js:

```js
weui.alert('This is an alert');
weui.confirm('Are you sure?', () => handleConfirm(), () => handleCancel());
```

### Gallery / picker

WeUI provides classes for many common patterns — image gallery, picker overlay, loading mask, actionsheet, etc. See https://weui.io/ for the full visual catalog.

## 3. Usage for WeChat H5 embedded page

Typical use case: a payment page or campaign page opened in WeChat's in-app browser.

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pay</title>
  <link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/2.6.0/weui.min.css">
</head>
<body class="weui-mobile">
  <div class="weui-cells">
    <div class="weui-cell">
      <div class="weui-cell__bd">Order total</div>
      <div class="weui-cell__ft">¥ 99.00</div>
    </div>
  </div>
  <div class="weui-footer weui-footer_fixed-bottom">
    <div class="weui-btn-area" style="padding:16px">
      <a href="#" class="weui-btn weui-btn_primary" onclick="pay()">Pay now</a>
    </div>
  </div>
</body>
</html>
```

## 4. BANNED

- ❌ NEVER use WeUI as the primary MiniProgram component library — use Vant Weapp / TDesign MiniProgram
- ❌ NEVER use WeUI for non-WeChat contexts (app store, external browsers) — looks out of place
- ❌ NEVER combine WeUI with Vant Weapp / TDesign MP — style conflicts + duplicate weight
- ❌ NEVER customize WeUI colors heavily — it's meant to feel native-WeChat; heavy rebranding looks wrong
- ❌ NEVER use weui.js for complex interactivity — build custom; WeUI JS is shallow
- ❌ NEVER assume WeUI works on Alipay / ByteDance MP — it's WeChat-specific visual
- ❌ NEVER skip viewport meta tag — CSS assumes mobile

## 5. Pre-flight checklist (WeChat H5 embedded page)

```
- [ ] Target context is inside WeChat (not external browser)
- [ ] weui.min.css loaded (CDN or npm)
- [ ] Viewport meta tag set
- [ ] No heavy branding — pages look WeChat-native
- [ ] weui.js only if simple alert/confirm/toast needed
- [ ] No mix with Vant Weapp / TDesign MiniProgram
- [ ] Tested inside WeChat DevTools or real device WeChat browser
- [ ] Safe-area for fixed-bottom buttons on iPhone X+
```

## 6. Alternatives

| Scenario | Pick |
|---|---|
| WeChat MiniProgram components | **Vant Weapp** (see skill) or **TDesign MiniProgram** |
| General mobile H5 | Vant (Vue) · NutUI · TDesign Mobile |
| WeChat H5 webview with rich components | Build with Vant + WeUI utility classes as needed |
| Multi-vendor MiniProgram | Taro + NutUI |

## 7. Dial fit

formality: 5 · motion: 2 · density: 5 · warmth: 6 · contrast: 4
