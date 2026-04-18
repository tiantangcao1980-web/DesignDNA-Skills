---
name: antv
description: AntV (G2 / G6 / X6) — Alibaba's framework-agnostic data visualization stack. G2 (25k+ combined stars) for statistical charts, G6 for graph/network viz, X6 for flowchart/diagram editor. Plus @ant-design/charts as the React wrapper. Active through 2026. Includes use-case guide and typical chart/graph patterns.
---

# AntV — G2 / G6 / X6 Data Viz

> **Sources**:
> - [antvis/G2](https://github.com/antvis/G2) · Statistical charts
> - [antvis/G6](https://github.com/antvis/G6) · Graph / network visualization
> - [antvis/X6](https://github.com/antvis/X6) · Flowchart / diagram editor
> - [ant-design/ant-design-charts](https://github.com/ant-design/ant-design-charts) · React wrapper around G2
>
> **Health**: 🟢 all active · v5+ for G2 / G6
> **Docs**: https://antv.antgroup.com/

## 1. When to use which

| Need | Pick |
|---|---|
| Bar / line / pie / scatter / heatmap | **G2** (or `@ant-design/charts` if React) |
| Knowledge graph / social network / org chart | **G6** |
| Flowchart editor / BPMN / mind map | **X6** |
| Simple React chart embedding | `@ant-design/charts` (wraps G2) |
| Maps + geographic viz | **L7** (geo-viz from AntV) |
| 3D scientific viz | **G / F** (lower-level rendering) |

## 2. Install

```bash
# G2 (pure)
npm install @antv/g2

# React wrapper (Ant Design Charts)
npm install @ant-design/charts
# Peer: react 18+

# G6 (graph)
npm install @antv/g6

# X6 (flowchart)
npm install @antv/x6 @antv/x6-plugin-dnd @antv/x6-plugin-selection
```

## 3. G2 / Ant Design Charts — usage

### Line chart (React)

```tsx
import { Line } from '@ant-design/charts';

const data = [
  { month: 'Jan', value: 120 },
  { month: 'Feb', value: 200 },
  { month: 'Mar', value: 150 },
];

<Line
  data={data}
  xField="month"
  yField="value"
  smooth
  color="#1890ff"
  point={{ size: 4 }}
/>
```

### Bar / column chart

```tsx
import { Column } from '@ant-design/charts';

<Column
  data={data}
  xField="category"
  yField="value"
  colorField="category"
  label={{ position: 'top' }}
/>
```

### Pie / donut

```tsx
import { Pie } from '@ant-design/charts';

<Pie
  data={data}
  angleField="value"
  colorField="label"
  radius={0.9}
  innerRadius={0.6}
  label={{ type: 'inner', content: '{percentage}' }}
/>
```

### Pure G2 (no React wrapper)

```ts
import { Chart } from '@antv/g2';

const chart = new Chart({ container: 'container', autoFit: true, height: 300 });
chart
  .interval()
  .data(data)
  .encode('x', 'category')
  .encode('y', 'value')
  .encode('color', 'category');
chart.render();
```

## 4. G6 — graph visualization

```ts
import { Graph } from '@antv/g6';

const graph = new Graph({
  container: 'container',
  width: 800,
  height: 600,
  data: {
    nodes: [
      { id: 'node1', label: 'Alice' },
      { id: 'node2', label: 'Bob' },
    ],
    edges: [
      { source: 'node1', target: 'node2', label: 'friend' },
    ],
  },
  layout: { type: 'force' },
  node: {
    style: { fill: '#5B8FF9', labelFill: '#fff', size: 40 },
  },
});

graph.render();
```

Layouts: `force` · `dagre` · `circular` · `grid` · `concentric` · `radial` · `random` · custom.

## 5. X6 — flowchart / diagram editor

```ts
import { Graph } from '@antv/x6';

const graph = new Graph({
  container: document.getElementById('editor'),
  width: 1000,
  height: 600,
  grid: true,
  panning: true,
  mousewheel: { enabled: true, modifiers: 'ctrl' },
});

// Add node
graph.addNode({
  x: 100, y: 100,
  width: 80, height: 40,
  label: 'Start',
  attrs: { body: { fill: '#5B8FF9', stroke: 'transparent', rx: 4 } },
});
```

With plugins: drag-drop palette, selection, keyboard, clipboard, snapline, minimap.

## 6. Theme customization

### G2 / AntV theme tokens

```ts
import { register } from '@antv/g2';

register('theme.dark', {
  backgroundColor: '#0a0a0f',
  defaultColor: '#10b981',
  strokes: ['#10b981', '#6366f1', '#ec4899'],
});
```

### Ant Design Charts

Pass `theme="classicDark"` or customize via Chart instance:

```tsx
<Line theme="classicDark" {...props} />
```

## 7. BANNED

- ❌ NEVER mix G2 v4 and v5 API — v5 is declarative spec-first, breaks from v4
- ❌ NEVER embed G6 / X6 inside React's `<div>` and expect React to manage children — they manage DOM directly. Render inside an empty div ref.
- ❌ NEVER put 1000+ nodes in G6 without virtualization / LOD — browser will stall
- ❌ NEVER use Pie charts for data with > 7 categories — use stacked bar instead (UX rule)
- ❌ NEVER resize a chart by setting parent container CSS alone — call `chart.forceFit()` or use `autoFit: true`
- ❌ NEVER forget `chart.destroy()` in component unmount — memory leak on SPA route change
- ❌ NEVER use ECharts alongside AntV in one project — pick one viz stack

## 8. Pre-flight checklist

```
- [ ] Chose right library for the data shape (G2 chart / G6 graph / X6 flow)
- [ ] React projects use @ant-design/charts wrapper, not raw G2
- [ ] autoFit: true or explicit resize handling
- [ ] Chart.destroy() / Graph.destroy() on unmount
- [ ] Colors from project palette (not default G2 blue)
- [ ] Labels / legends accessible (sufficient contrast)
- [ ] Responsive behavior tested (resize parent container)
- [ ] For large G6 graphs: LOD / clustering / hide labels at low zoom
- [ ] X6 keyboard shortcuts (undo/redo/delete) wired up
```

## 9. Alternatives

| Need | Alternative to AntV |
|---|---|
| React charts | Recharts · `@mui/x-charts` · Nivo · Visx |
| Graph viz | Cytoscape.js · vis.js · Sigma.js |
| Flowchart editor | React Flow · Rete.js |
| General-purpose (EN-first) | ECharts (Baidu) |

## 10. Dial fit

Depends on parent project. For dashboards: formality: 7, density: 7, contrast: 6.
