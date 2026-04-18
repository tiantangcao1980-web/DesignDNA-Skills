---
name: vuetify
description: Vuetify — Vue 3 Material Design component library (40k stars, v3.x, active). Largest Material-flavor Vue library. 80+ components, theme-configurable, SSR-friendly. Use when building Vue app with Material Design aesthetic.
---

# Vuetify — Vue 3 Material Design

> **Source**: [vuetifyjs/vuetify](https://github.com/vuetifyjs/vuetify) · 40k ⭐ · v3.x · 🟢 active 2026
> **NPM**: `vuetify`
> **Docs**: https://vuetifyjs.com/

## 1. When to use

- Vue 3 apps wanting **Material Design** look
- Global audience (Vuetify has larger EN-first community than Chinese-focused Vue libraries)
- Need Figma/Sketch Material kits

## 2. Install

### Vite

```bash
npm install vuetify
```

```ts
// main.ts
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({ components, directives });

createApp(App).use(vuetify).mount('#app');
```

### Auto-import via vite-plugin-vuetify

```bash
npm install -D vite-plugin-vuetify
```

```ts
// vite.config.ts
import vuetify from 'vite-plugin-vuetify';

export default {
  plugins: [
    vuetify({ autoImport: true }),
  ],
};
```

## 3. Catalog (80+)

Prefix: `v-*`.

**Basic**: `v-btn` · `v-icon` · `v-chip` · `v-avatar` · `v-badge` · `v-divider`

**Layout**: `v-app` · `v-main` · `v-container` · `v-row` · `v-col` · `v-spacer` · `v-app-bar` · `v-footer` · `v-navigation-drawer`

**Form**: `v-form` · `v-text-field` · `v-textarea` · `v-select` · `v-autocomplete` · `v-combobox` · `v-checkbox` · `v-radio-group` · `v-switch` · `v-slider` · `v-range-slider` · `v-file-input` · `v-date-picker`

**Data**: `v-data-table` · `v-data-iterator` · `v-list` · `v-treeview` · `v-card` · `v-expansion-panels` · `v-timeline`

**Navigation**: `v-tabs` · `v-breadcrumbs` · `v-pagination` · `v-stepper` · `v-menu`

**Feedback**: `v-alert` · `v-dialog` · `v-bottom-sheet` · `v-snackbar` · `v-progress-circular` · `v-progress-linear` · `v-tooltip`

## 4. Usage

### App shell

```vue
<template>
  <v-app>
    <v-app-bar color="primary">
      <v-toolbar-title>My App</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer>...</v-navigation-drawer>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
```

### Button

```vue
<v-btn color="primary" @click="save">Save</v-btn>
<v-btn color="error" variant="outlined">Delete</v-btn>
<v-btn color="primary" :loading="loading">Submit</v-btn>
<v-btn color="primary" size="large" block>Block CTA</v-btn>
```

### Form

```vue
<script setup lang="ts">
import { ref } from 'vue';

const form = ref<any>();
const email = ref('');
const pw = ref('');

const rules = {
  email: [(v: string) => !!v || 'Required', (v: string) => /.+@.+/.test(v) || 'Invalid'],
  pw: [(v: string) => !!v || 'Required', (v: string) => v.length >= 6 || 'Min 6'],
};
</script>

<template>
  <v-form ref="form" @submit.prevent="onSubmit">
    <v-text-field v-model="email" label="Email" :rules="rules.email" />
    <v-text-field v-model="pw" type="password" label="Password" :rules="rules.pw" />
    <v-btn type="submit" color="primary">Sign in</v-btn>
  </v-form>
</template>
```

### DataTable

```vue
<template>
  <v-data-table :headers="headers" :items="users" item-key="id" />
</template>

<script setup>
const headers = [
  { title: 'Name', key: 'name' },
  { title: 'Email', key: 'email' },
];
</script>
```

### Dialog

```vue
<v-dialog v-model="visible" max-width="400">
  <v-card>
    <v-card-title>Confirm</v-card-title>
    <v-card-text>Delete this?</v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="visible = false">Cancel</v-btn>
      <v-btn color="error" @click="handleDelete">Delete</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
```

## 5. Theme

```ts
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
      },
      dark: {
        colors: {
          primary: '#2196F3',
          background: '#121212',
          surface: '#1E1E1E',
        },
      },
    },
  },
});
```

Toggle dark mode:

```ts
import { useTheme } from 'vuetify';
const theme = useTheme();
theme.global.name.value = 'dark';
```

## 6. BANNED

- ❌ NEVER use Vuetify 2 for new projects — v3 is Vue 3 standard
- ❌ NEVER skip `<v-app>` at root — many components depend on it
- ❌ NEVER forget `vuetify/styles` import
- ❌ NEVER use MDI icons + Material Icons + Font Awesome together — pick one
- ❌ NEVER mix Vuetify with Element Plus / Ant Design Vue — conflicting design languages
- ❌ NEVER hardcode colors — use `color="primary"` or theme tokens
- ❌ NEVER forget `item-key` on `<v-data-table>`

## 7. Pre-flight checklist

```
- [ ] Vuetify v3.x installed
- [ ] vuetify/styles imported
- [ ] <v-app> wraps root
- [ ] Theme configured via createVuetify({ theme: {...} })
- [ ] Icons chosen (MDI default) and CSS imported
- [ ] Forms use :rules on fields
- [ ] DataTable has item-key
- [ ] Dark mode strategy implemented if needed
```

## 8. Dial fit

formality: 6 · motion: 6 · density: 5 · warmth: 5 · contrast: 6
