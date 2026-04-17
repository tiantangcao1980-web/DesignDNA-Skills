// Path & repo-root resolution.
// Supports two modes:
//   1. Local dev  : CLI runs inside the monorepo, design-md/ sits two levels up.
//   2. Installed  : published package will ship a bundled design-md/ copy.
//
// The resolver tries local first and falls back to a remote fetch hint so that
// `npx designdna` still works even before the package is published.

import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import { existsSync } from 'node:fs';

const here = dirname(fileURLToPath(import.meta.url));

/**
 * Returns the absolute path to the directory containing brand subfolders.
 * Priority:
 *   1. $DESIGNDNA_ROOT env var (escape hatch)
 *   2. Monorepo local path (../../../design-md)
 *   3. Packaged path (../../design-md) — when CLI ships its own copy
 */
export function resolveDesignMdRoot() {
  if (process.env.DESIGNDNA_ROOT) {
    return process.env.DESIGNDNA_ROOT;
  }
  const candidates = [
    resolve(here, '..', '..', '..', '..', 'design-md'),  // monorepo root
    resolve(here, '..', '..', 'design-md'),               // packaged
  ];
  for (const c of candidates) {
    if (existsSync(c)) return c;
  }
  return candidates[0]; // best-effort; caller will report a friendly error
}

/**
 * Resolve the path to designdna/ skill assets.
 */
export function resolveSkillRoot() {
  if (process.env.DESIGNDNA_SKILL_ROOT) {
    return process.env.DESIGNDNA_SKILL_ROOT;
  }
  const candidates = [
    resolve(here, '..', '..', '..', '..', 'designdna'),
    resolve(here, '..', '..', 'designdna'),
  ];
  for (const c of candidates) {
    if (existsSync(c)) return c;
  }
  return candidates[0];
}

export function cwd() {
  return process.cwd();
}

export function joinCwd(...parts) {
  return join(process.cwd(), ...parts);
}
