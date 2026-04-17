---
name: anti-slop
description: Bias correction layer that prevents AI coding agents from generating the generic, lookalike "AI slop" UI (centered heroes, Inter font, 3-card grids, John Doe avatars, 99.99% metrics, purple gradients). Combine with any brand DNA for taste-corrected output.
---

# Anti-Slop Skill — AI Bias Correction for UI

> **Purpose.** LLMs have strong statistical priors toward a small set of cliché UI patterns that appear in their training data. Left uncorrected, these priors collapse every generated landing page into the same shape. This file is the bias-correction layer: universal BANNED patterns plus mandatory replacements.
>
> **How to use.** Load this skill alongside a brand DNA file (e.g. `design-md/apple/DESIGN.md`). Enforce these rules in addition to the brand-specific spec. When they conflict, brand DNA wins.
>
> **Inspired by** [taste-skill](https://github.com/Leonxlnx/taste-skill) by Leon Lin — the original bias-correction skill that pioneered this approach.

---

## 1. CORE PRINCIPLE

**Your job is to fight the mean.** Every rule below exists because LLMs over-produce it. Statistical frequency in training data ≠ good design. When your default instinct says "use Inter / center the hero / add a 3-column grid," that is the bias speaking. Reject it and reach for the replacement.

---

## 2. DIALS (adjustable per project)

Declare these at the top of every generated `DESIGN.md` or in the project's PROJECT-DESIGN.md. They govern the conditional rules below.

```
DESIGN_VARIANCE = 6    # 1 = rigid grid, 10 = editorial/asymmetric
MOTION_INTENSITY = 5    # 1 = static, 10 = heavy motion
VISUAL_DENSITY = 4      # 1 = breathy, 10 = data-dense
WARMTH = 5              # 1 = cold/clinical, 10 = warm/human
CONTRAST = 7            # 1 = muted, 10 = stark
```

Defaults above are deliberately non-generic. Do not silently reset to `5,5,5,5,5` — ask the user or pick based on brand.

---

## 3. BANNED TYPOGRAPHY

| BANNED | WHY | USE INSTEAD |
|---|---|---|
| **Inter** | Overused AI default; signals lack of taste | Geist, Outfit, Cabinet Grotesk, Satoshi, Söhne, General Sans, or the brand-specified font |
| `font-weight: bold` / 700 for body | AI over-bolds | Keep body at 400; use 500 for emphasis |
| All-caps headings > 16px | Dated skeuomorphism | Use sentence-case with negative letter-spacing |
| Mixed Sans + Serif + Mono in one hero | Decoration without hierarchy | Max 2 families per page; 1 is elegant |
| Generic "Heading 1 / Body / Caption" hierarchy | Screams template | Name semantic roles: `display`, `eyebrow`, `lead`, `quote` |

---

## 4. BANNED COLORS

| BANNED | WHY | USE INSTEAD |
|---|---|---|
| **Pure black `#000000`** | Harsh, machine-made | Warm near-black `#0a0a0f` `#111418` `#1d1d1f` |
| **Pure white `#FFFFFF`** surfaces | Clinical glare | `#fafaf9` `#f5f5f4` warm off-white |
| **Default AI purple** `#8B5CF6` `#7C3AED` | The "ChatGPT purple," over-used in every AI-generated landing | Use the brand accent; if no brand, try emerald, amber, crimson, teal |
| **Rainbow gradients** blue→purple→pink | Mid-2020s generic gradient | Two-color gradients tied to brand; or no gradient |
| **Bootstrap palette** `#007bff` `#28a745` `#dc3545` | Signals no design | Brand-specific hex codes only |
| Saturated neon on white bg | Accessibility fail + tacky | Raise darkness to min OKLCH L=45 when on white |

---

## 5. BANNED LAYOUTS

| BANNED | WHY | USE INSTEAD |
|---|---|---|
| **Centered hero with "headline + subhead + 2 buttons"** | The #1 AI template | Asymmetric: left-aligned hero, overflow content on right, or full-bleed media |
| **3-column feature card grid** (icon + title + 2-line blurb) | Cliché #2 | 2-column with image, staggered bento, or single long-form |
| **"Trusted by" logo bar of 6 fake logos** | Social proof theater | Omit if no real logos; otherwise 1-2 real case studies with quotes |
| **Full-bleed hero with tiny centered card on top** | Default portfolio template | Full content uses the frame; no floating center card |
| **"Features / Pricing / Testimonials / CTA" stacked sections** | Generic landing skeleton | Pick 3 blocks max; reorder per narrative |
| **4-column footer with 6 links each** | Corporate placeholder | 2-column footer with real content or single-row minimal |

---

## 6. BANNED COPY / CONTENT

| BANNED | WHY | USE INSTEAD |
|---|---|---|
| **"John Doe" / "Jane Smith"** | Placeholder leakage | Real-sounding names or omit |
| **"Acme Corp" / "Nexus" / "Velocity" / "Apex"** | Generic startup names | Use the actual project name or descriptive labels |
| **"99.99% uptime" / "10x faster" / "10,000+ users"** | Fake credibility numbers | Real numbers or no numbers |
| **"Lorem ipsum"** anywhere | Obvious placeholder | Real copy, even if short |
| **"Effortlessly..." / "Seamlessly..." / "Revolutionary..."** | AI marketing-speak | Plain declarative sentences |
| **Emoji in headings** (🚀 ✨ 💡) | Dated; reads as AI output | Remove; let typography carry emphasis |
| **"Powered by AI" / "AI-first"** as the value prop | Buzzword substitute for benefit | State the concrete user benefit |

---

## 7. BANNED COMPONENTS

| BANNED | WHY | USE INSTEAD |
|---|---|---|
| **"Gradient border glow" card** everywhere | 2023-2024 AI default | Solid 1px border, subtle shadow, or no border |
| **Frosted glass backdrop-blur on every card** | Every AI landing has it | Use solid surfaces; blur only for overlays |
| **"Animated mesh gradient" hero background** | Aesthetic slop | Solid brand color, subtle noise texture, or real imagery |
| **Dashboard screenshot with blur/mockup frame** | Fake product visual | Real screenshot or don't show product |
| **Circular avatar stack overlapping** for "team of" | Stock pattern | Named photos or no photos |
| **"Chat bubble with AI typing dots"** as hero visual | Every AI product does this | Show a real artifact the tool produces |

---

## 8. CONDITIONAL RULES (driven by dials)

- **IF `DESIGN_VARIANCE` > 7** → asymmetric layouts BANNED to be symmetric; every section must have a distinct structure. Use `grid-template-columns: 2fr 1fr 1fr` patterns; break the 12-column grid at least once per page.
- **IF `VISUAL_DENSITY` > 7** → generic card containers BANNED. Use `border-t` / `divide-y` for data tables instead of boxed cards. Show 3× more information per screen.
- **IF `VISUAL_DENSITY` < 3** → card stacks BANNED. Use whitespace as the container. Minimum 120px vertical gap between sections.
- **IF `MOTION_INTENSITY` > 6** → at least one continuous micro-animation on the hero (not a one-time entrance). Examples: marquee, typewriter, shimmer, gradient drift.
- **IF `MOTION_INTENSITY` < 3** → BANNED: any animation > 200ms; BANNED: scroll-triggered reveals; use static images only.
- **IF `WARMTH` > 7** → BANNED: geometric icons; use hand-drawn or photographic imagery.
- **IF `CONTRAST` < 4** → BANNED: black text on white; use `#44403c` on `#fafaf9`.

---

## 9. PRE-FLIGHT CHECKLIST

Before you output UI code, explicitly self-audit. Print this checklist with filled `[x]` / `[ ]`:

```
Typography
- [ ] No Inter unless brand specifies it
- [ ] ≤ 2 font families used
- [ ] ≤ 4 font weights used

Color
- [ ] No pure #000000 or #FFFFFF
- [ ] No default AI purple #8B5CF6 family
- [ ] Accent color matches brand DNA (or declared project color)

Layout
- [ ] Hero is NOT a centered "headline + subhead + 2 buttons" template
- [ ] No 3-column icon-card feature grid
- [ ] No "Trusted by" fake logo bar
- [ ] At least one section breaks the symmetric grid

Copy
- [ ] No "John Doe" / "Acme" / "Nexus" placeholders
- [ ] No fake metrics (99.99%, 10x, 10,000+)
- [ ] No "Effortlessly" / "Seamlessly" / "Revolutionary"
- [ ] No emoji in headings

Components
- [ ] No frosted-glass cards everywhere
- [ ] No animated mesh gradient hero background
- [ ] No rainbow blue→purple→pink gradient

Dials conformance
- [ ] DESIGN_VARIANCE, MOTION_INTENSITY, VISUAL_DENSITY declared
- [ ] Conditional rules matching my dial values are applied
```

**If any item is unchecked, revise before output.** This checklist is mandatory for every generated page. Do not skip.

---

## 10. WHEN IN DOUBT

If a pattern looks familiar from generic AI-generated landing pages you've seen — it probably is. Reach for the brand DNA specification first; if it's silent, do the **opposite** of the common AI default.

Novelty is not the goal. Taste is. Taste means refusing the mean.
