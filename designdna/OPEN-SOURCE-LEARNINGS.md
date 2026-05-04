# Open-Source Skill Learnings

> Audit date: 2026-05. This document records lessons DesignDNA borrows from adjacent open-source design-skill projects. It is an interpretation layer, not a vendored copy of their prompts, assets, demos, or scripts.

## Studied Projects

| Project | Signal | What It Teaches | License / Use Guardrail |
|---|---|---|---|
| [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | 11k+ stars, HTML-native design skill | High-fidelity HTML deliverables, core asset protocol, fact-first workflow, design direction advisor, five-dimensional critique, Playwright/video verification | Personal-use license. Study public ideas and cite the project; do not vendor assets, scripts, demos, reference docs, or prompt text without authorization. |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 15k+ stars, portable agent skill family | Single-responsibility skills, dials, anti-slop bans, image-generation reference skills, image-to-code workflow, output-completeness enforcement | MIT. Attribution still required when adapting patterns. |

## Adopted Lessons

### 1. Fact Verification Before Design Assumptions

When a task mentions a specific product, company, version, event, person, or post-2024 release, verify current facts before designing around them. Do not design a launch asset, product mockup, migration guide, or component recommendation from memory.

DesignDNA application:
- Current package versions and peer ranges must be checked before library-skill updates.
- Product/brand work starts with official facts, then assets, then visual direction.
- Any generated `PROJECT-DESIGN.md` for a named modern product should include the source date and fact assumptions.

### 2. Core Asset Protocol

Huashu's strongest lesson is that recognizable assets matter more than abstract "brand vibes." For named brand work, prioritize real assets in this order:

1. Logo
2. Product render or product photo for physical products
3. UI screenshots for digital products
4. Color values
5. Fonts
6. Mood words

DesignDNA application:
- Require a `brand-spec.md` or equivalent notes when brand-specific assets are collected.
- Record asset paths, source URLs, capture date, resolution, and usage role.
- Do not replace a real product image with a hand-drawn SVG silhouette or generic generated shape.

### 3. The 5-10-2-8 Asset Gate

For non-logo hero assets, do not settle for the first acceptable file. Use the selection gate:

- Search across 5 source passes when the asset matters.
- Collect around 10 candidates.
- Keep the best 2.
- Only ship assets that score 8/10 or higher on resolution, provenance, brand fit, composition, and narrative usefulness.

DesignDNA application:
- Add this gate to image sourcing and GPT Image 2 handoff.
- If no candidate reaches 8/10, use an honest placeholder, ask for assets, or generate with references; do not ship weak stock imagery.

### 4. Direction Advisor For Vague Briefs

When the brief is "make it look good" or lacks a visual point of view, do not default to generic SaaS taste. Offer three differentiated directions, each tied to a different archetype or design school, and let the user choose when the choice materially changes the outcome.

DesignDNA application:
- Map directions to the 10 DesignDNA archetypes first.
- For visual-heavy tasks, include a small reference or section-specific image when generation is available.
- Avoid three variants that are only palette swaps.

### 5. Junior Designer Loop

High-quality design work should reveal assumptions early. Start with intent, placeholders, and reasoning before polishing.

DesignDNA application:
- For ambiguous visual work: define assumptions, create early structure, then refine with assets and variants.
- For existing UI cleanup: audit first, then one pass per smell.
- For generated visual references: analyze the reference before coding.

### 6. Five-Dimensional Critique

Huashu's critique model is useful because it evaluates design beyond surface appeal:

- Philosophy alignment
- Visual hierarchy
- Craft quality
- Functionality
- Originality

DesignDNA application:
- Use these five dimensions for visual reviews and before/after redesign summaries.
- Report Keep / Fix / Quick Wins instead of vague taste judgments.

### 7. Single-Responsibility Skill Topology

Taste Skill keeps individual skills narrow: default taste, stricter GPT taste, image-to-code, redesign, output completion, visual-style variants, image-generation-only skills.

DesignDNA application:
- Keep `designdna/SKILL.md` as the methodology layer.
- Keep component-library and asset-generation behavior in `designdna/skills/*`.
- Install only the specific skill or preset needed for the task; avoid loading every design rule at once.

### 8. Dials As Control Variables

Taste Skill's explicit dials make subjective direction operational. DesignDNA keeps a five-dimensional dial model:

- formality
- motion
- density
- warmth
- contrast

DesignDNA application:
- Every `PROJECT-DESIGN.md` should declare dial values.
- Library skills should translate dial pressure into concrete component density, radius, motion, and token choices.

### 9. Image-First For Visual-Risk Work

Taste Skill's image-to-code pipeline is worth adopting when visual quality matters: generate references, analyze them, then implement.

DesignDNA application:
- Use `gpt-image-2` for custom references when stock or official assets cannot express the brief.
- Prefer one clear image per section or detail area over one compressed board.
- Do not crop old generated boards as the primary reference for a new section; generate a clean section-specific reference instead.

## Rejected Or Limited

- Do not vendor Huashu assets, scripts, demos, BGM, or reference docs into DesignDNA because its license is not open for broad commercial reuse.
- Do not force HTML-only delivery into DesignDNA; this repo remains design-system and AI-skill infrastructure, not a motion/video export product.
- Do not force Awwwards-level motion into operational tools; SaaS/admin surfaces often need quiet density and repeatability.
- Do not generate images first for every small UI change; use image-first only when visual risk justifies the cost.

## Practical Checklist

Before a high-visual-impact task:

```
- [ ] Current facts verified when the task names a modern product/company/library
- [ ] Existing DESIGN.md / brand system / screenshots checked
- [ ] Brand assets prioritized: logo, product/UI, then colors/fonts
- [ ] Important non-logo images pass the 5-10-2-8 asset gate
- [ ] If brief is vague, three differentiated directions are prepared
- [ ] If image-first is used, references are generated as clear section/detail frames
- [ ] Reference images are analyzed before implementation
- [ ] Final design reviewed across philosophy, hierarchy, craft, functionality, originality
```
