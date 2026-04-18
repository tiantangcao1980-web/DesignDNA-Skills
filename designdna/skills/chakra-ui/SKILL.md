---
name: chakra-ui
description: Chakra UI v3 — accessible React component library rebuilt on Panda CSS for zero-runtime styles (40k stars, active 2026). v3 is a breaking rewrite from v2 with new API (Field vs FormControl, style props via recipe). Covers install, v2 vs v3 differences, component patterns, and theme customization.
---

{% raw %}


# Chakra UI v3 — React with Zero-Runtime Styles

> **Source**: [chakra-ui/chakra-ui](https://github.com/chakra-ui/chakra-ui) · 40k ⭐ · v3.x · 🟢 active 2026
> **NPM**: `@chakra-ui/react` (v3) · pairs with `@chakra-ui/cli`
> **Docs**: https://chakra-ui.com/

## 1. When to use

- React projects wanting **clean, modern, accessible** components
- Like Chakra v2's API style but want **zero-runtime CSS** (performance)
- Want **style props** (`<Button p={4} bg="blue.500">`) over className

## 2. v2 vs v3 — migration warning

v3 is a **breaking rewrite**:

| v2 | v3 |
|---|---|
| Emotion runtime | Panda CSS (zero runtime) |
| `FormControl` + `FormLabel` + `FormErrorMessage` | `Field` unified API |
| `<ChakraProvider theme={...}>` | `<ChakraProvider value={system}>` |
| `extendTheme()` | `createSystem()` |
| `useColorMode()` | `next-themes` or `useColorMode` from v3 |

**If you're on v2**: migration is non-trivial. Evaluate whether the perf win is worth the effort. v2 still receives security fixes for now.

## 3. Install (v3)

```bash
npm install @chakra-ui/react @emotion/react
```

```tsx
// app/providers.tsx
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}
```

```tsx
// app/layout.tsx
import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

## 4. Catalog (v3)

**Form**: `Button` · `IconButton` · `Input` · `Textarea` · `Select` · `Checkbox` · `Radio` · `Switch` · `Slider` · `Field` (unified wrapper) · `NumberInput` · `PinInput` · `Editable` · `Filter` · `Upload` · `RatingGroup` · `Combobox`

**Layout**: `Box` · `Flex` · `Grid` · `GridItem` · `Stack` (`VStack`, `HStack`) · `Container` · `Center` · `AbsoluteCenter` · `AspectRatio` · `SimpleGrid` · `Wrap`

**Display**: `Avatar` · `Badge` · `Card` · `Code` · `Heading` · `Image` · `List` · `Table` · `Tag` · `Text` · `Icon` · `Stat` · `EmptyState`

**Navigation**: `Breadcrumb` · `Link` · `Tabs` · `Pagination` · `Steps`

**Overlay**: `Alert` · `AlertDialog` · `Dialog` · `Drawer` · `HoverCard` · `Menu` · `Popover` · `Toast` · `Tooltip` · `Accordion` · `Collapsible`

**Feedback**: `Progress` · `Spinner` · `Skeleton` · `CircularProgress`

## 5. Usage (v3)

### Button

```tsx
import { Button } from '@chakra-ui/react';

<Button colorPalette="blue" onClick={save}>Save</Button>
<Button colorPalette="red" variant="outline">Cancel</Button>
<Button loading loadingText="Saving...">Submit</Button>
<Button size="lg">Large</Button>
```

### Form with Field (v3 unified)

```tsx
import { Field, Input, Button, Stack } from '@chakra-ui/react';

<Stack gap={4} as="form" onSubmit={onSubmit}>
  <Field.Root required invalid={!!errors.email}>
    <Field.Label>
      Email <Field.RequiredIndicator />
    </Field.Label>
    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    <Field.HelperText>We'll never share your email.</Field.HelperText>
    <Field.ErrorText>{errors.email}</Field.ErrorText>
  </Field.Root>
  <Button type="submit" colorPalette="blue">Sign in</Button>
</Stack>
```

### Dialog

```tsx
import { Dialog, Portal, Button } from '@chakra-ui/react';

<Dialog.Root>
  <Dialog.Trigger asChild>
    <Button>Delete</Button>
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop />
    <Dialog.Positioner>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Are you sure?</Dialog.Title>
          <Dialog.CloseTrigger />
        </Dialog.Header>
        <Dialog.Body>
          This action cannot be undone.
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.ActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Dialog.ActionTrigger>
          <Dialog.ActionTrigger asChild>
            <Button colorPalette="red">Delete</Button>
          </Dialog.ActionTrigger>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
```

### Table

```tsx
import { Table } from '@chakra-ui/react';

<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeader>Name</Table.ColumnHeader>
      <Table.ColumnHeader>Email</Table.ColumnHeader>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {users.map((u) => (
      <Table.Row key={u.id}>
        <Table.Cell>{u.name}</Table.Cell>
        <Table.Cell>{u.email}</Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table.Root>
```

## 6. Style props

One of Chakra's signature features — pass design tokens directly as props:

```tsx
<Box
  p={4}
  bg="gray.100"
  borderRadius="md"
  _hover={{ bg: 'gray.200' }}
  _dark={{ bg: 'gray.800' }}
>
  Content
</Box>
```

## 7. Theme customization

```tsx
import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#fef2f2' },
          500: { value: '#fa2c19' },
          900: { value: '#7f1d1d' },
        },
      },
    },
    semanticTokens: {
      colors: {
        primary: { value: '{colors.brand.500}' },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

<ChakraProvider value={system}><App /></ChakraProvider>
```

## 8. Dark mode

Use `next-themes`:

```bash
npm install next-themes
```

```tsx
import { ThemeProvider } from 'next-themes';

<ThemeProvider attribute="class" defaultTheme="system">
  <ChakraProvider value={defaultSystem}>
    {children}
  </ChakraProvider>
</ThemeProvider>
```

## 9. BANNED

- ❌ NEVER use v2 docs with v3 code — API is radically different
- ❌ NEVER wrap with `<ChakraProvider theme={...}>` — that's v2. Use `value={system}`
- ❌ NEVER use `FormControl` / `FormLabel` / `FormErrorMessage` in v3 — use `Field` compound
- ❌ NEVER forget `<Portal>` around Dialog content — breaks positioning
- ❌ NEVER mix Chakra v3 with shadcn/ui / MUI — conflicting theme systems
- ❌ NEVER hardcode colors — use `colorPalette="brand"` + token references
- ❌ NEVER import emotion — v3 doesn't use it for runtime styling

## 10. Pre-flight checklist

```
- [ ] Chakra v3 installed (not v2)
- [ ] <ChakraProvider value={system}> wrapping root
- [ ] Forms use <Field.Root> pattern (not FormControl)
- [ ] Dark mode via next-themes + attribute="class"
- [ ] Custom brand tokens via createSystem + defineConfig
- [ ] Using colorPalette="..." instead of hardcoded color props
- [ ] Compound components wrapped in <Portal> where required (Dialog, Popover, etc.)
```

## 11. Dial fit

formality: 6 · motion: 4 · density: 5 · warmth: 5 · contrast: 6

{% endraw %}
