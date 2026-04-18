---
name: nutui-templates
description: NutUI official page templates skill — JD-style Vue 3 and React page/layout templates for mobile H5 and Taro MiniProgram (152 stars, active). Covers template taxonomy (home / product / order / checkout / me), how to scaffold from a template, and integration with NutUI Vue / React.
---

{% raw %}


# NutUI Templates — E-commerce Page Templates

> **Source**: [jdf2e/nutui-templates](https://github.com/jdf2e/nutui-templates) · 152 stars · 2026-04 active
> **Health**: 🟢 active
> **Live demo**: https://nutui.jd.com/h5/vue/4x/#/en-US/template

## 1. Why templates

JD-style mobile e-commerce has repeatable layout patterns: product detail, shopping cart, checkout flow, order list, address management, profile page. NutUI Templates packages these as **ready-to-copy Vue/React components** you drop into your project.

Think of them as the layer between single components (`Button`, `Cell`) and full apps — the **page scaffolds**.

## 2. Template catalog

### Homepage patterns

| Template | Purpose |
|---|---|
| `Home` | Main landing with banner + category grid + product waterfall |
| `Category` | Category tree + product list |
| `Activity` | Marketing landing (coupons, gamification entries) |

### Product

| Template | Purpose |
|---|---|
| `GoodsDetail` | Product detail page with image carousel, SKU, spec table |
| `GoodsList` | Product grid/list with filter + sort |
| `GoodsSearch` | Search results with history/trending |

### Shopping / checkout

| Template | Purpose |
|---|---|
| `Cart` | Shopping cart with qty adjust + promo |
| `Checkout` | Order confirmation with address + coupons + payment |
| `Payment` | Payment method picker + status |
| `OrderList` | Order history tabs (All / Pending / Shipping / Completed) |
| `OrderDetail` | Order detail timeline |

### User / account

| Template | Purpose |
|---|---|
| `Me` | Profile home |
| `Login` | SMS + password login |
| `Register` | Registration flow |
| `AddressList` / `AddressEdit` | Address management |
| `Feedback` | Customer feedback form |
| `Settings` | Settings page |

### Auxiliary

| Template | Purpose |
|---|---|
| `Empty` | Empty state page |
| `Error` | 404 / error |
| `Loading` | Full-page loading |

## 3. How to use

### Browse live

All templates are viewable at https://nutui.jd.com/h5/vue/4x/#/en-US/template — interact, then copy source.

### Copy pattern

```bash
# Clone the templates repo
git clone --depth=1 https://github.com/jdf2e/nutui-templates.git
cd nutui-templates

# Templates live in `packages/templates/`
ls packages/templates/vue
# → cart/  checkout/  goodsDetail/  home/  me/  orderList/  ...

ls packages/templates/react
# → same structure
```

Copy the folder you need into your own project, adjust imports.

### Or scaffold

NutUI offers CLI scaffolding via [create-nutui](https://github.com/jdf2e/create-nutui):

```bash
npm create nutui@latest my-shop
# Choose: Vue 3 / React / UniApp
# Choose starter: e-commerce / minimal / blank
```

## 4. Template anatomy (GoodsDetail example, Vue)

```vue
<template>
  <div class="goods-detail">
    <!-- Image carousel -->
    <nut-swiper :init-page="0" :pagination-visible="true">
      <nut-swiper-item v-for="img in images" :key="img">
        <img :src="img" />
      </nut-swiper-item>
    </nut-swiper>

    <!-- Price + title -->
    <div class="info">
      <nut-price :price="product.price" size="large" />
      <div class="title">{{ product.name }}</div>
      <div class="desc">{{ product.description }}</div>
    </div>

    <!-- SKU selector trigger -->
    <nut-cell title="Specs" :desc="selectedSku" is-link @click="openSku" />

    <!-- Reviews summary -->
    <nut-cell title="Reviews" :desc="`${reviewCount} reviews`" is-link />

    <!-- Fixed bottom action bar -->
    <div class="action-bar">
      <nut-button type="primary" plain>Add to cart</nut-button>
      <nut-button type="primary" block>Buy now</nut-button>
    </div>

    <!-- SKU modal -->
    <nut-sku v-model="skuVisible" :sku="product.sku" @on-confirm="onSkuConfirm" />
  </div>
</template>
```

## 5. Customizing templates

Templates ship with **default JD visual language** (red accent, warm e-commerce aesthetic). To rebrand:

1. **Override CSS variables** at the app root:
   ```css
   :root {
     --nut-primary-color: #4a90e2;   /* change accent */
     --nut-help-color: #f5f7fa;
   }
   ```

2. **Replace images** — templates reference placeholder product/category images; swap with your CDN URLs.

3. **Adjust copy** — default copy is in Chinese; localize to your project language.

4. **Refine layouts** — remove sections that don't apply (e.g., if you don't have a points system, remove the "points balance" block in `Me`).

## 6. BANNED patterns (when using templates)

- ❌ NEVER ship templates with placeholder data ("Loading...", fake product names, `#123 Product`) — always bind to real data
- ❌ NEVER keep JD-red if the brand is not JD — always override `--nut-primary-color`
- ❌ NEVER copy all templates — only the ones you need (templates are not a design system; they're starters)
- ❌ NEVER mix Vue templates with React templates in the same project
- ❌ NEVER leave hard-coded image URLs pointing to JD's CDN — replace with your own
- ❌ NEVER forget to test on small-screen phones (iPhone SE width 375px) — templates assume standard widths

## 7. Pre-flight checklist

```
- [ ] Chose the right template flavor: Vue or React (not both)
- [ ] Installed NutUI component library (nutui for Vue, nutui-react for React)
- [ ] Installed NutUI icons (@nutui/icons-vue or @nutui/icons-react)
- [ ] Overrode --nut-primary-color if not JD-branded
- [ ] Replaced placeholder images with project CDN
- [ ] Localized copy (templates ship with Chinese)
- [ ] Wired real data sources (API / store) for dynamic content
- [ ] Removed template sections not relevant to your product
```

## 8. Templates vs nutui-biz

- **Templates**: whole-page layouts (GoodsDetail, Cart, Me). Copy as starting point.
- **nutui-biz** (React only, maintenance mode): business-domain components (address picker, SKU selector, coupon, invoice). See `nutui-biz/SKILL.md`.

Templates compose many nutui-biz components internally.

{% endraw %}
