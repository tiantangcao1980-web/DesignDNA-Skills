# MiniProgram — Component Libraries

> Last audit: 2026-04. For MiniProgram development across WeChat, Alipay, ByteDance, Baidu, QQ, JD, Kuaishou, and HarmonyOS.

## Selection by target

### WeChat MiniProgram only (native development)

Use native WXML/WXSS + Component() API:

| Library | Tier | Best for |
|---|---|---|
| Vant Weapp 🟢 | Mass-market | Most popular choice in 2026; Youzan-maintained |
| TDesign MiniProgram 🟢 | Enterprise | Tencent-integrated products |
| Wux Weapp 🟡 | Fallback | Only if Vant lacks a needed component |

### Multi-vendor MiniProgram (WeChat + Alipay + ByteDance + ...)

Must use a compilation layer:

| Framework + library | Tier | Best for |
|---|---|---|
| Taro + NutUI-React 🟢 | React dev | Best multi-vendor support |
| Taro + NutUI-Vue 🟢 | Vue dev | Same as above, Vue flavor |
| UniApp + NutUI UniApp 🟢 | Vue dev | UniApp ecosystem |
| UniApp + uni-ui 🟢 | Vue dev | Official DCloud components |

### WeChat + HarmonyOS

UniApp X is the emerging high-performance option:

| Library | Tier | Notes |
|---|---|---|
| UniApp X 🟢 | Emerging | UTS-based, native rendering, WeChat + HarmonyOS only |
| Taro 🟢 | Stable | All MiniProgram vendors + HarmonyOS via Taro HarmonyOS plugin |

## Supported vendors by framework

| Framework | WeChat | Alipay | ByteDance | Baidu | QQ | JD | Kuaishou | H5 | RN | Harmony |
|---|---|---|---|---|---|---|---|---|---|---|
| **Taro** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **UniApp** | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | plus-native | ✅ |
| **UniApp X** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | native | ✅ |
| Native WeChat | ✅ | — | — | — | — | — | — | — | — | — |

## Deprecated

| Library | Why |
|---|---|
| iView Weapp 🔴 | 5+ years dormant |
| Wuss Weapp 🔴 | 6+ years dormant |
| TouchWX 🔴 | 8+ years dormant |
| Remax 🔴 | Stopped 2022; use Taro |
| NutUI Bingo 🔴 | 3+ years dormant |

See [DEPRECATED.md](../DEPRECATED.md) for migration paths.

## Quick picker

```
WeChat MiniProgram only                      → Vant Weapp  OR  TDesign MiniProgram
Multi-vendor MiniProgram + React skill       → Taro + NutUI React
Multi-vendor MiniProgram + Vue skill         → Taro + NutUI Vue  OR  UniApp
WeChat + HarmonyOS, perf-critical            → UniApp X
Covers all platforms including Alipay        → Taro or UniApp
```

## Dial fit cheat-sheet

| Use case | formality | motion | density | warmth | contrast |
|---|---|---|---|---|---|
| WeChat social / community | 4 | 6 | 6 | 7 | 5 |
| E-commerce retail | 5 | 5 | 7 | 7 | 5 |
| Enterprise tool inside WeChat Work | 7 | 3 | 6 | 4 | 6 |
| Government / public service | 7 | 2 | 5 | 5 | 7 |
