---
name: vant-weapp
description: Vant Weapp — Youzan's native WeChat MiniProgram component library (18.4k stars, v1.11+, active 2026). The most popular native MP library with 50+ mobile-optimized components. Use for WeChat-only MiniPrograms — for multi-vendor use Taro + NutUI instead.
---

# Vant Weapp — WeChat MiniProgram Native

> **Source**: [youzan/vant-weapp](https://github.com/youzan/vant-weapp) · 18.4k ⭐ · v1.11.7 · 🟢 active 2026-02
> **NPM**: `@vant/weapp`
> **Docs**: https://vant-ui.github.io/vant-weapp/

## 1. When to use

- **WeChat MiniProgram only** (not Alipay / ByteDance / other vendors)
- Native WXML/WXSS development (no Taro / UniApp compilation layer)
- E-commerce / retail / social apps on WeChat

For multi-vendor MP or React/Vue DX, see `taro` + `nutui-react`/`nutui-vue` skills instead.

## 2. Install

```bash
npm install @vant/weapp -S --production
```

Then in WeChat Developer Tools: **Tools → Build npm**.

### Configure

```json
// app.json
{
  "usingComponents": {
    "van-button": "@vant/weapp/button/index",
    "van-cell": "@vant/weapp/cell/index",
    "van-cell-group": "@vant/weapp/cell-group/index"
  }
}
```

Or per-page (better for tree-shaking):

```json
// pages/index/index.json
{
  "usingComponents": {
    "van-button": "@vant/weapp/button/index"
  }
}
```

## 3. Catalog (50+)

**Basic**: `van-button` · `van-icon` · `van-cell` · `van-cell-group` · `van-divider` · `van-tag` · `van-sticky` · `van-skeleton`

**Layout**: `van-row` · `van-col` · `van-grid` · `van-grid-item` · `van-popup` · `van-overlay`

**Navigation**: `van-nav-bar` · `van-tabs` · `van-tab` · `van-tabbar` · `van-tabbar-item` · `van-steps` · `van-step` · `van-index-bar` · `van-tree-select`

**Form**: `van-field` · `van-form` · `van-radio` · `van-radio-group` · `van-checkbox` · `van-checkbox-group` · `van-switch` · `van-stepper` · `van-picker` · `van-date-time-picker` · `van-calendar` · `van-search` · `van-rate` · `van-slider` · `van-uploader`

**Feedback**: `van-toast` · `van-dialog` · `van-notify` · `van-action-sheet` · `van-share-sheet` · `van-loading` · `van-progress` · `van-circle`

**Data**: `van-swipe` · `van-swipe-cell` · `van-collapse` · `van-empty` · `van-pagination` · `van-count-down` · `van-image` · `van-image-preview`

**E-commerce**: `van-card` · `van-goods-action` · `van-goods-action-button` · `van-goods-action-icon` · `van-submit-bar` · `van-coupon` · `van-coupon-cell` · `van-coupon-list` · `van-sku` (via vant-demo) · `van-tree-select`

## 4. Usage

### Button

```xml
<van-button type="primary" bind:click="onSave">保存</van-button>
<van-button type="danger" plain>删除</van-button>
<van-button type="primary" loading>提交中</van-button>
<van-button type="primary" size="large" round block>大按钮</van-button>
<van-button icon="star-o" type="info">带图标</van-button>
```

### Form

```xml
<van-form bind:submit="onSubmit">
  <van-cell-group inset>
    <van-field
      value="{{ username }}"
      name="username"
      label="用户名"
      placeholder="请输入"
      required
      rules="{{ [{ required: true, message: '必填' }] }}"
      bind:change="onUsernameChange"
    />
    <van-field
      value="{{ password }}"
      type="password"
      name="password"
      label="密码"
      placeholder="请输入"
      required
      rules="{{ [{ required: true, message: '必填' }, { pattern: /.{6,}/, message: '至少 6 位' }] }}"
    />
  </van-cell-group>
  <van-button type="primary" form-type="submit" block>登录</van-button>
</van-form>
```

### Cell list

```xml
<van-cell-group title="账户">
  <van-cell title="姓名" value="Alice" />
  <van-cell title="手机" value="138****8888" />
  <van-cell title="地址" value="上海，浦东" is-link bind:click="onAddressTap" />
</van-cell-group>
```

### Tabbar

```xml
<van-tabbar active="{{ active }}" bind:change="onChange" safe-area-inset-bottom>
  <van-tabbar-item icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item icon="search" info="3">搜索</van-tabbar-item>
  <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
  <van-tabbar-item icon="user-o">我的</van-tabbar-item>
</van-tabbar>
```

### Toast (imperative)

```js
import Toast from '@vant/weapp/toast/toast';

Toast('保存成功');
Toast.success({ message: '加载成功', duration: 1500 });
Toast.fail('加载失败');
Toast.loading({ message: '加载中...', forbidClick: true, duration: 0 });
```

```xml
<van-toast id="van-toast" />
```

### Dialog (imperative)

```js
import Dialog from '@vant/weapp/dialog/dialog';

Dialog.confirm({
  title: '确认删除',
  message: '此操作不可恢复',
  confirmButtonText: '删除',
  confirmButtonColor: '#ee0a24',
}).then(() => this.handleDelete());
```

```xml
<van-dialog id="van-dialog" />
```

## 5. Theme (CSS variables)

```css
/* app.wxss */
page {
  --button-primary-background-color: #07c160;  /* WeChat green */
  --button-primary-border-color: #07c160;

  --nav-bar-background-color: #fff;
  --nav-bar-title-text-color: #333;

  --cell-background-color: #fff;
  --cell-border-color: #ebedf0;

  --tabbar-active-color: #07c160;
}
```

All variables: https://vant-ui.github.io/vant-weapp/#/theme

## 6. BANNED

- ❌ NEVER use Vant Weapp in Alipay / ByteDance MP — it's WeChat-only. Use Taro + NutUI for multi-vendor
- ❌ NEVER use Vant (Vue web) components expecting them to work in MP — different packages
- ❌ NEVER skip `<van-toast id="van-toast" />` in WXML when using `Toast()` — silent failure
- ❌ NEVER use HTML tags in WXML — `<view>` `<text>` `<image>` only
- ❌ NEVER hardcode `px` for responsive layout — use `rpx` (750rpx = screen width)
- ❌ NEVER mix Vant Weapp with TDesign MiniProgram / Wux in same project
- ❌ NEVER rely on v0.x legacy APIs — use v1+
- ❌ NEVER forget `safe-area-inset-bottom` on fixed-bottom components — iOS home indicator overlap

## 7. Pre-flight checklist

```
- [ ] @vant/weapp installed + miniprogram_npm built
- [ ] Components registered in app.json or per-page .json
- [ ] rpx used for responsive sizing
- [ ] Imperative Toast/Dialog have matching WXML elements
- [ ] CSS variables in app.wxss for brand theming
- [ ] WeChat green replaced with project brand color if not WeChat
- [ ] safe-area-inset-bottom on fixed-bottom elements
- [ ] Tested in WeChat Developer Tools and on-device
```

## 8. Alternatives

| Scenario | Alternative |
|---|---|
| WeChat MP + Tencent aligned visual | TDesign MiniProgram (see skill) |
| Multi-vendor MiniProgram (WeChat + Alipay + ByteDance + ...) | Taro + NutUI React / Vue |
| UniApp-based project | nutui-uniapp |

See [components/by-platform/miniprogram.md](../../components/by-platform/miniprogram.md).

## 9. Dial fit

formality: 5 · motion: 4 · density: 6 · warmth: 6 · contrast: 5
