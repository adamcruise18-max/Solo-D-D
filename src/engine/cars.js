// Abandoned cars on the map (map view only; no 3D streets). Builder rule file.
// A car is found from the street-details layer (src/ui/details.js gives each car an id and a
// position). Each car can be searched once, siphoned once, and stripped of its battery and its
// wire once. state.cars = { [id]: { lat, lon, searched, siphoned, battery, wire } } (made on first use).
// No text about the owner.
import { ITEMS } from '../data/items.js';
import { chance, randInt } from '../rng.js';
import { log, addItem, has } from './state.js';
import { advanceTime } from './tick.js';
import { travel } from './travel.js';
import { practice } from './skills.js';
import { decayShare } from './decay.js';
import { rollTable } from './cars-loot.js';

export const CAR_SEARCH_MIN = 15;
export const SIPHON_MIN = 20;
export const BATTERY_MIN = 25;
export const WIRE_MIN = 20;
// The car battery adds a little storage to the home battery bank (kWh), up to 4 batteries.
export const CAR_BATTERY_KWH = 0.5;
export const MAX_CAR_BATTERIES = 4;

function carsOf(state) {
  if (!state.cars || typeof state.cars !== 'object') state.cars = {};
  return state.cars;
}

export function carHere(state) {
  const loc = state.location;
  return loc && loc.kind === 'car' ? carsOf(state)[loc.id] || null : null;
}

// Walk to a car. id and position come from the map layer.
export function goToCar(state, id, lat, lon) {
  if (!id || !Number.isFinite(lat) || !Number.isFinite(lon)) return false;
  const cars = carsOf(state);
  if (!cars[id]) cars[id] = { lat, lon };
  if (!travel(state, { lat, lon }, 'the car')) return false;
  state.location = { kind: 'car', id };
  log(state, 'You reach the abandoned car. Leaves and dust cover the glass.', 'travel');
  return true;
}

const hasAny = (state, ids) => ids.find((t) => has(state, t)) || null;
export const SIPHON_TOOLS = ['garden_hose', 'pipe_fittings'];
export const WRENCH_TOOLS = ['toolkit', 'multitool'];

export function searchCar(state) {
  const c = carHere(state);
  if (!c || c.searched) return;
  c.searched = true;
  advanceTime(state, CAR_SEARCH_MIN, 'work');
  if (state.dead) return;
  const found = rollTable(state);
  for (const id of found) addItem(state.carried, id, 1);
  practice(state, 'scavenging', 1);
  log(state, found.length ? `You search the glovebox and the trunk (${CAR_SEARCH_MIN} min): ${found.map((id) => ITEMS[id].name.toLowerCase()).join(', ')}.` : `You search the glovebox and the trunk (${CAR_SEARCH_MIN} min). Nothing useful.`, found.length ? 'good' : undefined);
}

// Siphon gas: needs a hose. Old gas may not start the generator (stale_gas rule in breakdown.js).
export function siphonGas(state) {
  const c = carHere(state);
  if (!c || c.siphoned) return;
  if (!hasAny(state, SIPHON_TOOLS)) { log(state, 'You need a hose to siphon gas.'); return; }
  c.siphoned = true;
  advanceTime(state, SIPHON_MIN, 'work');
  if (state.dead) return;
  // Many tanks are near empty, or were already drained in the last weeks.
  const gal = chance(state, 0.35) ? 0 : randInt(state, 1, 3);
  if (!gal) { log(state, 'You feed the hose into the tank. It is dry.'); return; }
  addItem(state.carried, 'gas_can', gal);
  const stale = decayShare(state, 'stale_gas');
  log(state, `You siphon ${gal} gal of gas into cans (${SIPHON_MIN} min). It smells sour.${stale > 0.3 ? ' Old gas: it may not start an engine.' : ''}`, 'good');
}

export function takeCarBattery(state) {
  const c = carHere(state);
  if (!c || c.battery) return;
  const tool = hasAny(state, WRENCH_TOOLS);
  if (!tool) { log(state, 'You need a wrench (tool kit or multitool) to take the battery out.'); return; }
  c.battery = true;
  advanceTime(state, BATTERY_MIN, 'work');
  if (state.dead) return;
  addItem(state.carried, 'car_battery', 1);
  practice(state, 'tinkering', 2);
  log(state, `You open the hood and take out the 12 V battery with your ${ITEMS[tool].name.toLowerCase()} (${BATTERY_MIN} min). It is heavy.`, 'good');
}

export function stripCarWire(state) {
  const c = carHere(state);
  if (!c || c.wire) return;
  const tool = hasAny(state, ['toolkit', 'multitool', 'knife']);
  if (!tool) { log(state, 'You need a knife or a tool to cut the wire.'); return; }
  c.wire = true;
  advanceTime(state, WIRE_MIN, 'work');
  if (state.dead) return;
  addItem(state.carried, 'wiring', 0.5);
  addItem(state.carried, 'hardware_parts', 0.25);
  practice(state, 'tinkering', 2);
  log(state, `You pull wire from under the dash and take the mirror and its screws (${WIRE_MIN} min).`, 'good');
}

// At home: wire a car battery into the home battery bank (needs the home battery).
export function addCarBattery(state, bag) {
  const h = state.home;
  h.carBatteries = h.carBatteries || 0;
  if (h.carBatteries >= MAX_CAR_BATTERIES) { log(state, 'The bank has no room for more car batteries.'); return; }
  addItem(bag, 'car_battery', -1);
  h.carBatteries += 1;
  h.batteryMax += CAR_BATTERY_KWH;
  advanceTime(state, 30, 'work');
  log(state, `You wire the car battery into the home battery bank (+${CAR_BATTERY_KWH} kWh of storage, ${h.carBatteries} of ${MAX_CAR_BATTERIES}).`, 'good');
}
