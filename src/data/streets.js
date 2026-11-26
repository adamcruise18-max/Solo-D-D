// Codes shared by the street cell builder (tools/streets/build-streets.mjs) and the
// street view (src/ui/streets3d.js). Changing a number here needs a rebuild of
// docs/data/streets/ (and FORMAT_VERSION + 1 when the file shape changes).
export const FORMAT_VERSION = 1;

export const KIND = { house: 0, shed: 1, commercial: 2, apartments: 3, school: 4, civic: 5, industrial: 6 };
export const ROOF = { flat: 0, gabled: 1, hipped: 2 };

export const ROAD = {
  motorway: 0, trunk: 1, primary: 2, secondary: 3, tertiary: 4, residential: 5, unclassified: 6, living_street: 7,
  service: 8, driveway: 9, parking_aisle: 10, footway: 11, sidewalk: 12, crosswalk: 13, path: 14, cycleway: 15,
  steps: 16, track: 17, pedestrian: 18, bridleway: 19, unknown: 20, rail: 21, stream: 22,
};
// Width in metres by class, when the data has none (most roads).
const WIDTH = {
  0: 16, 1: 15, 2: 15, 3: 12.5, 4: 10, 5: 8, 6: 7, 7: 6, 8: 4.5, 9: 3.6, 10: 6, 11: 1.6, 12: 1.8, 13: 3,
  14: 1.4, 15: 2, 16: 1.6, 17: 3, 18: 4, 19: 1.4, 20: 5, 21: 3, 22: 2.5,
};
export function roadWidth(cls, props = {}) {
  const w = Number.parseFloat(props.width);
  if (Number.isFinite(w) && w > 0.5 && w < 40) return w;
  return WIDTH[cls] ?? 5;
}
// Draw order (higher = on top) and kind of surface.
export const ROAD_LOOK = {
  asphalt: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 20],
  concrete: [9, 11, 12, 16, 18],
  crosswalk: [13],
  dirt: [14, 15, 17, 19],
  rail: [21],
  water: [22],
};
export const isWalkway = (cls) => cls >= 11 && cls <= 19;
export const isCarRoad = (cls) => cls <= 8 || cls === 10 || cls === 20;

export const AREA = {
  lawn: 0, grass: 1, pitch: 2, playground: 3, wood: 4, scrub: 5, wetland: 6, water: 7, pool: 8,
  plaza: 9, sand: 10, track: 11, paved: 12, gravel: 13, parking: 14,
};
export const PROP = {
  lamp: 0, power_pole: 1, bus_stop: 2, stop_sign: 3, signal: 4, bench: 5, bollard: 6, bin: 7, hydrant: 8, mailbox: 9, vending: 10,
};

// Warm stylized palettes (no real brands). Walls: muted tans, grays, sage, blue-gray.
export const WALL_COLORS = [0xd9c7a8, 0xc9b79a, 0xb8b2a4, 0xa9b39c, 0x9fb0b8, 0xd8cdb8, 0xc4a98a, 0xe2d8c4, 0x9aa79a, 0xb7a08a, 0xcfc3ae, 0xa7a9a8];
export const ROOF_COLORS = [0x5d5a58, 0x4b4f55, 0x6b5a4c, 0x3f4144, 0x77685a, 0x575f5a];
export const COMMERCIAL_WALLS = [0xd6cfc2, 0xc8bfae, 0xb9b4aa, 0xe0d7c6, 0xa8a29a, 0xcbb89a];
