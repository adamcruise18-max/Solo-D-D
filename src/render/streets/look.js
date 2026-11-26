// How the street cells look at a given time: season colours, overgrowth and snow.
// Pure (no DOM): the cell geometry calls it, and the tests check it.
//
//   look = { season: 'winter'|'spring'|'summer'|'fall', growth: 0..1, snow: 0..1 }
//   growth: overgrowth from src/engine/season.js (0.08 at the start, 1 after about 2 years)
//   snow: snow cover on the ground (0 none, 1 deep)
import { Color } from 'three';

const SEASONS = ['winter', 'spring', 'summer', 'fall'];
const clamp01 = (v) => Math.max(0, Math.min(1, Number(v) || 0));

export function normLook(look = {}) {
  const season = SEASONS.includes(look.season) ? look.season : 'winter';
  return { season, growth: clamp01(look.growth ?? 0.08), snow: clamp01(look.snow) };
}

// A short key: the cell meshes are the same for the same key.
export function lookKey(look) {
  const l = normLook(look);
  return `${l.season}|${Math.round(l.growth * 10)}|${Math.round(l.snow * 4)}`;
}

export { snowFromScene } from './snow.js';

// Grass and leaves: dull olive in winter, fresh in spring, full green in summer,
// yellow-brown in fall.
const GRASS_TINT = { winter: [0x8e8c66, 0.45], spring: [0x86b85a, 0.3], summer: [0x6f9e48, 0.12], fall: [0xa8954f, 0.4] };
const SNOW = new Color(0xeef2f6);
const WILD = new Color(0x667a48); // grass and moss over roads and walks
const DUST = new Color(0x8c8576);
const LEAVES = {
  spring: [0x86b85a, 0x7aae52, 0x8fbf63, 0xf0d6dc], // a few trees in blossom
  summer: [0x5f8a45, 0x6f9650, 0x587f40],
  fall: [0xc9813a, 0xb5553a, 0xd2b048, 0x9c7a3c, 0x7d8f45],
};

export function tones(look) {
  const l = normLook(look);
  const [gt, gk] = GRASS_TINT[l.season];
  const grassTint = new Color(gt);
  const mix = (c, to, k) => (k > 0 ? c.clone().lerp(to, Math.min(1, k)) : c.clone());
  return {
    look: l,
    bare: l.season === 'winter', // deciduous trees have no leaves
    // lawns, fields, parks, hedges: season colour, then wilder, then snow
    green: (c) => mix(mix(c, grassTint, gk), SNOW, l.snow * 0.85),
    // roads and walks: grass and moss come through as the city grows over
    road: (c) => mix(mix(c, WILD, l.growth * 0.32), SNOW, l.snow * 0.55),
    walk: (c) => mix(mix(c, WILD, l.growth * 0.42), SNOW, l.snow * 0.7),
    roof: (c) => mix(c, SNOW, l.snow * 0.8),
    fir: (c) => mix(c, SNOW, l.snow * 0.35),
    // parked cars: dust and leaves, then snow on top
    car: (c) => mix(c, DUST, 0.2 + l.growth * 0.3),
    // one crown colour (rnd: 0..1)
    leaf: (r) => {
      const list = LEAVES[l.season] || LEAVES.summer;
      return mix(new Color(list[Math.floor(r * list.length) % list.length]), SNOW, l.snow * 0.3);
    },
    // grass tufts: dry tan in winter
    tuft: () => mix(new Color(l.season === 'winter' ? 0xa39a6a : l.season === 'fall' ? 0x9a9450 : 0x6f9a48), SNOW, l.snow * 0.6),
  };
}
