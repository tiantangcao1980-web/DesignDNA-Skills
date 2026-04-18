---
name: material-components-flutter
description: Material Components for Flutter — historically a standalone repo, now consolidated into the Flutter SDK itself. The `package:flutter/material` bundled with Flutter is the continuation of this work. See `flutter-material` skill for the current path.
---

# Material Components for Flutter — now part of Flutter SDK

> **Historical source**: [material-components/material-components-flutter](https://github.com/material-components/material-components-flutter) · archived 2023-11-30
> **Current path**: `package:flutter/material` bundled in Flutter SDK — see `flutter-material` skill

## Status context

This standalone library was consolidated into Flutter's main SDK on **2023-11-30**. Material Design components for Flutter now live in `package:flutter/material`, maintained as part of Flutter itself. No external dependency is needed.

## Why consolidated?

- Reduces external dependencies
- Tighter integration with Flutter's rendering pipeline
- Material 3 (Material You) adopted universally in the SDK

## Migration

If your project still references this standalone package, remove it. The components are already in Flutter:

```bash
# Remove from pubspec.yaml if present
dependencies:
  material_components_flutter: ^X.Y.Z   # remove
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

## Guidance

- Don't add `material_components_flutter` to pubspec.yaml for new projects — use the SDK-bundled version
- Tutorials referencing the standalone package are outdated; the APIs are the same but the import path differs

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
