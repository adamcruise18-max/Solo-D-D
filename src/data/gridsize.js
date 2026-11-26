// Grid inventory (Adam, 2026-11-25): each item takes a block of cells by its size, as in
// survival-loot games. Our own sizes and layout. Grid space is the only carry limit
// (Adam, 2026-11-26): src/engine/packgrid.js checks room before you take something.
import { ITEMS } from './items.js';

// [width, height] in cells, and how many units one tile holds (a stack).
// Items not listed: size from weight (see sizeOf).
const SIZE = {
  // small, stack many
  energy_bar: [1, 1, 6], jerky: [1, 1, 5], instant_noodles: [1, 1, 4], garlic: [1, 1, 6],
  ors: [1, 1, 6], antibiotics: [1, 1, 3], pain_pills: [1, 1, 2], ibuprofen: [1, 1, 2],
  batteries: [1, 1, 4], n95: [1, 1, 10], seeds: [1, 1, 10], lighter: [1, 1, 4], matches: [1, 1, 4],
  water_tablets: [1, 1, 10], hand_warmers: [1, 1, 6], wool_socks: [1, 1, 3], soap: [1, 1, 3],
  toothpaste: [1, 1, 2], vitamins: [1, 1, 2], rifle_rounds: [1, 1, 3], snare_wire: [1, 1, 3],
  fishing_line: [1, 1, 3], salad_greens: [1, 1, 2],
  // small, one or two per tile
  canned_food: [1, 1, 2], canned_fruit: [1, 1, 2], peanut_butter: [1, 1, 1], snacks: [1, 1, 3],
  toilet_paper: [1, 1, 1], bandages: [1, 1, 2], flashlight: [1, 1, 1], knife: [1, 1, 1],
  multitool: [1, 1, 1], can_opener: [1, 1, 1], phone: [1, 1, 1], water_filter: [1, 1, 1],
  gloves: [1, 1, 1], winter_hat: [1, 1, 1], paper_map: [1, 1, 2], duct_tape: [1, 1, 1],
  hardware_parts: [1, 1, 1], kale: [1, 1, 2],
  // tall or long
  soda: [1, 2, 1], sports_drink: [1, 2, 1], propane_1lb: [1, 2, 1], flea_spray: [1, 2, 1],
  chips: [1, 2, 1], candles: [1, 2, 1], trash_bags: [1, 2, 1], toothbrush: [1, 2, 1],
  book_first_aid: [1, 2, 1], book_repair: [1, 2, 1], book_cooking: [1, 2, 1], book_survival: [1, 2, 1],
  pry_bar: [1, 4, 1], fishing_rod: [1, 5, 1], bow: [1, 5, 1], arrows: [1, 4, 1], rifle: [1, 5, 1],
  radio: [2, 1, 1], thermal_underwear: [2, 1, 1], windbreaker: [2, 1, 1], fresh_fish: [2, 1, 1],
  raw_meat: [2, 1, 1], potatoes: [2, 1, 2], green_beans: [2, 1, 2], fava_beans: [2, 1, 2],
  saline: [2, 1, 1], extension_cord: [2, 1, 1], wiring: [2, 1, 1], pipe_fittings: [2, 1, 1],
  // medium
  water_bottle: [2, 2, 1], first_aid: [2, 2, 1], dry_food: [2, 2, 1], oatmeal: [1, 2, 1],
  cooking_pot: [2, 2, 1], rope: [2, 2, 1], boots: [2, 2, 1], rain_jacket: [2, 2, 1],
  fleece_jacket: [2, 2, 1], wool_sweater: [2, 2, 1], cotton_hoodie: [2, 2, 1], blanket: [2, 2, 1],
  tarp: [2, 2, 1], bleach: [2, 2, 1], formula: [2, 2, 1], waxed_cheese: [1, 1, 1], squash: [2, 2, 1],
  comfort: [2, 2, 1], broken_radio: [2, 1, 1], desk_lamp: [2, 2, 1], plastic_sheet: [2, 2, 1],
  insulation: [2, 2, 1],
  // big
  winter_coat: [2, 3, 1], sleeping_bag: [2, 3, 1], toolkit: [3, 2, 1], backpack: [3, 3, 1],
  gas_can: [3, 3, 1], firewood: [3, 2, 1], dog_food: [3, 3, 1], old_toaster: [2, 2, 1],
  scrap_wood: [1, 4, 1], garden_hose: [3, 3, 1], metal_bin: [3, 3, 1], car_battery: [3, 2, 1],
  wooden_chair: [3, 4, 1], rain_barrel: [4, 4, 1], generator: [4, 4, 1], broken_bike: [5, 4, 1],
  stove_kit: [4, 4, 1], battery_module: [4, 3, 1],
};

// { w, h, stack } for an item id.
export function sizeOf(id) {
  const s = SIZE[id];
  if (s) return { w: s[0], h: s[1], stack: s[2] || 1 };
  const wt = ITEMS[id]?.weight ?? 1;
  if (wt <= 0.35) return { w: 1, h: 1, stack: 3 };
  if (wt <= 1.2) return { w: 1, h: 2, stack: 1 };
  if (wt <= 4) return { w: 2, h: 2, stack: 1 };
  if (wt <= 10) return { w: 2, h: 3, stack: 1 };
  return { w: 3, h: 4, stack: 1 };
}

// Pack grid: pockets and hands without a backpack, a big grid with one.
export const GRID_COLS = 6;
export function packRows(hasBackpack) {
  return hasBackpack ? 10 : 4;
}
