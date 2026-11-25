// Hunting and fishing (Adam's decision: skills the player learns).
// Engine side: spots (src/data/wild.js), odds, d20 checks, time cost, gear, cleaning,
// fresh meat and fish (food.js spoilage), skill XP by use (skills.js daily cap).
// The builder adds the buttons, the map pins and the models.
//
// state.wild = { scared: { [spotId]: until }, snares: { [spotId]: setTime },
//                arrows: arrows left in the open set, rounds: rounds left in the open box }
// It is player-action state (no system owns it), like state.fresh.
// Rolls use the shared game rng, as the other player actions do.
import { SPOTS, GAME, GEAR } from '../data/wild.js';
import { chance, randInt } from '../rng.js';
import { log, addItem, has, calendar } from './state.js';
import { advanceTime } from './tick.js';
import { check, odds } from './checks.js';
import { sunFor, isNight } from './world.js';
import { animalCover } from './season.js';
import { practice, skillLevel } from './skills.js';
import { addFresh } from './food.js';
import { travel, straightMiles } from './travel.js';

export const FISH_MINUTES = 120;
export const HUNT_MINUTES = 180;
export const SNARE_SET_MINUTES = 30;
export const SNARE_CHECK_MINUTES = 20;
export const SCARED_HOURS = 24; // a rifle shot scares the game at that spot for a day
export const FISH_DC = 12;
// Spot pressure (research): each trip fishes a spot down; it recovers in 2 to 3 weeks.
export const PRESSURE_PER_TRIP = 1;
export const PRESSURE_RECOVER_PER_DAY = 0.25; // 4 trips in a week take about 16 days to recover
export const PRESSURE_CATCH = 0.15; // catch drops 15% per pressure point
export const WINTER_CATCH = 0.5; // December to February: fish are slow and deep
const FISH_CLEAN = 5; // minutes a fish with a knife

function wildOf(state) {
  if (!state.wild || typeof state.wild !== 'object') state.wild = {};
  const w = state.wild;
  w.scared ||= {};
  w.snares ||= {};
  w.pressure ||= {};
  return w;
}

const bags = (state) => [state.carried, state.home.storage];
const hasAll = (state, ids) => ids.every((id) => has(state, id));
const hasKnife = (state) => GEAR.clean.some((id) => has(state, id));
function useOne(state, id) {
  const bag = (state.carried[id] || 0) > 0 ? state.carried : state.home.storage;
  addItem(bag, id, -1);
}

// Within 1.5 hours of sunrise or sunset: fish bite and deer move.
export function dawnOrDusk(t) {
  const m = ((t % 1440) + 1440) % 1440;
  const s = sunFor(t);
  return Math.abs(m - s.rise) <= 90 || Math.abs(m - s.set) <= 90;
}

// ---------- spots ----------
export function spotsNear(state, kind = null) {
  return Object.entries(SPOTS)
    .filter(([, s]) => !kind || s.kind === kind)
    .map(([id, s]) => ({ id, ...s, miles: straightMiles(state.pos, s) }))
    .sort((a, b) => a.miles - b.miles);
}

export function spotHere(state) {
  const loc = state.location;
  return loc && loc.kind === 'wild' ? { id: loc.id, ...SPOTS[loc.id] } : null;
}

// What the water looks like on arrival: from the weather and the month.
export function waterText(state) {
  const w = state.weather || {};
  const month = new Date(Date.UTC(2026, 10, 24) + Math.floor(state.time / 1440) * 86400000).getUTCMonth();
  if (w.type === 'rain' || w.type === 'heavy_rain' || w.type === 'windstorm') return 'The water is high and brown with rain.';
  if (w.type === 'snow' || w.low <= 28) return 'Thin ice at the edges; the water is slow and dark.';
  if (month >= 6 && month <= 8) return 'The water is low and clear. Fish hold in the shade.';
  if (month >= 3 && month <= 5) return 'The water runs fast and green with spring melt.';
  return 'The water runs cold and grey-green.';
}

// Walk to a spot. The location is { kind: 'wild', id } (outside: tick.js environment).
export function goToSpot(state, id) {
  const s = SPOTS[id];
  if (!s) { log(state, 'No such place.'); return false; }
  if (!travel(state, s, s.name)) return false;
  state.location = { kind: 'wild', id };
  log(state, `You reach ${s.name}. ${s.kind === 'fish' ? waterText(state) : 'Brush, tall grass and the edge of the trees.'}`, 'travel');
  return true;
}

// ---------- fishing ----------
// Pressure now at a spot: { [spotId]: { p, t } } recovers with time since the last trip.
export function spotPressure(state, id, t = state.time) {
  const e = state.wild?.pressure?.[id];
  if (!e) return 0;
  return Math.max(0, e.p - ((t - e.t) / 1440) * PRESSURE_RECOVER_PER_DAY);
}

// Share of a normal catch: pressure and winter.
export function catchFactor(state, id) {
  const month = calendar(state.time).month;
  const season = [11, 0, 1].includes(month) ? WINTER_CATCH : 1;
  return Math.max(0.2, 1 - PRESSURE_CATCH * spotPressure(state, id)) * season;
}

export function canFish(state) {
  const s = spotHere(state);
  if (!s || s.kind !== 'fish') return 'Go to a river, creek or lake first';
  if (!GEAR.fish.some((ids) => hasAll(state, ids))) return 'You need a fishing rod, or line and hooks';
  return null;
}

function fishSetup(state) {
  const s = spotHere(state) || {};
  const month = calendar(state.time).month;
  const mods = [];
  const adv = [];
  const dis = [];
  const lvl = skillLevel(state, 'fishing');
  if (lvl) mods.push(['fishing skill', lvl]);
  if (dawnOrDusk(state.time)) mods.push(['dawn or dusk', 2]);
  const run = (s.runs || []).find((x) => x.months.includes(month)) || null;
  if (run) mods.push([`${run.fish} run`, 3]);
  if ([11, 0, 1].includes(month)) mods.push(['cold water', -2]);
  if ((s.quality ?? 1) < 0.7) mods.push(['small creek', -2]);
  if (!has(state, 'fishing_rod')) mods.push(['hand line', -1]);
  const pr = Math.round(spotPressure(state, s.id));
  if (pr >= 2) mods.push(['fished out', -Math.min(4, pr - 1)]);
  if ((state.weather?.low ?? 40) <= 30) mods.push(['frozen ground, no worms', -2]);
  return { mods, adv, dis, run, spot: s };
}

export function fishOdds(state) {
  const f = fishSetup(state);
  return odds(state, FISH_DC, f.mods, { outside: true, adv: f.adv, dis: f.dis });
}

// Two hours on the bank. Success gives 1 to 4 fish (a salmon counts as 4 fish of meat).
export function fish(state) {
  const why = canFish(state);
  if (why) { log(state, why + '.'); return { ok: false, fish: 0 }; }
  const f = fishSetup(state);
  log(state, `You fish from the bank at ${f.spot.name} for two hours.`);
  if (advanceTime(state, FISH_MINUTES, 'rest', { stopAtDanger: true }) || state.dead) return { ok: false, fish: 0, stopped: !state.dead };
  const r = check(state, 'Fishing', FISH_DC, f.mods, { outside: true, adv: f.adv, dis: f.dis });
  let n = 0;
  let what = '';
  if (r.success) {
    const k = catchFactor(state, f.spot.id);
    if (f.run && chance(state, 0.5)) { n = f.run.n; what = f.run.fish; }
    else {
      // 1 to 3 fish by the roll, times the catch factor (at least 1 on a success).
      const base = Math.min(3, 1 + Math.max(0, Math.floor((r.total - FISH_DC) / 6)));
      n = Math.max(1, Math.floor(base * k + randInt(state, 0, 99) / 100));
      what = f.spot.fish[randInt(state, 0, f.spot.fish.length - 1)];
    }
    const clean = (hasKnife(state) ? FISH_CLEAN : 15) * n;
    advanceTime(state, clean, 'rest');
    addFresh(state, bags(state), 'fresh_fish', n, 0);
    addItem(state.carried, 'fresh_fish', n);
    log(state, what === f.run?.fish
      ? `A ${what}! It fights for a long time. You land it and clean it on the bank (${clean} min).`
      : `You catch ${n} ${what}. You clean ${n > 1 ? 'them' : 'it'} on the bank (${clean} min${hasKnife(state) ? '' : ', slow with no knife'}).`, 'good');
  } else log(state, 'Nothing bites. You wind in the line.');
  const w = wildOf(state);
  w.pressure[f.spot.id] = { p: spotPressure(state, f.spot.id) + PRESSURE_PER_TRIP, t: state.time };
  practice(state, 'fishing', r.success ? 4 : 2);
  return { ok: r.success, fish: n, what };
}

// ---------- hunting ----------
// Arrows and rounds left: the open set or box (state.wild) plus the closed ones.
const count = (state, id) => (state.carried[id] || 0) + (state.home.storage[id] || 0);
export function arrowsLeft(state) { return (state.wild?.arrows || 0) + 6 * count(state, 'arrows'); }
export function roundsLeft(state) { return (state.wild?.rounds || 0) + 20 * count(state, 'rifle_rounds'); }
const canBow = (state) => has(state, 'bow') && arrowsLeft(state) > 0;
const canRifle = (state) => has(state, 'rifle') && roundsLeft(state) > 0;

export function huntMethods(state) {
  const m = [];
  if (canBow(state)) m.push('bow');
  if (canRifle(state)) m.push('rifle');
  return m;
}

export function canHunt(state, method) {
  const s = spotHere(state);
  if (!s || s.kind !== 'hunt') return 'Go to a park, wetland or the edge of the woods first';
  if (method === 'bow' && !canBow(state)) return 'You need a bow and arrows';
  if (method === 'rifle' && !canRifle(state)) return 'You need a rifle and rounds';
  if (method !== 'bow' && method !== 'rifle') return 'Hunt with a bow or a rifle';
  return null;
}

// Which animals are about at this spot now, with weights.
export function gameHere(state) {
  const s = spotHere(state);
  if (!s || !s.game) return [];
  const month = calendar(state.time).month;
  return s.game
    .filter((id) => !GAME[id].months || GAME[id].months.includes(month))
    .map((id) => ({ id, ...GAME[id], w: GAME[id].w * (GAME[id].dawnDusk && dawnOrDusk(state.time) ? 2 : 1) }));
}

export function isScared(state, spotId = state.location?.id) {
  const until = state.wild?.scared?.[spotId];
  return until != null && state.time < until;
}

// Chance to find game in a hunt: more cover, more animals; dawn and dusk best;
// night and scared game worst.
export function findChance(state) {
  let p = 0.5 + animalCover(state.time) * 0.3;
  if (dawnOrDusk(state.time)) p += 0.15;
  if (isNight(state.time)) p *= 0.3;
  if (isScared(state)) p *= 0.4;
  if (!gameHere(state).length) p = 0;
  return Math.min(0.95, p);
}

function shotSetup(state, method, g) {
  const mods = [];
  const adv = [];
  const dis = [];
  const lvl = skillLevel(state, 'hunting');
  if (lvl) mods.push(['hunting skill', lvl]);
  if (method === 'rifle') mods.push(['rifle', 3]);
  if (animalCover(state.time) > 0.6) mods.push(['thick brush', -1]);
  if (g?.dawnDusk && dawnOrDusk(state.time)) mods.push(['deer move at dawn', 1]);
  if (isScared(state)) dis.push('game is wary');
  return { mods, adv, dis };
}

// Odds for the button: the chance to find game, then the shot (vs a rabbit, the easiest).
export function huntOdds(state, method) {
  const list = gameHere(state);
  const g = list.length ? list.reduce((a, b) => (b.w > a.w ? b : a)) : GAME.rabbit;
  const s = shotSetup(state, method, g);
  return { find: Math.round(findChance(state) * 100), animal: g.name, shot: odds(state, g.dc, s.mods, { outside: true, adv: s.adv, dis: s.dis }) };
}

function spendShot(state, method) {
  const w = wildOf(state);
  if (method === 'rifle') {
    if (!(w.rounds > 0)) { useOne(state, 'rifle_rounds'); w.rounds = 20; }
    w.rounds--;
    w.scared[state.location.id] = state.time + SCARED_HOURS * 60;
  }
}

function loseArrow(state) {
  const w = wildOf(state);
  if (!(w.arrows > 0)) { useOne(state, 'arrows'); w.arrows = 6; }
  w.arrows--;
}

// Clean the animal and take the meat. A knife is needed for a clean job; with no
// knife you take much less, slowly.
function takeMeat(state, g, spoil = 0) {
  const knife = hasKnife(state);
  const lb = knife ? g.meat : Math.max(1, Math.round(g.meat * 0.4));
  const min = g.clean * (knife ? 1 : 2);
  advanceTime(state, min, 'work');
  addFresh(state, bags(state), 'raw_meat', lb, spoil);
  addItem(state.carried, 'raw_meat', lb);
  log(state, `You clean the ${g.name} (${min} min${knife ? '' : ', hard work with no knife'}) and take ${lb} lb of meat.${lb >= 20 ? ' It is a heavy load.' : ''}`, 'good');
  return lb;
}

// Three hours in the brush. Find game (chance), then one shot (d20).
export function hunt(state, method) {
  const why = canHunt(state, method);
  if (why) { log(state, why + '.'); return { ok: false }; }
  const s = spotHere(state);
  log(state, `You move slowly through ${s.name} with the ${method}, and wait.`);
  const findP = findChance(state);
  if (advanceTime(state, HUNT_MINUTES, 'work', { stopAtDanger: true }) || state.dead) return { ok: false, stopped: !state.dead };
  const list = gameHere(state);
  if (!list.length || !chance(state, findP)) {
    log(state, isScared(state) ? 'Nothing moves. The game here is still wary after the shot.' : 'You see tracks and droppings, but no animal comes in range.');
    practice(state, 'hunting', 1);
    return { ok: false, seen: null };
  }
  const total = list.reduce((a, b) => a + b.w, 0);
  let x = (randInt(state, 0, 999) / 1000) * total;
  const g = list.find((e) => (x -= e.w) < 0) || list[0];
  const sh = shotSetup(state, method, g);
  spendShot(state, method);
  const r = check(state, `Shoot the ${g.name} (${method})`, g.dc, sh.mods, { outside: true, adv: sh.adv, dis: sh.dis });
  if (method === 'rifle') log(state, 'The shot cracks across the open ground. Every animal near here will be wary for a day.', 'warn');
  practice(state, 'hunting', r.success ? 5 : 3);
  if (!r.success) {
    if (method === 'bow' && chance(state, 0.4)) { loseArrow(state); log(state, `You miss. The ${g.name} is gone, and so is the arrow.`); }
    else log(state, `You miss. The ${g.name} is gone.`);
    return { ok: false, seen: g.id };
  }
  const lb = takeMeat(state, g);
  return { ok: true, seen: g.id, meat: lb };
}

// ---------- snares ----------
export function canSetSnare(state) {
  const s = spotHere(state);
  if (!s || s.kind !== 'hunt' || !s.game.includes('rabbit')) return 'Snares need a place with rabbits';
  if (!has(state, 'snare_wire')) return 'You need snare wire';
  if (wildOf(state).snares[s.id] != null) return 'Your snares are already set here';
  return null;
}

export function setSnare(state) {
  const why = canSetSnare(state);
  if (why) { log(state, why + '.'); return false; }
  advanceTime(state, SNARE_SET_MINUTES, 'work');
  wildOf(state).snares[state.location.id] = state.time;
  log(state, 'You set a line of wire snares on the rabbit runs at the edge of the brush. Come back tomorrow.');
  practice(state, 'hunting', 1);
  return true;
}

// Check after 12 hours or more. Each full day gives a roll (up to 3);
// a rabbit left long in the snare is less fresh.
export function checkSnare(state) {
  const s = spotHere(state);
  const w = wildOf(state);
  const set = s ? w.snares[s.id] : null;
  if (set == null) { log(state, 'You have no snares here.'); return { ok: false }; }
  const hours = (state.time - set) / 60;
  if (hours < 12) { log(state, 'Too soon. Give the snares a night.'); return { ok: false }; }
  advanceTime(state, SNARE_CHECK_MINUTES, 'work');
  const days = Math.min(3, Math.max(1, Math.floor(hours / 24)));
  const p = Math.min(0.8, 0.3 + 0.08 * skillLevel(state, 'hunting') + animalCover(state.time) * 0.2);
  let caught = 0;
  for (let i = 0; i < days; i++) if (chance(state, p)) caught++;
  w.snares[s.id] = state.time; // reset: they stay set
  practice(state, 'hunting', caught ? 3 : 1);
  if (!caught) { log(state, 'The snares are empty. One is pulled loose; you set it again.'); return { ok: false, rabbits: 0 }; }
  log(state, `${caught} rabbit${caught > 1 ? 's' : ''} in the snares.`, 'good');
  let lb = 0;
  for (let i = 0; i < caught; i++) lb += takeMeat(state, GAME.rabbit, Math.min(0.6, (hours / 24) * 0.15));
  return { ok: true, rabbits: caught, meat: lb };
}

export function takeUpSnare(state) {
  const s = spotHere(state);
  const w = wildOf(state);
  if (!s || w.snares[s.id] == null) return false;
  delete w.snares[s.id];
  log(state, 'You take up your snares.');
  return true;
}
