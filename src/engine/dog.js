// The dog (external review milestone 4): its own system, owns state.dog.
// Moved out of the legacy rules with the same numbers and the same order of
// random rolls (it runs right after them), so the golden replay does not change.
//
// Each step: a dog that joined gets hungry, and gets weak and sick without food.
// At 5 AM: the bond grows when the dog is fed (falls when hungry), and a stray
// visits, leaves, comes back once, or is gone (the shared game rng, as before).
import { randInt } from '../rng.js';
import { stream } from '../core/rng.js';
import { log, addItem, has } from './state.js';
import { hazardOn } from './hazards.js';

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

export function dogStep(state, dt, sleeping) {
  const d = state.dog;
  if (d.stage !== 'joined') return;
  d.food = clamp(d.food - 4 * dt, 0, 100);
  d.water = 80;
  if (d.food <= 0) d.health -= 1 * dt;
  else if (sleeping && !d.sick) d.health = Math.min(100, d.health + 1 * dt);
  if (d.sick) d.health -= SICK_PER_HOUR * dt;
  if (!sleeping && d.health > 0) {
    feralWarning(state, d);
    sniff(state, d, dt);
  }
  if (d.health <= 50 && d.warned < 1) {
    d.warned = 1;
    log(state, `${d.name} is weak. Feed ${d.name} and let ${d.name} rest.`, 'warn');
  }
  if (d.health <= 25 && d.warned < 2) {
    d.warned = 2;
    log(state, `${d.name} is very sick. ${d.name} needs food or medicine now.`, 'danger');
  }
  if (d.health > 60) d.warned = 0;
  if (d.health <= 0) {
    d.health = 0;
    d.stage = 'dead';
    log(state, `${d.name} lies down and does not get up again. ${d.name} is gone.`, 'danger');
    state.player.morale = Math.max(0, state.player.morale - 25);
  }
}

// ---------- deeper dog (research step 9) ----------
// Rolls use the named stream 'dog', so the shared game rng does not move.
export const SICK_PER_HOUR = 0.25; // about 6 health a day while sick
export const FIND_BOND = 40; // the dog looks for things once the bond is this high
const FINDS = [
  ['canned_food', 3], ['jerky', 2], ['snacks', 2], ['dog_food', 1], ['rope', 1],
  ['gloves', 1], ['wool_socks', 1], ['batteries', 1], ['raw_meat', 1],
];

const able = (d) => d.stage === 'joined' && !d.sick && d.health > 50;

// The dog hears and smells a loose pack long before you see it.
export function dogWarns(state) {
  const d = state.dog;
  return !!d && d.stage === 'joined' && d.bond >= 30 && d.health > 25;
}

function feralWarning(state, d) {
  if (!dogWarns(state) || !hazardOn(state, 'feral_dogs')) return;
  const end = state.flags.hazards.feral_dogs;
  if (d.feralWarned === end) return;
  d.feralWarned = end;
  log(state, `${d.name} stops and growls low at the street ahead. Loose dogs. You turn early and keep to the side streets.`, 'warn');
}

// While you are in a store or a house, the dog noses around. At most one find a visit.
function sniff(state, d, dt) {
  const loc = state.location;
  if (!able(d) || d.bond < FIND_BOND || !loc || (loc.kind !== 'place' && loc.kind !== 'house')) return;
  const key = `${loc.kind}:${loc.id}:${Math.floor(state.time / 1440)}`;
  if (d.foundAt === key) return;
  const r = stream(state, 'dog');
  if (r() >= 0.12 * (d.bond / 100) * dt) return;
  d.foundAt = key;
  const total = FINDS.reduce((a, [, w]) => a + w, 0);
  let x = r() * total;
  const [id] = FINDS.find(([, w]) => (x -= w) < 0) || FINDS[0];
  addItem(state.carried, id, 1);
  d.finds = (d.finds || 0) + 1;
  log(state, `${d.name} digs under a shelf and comes back with something: ${id.replace(/_/g, ' ')}. Good dog.`, 'good');
}

// Sickness: bad food, cold rain, a fight. A sick dog loses health and does not
// heal in sleep; it can get well by itself after some days if fed, or at once
// with a course of antibiotics (treatDog).
export function dogSickDaily(state, day) {
  const d = state.dog;
  if (d.stage !== 'joined') return;
  const r = stream(state, 'dog');
  if (d.sick) {
    if (day - d.sick.since >= 4 && d.food >= 25 && r() < 0.4) {
      d.sick = null;
      log(state, `${d.name} eats with interest again. The sickness is over.`, 'good');
    }
    return;
  }
  const w = state.weather || {};
  let p = 0.012;
  if (d.food < 25) p += 0.03;
  if (w.low <= 35 && ['rain', 'heavy_rain', 'snow', 'ice_storm'].includes(w.type)) p += 0.015;
  if (r() < p) {
    d.sick = { since: day };
    log(state, `${d.name} will not eat this morning and lies by the door, shaking. ${d.name} is sick.`, 'warn');
  }
}

export function canTreatDog(state) {
  const d = state.dog;
  if (!d || d.stage !== 'joined') return 'No dog';
  if (!d.sick) return `${d.name} is not sick`;
  if (!has(state, 'antibiotics')) return 'You need antibiotics';
  return null;
}

export function treatDog(state) {
  const why = canTreatDog(state);
  if (why) { log(state, why + '.'); return false; }
  const d = state.dog;
  const bag = (state.carried.antibiotics || 0) > 0 ? state.carried : state.home.storage;
  addItem(bag, 'antibiotics', -1);
  d.sick = null;
  d.health = Math.min(100, d.health + 10);
  log(state, `You push the pills into a bit of food. ${d.name} swallows them. By evening ${d.name} looks better.`, 'good');
  return true;
}

export function dogBondDaily(state) {
  const d = state.dog;
  if (d.stage !== 'joined') return;
  if (d.food >= 25) d.bond += 3;
  else d.bond -= 10;
  d.bond = clamp(d.bond, 0, 100);
}

export function dogDaily(state, day) {
  const d = state.dog;
  const lastFed = d.feedDays.length ? d.feedDays[d.feedDays.length - 1] : null;
  if (d.stage === 'none' && day >= d.arriveDay) {
    d.stage = 'visiting';
    d.visitStart = day;
    log(state, 'A thin dog watches the house from the street. It does not come near.', 'story');
  } else if (d.stage === 'visiting') {
    const since = lastFed == null ? day - d.visitStart : day - lastFed;
    if (since > 3) {
      if (!d.revisitUsed) {
        d.stage = 'away';
        d.revisitUsed = true;
        d.revisitDay = day + randInt(state, 5, 8);
        log(state, 'The dog is not in the street today.');
      } else {
        d.stage = 'gone';
        log(state, 'The dog does not come back.');
      }
    }
  } else if (d.stage === 'away' && day >= d.revisitDay) {
    d.stage = 'visiting';
    d.visitStart = day;
    d.feedDays = [];
    log(state, 'The thin dog is back in the street. It looks at your door.', 'story');
  }
}


export const dogSystem = {
  id: 'dog',
  label: 'Dog',
  order: 1010, // right after the legacy rules: the same order as before
  version: 1,
  legacy: true, // state.dog was in saves before the engine; newGame() makes it
  owns: ['dog'],
  // Thresholds (weak, sick, death) happen inside a day; the stray's visits are days.
  catchUp: 'event',
  step: (state, dtHours, ctx) => dogStep(state, dtHours, ctx.mode === 'sleep'),
  daily: (state, day) => {
    dogBondDaily(state);
    dogDaily(state, day);
    dogSickDaily(state, day);
  },
};
