// Home base projects. The home has five wings. Each wing has projects that you build
// with parts found in the city. Each project has one clear effect.
// Numbers come from the "Home upgrades" table in the game rules doc where it has them.
//
// needs: { itemId: qty } parts used up by the build.
// tools: item ids you must have (not used up).
// requires: project ids that must be built first.
// hours: work time (heavy work: Energy cost is high).

export const WINGS = {
  power: { label: 'Power', icon: '⚡', blurb: 'Solar panels and the home battery.' },
  water: { label: 'Water', icon: '💧', blurb: 'Collect, store and clean water.' },
  heat: { label: 'Heat and shelter', icon: '🔥', blurb: 'Keep the living room warm with less fuel.' },
  medical: { label: 'Medical', icon: '✚', blurb: 'Heal faster and stay healthy.' },
  food: { label: 'Food', icon: '🥫', blurb: 'Cook and store food.' },
};

export const PROJECTS = [
  // ---- Power ----
  {
    id: 'led_lights', wing: 'power', name: 'LED lights on the battery',
    effect: 'Light at home after dark. Morale +3 each day.',
    needs: { wiring: 1, hardware_parts: 1 }, tools: ['toolkit'], hours: 2,
  },
  {
    id: 'second_battery', wing: 'power', name: 'Second battery',
    effect: 'Battery storage 13.5 → 27 kWh.',
    needs: { battery_module: 1, wiring: 2 }, tools: ['toolkit'], requires: ['led_lights'], hours: 8,
  },
  // ---- Water ----
  {
    id: 'rain_barrels', wing: 'water', name: 'Rain barrel system',
    effect: 'Rain fills 2 barrels from the gutter (110 gal). Boil or filter it before you drink.',
    needs: { rain_barrel: 2, pipe_fittings: 1 }, tools: [], hours: 3,
  },
  {
    id: 'filter_station', wing: 'water', name: 'Water filter station',
    effect: 'Each night it filters up to 12 gal of rain water into clean water by itself (tank holds 40 gal). You can also filter 2 gal by hand in 10 min, with no fire or power.',
    needs: { water_filter: 1, pipe_fittings: 1, scrap_wood: 1 }, tools: [], requires: ['rain_barrels'], hours: 2,
  },
  // ---- Garden ----
  {
    id: 'garden_beds', wing: 'food', name: 'Raised garden beds',
    effect: 'Four beds in the back yard. Plant seeds, water them, and harvest fresh food (engine/garden.js).',
    needs: { scrap_wood: 4, hardware_parts: 1 }, tools: [], hours: 6,
  },
  // ---- Heat ----
  {
    id: 'insulate_living', wing: 'heat', name: 'Insulate the living room',
    effect: 'The house loses heat half as fast.',
    needs: { insulation: 2, plastic_sheet: 1, hardware_parts: 1 }, tools: [], hours: 4,
  },
  {
    id: 'wood_stove', wing: 'heat', name: 'Wood stove',
    effect: 'Fire gives more heat (+30 °F), and one bundle burns 4 h, not 2 h.',
    needs: { stove_kit: 1, pipe_fittings: 1, hardware_parts: 2 }, tools: ['toolkit'], requires: ['insulate_living'], hours: 16,
  },
  // ---- Medical ----
  {
    id: 'sick_room', wing: 'medical', name: 'Clean sick room',
    effect: 'When you sleep at home, injuries heal 50% faster and you get back more Health.',
    needs: { bleach: 1, plastic_sheet: 1, first_aid: 1 }, tools: [], hours: 2,
  },
  {
    id: 'med_cabinet', wing: 'medical', name: 'Locked medicine cabinet',
    effect: 'Medicine is sorted and ready: pain pills work 9 h, not 6 h.',
    needs: { scrap_wood: 2, hardware_parts: 1 }, tools: ['toolkit'], requires: ['sick_room'], hours: 3,
  },
  // ---- Food ----
  {
    id: 'rocket_stove', wing: 'food', name: 'Rocket stove in the garage',
    effect: 'Cook and boil water with scrap wood: no fire in the fireplace and no battery power needed.',
    needs: { metal_bin: 1, hardware_parts: 1, scrap_wood: 1 }, tools: [], hours: 3,
  },
  {
    id: 'sealed_store', wing: 'food', name: 'Sealed food store',
    effect: 'Morale +5 one time. Then Morale +2 each day while 10 or more food items are in storage.',
    needs: { metal_bin: 3 }, tools: [], requires: ['rocket_stove'], hours: 1,
  },
];

export const PROJECT_BY_ID = Object.fromEntries(PROJECTS.map((p) => [p.id, p]));
