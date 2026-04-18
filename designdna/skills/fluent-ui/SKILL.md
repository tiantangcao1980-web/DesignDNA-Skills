---
name: fluent-ui
description: Microsoft Fluent UI — Fluent 2 design language implementation. `@fluentui/react-components` v9 (React, active, used by Teams/Copilot) + `@fluentui/web-components` v3 RC (framework-agnostic). Use for Microsoft 365 plugin integration, Teams apps, enterprise apps wanting Fluent aesthetic. ⚠️ v8 (`@fluentui/react` / Fabric) is maintenance-only.
---

# Fluent UI — Microsoft Design Language

> **Sources**:
> - [microsoft/fluentui](https://github.com/microsoft/fluentui) · 19.9k ⭐ · active 2026
> - [Fluent 2 spec](https://fluent2.microsoft.design/)
>
> **Packages**:
> - `@fluentui/react-components` v9 — React, stable, recommended
> - `@fluentui/web-components` v3 RC — Web Components, framework-agnostic
> - `@fluentui/react` v8 (Fabric) — 🟡 **maintenance only**
>
> **Docs**: https://react.fluentui.dev/

## 1. When to use

- Building a **Microsoft Teams plugin** or M365 app (required for visual parity)
- Enterprise app inheriting Microsoft's Fluent aesthetic
- Need accessible components matching Windows / Office look

## 2. Install (React v9)

```bash
npm install @fluentui/react-components
```

```tsx
import { FluentProvider, webLightTheme, Button } from '@fluentui/react-components';

<FluentProvider theme={webLightTheme}>
  <App />
</FluentProvider>
```

### Web Components v3 RC

```bash
npm install @fluentui/web-components
```

```html
<script type="module">
  import '@fluentui/web-components/dist/esm/index.js';
</script>
<fluent-button appearance="primary">Save</fluent-button>
```

## 3. Catalog (React v9)

**Inputs**: `Button` · `CompoundButton` · `MenuButton` · `SplitButton` · `ToggleButton` · `Checkbox` · `Input` · `Textarea` · `Radio` · `RadioGroup` · `Select` · `Combobox` · `Dropdown` · `Slider` · `Switch` · `SpinButton` · `Rating`

**Layout**: `Divider` · `Drawer` (v9) · `Card` · `CardHeader` · `CardPreview` · `CardFooter` · `Accordion`

**Navigation**: `Breadcrumb` · `Link` · `Menu` · `MenuList` · `Nav` (preview) · `Tabs` · `Tree` (Accordion style) · `Toolbar`

**Feedback**: `MessageBar` · `Dialog` · `Popover` · `Tooltip` · `Toast` · `Spinner` · `ProgressBar`

**Data**: `DataGrid` (v9, tree/virtualization) · `List` · `Table` · `Persona` · `Avatar` · `AvatarGroup` · `Badge` · `CounterBadge`

Full catalog: https://react.fluentui.dev/?path=/docs/concepts-introduction--docs

## 4. Usage

### Button

```tsx
import { Button } from '@fluentui/react-components';
import { SaveRegular, DeleteRegular } from '@fluentui/react-icons';

<Button appearance="primary" icon={<SaveRegular />}>Save</Button>
<Button appearance="outline">Cancel</Button>
<Button appearance="subtle">Subtle</Button>
<Button appearance="transparent">Transparent</Button>
<Button appearance="primary" disabled>Disabled</Button>
<Button appearance="primary" size="small" shape="rounded">Small</Button>
```

### Input + Field

```tsx
import { Field, Input, Button } from '@fluentui/react-components';

<Field
  label="Email"
  validationState={error ? 'error' : 'none'}
  validationMessage={error}
  required
>
  <Input
    type="email"
    value={email}
    onChange={(_, data) => setEmail(data.value)}
    placeholder="you@company.com"
  />
</Field>
```

### Dialog

```tsx
import {
  Dialog, DialogTrigger, DialogSurface, DialogTitle,
  DialogBody, DialogContent, DialogActions, Button,
} from '@fluentui/react-components';

<Dialog>
  <DialogTrigger disableButtonEnhancement>
    <Button>Delete</Button>
  </DialogTrigger>
  <DialogSurface>
    <DialogBody>
      <DialogTitle>Confirm delete</DialogTitle>
      <DialogContent>This action cannot be undone.</DialogContent>
      <DialogActions>
        <DialogTrigger>
          <Button appearance="secondary">Cancel</Button>
        </DialogTrigger>
        <Button appearance="primary" onClick={handleDelete}>Delete</Button>
      </DialogActions>
    </DialogBody>
  </DialogSurface>
</Dialog>
```

### DataGrid (v9 flagship)

```tsx
import { DataGrid, DataGridBody, DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow, TableColumnDefinition, createTableColumn } from '@fluentui/react-components';

const columns: TableColumnDefinition<User>[] = [
  createTableColumn<User>({
    columnId: 'name',
    compare: (a, b) => a.name.localeCompare(b.name),
    renderHeaderCell: () => 'Name',
    renderCell: (item) => item.name,
  }),
  createTableColumn<User>({
    columnId: 'email',
    renderHeaderCell: () => 'Email',
    renderCell: (item) => item.email,
  }),
];

<DataGrid
  items={users}
  columns={columns}
  sortable
  selectionMode="multiselect"
  getRowId={(item) => item.id}
>
  <DataGridHeader>
    <DataGridRow>
      {({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}
    </DataGridRow>
  </DataGridHeader>
  <DataGridBody<User>>
    {({ item, rowId }) => (
      <DataGridRow<User> key={rowId}>
        {({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
      </DataGridRow>
    )}
  </DataGridBody>
</DataGrid>
```

### Toast

```tsx
import { useToastController, Toast, ToastTitle, useId } from '@fluentui/react-components';

const toasterId = useId('toaster');
const { dispatchToast } = useToastController(toasterId);

dispatchToast(
  <Toast><ToastTitle>Saved</ToastTitle></Toast>,
  { intent: 'success' }
);
```

## 5. Theme

```tsx
import { FluentProvider, webLightTheme, webDarkTheme, teamsLightTheme, teamsDarkTheme, createLightTheme } from '@fluentui/react-components';

<FluentProvider theme={webLightTheme}>
  <App />
</FluentProvider>
```

### Custom brand

```tsx
import { createLightTheme, createDarkTheme, BrandVariants } from '@fluentui/react-components';

const myBrand: BrandVariants = {
  10: '#020306', 20: '#0A0E17', 30: '#0F1A33',
  40: '#142348', 50: '#1B2D5D', 60: '#223871',
  70: '#2A4386', 80: '#324F9B', 90: '#3A5BB0',
  100: '#4367C5', 110: '#4C74DA', 120: '#5581EF',
  130: '#6B93F2', 140: '#82A5F4', 150: '#99B6F6', 160: '#B0C8F8',
};

const light = createLightTheme(myBrand);
```

## 6. BANNED

- ❌ NEVER use `@fluentui/react` v8 (Fabric) for new projects — use v9
- ❌ NEVER mix v8 and v9 components — different theme systems
- ❌ NEVER skip `<FluentProvider>` — components won't style correctly
- ❌ NEVER use in a non-Microsoft context without explicit design approval — Fluent is visually specific
- ❌ NEVER import icons wholesale — use `@fluentui/react-icons` named imports
- ❌ NEVER use older Teams themes (`teamsLightTheme`) without confirming your target Teams version uses Fluent 2
- ❌ NEVER skip `getRowId` on DataGrid — breaks selection persistence

## 7. Pre-flight checklist

```
- [ ] Using @fluentui/react-components v9 (not v8 Fabric)
- [ ] <FluentProvider theme={...}> wrapping root
- [ ] Theme chosen matches environment (web / Teams / custom brand)
- [ ] Icons from @fluentui/react-icons with named imports
- [ ] For Teams integration: teamsLightTheme / teamsDarkTheme
- [ ] Dark mode toggle uses both FluentProvider theme AND CSS class strategy
- [ ] DataGrid has getRowId
- [ ] Forms use <Field> wrapper with validationState / validationMessage
```

## 8. Dial fit

formality: 7 · motion: 5 · density: 5 · warmth: 4 · contrast: 7

## 9. v8 → v9 migration

See official guide: https://react.fluentui.dev/?path=/docs/concepts-migration-from-v8-migration-overview--docs

Key differences:
- `initializeIcons()` → named icon imports
- Custom Emotion themes → FluentProvider
- `TextField` → `Input` + `Field`
- `CommandBar` / `PageHeader` removed
