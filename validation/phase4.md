# Phase 4 — End-to-End Multi-Platform Demo

**Scenario**: Build a "FocusTimer" product across 3 surfaces (Web marketing / mobile web app / WeChat MiniProgram)
using the project's OWN tools. Workflow:

1. Pick a brand DNA (stripe — professional B2B financial vibe suits a productivity app)
2. Run `designdna craft` to generate PROJECT-DESIGN.md with dial tweaks
3. Run `designdna add` with all formats for downstream platforms
4. Build 3 real pages following the generated spec
5. Verify visual/data consistency across surfaces

=== Step 1-2: Craft PROJECT-DESIGN.md with dials + generate tokens ===

  DesignDNA — design systems as AI skills

✓ Crafted PROJECT-DESIGN.md for FocusTimer
  → /tmp/designdna-e2e/demo-focustimer/PROJECT-DESIGN.md

  Base brand:  stripe × linear.app
  Dials:       formality:9 · motion:5 · density:4 · warmth:5 · contrast:7
  Size:        24.2 KB

  › Similar brands in taste space: linear.app, mistral.ai
  › Next: tell your AI agent — "Use PROJECT-DESIGN.md to build the UI"


=== Step 3: Generate tokens for Web/Mobile/MP build ===

  DesignDNA — design systems as AI skills

  Installing stripe design system

✓ DESIGN.md (20.0 KB)
✓ design.json 25 colors, 4 fonts, 10 spacing, 2 radii
✓ variables.css 25 colors, 4 fonts, 10 spacing, 2 radii
✓ tailwind.config.js 25 colors, 4 fonts, 10 spacing, 2 radii
✓ tokens.ts 25 colors, 4 fonts, 10 spacing, 2 radii

  › Next: tell your AI agent — "Use DESIGN.md to build the UI"


total 72
drwxr-xr-x  7 pengchengkeji  wheel    224 Apr 18 16:11 .
drwxr-xr-x  7 pengchengkeji  wheel    224 Apr 18 16:11 ..
-rw-r--r--  1 pengchengkeji  wheel  20436 Apr 18 16:11 DESIGN.md
-rw-r--r--  1 pengchengkeji  wheel   2187 Apr 18 16:11 design.json
-rw-r--r--  1 pengchengkeji  wheel   2569 Apr 18 16:11 tailwind.config.js
-rw-r--r--  1 pengchengkeji  wheel   2310 Apr 18 16:11 tokens.ts
-rw-r--r--  1 pengchengkeji  wheel   2107 Apr 18 16:11 variables.css
