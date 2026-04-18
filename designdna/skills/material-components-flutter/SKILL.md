---
name: material-components-flutter
description: ⚠️ ARCHIVED / SUPERSEDED. Material Components for Flutter was a standalone repo but was archived on 2023-11-30 and all its work was folded into the Flutter SDK itself. Do NOT use for new projects. Use `package:flutter/material` (bundled with Flutter SDK) instead — see `flutter-material` skill. This file documents the archival and migration for historical reference.
---

# Material Components for Flutter — ⚠️ ARCHIVED

> **Source**: [material-components/material-components-flutter](https://github.com/material-components/material-components-flutter) ⚠️ **archived 2023-11-30**
> **Successor**: `package:flutter/material` bundled in Flutter SDK — see `flutter-material` skill

## ⚠️ DO NOT USE

This library was archived on **2023-11-30**. All Material Design components for Flutter are now **built into the Flutter SDK itself** under `package:flutter/material`. There is no external dependency to install.

## Why archived?

Google consolidated Material Design for Flutter into Flutter's core SDK:

- Reduces external dependencies
- Enables tighter integration with Flutter's rendering pipeline
- Material 3 (Material You) adopted universally in the SDK
- External repo was duplicating work

## Migration

### If you had a dependency on this library

Remove it. The components are already in Flutter:

```bash
# If you had this in pubspec.yaml, remove it
dependencies:
  material_components_flutter: ^X.Y.Z   # ❌ REMOVE
```

Flutter's built-in Material is already imported via:

```dart
import 'package:flutter/material.dart';

// All Material components available here:
MaterialApp(...)
Scaffold(...)
AppBar(...)
FilledButton(...)
// etc.
```

See **`flutter-material` skill** for complete usage.

## What was in this library (historical)

Essentially the same components that are now in `package:flutter/material`:

- Buttons, app bars, navigation bars/rails/drawers
- Cards, chips, dialogs, bottom sheets, snackbars
- Text fields, checkboxes, radios, switches, sliders
- Progress indicators, date/time pickers
- Material 3 color system, typography, shape tokens

## BANNED

- ❌ NEVER add `material_components_flutter` to pubspec.yaml — archived
- ❌ NEVER trust any tutorial referencing this library — it's outdated
- ❌ NEVER install its components from pub.dev

## Pre-flight checklist (for Flutter projects)

```
- [ ] pubspec.yaml does NOT reference material_components_flutter
- [ ] Using package:flutter/material (built-in) for Material widgets
- [ ] ThemeData.useMaterial3: true (M3 default in recent Flutter)
- [ ] ColorScheme.fromSeed for theming
- [ ] See flutter-material skill for complete usage
```

## See also

- **`flutter-material`** skill — the correct Flutter Material path (SDK built-in)
- **`tdesign-flutter`** skill — Tencent's Flutter alternative if you want a different aesthetic
- **[DEPRECATED.md](../../components/DEPRECATED.md)** — full list of archived libraries
