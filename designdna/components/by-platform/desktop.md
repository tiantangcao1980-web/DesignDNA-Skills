# Desktop — Component Libraries

> Last audit: 2026-04. For desktop apps (Tauri, Electron) and web-based admin dashboards.

## Desktop shells

| Shell | Tier | Notes |
|---|---|---|
| Tauri 🟢 | Modern | Rust + WebView, ~3-10 MB bundles, fast startup |
| Electron 🟢 | Mature | Chromium + Node, large bundle, most ecosystem |
| Tauri + Svelte 🟢 | Minimal | Small bundles, great for utilities |
| Wails 🟢 | Go-based | Alternative to Tauri for Go devs |

## UI libraries inside the shell

Use whatever web UI library fits — the shell is just the container. The same decision matrix as web applies:

| Scenario | Pick |
|---|---|
| Enterprise-heavy desktop admin | Ant Design / TDesign React |
| Modern productivity app | Radix Themes / Chakra v3 |
| Microsoft-ecosystem integration | Fluent UI v9 |
| Material Design feel | MUI material-ui |
| Tailwind + custom design | shadcn/ui |

## Native desktop frameworks

| Framework | Tier | Notes |
|---|---|---|
| SwiftUI (macOS) 🟢 | Native | Best on macOS, follow Apple HIG |
| WinUI 3 🟢 | Microsoft | Windows 11 native, Fluent 2 built-in |
| .NET MAUI 🟢 | Microsoft | Cross-platform Windows/macOS/iOS/Android |
| Qt 🟢 | Cross-platform | C++/QML, mature but heavy |
| Flutter desktop 🟢 | Cross-platform | Stable on Windows/macOS/Linux |

## Admin dashboard starters

- [Ant Design Pro](https://github.com/ant-design/ant-design-pro) 🟢 — React + Umi scaffold
- [TDesign Starter (Vue/React)](https://tdesign.tencent.com/starter) 🟢 — TDesign dashboard templates
- [Vue Element Admin](https://github.com/PanJiaChen/vue-element-admin) 🟡 — Vue 2 legacy (avoid for new)
- [Vben Admin](https://github.com/vbenjs/vue-vben-admin) 🟢 — Vue 3 + Ant Design Vue
- [soybean-admin](https://github.com/soybeanjs/soybean-admin) 🟢 — Vue 3 + Naive UI + TypeScript

## Quick picker

```
Lightweight desktop app (cross-platform)    → Tauri + React/Vue + your chosen UI lib
Desktop with full Node access                → Electron + same
Windows 11 native                            → WinUI 3 with Fluent 2
macOS native                                 → SwiftUI + Apple HIG
React admin dashboard starter                → Ant Design Pro or TDesign React Starter
Vue 3 admin dashboard starter                → Vben Admin or Soybean Admin
```
