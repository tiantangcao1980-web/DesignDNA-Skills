---
name: bootstrap
description: Bootstrap 5 — classic CSS + JS component framework (174k stars, v5.3+, active). Mature, battle-tested for enterprise admin, internal tools, marketing sites. Ships with Bootstrap Icons. Vanilla-JS (no React/Vue dep). Best for projects wanting "install a theme and ship" speed. v4 is security-only. Includes install, grid, components, SASS customization.
---

# Bootstrap 5 — Classic CSS Framework

> **Source**: [twbs/bootstrap](https://github.com/twbs/bootstrap) · 174k ⭐ · v5.3.8 · 🟢 active 2026
> **Icons**: [twbs/icons](https://github.com/twbs/icons) · 7.9k ⭐ · v1.13.1
> **Docs**: https://getbootstrap.com/

## 1. When to use

- Internal tools / admin where speed > customization
- Marketing sites with traditional layout
- Team unfamiliar with utility-first CSS (Bootstrap has less learning curve than Tailwind)
- Need **themes from community** (thousands of free Bootstrap themes exist)

### When NOT to use

- Design-driven SaaS wanting unique visual identity → use Tailwind + shadcn/ui
- React component-first apps → use MUI / Ant Design / Chakra instead

## 2. Install

### CDN (fastest for marketing sites)

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
```

### NPM

```bash
npm install bootstrap @popperjs/core
```

```js
// main.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';  // Modal, Dropdown, Tooltip, Collapse JS
```

### Icons

```bash
npm install bootstrap-icons
```

```html
<link href="node_modules/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
```

```html
<i class="bi bi-heart-fill text-red-500"></i>
<i class="bi bi-arrow-right"></i>
```

## 3. Grid system

Bootstrap uses a 12-column grid:

```html
<div class="container">
  <div class="row">
    <div class="col-md-8">Main content</div>
    <div class="col-md-4">Sidebar</div>
  </div>
</div>
```

Responsive breakpoints: `sm` 576px · `md` 768px · `lg` 992px · `xl` 1200px · `xxl` 1400px.

## 4. Component catalog

**Layout**: Container · Row · Col · Grid · Gutters · Offcanvas

**Content**: Typography · Images · Tables · Figures · Lists

**Forms**: Forms · Form controls · Select · Checks & radios · Range · Input group · Floating labels · Validation

**Components**: Accordion · Alerts · Badge · Breadcrumb · Buttons · Button group · Card · Carousel · Close button · Collapse · Dropdowns · List group · Modal · Navs & tabs · Navbar · Offcanvas · Pagination · Placeholders · Popovers · Progress · Scrollspy · Spinners · Toasts · Tooltips

**Helpers**: Clearfix · Color & background · Colored links · Focus ring · Icon link · Position · Ratio · Stacks · Stretched link · Text truncation · Vertical rule · Visually hidden

**Utilities**: Backgrounds · Borders · Colors · Display · Flex · Float · Interactions · Opacity · Overflow · Position · Shadows · Sizing · Spacing · Text · Vertical align · Visibility

Full catalog: https://getbootstrap.com/docs/5.3/components/

## 5. Usage

### Button

```html
<button class="btn btn-primary">Save</button>
<button class="btn btn-outline-secondary">Cancel</button>
<button class="btn btn-danger"><i class="bi bi-trash"></i> Delete</button>
<button class="btn btn-lg btn-primary w-100">Full width CTA</button>
<button class="btn btn-sm btn-link">Link</button>
```

### Form

```html
<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" required>
    <div class="form-text">We'll never share your email.</div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" minlength="6" required>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="remember">
    <label class="form-check-label" for="remember">Remember me</label>
  </div>
  <button type="submit" class="btn btn-primary w-100">Sign in</button>
</form>
```

### Card

```html
<div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Description goes here.</p>
    <a href="#" class="btn btn-primary">Go</a>
  </div>
</div>
```

### Modal

```html
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Open modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Confirm</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        Are you sure?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</div>
```

### Navbar

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="nav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      </ul>
    </div>
  </div>
</nav>
```

## 6. SASS customization

```scss
// _overrides.scss
$primary: #fa2c19;  // your brand color
$font-family-base: 'Inter', system-ui;
$border-radius: 0.375rem;

@import 'bootstrap/scss/bootstrap';
```

### CSS custom properties (v5)

```css
:root {
  --bs-primary: #fa2c19;
  --bs-primary-rgb: 250, 44, 25;
  --bs-body-font-family: 'Inter', system-ui;
}
```

## 7. Dark mode (v5.3+)

```html
<!DOCTYPE html>
<html data-bs-theme="dark">
```

Or toggle:

```js
document.documentElement.setAttribute('data-bs-theme', prefersDark ? 'dark' : 'light');
```

## 8. BANNED

- ❌ NEVER use v4 for new projects — v5 has been the standard since 2021
- ❌ NEVER use v3 / v2 — jQuery dependency, completely superseded
- ❌ NEVER mix Bootstrap with Tailwind — philosophical conflict (component classes vs utilities)
- ❌ NEVER forget the JS bundle if using Modal / Dropdown / Collapse / Tooltip / Popover
- ❌ NEVER hardcode custom colors when `$primary` SASS variable does it everywhere
- ❌ NEVER use Bootstrap Icons' default size without matching your typography (they're 1em by default, often need explicit sizing)
- ❌ NEVER rely on community themes without vetting their maintenance status

## 9. Pre-flight checklist

```
- [ ] Bootstrap v5.3+ installed
- [ ] bootstrap-icons installed (or chosen alternative)
- [ ] JS bundle loaded (bootstrap.bundle.min.js) if using interactive components
- [ ] SASS variables or CSS custom properties overridden for brand
- [ ] Dark mode via data-bs-theme if needed
- [ ] Grid uses container > row > col structure
- [ ] Forms use validation classes (is-valid / is-invalid)
- [ ] Accessibility attributes (aria-label, role) where needed
- [ ] Not mixing with Tailwind
```

## 10. Dial fit

formality: 7 · motion: 3 · density: 6 · warmth: 4-5 · contrast: 5-6
