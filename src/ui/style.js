// Art style switch for the 3D views. The default is the stylized look from Adam's reference
// sheets (clean painted colors, soft shapes, warm light). ?style=real in the page address shows
// the older realistic look, for comparison.
export const STYLE_REAL = typeof location !== 'undefined' && /[?&]style=real\b/.test(location.search || '');
export const TOON = !STYLE_REAL;
// Pick a value by style: sty(stylized, realistic).
export const sty = (toon, real) => (TOON ? toon : real);
