# Experience Log Example

> This directory accumulates design and interaction experience across projects.
> AI will suggest saving entries here after completing UI/UX work.

## Directory Structure

```
experience/
├── references/          ← Design DNA extracted from websites/screenshots
│   └── [site-name].md   ← e.g., stripe-checkout.md, notion-editor.md
├── interactions/         ← Interaction design decisions per project
│   └── [project-name]-interactions.md
└── EXAMPLE.md            ← This file (delete after you have real entries)
```

## Example: Reference Entry

```markdown
# Stripe Checkout — Design DNA

## Archetype: Enterprise Trust (Vibrant Gradient variant)

## Key Design Decisions
- Weight 300 as headline signature ("whisper-weight authority")
- Blue-tinted shadows: rgba(50,50,93,0.25) creates brand atmosphere
- OpenType "ss01" required on all Sohne text
- Tabular numbers "tnum" for all financial figures

## What to Reuse
- Multi-layer chromatic shadow for card elevation
- Weight 300 headline + weight 400 body creates elegant contrast
- Payment form inline validation with green checkmark on valid fields
```

## Example: Interaction Entry

```markdown
# MyApp v2 — Interaction Decisions

## What Worked Well
- Optimistic updates on favorite button felt instant (200ms perceived)
- Skeleton screens eliminated "blank flash" during page transitions
- Bottom sheet for mobile actions (instead of dropdown) increased engagement

## What Didn't Work
- Toast auto-dismiss at 2s was too fast — increased to 4s
- Inline editing on mobile: touch targets were too small (32px → 48px)

## Patterns to Reuse Next Time
- Card swipe-to-delete with 3s undo toast window
- Haptic feedback on drag-reorder (React Native)
- Loading button: text → spinner → checkmark sequence (300ms each)
```
