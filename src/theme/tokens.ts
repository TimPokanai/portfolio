/**
 * Ethereal Neo-Gothic Editorial — design tokens
 * Source of truth for values consumed in JS. Tailwind reads the same
 * values from `@theme` in `src/app/globals.css`.
 */

export const colors = {
  obsidian: "#0A0A0C",
  charcoal: "#17171A",
  graphite: "#2B2B30",
  silver: "#B7B7BD",
  bone: "#EDEAE3",
  lavenderMuted: "#8B84A0",
  lavenderAtmos: "#6B6478",
} as const;

/** Atmospheric lavender should only appear at 8–15% opacity. */
export const lavenderAtmosOpacity = { min: 0.08, max: 0.15 } as const;

export const typeScale = {
  display: { minPx: 64, maxPx: 120 },
  h1: 40,
  h2: 28,
  h3: 20,
  body: 16,
  meta: 13,
} as const;

/** Allowed spacing steps (px). Prefer the larger end. */
export const spacing = [4, 8, 16, 24, 32, 48, 64, 96, 128, 192] as const;

export const breakpoints = {
  mobile: { min: 375, max: 640 },
  tablet: { min: 641, max: 1024 },
  desktop: { min: 1025, max: 1440 },
  wide: { min: 1441, max: null },
} as const;

export const motion = {
  revealMs: { min: 500, max: 700 },
  revealTranslateYPx: { min: 12, max: 20 },
  pageMs: 400,
  easing: "ease-out",
} as const;

export const grid = {
  columns: 12,
  gutterPx: 32,
} as const;
