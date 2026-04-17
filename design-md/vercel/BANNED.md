# Vercel — BANNED Patterns

## Typography
- NEVER use anything other than Geist (Sans and Mono) or system fallbacks
- NEVER use serif fonts
- NEVER exceed `font-weight: 500` in body content
- NEVER use letter-spacing > 0 for body copy

## Color
- NEVER use color as the primary visual element — Vercel is black/white/gray with rare accent
- NEVER use gradients (one exception: hero background in dark mode is subtle near-black noise)
- NEVER use warm colors as UI — red is reserved for errors only
- NEVER use more than one accent per view

## Layout
- NEVER use centered content; Vercel left-aligns or grid-aligns
- NEVER use curved or arc dividers; Vercel uses straight hairlines `#eaeaea`
- NEVER exceed 1200px content width
- NEVER use more than 2 levels of visual hierarchy per section

## Components
- NEVER use heavy-shadowed cards — Vercel uses 1px borders and zero shadows
- NEVER use large border-radius — `8px` max, often 0 or `6px`
- NEVER use icons from Heroicons or Material — Vercel uses custom line icons at 1.5 stroke
- NEVER animate feature showcases — static screenshots dominate

## Motion
- NEVER use entrance animations on scroll
- NEVER exceed 200ms for UI transitions
- NEVER use loading spinners — use shimmer skeletons

## Copy
- NEVER use hype language ("blazing fast," "revolutionary," "game-changing")
- NEVER use emoji in copy or headings
- NEVER exceed 10 words in a headline
- Headlines are declarative: "The platform for frontend developers" — not "Empower your frontend team"

## Signature "don'ts"
- NEVER use dashboard screenshots with colorful fake data — use monochrome or real data
- NEVER use the triangle logo as decoration — it appears only in nav / footer / error pages
- NEVER use "Trusted by" logo bars of generic companies — show real named customers inline with case studies
