# Cross-Platform Frameworks

> Last audit: 2026-04. Frameworks that target multiple runtimes from a single codebase.

## Overview

| Framework | Core tech | Runtimes |
|---|---|---|
| **Taro** 🟢 | React/Vue → compile | 7 MiniProgram vendors + H5 + RN + HarmonyOS |
| **UniApp** 🟢 | Vue 3 → compile | 9 MiniProgram vendors + H5 + iOS/Android (plus-native) + HarmonyOS |
| **UniApp X** 🟢 | UTS (TS-native) | WeChat MP + HarmonyOS + native iOS/Android, near-native perf |
| **Flutter** 🟢 | Dart + Skia | iOS, Android, Web, desktop, embedded |
| **React Native** 🟢 | React + native | iOS, Android (+ web via RN-Web) |
| **Tauri** 🟢 | Rust + WebView | Desktop apps with web UI |
| **Electron** 🟢 | Chromium + Node | Desktop (heavier bundle) |
| **Ionic / Capacitor** 🟢 | Web + native bridge | Hybrid mobile |

## Framework × component library combinations

| Framework | Recommended UI library |
|---|---|
| Taro 4.x + React | NutUI React 🟢 |
| Taro 4.x + Vue 3 | NutUI Vue 3 🟢 |
| Taro 2/3 legacy | Taro UI 🟡 (maintenance; migrate when possible) |
| UniApp + Vue 3 | uni-ui (official) 🟢 OR nutui-uniapp 🟢 |
| UniApp X | Built-in components (UTS-native) 🟢 |
| Flutter | `package:flutter/material` (built-in) 🟢 OR TDesign Flutter 🟢 |
| React Native | React Native Paper 🟢 OR Tamagui 🟢 |
| React Native + Web universal | Tamagui 🟢 |
| Tauri / Electron | Any React/Vue UI library of your choice |

## Selection heuristic

```
Goal                                        → Pick
--------------------------------------------|-----------------------------
Max MiniProgram coverage (all 7+ vendors)   → Taro (37k stars, 2026-04 active)
Max UniApp ecosystem with mature Vue 3      → UniApp + uni-ui / nutui-uniapp
Highest perf on iOS/Android/HarmonyOS       → UniApp X (UTS-based)
Highest visual quality on iOS/Android       → Flutter
Bring existing React/Vue code to MiniProgram → Taro
Bring React to iOS/Android                  → React Native + Tamagui / Paper
Desktop app with web UI                     → Tauri (light) or Electron (full Node)
iOS/Android hybrid with web DOM             → Ionic + Capacitor
```

## Deprecated

- Remax 🔴 (MiniProgram via React, stopped 2022 — use Taro)
- NativeScript Vue 🟡 (slower momentum since 2024)
- Weex 🔴 (Alibaba abandoned; UniApp X is the modern successor)
