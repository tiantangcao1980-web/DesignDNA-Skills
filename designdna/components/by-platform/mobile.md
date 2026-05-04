# Mobile Component Libraries (by platform)

> Quick picks for mobile H5, React Native, Flutter, iOS, Android. Last audit: 2026-05.

## Mobile Web / H5

| Library | Framework | Npm | Health | Best for |
|---|---|---|---|---|
| Vant | Vue 3 | `vant` | 🟢 | Chinese-style mobile H5, e-commerce |
| Ant Design Mobile | React | `antd-mobile` | 🟢 | Mobile H5, adjacent to antd visual |
| TDesign Mobile Vue | Vue 3 | `tdesign-mobile-vue` | 🟢 | Tencent ecosystem, cross-platform token parity |
| TDesign Mobile React | React | `tdesign-mobile-react` | 🟢 (emerging) | Tencent ecosystem (React side), cross-platform token parity |
| NutUI (Vue 3) | Vue 3 | `@nutui/nutui` | 🟢 | JD-style, e-commerce business components |
| NutUI React | React | `@nutui/nutui-react` | 🟢 | JD-style (React), Taro-compatible |

## React Native

| Library | Npm | Health | Best for |
|---|---|---|---|
| React Native Paper | `react-native-paper` | 🟢 | Material Design for RN, mature |
| Tamagui | `tamagui` | 🟢 | RN + web unified, performance-optimized |
| NativeBase | `native-base` | 🟡 | v3 widely used but newer alternatives emerging |
| NutUI React Native | `@nutui/nutui-react-native` | 🟡 | Early stage (v0.0.8), prefer alternatives |

## Flutter

| Source | Approach | Health | Best for |
|---|---|---|---|
| Flutter SDK `material` | Built-in | 🟢 | Default Material 3 components, always updated |
| Flutter SDK `cupertino` | Built-in | 🟢 | Apple-style iOS aesthetic |
| TDesign Flutter | 3rd-party | 🟢 | Tencent ecosystem, Chinese styling |
| GetWidget | 3rd-party | 🟢 | 1000+ pre-built widgets |
| **Avoid** `material-components-flutter` (standalone) | archived | 🔴 | Folded into Flutter SDK |

## iOS (native)

| Source | Approach | Notes |
|---|---|---|
| SwiftUI + Apple HIG | First-party | 🟢 WWDC 2025: "Liquid Glass" material. Use as design token source. |
| UIKit + Apple HIG | First-party | 🟢 For legacy apps |
| **Avoid** `material-components-ios` | archived 2025-12 | Do not use |

## Android (native)

| Source | Approach | Health | Best for |
|---|---|---|---|
| Jetpack Compose + `androidx.compose.material3` | Modern, recommended | 🟢 | All new Android apps |
| `material-components-android` (View/XML) | Legacy, still supported | 🟢 | Existing View-based apps |

## HarmonyOS

| Library | Notes |
|---|---|
| ArkUI (HarmonyOS SDK native) | 🟢 Use for HarmonyOS Next |
| Taro + HarmonyOS target | 🟢 Cross-platform compile |
| UniApp X + HarmonyOS | 🟢 Cross-platform compile |

## Dial-to-library quick map (mobile)

| Vibe | Mobile pick |
|---|---|
| Warm, e-commerce (warmth 7+) | NutUI Vue / Vant |
| Clean modern B2B (formality 7+, density 5) | TDesign Mobile Vue |
| Material Design aesthetic | Flutter SDK / Compose Material3 |
| Native Apple feel | SwiftUI + HIG |
| Cross-platform with Chinese styling | Taro + NutUI |
