// Font size that shrinks smoothly from `max` (at 1440px wide) to `min` (at 320px wide), for large
// display headings. Body text is not scaled; it reflows instead.
export const fluid = (max: number, min = Math.max(28, Math.round(max * 0.5))) =>
  `clamp(${min}px, calc(${min}px + (100vw - 320px) * ${((max - min) / 1120).toFixed(5)}), ${max}px)`
