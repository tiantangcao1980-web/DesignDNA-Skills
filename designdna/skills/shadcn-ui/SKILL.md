---
name: shadcn-ui
description: shadcn/ui — copy-paste React component library built on Radix Primitives + Tailwind CSS (80k+ stars, de-facto modern React standard 2024-2026). Not a traditional npm library — you own the code after CLI adds it. Includes setup, CLI commands, 40+ components, theming via CSS variables, dark mode.
---

# shadcn/ui — Own-Your-Components React UI

> **Source**: [shadcn-ui/ui](https://github.com/shadcn-ui/ui) · 80k+ ⭐ · 🟢 active 2026
> **Distribution**: CLI copies source into your project — you own it
> **Docs**: https://ui.shadcn.com/

## 1. The philosophy

**You don't install shadcn/ui.** You run a CLI that copies component source into your `src/components/ui/`. Then you own it — style it, modify it, evolve it without waiting on an upstream release.

Built on:
- **Radix Primitives** (accessibility) — see `radix-ui` skill
- **Tailwind CSS** (styling) — see `tailwindcss` skill
- **class-variance-authority (cva)** for variant classes
- **Lucide icons** (default)

## 2. Setup

### New Next.js / Vite / Remix / etc.

```bash
npx shadcn@latest init
```

Interactive prompts:
- Style: **New York** (modern) or **Default**
- Base color: slate / gray / zinc / neutral / stone / red / rose / orange / green / blue / yellow / violet
- CSS variables: **Yes** (recommended — easier theming)

Creates:
- `components.json` (config)
- `src/lib/utils.ts` (cn helper)
- `src/app/globals.css` (CSS variables)
- `tailwind.config.ts` (augmented)

### Manual (if CLI fails)

```bash
npm install tailwindcss class-variance-authority clsx tailwind-merge lucide-react
npm install @radix-ui/react-slot
```

Copy `lib/utils.ts`:

```ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## 3. Add components

Each `shadcn add` command copies **real source code** into your project:

```bash
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add form
npx shadcn@latest add table
npx shadcn@latest add card

# Multiple at once
npx shadcn@latest add button card badge avatar
```

The component file appears in `src/components/ui/button.tsx` — yours to edit.

## 4. Available components (40+)

**Form**: `button` · `input` · `textarea` · `select` · `checkbox` · `radio-group` · `switch` · `slider` · `combobox` · `form` · `input-otp` · `calendar` · `date-picker` · `label`

**Navigation**: `breadcrumb` · `menubar` · `navigation-menu` · `pagination` · `tabs` · `sidebar`

**Overlay**: `dialog` · `alert-dialog` · `sheet` · `drawer` · `popover` · `tooltip` · `hover-card` · `context-menu` · `dropdown-menu` · `command`

**Display**: `accordion` · `alert` · `avatar` · `badge` · `card` · `table` · `tabs` · `skeleton` · `progress` · `scroll-area` · `separator` · `aspect-ratio` · `carousel` · `chart` · `resizable`

**Feedback**: `sonner` (toast) · `toast` (legacy)

## 5. Usage

### Button

```tsx
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

<Button>Save</Button>
<Button variant="outline">Cancel</Button>
<Button variant="destructive"><Trash2 className="mr-2 h-4 w-4" /> Delete</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button disabled>Disabled</Button>
```

### Form (react-hook-form + zod)

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export function LoginForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '' },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((v) => console.log(v))} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl><Input type="password" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Sign in</Button>
      </form>
    </Form>
  );
}
```

### Dialog

```tsx
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>This action cannot be undone.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Toast (sonner)

```tsx
// First add: npx shadcn add sonner
import { Toaster, toast } from 'sonner';

// In root layout:
<Toaster />

// Anywhere:
toast.success('Saved!');
toast.error('Failed', { description: 'Network error' });
toast.promise(savePromise, { loading: 'Saving...', success: 'Saved', error: 'Failed' });
```

## 6. Theming

### CSS variables (in `app/globals.css`)

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --accent: 240 4.8% 95.9%;
    --destructive: 0 72.2% 50.6%;
    --border: 240 5.9% 90%;
    --radius: 0.5rem;
  }
  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    /* ... */
  }
}
```

Use custom theme colors via the **theme editor** at https://ui.shadcn.com/themes.

## 7. Dark mode (Next.js)

```bash
npm install next-themes
npx shadcn add dropdown-menu  # for theme toggle
```

```tsx
// app/layout.tsx
import { ThemeProvider } from 'next-themes';

<html suppressHydrationWarning>
  <body>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  </body>
</html>
```

## 8. BANNED

- ❌ NEVER treat shadcn/ui like npm — **you own the source**, so edit freely
- ❌ NEVER pin to shadcn CLI version "forever" — re-run add to get latest component source
- ❌ NEVER use shadcn without Tailwind — it's Tailwind-native
- ❌ NEVER import from `@radix-ui/react-*` directly when the shadcn component already wraps it
- ❌ NEVER mix shadcn with MUI / antd / Chakra — defeats the "own your code" philosophy
- ❌ NEVER skip `next-themes` if you want dark mode in Next.js
- ❌ NEVER hardcode colors like `bg-blue-500` for theme-variant surfaces — use `bg-primary` etc.

## 9. Pre-flight checklist

```
- [ ] Tailwind v4 installed and configured
- [ ] shadcn CLI init run (components.json present)
- [ ] src/lib/utils.ts has cn() helper
- [ ] src/app/globals.css has CSS variables (or src/index.css for Vite)
- [ ] Lucide icons installed (or replace with chosen icon lib)
- [ ] Dark mode wired: next-themes + ThemeProvider + attribute="class"
- [ ] Components added via `npx shadcn add <name>` (not npm)
- [ ] Theme colors use CSS variables (bg-primary, not bg-blue-500)
```

## 10. Dial fit

formality: 6-7 · motion: 4 · density: 4 · warmth: 4 · contrast: 7 (highly customizable)
