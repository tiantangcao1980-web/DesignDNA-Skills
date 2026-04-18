---
name: tdesign-flutter
description: TDesign Flutter — Tencent's Flutter component library (1.1k stars, active 2026). Alternative visual flavor to Flutter SDK's built-in Material. Use when you want Tencent's cross-platform design language on Flutter iOS/Android/Web. Includes install, component catalog, and theme customization.
---

# TDesign Flutter — Tencent Design on Flutter

> **Source**: [Tencent/tdesign-flutter](https://github.com/Tencent/tdesign-flutter) · 1.1k ⭐ · 🟢 active 2026-04
> **Package**: `tdesign_flutter` on pub.dev
> **Docs**: https://tdesign.tencent.com/flutter/overview

## 1. When to use

- Flutter app where you want **TDesign's visual language** (aligned with Tencent Web/Mobile/MiniProgram TDesign)
- Alternative to Flutter SDK's built-in Material (see `flutter-material` skill)
- Building a Tencent-ecosystem cross-platform product

**Note**: You can combine TDesign Flutter with Flutter's SDK Material — they coexist. Use TDesign for branded widgets, fall back to Material for widgets TDesign doesn't provide.

## 2. Install

### pubspec.yaml

```yaml
dependencies:
  flutter:
    sdk: flutter
  tdesign_flutter: ^0.2.0   # Check pub.dev for latest
```

```bash
flutter pub get
```

### Import

```dart
import 'package:tdesign_flutter/tdesign_flutter.dart';
```

## 3. Component catalog

TDesign Flutter prefixes components with `T` (e.g., `TButton`, `TCard`).

**Basic**: `TButton` · `TIcon` · `TBadge` · `TTag` · `TAvatar` · `TDivider` · `TLoading` · `TSkeleton`

**Layout**: `TGrid` · `TGridItem` · `TRow` · `TCol` · `TSpace` · `TSticky`

**Navigation**: `TNavBar` · `TTabs` · `TTabBar` · `TSteps` · `TIndexes` · `TLink`

**Form**: `TForm` · `TInput` · `TTextarea` · `TCheckbox` · `TCheckboxGroup` · `TRadio` · `TRadioGroup` · `TSwitch` · `TStepper` · `TPicker` · `TDatePicker` · `TTimePicker` · `TRate` · `TUpload` · `TSearchBar`

**Data**: `TCell` · `TCellGroup` · `TList` · `TCollapse` · `TSwiper` · `TSwipeCell` · `TCalendar` · `TImage` · `TImageViewer` · `TEmpty`

**Feedback**: `TToast` · `TDialog` · `TActionSheet` · `TPopup` · `TPullDownRefresh` · `TProgress` · `TNotify`

## 4. Usage

### Entry point

```dart
import 'package:flutter/material.dart';
import 'package:tdesign_flutter/tdesign_flutter.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'TDesign Flutter Demo',
      theme: ThemeData(
        useMaterial3: true,
        extensions: [
          TThemeData.defaultData(),  // TDesign theme extension
        ],
      ),
      home: const HomeScreen(),
    );
  }
}
```

### Button

```dart
TButton(
  text: 'Save',
  theme: TButtonTheme.primary,
  onTap: () => save(),
)

TButton(
  text: 'Cancel',
  variant: TButtonVariant.outline,
  onTap: () => cancel(),
)

TButton(
  text: 'Delete',
  theme: TButtonTheme.danger,
  size: TComponentSize.large,
  block: true,
  onTap: () => delete(),
)
```

### Cell list

```dart
TCellGroup(
  title: 'Account',
  children: [
    TCell(title: 'Name', note: 'Alice', arrow: true, onTap: () {}),
    TCell(title: 'Phone', note: '138****8888'),
    TCell(title: 'Address', note: 'Shanghai, Pudong', arrow: true, onTap: goAddress),
  ],
)
```

### Toast (imperative)

```dart
TToast.showSuccess('Saved', context: context);
TToast.showWarning('Warning', context: context);
TToast.showError('Failed', context: context);
TToast.showLoading(context: context);
```

### Dialog

```dart
TDialog(
  title: 'Confirm',
  content: Text('Delete this item?'),
  showCancel: true,
  confirmText: 'Delete',
  cancelText: 'Cancel',
  onConfirm: () {
    Navigator.pop(context);
    handleDelete();
  },
).show(context: context);
```

### Form

```dart
TForm(
  child: Column(
    children: [
      TFormItem(
        label: 'Username',
        name: 'username',
        rules: [TFormRule(required: true, message: 'Required')],
        child: TInput(controller: usernameCtrl, placeholder: 'Enter name'),
      ),
      TFormItem(
        label: 'Password',
        name: 'password',
        rules: [TFormRule(required: true, len: 6, message: 'Min 6 chars')],
        child: TInput(controller: passwordCtrl, obscureText: true),
      ),
      TButton(
        text: 'Sign in',
        theme: TButtonTheme.primary,
        block: true,
        onTap: onSubmit,
      ),
    ],
  ),
)
```

## 5. Theme

TDesign Flutter uses a theme extension on Flutter's `ThemeData`:

```dart
import 'package:tdesign_flutter/tdesign_flutter.dart';

final tdesignTheme = TThemeData(
  brandNormalColor: Color(0xFFfa2c19),
  brandHoverColor: Color(0xFFfa6419),
  // ... customize
);

ThemeData(
  useMaterial3: true,
  extensions: [tdesignTheme],
)
```

Inside a widget:

```dart
final theme = TTheme.of(context);
Text('Styled', style: TextStyle(color: theme.brandNormalColor));
```

## 6. BANNED

- ❌ NEVER mix TDesign Flutter + another non-Material Flutter UI library — visual chaos
- ❌ NEVER rely on TDesign Flutter widgets not in the catalog — some specialized components are still in development
- ❌ NEVER use TDesign Flutter on Flutter < 3.10 — requires modern Flutter
- ❌ NEVER use raw `ElevatedButton` alongside `TButton` in the same screen unless deliberately — looks inconsistent
- ❌ NEVER forget `import 'package:flutter/material.dart';` — you still need Flutter's Material foundations
- ❌ NEVER skip `TTheme` extension in `ThemeData` — theming falls back to defaults

## 7. Pre-flight checklist

```
- [ ] tdesign_flutter added to pubspec.yaml
- [ ] ThemeData extensions include TThemeData
- [ ] Flutter SDK >= 3.10
- [ ] TDesign widgets used consistently (don't mix with Material widgets for primary actions)
- [ ] Brand color customized via TThemeData if not Tencent-blue
- [ ] Imperative APIs (TToast, TDialog) use context parameter
- [ ] Responsive tested on iOS + Android
- [ ] Fall back to Material for widgets TDesign doesn't provide
```

## 8. Dial fit

formality: 6-7 · motion: 5 · density: 5 · warmth: 4 · contrast: 6

## 9. See also

- **`flutter-material`** skill — the default Flutter Material path (use for widgets TDesign Flutter lacks)
- **`tdesign-vue-next`** / **`tdesign-react`** / **`tdesign-miniprogram`** skills — web + MP sibling libraries
- [Tencent/tdesign-flutter on GitHub](https://github.com/Tencent/tdesign-flutter)
