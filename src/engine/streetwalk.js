// Walking the 3D streets (engine-owned). The street renderer (src/render/streets/)
// moves the player and calls streetMove() with the new position; this file turns
// distance into game time, miles, energy and road events, with the same rules as a
// map trip (travel.js): walkSpeed() for the pace, a road event roll each half mile,
// and a forced rest at 0 energy. Time moves in whole minutes; the rest of the
// distance waits in state.streetWalk.m for the next call.
import { advanceTime } from './tick.js';
import { walkSpeed, roadEvent } from './travel.js';
import { log } from './state.js';
import { cellKeyAt } from './worldgrid.js';
import { getPlace } from './placesdb.js';
import { enterPlace } from './actions.js';

export const M_PER_MILE = 1609.344;
export const MAX_STEP_M = 250; // one call may move at most this far (no teleports)
export const EVENT_EVERY_MILES = 0.5;

const M_PER_DEG_LAT = 111320;
export function metersBetween(a, b) {
  const dz = (a.lat - b.lat) * M_PER_DEG_LAT;
  const dx = (a.lon - b.lon) * M_PER_DEG_LAT * Math.cos((((a.lat + b.lat) / 2) * Math.PI) / 180);
  return Math.hypot(dx, dz);
}

function walkState(state) {
  if (!state.streetWalk || typeof state.streetWalk !== 'object') state.streetWalk = { m: 0, eventMiles: 0 };
  return state.streetWalk;
}

// Step out onto the street where the player is now.
export function enterStreet(state) {
  if (state.dead) return null;
  const cell = cellKeyAt(state.pos);
  state.location = { kind: 'street', cell };
  walkState(state);
  return cell;
}

// Move to `pos` ({ lat, lon }). Returns { ok, minutes, cell } or { ok: false, why }.
export function streetMove(state, pos) {
  if (state.dead) return { ok: false, why: 'dead' };
  if (!pos || !Number.isFinite(pos.lat) || !Number.isFinite(pos.lon)) return { ok: false, why: 'bad position' };
  const d = metersBetween(state.pos, pos);
  if (d > MAX_STEP_M) return { ok: false, why: 'too far in one step' };
  const w = walkState(state);
  if (state.location?.kind !== 'street') enterStreet(state);
  state.pos = { lat: pos.lat, lon: pos.lon };
  state.location.cell = cellKeyAt(state.pos);
  state.stats.miles += d / M_PER_MILE;
  w.m += d;
  w.eventMiles += d / M_PER_MILE;
  // Time: whole minutes at the walking pace now (weather, load, injuries, dark).
  const mPerMin = (walkSpeed(state).mph * M_PER_MILE) / 60;
  const minutes = Math.floor(w.m / mPerMin);
  if (minutes > 0) {
    w.m -= minutes * mPerMin;
    advanceTime(state, minutes, 'walk');
  }
  if (!state.dead && w.eventMiles >= EVENT_EVERY_MILES) {
    w.eventMiles -= EVENT_EVERY_MILES;
    roadEvent(state);
  }
  if (!state.dead && state.player.energy <= 0) {
    log(state, 'You are too tired to walk on. You sit down by a wall and sleep.', 'warn');
    advanceTime(state, 180, 'sleep');
  }
  return { ok: !state.dead, minutes, cell: state.location.cell };
}

// Go in through a store or other place door from the street. The player must be
// at the door (within DOOR_RANGE_M of the place point). Opens the same place as a
// map trip, with no walk (you are already there).
export const DOOR_RANGE_M = 80;
export function enterPlaceFromStreet(state, placeId) {
  const place = getPlace(placeId);
  if (!place) return { ok: false, why: 'no such place' };
  if (metersBetween(state.pos, place) > DOOR_RANGE_M) return { ok: false, why: 'not at the door' };
  state.location = { kind: 'place', id: placeId };
  log(state, `You arrive at ${place.name}.`.replace('..', '.'), 'travel');
  enterPlace(state, place);
  return { ok: true };
}
