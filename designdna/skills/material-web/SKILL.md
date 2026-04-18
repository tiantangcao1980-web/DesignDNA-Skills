---
name: material-web
description: Material Web — Google's framework-agnostic Lit-based Web Components implementation of Material 3 (~9k stars, currently in maintenance mode). Safe for existing projects. For new React projects, MUI is usually the stronger path (see `mui-material` skill).
---

# Material Web (@material/web)

> **Source**: [material-components/material-web](https://github.com/material-components/material-web) · ~9k ⭐
> **Status**: 🟡 maintenance mode — bug fixes only, new feature cadence has slowed; [community maintainer discussion](https://github.com/material-components/material-web/discussions/5642)
> **Core tech**: Lit (Web Components)
> **Install**: `npm install @material/web`

## Status context

Material Web is Google's framework-agnostic Web Components library for Material 3. It replaced the older MWC (`@material/*` packages). Development pace has slowed since late 2024 and Google has opened a community discussion about long-term stewardship. The library is still functional and receives sporadic bug fixes.

**When it fits**:
- Existing projects already on Material Web — continue, pin versions, monitor upstream.
- Framework-agnostic Web Components contexts where you want Material aesthetics.

**When to pick something else**:
- React-first projects → MUI `material-ui` is the more active path (see `mui-material` skill).
- Framework-agnostic with broader component surface → Shoelace is worth evaluating.

## 1. When to use (if you decide to)

- Framework-agnostic web projects (no React/Vue lock-in)
- Already using Lit / vanilla Web Components
- Willing to accept the maintenance risk

## 2. Install

```bash
npm install @material/web
```

## 3. Usage

Material Web components are custom HTML elements. Import the component files you use:

```html
<!-- In your HTML -->
<md-filled-button>Click me</md-filled-button>
<md-text-button>Cancel</md-text-button>

<script type="module">
  import '@material/web/button/filled-button.js';
  import '@material/web/button/text-button.js';
  import '@material/web/all.js';  // Or all components at once (larger bundle)
</script>
```

## 4. Component catalog

**Buttons**: `md-filled-button` · `md-filled-tonal-button` · `md-elevated-button` · `md-outlined-button` · `md-text-button` · `md-fab` · `md-icon-button`

**Text fields**: `md-filled-text-field` · `md-outlined-text-field`

**Selection**: `md-checkbox` · `md-radio` · `md-switch` · `md-slider` · `md-select` (menu + item)

**Tabs**: `md-tabs` · `md-primary-tab` · `md-secondary-tab`

**Lists**: `md-list` · `md-list-item`

**Dialogs**: `md-dialog`

**Menus**: `md-menu` · `md-menu-item` · `md-sub-menu`

**Feedback**: `md-linear-progress` · `md-circular-progress`

**Chips**: `md-chip-set` · `md-filter-chip` · `md-assist-chip` · `md-input-chip` · `md-suggestion-chip`

**Decor**: `md-divider` · `md-icon` · `md-ripple` · `md-elevation` · `md-focus-ring`

Note: Material Web does **not** include Snackbar, BottomSheet, NavigationDrawer, or AppBar — you build those from primitives.

## 5. Usage examples

### Button

```html
<md-filled-button>Save</md-filled-button>
<md-outlined-button>Cancel</md-outlined-button>
<md-filled-tonal-button>Tonal</md-filled-tonal-button>
<md-text-button>Text</md-text-button>
<md-fab size="small"><md-icon slot="icon">add</md-icon></md-fab>
```

### Text field

```html
<md-outlined-text-field
  label="Email"
  type="email"
  supporting-text="Your work email"
  id="email-input"
></md-outlined-text-field>

<script>
  const field = document.getElementById('email-input');
  field.addEventListener('input', (e) => console.log(e.target.value));
</script>
```

### Dialog

```html
<md-dialog id="my-dialog">
  <div slot="headline">Confirm delete</div>
  <form id="form" slot="content" method="dialog">
    This action cannot be undone.
  </form>
  <div slot="actions">
    <md-text-button form="form" value="cancel">Cancel</md-text-button>
    <md-text-button form="form" value="delete">Delete</md-text-button>
  </div>
</md-dialog>

<script>
  document.getElementById('my-dialog').show();
</script>
```

## 6. Theme (CSS custom properties)

```css
:root {
  /* M3 design tokens */
  --md-sys-color-primary: #fa2c19;
  --md-sys-color-on-primary: #ffffff;
  --md-sys-color-primary-container: #ffdbcf;
  --md-sys-color-on-primary-container: #410000;

  --md-sys-color-secondary: #6366f1;
  --md-sys-color-surface: #fffbfe;
  --md-sys-color-on-surface: #1c1b1f;

  --md-sys-typescale-body-medium-font: 'Roboto', system-ui;

  --md-filled-button-container-shape: 4px;
}
```

Full token reference at https://material-web.dev/theming/colors/

## 7. React integration (limited)

Material Web components are Web Components — React doesn't automatically serialize some attributes. Use ref-based bridging or the `@lit/react` wrapper:

```tsx
import { createComponent } from '@lit/react';
import { MdFilledButton } from '@material/web/button/filled-button.js';

const FilledButton = createComponent({
  tagName: 'md-filled-button',
  elementClass: MdFilledButton,
  react: React,
});

<FilledButton onClick={save}>Save</FilledButton>
```

Or better: **just use MUI** (`mui-material` skill).

## 8. BANNED

- ❌ NEVER start new React projects with Material Web — use MUI instead (React-first, active, far richer)
- ❌ NEVER confuse `@material/web` (new, Lit-based, maintenance mode) with `@material/*` (old MWC, archived)
- ❌ NEVER rely on components not in the catalog (Snackbar, NavDrawer) — Material Web doesn't have them
- ❌ NEVER skip `import '@material/web/*.js';` — custom elements won't register
- ❌ NEVER use global `@material/web/all.js` if tree-shaking matters — import individually
- ❌ NEVER assume Material Web receives timely iOS Safari / Chrome new-feature support — it might not

## 9. Pre-flight checklist (existing projects)

```
- [ ] @material/web installed and version pinned
- [ ] Component imports in modules where used
- [ ] CSS variables customized for brand
- [ ] Fallbacks planned if Material Web support ends
- [ ] Monitoring the maintainer discussion (#5642) for status
- [ ] No new features depending on unreleased Material Web changes
- [ ] Migration target chosen (MUI for React / Shoelace for framework-agnostic)
```

## 10. Alternatives

| Scenario | Alternative |
|---|---|
| React with Material look | **MUI material-ui** (see skill) |
| Framework-agnostic Web Components | [Shoelace](https://shoelace.style/) (~15k stars, active) |
| Native Android / Flutter | Platform-built-in Material (see respective skills) |
| Pure Lit without Material | Build custom with [Lit](https://lit.dev/) |

## 11. Dial fit

formality: 6 · motion: 6 · density: 5 · warmth: 5 · contrast: 6
