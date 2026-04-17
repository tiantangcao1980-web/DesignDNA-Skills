// Parametric dials for every brand.
//
// 5 dials, each on a 1-10 scale:
//   formality   — 1=playful/loose,   10=austere/corporate
//   motion      — 1=static,          10=heavy animation
//   density     — 1=breathy/airy,    10=data-dense
//   warmth      — 1=cool/clinical,   10=warm/human
//   contrast    — 1=muted/soft,      10=stark/high
//
// These are opinionated authored values (not parser-extracted). They map each
// brand into a 5-dimensional taste space so agents can:
//   1. Pick the nearest brand for a user's vibe
//   2. Interpolate between brands ("apple × linear")
//   3. Validate that their generated UI matches the expected dial band
//
// When adding a new brand: evaluate each axis honestly. The utility of these
// numbers comes from consistency of judgment, not absolute accuracy.

export const DIALS = {
  // AI & ML
  claude:      { formality: 7, motion: 3, density: 3, warmth: 9, contrast: 5 },
  cohere:      { formality: 7, motion: 5, density: 6, warmth: 4, contrast: 7 },
  elevenlabs:  { formality: 6, motion: 8, density: 5, warmth: 3, contrast: 9 },
  minimax:     { formality: 6, motion: 7, density: 7, warmth: 3, contrast: 9 },
  'mistral.ai': { formality: 8, motion: 4, density: 4, warmth: 4, contrast: 6 },
  ollama:      { formality: 8, motion: 2, density: 6, warmth: 3, contrast: 8 },
  'opencode.ai': { formality: 6, motion: 5, density: 6, warmth: 3, contrast: 8 },
  replicate:   { formality: 5, motion: 3, density: 5, warmth: 5, contrast: 6 },
  runwayml:    { formality: 6, motion: 9, density: 6, warmth: 4, contrast: 9 },
  'together.ai': { formality: 7, motion: 4, density: 5, warmth: 4, contrast: 7 },
  voltagent:   { formality: 7, motion: 6, density: 7, warmth: 3, contrast: 9 },
  'x.ai':      { formality: 10, motion: 2, density: 2, warmth: 2, contrast: 10 },

  // Dev Tools
  cursor:      { formality: 6, motion: 6, density: 5, warmth: 4, contrast: 8 },
  expo:        { formality: 6, motion: 4, density: 6, warmth: 4, contrast: 7 },
  'linear.app': { formality: 9, motion: 4, density: 4, warmth: 4, contrast: 8 },
  lovable:     { formality: 4, motion: 7, density: 5, warmth: 7, contrast: 6 },
  mintlify:    { formality: 7, motion: 3, density: 5, warmth: 5, contrast: 6 },
  posthog:     { formality: 5, motion: 5, density: 7, warmth: 7, contrast: 7 },
  raycast:     { formality: 7, motion: 6, density: 5, warmth: 4, contrast: 8 },
  resend:      { formality: 8, motion: 3, density: 4, warmth: 4, contrast: 8 },
  sentry:      { formality: 6, motion: 5, density: 7, warmth: 4, contrast: 8 },
  supabase:    { formality: 7, motion: 4, density: 6, warmth: 4, contrast: 8 },
  superhuman:  { formality: 8, motion: 6, density: 5, warmth: 4, contrast: 8 },
  vercel:      { formality: 10, motion: 3, density: 4, warmth: 3, contrast: 9 },
  warp:        { formality: 7, motion: 5, density: 7, warmth: 3, contrast: 9 },
  zapier:      { formality: 4, motion: 5, density: 5, warmth: 8, contrast: 6 },

  // Infra & Cloud
  clickhouse:  { formality: 8, motion: 3, density: 7, warmth: 4, contrast: 7 },
  composio:    { formality: 6, motion: 5, density: 6, warmth: 4, contrast: 8 },
  hashicorp:   { formality: 9, motion: 2, density: 6, warmth: 3, contrast: 7 },
  mongodb:     { formality: 7, motion: 3, density: 6, warmth: 5, contrast: 6 },
  sanity:      { formality: 7, motion: 4, density: 5, warmth: 5, contrast: 7 },
  stripe:      { formality: 9, motion: 4, density: 3, warmth: 5, contrast: 5 },

  // Design & Productivity
  airtable:    { formality: 5, motion: 5, density: 7, warmth: 7, contrast: 6 },
  cal:         { formality: 6, motion: 3, density: 4, warmth: 6, contrast: 5 },
  clay:        { formality: 4, motion: 8, density: 4, warmth: 8, contrast: 5 },
  figma:       { formality: 4, motion: 7, density: 5, warmth: 7, contrast: 7 },
  framer:      { formality: 6, motion: 9, density: 5, warmth: 5, contrast: 8 },
  intercom:    { formality: 5, motion: 4, density: 5, warmth: 7, contrast: 5 },
  miro:        { formality: 5, motion: 6, density: 5, warmth: 7, contrast: 6 },
  notion:      { formality: 5, motion: 3, density: 3, warmth: 8, contrast: 4 },
  pinterest:   { formality: 4, motion: 4, density: 8, warmth: 6, contrast: 6 },
  webflow:     { formality: 6, motion: 5, density: 5, warmth: 5, contrast: 7 },

  // Fintech & Crypto
  coinbase:    { formality: 8, motion: 3, density: 5, warmth: 4, contrast: 7 },
  kraken:      { formality: 7, motion: 4, density: 7, warmth: 3, contrast: 8 },
  revolut:     { formality: 7, motion: 6, density: 6, warmth: 4, contrast: 8 },
  wise:        { formality: 6, motion: 4, density: 5, warmth: 7, contrast: 6 },

  // Consumer & Enterprise
  airbnb:      { formality: 4, motion: 5, density: 5, warmth: 9, contrast: 5 },
  apple:       { formality: 9, motion: 4, density: 2, warmth: 6, contrast: 7 },
  ibm:         { formality: 10, motion: 2, density: 7, warmth: 3, contrast: 6 },
  nvidia:      { formality: 7, motion: 6, density: 6, warmth: 3, contrast: 9 },
  spacex:      { formality: 10, motion: 4, density: 2, warmth: 2, contrast: 10 },
  spotify:     { formality: 4, motion: 7, density: 6, warmth: 6, contrast: 9 },
  uber:        { formality: 8, motion: 4, density: 4, warmth: 3, contrast: 9 },

  // Automotive
  bmw:         { formality: 9, motion: 5, density: 3, warmth: 3, contrast: 8 },
  ferrari:     { formality: 9, motion: 4, density: 2, warmth: 5, contrast: 10 },
  lamborghini: { formality: 9, motion: 6, density: 3, warmth: 3, contrast: 10 },
  renault:     { formality: 7, motion: 7, density: 4, warmth: 6, contrast: 7 },
  tesla:       { formality: 10, motion: 3, density: 1, warmth: 3, contrast: 9 },
};

/**
 * Euclidean distance between two dial vectors (lower = more similar).
 */
export function dialDistance(a, b) {
  const keys = ['formality', 'motion', 'density', 'warmth', 'contrast'];
  let sum = 0;
  for (const k of keys) {
    const da = a[k] ?? 5;
    const db = b[k] ?? 5;
    sum += (da - db) ** 2;
  }
  return Math.sqrt(sum);
}

/**
 * Find the k brands closest to a target dial vector.
 */
export function nearestBrands(target, k = 3) {
  return Object.entries(DIALS)
    .map(([brand, dials]) => ({ brand, distance: dialDistance(dials, target) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, k);
}
