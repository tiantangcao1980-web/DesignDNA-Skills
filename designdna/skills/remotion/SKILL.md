---
name: remotion
description: Remotion — "Make videos programmatically with React" (43.6k stars, active). A React-based framework that lets developers create videos using React components, props, CSS, Canvas, and SVG. Use for programmatic video generation (explainer videos, personalized ads, data-driven videos, GitHub Unwrapped-style content). Covers install, core concepts (Composition, frames, useCurrentFrame), Remotion Player for embedding, and Lambda for cloud rendering.
---

{% raw %}


# Remotion — Make Videos with React

> **Source**: [remotion-dev/remotion](https://github.com/remotion-dev/remotion) · 43.6k ⭐ · v4.x · 🟢 active 2026
> **NPM**: `remotion` · `@remotion/cli` · `@remotion/player` · `@remotion/lambda`
> **Docs**: https://www.remotion.dev/

## 1. Core mental model

- A **video** is a React component sequence rendered frame-by-frame
- You get a `frame` number (0 → N) and a blank canvas — the rest is CSS / SVG / Canvas / WebGL
- Remotion compiles your React to a series of PNG/JPEG frames, then encodes to MP4 via FFmpeg

## 2. When to use

- **Programmatic video generation** (explainer videos, personalized video ads, data-driven videos)
- Year-in-review / stats videos (like GitHub Unwrapped, Spotify Wrapped)
- Marketing explainers built from copy + data (not manually edited in AE/Premiere)
- Developer tool / tutorial videos generated from code

### When NOT to use

- Live-action video editing (stick with Premiere / Final Cut)
- Traditional motion graphics (After Effects is more efficient)
- One-off videos — overhead isn't worth it

## 3. Install (new project)

```bash
npx create-video@latest my-video
cd my-video
npm install
npm start  # Opens Remotion Studio
```

### Templates offered

- Hello World
- TypeScript
- JavaScript
- React 18 / 19
- Audiogram
- Stargazer (GitHub stars animation)
- Three.js
- Empty

### Add to existing project

```bash
npm install remotion @remotion/cli
```

Create `src/Root.tsx`:

```tsx
import { Composition } from 'remotion';
import { MyVideo } from './MyVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MyVideo"
      component={MyVideo}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{ title: 'Hello' }}
    />
  );
};
```

Register root in `remotion.config.ts`:

```ts
import { Config } from '@remotion/cli/config';
Config.setEntryPoint('./src/index.ts');
```

## 4. Core concepts

### `<Composition />`

Defines a video: which component renders, duration, fps, resolution, default props.

### `useCurrentFrame()`

Returns current frame number (0-indexed). Everything animates from this:

```tsx
import { useCurrentFrame, useVideoConfig, interpolate } from 'remotion';

export const MyVideo: React.FC<{ title: string }> = ({ title }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <div style={{ flex: 1, backgroundColor: '#0a0a0f', color: 'white', opacity, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: 120 }}>{title}</h1>
    </div>
  );
};
```

### `interpolate(frame, [from, to], [startVal, endVal], options)`

Map frame number to any value (position, opacity, scale, color, etc.).

### `spring(...)`

Natural motion curve:

```tsx
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

const frame = useCurrentFrame();
const { fps } = useVideoConfig();

const scale = spring({
  frame,
  fps,
  config: { damping: 100, stiffness: 200, mass: 0.5 },
});

<div style={{ transform: `scale(${scale})` }}>Content</div>
```

### `<Sequence from={f} durationInFrames={n}>`

Offset a component to start at frame `f`:

```tsx
import { Sequence } from 'remotion';

<Sequence from={0} durationInFrames={60}><Intro /></Sequence>
<Sequence from={60} durationInFrames={120}><Scene1 /></Sequence>
<Sequence from={180} durationInFrames={90}><Outro /></Sequence>
```

### `<Audio src={...} />`

```tsx
import { Audio } from 'remotion';
import bgMusic from './music.mp3';

<Audio src={bgMusic} volume={0.5} />
```

### `<Img src={...} />` / `<Video src={...} />`

Embed images / video clips in the timeline.

### `staticFile('...')`

Reference files in `public/` — Remotion handles path resolution:

```tsx
import { staticFile } from 'remotion';
<Img src={staticFile('logo.svg')} />
```

## 5. Rendering

### Local render (CLI)

```bash
npx remotion render  MyVideo out/video.mp4
npx remotion render  MyVideo out/video.mp4 --props='{"title":"Hello"}'
npx remotion render  MyVideo out/video.mp4 --quality=high --codec=h265
```

### Remotion Studio (preview + timeline)

```bash
npm start  # Opens http://localhost:3000
```

### Remotion Player (embed in your React app)

```tsx
import { Player } from '@remotion/player';
import { MyVideo } from './MyVideo';

<Player
  component={MyVideo}
  durationInFrames={150}
  fps={30}
  compositionWidth={1920}
  compositionHeight={1080}
  inputProps={{ title: 'Hello' }}
  controls
  style={{ width: '100%' }}
/>
```

### Remotion Lambda (cloud rendering)

For batch / server-side rendering:

```bash
npm install @remotion/lambda
```

Set up AWS Lambda function, deploy Remotion:

```bash
npx remotion lambda functions deploy
npx remotion lambda sites create
npx remotion lambda render MyVideo --input-props='{"title":"User 123"}'
```

## 6. Example — data-driven video

Generate a personalized "Year in Review" video:

```tsx
import { Composition } from 'remotion';
import { YearInReview } from './YearInReview';

export const RemotionRoot = () => (
  <Composition
    id="Recap"
    component={YearInReview}
    durationInFrames={8 * 30}   // 8 seconds at 30fps
    fps={30}
    width={1080}
    height={1920}                 // Vertical (mobile)
    defaultProps={{
      user: { name: 'Alice', stats: { commits: 1284, prs: 42, reviews: 89 } },
    }}
  />
);
```

Render for each user:

```bash
for user in $(cat users.json); do
  npx remotion lambda render Recap --input-props="$user"
done
```

## 7. Pricing / licensing

| Tier | Who | Price |
|---|---|---|
| Individual / team ≤ 3 | Personal, small co | **Free** (MIT-like) |
| Company ≤ 10 employees | Small startup | **Free** |
| Larger company | > 10 employees | $100/mo + $25/seat |
| Editor Starter | Build your own video editor using Remotion | $600 one-time |
| Lambda | Cloud rendering | Pay-per-render (≈ few cents per minute of video) |

See https://www.remotion.dev/docs/license for authoritative terms.

## 8. BANNED

- ❌ NEVER use Remotion for real-time video playback engines — it's designed for render-to-file, not live streaming
- ❌ NEVER put actual video files > 100MB in the bundle — use `staticFile()` with large media hosted separately
- ❌ NEVER use `setTimeout`, `setInterval`, or `requestAnimationFrame` inside a Remotion component — determinism comes from `useCurrentFrame()` only
- ❌ NEVER fetch data inside render — pre-fetch and pass via `inputProps`
- ❌ NEVER render with more frames per component than necessary — each frame costs render time
- ❌ NEVER ship commercial Lambda renders without a license for team > 3
- ❌ NEVER use `Math.random()` directly — output won't be deterministic. Use `random()` from Remotion with seed.
- ❌ NEVER animate with CSS transitions — Remotion renders frame-by-frame; CSS transitions don't apply. Use `interpolate()` + frame.

## 9. Pre-flight checklist

```
- [ ] remotion + @remotion/cli installed
- [ ] src/Root.tsx with <Composition /> defining video(s)
- [ ] All animations driven by useCurrentFrame() — no setTimeout/setInterval
- [ ] Random values use Remotion's random() with seed (not Math.random)
- [ ] Font loading: useFont or <link> in <head>
- [ ] Audio files via <Audio> with proper volume/trim
- [ ] For production: render via Lambda OR remotion render CLI
- [ ] Pricing checked — correct tier for team size
- [ ] inputProps typed (TypeScript) for each Composition
- [ ] Test render a short preview before full render
```

## 10. Dial fit

Depends entirely on video's design — Remotion is a framework, not a visual library.

## 11. Integration with DesignDNA

Remotion pairs well with DesignDNA's brand DNAs: use a brand's DESIGN.md tokens (colors, fonts, spacing) as the visual language of your generated video. Example:

```tsx
import { tokens } from '../design-md/stripe/tokens';

<div style={{ color: tokens.colors['stripe-purple'], fontFamily: tokens.typography.families[0] }}>
  Stripe-branded intro
</div>
```

Your "year in review" video then matches your brand visual identity.

## 12. Alternatives

| Scenario | Alternative |
|---|---|
| Traditional non-code video | Adobe After Effects / Premiere |
| Data-viz videos | D3 + screen recording OR Remotion + D3 |
| Animated React components (not full videos) | Framer Motion · Motion · React Bits (see skill) |
| Interactive web animations | Lottie · GSAP |

{% endraw %}
