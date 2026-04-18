---
name: material-components-ios
description: ⚠️ DEPRECATED / ARCHIVED. Material Components for iOS (MDC-iOS) was Google's Material Design for UIKit but was archived on 2025-12-11. Do NOT use for new iOS projects. Use SwiftUI + Apple HIG instead (see `apple-hig` skill). This skill documents the archived library for existing-project maintenance only.
---

# Material Components for iOS (MDC-iOS) — ⚠️ ARCHIVED

> **Source**: [material-components/material-components-ios](https://github.com/material-components/material-components-ios) · ~5k ⭐
> **Status**: 🔴 **ARCHIVED 2025-12-11**
> **Last version**: 124.x (2023 era)
> **Successor**: SwiftUI + Apple HIG — see `apple-hig` skill

## ⚠️ DO NOT USE for new projects

Google officially ended support for this library on **2025-12-11**. The GitHub repo is archived (read-only). There will be no future updates, bug fixes, or iOS compatibility patches.

**For new iOS projects**:
- ✅ Use **SwiftUI** + Apple HIG for iOS-native look and feel
- ✅ If you truly need Material on iOS (cross-platform brand consistency), consider **Flutter** + Material instead

## Why did Google archive it?

- UIKit was on its way out (Apple has been pushing SwiftUI for years)
- Material Design on iOS never felt native — iOS users prefer HIG aesthetics
- Maintenance cost was high for low adoption
- Google's resources shifted to Compose Multiplatform for cross-platform native

## If you're on an existing MDC-iOS project

You have these options:

### Option A: Stay on MDC-iOS (short-term)

- The archived code still works on iOS versions it supported
- **Risk**: iOS 19+ may introduce API changes that break the library
- Pin the version in Podfile:
  ```ruby
  pod 'MaterialComponents', '~> 124.0'
  ```
- Plan migration within 12-18 months

### Option B: Migrate to SwiftUI (recommended)

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

## Archived component reference (for existing-project maintenance)

### Components that were in MDC-iOS

Buttons, app bars, text fields, navigation drawer, tabs, cards, chips, dialogs, bottom sheets, snackbars, sliders, switches, progress views, activity indicators, collection view cells, floating action button, typography, colors, shape, motion.

### Archived docs

Still accessible at https://github.com/material-components/material-components-ios (read-only). Use for reference only.

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

## BANNED (for new projects)

- ❌ NEVER start a new iOS project with `MaterialComponents` — use SwiftUI + Apple HIG
- ❌ NEVER use `MDCButton`, `MDCCard`, `MDCAppBar`, etc. in new code — build with SwiftUI / UIKit
- ❌ NEVER assume iOS versions beyond the archive date will remain compatible — no fixes coming
- ❌ NEVER pull via CocoaPods `latest` — pin to a known-good version if staying on the library

## For existing projects — Pre-flight checklist

```
- [ ] MDC-iOS version pinned in Podfile
- [ ] Migration plan documented (SwiftUI preferred)
- [ ] Migration deadline agreed (recommend < 18 months from 2025-12)
- [ ] Tested on latest iOS version you support
- [ ] No new MDC-iOS code being added
- [ ] Components progressively replaced with SwiftUI or custom UIKit
```

## See also

- **apple-hig** skill — design spec for iOS-native look
- **flutter-material** skill — if you want Material on iOS via Flutter (cross-platform)
- **[DEPRECATED.md](../../components/DEPRECATED.md)** — full list of archived libraries
