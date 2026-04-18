---
name: material-components-android
description: Material Components for Android (MDC-Android) — Google's Material Design implementation for the View / XML UI system on Android (17k stars, v1.14-beta with M3 Expressive, 🟢 active 2026). Use for legacy View-system Android apps. ⚠️ New Compose projects should use `androidx.compose.material3` instead.
---

# Material Components for Android (MDC-Android)

> **Source**: [material-components/material-components-android](https://github.com/material-components/material-components-android) · 17.2k ⭐ · v1.14.0-beta01 · 🟢 active 2026-04
> **Nature**: Android XML / View system library
> **Docs**: https://m3.material.io/develop/android

## 1. When to use

- **Legacy Android View-system apps** (XML layouts, Activity/Fragment)
- Need the latest Material 3 / Material 3 Expressive components
- Projects that cannot migrate to Jetpack Compose yet

### When NOT to use

- ❌ **New Jetpack Compose projects** → Use `androidx.compose.material3` instead
- ❌ iOS projects → see `material-components-ios` skill (**archived**)
- ❌ Flutter → use Flutter SDK's built-in `package:flutter/material` (see `flutter-material` skill)

## 2. Install

### build.gradle.kts (app-level)

```kotlin
dependencies {
    implementation("com.google.android.material:material:1.14.0-beta01")
}
```

### Theme (values/themes.xml)

```xml
<style name="Theme.MyApp" parent="Theme.Material3.DayNight">
    <item name="colorPrimary">@color/brand_500</item>
    <item name="colorOnPrimary">@color/white</item>
    <item name="colorPrimaryContainer">@color/brand_100</item>
    <item name="colorOnPrimaryContainer">@color/brand_900</item>
    <item name="colorSecondary">@color/secondary_500</item>
    <!-- ... -->
</style>
```

## 3. Component catalog

**Buttons**: `MaterialButton` · `MaterialButtonToggleGroup` · `FloatingActionButton` · `ExtendedFloatingActionButton`

**Text & Input**: `TextInputLayout` + `TextInputEditText` · `AutoCompleteTextView`

**Selection**: `MaterialCheckBox` · `MaterialRadioButton` · `MaterialSwitch` · `Chip` · `ChipGroup` · `Slider` · `RangeSlider`

**Top app bars**: `MaterialToolbar` · `CollapsingToolbarLayout`

**Navigation**: `BottomNavigationView` · `NavigationBarView` (M3) · `NavigationRailView` · `NavigationView` (drawer) · `TabLayout`

**Containers**: `MaterialCardView` · `MaterialCardViewElevated` · `MaterialCardViewFilled` · `MaterialCardViewOutlined`

**Dialogs**: `MaterialAlertDialogBuilder` · `MaterialDatePicker` · `MaterialTimePicker` · `BottomSheetDialog`

**Lists**: `RecyclerView` (with Material decorations) · `MaterialDividerItemDecoration`

**Progress & feedback**: `CircularProgressIndicator` · `LinearProgressIndicator` · `Snackbar`

**M3 Expressive (1.14+)**: New motion spec, responsive buttons, richer state transitions.

## 4. Usage (XML)

### Button

```xml
<com.google.android.material.button.MaterialButton
    android:id="@+id/saveButton"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Save"
    style="@style/Widget.Material3.Button" />

<com.google.android.material.button.MaterialButton
    android:text="Cancel"
    style="@style/Widget.Material3.Button.OutlinedButton" />
```

### TextInputLayout

```xml
<com.google.android.material.textfield.TextInputLayout
    style="@style/Widget.Material3.TextInputLayout.OutlinedBox"
    android:hint="Email">

    <com.google.android.material.textfield.TextInputEditText
        android:id="@+id/email"
        android:inputType="textEmailAddress"
        android:layout_width="match_parent"
        android:layout_height="wrap_content" />
</com.google.android.material.textfield.TextInputLayout>
```

### Dialog (Kotlin)

```kotlin
MaterialAlertDialogBuilder(this)
    .setTitle("Delete?")
    .setMessage("This action cannot be undone.")
    .setPositiveButton("Delete") { _, _ -> handleDelete() }
    .setNegativeButton("Cancel", null)
    .show()
```

### Snackbar

```kotlin
Snackbar.make(rootView, "Saved", Snackbar.LENGTH_SHORT)
    .setAction("Undo") { undo() }
    .show()
```

### Bottom navigation

```xml
<com.google.android.material.bottomnavigation.BottomNavigationView
    android:id="@+id/bottomNav"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    app:menu="@menu/bottom_nav_menu" />
```

## 5. Theme (Material 3)

### Colors (values/colors.xml)

```xml
<color name="md_theme_primary">#FA2C19</color>
<color name="md_theme_onPrimary">#FFFFFF</color>
<color name="md_theme_primaryContainer">#FFDBCF</color>
<color name="md_theme_onPrimaryContainer">#410000</color>
```

### Typography

```xml
<style name="TextAppearance.MyApp.DisplayLarge" parent="TextAppearance.Material3.DisplayLarge">
    <item name="android:fontFamily">@font/inter_bold</item>
</style>
```

### Dynamic color (Material You, Android 12+)

```xml
<style name="Theme.MyApp" parent="Theme.Material3.DynamicColors.DayNight">
    <!-- System generates palette from wallpaper -->
</style>
```

Or programmatic:

```kotlin
DynamicColors.applyToActivitiesIfAvailable(application)
```

## 6. BANNED

- ❌ NEVER use old `com.android.support:design` (Support Library, EOL) — migrate to `com.google.android.material`
- ❌ NEVER use pre-M3 themes (`Theme.MaterialComponents.*`) for new code — use `Theme.Material3.*`
- ❌ NEVER hardcode colors in layouts — use `?attr/colorPrimary`
- ❌ NEVER use default `AlertDialog` — use `MaterialAlertDialogBuilder`
- ❌ NEVER mix Compose Material3 and XML Material in the same screen — unless explicitly interop'd
- ❌ NEVER skip `<item name="materialButtonStyle">` override when customizing button shape/text globally
- ❌ NEVER use `android:theme` for non-Material themes within Material container — breaks inheritance
- ❌ NEVER ignore accessibility attributes (`contentDescription`, `labelFor`)

## 7. Pre-flight checklist

```
- [ ] gradle dep: com.google.android.material:material:1.14+
- [ ] Theme extends Theme.Material3.DayNight (or DynamicColors variant)
- [ ] Color tokens defined (md_theme_primary, etc.)
- [ ] Using Material3 widget styles (not MaterialComponents)
- [ ] MaterialAlertDialogBuilder for dialogs (not AlertDialog)
- [ ] Fragment / Activity content wrapped in MaterialApp theme context
- [ ] DynamicColors enabled on Android 12+ if supporting Material You
- [ ] Accessibility attrs on all interactive views
```

## 8. Compose alternative (preferred for new)

```kotlin
// In build.gradle.kts
implementation("androidx.compose.material3:material3:1.3.0")
```

```kotlin
@Composable
fun App() {
    MaterialTheme(colorScheme = dynamicLightColorScheme(LocalContext.current)) {
        Scaffold { padding ->
            Button(onClick = save, modifier = Modifier.padding(padding)) {
                Text("Save")
            }
        }
    }
}
```

## 9. Dial fit

formality: 6 · motion: 6-7 (M3 Expressive adds motion) · density: 5-6 · warmth: 5-7 · contrast: 6
