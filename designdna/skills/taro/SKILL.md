---
name: taro
description: Taro cross-platform framework skill — compile React/Vue/Nerv to 7+ MiniProgram vendors (WeChat, Alipay, ByteDance, Baidu, QQ, JD, Kuaishou) + H5 + React Native + HarmonyOS from one codebase. Includes project setup, config, compilation targets, and common pitfalls. For UI components, pair with `nutui-react` or `nutui-vue` skill.
---

# Taro — Cross-Platform MiniProgram Framework

> **Source**: [NervJS/taro](https://github.com/NervJS/taro) · 37.4k stars · active through 2026-04 · latest v3.6.40
> **Health**: 🟢 active — de-facto standard for multi-vendor MiniProgram development in China
> **Docs**: https://taro-docs.jd.com/

## 1. When to use Taro

| Signal | Use Taro? |
|---|---|
| Must ship to WeChat + Alipay / ByteDance / Baidu / QQ / JD / Kuaishou | ✅ First choice |
| WeChat MiniProgram only, team knows React/Vue | ✅ Natural fit |
| WeChat MiniProgram only, team wants native WXML | ❌ Use native + Vant Weapp |
| Need React Native + MiniProgram parity | ✅ Taro compiles to RN too |
| HarmonyOS target | ✅ Taro has Harmony plugin |
| Need peak performance on iOS/Android natively | ❌ Consider UniApp X or Flutter |

## 2. Installation

```bash
# CLI
npm i -g @tarojs/cli

# Scaffold a new project
taro init myApp
# → choose React / Vue 3 + TypeScript + NutUI template
```

Supported Node: ≥ 16. Taro 3.x/4.x requires modern tooling (Vite or Webpack 5).

## 3. Compile targets

One codebase → many outputs:

```bash
# Development (watch mode)
taro build --type weapp --watch           # WeChat
taro build --type alipay --watch          # Alipay
taro build --type tt --watch              # ByteDance (Douyin)
taro build --type swan --watch            # Baidu
taro build --type qq --watch              # QQ
taro build --type jd --watch              # JD
taro build --type kwai --watch            # Kuaishou
taro build --type h5 --watch              # Web
taro build --type rn --watch              # React Native
taro build --type harmony                 # HarmonyOS
```

## 4. Project structure (typical React + Taro)

```
myApp/
├── config/
│   ├── index.js          # Platform-agnostic config
│   ├── dev.js            # Dev overrides
│   └── prod.js           # Prod overrides
├── src/
│   ├── app.config.ts     # Global MiniProgram config (pages, tabBar, window)
│   ├── app.tsx           # Root App component
│   ├── app.scss          # Global styles
│   ├── pages/
│   │   └── index/
│   │       ├── index.tsx
│   │       ├── index.config.ts    # Per-page config
│   │       └── index.scss
│   └── components/
├── types/
└── package.json
```

## 5. Core API patterns

### Routing

```tsx
import Taro from '@tarojs/taro';

// Navigate
Taro.navigateTo({ url: '/pages/detail/index?id=123' });
Taro.redirectTo({ url: '/pages/login/index' });
Taro.switchTab({ url: '/pages/home/index' });
Taro.navigateBack();

// Read params inside target page
const params = Taro.getCurrentInstance().router?.params;
```

### Storage

```tsx
await Taro.setStorage({ key: 'user', data: user });
const { data } = await Taro.getStorage({ key: 'user' });
await Taro.removeStorage({ key: 'user' });
```

### Network

```tsx
const { data } = await Taro.request({
  url: 'https://api.example.com/users',
  method: 'POST',
  data: { name: 'Alice' },
  header: { Authorization: `Bearer ${token}` },
});
```

### UI feedback

```tsx
Taro.showToast({ title: 'Saved', icon: 'success', duration: 1500 });
Taro.showLoading({ title: 'Loading...' });
Taro.hideLoading();
Taro.showModal({ title: 'Confirm?', content: 'Delete this item?' });
```

## 6. Platform-conditional code

```tsx
import Taro from '@tarojs/taro';

if (process.env.TARO_ENV === 'weapp') {
  // WeChat-only code
} else if (process.env.TARO_ENV === 'h5') {
  // H5-only code
}
```

Or declaratively:

```tsx
import { View } from '@tarojs/components';
import SafeArea from './SafeArea';  // H5 fallback
import Taro from '@tarojs/taro';

export default function Header() {
  return process.env.TARO_ENV === 'weapp' ? (
    <View className="wx-header" />
  ) : (
    <SafeArea />
  );
}
```

## 7. Recommended UI library

Pair Taro with one of these (see respective skill files):

| Taro target | UI library | Skill file |
|---|---|---|
| React projects | **NutUI React** | `nutui-react/SKILL.md` |
| Vue 3 projects | **NutUI Vue 3** | `nutui-vue/SKILL.md` |
| Legacy (Taro 2/3 + React) | Taro UI (maintenance) | `taro-ui/SKILL.md` |

## 8. BANNED patterns (Taro-specific)

- ❌ NEVER use `document.*`, `window.*`, or DOM APIs directly — will fail on MiniProgram targets. Use `Taro.*` APIs.
- ❌ NEVER use CSS custom properties that are unsupported on MiniProgram (some platforms) — test on target vendor first.
- ❌ NEVER use HTML elements in JSX like `<div>`, `<span>`, `<img>` — use `@tarojs/components`'s `<View>`, `<Text>`, `<Image>`.
- ❌ NEVER use `className="xxx yyy"` concatenation without checking — some platforms require space-separated class names in fixed order.
- ❌ NEVER assume `setState` is synchronous — Taro wraps React async behavior but MiniProgram renderer can batch differently.
- ❌ NEVER use `display: grid` without testing — older MiniProgram runtimes have partial support.
- ❌ NEVER put business logic in `app.tsx` — use global store (Redux / Zustand / Pinia) or a context provider.
- ❌ NEVER import the full icon library (`@nutui/icons-react`) — tree-shake individual icons: `import { User } from '@nutui/icons-react/dist/User';`

## 9. Taro UI vs direct native

**Legacy project on Taro 2/3 with Taro UI**: safe to keep, but schedule migration if you're going to Taro 4.x. Taro UI has not been updated for Taro 4 (last meaningful release: 2024-08).

**New Taro 4.x project**: go directly with NutUI-React or NutUI-Vue. Don't start with Taro UI.

## 10. Pre-flight checklist (Taro projects)

Before generating Taro code, confirm:

```
- [ ] Taro version specified (3.6.x or 4.x) — affects APIs and UI library compat
- [ ] Target platforms declared (weapp / alipay / h5 / etc.)
- [ ] UI library chosen (NutUI React / NutUI Vue / Taro UI legacy)
- [ ] Using @tarojs/components (<View>, <Text>, etc.) — NOT raw HTML tags
- [ ] Using Taro.* APIs — NOT browser globals (document, window, localStorage)
- [ ] Icons imported individually — NOT whole library
- [ ] Per-page config file (*.config.ts) for MiniProgram-specific settings
- [ ] app.config.ts includes all pages and tabBar
- [ ] Tested at least the primary target platform
- [ ] package.json dependencies pinned (Taro packages should share same version)
```

## 11. Common gotchas

| Symptom | Cause | Fix |
|---|---|---|
| CSS units `px` behave weird on MiniProgram | Taro auto-converts `px → rpx` | Use `Px()` to opt out: `fontSize: Px(14)` |
| Event handlers not firing | Wrong event name on MiniProgram | Use `onClick` (Taro normalizes to `bindtap`) |
| Image not showing | Missing `mode` attr on some platforms | `<Image mode="aspectFit" />` |
| Swiper renders blank | Nested incorrectly in Scroll view on WeChat | Move Swiper outside ScrollView |
| `navigateTo` fails | URL exceeds 2KB on WeChat | Use storage to pass large objects instead |
| H5 white-screen in production | Root path mismatch | Set `h5.router.basename` in config/ |
