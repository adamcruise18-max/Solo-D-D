// Pack grid (Adam, 2026-11-26): grid space is the only limit on what you carry. Each item is
// a tile of cells by its size (src/data/gridsize.js); small things stack on one tile. This
// file is pure rule code: the UI draws the same layout (src/ui/grid.js).
import { sizeOf, GRID_COLS, packRows } from '../data/gridsize.js';

// One tile per stack: 7 cans with 2 per tile make 4 tiles. key = "id#n".
export function tilesFor(bag, order = Object.keys(bag)) {
  const out = [];
  for (const id of order) {
    let q = bag[id] || 0;
    if (q <= 1e-9) continue;
    const s = sizeOf(id);
    let n = 0;
    while (q > 1e-9) {
      const take = Math.min(s.stack, q);
      out.push({ key: `${id}#${n}`, id, q: Math.round(take * 1000) / 1000, w: s.w, h: s.h });
      q -= take;
      n++;
      if (n > 60) break; // safety
    }
  }
  return out;
}

// Put tiles on a grid `cols` wide. `rows` is the real size; tiles that do not fit go below it
// (overflow rows). saved: { key: [x, y, rot] } from earlier drags, kept when still free.
export function layoutGrid(tiles, cols, rows, saved = {}) {
  const occ = [];
  const free = (x, y, w, h) => {
    if (x < 0 || y < 0 || x + w > cols) return false;
    for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) if (occ[j]?.[i]) return false;
    return true;
  };
  const mark = (x, y, w, h, key) => {
    for (let j = y; j < y + h; j++) { occ[j] ||= []; for (let i = x; i < x + w; i++) occ[j][i] = key; }
  };
  const placed = [];
  const rest = [];
  for (const t of tiles) {
    const s = saved[t.key];
    if (s) {
      const rot = !!s[2];
      const w = rot ? t.h : t.w; const h = rot ? t.w : t.h;
      if (w <= cols && s[1] + h <= rows && free(s[0], s[1], w, h)) {
        mark(s[0], s[1], w, h, t.key);
        placed.push({ ...t, x: s[0], y: s[1], w, h, rot });
        continue;
      }
    }
    rest.push(t);
  }
  // Bigger tiles first, so they find room; same size keeps the given order.
  const order = rest.map((t, i) => [t, i]).sort((a, b) => b[0].w * b[0].h - a[0].w * a[0].h || a[1] - b[1]).map((e) => e[0]);
  for (const t of order) {
    let spot = null;
    for (let y = 0; !spot && y < rows + 400; y++) {
      for (let x = 0; x < cols && !spot; x++) {
        if (t.w <= cols && free(x, y, t.w, t.h) && (y + t.h <= rows || y >= rows)) spot = { x, y, w: t.w, h: t.h, rot: false };
        else if (t.h <= cols && t.w !== t.h && free(x, y, t.h, t.w) && (y + t.w <= rows || y >= rows)) spot = { x, y, w: t.h, h: t.w, rot: true };
      }
      // a tile wider than the grid: lay it down on its own row
      if (!spot && t.w > cols && t.h > cols && y >= rows) spot = { x: 0, y, w: Math.min(cols, t.w), h: t.h, rot: false };
    }
    if (!spot) continue;
    mark(spot.x, spot.y, spot.w, spot.h, t.key);
    placed.push({ ...t, ...spot });
  }
  const used = placed.reduce((m, p) => Math.max(m, p.y + p.h), 0);
  const overflow = placed.filter((p) => p.y + p.h > rows).length;
  return { tiles: placed, cols, rows, height: Math.max(rows, used), overflow };
}

// Can a tile (w x h) go at x, y in this layout (ignoring the tile itself)?
export function fitsAt(layout, key, x, y, w, h) {
  if (x < 0 || y < 0 || x + w > layout.cols || y + h > layout.rows) return false;
  return !layout.tiles.some((t) => t.key !== key && x < t.x + t.w && t.x < x + w && y < t.y + t.h && t.y < y + h);
}

// ---------- the player's pack ----------
// The backpack is gear you wear, like a hoodie or gloves (Adam, 2026-11-26): it sits in the
// 'back' clothes slot, never in the grid, and makes the grid bigger. A save from before this
// change (its clothes have no 'back' slot yet) can still have a backpack in the bag: it
// counts as worn (one of them). Once the slot exists, a backpack in the bag is a plain tile.
const legacyPack = (state) => state.player?.worn?.back === undefined && (state.carried.backpack || 0) > 0;
export function wearsPack(state) {
  return state.player?.worn?.back === 'backpack' || legacyPack(state);
}
// The bag as the grid sees it (an old-save backpack is taken out: it is "worn").
export function gridBag(state, bag = state.carried) {
  if (!legacyPack(state)) return bag;
  const b = { ...bag };
  b.backpack = (b.backpack || 0) - 1;
  if (b.backpack <= 0) delete b.backpack;
  return b;
}

export function packSize(state, pack = wearsPack(state)) {
  return { cols: GRID_COLS, rows: packRows(pack) };
}

// Does this bag fit in the pack (auto layout, no tile over the edge)?
function bagFits(state, bag, pack) {
  const { cols, rows } = packSize(state, pack);
  return layoutGrid(tilesFor(gridBag(state, bag)), cols, rows).overflow === 0;
}

// How many units of id (up to want) fit in the pack now. Whole units for things that
// cannot be split; a part unit (half a gallon) fits whole or not at all.
export function roomFor(state, id, want) {
  if (!(want > 0)) return 0;
  const bag = { ...state.carried };
  const test = (n) => { bag[id] = (state.carried[id] || 0) + n; return bagFits(state, bag); };
  if (test(want)) return want;
  let lo = 0; let hi = Math.floor(want);
  if (hi >= 1 && !test(1)) return 0;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (test(mid)) lo = mid; else hi = mid - 1;
  }
  return lo;
}

function packLayout(state) {
  const { cols, rows } = packSize(state);
  return layoutGrid(tilesFor(gridBag(state)), cols, rows);
}

// Cells used and cells in the pack (auto layout).
export function packUse(state) {
  const L = packLayout(state);
  const used = L.tiles.reduce((a, t) => a + t.w * t.h, 0);
  return { used, total: L.cols * L.rows, over: L.overflow > 0 };
}

// No room left even for a 1x1 thing.
export function packFull(state) {
  const L = packLayout(state);
  for (let y = 0; y < L.rows; y++) for (let x = 0; x < L.cols; x++) if (fitsAt(L, null, x, y, 1, 1)) return false;
  return true;
}

// Can you take the backpack off? Everything, the backpack too (3 x 3), must then fit in
// your pockets (the small grid).
export function canTakeOffPack(state) {
  const bag = { ...gridBag(state), backpack: (gridBag(state).backpack || 0) + 1 };
  return layoutGrid(tilesFor(bag), GRID_COLS, packRows(false)).overflow === 0;
}

// Would what you carry fit in your pockets alone (the small grid, no backpack)?
export function pocketsFit(state) {
  return layoutGrid(tilesFor(gridBag(state)), GRID_COLS, packRows(false)).overflow === 0;
}
