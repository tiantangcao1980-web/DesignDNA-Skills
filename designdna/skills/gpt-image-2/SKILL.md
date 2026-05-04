---
name: gpt-image-2
description: OpenAI GPT Image 2 skill for production visual asset generation and editing. Covers Image API vs Responses API selection, prompt-to-asset workflows, high-fidelity edits, output sizing, compression, moderation, cost controls, and DesignDNA-ready asset handoff.
---

{% raw %}


# GPT Image 2 — AI Visual Asset Generation

> **Source**: [OpenAI Image generation guide](https://developers.openai.com/api/docs/guides/image-generation)
> **Model**: `gpt-image-2`
> **Best for**: high-quality product visuals, UI/brand illustrations, generated hero assets, visual explorations, and reference-guided edits.

## 1. When to use

- You need a custom visual asset and stock/photo libraries do not fit the brief.
- You need to edit or extend an existing image while preserving input details.
- You need iterative image work inside a conversational workflow.
- You need generated visuals to follow a `DESIGN.md` palette, typography mood, brand archetype, or campaign direction.

Prefer real product/place/person imagery when the user needs to inspect a real thing. Use `gpt-image-2` for concept art, campaign assets, generic product scenes, abstract editorial visuals, empty states, illustrative hero images, and moodboard exploration.

## 2. API choice

| Need | Use | Why |
|---|---|---|
| One prompt, one asset | Image API | Simple generation/edit request, direct base64 output |
| One prompt plus input image edit | Image API edits | Multipart image/mask workflow and high-fidelity references |
| Multi-turn creative iteration | Responses API image tool | Keep prior images in context and refine over turns |
| Chat/copilot product feature | Responses API image tool | Works inside an agent conversation alongside tools |

Rule of thumb: use Image API for batch asset generation pipelines; use Responses API for interactive creative sessions.

## 3. Install

```bash
npm install openai
```

```ts
import OpenAI from 'openai';

const openai = new OpenAI();
```

## 4. Generate an image

```ts
import fs from 'node:fs';
import OpenAI from 'openai';

const openai = new OpenAI();

const result = await openai.images.generate({
  model: 'gpt-image-2',
  prompt: [
    'Create a polished SaaS dashboard hero image.',
    'Style: precise enterprise UI, warm near-black text, restrained blue accent.',
    'No fake logos, no fake metrics, no embedded tiny body copy.',
  ].join(' '),
  size: '1536x1024',
  quality: 'medium',
  output_format: 'webp',
  output_compression: 80,
});

fs.writeFileSync(
  'hero.webp',
  Buffer.from(result.data[0].b64_json, 'base64')
);
```

## 5. Edit an image

```ts
import fs from 'node:fs';
import OpenAI, { toFile } from 'openai';

const openai = new OpenAI();

const result = await openai.images.edit({
  model: 'gpt-image-2',
  image: await toFile(fs.createReadStream('source.png'), null, {
    type: 'image/png',
  }),
  prompt: 'Edit the image into a clean TDesign-style enterprise dashboard illustration while preserving the same layout.',
  output_format: 'png',
});

fs.writeFileSync(
  'edited.png',
  Buffer.from(result.data[0].b64_json, 'base64')
);
```

### Masked edits

- The source image and mask must have the same dimensions and file format.
- The mask must include an alpha channel.
- Keep masks under 50 MB and validate them visually before calling the API.

## 6. DesignDNA prompt protocol

Every prompt should specify:

1. **Role**: hero image, empty state, feature card visual, icon concept, background plate, product mockup, etc.
2. **Brand DNA**: archetype, palette, contrast, warmth, density, motion mood.
3. **Composition**: aspect ratio, focal point, whitespace, safe crop, UI vs photographic style.
4. **Typography rule**: avoid embedded long text unless the asset is explicitly a text-rendering test.
5. **Forbidden patterns**: no AI-purple gradients, no generic glowing network, no fake UI metrics, no unreadable microcopy.
6. **Delivery target**: web hero, OG card, app store image, doc screenshot, social post, print source.

Example:

```text
Generate a 1536x1024 editorial hero image for a Vue 3 AI dashboard using TDesign visual DNA:
neutral-cool enterprise palette, white/gray surfaces, one restrained brand-blue accent,
24-column grid feeling, subtle depth, no fake company logos, no visible tiny text.
Leave open space on the left third for HTML headline overlay.
```

## 7. Output constraints

- `gpt-image-2` supports `size: "auto"` or explicit dimensions that satisfy all constraints:
  - each edge is a multiple of 16 px
  - max edge is 3840 px
  - long:short ratio is at most 3:1
  - total pixels are between 655,360 and 8,294,400
- Common sizes:
  - `1024x1024`
  - `1536x1024`
  - `1024x1536`
  - `2048x2048`
  - `3840x2160`
- `quality`: `low`, `medium`, `high`, or `auto`.
- Use `quality: "low"` for fast drafts and `medium`/`high` only for final candidates.
- Output format can be `png`, `jpeg`, or `webp`.
- Use `jpeg` for latency-sensitive photo-like assets; use `webp` for web delivery; use `png` for screenshots, UI, masks, and lossless handoff.
- `gpt-image-2` does not currently support transparent backgrounds. Do not request `background: "transparent"` with this model.

## 8. Asset handoff workflow

1. Generate 2-4 low-quality candidates at the target aspect ratio.
2. Pick the best candidate and refine composition, crop safety, and brand conformance.
3. Regenerate final at `medium` or `high`.
4. Export delivery variants:
   - hero: WebP/JPEG, 1536-1920 px wide, reserved aspect ratio in HTML/CSS
   - card thumbnail: WebP, 400-800 px wide
   - social/OG: PNG/JPEG at exact platform size
   - source archive: PNG when further editing is likely
5. Add alt text or mark decorative images correctly.
6. Store generated prompts and source references with the asset so future agents can recreate or revise it.

## 9. BANNED

- NEVER use `gpt-image-2` to fake a real product screenshot, official logo, credential, document, receipt, or news photo.
- NEVER embed critical UI copy inside images when HTML/native text should carry it.
- NEVER ship a generated asset without checking crop, text legibility, visual artifacts, and license/provenance notes.
- NEVER request transparent backgrounds with `gpt-image-2`.
- NEVER use high quality for early exploration; draft cheaply, finalize deliberately.
- NEVER generate realistic depictions of real people, public events, or sensitive situations without policy and consent review.
- NEVER treat generated images as brand-consistent by default; compare against `DESIGN.md` tokens and anti-slop rules.

## 10. Pre-flight checklist

```
- [ ] API chosen: Image API for single/batch, Responses API for iterative chat
- [ ] Prompt includes role, brand DNA, composition, forbidden patterns, and delivery target
- [ ] Size satisfies gpt-image-2 constraints
- [ ] quality is low for draft or medium/high for final
- [ ] output_format chosen by destination
- [ ] No transparent background requested
- [ ] Generated asset checked for artifacts, crop safety, and text legibility
- [ ] Alt text/decorative role decided
- [ ] Prompt and source references stored with asset
```

## 11. Related skills

- `designdna` for brand DNA, `DESIGN.md`, and visual anti-slop rules
- `ant-design` / `tdesign-vue-next` / `tdesign-react` for component-library visual parity
- `tdesign-chat` / `ant-design-x` for AI chat surfaces that may expose image generation
- `remotion` for turning generated still assets into motion/video

{% endraw %}
