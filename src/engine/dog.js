// The dog (external review milestone 4): its own system, owns state.dog.
// Moved out of the legacy rules with the same numbers and the same order of
// random rolls (it runs right after them), so the golden replay does not change.
//
// Each step: a dog that joined gets hungry, and gets weak and sick without food.
// At 5 AM: the bond grows when the dog is fed (falls when hungry), and a stray
// visits, leaves, comes back once, or is gone (the shared game rng, as before).
import { randInt } from '../rng.js';
import { log } from './state.js';

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

export function dogStep(state, dt, sleeping) {
  const d = state.dog;
  if (d.stage !== 'joined') return;
  d.food = clamp(d.food - 4 * dt, 0, 100);
  d.water = 80;
  if (d.food <= 0) d.health -= 1 * dt;
  else if (sleeping) d.health = Math.min(100, d.health + 1 * dt);
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
  },
};
