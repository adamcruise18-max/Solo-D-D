// Pacer events (content). The builder thread owns this file and adds events;
// the engine thread owns the pacer that picks them (src/engine/pacer.js).
//
// { id, size: 'small'|'medium'|'big', where: 'home'|'outside'|'inside'|'any'|'asleep',
//   ('any' = awake anywhere; 'asleep' = only while the player sleeps: write it as
//   something that wakes you)
//   months: [min, max] (months since the collapse; the game starts at month 3),
//   text: journal line, kind: log kind, when(state, ctx)?: extra condition,
//   apply(state, ctx)?: the effect (ctx.rng is the 'pacer' stream) }
//
// Events that change the game use short hazards (src/engine/hazards.js): slower walking
// for a while, or colder air. Bodies are only ever told, never shown, and adults only.
import { startHazard } from '../engine/hazards.js';

const raining = (s) => ['rain', 'heavy_rain', 'windstorm', 'ice_storm'].includes(s.weather?.type);
const dogWithYou = (s) => s.dog?.stage === 'joined';
const inHouse = (s) => s.location?.kind === 'house';
// Calendar month of the game clock (0 = Jan); day 0 is 24 Nov 2026. `months` counts time
// since the collapse; weather and season events use these calendar checks instead.
const calMonth = (s) => new Date(Date.UTC(2026, 10, 24) + Math.floor(s.time / 1440) * 86400000).getUTCMonth();
const isWinter = (s) => [11, 0, 1].includes(calMonth(s)); // Dec to Feb
const isColdSeason = (s) => [10, 11, 0, 1, 2].includes(calMonth(s)); // Nov to Mar
const isRainySeason = (s) => [9, 10, 11, 0, 1, 2, 3].includes(calMonth(s)); // Oct to Apr

export const EVENTS = [
  { id: 'geese', size: 'small', where: 'outside', months: [3, 99], text: 'A long line of geese flies over, very low and loud. Then it is quiet again.' },
  { id: 'frost_windows', size: 'small', where: 'home', months: [3, 99], when: isColdSeason, text: 'Frost makes ferns on the inside of the windows.' },
  { id: 'car_alarm_dies', size: 'small', where: 'any', months: [3, 5], text: 'Far away, a car alarm that has cried for days goes weak, then stops.' },
  { id: 'shelf_falls', size: 'small', where: 'inside', months: [3, 99], text: 'Somewhere in the building, a shelf gives way with a crash. You hold still until the dust settles.' },
  { id: 'wind_chimes', size: 'small', where: 'home', months: [3, 99], text: 'A neighbor’s wind chimes ring in the wind. For a moment it sounds like a normal street.' },
  { id: 'crows', size: 'small', where: 'outside', months: [3, 99], text: 'A crowd of crows lifts off a yard as you pass, shouting at you.' },
  { id: 'distant_smoke', size: 'medium', where: 'any', months: [3, 99], text: 'A column of smoke rises far to the east. Something is burning, and nobody will put it out.' },
  { id: 'dogs_howl', size: 'medium', where: 'any', months: [3, 99], text: 'A pack of dogs howls not far away. They sound hungry.' },
  { id: 'night_crash', size: 'small', where: 'asleep', months: [3, 99], text: 'A crash in the night wakes you. A gutter, or a tree limb. You listen for a long time, then sleep again.' },
  { id: 'night_owls', size: 'small', where: 'asleep', months: [3, 99], text: 'Owls call to each other outside. You wake, and lie listening until they stop.' },
  { id: 'night_dogs', size: 'medium', where: 'asleep', months: [3, 99], text: 'Dogs fight somewhere in the street. The noise wakes you, and your heart pounds for a while.' },
  { id: 'ice_trees_down', size: 'medium', where: 'any', months: [3, 99], when: (s) => s.weather?.type === 'ice_storm', apply: (s) => startHazard(s, 'road_blocked', 72), text: 'All night and day, branches heavy with ice crack and fall. A big tree comes down across a road near you, and takes the power lines with it.' },
  { id: 'power_line_down', size: 'big', where: 'any', months: [3, 99], apply: (s) => startHazard(s, 'road_blocked', 48), text: 'A loud crack and a crash: a power pole goes down somewhere close. Walking anywhere takes longer for two days.' },

  // ---- small ----
  { id: 'dog_bone', size: 'small', where: 'home', months: [3, 99], when: dogWithYou, apply: (s) => { s.dog.bond = Math.min(100, s.dog.bond + 3); }, text: 'The dog comes in proud, with an old bone from a yard. It lies at your feet to chew it. (Bond +3)' },
  { id: 'pipe_burst', size: 'small', where: 'inside', months: [3, 99], when: isColdSeason, text: 'A pipe has burst somewhere above. Water runs down a wall and across the floor. You step around it.' },
  { id: 'crows_porch', size: 'small', where: 'outside', months: [3, 99], text: 'Crows gather on a porch down the street. You know what they found there, and you do not look.' },
  { id: 'cat_watches', size: 'small', where: 'outside', months: [3, 99], text: 'A thin cat watches you from under a car. When you stop, it is gone.' },
  { id: 'rain_gutter', size: 'small', where: 'home', months: [3, 99], when: raining, text: 'Rain pours over a blocked gutter in a sheet. It is loud, and somehow it helps.' },
  { id: 'radio_static', size: 'small', where: 'home', months: [3, 99], text: 'You try the old radio again. Only static on every band. You turn it off.' },
  { id: 'deer_street', size: 'small', where: 'outside', months: [4, 99], text: 'Two deer stand in the middle of the road, eating the grass in the cracks. They look at you, then walk away slowly.' },

  // ---- medium ----
  { id: 'feral_dogs', size: 'medium', where: 'outside', months: [3, 99], apply: (s) => startHazard(s, 'feral_dogs', 24), text: 'A pack of loose dogs blocks the street ahead, heads low. You back away and go around. For a day you keep to the side streets (walking is slower).' },
  { id: 'roof_leak', size: 'medium', where: 'home', months: [3, 99], when: raining, apply: (s) => { s.home.rawGal = (s.home.rawGal || 0) + 2; s.home.indoorTemp -= 3; }, text: 'Water drips through the ceiling in the hall. You put a pot under it: 2 gal of rain water to filter, but the house is colder.' },
  { id: 'gas_smell', size: 'medium', where: 'inside', months: [3, 14], when: inHouse, text: 'A strong smell of gas in this house. You open a window, and you do not light anything in here.' },
  { id: 'black_ice', size: 'medium', where: 'outside', months: [3, 99], when: (s) => isColdSeason(s) && (s.weather?.low ?? 40) < 33, apply: (s) => startHazard(s, 'black_ice', 18), text: 'Your boot slides on clear ice. Black ice on every road this morning. You walk slowly until it melts.' },
  { id: 'house_fire_far', size: 'medium', where: 'any', months: [3, 99], when: (s) => !raining(s), text: 'To the south, the sky glows orange under a column of smoke. A house burns there, and the next one catches. The smell reaches you an hour later.' },

  // ---- big ----
  { id: 'cold_snap', size: 'big', where: 'any', months: [3, 99], when: isWinter, apply: (s) => startHazard(s, 'cold_snap', 72), text: 'The air turns hard and dry. A cold snap from the north: the next three days are about 12 °F colder. Keep the fire going.' },
  { id: 'flood_low_streets', size: 'big', where: 'any', months: [3, 99], when: (s) => isRainySeason(s) && s.weather?.type === 'heavy_rain', apply: (s) => startHazard(s, 'flood', 24), text: 'The creeks are over their banks. Low streets are under brown water, and you must go around them for a day.' },
  { id: 'bridge_debris', size: 'big', where: 'outside', months: [4, 99], apply: (s) => startHazard(s, 'road_blocked', 48), text: 'A pile-up of cars and a fallen sign block an overpass. You must find other ways for a while.' },
];
