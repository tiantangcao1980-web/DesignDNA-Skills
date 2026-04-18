---
name: uniapp
description: UniApp — DCloud's cross-platform framework (41.5k stars, v5.07, active). Compile Vue 3 to 9 MiniProgram vendors + H5 + iOS/Android + HarmonyOS. UniApp X variant (UTS-based, near-native) recommended for WeChat + HarmonyOS + native iOS/Android. Covers install, uni-ui components, pages.json, easycom, platform-conditional compilation.
---

# UniApp — DCloud Cross-Platform Framework

> **Source**: [dcloudio/uni-app](https://github.com/dcloudio/uni-app) · 41.5k ⭐ · v5.07 · 🟢 active 2026
> **Docs**: https://uniapp.dcloud.net.cn/component/
> **UniApp X Docs**: https://doc.dcloud.net.cn/uni-app-x/component/

## 1. UniApp vs UniApp X

| Feature | UniApp (classic) | UniApp X (new) |
|---|---|---|
| Runtime | Vue 3 + JS | UTS (TS-native + native rendering) |
| MiniProgram vendors | 9 (WeChat, Alipay, ByteDance, Baidu, QQ, Kuaishou, JD, Xiaohongshu, HarmonyOS) | WeChat + HarmonyOS only |
| iOS / Android | Plus-native (WebView-based) | Near-native (no JS bridge) |
| Performance | Good | **Native-level** |
| Ecosystem maturity | Very mature | Growing, official UI in development |

**2026 guidance**:
- **Max MP coverage** → UniApp (classic)
- **Max iOS/Android perf, WeChat + Harmony only** → UniApp X

## 2. Install UniApp

### Via HBuilderX (recommended for beginners)

Download HBuilderX IDE, create new project → "uni-app" template.

### Via CLI (Vue 3 + Vite)

```bash
npx degit dcloudio/uni-preset-vue#vite-ts my-app
cd my-app
npm install
npm run dev:h5        # H5
npm run dev:mp-weixin # WeChat
npm run dev:app       # iOS/Android (requires HBuilderX to package)
```

### pages.json (route manifest)

```json
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": { "navigationBarTitleText": "首页" }
    }
  ],
  "globalStyle": {
    "navigationBarBackgroundColor": "#ffffff",
    "backgroundColor": "#f8f8f8"
  },
  "tabBar": {
    "list": [
      { "pagePath": "pages/index/index", "iconPath": "static/home.png", "selectedIconPath": "static/home-active.png", "text": "首页" }
    ]
  },
  "easycom": {
    "autoscan": true,
    "custom": {
      "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
    }
  }
}
```

## 3. Built-in components (tag-based)

UniApp provides WeChat-MP-compatible tags out of the box:

**View**: `<view>` · `<scroll-view>` · `<swiper>` · `<movable-view>` · `<cover-view>`

**Text**: `<text>` · `<rich-text>`

**Form**: `<button>` · `<input>` · `<textarea>` · `<checkbox>` / `<checkbox-group>` · `<radio>` / `<radio-group>` · `<slider>` · `<switch>` · `<picker>` · `<picker-view>`

**Media**: `<image>` · `<video>` · `<audio>` · `<camera>` · `<live-player>` · `<live-pusher>`

**Navigation**: `<navigator>`

**Canvas**: `<canvas>`

**Ad**: `<ad>` · `<ad-content-page>` · `<ad-draw>`

Full list: https://uniapp.dcloud.net.cn/component/

## 4. uni-ui official components

```bash
# Usually pre-installed via the vue-cli template
npm install @dcloudio/uni-ui
```

Component prefix: `<uni-*>`.

### Catalog

`uni-badge` · `uni-breadcrumb` · `uni-calendar` · `uni-card` · `uni-collapse` · `uni-combox` · `uni-countdown` · `uni-data-checkbox` · `uni-data-picker` · `uni-data-select` · `uni-datetime-picker` · `uni-drawer` · `uni-easyinput` · `uni-fab` · `uni-fav` · `uni-file-picker` · `uni-forms` · `uni-goods-nav` · `uni-grid` · `uni-icons` · `uni-indexed-list` · `uni-link` · `uni-list` · `uni-load-more` · `uni-nav-bar` · `uni-notice-bar` · `uni-number-box` · `uni-pagination` · `uni-popup` · `uni-rate` · `uni-row` / `uni-col` · `uni-search-bar` · `uni-section` · `uni-segmented-control` · `uni-status-bar` · `uni-steps` · `uni-swipe-action` · `uni-swiper-dot` · `uni-table` · `uni-tag` · `uni-title` · `uni-transition`

## 5. Usage

### Basic page

```vue
<template>
  <view class="container">
    <uni-nav-bar title="首页" />
    <uni-list>
      <uni-list-item title="设置" show-arrow @click="goSettings" />
      <uni-list-item title="退出" :clickable="true" @click="logout" />
    </uni-list>
    <uni-fab :pattern="fabPattern" @fabClick="onFabClick" />
  </view>
</template>

<script setup lang="ts">
const fabPattern = {
  color: '#fff',
  backgroundColor: '#007aff',
  icon: 'plusempty',
};

const goSettings = () => uni.navigateTo({ url: '/pages/settings/index' });
const logout = () => {
  uni.showModal({
    title: '确认退出？',
    success: (res) => { if (res.confirm) uni.reLaunch({ url: '/pages/login/index' }); },
  });
};
</script>
```

### Form

```vue
<template>
  <uni-forms ref="form" :modelValue="formData" :rules="rules">
    <uni-forms-item label="用户名" name="username">
      <uni-easyinput v-model="formData.username" placeholder="请输入" />
    </uni-forms-item>
    <uni-forms-item label="密码" name="password">
      <uni-easyinput v-model="formData.password" type="password" />
    </uni-forms-item>
    <button type="primary" @click="onSubmit">登录</button>
  </uni-forms>
</template>
```

### Platform conditionals

```vue
<template>
  <view>
    <!-- #ifdef MP-WEIXIN -->
    <view>仅微信小程序显示</view>
    <!-- #endif -->
    <!-- #ifdef H5 -->
    <view>仅 H5 显示</view>
    <!-- #endif -->
    <!-- #ifdef APP-PLUS -->
    <view>仅 App 显示</view>
    <!-- #endif -->
  </view>
</template>
```

Available platforms: `H5` · `MP-WEIXIN` · `MP-ALIPAY` · `MP-TOUTIAO` · `MP-BAIDU` · `MP-QQ` · `MP-KUAISHOU` · `MP-JD` · `MP-XHS` · `MP-HARMONY` · `APP-PLUS` · `APP-NVUE`

## 6. uni.* APIs

```ts
// Navigation
uni.navigateTo({ url: '/pages/detail/index?id=123' });
uni.redirectTo({ url: '/pages/home/index' });
uni.switchTab({ url: '/pages/main/index' });
uni.navigateBack();

// Storage
uni.setStorage({ key: 'user', data: {...} });
const { data } = await uni.getStorage({ key: 'user' });

// Network
uni.request({
  url: 'https://api.example.com/users',
  method: 'POST',
  data: { name: 'Alice' },
  header: { Authorization: 'Bearer xxx' },
  success: (res) => { console.log(res.data); },
});

// UI feedback
uni.showToast({ title: '成功', icon: 'success' });
uni.showLoading({ title: '加载中' });
uni.hideLoading();
uni.showModal({ title: '确认', content: '删除此项？', confirmText: '删除' });
```

## 7. BANNED

- ❌ NEVER use HTML tags (`<div>`, `<span>`) — UniApp tags only (`<view>`, `<text>`)
- ❌ NEVER use DOM globals (document, window, localStorage) — sandbox restricted
- ❌ NEVER hardcode `px` for layout — use `rpx` (750rpx = screen width)
- ❌ NEVER use `v-html` with untrusted content — MP rich-text has restrictions
- ❌ NEVER skip `easycom` if using uni-ui — manual imports needed otherwise
- ❌ NEVER use `box-shadow` expecting it to work on all MP vendors — test per-platform
- ❌ NEVER assume CSS `grid` works on every platform — use `flex` as baseline
- ❌ NEVER rely on default `uni-icons` without checking if the icon name exists — some are custom-font-only

## 8. Pre-flight checklist

```
- [ ] UniApp Vue 3 + Vite (not classic Vue 2 + Webpack)
- [ ] pages.json has all pages declared
- [ ] easycom set up for uni-ui (or nutui-uniapp)
- [ ] rpx used for responsive sizing
- [ ] Platform conditionals (#ifdef) where needed
- [ ] Target vendors tested (at minimum: H5 + primary MP)
- [ ] Brand color customized via CSS variables or theme override
- [ ] App target (if shipping native): pages.json globalStyle configured
- [ ] Permissions declared for native features (camera, location, etc.)
```

## 9. Alternatives

| Scenario | Alternative |
|---|---|
| React-based multi-platform | Taro (see skill) |
| Need native RN output | React Native |
| Max perf on WeChat + Harmony native | UniApp X (UTS) |
| NutUI components in UniApp | `nutui-uniapp` (see skill) |

## 10. Dial fit

Depends on UI library chosen. Default uni-ui: formality: 5 · motion: 4 · density: 5 · warmth: 5 · contrast: 5
