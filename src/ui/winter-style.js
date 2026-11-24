// Winter look for the map: a cold, snowy, easy-to-read palette.
// It changes the colors of the downloaded OpenFreeMap style. It does not
// make the map dark: the map must stay light and in color (see PR #2).

// ---- small color helpers (hex, rgb(a), hsl(a)) ----
const COLOR_RE = /^(#[0-9a-f]{3,8}|rgba?\([^)]*\)|hsla?\([^)]*\))$/i;

export function parseColor(str) {
  if (typeof str !== 'string') return null;
  const s = str.trim().toLowerCase();
  if (!COLOR_RE.test(s)) return null;
  if (s[0] === '#') {
    let h = s.slice(1);
    if (h.length === 3 || h.length === 4) h = [...h].map((c) => c + c).join('');
    if (h.length !== 6 && h.length !== 8) return null;
    const n = (i) => parseInt(h.slice(i, i + 2), 16);
    return { r: n(0), g: n(2), b: n(4), a: h.length === 8 ? n(6) / 255 : 1 };
  }
  const nums = s.slice(s.indexOf('(') + 1, -1).split(/[\s,/]+/).filter(Boolean).map((v) => parseFloat(v));
  if (nums.length < 3 || nums.some(Number.isNaN)) return null;
  const a = nums.length > 3 ? nums[3] : 1;
  if (s.startsWith('rgb')) return { r: nums[0], g: nums[1], b: nums[2], a };
  return { ...hslToRgb(nums[0], nums[1] / 100, nums[2] / 100), a };
}

function hslToRgb(h, s, l) {
  h = ((h % 360) + 360) % 360;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  const [r, g, b] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x]
    : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return { r: (r + m) * 255, g: (g + m) * 255, b: (b + m) * 255 };
}

function toCss({ r, g, b, a }) {
  const k = (v) => Math.round(Math.max(0, Math.min(255, v)));
  return `rgba(${k(r)},${k(g)},${k(b)},${Math.round(a * 1000) / 1000})`;
}

// Make one color colder: take away some color, and move it a little to snowy blue-gray.
const SNOW = { r: 222, g: 231, b: 238 };
export function coolColor(str, { desat = 0.45, toward = 0.15 } = {}) {
  const c = parseColor(str);
  if (!c) return str;
  const gray = 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;
  const mix = (v, t) => v + (t - v) * toward;
  return toCss({
    r: mix(c.r + (gray - c.r) * desat, SNOW.r),
    g: mix(c.g + (gray - c.g) * desat, SNOW.g),
    b: mix(c.b + (gray - c.b) * desat, SNOW.b) + 4,
    a: c.a,
  });
}

// Walk a paint value (a plain color or a style expression) and cool every color in it.
function coolValue(v) {
  if (typeof v === 'string') return coolColor(v);
  if (Array.isArray(v)) return v.map(coolValue);
  if (v && typeof v === 'object' && Array.isArray(v.stops)) {
    return { ...v, stops: v.stops.map(([z, c]) => [z, coolValue(c)]) };
  }
  return v;
}

// Fixed winter colors for the main map parts. Keys match the start of a layer id.
// Values: { paintProperty: color }.
const WINTER = [
  ['background', { 'background-color': '#eaeff3' }],
  ['park_outline', { 'line-color': 'rgba(160,184,170,0.6)' }],
  ['park', { 'fill-color': '#d6e2da', 'fill-outline-color': 'rgba(140,170,150,0.7)' }],
  ['landcover_wood', { 'fill-color': 'rgba(170,196,180,0.65)' }],
  ['landcover_grass', { 'fill-color': '#dbe5de' }],
  ['landcover_ice', { 'fill-color': '#f4f8fa' }],
  ['landuse_residential', { 'fill-color': 'rgba(212,221,229,0.55)' }],
  ['landuse_hospital', { 'fill-color': '#ecdde2' }],
  ['landuse_school', { 'fill-color': '#e3e6dc' }],
  ['water', { 'fill-color': '#86aac4' }],
  ['waterway', { 'line-color': '#86aac4' }],
  ['building-3d', { 'fill-extrusion-color': '#c9d1d9' }],
  ['building', { 'fill-color': '#cdd5dc', 'fill-outline-color': 'rgba(150,163,176,0.8)' }],
];

// Roads: white like snowy streets, with slate edges. Big roads keep a soft amber color,
// so you can still find the highways quickly.
function roadPaint(id) {
  if (!/^(road|bridge|tunnel)_/.test(id)) return null;
  if (/rail/.test(id)) return { 'line-color': '#8d99a6' };
  if (/casing/.test(id)) return { 'line-color': /motorway|trunk|primary|secondary/.test(id) ? '#8796a5' : '#b3bec8' };
  if (/motorway/.test(id)) return { 'line-color': '#e9cf96' };
  if (/trunk_primary|secondary_tertiary|_link/.test(id)) return { 'line-color': '#fbf6ea' };
  if (/minor|service|street|path/.test(id)) return { 'line-color': '#ffffff' };
  return null;
}

export function winterizeStyle(style) {
  const out = JSON.parse(JSON.stringify(style));
  for (const layer of out.layers || []) {
    const paint = layer.paint || (layer.paint = {});
    // 1) Cool every color a little.
    for (const key of Object.keys(paint)) {
      if (/color/.test(key)) paint[key] = coolValue(paint[key]);
    }
    // 2) Fixed winter colors for the main parts.
    const fixed = WINTER.find(([prefix]) => layer.id === prefix || layer.id.startsWith(prefix + '_') || layer.id.startsWith(prefix + '-'))
      || (layer['source-layer'] === 'water' && layer.type === 'fill' ? WINTER.find(([p]) => p === 'water') : null);
    const road = roadPaint(layer.id);
    for (const [k, v] of Object.entries({ ...(fixed ? fixed[1] : {}), ...(road || {}) })) {
      if (k.split('-')[0] === layer.type.split('-')[0] || (layer.type === 'fill-extrusion' && k.startsWith('fill-extrusion'))) paint[k] = v;
    }
    if (layer.type === 'raster') {
      paint['raster-saturation'] = -0.6;
      paint['raster-brightness-min'] = 0.25;
    }
    // 3) Labels: dark slate text with a snow-white halo, easy to read.
    if (layer.type === 'symbol') {
      if (paint['text-color'] !== undefined || layer.layout?.['text-field']) {
        paint['text-color'] = layer.id.startsWith('label_') ? '#1f2a35' : /water/.test(layer.id) ? '#3d6585' : '#4a5663';
        paint['text-halo-color'] = 'rgba(244,247,250,0.9)';
      }
    }
  }
  return out;
}
