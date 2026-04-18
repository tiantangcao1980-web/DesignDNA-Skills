---
name: mui-base
description: MUI Base UI (`@base-ui-components/react`) — MUI's headless React primitives library (9.1k stars, v1.1 stable, active). Alternative to Radix Primitives. Unstyled, accessible components (Dialog, Popover, Select, Menu, etc.) to build your own design system.
---

# MUI Base UI — Headless React Primitives

> **Source**: [mui/base-ui](https://github.com/mui/base-ui) · 9.1k ⭐ · v1.1 · 🟢 active 2026
> **NPM**: `@base-ui-components/react`
> **Docs**: https://base-ui.com/

## 1. When to use

- Building a **custom design system** (you bring the styling)
- Need accessibility-correct primitives from the MUI team
- Alternative to Radix Primitives — similar concept, MUI ecosystem

## 2. Install

```bash
npm install @base-ui-components/react
```

## 3. Catalog

`Accordion` · `AlertDialog` · `Checkbox` · `CheckboxGroup` · `Collapsible` · `ContextMenu` · `Dialog` · `Field` · `Form` · `Menu` · `Meter` · `NavigationMenu` · `NumberField` · `PreviewCard` · `Progress` · `Radio` · `ScrollArea` · `Select` · `Separator` · `Slider` · `Switch` · `Tabs` · `Toast` · `Toggle` · `ToggleGroup` · `Toolbar` · `Tooltip`

## 4. Usage

### Dialog

```tsx
import { Dialog } from '@base-ui-components/react/dialog';

<Dialog.Root>
  <Dialog.Trigger>Open</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Backdrop className="..." />
    <Dialog.Popup className="...">
      <Dialog.Title>Title</Dialog.Title>
      <Dialog.Description>Description</Dialog.Description>
      <Dialog.Close>Close</Dialog.Close>
    </Dialog.Popup>
  </Dialog.Portal>
</Dialog.Root>
```

### Select

```tsx
import { Select } from '@base-ui-components/react/select';

<Select.Root>
  <Select.Trigger>
    <Select.Value />
  </Select.Trigger>
  <Select.Portal>
    <Select.Positioner>
      <Select.Popup>
        <Select.Item value="apple"><Select.ItemText>Apple</Select.ItemText></Select.Item>
        <Select.Item value="banana"><Select.ItemText>Banana</Select.ItemText></Select.Item>
      </Select.Popup>
    </Select.Positioner>
  </Select.Portal>
</Select.Root>
```

## 5. Base UI vs Radix Primitives

| Dimension | Base UI | Radix Primitives |
|---|---|---|
| Team | MUI | WorkOS (formerly WorkOS) |
| Stability | v1.1 (recent stable) | 18+ month track record |
| Ecosystem adoption | Growing | shadcn/ui built on it |
| API style | Similar | Similar |
| Accessibility | Excellent | Excellent |

Pick Radix if you want max community resources. Pick Base UI if you're in the MUI ecosystem or prefer its API.

## 6. BANNED

- ❌ NEVER expect styles — Base UI is unstyled; bring Tailwind / CSS Modules
- ❌ NEVER mix Base UI + Radix in same project — pointless overlap
- ❌ NEVER skip `<*.Portal>` for overlay components
- ❌ NEVER forget focus-visible styling — you provide it

## 7. Pre-flight checklist

```
- [ ] @base-ui-components/react installed
- [ ] Styling approach picked (Tailwind recommended)
- [ ] Portal used for Dialog / Popover / Select
- [ ] Focus-visible styles applied
- [ ] Keyboard navigation tested
```

## 8. Dial fit

Fully customizable — depends on your styles.
