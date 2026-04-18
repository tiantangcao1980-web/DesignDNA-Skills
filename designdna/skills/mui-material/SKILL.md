---
name: mui-material
description: MUI material-ui — React's biggest Material Design component library (98k stars, v7.3+, active). Google Material Design's de-facto carrier on the web. Covers 100+ components with Emotion/styled CSS-in-JS, theme provider, Material 2/3 styling, dark mode, and Figma kits. For advanced components (DataGrid/Charts/DatePicker Pro), pair with `mui-x` skill.
---

# MUI material-ui — React Material Design

> **Source**: [mui/material-ui](https://github.com/mui/material-ui) · 98.2k ⭐ · v7.3.8+ · 🟢 active 2026
> **NPM**: `@mui/material`
> **Docs**: https://mui.com/material-ui/

## 1. When to use

- React apps wanting **Material Design** aesthetics
- Global audience (MUI has broader English-first community than antd)
- Need the **largest component set** (100+) with Figma kits

## 2. Install

```bash
npm install @mui/material @emotion/react @emotion/styled
```

### Add Roboto font (Material default) + icons

```tsx
// index.html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
```

```bash
npm install @mui/icons-material
```

### Next.js App Router

```bash
npm install @mui/material-nextjs
```

```tsx
// app/layout.tsx
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

<html>
  <body>
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  </body>
</html>
```

## 3. Catalog (100+)

**Inputs**: `Button` · `ButtonGroup` · `Checkbox` · `FloatingActionButton` · `Radio` · `RadioGroup` · `Rating` · `Select` · `Slider` · `Switch` · `TextField` · `ToggleButton` · `Autocomplete`

**Navigation**: `AppBar` · `BottomNavigation` · `Breadcrumbs` · `Drawer` · `Link` · `Menu` · `MobileStepper` · `Pagination` · `SpeedDial` · `Stepper` · `Tabs`

**Layout**: `Box` · `Container` · `Grid` · `Grid2` · `Stack` · `ImageList`

**Data display**: `Avatar` · `Badge` · `Chip` · `Divider` · `Icon` · `List` · `Table` · `Tooltip` · `Typography`

**Feedback**: `Alert` · `Backdrop` · `Dialog` · `Progress` (Linear/Circular) · `Skeleton` · `Snackbar`

**Surfaces**: `Accordion` · `Card` · `Paper`

**Utils**: `ClickAwayListener` · `Portal` · `Modal` · `Popover` · `Popper` · `Transitions` · `useMediaQuery`

Full catalog: https://mui.com/material-ui/all-components/

## 4. Usage

### Button

```tsx
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

<Button variant="contained" color="primary" onClick={save}>Save</Button>
<Button variant="outlined" color="secondary">Cancel</Button>
<Button variant="contained" color="error" startIcon={<DeleteIcon />}>Delete</Button>
<Button variant="contained" size="large" disabled>Disabled</Button>
<LoadingButton loading variant="contained">Submitting</LoadingButton>
```

### TextField + Form

```tsx
import { TextField, Button, Stack } from '@mui/material';
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [errors, setErrors] = useState<any>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: any = {};
    if (!email) newErrors.email = 'Required';
    if (pw.length < 6) newErrors.pw = 'At least 6 chars';
    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;
    // submit
  };

  return (
    <Stack spacing={2} onSubmit={onSubmit} component="form">
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        error={!!errors.pw}
        helperText={errors.pw}
      />
      <Button type="submit" variant="contained">Sign in</Button>
    </Stack>
  );
}
```

### Table

```tsx
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer, Chip } from '@mui/material';

<TableContainer component={Paper}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {users.map(u => (
        <TableRow key={u.id}>
          <TableCell>{u.name}</TableCell>
          <TableCell>{u.email}</TableCell>
          <TableCell>
            <Chip label={u.status} color={u.status === 'active' ? 'success' : 'error'} size="small" />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
```

### Dialog

```tsx
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

<Dialog open={open} onClose={() => setOpen(false)}>
  <DialogTitle>Confirm Delete</DialogTitle>
  <DialogContent>
    <DialogContentText>This action cannot be undone.</DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpen(false)}>Cancel</Button>
    <Button onClick={handleDelete} color="error" variant="contained">Delete</Button>
  </DialogActions>
</Dialog>
```

### Snackbar (toast)

```tsx
import { Snackbar, Alert } from '@mui/material';

<Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
  <Alert severity="success">Saved!</Alert>
</Snackbar>
```

## 5. Theme

```tsx
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',  // or 'dark'
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
    error: { main: '#d32f2f' },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    h1: { fontSize: '3rem', fontWeight: 600 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none' },  // Material 3 style
      },
    },
  },
});

<ThemeProvider theme={theme}><App /></ThemeProvider>
```

## 6. Dark mode

```tsx
const theme = createTheme({ palette: { mode: 'dark' } });
```

Or dynamic:

```tsx
import { useMediaQuery } from '@mui/material';
const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
const theme = useMemo(() => createTheme({ palette: { mode: prefersDark ? 'dark' : 'light' } }), [prefersDark]);
```

## 7. BANNED

- ❌ NEVER use MUI v4 (legacy) — use v5+, preferably v7
- ❌ NEVER forget `@emotion/react` + `@emotion/styled` peers — MUI won't render
- ❌ NEVER import icons wholesale — `import { Delete } from '@mui/icons-material'` is already tree-shakeable, but don't `import * as Icons`
- ❌ NEVER mix `@mui/material` with `@mui/joy` or `@mui/base` inconsistently — pick one design language
- ❌ NEVER skip `<ThemeProvider>` — default theme is MUI blue
- ❌ NEVER use inline `sx={{...}}` for site-wide styles — use theme overrides
- ❌ NEVER hardcode colors — reference `theme.palette.primary.main`
- ❌ NEVER use `<Grid>` v1 + `<Grid2>` in same file — migrate entirely to `Grid2` (v7 default `Grid` IS the new one)

## 8. Pre-flight checklist

```
- [ ] @mui/material + @emotion/react + @emotion/styled installed
- [ ] @mui/icons-material installed if icons used
- [ ] ThemeProvider wraps root with createTheme()
- [ ] Roboto font loaded (or override fontFamily in theme)
- [ ] Palette customized (not default MUI blue)
- [ ] Dark mode strategy chosen (static or dynamic)
- [ ] For Next.js: AppRouterCacheProvider wraps app
- [ ] Forms use TextField with error + helperText for validation
- [ ] Imperative snackbar via notistack OR <Snackbar open=...>
- [ ] Check bundle size (MUI is heavy; tree-shake + lazy-load where possible)
```

## 9. Dial fit

formality: 6-7 · motion: 5-6 · density: 5 · warmth: 5 · contrast: 6

## 10. Related

- **mui-x** — DataGrid, Charts, DatePicker Pro, TreeView (see `mui-x` skill)
- **mui-base** (`@base-ui-components/react`) — Headless primitives (see `mui-base` skill — coming)
- **MUI Joy** — opinionated Material-inspired non-Material aesthetic
