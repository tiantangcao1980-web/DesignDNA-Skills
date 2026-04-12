# DesignDNA Font Index

> **7 offline UI fonts** (5 Latin + 2 Chinese) — copy into any project, no npm or CDN needed.
> Total size: ~2.6MB (woff2 format, compressed).
> Chinese fonts use Google/Adobe subset slicing for optimal loading.

## Quick Selection Guide

### Latin / UI Fonts

| Font | Style | Weight Range | Size | Best For |
|------|-------|-------------|------|----------|
| **Inter** | Geometric sans | 100-900 (variable) | 52KB | SaaS, developer tools, dashboards |
| **JetBrains Mono** | Monospace | 100-800 (variable) | 44KB | Code, terminal, data tables |
| **Plus Jakarta Sans** | Warm humanist | 200-800 | 76KB | Consumer apps, editorial, friendly |
| **DM Sans** | Modern geometric | 100-1000 | 52KB | Modern SaaS, clean marketing |
| **Source Code Pro** | Monospace | 200-900 (variable) | 28KB | Code (Adobe style), readable mono |

### Chinese Fonts (中文字体)

| Font | Chinese Name | Weights Included | Size | Best For |
|------|-------------|-----------------|------|----------|
| **Noto Sans SC** | 思源黑体 | 400, 500, 600, 700 | 1.4MB | 中文 UI 默认字体，适合正文和标题 |
| **Noto Serif SC** | 思源宋体 | 400, 700 | 992KB | 编辑风、内容型、文学类界面 |

### Other Chinese Fonts (via npm, not bundled)

| Font | npm Install | License | Best For |
|------|-------------|---------|----------|
| **阿里巴巴普惠体** | 需手动下载 | Free commercial | 阿里/淘宝生态，电商 |
| **HarmonyOS Sans** | 需手动下载 | Free commercial | 华为生态，中英混排最优 |
| **霞鹜文楷 LXGW WenKai** | `npm i lxgw-wenkai-webfont` | SIL OFL | 文学、编辑、手写风格 |
| **MiSans** | 需手动下载 | Free commercial | 小米生态，现代清晰 |
| **OPPO Sans** | 需手动下载 | Free commercial | OPPO 生态，圆润友好 |

## How to Use

### Copy to project (offline, zero dependencies):
```bash
# Copy the font you need
cp -r designdna/assets/fonts/inter/ src/assets/fonts/

# In your CSS:
@font-face {
  font-family: 'Inter Variable';
  src: url('./fonts/inter/inter-latin-wght-normal.woff2') format('woff2');
  font-weight: 100 900;
  font-display: swap;
}

body { font-family: 'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
```

### Or install via npm (with full weight variants):
```bash
npm i @fontsource-variable/inter
```
```javascript
import '@fontsource-variable/inter';
```

## Chinese Font Usage

### Noto Sans SC (思源黑体) — UI 默认中文字体
```css
/* 从本地加载（离线可用） */
@font-face {
  font-family: 'Noto Sans SC';
  src: url('./fonts/noto-sans-sc/noto-sans-sc-100-400-normal.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
  unicode-range: U+4e00-9fff; /* 常用汉字范围 */
}

body {
  font-family: 'Inter Variable', 'Noto Sans SC', -apple-system,
    BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}
```

### Noto Serif SC (思源宋体) — 编辑/内容风格
```css
@font-face {
  font-family: 'Noto Serif SC';
  src: url('./fonts/noto-serif-sc/noto-serif-sc-100-400-normal.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
  unicode-range: U+4e00-9fff;
}

h1, h2, h3, .editorial { font-family: 'Noto Serif SC', 'STSong', serif; }
```

### Complete Font Stack Recommendations
```css
/* SaaS / 工具类 — 清晰、专业 */
--font-sans: 'Inter Variable', 'Noto Sans SC', -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
--font-mono: 'JetBrains Mono Variable', 'SF Mono', 'Fira Code', monospace;

/* 消费品 / 温暖 — 友好、亲切 */
--font-sans: 'Plus Jakarta Sans', 'Noto Sans SC', -apple-system, 'PingFang SC', sans-serif;

/* 编辑 / 内容 — 文学、沉浸 */
--font-serif: 'Noto Serif SC', 'STSong', 'SimSun', serif;
--font-sans: 'Plus Jakarta Sans', 'Noto Sans SC', sans-serif;
```

## Font-Archetype Matching

| Design Archetype | Latin Font | Chinese Font | Monospace |
|-----------------|-----------|-------------|-----------|
| Dark Instrument | Inter | Noto Sans SC | JetBrains Mono |
| Precision Monochrome | Inter or DM Sans | Noto Sans SC | JetBrains Mono |
| Warm Editorial | Plus Jakarta Sans | Noto Serif SC | Source Code Pro |
| Enterprise Trust | Inter | Noto Sans SC | JetBrains Mono |
| Friendly Warm | Plus Jakarta Sans | Noto Sans SC | Source Code Pro |
| Vibrant Gradient | DM Sans | Noto Sans SC | JetBrains Mono |
| Content Stage | Plus Jakarta Sans | Noto Serif SC | — |
| Developer Native | Inter | Noto Sans SC | JetBrains Mono |
| Chinese Enterprise | Inter | Noto Sans SC / 阿里巴巴普惠体 | JetBrains Mono |

## Weight Reference

| Weight Value | Name | CSS | Use |
|-------------|------|-----|-----|
| 100 | Thin | `font-weight: 100` | Decorative headlines only |
| 200 | Extra Light | `font-weight: 200` | Large display text |
| 300 | Light | `font-weight: 300` | De-emphasis, Stripe-style |
| 400 | Regular | `font-weight: 400` | Body text (default) |
| 500 | Medium | `font-weight: 500` | UI labels, emphasis |
| 600 | Semi Bold | `font-weight: 600` | Headings, section titles |
| 700 | Bold | `font-weight: 700` | Hero display, strong emphasis |
| 800 | Extra Bold | `font-weight: 800` | Maximum impact (rare) |
