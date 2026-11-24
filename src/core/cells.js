// World cells. The play area (15 miles around ZIP 97078) is cut into square cells.
// Each cell has a tier from its distance to the player and where the player is going:
//
//   tier      loaded?   rendered (3D)   simulated
//   active    yes       full (LOD0)     full: every step
//   near      yes       LOD1            full
//   mid       yes       LOD2            reduced: every hour
//   edge      kept      LOD2            reduced (kept if loaded, not loaded new:
//                                       unload ring one wider than load ring)
//   far       no        LOD3 / map only abstract: once a day
//   dormant   no        no              state only (change records)
//
// The engine keeps four things apart: what EXISTS (places, houses, items: the save),
// what is SIMULATED (tier), what is LOADED (streamer), what is RENDERED (render kernel).
// Cell size and ring sizes are settings.

const M_PER_DEG_LAT = 111320;

// In cells (Chebyshev distance): 3x3 full, 5x5 loaded, 7x7 kept, 9x9 known.
export const DEFAULT_RINGS = { active: 0, near: 1, mid: 2, edge: 3, far: 4 };
export const DEFAULT_CELL_METERS = 256;
export const TIER_ORDER = ['active', 'near', 'mid', 'edge', 'far', 'dormant'];
export const TIER_INFO = {
  active: { loaded: true, lod: 0, sim: 'full' },
  near: { loaded: true, lod: 1, sim: 'full' },
  mid: { loaded: true, lod: 2, sim: 'reduced' },
  edge: { loaded: false, keep: true, lod: 2, sim: 'reduced' },
  far: { loaded: false, lod: 3, sim: 'abstract' },
  dormant: { loaded: false, lod: null, sim: 'state' },
};

export function createGrid({ origin, cellMeters = DEFAULT_CELL_METERS, radiusMiles = 15 } = {}) {
  if (!origin || !Number.isFinite(origin.lat) || !Number.isFinite(origin.lon)) throw new Error('The grid needs an origin { lat, lon }');
  if (!(cellMeters > 0)) throw new Error('cellMeters must be above 0');
  const mPerDegLon = M_PER_DEG_LAT * Math.cos((origin.lat * Math.PI) / 180);
  const radiusM = radiusMiles * 1609.344;
  const maxCell = Math.ceil(radiusM / cellMeters);

  const toMeters = ({ lat, lon }) => ({ x: (lon - origin.lon) * mPerDegLon, z: (origin.lat - lat) * M_PER_DEG_LAT });
  const toLatLon = ({ x, z }) => ({ lat: origin.lat - z / M_PER_DEG_LAT, lon: origin.lon + x / mPerDegLon });
  const keyOf = (cx, cz) => `${cx},${cz}`;
  const parse = (key) => { const [cx, cz] = key.split(',').map(Number); return { cx, cz }; };

  function cellAt(pos) {
    const m = toMeters(pos);
    const cx = Math.floor(m.x / cellMeters);
    const cz = Math.floor(m.z / cellMeters);
    return { cx, cz, key: keyOf(cx, cz) };
  }
  function center(key) {
    const { cx, cz } = parse(key);
    return toLatLon({ x: (cx + 0.5) * cellMeters, z: (cz + 0.5) * cellMeters });
  }
  // Inside the play area: the cell centre is within the radius (soft edge: one more cell).
  function inArea(key) {
    const { cx, cz } = parse(key);
    const x = (cx + 0.5) * cellMeters;
    const z = (cz + 0.5) * cellMeters;
    return Math.hypot(x, z) <= radiusM + cellMeters;
  }
  // Group a list of things with { lat, lon } by cell key.
  function bucket(list) {
    const out = new Map();
    for (const it of list) {
      const k = cellAt(it).key;
      if (!out.has(k)) out.set(k, []);
      out.get(k).push(it);
    }
    return out;
  }
  return { origin, cellMeters, radiusM, maxCell, toMeters, toLatLon, keyOf, parse, cellAt, center, inArea, bucket };
}

// Tier of every cell within the far ring. Cells not in the result are dormant.
// heading: optional { x, z } direction of travel (any length); the cells ahead of
// the player get one tier better, so they load before the player arrives.
export function classify(grid, pos, { rings = DEFAULT_RINGS, heading = null } = {}) {
  const here = grid.cellAt(pos);
  const out = new Map();
  const far = rings.far;
  let hx = 0, hz = 0;
  if (heading && (heading.x || heading.z)) {
    const l = Math.hypot(heading.x, heading.z);
    hx = heading.x / l; hz = heading.z / l;
  }
  for (let dz = -far; dz <= far; dz++) {
    for (let dx = -far; dx <= far; dx++) {
      const key = grid.keyOf(here.cx + dx, here.cz + dz);
      if (!grid.inArea(key)) continue;
      const d = Math.max(Math.abs(dx), Math.abs(dz));
      let tier = d <= rings.active ? 'active' : d <= rings.near ? 'near' : d <= rings.mid ? 'mid' : d <= (rings.edge ?? rings.mid) ? 'edge' : 'far';
      if ((hx || hz) && d > 0) {
        const ahead = (dx * hx + dz * hz) / Math.hypot(dx, dz);
        // Prefetch: a cell ahead of the player one ring past the load ring loads early.
        if (ahead > 0.7 && (tier === 'edge' || tier === 'far')) tier = 'mid';
      }
      out.set(key, tier);
    }
  }
  return out;
}

export const tierOf = (tiers, key) => tiers.get(key) || 'dormant';

// Should a system run for this cell at this step? Reduced = once an hour, abstract = once a day.
export function simDue(tier, time, lastRun) {
  const sim = TIER_INFO[tier]?.sim || 'state';
  if (sim === 'full') return true;
  if (sim === 'state') return false;
  const every = sim === 'reduced' ? 60 : 1440;
  return lastRun == null || time - lastRun >= every;
}
