// Slow breakdown timeline (content). The builder thread owns this file; the
// engine thread owns the decay system that runs it (src/engine/decay.js).
//
// { id, month: first month it can start (months since the collapse; the game
//   starts at month 3), chanceByDay: chance per day that an area that has not
//   failed yet fails, text: journal line when it first shows, kind }
//
// Rules ask decayActive(state, id, area) or decayShare(state, id). The effects
// (taps dry, stale gas...) are wired in the rule files with the content pass.
export const DECAY = [
  { id: 'water_pressure', month: 3, chanceByDay: 0.08, text: 'Taps on the hills are dry now. Low streets still trickle, for a while.' },
  { id: 'cell_towers', month: 4, chanceByDay: 0.15, text: 'The last cell towers on backup power have gone dark. Phones are only lights and cameras now.' },
  { id: 'store_fridges', month: 4, chanceByDay: 0.05, text: 'Store fridges are past saving. Nothing fresh is left in them, only the smell.' },
  { id: 'stale_gas', month: 6, chanceByDay: 0.04, text: 'Old gasoline is going bad. A can from a car may not start an engine now.' },
  { id: 'roof_leaks', month: 6, chanceByDay: 0.01, text: 'Clogged gutters and leaking roofs: more buildings are open to the rain each month.' },
  { id: 'battery_drain', month: 12, chanceByDay: 0.02, text: 'Batteries you find now are often half empty.' },
  { id: 'trees_on_roads', month: 12, chanceByDay: 0.005, text: 'Storms have put trees across some roads. Nobody clears them.' },
  { id: 'old_medicine', month: 24, chanceByDay: 0.01, text: 'Most medicine is past its date now. It still works, but less.' },
];
