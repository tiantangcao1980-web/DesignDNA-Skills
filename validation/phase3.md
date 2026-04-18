# Phase 3 — Parser Quality Sample Check

Picks 10 high-profile brands and inspects extracted colors + fonts + counts.

| Brand | Colors | Fonts | Sample color | Sample font | Dials |
|---|---|---|---|---|---|
| stripe | 25 | 4 | stripe-purple=#533afd | sohne-var | f=9,m=4,d=3 |
| apple | 16 | 4 | pure-black=#000000 | SF Pro Display | f=9,m=4,d=2 |
| linear.app | 25 | 4 | marketing-black=#010102 | Inter Variable | f=9,m=4,d=4 |
| notion | 21 | 4 | notion-black=rgba(0, 0, 0, 0.9 | NotionInter | f=5,m=3,d=3 |
| vercel | 24 | 4 | vercel-black=#171717 | Geist | f=10,m=3,d=4 |
| spotify | 20 | 4 | spotify-green=#1ed760 | Title | f=4,m=7,d=6 |
| tesla | 10 | 2 | electric-blue=#3e6ae1 | Universal Sans Display | f=10,m=3,d=1 |
| airbnb | 17 | 4 | rausch-red=#ff385c | Airbnb Cereal VF | f=4,m=5,d=5 |
| claude | 19 | 4 | anthropic-near-black=#141413 | Headline | f=7,m=3,d=3 |
| figma | 4 | 4 | pure-black=#000000 | figmaSans | f=4,m=7,d=5 |

=== 3.2 No garbage labels in any color keys (all kebab-case, reasonable length) ===
  ✓ Long color keys (>35 chars): 0
  ✓ Non-kebab color keys: 0

=== 3.3 No font-family poisoning (Ruby, Magenta, Sign in, etc.) ===
  ✓ 58 brands, 0 poison font families
