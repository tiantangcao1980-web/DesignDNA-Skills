# Google Material Design Ecosystem

> Last audit: 2026-04. **Major finding:** most of Google's official Material Components libraries are now archived or in maintenance mode. **MUI has become the de-facto Material Design carrier on the web**, and Android Compose Material3 is the recommended path on Android.

## Summary of state

Google's umbrella `material-components` repo is an **archived** documentation shell. The per-platform projects have diverged:

- **iOS**: `material-components-ios` **archived 2025-12**. Use SwiftUI / HIG directly.
- **Flutter**: `material-components-flutter` **archived 2023-11**; Material 3 is now bundled inside the Flutter SDK (`package:flutter/material`).
- **Web Components**: `material-web` (Lit-based, replacing older MWC) is in **maintenance mode** waiting for a new maintainer.
- **Android**: `material-components-android` (View system) is still **active**; Compose users should use `androidx.compose.material3`.
- **React**: **MUI `material-ui`** is the practical standard.

## Roster

### Google official (most archived / maintenance)

| Library | Platform | Stars | Last commit | Health | Notes |
|---|---|---|---|---|---|
| [material-components](https://github.com/material-components/material-components) | Umbrella docs | — | — | **archived** | Historical reference only |
| [material-components-android](https://github.com/material-components/material-components-android) | Android (View/XML) | 17.2k | 2026-04 | **active** | 1.14.0-beta01 with M3 Expressive. Compose users: prefer `androidx.compose.material3` |
| [material-components-ios](https://github.com/material-components/material-components-ios) | iOS UIKit | ~5k | 2025-12 (archived) | **archived** | Read-only. Use Apple HIG + SwiftUI for new iOS |
| [material-web](https://github.com/material-components/material-web) | Lit Web Components | ~9k | — | **maintenance** | No active development; Google looking for new maintainer |
| [material-components-flutter](https://github.com/material-components/material-components-flutter) | Flutter | — | 2023-11 (archived) | **archived** | Material 3 folded into Flutter SDK itself |

### MUI family (React — active)

| Library | Purpose | Stars | Last commit | Latest ver | Health | NPM |
|---|---|---|---|---|---|---|
| [mui/material-ui](https://github.com/mui/material-ui) | React Material components | 98.2k | 2026-02 | v7.3.8 | **active** | `@mui/material` |
| [mui/base-ui](https://github.com/mui/base-ui) | Headless React primitives (rival to Radix) | 9.1k | 2026 | v1.1 stable | **active** | `@base-ui-components/react` |
| [mui/mui-x](https://github.com/mui/mui-x) | DataGrid, Charts, DatePicker (Pro/Premium split) | 5-6k | 2026-04 | v9.0.0 | **active** | `@mui/x-data-grid`, `@mui/x-charts`, `@mui/x-date-pickers` |
| [mui/mui-design-kits](https://github.com/mui/mui-design-kits) | Figma design kits | < 1k | — | — | maintenance | — |
| [mui/pigment-css](https://github.com/mui/pigment-css) | Zero-runtime CSS-in-JS (RSC-compatible) | — | — | **alpha** | experimental | `@pigment-css/react` |
| [mui/toolpad](https://github.com/mui/toolpad) | Low-code builder | ~4k | 2025-06 | v0.16.0 | **deprecated / inactive** | — |

## Decision guide

### React web application
→ `@mui/material` (mature, dense component set, v7 supports Material 3 partially) OR `@base-ui-components/react` (headless, build your own visual language)

### Need DataGrid / advanced DatePicker / complex Charts
→ `@mui/x-*` (social-friendly MIT tier, commercial for Pro/Premium features)

### Android new project
→ Use **`androidx.compose.material3`** (Jetpack Compose) — not this repo. Only use `material-components-android` for legacy View-system apps.

### iOS new project
→ Use **SwiftUI + Apple HIG** directly. `material-components-ios` is archived.

### Flutter new project
→ Use **`package:flutter/material`** bundled with Flutter SDK. External `material-components-flutter` is archived.

### Web Components
→ Be cautious. `material-web` is in maintenance mode. Consider Shoelace or Radix if you want cross-framework primitives.

## Material 3 (Material You) status

| Platform | M3 status |
|---|---|
| Android (Compose) | ✅ Full support via `androidx.compose.material3` |
| Android (Views) | ✅ `material-components-android` 1.12+ with M3 |
| Flutter | ✅ Bundled in Flutter SDK |
| Web (material-web) | ⚠️ Partial, no new development |
| React (MUI) | ⚠️ Partial — still primarily M2, M3 piecemeal |
| MUI Figma Kits | ⚠️ Issue [#135](https://github.com/mui/mui-design-kits/issues/135) open for M3 |

## Dial fit

| Dial | Material Design positioning |
|---|---|
| Formality | 6 (polished but approachable) |
| Motion | 6-7 (curves, ripples, shared-element transitions) |
| Density | 5-6 (balanced) |
| Warmth | 5-7 (depends on M3 color theme) |
| Contrast | 6 (accessible) |
