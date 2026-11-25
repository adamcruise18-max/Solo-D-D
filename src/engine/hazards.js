// Short effects that pacer events leave behind: loose dogs on the streets, black ice,
// blocked roads, a flood, a cold snap. Each one ends at a game time, kept in
// state.flags.hazards (no new save field). Rules ask hazardOn() and the walk and
// air-temperature rules (travel.js, world.js) apply them.
export const HAZARDS = {
  feral_dogs: { label: 'loose dogs, you take side streets', walk: 0.9 },
  black_ice: { label: 'black ice', walk: 0.8 },
  road_blocked: { label: 'fallen trees and lines on the roads', walk: 0.9 },
  flood: { label: 'flooded low streets', walk: 0.85 },
  cold_snap: { label: 'cold snap', colder: 12 },
};

export function startHazard(state, id, hours) {
  if (!HAZARDS[id]) throw new Error(`Unknown hazard "${id}"`);
  state.flags ||= {};
  clearOldHazards(state);
  const hz = (state.flags.hazards ||= {});
  hz[id] = Math.max(hz[id] || 0, state.time + hours * 60);
}

export function hazardOn(state, id, t = state.time) {
  const end = state.flags?.hazards?.[id];
  return end != null && t < end;
}

// [{ id, label, walk?, colder?, endsAt }] for the hazards active at time t.
export function activeHazards(state, t = state.time) {
  const hz = state.flags?.hazards || {};
  return Object.keys(hz).filter((id) => HAZARDS[id] && t < hz[id]).map((id) => ({ id, ...HAZARDS[id], endsAt: hz[id] }));
}

// Degrees F colder outside (a cold snap).
export function hazardColder(state, t = state.time) {
  return activeHazards(state, t).reduce((a, h) => a + (h.colder || 0), 0);
}

// Drop hazards that have ended (keeps the save small).
export function clearOldHazards(state) {
  const hz = state.flags?.hazards;
  if (!hz) return;
  for (const id of Object.keys(hz)) if (state.time >= hz[id]) delete hz[id];
}
