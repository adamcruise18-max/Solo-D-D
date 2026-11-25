// Garden crops (engine/garden.js). The builder owns this data; the engine owns the rules.
// plant: calendar months you can sow (0 = January). days: days to harvest at good
// temperature with water. frostF: a night low at or below this kills it (null: hardy).
// yield: [item id, quantity] for one bed. Portland (zone 8b) timing.
export const CROPS = {
  // Kale overwinters in Portland: sown Feb-Apr or Jul-Oct; after a harvest the plant
  // grows new leaves (regrow: growth it keeps; up to `cuts` harvests).
  kale: { name: 'Kale', plant: [1, 2, 3, 6, 7, 8, 9], days: 55, frostF: null, minF: 40, yield: ['kale', 8], regrow: 0.5, cuts: 4 },
  potatoes: { name: 'Potatoes', plant: [2, 3, 4, 5], days: 100, frostF: 26, minF: 40, yield: ['potatoes', 15] },
  beans: { name: 'Green beans', plant: [4, 5, 6], days: 60, frostF: 32, minF: 55, yield: ['green_beans', 6] },
  squash: { name: 'Winter squash', plant: [4, 5], days: 80, frostF: 32, minF: 50, yield: ['squash', 4] },
  garlic: { name: 'Garlic', plant: [8, 9, 10, 11], days: 220, frostF: null, minF: 35, yield: ['garlic', 20] },
};
