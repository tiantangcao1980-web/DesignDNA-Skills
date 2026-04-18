---
name: mui-x
description: MUI X — enterprise React components for MUI (v9, active, MIT + Pro/Premium tiers). DataGrid (most capable React table), Charts, DatePicker Pro (range, multi-input), TreeView. Pair with `mui-material` skill. Community tier covers 80% of needs; Pro unlocks column pinning, row grouping, Excel export; Premium adds aggregation, clipboard, row reordering.
---

# MUI X — Enterprise React Components

> **Source**: [mui/mui-x](https://github.com/mui/mui-x) · ~6k ⭐ · v9.0 · 🟢 active 2026
> **NPM**: `@mui/x-data-grid` · `@mui/x-charts` · `@mui/x-date-pickers` · `@mui/x-tree-view`
> **Docs**: https://mui.com/x/

## 1. When to use

- Complex data tables (pagination, sorting, filtering, inline editing, column reorder/resize)
- Advanced date / date-range / date-time pickers
- Charts (bar, line, pie, scatter, sparkline, gauge)
- Tree view with virtualization

## 2. Install

### DataGrid

```bash
npm install @mui/x-data-grid
# Peer: @mui/material
```

### Charts

```bash
npm install @mui/x-charts
```

### Date Pickers

```bash
npm install @mui/x-date-pickers dayjs
# or with luxon / date-fns / moment
```

### Tree View

```bash
npm install @mui/x-tree-view
```

## 3. DataGrid (most common)

```tsx
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface User { id: string; name: string; email: string; age: number; }

const columns: GridColDef<User>[] = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'age', headerName: 'Age', width: 80, type: 'number' },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: ({ row }) => (
      <>
        <IconButton onClick={() => edit(row)}><EditIcon /></IconButton>
        <IconButton onClick={() => del(row)}><DeleteIcon /></IconButton>
      </>
    ),
  },
];

<DataGrid
  rows={users}
  columns={columns}
  pageSizeOptions={[10, 25, 50]}
  initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
  checkboxSelection
  disableRowSelectionOnClick
  sx={{ minHeight: 500 }}
/>
```

### Server-side pagination

```tsx
<DataGrid
  rows={rows}
  rowCount={total}
  paginationMode="server"
  paginationModel={pag}
  onPaginationModelChange={setPag}
  sortingMode="server"
  onSortModelChange={setSort}
  filterMode="server"
  onFilterModelChange={setFilter}
  loading={loading}
/>
```

## 4. Charts

```tsx
import { BarChart, LineChart, PieChart } from '@mui/x-charts';

<LineChart
  xAxis={[{ data: [1, 2, 3, 5, 8] }]}
  series={[{ data: [2, 5.5, 2, 8, 1.5] }]}
  width={500}
  height={300}
/>

<BarChart
  series={[{ data: [35, 44, 24, 34] }, { data: [51, 6, 49, 30] }]}
  xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
/>

<PieChart
  series={[{
    data: [
      { id: 0, value: 10, label: 'A' },
      { id: 1, value: 15, label: 'B' },
      { id: 2, value: 20, label: 'C' },
    ],
  }]}
  width={400}
  height={200}
/>
```

## 5. Date Pickers

```tsx
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

<LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker label="Start" value={start} onChange={setStart} />
  <DateTimePicker label="When" value={when} onChange={setWhen} />
</LocalizationProvider>
```

### Date range (Pro tier)

```tsx
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

<DateRangePicker value={range} onChange={setRange} />
```

## 6. Tree View

```tsx
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';

<SimpleTreeView>
  <TreeItem itemId="1" label="Applications">
    <TreeItem itemId="2" label="Calendar" />
    <TreeItem itemId="3" label="Chrome" />
  </TreeItem>
  <TreeItem itemId="4" label="Documents">
    <TreeItem itemId="5" label="OSS" />
  </TreeItem>
</SimpleTreeView>
```

## 7. Tier comparison

| Feature | Community | Pro | Premium |
|---|---|---|---|
| Basic DataGrid | ✅ | ✅ | ✅ |
| Column pinning | — | ✅ | ✅ |
| Row grouping | — | ✅ | ✅ |
| Tree data | — | ✅ | ✅ |
| Excel export | — | ✅ | ✅ |
| Aggregation | — | — | ✅ |
| Clipboard import/export | — | — | ✅ |
| Row reordering | — | — | ✅ |
| AI Copilot | — | — | ✅ (exp) |
| License | MIT | Commercial | Commercial |

If community tier is enough, start free. Pro from $180/dev/year.

## 8. BANNED

- ❌ NEVER use `@mui/x-data-grid-pro` without a license — throws warning/watermark
- ❌ NEVER use DataGrid for < 20 rows — overkill, use `<Table>` from `@mui/material`
- ❌ NEVER use DataGrid without a fixed height or `autoHeight` — renders 0px
- ❌ NEVER forget `LocalizationProvider` around DatePickers — crashes
- ❌ NEVER lazy-load DataGrid rows without `paginationMode="server"` + server handlers
- ❌ NEVER use `DataGrid` without typed `GridColDef<T>[]` — type errors cascade
- ❌ NEVER hardcode chart colors — respect theme palette

## 9. Pre-flight checklist

```
- [ ] @mui/material installed (peer for all mui-x)
- [ ] Required x-* subpackage(s) installed
- [ ] For DatePickers: <LocalizationProvider dateAdapter=...>
- [ ] DataGrid columns typed: GridColDef<YourType>[]
- [ ] DataGrid has height (sx={{ minHeight: N }}) or autoHeight
- [ ] Server-side mode for > 1000 rows
- [ ] License applied for Pro/Premium tiers
- [ ] Charts using theme palette colors, not hardcoded hex
```

## 10. Dial fit

formality: 7-8 · motion: 4 · density: 7 · warmth: 4 · contrast: 6
