# MiniProgram — Native Component Libraries (WeChat)

> Last audit: 2026-04. This file covers **native WeChat MiniProgram component libraries** (no Taro/UniApp compilation layer).

## TL;DR

- **Only one library is safe to choose in 2026: Vant Weapp** (Youzan).
- Tencent's `tdesign-miniprogram` is equally recommended — see the [Tencent ecosystem file](./tencent.md).
- Every other popular MiniProgram UI library is either deprecated or barely maintained.

## Roster

| Library | Stars | Last commit | Latest ver | Health | Recommendation |
|---|---|---|---|---|---|
| [Vant Weapp (youzan)](https://github.com/youzan/vant-weapp) | 18.4k | 2026-02 | v1.11.7 | **active** | ⭐⭐⭐⭐⭐ First choice |
| [tdesign-miniprogram (Tencent)](https://github.com/Tencent/tdesign-miniprogram) | 1.6k | 2026-04 | latest | **active** | ⭐⭐⭐⭐⭐ First choice (see tencent.md) |
| [Wux Weapp](https://github.com/wux-weapp/wux-weapp) | 5.1k | 2024-04 | v3.11.3 | **maintenance** | ⭐⭐⭐ Alternate if Vant lacks a needed component |
| [iView Weapp (TalkingData)](https://github.com/TalkingData/iview-weapp) | 6.6k | 2020-09 | v2.0.0 (2018-07) | **deprecated** | ❌ 5+ years dormant, do not use |
| [Wuss Weapp](https://github.com/phonycode/wuss-weapp) | 355 | 2020-05 | — | **deprecated** | ❌ ~6 years dormant |
| [TouchWX](https://github.com/uileader/touchwx) | 837 | 2018-07 | — | **deprecated** | ❌ ~8 years dormant, experimental |

## Selection heuristic

```
Project constraint                              → Pick
------------------------------------------------+------------------------
WeChat MiniProgram only, need rich components   → Vant Weapp
WeChat MiniProgram only, Tencent-integrated     → tdesign-miniprogram
Multi-vendor MiniProgram (WeChat + Alipay + …)  → Taro + NutUI   [see jd.md]
UniApp codebase                                 → nutui-uniapp / uni-ui
Legacy project still on iView Weapp             → Plan migration to Vant Weapp
```

## Native vs cross-platform trade-off

| Dimension | Native (Vant / TDesign / Wux) | Cross-platform (Taro + NutUI / UniApp) |
|---|---|---|
| Runtime performance | ✅ Direct `Component()`, zero overhead | ⚠️ Compilation shim cost |
| Multi-vendor support | ❌ WeChat only | ✅ 7+ MiniProgram vendors + H5 + RN |
| Native API access | ✅ Seamless | ⚠️ Requires bridge/adapter |
| Ecosystem maturity | ✅ Battle-tested docs | ✅ Depends on Taro/UniApp maturity |
| Team familiarity | Native WXML/WXSS | React/Vue mental model |

## Deprecated details

### iView Weapp
- Owner: TalkingData (Chinese analytics company)
- Status: Company pivoted out of frontend tooling; 320+ open issues unresponded
- Docs site (`weapp.iviewui.com`) exists but legacy-only
- **Do not use for new projects.**

### Wuss Weapp
- 500 commits, last 2020-05. Maintainer moved on.
- Had an active QQ support group, code is effectively abandoned.

### TouchWX
- Only 30 commits, experimental from the start.
- Claimed WeChat ↔ H5 transpilation, never matured.

### Wux Weapp (borderline)
- Rich component roster (60+, Ant Design-inspired aesthetics)
- Last meaningful release 2024-04; one CI maintenance commit since.
- Treat as **soft-deprecated** — use only if Vant is missing a specific component.

## Dial fit

| Dial | Vant Weapp positioning |
|---|---|
| Formality | 5 (neutral commercial) |
| Motion | 4 (modest) |
| Density | 6 (retail-friendly) |
| Warmth | 6 (WeChat-aligned warmth) |
| Contrast | 5-6 (soft) |
