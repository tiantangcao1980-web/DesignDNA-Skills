---
name: tamagui
description: Tamagui — universal React UI library that compiles to React Native + web from the same source (10k+ stars, active). Zero-runtime styles via compile-time optimization. Best for shared React + React Native codebases. Covers install, core components, theme tokens, and the compiler setup.
---

# Tamagui — Universal React + React Native UI

> **Source**: [tamagui/tamagui](https://github.com/tamagui/tamagui) · 10k+ ⭐ · v1.x · 🟢 active 2026
> **NPM**: `tamagui` + `@tamagui/core`
> **Docs**: https://tamagui.dev/

## 1. When to use

- **Sharing code between React web and React Native** (write once, render on both)
- Want **zero-runtime CSS on web** (compiled to static) and native styling on RN
- Design-system-first teams wanting full token control

## 2. Install

```bash
npm install tamagui @tamagui/config
```

### Next.js

```bash
npm install @tamagui/next-plugin
```

```js
// next.config.js
import { withTamagui } from '@tamagui/next-plugin';

export default withTamagui({
  config: './tamagui.config.ts',
  components: ['tamagui'],
  appDir: true,
})({ /* your Next config */ });
```

### React Native / Expo

```bash
npm install @tamagui/babel-plugin
```

```js
// babel.config.js
module.exports = {
  plugins: [
    ['@tamagui/babel-plugin', {
      config: './tamagui.config.ts',
      components: ['tamagui'],
    }],
  ],
};
```

### tamagui.config.ts

```ts
import { config } from '@tamagui/config/v3';
import { createTamagui } from 'tamagui';

const tamaguiConfig = createTamagui(config);

export type Conf = typeof tamaguiConfig;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig;
```

## 3. Components

All Tamagui components work identically on web and native:

**Core**: `Button` · `Input` · `Text` · `View` · `Stack` (`XStack`, `YStack`, `ZStack`) · `Image` · `Separator` · `Theme` · `ThemeProvider`

**Form**: `Checkbox` · `Switch` · `RadioGroup` · `Slider` · `Select` · `TextArea` · `Label` · `Fieldset`

**Feedback**: `Progress` · `Spinner`

**Surfaces**: `Card` · `Sheet` · `Dialog` · `AlertDialog` · `Popover` · `Tooltip`

**Data**: `Avatar` · `ListItem` · `Paragraph` · `H1`..`H6` · `SizableText`

**Navigation**: `Tabs` · `Accordion`

## 4. Usage

### XStack / YStack

```tsx
import { XStack, YStack, Button, Paragraph, Card } from 'tamagui';

<YStack space="$4" padding="$4">
  <Paragraph>Welcome</Paragraph>
  <XStack space="$2">
    <Button>Action 1</Button>
    <Button theme="active">Action 2</Button>
  </XStack>
</YStack>
```

### Theme-aware Card

```tsx
<Card elevate size="$4" bordered width={300}>
  <Card.Header padded>
    <H3>Title</H3>
  </Card.Header>
  <Card.Footer padded>
    <XStack flex={1} />
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

### Dialog

```tsx
import { Dialog, Button, YStack, XStack } from 'tamagui';

<Dialog modal>
  <Dialog.Trigger asChild>
    <Button>Open</Button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Title>Confirm</Dialog.Title>
      <Dialog.Description>Are you sure?</Dialog.Description>
      <XStack space="$2" justifyContent="flex-end">
        <Dialog.Close asChild>
          <Button variant="outlined">Cancel</Button>
        </Dialog.Close>
        <Dialog.Close asChild>
          <Button theme="red">Delete</Button>
        </Dialog.Close>
      </XStack>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog>
```

### Form

```tsx
import { Label, Input, Button, YStack } from 'tamagui';

<YStack space="$3" padding="$4">
  <Label htmlFor="email">Email</Label>
  <Input id="email" placeholder="you@example.com" />

  <Label htmlFor="pw">Password</Label>
  <Input id="pw" secureTextEntry placeholder="••••••" />

  <Button theme="active">Sign in</Button>
</YStack>
```

## 5. Style props (shorthand)

Tamagui extends React Native's style to a full utility system:

```tsx
<View
  padding="$4"
  backgroundColor="$background"
  borderRadius="$2"
  hoverStyle={{ opacity: 0.8 }}
  pressStyle={{ scale: 0.98 }}
  $gtMd={{ padding: '$6' }}  // Responsive: > md breakpoint
  $theme-dark={{ backgroundColor: '$gray10' }}
/>
```

Tokens like `$4` resolve to `theme.space.4`, which might be `16px` web / `16` native.

## 6. Theme customization

```ts
// tamagui.config.ts
import { createTokens, createTamagui } from 'tamagui';

const tokens = createTokens({
  color: {
    brand500: '#fa2c19',
    brand600: '#e0220f',
    gray1: '#fafafa',
    gray12: '#0a0a0f',
  },
  space: { 0: 0, 1: 4, 2: 8, 3: 12, 4: 16, 5: 24, 6: 32 },
  size: { 0: 0, 1: 20, 2: 28, 3: 36, 4: 44, 5: 56 },
  radius: { 0: 0, 1: 3, 2: 6, 3: 12, 4: 18, 5: 24 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
});
```

## 7. Compilation — the secret sauce

Tamagui has a **Babel plugin** that inlines style objects at build time:

```tsx
<Button padding="$4" color="$primary" />
```

Becomes at build:

```tsx
<button style={{ padding: 16, color: '#fa2c19' }} />
```

On web: zero CSS-in-JS runtime. On RN: optimized native styles.

## 8. BANNED

- ❌ NEVER skip `@tamagui/babel-plugin` (RN) or `@tamagui/next-plugin` (Next) — you lose the compile-time optimization
- ❌ NEVER use Tamagui components alongside React Native Paper or MUI — conflicting theme systems
- ❌ NEVER import the full `@tamagui/core` when you just need one component
- ❌ NEVER hardcode hex values — use tokens (`$primary` not `#fa2c19`)
- ❌ NEVER use `style={{...}}` prop for theme-aware values — use Tamagui style props
- ❌ NEVER skip `<TamaguiProvider>` at app root
- ❌ NEVER expect Tailwind classes to work — Tamagui uses its own token system

## 9. Pre-flight checklist

```
- [ ] tamagui + @tamagui/config installed
- [ ] Babel plugin (RN/Expo) or Next plugin configured
- [ ] tamagui.config.ts set up with tokens + themes
- [ ] Declared module augmentation for TypeScript
- [ ] <TamaguiProvider> wrapping app root
- [ ] Using tokens ($primary, $4) — not hardcoded values
- [ ] Theme switching via <Theme name="dark"> or prop
- [ ] Responsive breakpoints used ($gtMd, $gtLg)
- [ ] Web bundle size checked — Babel plugin should eliminate Tamagui runtime
```

## 10. Dial fit

Depends on your tokens — Tamagui is a framework, dial fit is what you configure.

## 11. Alternatives

| Scenario | Alternative |
|---|---|
| Pure RN without web sharing | React Native Paper |
| Web-only universal React | shadcn/ui + Tailwind |
| Solid RN + Expo + simple needs | Dripsy (lightweight) |
