// Hunting and fishing spots (research: hunting and fishing as skills, Adam's decision).
// Real public parks, wetlands and waters inside the 15-mile map. Coordinates are
// approximate (park centers or a bank access), good enough for the map pin.
// Henry Hagg Lake is about 16 miles out (past the edge), so it is not here.
//
// fish: what bites there. runs: months (0 = January) with a salmon or steelhead run,
// and how many fish of meat one big fish counts as (n).
// game: animals you can hunt there. No dogs or cats are ever game.
export const SPOTS = {
  tualatin_rood: { name: 'Tualatin River at Rood Bridge Park', lat: 45.4905, lon: -122.9505, kind: 'fish', fish: ['largemouth bass', 'catfish', 'cutthroat trout'], quality: 1 },
  tualatin_cook: { name: 'Tualatin River at Cook Park', lat: 45.3975, lon: -122.77, kind: 'fish', fish: ['largemouth bass', 'crappie', 'catfish'], quality: 1 },
  fanno_creek: { name: 'Fanno Creek', lat: 45.43, lon: -122.774, kind: 'fish', fish: ['cutthroat trout'], quality: 0.6 },
  commonwealth_lake: { name: 'Commonwealth Lake', lat: 45.5076, lon: -122.799, kind: 'fish', fish: ['rainbow trout', 'bluegill', 'largemouth bass'], quality: 0.8 },
  willamette_park: { name: 'Willamette River at Willamette Park', lat: 45.477, lon: -122.67, kind: 'fish', fish: ['smallmouth bass', 'walleye'], runs: [{ months: [2, 3, 4, 8, 9], fish: 'salmon', n: 4 }, { months: [11, 0, 1, 2], fish: 'winter steelhead', n: 3 }], quality: 1.1 },
  nature_park: { name: 'Tualatin Hills Nature Park', lat: 45.502, lon: -122.837, kind: 'hunt', game: ['rabbit', 'deer', 'duck'] },
  cooper_mountain: { name: 'Cooper Mountain Nature Park', lat: 45.451, lon: -122.874, kind: 'hunt', game: ['rabbit', 'deer'] },
  jackson_bottom: { name: 'Jackson Bottom Wetlands', lat: 45.501, lon: -122.989, kind: 'hunt', game: ['duck', 'goose', 'deer', 'rabbit'] },
  fernhill: { name: 'Fernhill Wetlands', lat: 45.5075, lon: -123.09, kind: 'hunt', game: ['duck', 'goose'] },
  tualatin_refuge: { name: 'Tualatin River Wildlife Refuge', lat: 45.388, lon: -122.829, kind: 'hunt', game: ['duck', 'goose', 'deer', 'rabbit'] },
  forest_park: { name: 'Forest Park', lat: 45.56, lon: -122.76, kind: 'hunt', game: ['deer', 'rabbit'] },
};

// dc: the shot. meat: lb of raw meat after cleaning. clean: minutes with a knife.
// months: when it is common (ducks and geese winter here). dawnDusk: moves at dawn and dusk.
export const GAME = {
  rabbit: { name: 'rabbit', dc: 13, meat: 2, clean: 20, w: 4, snare: true },
  duck: { name: 'duck', dc: 14, meat: 1.5, clean: 20, w: 3, months: [9, 10, 11, 0, 1, 2] },
  goose: { name: 'Canada goose', dc: 14, meat: 4, clean: 30, w: 2, months: [9, 10, 11, 0, 1, 2] },
  deer: { name: 'black-tailed deer', dc: 16, meat: 40, clean: 120, w: 1.5, dawnDusk: true },
};

// Gear. A rod, or line and hooks, catches fish; a bow (with arrows) or a rifle
// (with rounds) takes game; snare wire takes rabbits while you are away.
export const GEAR = {
  fish: [['fishing_rod'], ['fishing_line']],
  bow: ['bow', 'arrows'],
  rifle: ['rifle', 'rifle_rounds'],
  snare: ['snare_wire'],
  clean: ['knife', 'multitool'],
};
