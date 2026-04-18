---
name: material-components-ios
description: Material Components for iOS (MDC-iOS) — Google's Material Design library for UIKit. Archived 2025-12 but still usable for existing projects. Covers installation, component reference, theming, and migration guidance to SwiftUI/Apple HIG for new projects.
---

# Material Components for iOS (MDC-iOS)

> **Source**: [material-components/material-components-ios](https://github.com/material-components/material-components-ios) · ~5k ⭐
> **Status**: 🟡 Archived on 2025-12-11 — repo is read-only, but the library still works on supported iOS versions
> **Last version**: 124.x
> **Suggested path for new projects**: SwiftUI + Apple HIG (see `apple-hig` skill)

## Status context

Google archived this repository on **2025-12-11**. "Archived" on GitHub means the code is read-only — you can still install it via CocoaPods / Swift Package Manager, existing apps continue to work, but no new features or bug fixes are being shipped.

For projects **already using MDC-iOS**, this is not an emergency. Pin the version, plan a gradual migration on your own schedule.

For **new iOS projects**, prefer one of:
- **SwiftUI** + Apple HIG — the Apple-native path (see `apple-hig` skill)
- **Flutter** + Material — if you want Material on iOS for brand consistency with Android (see `flutter-material` skill)

## Why did Google archive it?

- UIKit is being gradually superseded by SwiftUI
- Material Design on iOS always sat uncomfortably next to HIG
- Google's resources shifted to Compose Multiplatform for cross-platform native

## Install (existing projects)

```ruby
# Podfile
pod 'MaterialComponents', '~> 124.0'
```

Or Swift Package Manager — add `https://github.com/material-components/material-components-ios` at a pinned tag.

## Options for ongoing projects

### Option A: Stay on MDC-iOS

The archived code still works on the iOS versions it supported. Pin the version, monitor the iOS-version support matrix as Apple releases new SDKs, and plan migration on your own cadence.

### Option B: Migrate to SwiftUI (the long-term winner)

For each MDC component, map to SwiftUI:

| MDC-iOS | SwiftUI equivalent |
|---|---|
| `MDCButton` | `Button` with custom `.buttonStyle` |
| `MDCTextField` | `TextField` |
| `MDCAppBar` / `MDCFlexibleHeaderView` | `NavigationStack` + `.navigationTitle` |
| `MDCFloatingButton` | Custom `Button` with circular background + shadow |
| `MDCAlertController` | `.alert(...)` modifier |
| `MDCBottomNavigationBar` | `TabView` |
| `MDCSnackbar` | Custom overlay + `.opacity` animation OR third-party (Drops) |
| `MDCCard` | `VStack` with `.background` + `.cornerRadius` + `.shadow` |

### Option C: Migrate to UIKit + custom styling

If SwiftUI isn't feasible, use stock UIKit (`UIButton`, `UITextField`, `UIAlertController`) and apply custom styling for Material look. Search for community libraries that fill the gap (e.g., `MaterialShowcase`).

## Component reference

MDC-iOS provides: buttons, app bars, text fields, navigation drawer, tabs, cards, chips, dialogs, bottom sheets, snackbars, sliders, switches, progress views, activity indicators, collection view cells, floating action button, typography, colors, shape, motion.

Docs accessible at https://github.com/material-components/material-components-ios (read-only).

## Migration example: MDCButton → SwiftUI

### Before (MDC-iOS)

```swift
import MaterialComponents

let button = MDCButton()
button.setTitle("Save", for: .normal)
button.applyContainedTheme(withScheme: containerScheme)
button.addTarget(self, action: #selector(save), for: .touchUpInside)
```

### After (SwiftUI)

```swift
Button("Save") {
    save()
}
.buttonStyle(.borderedProminent)
.controlSize(.large)
.tint(.accentColor)
```

### Custom Material look in SwiftUI (if needed)

```swift
struct MaterialPrimaryButton: View {
    let title: String
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            Text(title)
                .font(.system(size: 14, weight: .medium))
                .foregroundColor(.white)
                .padding(.horizontal, 24)
                .padding(.vertical, 10)
                .frame(minHeight: 36)
                .background(Color.accentColor)
                .cornerRadius(4)
                .shadow(color: .black.opacity(0.2), radius: 2, x: 0, y: 1)
        }
    }
}
```

## Guidance

- Prefer **SwiftUI + Apple HIG** for new projects — it's the long-term direction.
- If continuing MDC-iOS: pin the version, track iOS-version support, and migrate pragmatically rather than all-at-once.
- Don't assume future iOS SDK changes will be fixed upstream — plan fallbacks.

## Pre-flight checklist (existing projects)

```
- [ ] MDC-iOS version pinned in Podfile / SPM
- [ ] Migration plan documented (SwiftUI recommended as target)
- [ ] Tested on the latest iOS version you support
- [ ] New screens use SwiftUI where practical
- [ ] Shared tokens (colors, typography) defined in one place for easier future swap
```

## See also

- **apple-hig** skill — design spec for iOS-native look
- **flutter-material** skill — if you want Material on iOS via Flutter (cross-platform)
- **[DEPRECATED.md](../../components/DEPRECATED.md)** — full list of archived libraries
