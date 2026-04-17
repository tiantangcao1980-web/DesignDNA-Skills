---
name: nutui-biz
description: NutUI Biz business components skill — e-commerce domain components for NutUI React (address, SKU, coupon, invoice, order list). ⚠️ MAINTENANCE MODE — last major release 2023-03, minor fixes through 2025-01. Still usable but not actively developed. For new projects, copy components out as starting points rather than npm-depending on them.
---

# NutUI Biz — E-commerce Business Components (React)

> **Source**: [jdf2e/nutui-biz](https://github.com/jdf2e/nutui-biz) · 67 stars · 2025-01 last commit
> **Health**: 🟡 **MAINTENANCE** — shipping bug fixes, not active feature development
> **Docs**: https://nutui-biz.jd.com/ (as of 2026-04)

## ⚠️ Status

NutUI Biz has not had a feature release since v1.0 in 2023-03. It ships minor fixes occasionally, but the library is essentially in **maintenance mode**.

**Recommendation**:
- ✅ **Use source as reference** — read their implementations, copy the patterns you need
- 🟡 **OK for existing projects** — if already depending on it, continue; fixes are sporadic but the code works
- ❌ **Avoid in new projects as a runtime dependency** — the abandonment risk is real

Instead, for new projects:
- Use [NutUI Templates](../nutui-templates/SKILL.md) as page scaffolds
- Copy Biz component source into your project (MIT license) and own it

## 1. What nutui-biz provides

Business-domain components on top of NutUI React core. These are compound components composed from base NutUI primitives (Input, Cell, Popup, Button).

### Address

| Component | Purpose |
|---|---|
| `Address` | Full address selector (province → city → district → street) |
| `AddressEdit` | Address form with validation |
| `AddressList` | List of saved addresses with edit/delete/default |
| `AddressPreview` | Compact address display (name, phone, address one-liner) |

### Product / SKU

| Component | Purpose |
|---|---|
| `Sku` | Full SKU selector (image + specs + qty + price) |
| `SkuHeader` | Image + price + name header |
| `SkuHeaderPrice` | Highlighted price display |
| `SkuOperate` | Buy/add-to-cart actions |
| `SkuSelector` | Spec options grid (multi-axis) |
| `Stepper` | Quantity stepper |

### Order / checkout

| Component | Purpose |
|---|---|
| `OrderItem` | Order row (image, title, spec, price, qty) |
| `OrderList` | List of orders with status tabs |
| `Submit` | Submit bar (fixed bottom with total + CTA) |
| `AddressTip` | Address suggestion banner |
| `Coupon` | Coupon card |
| `CouponList` | List of available/used coupons |
| `Invoice` | Invoice type picker + form |

### Contact / seller

| Component | Purpose |
|---|---|
| `Contacts` | Contact list (often for recipient selection) |
| `ServiceBar` | Seller contact bar (phone, message, shop) |

## 2. Installation

```bash
npm install @nutui/nutui-biz
# Peer dependency: @nutui/nutui-react must already be installed
```

```tsx
import { AddressList, Sku, Submit } from '@nutui/nutui-biz';
import '@nutui/nutui-biz/dist/style.css';
```

## 3. Usage examples

### Address selector

```tsx
import { Address } from '@nutui/nutui-biz';

const provinceData = [
  { id: 1, name: 'Beijing' },
  { id: 2, name: 'Shanghai' },
  // ...
];

<Address
  visible={visible}
  type="custom"
  province={provinceData}
  city={cityData}
  country={countryData}
  town={townData}
  custom="custom2"
  onClose={() => setVisible(false)}
  onChange={(next) => loadChildren(next)}
  onCustomSelect={(tab, selected) => {
    // user picked a level
  }}
/>
```

### SKU selector

```tsx
import { Sku } from '@nutui/nutui-biz';

const skuData = {
  goods_name: 'T-Shirt',
  price: '198.00',
  stock_num: 99,
  imagePath: 'https://...',
  sku: [
    { id: 1, goods_name: 'Red / M', price: '198.00', stock_num: 20, skuList: [
      { name: 'Color', val: 'Red' },
      { name: 'Size', val: 'M' },
    ]},
    // ...
  ],
};

<Sku
  visible={visible}
  sku={skuData}
  btnExtraText="Add to cart"
  onClickBtnOperate={({ value, price, skuId }) => {
    // user pressed primary action
  }}
  onClickCloseIcon={() => setVisible(false)}
/>
```

### Submit bar (checkout CTA)

```tsx
import { Submit } from '@nutui/nutui-biz';

<Submit
  visible
  total={<span>Total: <strong>¥{total}</strong></span>}
  tips="Free shipping over ¥99"
  onSubmit={placeOrder}
>
  Place order
</Submit>
```

### Order list with tabs

```tsx
import { OrderList, OrderItem } from '@nutui/nutui-biz';

const tabs = ['All', 'Pending', 'Shipping', 'Completed'];

<OrderList
  tabs={tabs}
  activeTab={active}
  onTabChange={setActive}
>
  {orders.map(o => (
    <OrderItem
      key={o.id}
      title={o.title}
      desc={o.desc}
      imgUrl={o.image}
      price={o.price}
      num={o.qty}
      onClick={() => goDetail(o.id)}
    />
  ))}
</OrderList>
```

### Coupon card

```tsx
import { Coupon } from '@nutui/nutui-biz';

<Coupon
  coupon={{
    price: 50,
    couponType: 'discount',
    startTime: '2026-04-01',
    endTime: '2026-04-30',
    couponPriceTitle: 'Discount',
    couponCondition: 'Min order ¥200',
    couponRange: 'All items',
    couponType2: 'Coupon',
  }}
  onClick={() => claim()}
/>
```

## 4. Migration guidance (if moving off nutui-biz)

Since nutui-biz is maintenance mode, here's how to own the functionality:

### Step 1: Copy the source

```bash
git clone --depth=1 https://github.com/jdf2e/nutui-biz.git
cd nutui-biz/packages/nutui-biz
# Copy the component folder(s) you need into your project
cp -r src/packages/address /path/to/your-project/src/components/address
```

### Step 2: Adjust imports

Replace `@nutui/nutui-react` imports with your actual nutui-react install path if different.

### Step 3: Simplify

These components were built for general use. In your project, prune props you don't need, hardcode project-specific behavior, remove i18n layers if you're single-language.

### Step 4: Own the CSS

Copy the SCSS files into your project's styles tree and use your CSS variables. Break the dependency on `@nutui/nutui-biz/dist/style.css`.

## 5. BANNED patterns

- ❌ NEVER use nutui-biz in a new greenfield project as a runtime dependency — abandonment risk
- ❌ NEVER mix nutui-biz with other e-commerce component libraries (creates visual inconsistency)
- ❌ NEVER expect new features or React 19 support — library is frozen
- ❌ NEVER assume documentation is current — verify component exists and props are stable by reading source
- ❌ NEVER use `Sku` with incomplete `skuList` data — the component will crash
- ❌ NEVER skip testing the Submit bar at iOS safe-area insets — fixed-bottom elements need `env(safe-area-inset-bottom)`

## 6. Pre-flight checklist (existing projects)

```
- [ ] Already using @nutui/nutui-react (required peer)
- [ ] Pinned version of @nutui/nutui-biz (avoid auto-upgrade surprises)
- [ ] Copied source of critical components into project (fallback if upstream disappears)
- [ ] Safe-area-inset CSS applied to fixed-bottom elements (Submit, action bars)
- [ ] Tested on real devices (iPhone SE / Xiaomi / Huawei) — not just desktop emulator
- [ ] Theme variables override JD red (--nutui-color-primary) if not JD-branded
```

## 7. Alternative: build what you need with NutUI core

Most nutui-biz components can be rebuilt with 1-3 NutUI base components:

| nutui-biz | Base composition |
|---|---|
| `AddressPreview` | `<Cell>` + `<Text>` |
| `OrderItem` | `<Cell>` with custom children (image, price, qty) |
| `Submit` | `<div class="fixed bottom">` + `<Price>` + `<Button>` |
| `Coupon` | `<div>` + `<Price>` + `<Tag>` with custom styles |
| `AddressList` | `<CellGroup>` of `<Cell>` with swipe actions |

For the complex ones (`Sku`, `Address`), either copy source or build fresh.
