# Phase 1 — CLI Command Test Report

Generated: Sat Apr 18 08:41:02 CST 2026

## Test matrix

=== T1.1: version ===
0.1.0
=== T1.2: help ===

  DesignDNA — design systems as AI skills

  Install a brand design system into your project in one command.

  Usage
    npx designdna <command> [options]

  Commands
    add <brand>         Install a brand design system
    craft                Generate a tailored PROJECT-DESIGN.md (two-stage)
    init                 Interactive picker
    list                 List all 58 available brands
    preview <brand>     Open brand's preview catalog in browser
    install              Install the DesignDNA skill into your AI IDE
    resources            Browse the 2026 component library catalog
    skills               Browse/install Taro + NutUI sub-skills
    version              Print version
    help                 Show this help

  Examples
    # Install Stripe DESIGN.md only
    $ npx designdna add stripe

    # Install Stripe with Tailwind preset
=== T1.3: list ===

  DesignDNA — design systems as AI skills

  58 brand design systems available:

  airbnb       figma        nvidia       stripe       
  airtable     framer       ollama       supabase     
  apple        hashicorp    opencode.ai  superhuman   
  bmw          ibm          pinterest    tesla        
  cal          intercom     posthog      together.ai  
=== T1.4: list --json (validate JSON) ===
  ✓ Valid JSON, total=58, brands[0..3]=['airbnb', 'airtable', 'apple']

=== T1.5: add stripe --format=all ===

  DesignDNA — design systems as AI skills

  Installing stripe design system

✓ DESIGN.md (20.0 KB)
✓ design.json 21 colors, 4 fonts, 8 spacing, 2 radii
✓ variables.css 21 colors, 4 fonts, 8 spacing, 2 radii
✓ tailwind.config.js 21 colors, 4 fonts, 8 spacing, 2 radii
✓ tokens.ts 21 colors, 4 fonts, 8 spacing, 2 radii

  › Next: tell your AI agent — "Use DESIGN.md to build the UI"


Files produced:
  .  224 bytes
  ..  224 bytes
  DESIGN.md  20436 bytes
  design.json  1276 bytes
  tailwind.config.js  1717 bytes
  tokens.ts  1399 bytes
  variables.css  1261 bytes

=== T1.6: Validate JSON output ===
  ✓ Valid JSON
  brand: stripe
  colors: 21
  dials: MISSING
  typography.families: ['Ruby', 'Magenta', 'Heading', 'Label']

=== T1.7: craft --brand=stripe --motion=6 --name=TestApp ===

  DesignDNA — design systems as AI skills

✓ Crafted PROJECT-DESIGN.md for TestApp
  → /tmp/designdna-e2e/phase1/PROJECT-DESIGN.md

  Base brand:  stripe
  Dials:       formality:9 · motion:6 · density:3 · warmth:5 · contrast:5
  Size:        24.2 KB

  › Similar brands in taste space: mistral.ai, apple
  › Next: tell your AI agent — "Use PROJECT-DESIGN.md to build the UI"


=== T1.8: craft --brand=stripe --blend=vercel ===

  DesignDNA — design systems as AI skills

✓ Crafted PROJECT-DESIGN.md for BlendTest
  → /tmp/designdna-e2e/phase1/BLEND-DESIGN.md

  Base brand:  stripe × vercel
  Dials:       formality:10 · motion:4 · density:4 · warmth:4 · contrast:7
  Size:        24.2 KB

  › Similar brands in taste space: linear.app, mistral.ai
  › Next: tell your AI agent — "Use PROJECT-DESIGN.md to build the UI"


=== T1.9: craft error handling (bad brand) ===
✗ Brand "nonexistent" not found at /Users/pengchengkeji/Documents/GitHub/DesignDNA Skills/design-md/nonexistent

=== T1.10: craft output structure check ===
  file size:    24820 bytes, 52 sections
  pre-flight mentions: 1
  BANNED mentions: 2
  dial declarations: 3

=== BUG-1 FIX verification: add re-run, check dials ===
  ✓ dials: {'formality': 9, 'motion': 4, 'density': 3, 'warmth': 5, 'contrast': 5}

=== T1.11: resources (index) ===

  DesignDNA — design systems as AI skills

  Component Library Catalog (2026-04 audit)

  By ecosystem
    designdna resources alibaba
    designdna resources google-material
    designdna resources jd
    designdna resources miniprogram-native
    designdna resources modern-web
    designdna resources tencent

  By platform
    designdna resources platform cross-platform

=== T1.12: resources list --json (JSON validation) ===
  ✓ Valid, 6 ecosystems, 5 platforms

=== T1.13: skills list (validate count + JSON) ===
  ✓ Valid, count=46
  ✓ All 46 skills have YAML frontmatter

=== T1.14: skills show <name> ===
---
name: tdesign-vue-next
description: TDesign Vue 3 desktop component library skill — Tencent's flagship Vue 3 enterprise library (2.1k stars, active, v1.19.x). Covers 60+ desktop components for B2B admin/dashboard. Includes installation with on-demand imports, component catalog, theme customization via CSS variables, and Tencent-ecosystem integration patterns.

=== T1.15: error handling (unknown brand) ===
✗ Brand "doesntexist" not found in /Users/pengchengkeji/Documents/GitHub/DesignDNA Skills/design-md
ℹ Run `npx designdna list` to see available brands.
