---
name: react-native-paper
description: React Native Paper — Material Design for React Native (13k+ stars, v5.x, active). Cross-platform native iOS/Android Material 3 components. Use when building RN apps wanting Material aesthetics. Covers installation, component catalog, theme tokens, adaptive theme (light/dark/auto), and MD3 migration.
---

# React Native Paper — Material Design for RN

> **Source**: [callstack/react-native-paper](https://github.com/callstack/react-native-paper) · 13k+ ⭐ · v5.x · 🟢 active 2026
> **NPM**: `react-native-paper`
> **Docs**: https://callstack.github.io/react-native-paper/

## 1. When to use

- **React Native** app (iOS + Android) wanting Material Design 3 look
- Alternative to plain RN components or NativeBase (which is stagnating)
- Cross-platform UI consistency

## 2. Install

```bash
npm install react-native-paper react-native-safe-area-context react-native-vector-icons
cd ios && pod install
```

### Root setup

```tsx
import { PaperProvider, MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={MD3LightTheme}>
        <MainApp />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
```

### Optional: Roboto font

```bash
npx react-native-asset  # If using react-native-vector-icons fonts
```

## 3. Catalog

**Basic**: `Button` · `IconButton` · `FAB` · `Icon` · `Text` · `Surface` · `Divider` · `Chip` · `Badge` · `Portal`

**Navigation**: `AppBar` · `BottomNavigation` · `Drawer` · `Tabs` (via `react-native-paper-tabs`)

**Input**: `TextInput` · `Searchbar` · `Switch` · `Checkbox` · `RadioButton` · `SegmentedButtons` · `Menu`

**Layout**: `Card` · `List.Section` / `List.Item` · `Accordion` · `DataTable` · `Modal` · `Dialog` · `Banner` · `Snackbar`

**Feedback**: `ActivityIndicator` · `ProgressBar` · `HelperText` · `Tooltip`

**Specialized**: `DatePickerModal` (via `react-native-paper-dates`) · `TimePickerModal`

## 4. Usage

### Button

```tsx
import { Button } from 'react-native-paper';

<Button mode="contained" onPress={save}>Save</Button>
<Button mode="outlined" onPress={cancel}>Cancel</Button>
<Button mode="text" onPress={reset}>Reset</Button>
<Button mode="contained" loading>Loading...</Button>
<Button mode="contained-tonal" icon="camera">Camera</Button>
<Button mode="contained" buttonColor="#ff3141">Delete</Button>
```

### TextInput

```tsx
import { TextInput, HelperText } from 'react-native-paper';

<TextInput
  label="Email"
  value={email}
  onChangeText={setEmail}
  mode="outlined"
  error={hasError}
  left={<TextInput.Icon icon="email" />}
/>
<HelperText type="error" visible={hasError}>
  Invalid email
</HelperText>
```

### List

```tsx
import { List } from 'react-native-paper';

<List.Section>
  <List.Subheader>Settings</List.Subheader>
  <List.Item
    title="Notifications"
    description="Push notifications"
    left={(props) => <List.Icon {...props} icon="bell" />}
    right={(props) => <Switch value={enabled} onValueChange={setEnabled} />}
  />
  <List.Item
    title="Privacy"
    left={(props) => <List.Icon {...props} icon="lock" />}
    onPress={goPrivacy}
  />
</List.Section>
```

### Dialog

```tsx
import { Dialog, Portal, Button } from 'react-native-paper';

<Portal>
  <Dialog visible={visible} onDismiss={hide}>
    <Dialog.Title>Confirm</Dialog.Title>
    <Dialog.Content>
      <Text variant="bodyMedium">Are you sure?</Text>
    </Dialog.Content>
    <Dialog.Actions>
      <Button onPress={hide}>Cancel</Button>
      <Button onPress={onConfirm}>OK</Button>
    </Dialog.Actions>
  </Dialog>
</Portal>
```

### Snackbar

```tsx
import { Snackbar } from 'react-native-paper';

<Snackbar
  visible={visible}
  onDismiss={hide}
  action={{ label: 'Undo', onPress: undo }}
  duration={3000}
>
  Item deleted
</Snackbar>
```

## 5. Theme

### Use built-in MD3 themes

```tsx
import { MD3LightTheme, MD3DarkTheme, PaperProvider } from 'react-native-paper';

<PaperProvider theme={MD3LightTheme}>...</PaperProvider>
```

### Custom theme

```tsx
import { configureFonts, MD3LightTheme } from 'react-native-paper';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#fa2c19',
    primaryContainer: '#ffdbcf',
    secondary: '#6366f1',
    error: '#ba1a1a',
    background: '#fffbfe',
    surface: '#fffbfe',
  },
  roundness: 4,  // MD3 base
  fonts: configureFonts({ config: {
    fontFamily: 'Inter',
  }}),
};
```

### Material You dynamic colors (Android 12+)

```bash
npm install react-native-material-you-colors  # or similar
```

Generate theme from user's wallpaper at runtime.

## 6. Adaptive light/dark

```tsx
import { useColorScheme } from 'react-native';
import { MD3LightTheme, MD3DarkTheme, PaperProvider } from 'react-native-paper';

function App() {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? MD3DarkTheme : MD3LightTheme;
  return <PaperProvider theme={theme}>...</PaperProvider>;
}
```

## 7. BANNED

- ❌ NEVER use v4 Paper (MD2) docs for v5 (MD3) code — breaking API changes
- ❌ NEVER forget `<PaperProvider>` — components fall back to default styles
- ❌ NEVER forget `<Portal>` around `<Dialog>` / `<Modal>` — renders in wrong layer
- ❌ NEVER use raw RN `Button` alongside Paper `Button` — visual inconsistency
- ❌ NEVER mix NativeBase / Tamagui with Paper — pick one
- ❌ NEVER hardcode colors — use `theme.colors.primary` etc.
- ❌ NEVER skip `react-native-safe-area-context` — Paper components depend on it
- ❌ NEVER use older `react-native-vector-icons` config without `android/app/build.gradle` registration — icons won't render on Android

## 8. Pre-flight checklist

```
- [ ] react-native-paper v5+ installed (MD3)
- [ ] react-native-safe-area-context + SafeAreaProvider wrapping App
- [ ] PaperProvider with theme (light or dark MD3)
- [ ] react-native-vector-icons configured for both iOS (pod install) and Android (build.gradle)
- [ ] Custom brand color applied via theme.colors.primary
- [ ] <Portal> wraps Dialog / Modal / Snackbar content
- [ ] Dynamic theme switches on system color scheme change
- [ ] Forms use TextInput + HelperText for errors
- [ ] Bundle size monitored (Paper is not tiny)
```

## 9. Dial fit

formality: 5 · motion: 5 · density: 4 · warmth: 5 · contrast: 6

## 10. Alternatives

| Scenario | Alternative |
|---|---|
| Universal RN + Web components | Tamagui (see skill) |
| Not wanting Material look | Ship plain RN + custom styles |
| Paper isn't flexible enough | React Native Elements |
| Design-first RN | Dripsy (theme UI-like) |
