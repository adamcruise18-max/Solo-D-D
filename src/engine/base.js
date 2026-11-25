// Home base projects: check what a project needs, and work on it.
// Parts are taken when you start a project. Then you work on it in blocks of up to 2 hours,
// so long builds (like the wood stove) take several work sessions.
import { ITEMS, itemName } from '../data/items.js';
import { PROJECTS, PROJECT_BY_ID, WINGS } from '../data/projects.js';
import { addItem, log, formatDuration } from './state.js';
import { advanceTime } from './tick.js';

export const WORK_BLOCK_H = 2;
export const MIN_WORK_ENERGY = 15;

function base(state) {
  const h = state.home;
  if (!h.projects) h.projects = {};
  if (!h.work) h.work = {};
  return h;
}

export function built(state, id) {
  return !!(state.home.projects && state.home.projects[id]);
}

export function builtCount(state) {
  return PROJECTS.filter((p) => built(state, p.id)).length;
}

function haveQty(state, id) {
  return (state.home.storage[id] || 0) + (state.carried[id] || 0);
}

// Status of one project, for the screen and for the rules.
export function projectStatus(state, proj) {
  const h = base(state);
  const started = h.work[proj.id] != null;
  const doneH = h.work[proj.id] || 0;
  const parts = Object.entries(proj.needs).map(([id, need]) => ({ id, need, have: haveQty(state, id) }));
  const tools = (proj.tools || []).map((id) => ({ id, have: haveQty(state, id) > 0 }));
  const missingReq = (proj.requires || []).filter((r) => !built(state, r));
  const partsOk = started || parts.every((x) => x.have >= x.need);
  const toolsOk = tools.every((t) => t.have);
  let blocked = null;
  if (built(state, proj.id)) blocked = 'Built';
  else if (missingReq.length) blocked = `Build first: ${missingReq.map((r) => PROJECT_BY_ID[r].name).join(', ')}`;
  else if (!partsOk) blocked = 'Missing parts';
  else if (!toolsOk) blocked = `Needs ${tools.filter((t) => !t.have).map((t) => itemName(t.id).toLowerCase()).join(', ')}`;
  else if (state.location.kind !== 'home') blocked = 'Go home to work on it';
  else if (state.player.energy < MIN_WORK_ENERGY) blocked = `Too tired (Energy ${MIN_WORK_ENERGY}+)`;
  return {
    built: built(state, proj.id), started, doneH, leftH: Math.max(0, proj.hours - doneH),
    parts, tools, missingReq, blocked, canWork: !blocked,
  };
}

export function wingSummary(state) {
  return Object.entries(WINGS).map(([id, w]) => {
    const list = PROJECTS.filter((p) => p.wing === id);
    return { id, ...w, projects: list, built: list.filter((p) => built(state, p.id)).length };
  });
}

// Take parts: home storage first, then what you carry.
function takeParts(state, needs) {
  for (const [id, need] of Object.entries(needs)) {
    let left = need;
    for (const bag of [state.home.storage, state.carried]) {
      const take = Math.min(left, bag[id] || 0);
      if (take > 0) addItem(bag, id, -take);
      left -= take;
    }
  }
}

export function workOnProject(state, id) {
  const proj = PROJECT_BY_ID[id];
  if (!proj) return;
  const h = base(state);
  const st = projectStatus(state, proj);
  if (!st.canWork) {
    log(state, `You cannot work on "${proj.name}": ${st.blocked}.`, 'warn');
    return;
  }
  if (!st.started) {
    takeParts(state, proj.needs);
    h.work[id] = 0;
    log(state, `You start a project: ${proj.name}. You lay out the parts.`);
  }
  const hours = Math.min(WORK_BLOCK_H, st.leftH);
  advanceTime(state, Math.round(hours * 60), 'heavy');
  if (state.dead) return;
  h.work[id] += hours;
  if (h.work[id] >= proj.hours - 1e-9) {
    delete h.work[id];
    h.projects[id] = true;
    finishProject(state, proj);
  } else {
    log(state, `You work on ${proj.name.toLowerCase()} for ${formatDuration(hours * 60)}. ${formatDuration((proj.hours - h.work[id]) * 60)} of work left.`);
  }
}

function finishProject(state, proj) {
  const h = state.home;
  const p = state.player;
  if (proj.id === 'second_battery') h.batteryMax = 27;
  let morale = 5;
  if (proj.id === 'sealed_store') morale += 5;
  p.morale = Math.min(100, p.morale + morale);
  log(state, `Project done: ${proj.name}. ${proj.effect}`, 'good');
}

// Small helpers the other rules use.
export const fireHoursPerBundle = (state) => (built(state, 'wood_stove') ? 4 : 2);
export const fireHeat = (state) => (built(state, 'wood_stove') ? 30 : 20);
export const heatLossFactor = (state) => (built(state, 'insulate_living') ? 0.5 : 1);
export const painPillHours = (state) => (built(state, 'med_cabinet') ? 9 : 6);

// The water chain runs by itself once the barrels and the filter station are built:
// each day the station filters rain water into the clean-water tank, up to its size.
export const AUTO_FILTER_GAL_PER_DAY = 12;
export const SAFE_TANK_GAL = 40;
export function autoFilterToday(state) {
  const h = state.home;
  if (!built(state, 'rain_barrels') || !built(state, 'filter_station')) return 0;
  return Math.max(0, Math.min(AUTO_FILTER_GAL_PER_DAY, h.rawGal, SAFE_TANK_GAL - h.safeGal));
}
export function runAutoFilter(state) {
  const g = autoFilterToday(state);
  if (g <= 0) return 0;
  state.home.rawGal -= g;
  state.home.safeGal += g;
  return g;
}

export function foodItemsStored(state) {
  return Object.entries(state.home.storage)
    .filter(([id]) => ITEMS[id] && ITEMS[id].kind === 'food')
    .reduce((n, [, q]) => n + q, 0);
}
