// The one world grid for the game (engine-owned). Every system that cuts the play
// area into cells (streamed 3D streets, cell simulation tiers) uses this grid, so
// cell keys match everywhere. Origin: HOME (the map centre, also the centre of the
// 15-mile play area); cells are 256 m squares. Do not change these after street
// files are built: the keys in docs/data/streets/ depend on them.
import { createGrid, DEFAULT_CELL_METERS } from '../core/cells.js';
import { HOME, MAP_RADIUS_MILES } from './state.js';

export const WORLD_CELL_METERS = DEFAULT_CELL_METERS; // 256
export const WORLD_GRID = createGrid({ origin: HOME, cellMeters: WORLD_CELL_METERS, radiusMiles: MAP_RADIUS_MILES });

// "cx,cz" for a position { lat, lon }.
export const cellKeyAt = (pos) => WORLD_GRID.cellAt(pos).key;
