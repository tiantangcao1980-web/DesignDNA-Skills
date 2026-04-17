# JD Ecosystem — Taro + NutUI

> Last audit: 2026-04. Health: `active` / `maintenance` / `deprecated`.

## Summary

JD (京东) maintains the most comprehensive **cross-platform MiniProgram** stack in China: the **Taro** framework (37k stars) compiles React/Vue to 7 MiniProgram vendors + H5 + React Native + HarmonyOS, paired with **NutUI** as the native-feeling component library. The ecosystem is bifurcated: Taro and NutUI core are active; Taro UI, NutUI React Native, NutUI-biz and NutUI-bingo have slowed to maintenance or stopped entirely.

## Roster

### Framework

| Library | Purpose | Stars | Last commit | Latest ver | Health | Platforms |
|---|---|---|---|---|---|---|
| [NervJS/taro](https://github.com/NervJS/taro) | Cross-platform framework (React/Vue → MiniPrograms + H5 + RN + HarmonyOS) | 37.4k | 2026-04 | v3.6.40 | active | WeChat / Alipay / ByteDance / Baidu / QQ / JD / Kuaishou + H5 + RN + HarmonyOS |

### Component libraries

| Library | Framework | Stars | Last commit | Latest ver | Health | NPM |
|---|---|---|---|---|---|---|
| [jdf2e/nutui](https://github.com/jdf2e/nutui) | **Vue 3** (flagship) | 6.5k | 2026-04 | v4.3.14-beta.3 | active | `@nutui/nutui` |
| [jdf2e/nutui-react](https://github.com/jdf2e/nutui-react) | React (+ Taro MiniPrograms) | 1.2k | 2026-04 | v3.0.18 | active | `@nutui/nutui-react` |
| [nutui-uniapp/nutui-uniapp](https://github.com/nutui-uniapp/nutui-uniapp) | UniApp + Vue 3 (community port) | 553 | 2026-04 | v1.11.2 | active | `nutui-uniapp` |
| [jd-opensource/taro-ui](https://github.com/jd-opensource/taro-ui) | Taro 2/3 (React) | 4.7k | 2024-08 | v3.3.0 | **maintenance** (Taro 4.x support lagging) | `taro-ui` |

### Extensions / specializations

| Library | Purpose | Stars | Last commit | Health | Notes |
|---|---|---|---|---|---|
| [jdf2e/nutui-templates](https://github.com/jdf2e/nutui-templates) | E-commerce page templates | 152 | 2026-04 | active | Vue/React scaffolds |
| [jdf2e/nutui-icons](https://github.com/jdf2e/nutui-icons) | Official icon set | 12 | 2026-03 | active | Vue/React universal |
| [jdf2e/nutui-biz](https://github.com/jdf2e/nutui-biz) | E-commerce business components (address, coupon, SKU) | 67 | 2025-01 | **maintenance** | Last ver 1.0 (2023-03) |
| [jd-opensource/nutui-react-native](https://github.com/jd-opensource/nutui-react-native) | Native iOS/Android (React Native) | 150 | 2025-03 | **maintenance** | Early stage, v0.0.8 |
| [jd-opensource/nutui-bingo](https://github.com/jd-opensource/nutui-bingo) | Marketing gamification (spinning wheel, 9-grid lottery) | 484 | 2023-02 | **deprecated** | Based on NutUI Vue 1.x, 3+ years dormant |

## When to choose

### Taro for multi-MiniProgram
Use Taro **whenever** the product must ship to WeChat + any other MiniProgram platform (Alipay, ByteDance, Baidu, QQ, JD, Kuaishou, Harmony). It is the de-facto standard with the broadest runtime support.

### NutUI flavors

| You use... | Choose |
|---|---|
| Taro 4.x + React | **NutUI-React** (latest compat) |
| Taro 4.x + Vue 3 | **NutUI-Vue** (v4 flagship) |
| UniApp + Vue 3 | **nutui-uniapp** (community-maintained but active) |
| Taro 2/3 (legacy) | Taro-UI still works, but upgrade path to NutUI is recommended |
| React Native new project | Not NutUI RN (too early); use React Native Paper or Tamagui instead |

### Skip

- **NutUI-Bingo**: 3+ years unmaintained, based on Vue 1.x. If you need marketing game UIs, write custom or use GSAP/Lottie for animations.
- **NutUI-Biz**: Maintenance-only. If you need e-commerce components, copy-reference its source but don't depend on it.
- **Taro-UI for Taro 4.x**: Untested with the new build chain; use NutUI directly.

## Compile targets supported by Taro

- WeChat MiniProgram (小程序)
- Alipay MiniProgram (支付宝)
- ByteDance MiniProgram (字节跳动)
- Baidu Smart Program (百度智能小程序)
- QQ MiniProgram (QQ 小程序)
- JD MiniProgram (京东小程序)
- Kuaishou MiniProgram (快手小程序)
- H5 / Web
- React Native
- HarmonyOS (鸿蒙)

## Dial fit

| Dial | NutUI positioning |
|---|---|
| Formality | 4-5 (friendly e-commerce) |
| Motion | 5-6 (playful micro-interactions) |
| Density | 6 (product-list friendly) |
| Warmth | 6-7 (vibrant, warm red accent) |
| Contrast | 5-6 (soft) |
