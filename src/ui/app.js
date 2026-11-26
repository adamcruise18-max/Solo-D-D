// Screen: side panel, buttons, popups and dialogs.
import { ITEMS, itemName } from '../data/items.js';
import { CATEGORIES } from '../data/places.js';
import {
  newGame, formatClock, formatDate, formatDuration, dayIndex, HOME, homeOf, randomStartPoint, MAP_RADIUS_MILES, has, hasLight, log,
} from '../engine/state.js';
import { airTemp, isNight, sunFor, weatherInfo } from '../engine/world.js';
import { feltTemp, injuryName, environment } from '../engine/tick.js';
import { forceOpts, listActions, itemUses, hereBag, locationLabel, searchMinutes, zonesDoneList, quickChoice, buildingItems, openedContainers } from '../engine/actions.js';
import { buildInterior, buildHome } from '../engine/interior.js';
import { odds, oddsText } from '../engine/checks.js';
import { allSkills, SKILLS, noticeOf, forceBonus } from '../engine/skills.js';
import { SLOTS, SLOT_NAMES, normalizeWorn, wornText } from '../engine/clothes.js';
import { stageLabel } from '../engine/food.js';
import { JOBS, TRAITS, FREE_POINTS, pointsLeft, backgroundText, validTraits } from '../engine/background.js';
import { statStage, needWarnings, risks } from '../engine/status.js';
import { stockLine, powerSummary } from '../engine/stock.js';
import { estimateTrip, describeTrip, straightMiles } from '../engine/travel.js';
import { sceneEnv } from '../engine/scene.js';
import { QUALITY_CHOICES, QUALITY_LABELS, getQualityChoice, setQualityChoice } from './quality.js';
import { weatherOutlook, actionTiming, tripPreview } from '../engine/preview.js';
import { placeState } from '../engine/loot.js';
import { perform } from '../engine/game.js';
import { setPlaces, getPlace, allPlaces } from '../engine/placesdb.js';
import { saveGame, loadGame, clearGame, parseSave, recordRun, bestRuns, loadLegacy, saveLegacy } from '../engine/save.js';
import { LEGACY, MAX_SLOTS, earnedIds, validLegacy } from '../engine/legacy.js';
import { createMap } from './map.js';
import { tilesFor, layoutGrid, gridHtml, setGridHandlers, savedPos, setPos, fitsAt } from './grid.js';
import { GRID_COLS, packRows, sizeOf } from '../data/gridsize.js';
import { roomFor, packUse, gridBag, packSize, wearsPack } from '../engine/packgrid.js';
import { createFx } from './fx.js';
import { GOALS, GOAL_KINDS } from '../data/legacy-goals.js';
import { ensureGoals, boardOpen, canChange, pickGoal, dropGoal, checkGoals, goalProgress, epilogue, MAX_GOALS, BOARD_OPENS_DAY, CHANGE_GAP_DAYS } from '../engine/goals.js';
import { PROJECTS } from '../data/projects.js';
import { diagnostics, setDeepActivity, activityText } from '../engine/diagnostics.js';
import { homeHeat } from '../engine/home.js';
import { enterStreet, streetMove, enterPlaceFromStreet, metersBetween } from '../engine/streetwalk.js';
import { cellKeyAt, WORLD_GRID } from '../engine/worldgrid.js';
import { gardenInfo, canPlant } from '../engine/garden.js';
import { CROPS } from '../data/crops.js';
import { SALVAGE } from '../data/salvage.js';
import { SPOTS, GAME } from '../data/wild.js';
import { gameHere } from '../engine/wild.js';
import { seasonOf, SEASONS } from '../engine/season.js';
import { projectStatus, wingSummary, builtCount, WORK_BLOCK_H, built, autoFilterToday, SAFE_TANK_GAL, AUTO_FILTER_GAL_PER_DAY } from '../engine/base.js';

let state = null;
let mapApi = null;
let popup = null;
let fx = null;
const openWings = new Set();
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const STAT_INFO = {
  food: { label: 'Food' },
  water: { label: 'Water' },
  warmth: { label: 'Warmth' },
  energy: { label: 'Energy' },
  health: { label: 'Health' },
  morale: { label: 'Morale' },
};

function statWord(key, v) {
  return statStage(key, v).word;
}

// One stat row: bar, value, stage word, and the stage effect (only past the first limit).
function statRow(k, p, withEffect) {
  const v = Math.round(p[k]);
  const max = k === 'energy' ? p.energyMax : 100;
  const st = statStage(k, p[k]);
  const cls = ['ok', 'warn', 'bad', 'bad'][st.stage];
  return `<div class="stat ${cls}"><span class="sl">${STAT_INFO[k].label}</span>
      <span class="bar"><i style="width:${v}%"></i>${max < 100 ? `<s style="left:${max}%"></s>` : ''}</span>
      <span class="sv">${v}</span><span class="sw">${st.word}</span>${withEffect && st.effect ? `<span class="se">${esc(st.effect)}</span>` : ''}</div>`;
}

function riskChips() {
  return risks(state).map((r) => ['risk', r.text]);
}

// ---------- start ----------
export async function start() {
  setPlaces(window.LL_PLACES || []);
  state = loadGame();
  bindEvents();
  initGridHandlers();
  fx = createFx($('#mapwrap'));
  $('#legend').innerHTML = Object.entries(CATEGORIES).filter(([k]) => k !== 'house')
    .map(([, c]) => `<span><i style="background:${c.color}"></i>${c.label}</span>`).join('')
    + '<span><i class="part"></i>Visited: more to search or items left</span><span><i class="done"></i>All searched</span>'
    + '<span><i style="background:#4aa3d8"></i>Fishing spot</span><span><i style="background:#7fae5a"></i>Hunting spot</span>'
    + '<span><i class="edge"></i>15-mile edge</span>';
  try {
    mapApi = await createMap($('#map'), { places: allPlaces(), onPlaceClick: showPlacePopup, onCarClick: showCarPopup, center: state?.pos });
    window.__llMap = mapApi.map; // for tests
    const showCoords = () => {
      const c = mapApi.map.getCenter();
      $('#coords').textContent = `${Math.abs(c.lat).toFixed(4)}°${c.lat >= 0 ? 'N' : 'S'}  ${Math.abs(c.lng).toFixed(4)}°${c.lng >= 0 ? 'E' : 'W'}  ·  Z${mapApi.map.getZoom().toFixed(1)}`;
    };
    mapApi.map.on('move', showCoords);
    showCoords();
  } catch (e) {
    console.error(e);
    $('#map').innerHTML = '<div class="map-error">The map could not load. You can still play from the panel.</div>';
  }
  if (!state) showIntro();
  else render();
}

function commit(focus) {
  saveGame(state);
  render();
  if (focus && mapApi) mapApi.flyTo(state.pos);
  if (state.dead) showDeath();
  else if (state.pendingPrompt === 'name_dog') showNameDog();
}

function act(kind, a, b, c) {
  const wasDead = !!state.dead;
  perform(state, kind, a, b, c);
  afterAction();
  if (!wasDead && state.dead) recordRun(state);
  commit();
}

// ---------- render ----------
function render() {
  if (!state) return;
  renderHeader();
  renderStats();
  renderLocation();
  renderItems();
  renderHome();
  renderDog();
  renderLog();
  renderHud();
  if (mapApi) mapApi.update(state, allPlaces());
}

// The small readout at the top of the map: day, time, weather, temperature.
function renderHud() {
  const t = state.time;
  const night = isNight(t);
  const w = state.weather;
  const p = state.player;
  const low = needWarnings(state).map((n) => n.word);
  const rk = risks(state).length;
  $('#hud').innerHTML = `
    <span class="h-day">DAY ${dayIndex(t) + 1}</span>
    <span class="h-time">${formatClock(t)}</span>
    <span class="h-season">${SEASONS[seasonOf(t)].label}</span>
    <span class="h-wx">${night ? '☾' : '☀'} ${esc(weatherInfo(state).label)}</span>
    <span class="h-temp">${Math.round(airTemp(state, t))}°F</span>
    ${low.length ? `<span class="h-alert">⚠ ${esc(low.join(' · '))}</span>` : ''}${rk ? `<span class="h-risk">${rk} risk${rk > 1 ? 's' : ''}</span>` : ''}`;
  $('#hud').hidden = false;
  if (fx) fx.update({ weather: w.type, night, windMph: w.wind, season: seasonOf(t) });
}

function renderHeader() {
  const t = state.time;
  const sun = sunFor(t);
  const night = isNight(t);
  const air = Math.round(airTemp(state, t));
  const w = state.weather;
  const sunText = night ? `Sunrise ${formatClock(dayIndex(t) * 1440 + sun.rise)}` : `Sunset ${formatClock(dayIndex(t) * 1440 + sun.set)}`;
  $('#clock').innerHTML = `
    <div class="eyebrow">Status</div>
    <div class="day">Day ${dayIndex(t) + 1}</div>
    <div class="when">${formatDate(t)} · <b>${formatClock(t)}</b> ${night ? '<span class="badge night">Night</span>' : '<span class="badge day">Day</span>'}</div>
    <div class="wx">${SEASONS[seasonOf(t)].label} · ${esc(weatherInfo(state).label)} · ${air}°F outside · wind ${w.wind} mph · ${sunText}</div>
    ${outlookHtml()}`;
}

// Weather effects now and the next change (src/engine/preview.js: same rules as the game).
function outlookHtml() {
  const o = weatherOutlook(state);
  const fx = o.effects.map((e) => `<li class="wx-${e.level}">${esc(e.text)}</li>`).join('');
  return `<div class="wx-next">Weather changes at ${o.next.atText} (in ${formatDuration(o.next.inMinutes)}). Low tonight ${o.next.lowF}°F.</div>${fx ? `<ul class="wx-fx">${fx}</ul>` : ''}`;
}

// A walk: time, energy, finish time, the 5 AM change and the weather on the way.
// Reasons not to go on a long trip now (over 2 miles, or arriving in the dark). Shown in the popup above Walk here.
function tripRisks(t) {
  const p = state.player;
  if (!(t.miles > 2 || t.darkOnArrival)) return [];
  const water = (state.carried.water_bottle || 0);
  return [
    p.health < 50 && 'your health is low',
    p.injuries.some((i) => !i.bandaged) && 'a wound is not bandaged',
    p.illness?.infection && 'an infection is not treated',
    water < 0.5 && 'you carry less than 2 qt of water',
    t.darkOnArrival && !((state.carried.flashlight || 0) > 0 && p.lightHours > 0) && 'it will be dark and you have no light',
    p.energy < 30 && 'you are very tired',
    p.warmth < 40 && 'you are cold',
  ].filter(Boolean);
}

function tripHtml(dest) {
  const t = tripPreview(state, dest);
  const risks = tripRisks(t);
  const fx = t.weather.effects.filter((e) => e.level !== 'ok').map((e) => esc(e.text)).join('<br>');
  return `${risks.length ? `<p class="warn-line">⚠ Think first: ${esc(risks.join('; '))}.</p>` : ''}<p>${describeTrip(state, t)}<br>You arrive at ${t.endText}${t.darkOnArrival ? ' (dark)' : ''}.${t.dayStartText ? `<br><small>${esc(t.dayStartText)}</small>` : ''}</p>`
    + `${t.slowBecause.length ? `<p><small>Slow: ${t.slowBecause.join(', ')}</small></p>` : ''}${fx ? `<p class="wx-trip"><small>${fx}</small></p>` : ''}`;
}

// Skills: level 0..5, a bar to the next level, and what the skill does.
// Clothes by layer, with the warmth each gives, the wetness and the "feels like" number.
// Fresh, Stale or Spoiled, for food that spoils.
function freshTag(id) {
  const l = stageLabel(state, id);
  return l ? ` <small class="fresh-${l.toLowerCase()}">${l}</small>` : '';
}

function clothesHtml() {
  const p = state.player;
  normalizeWorn(p);
  const rows = SLOTS.map((sl) => {
    const id = p.worn[sl];
    const it = id && ITEMS[id];
    const tags = it ? [`+${it.warmth || 0}°F`, it.wind ? `wind ${Math.round(it.wind * 100)}%` : '', it.waterproof ? 'waterproof' : '', it.wetWarm ? 'warm when wet' : 'cold when wet'].filter(Boolean).join(' · ') : '';
    return `<li><span>${esc(SLOT_NAMES[sl])}</span><span class="q">${it ? esc(it.name) : '—'}</span><span class="b">${it ? `<small>${esc(tags)}</small> <button class="small" data-use="${sl}" data-verb="take_off">Take off</button>` : ''}</span></li>`;
  }).join('');
  const out = environment(state, 'walk');
  const feltOut = Math.round(feltTemp(state, 'walk', out));
  return `<h5>Clothes</h5><ul class="inv wear">${rows}</ul>
    <p class="hint">Feels like ${Math.round(feltTemp(state, 'rest'))}°F here · ${feltOut}°F outside now · Wet ${Math.round(p.wetness || 0)}%${p.wet ? ' (wet through: cotton and down lose heat)' : ''}</p>`;
}

let skillsOpen = false;
let clothesOpen = false;
let goalsOpen = false;

// ---------- legacy board ----------
// After each action: mark goal steps that came true; announce the board once it opens.
function afterAction() {
  if (!state || state.dead) return;
  if (boardOpen(state) && !state.player.goals?.announced) {
    ensureGoals(state).announced = true;
    log(state, 'A week alive. You start to think about more than the next meal: what could you keep, fix or leave behind? (Legacy, under your skills.)', 'hint');
  }
  checkGoals(state);
}

function goalsHtml() {
  if (!boardOpen(state)) return '';
  const g = ensureGoals(state);
  const rows = g.picked.map((id) => {
    const pr = goalProgress(state, id);
    const steps = pr.steps.map((st) => `<li class="${st.done ? 'done' : ''}">${st.done ? '✓' : '○'} ${esc(st.text)}</li>`).join('');
    return `<div class="goal"><div class="goal-h"><b>${esc(pr.goal.title)}</b><span class="goal-k">${esc(GOAL_KINDS[pr.goal.kind].label)}</span><span class="goal-n">${pr.done} / ${pr.total}</span>
      <button class="link goal-drop" data-goaldrop="${id}" ${canChange(state) ? '' : 'disabled'} title="${canChange(state) ? 'Put this goal aside (steps done are kept)' : `You can change a goal once per ${CHANGE_GAP_DAYS} days`}">Put aside</button></div><ul class="goal-steps">${steps}</ul></div>`;
  }).join('');
  const free = MAX_GOALS - g.picked.length;
  const choose = free > 0 ? `<button data-goalboard="1">Choose a goal (${free} free)</button>` : '';
  const empty = g.picked.length ? '' : '<p class="hint">Choose what the last person keeps, fixes, records or leaves behind. Each step done lifts your morale a little.</p>';
  // Until you pick your first goal, the section is open and has a badge, so the new board is not missed.
  const fresh = !g.picked.length;
  return `<details class="goals"${goalsOpen || fresh ? ' open' : ''}><summary>Legacy${fresh ? ' <span class="badge-new">New</span>' : ''}</summary>${empty}${rows}${choose}</details>`;
}

function showGoalBoard() {
  const g = ensureGoals(state);
  const groups = Object.entries(GOAL_KINDS).map(([kind, k]) => {
    const items = GOALS.filter((x) => x.kind === kind).map((x) => {
      const on = g.picked.includes(x.id);
      const pr = goalProgress(state, x.id);
      return `<div class="gb-goal"><div><b>${esc(x.title)}</b> <span class="hint">${pr.total} steps${pr.done ? `, ${pr.done} done` : ''}</span><p class="hint">${esc(x.why)}</p></div>
        <button data-goalpick="${x.id}" ${on || g.picked.length >= MAX_GOALS ? 'disabled' : ''}>${on ? 'Chosen' : 'Choose'}</button></div>`;
    }).join('');
    return `<h4>${esc(k.label)} <span class="hint">${esc(k.hint)}</span></h4>${items}`;
  }).join('');
  modal(`<h3>Legacy</h3><p class="hint">Work on up to ${MAX_GOALS} goals. They give morale, not power. You can put a goal aside once per ${CHANGE_GAP_DAYS} days; steps done are kept.</p>
    <div class="gb">${groups}</div><div class="col"><button class="link" id="cancel">Close</button></div>`, (m) => {
    m.querySelector('#cancel').addEventListener('click', closeModal);
    m.querySelectorAll('[data-goalpick]').forEach((b) => b.addEventListener('click', () => {
      const why = pickGoal(state, b.dataset.goalpick);
      if (why) { alert(why); return; }
      goalsOpen = true;
      closeModal();
      commit();
    }));
  });
}
document.addEventListener('toggle', (e) => {
  if (!e.target.classList) return;
  if (e.target.classList.contains('skills')) skillsOpen = e.target.open;
  if (e.target.classList.contains('clothes')) clothesOpen = e.target.open;
  if (e.target.classList.contains('goals')) goalsOpen = e.target.open;
}, true);
function skillsHtml(open) {
  const rows = allSkills(state).map((k) => {
    const sk = SKILLS[k.key];
    const next = k.next == null ? 'max level' : `${k.next} xp to level ${k.level + 1}`;
    return `<div class="skill" title="${esc(`${sk.how} ${sk.perLevel}`)}"><span class="sl">${esc(k.name)}</span><span class="lv">${k.level}</span><span class="bar"><i style="width:${Math.round(k.frac * 100)}%"></i></span><span class="sn">${esc(next)}</span><span class="sh">${esc(sk.perLevel)}</span></div>`;
  }).join('');
  const read = (state.skills && state.skills.books || []).length;
  const bg = backgroundText(state);
  return `<details class="skills"${open || skillsOpen ? ' open' : ''}><summary>Skills</summary>${bg ? `<p class="hint bg-line">Before: ${esc(bg)}</p>` : ''}${rows}<p class="hint">You learn by doing. A book teaches a skill once${read ? ` (${read} read)` : ''}.</p></details>`;
}

function renderStats() {
  const p = state.player;
  const rows = Object.keys(STAT_INFO).map((k) => statRow(k, p, true)).join('');
  const chips = riskChips();
  if (p.weak) chips.push(['warn', `Weak (Energy max ${p.energyMax})`]);
  if (p.wet) chips.push(['bad', 'Wet']);
  for (const i of p.injuries) chips.push(['bad', `${injuryName(i)}${i.bandaged ? ' (bandaged)' : ''}`]);
  if (p.illness.infection) chips.push(['bad', `Infection${p.illness.infection.abxH != null ? ' (on antibiotics)' : ''}`]);
  if (p.illness.stomachH > 0) chips.push(['bad', 'Stomach bug']);
  if (p.painH > 0) chips.push(['ok', 'Pain pills']);
  if (p.warmFedH > 0) chips.push(['ok', `Warm and fed (${Math.ceil(p.warmFedH)} h)`]);
  const felt = Math.round(feltTemp(state, 'rest'));
  chips.push(['', `Feels like ${felt}°F`]);
  if ((state.carried.flashlight || 0) > 0) chips.push([p.lightHours > 0 ? '' : 'warn', `Flashlight ${p.lightHours.toFixed(1)} h`]);
  if (p.wetness >= 10) chips.push([p.wetness >= 50 ? 'bad' : 'warn', `Wet ${Math.round(p.wetness)}%`]);
  chips.push(['', `Wearing: ${wornText(p)}`]);
  $('#stats').innerHTML = '<div class="eyebrow">Vitals</div>' + rows + `<div class="chips">${chips.map(([c, t]) => `<span class="chip ${c}">${esc(t)}</span>`).join('')}</div>` + `<details class="clothes"${clothesOpen ? ' open' : ''}><summary>Clothes</summary>${clothesHtml()}</details>` + skillsHtml(false) + goalsHtml();
}

function renderLocation() {
  const loc = state.location;
  let sub = '';
  if (loc.kind === 'place') {
    const p = getPlace(loc.id);
    sub = CATEGORIES[p.cat].label;
  } else if (loc.kind === 'home') sub = 'Your house. One story, a fireplace, solar panels and a home battery.';
  else if (loc.kind === 'wild') sub = wildSub(SPOTS[loc.id]);
  else if (loc.kind === 'car') sub = 'An abandoned car at the curb. Zoom in on the map to find more.';
  else if (loc.kind === 'street') sub = 'Out on the street. Walk on in 3D, or tap a place on the map.';
  else sub = 'A house. Search it room by room.';
  if (!streetCells) loadStreetIndex().then(() => { if (state) renderLocation(); });
  const acts = listActions(state).map((a) => {
    if (a.id === 'walk_out' && !a.disabled && !streetsHere()) a = { ...a, disabled: 'No 3D streets here yet (pilot: about 2 km around your home)' };
    const dis = a.disabled ? 'disabled' : '';
    const note = a.disabled ? a.disabled : a.note || '';
    return `<button class="act${a.risk && !a.disabled ? ' risky' : ''}" data-act="${a.id}" ${dis}><span>${esc(a.label)}</span>${note ? `<small>${esc(note)}</small>` : ''}</button>`;
  }).join('');
  const hint = loc.kind !== 'house' ? '<p class="hint">Tap a dot on the map to walk to a real place.</p>' : '';
  $('#location').innerHTML = `<div class="eyebrow">Location</div><h2>${esc(locationLabel(state))}</h2><p class="sub">${esc(sub)}</p><div class="acts">${acts}</div>${hint}`;
}

function qtyText(q) {
  return Number.isInteger(q) ? String(q) : q.toFixed(2).replace(/0$/, '');
}

function useButtons(id, from) {
  return itemUses(state, id).map((u) => `<button data-use="${id}" data-verb="${u.verb}" data-from="${from}"${u.disabled ? ' disabled' : ''}${u.note ? ` title="${esc(u.note)}"` : ''}>${esc(u.label)}${u.verb === 'salvage' && u.note ? ` <small>${esc(u.note)}</small>` : ''}</button>${u.disabled && u.note && u.verb !== 'salvage' ? `<small class="need">${esc(u.note)}</small>` : ''}`).join('');
}

// Auto-sort: items in groups by kind, then by name.
const KIND_GROUPS = [
  ['Food', ['food', 'dogfood']], ['Water', ['drink']], ['Medicine', ['med']],
  ['Light and tools', ['tool', 'batteries']], ['Clothes', ['wear']],
  ['Fuel and parts', ['fuel', 'part', 'junk']], ['Books', ['book']], ['Other', ['misc', 'comfort', 'warm']],
];
function groupOf(id) {
  const k = ITEMS[id] ? ITEMS[id].kind : 'misc';
  const i = KIND_GROUPS.findIndex(([, kinds]) => kinds.includes(k));
  return i < 0 ? KIND_GROUPS.length - 1 : i;
}
function sortedIds(bag) {
  return Object.keys(bag).sort((a, b) => groupOf(a) - groupOf(b) || itemName(a).localeCompare(itemName(b)));
}
// ---------- grid inventory (Adam, 2026-11-25) ----------
// Your pack and the things found here are grids; items are tiles sized by the item. Drag a
// tile to move it, drag it to the other grid to take or drop it, tap it for its buttons.
// Weight is still the carry rule (the load bar); tiles that have no room go "over the edge".
let gridSel = null; // 'pack:key' or 'here:key'
const gridLayouts = {};
function hereGridCols() { return GRID_COLS + 2; }
function buildGrid(which) {
  const bag = which === 'pack' ? state.carried : hereBag(state);
  const gb = which === 'pack' ? gridBag(state) : bag;
  const tiles = tilesFor(gb, sortedIds(gb));
  const cols = which === 'pack' ? GRID_COLS : hereGridCols();
  const rows = which === 'pack' ? packSize(state).rows : Math.max(4, Math.ceil(tiles.reduce((a, t) => a + t.w * t.h, 0) / cols));
  let L = layoutGrid(tiles, cols, rows, savedPos(which === 'pack' ? 'pack' : `here:${state.location.kind}:${state.location.id || ''}`));
  // Your own tile places must never make the pack look fuller than it is: the rules use the
  // packed layout, so show that when your places leave tiles over the edge.
  if (L.overflow) { const auto = layoutGrid(tiles, cols, rows); if (auto.overflow < L.overflow) L = auto; }
  gridLayouts[which] = L;
  return L;
}
function packText() {
  const u = packUse(state);
  return `Pack ${u.used} / ${u.total} cells${u.over ? ' (over full)' : ''}`;
}
function iconUrl(id) {
  return window.LLInside3D?.iconCache?.get(id) || null;
}
let iconTimer = 0;
function wantIcons(ids) {
  const miss = ids.filter((id) => !window.LLInside3D?.iconCache?.has(id));
  if (!miss.length) return;
  loadInside3d().then((api) => api.itemIcons?.(miss, () => {
    clearTimeout(iconTimer);
    iconTimer = setTimeout(refreshGrids, 120);
  })).catch(() => {});
}
function refreshGrids() {
  if (!state) return;
  if ($('#items')) renderItems();
  insideRefresh?.();
}
function gridOpts(which) {
  return {
    layout: buildGrid(which), name: itemName, kind: (id) => ITEMS[id]?.kind || 'misc',
    qtyText: (q, id) => (q === 1 && sizeOf(id).stack === 1 ? '' : qtyText(q)), icon: iconUrl, selected: gridSel,
  };
}
// Buttons for the tile you tapped.
function selectedHtml(compact) {
  if (!gridSel) return '';
  const [which, key] = gridSel.split(/:(.*)/s);
  const id = key.split('#')[0];
  const bag = which === 'pack' ? state.carried : hereBag(state);
  if (!bag[id]) { gridSel = null; return ''; }
  const it = ITEMS[id];
  const home = state.location.kind === 'home';
  const from = which === 'pack' ? 'carried' : 'storage';
  const uses = which === 'pack' || home ? useButtons(id, from) : '';
  const move = which === 'pack'
    ? `<button data-drop="${id}">${home ? 'Store' : 'Drop'}</button>`
    : `<button class="primary" data-take="${id}">Take</button>`;
  const w = Math.round(it.weight * bag[id] * 10) / 10;
  return `<div class="isel${compact ? ' compact' : ''}"><img class="isel-img" src="${iconUrl(id) || ''}" alt=""${iconUrl(id) ? '' : ' hidden'}>
    <div><b>${esc(it.name)}${freshTag(id)}</b><small>${qtyText(bag[id])} ${esc(it.unit)} · ${sizeOf(id).w}×${sizeOf(id).h} cells${which === 'pack' ? '' : ' · not yours yet'}</small></div>
    <div class="isel-b">${uses}${move}</div></div>`;
}
function initGridHandlers() {
  setGridHandlers({
    layout: (which) => gridLayouts[which],
    select: (which, key) => {
      const k = `${which}:${key}`;
      gridSel = gridSel === k ? null : k;
      refreshGrids();
    },
    move: (which, key, x, y, rot) => {
      const L = gridLayouts[which];
      const t = L?.tiles.find((v) => v.key === key);
      if (!t) return;
      const w = rot !== t.rot ? t.h : t.w; const h = rot !== t.rot ? t.w : t.h;
      if (!fitsAt(L, key, x, y, w, h)) return;
      setPos(which === 'pack' ? 'pack' : `here:${state.location.kind}:${state.location.id || ''}`, key, x, y, rot);
      refreshGrids();
    },
    transfer: (from, to, id, qty, hit) => {
      const n0 = state.log.length;
      if (from === 'here' && to === 'pack') act('take', id, qty);
      else if (from === 'pack' && to === 'here') act('drop', id, qty);
      else return;
      // keep the tile where you dropped it, when it has room there
      const L = buildGrid(to);
      const t = L.tiles.find((v) => v.id === id && v.key.endsWith('#0'));
      if (t && hit && fitsAt(L, t.key, hit.x, hit.y, t.w, t.h)) setPos(to === 'pack' ? 'pack' : `here:${state.location.kind}:${state.location.id || ''}`, t.key, hit.x, hit.y, t.rot);
      gridSel = null;
      const said = state.log.slice(n0).map((e) => e.text).join(' ');
      insideToast?.(said);
      refreshGrids();
    },
  });
}

function renderItems() {
  const loc = state.location;
  const home = loc.kind === 'home';
  const hereTitle = home ? 'House storage' : 'Items you found here';
  const hereTag = home ? 'stored' : 'not yours yet';
  const here = hereBag(state);
  const takeAll = Object.keys(here).length && !home ? '<button class="small" data-takeall="1">Take all that fits</button>' : '';
  const hereO = gridOpts('here');
  const packO = gridOpts('pack');
  const use = packUse(state);
  const over = use.over;
  const fill = Math.min(100, Math.round((use.used / Math.max(1, use.total)) * 100));
  wantIcons([...Object.keys(here), ...Object.keys(state.carried)]);
  const hereBody = Object.keys(here).length ? gridHtml('here', hereO)
    : `<p class="empty">${home ? 'Nothing stored.' : 'Nothing here yet. Search to find items.'}</p>`;
  $('#items').innerHTML = `
    <p class="stock">${esc(stockLine(state))} <small>at rest, carried + stored at home</small></p>
    ${selectedHtml(false)}
    <div class="grids">
    <section class="bag bag-pack">
      <h3><span class="bag-ico" aria-hidden="true">▣</span>In your pack <span class="bag-tag">yours</span>
        <span class="${over ? 'bad' : ''}">${use.used} / ${use.total} cells${over ? ' (over full: slow)' : ''}</span></h3>
      <div class="bag-load${over ? ' over' : ''}"><i style="width:${fill}%"></i></div>
      ${gridHtml('pack', packO)}
      <p class="hint">${wearsPack(state) ? `Backpack on (worn, like clothes): big grid.${state.player.worn?.back ? ' <button class="small" data-use="back" data-verb="take_off">Take it off</button>' : ''}` : 'No backpack: pockets and hands only. Find a backpack for a bigger grid.'} Drag to move · R turns a tile while you drag · tap for buttons.</p>
    </section>
    <section class="bag bag-here${home ? ' bag-home' : ''}">
      <h3><span class="bag-ico" aria-hidden="true">${home ? '⌂' : '⌕'}</span>${hereTitle} <span class="bag-tag">${hereTag}</span> ${takeAll}</h3>
      ${hereBody}
      <p class="hint">Drag a tile into your pack to take it${home ? '' : ', or drag from your pack to here to drop it'}.</p>
    </section>
    </div>`;
}

function renderHome() {
  const h = state.home;
  const atHome = state.location.kind === 'home';
  const pct = Math.round((h.battery / h.batteryMax) * 100);
  const pw = powerSummary(state);
  const hrs = (x) => (x >= 10 ? `${Math.round(x)} h` : `${x.toFixed(1)} h`);
  $('#home').innerHTML = `
    <div class="eyebrow">Home base</div>
    <h3>House status ${atHome ? '' : '<small>(you are away)</small>'}</h3>
    <div class="grid">
      <span>Inside temp</span><b>${Math.round(h.indoorTemp)}°F</b>
      <span>Fire</span><b>${h.fireHours > 0 ? `burning (${formatDuration(h.fireHours * 60)})` : 'out'}</b>
      <span>Battery</span><b>${pct}% (${h.battery.toFixed(1)} of ${h.batteryMax} kWh)</b>
      <span>Power in</span><b>Solar today ${pw.inToday.toFixed(1)} kWh (in daylight)</b>
      <span>Power out</span><b>${pw.outKw ? `Heater ${pw.outKw} kW · battery lasts ${hrs(pw.hoursLeft)}` : `Nothing on · heater would run ${hrs(pw.heaterHoursFull)}`}</b>
      <span>Water heater tank</span><b>${h.tankGal.toFixed(1)} gal (clean)</b>
      <span>${built(state, 'filter_station') ? 'Clean water tank' : 'Boiled water'}</span><b>${h.safeGal.toFixed(1)} gal${built(state, 'filter_station') ? ` of ${SAFE_TANK_GAL}` : ''}</b>
      <span>${built(state, 'rain_barrels') ? 'Rain barrels (unsafe)' : 'Unsafe water'}</span><b>${h.rawGal.toFixed(1)} gal</b>
      ${built(state, 'filter_station') ? `<span>Water chain</span><b>Runs by itself: tonight it filters ${autoFilterToday(state).toFixed(1)} gal (up to ${AUTO_FILTER_GAL_PER_DAY} a night)</b>` : ''}
      <span>Kitchen tap</span><b>${h.tapWorks ? 'weak flow' : 'stopped'}</b>
    </div>
    ${renderHeat(atHome)}
    ${renderGarden(atHome)}
    ${renderBase()}`;
}

// Home base projects, grouped in wings.
function renderBase() {
  const done = builtCount(state);
  const wings = wingSummary(state).map((w) => {
    const pips = w.projects.map((p) => `<i class="${projectStatus(state, p).built ? 'on' : ''}"></i>`).join('');
    const cards = w.projects.map(projectCard).join('');
    return `<details class="wing" data-wing="${w.id}" ${openWings.has(w.id) ? 'open' : ''}>
      <summary><span class="wi">${w.icon}</span><span class="wn">${esc(w.label)}</span><span class="pips">${pips}</span></summary>
      <p class="hint">${esc(w.blurb)}</p>${cards}</details>`;
  }).join('');
  // Parts still needed for the projects you can start now
  const need = {};
  for (const p of PROJECTS) {
    const st = projectStatus(state, p);
    if (st.built || st.started || st.missingReq.length) continue;
    for (const x of st.parts) if (x.have < x.need) need[x.id] = Math.max(need[x.id] || 0, x.need - x.have);
    for (const t of st.tools) if (!t.have) need[t.id] = 1;
  }
  // Where you left needed parts behind (pack was full): up to two places by name.
  const leftAt = (id) => {
    const at = [];
    for (const [pid, ps] of Object.entries(state.places || {})) if ((ps.leftovers?.[id] || 0) > 0) at.push(getPlace(pid)?.name || 'a store');
    for (const hs of Object.values(state.houses || {})) if ((hs.leftovers?.[id] || 0) > 0) at.push(hs.label || 'a house');
    return at.length ? ` · left at ${at.slice(0, 2).join(', ')}${at.length > 2 ? ` +${at.length - 2}` : ''}` : '';
  };
  const list = Object.entries(need).map(([id, q]) => `<span class="chip">${esc(itemName(id))} ×${q}${esc(leftAt(id))}</span>`).join('');
  return `<div class="base">
    <h3>Base projects <small>${done} / ${PROJECTS.length} built</small></h3>
    <div class="basebar"><i style="width:${(done / PROJECTS.length) * 100}%"></i></div>
    ${wings}
    ${list ? `<p class="sub">Look for these parts (hardware stores, houses, gas stations):</p><div class="chips">${list}</div>` : ''}
  </div>`;
}

function projectCard(p) {
  const st = projectStatus(state, p);
  const parts = st.parts.map((x) => `<span class="chip ${st.started || x.have >= x.need ? 'ok' : 'bad'}">${esc(itemName(x.id))} ${st.started ? '✓' : `${qtyText(Math.min(x.have, x.need))}/${x.need}`}</span>`).join('');
  const tools = st.tools.map((t) => `<span class="chip ${t.have ? 'ok' : 'bad'}">🔧 ${esc(itemName(t.id))}</span>`).join('');
  let foot;
  if (st.built) foot = '<span class="built">✓ Built</span>';
  else {
    const block = Math.min(WORK_BLOCK_H, st.leftH);
    const label = st.started ? `Work ${block} h (${st.leftH} h left)` : `Start project (${p.hours} h total)`;
    foot = `${st.started ? `<div class="basebar small"><i style="width:${(st.doneH / p.hours) * 100}%"></i></div>` : ''}
      <button class="small" data-build="${p.id}" ${st.canWork ? '' : 'disabled'}>${label}</button>
      ${st.blocked ? `<small class="why">${esc(st.blocked)}</small>` : ''}`;
  }
  return `<div class="proj ${st.built ? 'is-built' : ''}">
    <div class="pn">${esc(p.name)}</div>
    <div class="pe">${esc(p.effect)}</div>
    ${st.built ? '' : `<div class="chips">${parts}${tools}</div>`}
    <div class="pf">${foot}</div>
  </div>`;
}

function renderDog() {
  const d = state.dog;
  let html = '';
  if (d.stage === 'joined') {
    const bar = (label, v) => `<div class="stat ${v < 25 ? 'bad' : v < 50 ? 'warn' : 'ok'}"><span class="sl">${label}</span><span class="bar"><i style="width:${Math.round(v)}%"></i></span><span class="sv">${Math.round(v)}</span><span class="sw"></span></div>`;
    html = `<h3>${esc(d.name)} <small>${d.withPlayer ? 'with you' : 'at home'}</small></h3>${bar('Food', d.food)}${bar('Health', d.health)}${bar('Bond', d.bond)}
      ${d.sick ? `<p class="warn-line">⚠ ${esc(d.name)} is sick: loses health each hour. Antibiotics cure it now (button under Location), or rest and food over about 4 days.</p>` : ''}
      <p class="hint">Bond 40+: warns of animals. 50+: finds extra items. 80+: sleeps next to you (warmer).</p>`;
  } else if (d.stage === 'visiting') {
    html = '<h3>Stray dog</h3><p class="hint">A thin dog comes near the house in the day. Leave food outside on three different days.</p>';
  } else if (d.stage === 'dead') {
    html = `<h3>${esc(d.name || 'The dog')}</h3><p class="hint">Gone.</p>`;
  }
  $('#dog').innerHTML = html;
  $('#dog').hidden = !html;
}

function renderLog() {
  const items = state.log.slice(-60).reverse().map((e) => `<li class="${e.kind}"><time>D${dayIndex(e.t) + 1} ${formatClock(e.t)}</time> ${esc(e.text)}</li>`).join('');
  $('#log').innerHTML = `<h3>Journal</h3><div class="journal">${journalHtml(3)}</div><h3>Log</h3><ul>${items}</ul>`;
}

// ---------- map popup ----------
function showPlacePopup(id, lngLat) {
  if (!state || !mapApi || picking) return;
  const maplibregl = window.maplibregl;
  if (popup) popup.remove();
  let html;
  let pos;
  if (id === '__home') {
    pos = homeOf(state);
    const atHome = state.location.kind === 'home';
    html = `<h4>Home</h4><p>Your house ${esc(state.homeLabel || 'in Aloha')}.</p>${atHome ? '<p><i>You are here.</i></p>'
      : `${tripHtml(pos)}<button class="go" data-gohome="1">Walk home</button>`}`;
  } else if (id.startsWith('wild:')) {
    const sid = id.slice(5);
    const sp = SPOTS[sid];
    pos = sp;
    const here = state.location.kind === 'wild' && state.location.id === sid;
    const fromHome = straightMiles(homeOf(state), sp).toFixed(1);
    html = `<h4>${esc(sp.name)}</h4><p>${sp.kind === 'fish' ? 'Fishing' : 'Hunting'} · ${fromHome} mi from home</p><p><i>${esc(wildSub(sp))}</i></p>
      ${here ? '<p><i>You are here.</i></p>' : `${tripHtml(sp)}<button class="go" data-gowild="${sid}">Walk here</button>`}`;
  } else {
    const p = getPlace(id);
    pos = p;
    const cat = CATEGORIES[p.cat];
    const ps = state.places[p.id];
    const left = ps && ps.leftovers ? Math.round(Object.values(ps.leftovers).reduce((a, q) => a + (q > 0 ? q : 0), 0)) : 0;
    const status = (!ps || !ps.visited ? 'Not searched' : ps.zonesDone >= ps.zones ? 'Searched all of it' : `Searched ${ps.zonesDone} of ${ps.zones} ${cat.zoneName}s`)
      + (left > 0 ? ` · items left here: ${left}` : ps && ps.visited && ps.zonesDone >= ps.zones ? ': nothing left' : '');
    const here = state.location.kind === 'place' && state.location.id === id;
    const fromHome = straightMiles(homeOf(state), p).toFixed(1);
    html = `<h4>${esc(p.name)}</h4><p>${cat.label} · ${fromHome} mi from home</p><p><i>${status}</i></p>
      ${here ? '<p><i>You are here.</i></p>' : `${tripHtml(p)}
      <button class="go" data-goplace="${p.id}">Walk here</button>`}`;
  }
  popup = new maplibregl.Popup({ closeButton: true, maxWidth: '260px' })
    .setLngLat(lngLat || [pos.lon, pos.lat]).setHTML(html).addTo(mapApi.map);
  const el = popup.getElement();
  el.querySelector('[data-goplace]')?.addEventListener('click', (e) => {
    popup.remove();
    travelTo(e.currentTarget.dataset.goplace);
  });
  el.querySelector('[data-gowild]')?.addEventListener('click', (e) => {
    popup.remove();
    travelTo(`wild:${e.currentTarget.dataset.gowild}`);
  });
  el.querySelector('[data-gohome]')?.addEventListener('click', () => {
    popup.remove();
    travelTo('__home');
  });
}

// One line on what lives at a fishing or hunting spot (now, when you stand there).
function wildSub(sp) {
  if (!sp) return '';
  if (sp.kind === 'fish') return `Fish here: ${sp.fish.join(', ')}.${sp.run ? ` A ${sp.run.fish} run comes in some months.` : ''}`;
  const here = state.location.kind === 'wild' && SPOTS[state.location.id] === sp;
  const now = here ? gameHere(state).map((g) => g.name) : sp.game.map((g) => GAME[g].name);
  return `Game here${here ? ' now' : ''}: ${now.length ? now.join(', ') : 'none this time of year'}.`;
}

// An abandoned car on the map (zoom 14+): what is left to do there, and Walk here.
function showCarPopup(id, lat, lon, lngLat) {
  if (!state || !mapApi || picking) return;
  if (popup) popup.remove();
  const c = state.cars?.[id] || {};
  const here = state.location.kind === 'car' && state.location.id === id;
  const left = [!c.searched && 'glovebox and trunk', !c.siphoned && 'gas tank', !c.battery && 'battery', !c.wire && 'wire'].filter(Boolean);
  const html = `<h4>Abandoned car</h4><p>Dust and leaves cover the glass.</p><p><i>${left.length ? `Not done: ${left.join(', ')}` : 'Nothing left to take'}</i></p>
    ${here ? '<p><i>You are here.</i></p>' : `${tripHtml({ lat, lon })}<button class="go" data-gocar="1">Walk here</button>`}`;
  popup = new window.maplibregl.Popup({ closeButton: true, maxWidth: '260px' }).setLngLat(lngLat || [lon, lat]).setHTML(html).addTo(mapApi.map);
  popup.getElement().querySelector('[data-gocar]')?.addEventListener('click', () => {
    popup.remove();
    travelTo(`car:${id}|${lat}|${lon}`);
  });
}

// Test hook: open the car popup from a street-detail car id (tests can't click map tiles offline).
if (typeof window !== 'undefined') window.__llShowCar = (id, lat, lon) => showCarPopup(id, lat, lon, null);

function travelTo(id) {
  if (state.dead) return;
  if (state.location.kind === 'house') perform(state, 'action', 'leave_house');
  if (id === '__home') perform(state, 'action', 'go_home');
  else if (id.startsWith('wild:')) perform(state, 'action', 'go_spot', id.slice(5));
  else if (id.startsWith('car:')) perform(state, 'action', 'go_car', id.slice(4));
  else perform(state, 'action', 'go_place', id);
  if (state.dead) recordRun(state);
  commit(true);
}

// ---------- dialogs ----------
function modal(html, onBind) {
  const m = $('#modal');
  m.innerHTML = `<div class="box">${html}</div>`;
  m.hidden = false;
  onBind && onBind(m);
}
function closeModal() { $('#modal').hidden = true; $('#modal').innerHTML = ''; }

function showIntro() {
  modal(`<h2>Last Light: Portland</h2>
    <p>Late November 2026. Three months ago, a plague went through the world. Everyone died.</p>
    <p>You were in a coma in your own home in Aloha, Oregon. A machine fed you. Now its bags are empty, and you wake up.</p>
    <p>You are the last person alive. There is nobody to save and nobody to find. You must stay alive as long as you can.</p>
    <h3>How to play</h3>
    <ul>
      <li>Each action costs game time. Time stops when you read or look at the map.</li>
      <li>Watch Food, Water, Warmth, Energy, Health and Morale. If Health gets to 0, you die.</li>
      <li>Tap a dot on the map to walk to a real store, pharmacy, clinic or other place. Search it, take what you can carry, and walk home.</li>
      <li>Keep the house warm with the fireplace. Boil water before you drink it.</li>
      <li>The game saves after each action. You have one life.</li>
    </ul>
    <button class="primary" id="startBtn">Wake up</button>`, (m) => {
    m.querySelector('#startBtn').addEventListener('click', () => {
      showBackground({});
    });
  });
}

// Food, water and warmth after a sleep of h hours: try it on a copy of the game.
function sleepPreview(h) {
  try {
    const copy = structuredClone(state);
    copy.log = [];
    perform(copy, 'action', 'sleep', h);
    const p = copy.player;
    return { food: p.food, water: p.water, warmth: p.warmth, dead: !!copy.dead };
  } catch { return null; }
}

function showSleep() {
  const p = state.player;
  const prev = {};
  const opts = [1, 2, 4, 6, 8, 10].map((h) => {
    const a = actionTiming(state, h * 60);
    const f = (prev[h] = sleepPreview(h));
    const low = f && (f.dead || f.water < 15 || f.food < 15 || f.warmth < 15);
    const warn = !f ? '' : f.dead ? ' · you may not wake' : low ? ` · wake ${[f.water < 15 && 'very thirsty', f.food < 15 && 'starving', f.warmth < 15 && 'freezing'].filter(Boolean).join(', ')}` : '';
    return `<button data-hours="${h}" class="${low ? 'risky' : ''}" title="${esc(a.dayStartText || '')}">${h} h<small>until ${a.endText}${a.crossesDayStart ? ' ☀' : ''}${esc(warn)}</small></button>`;
  }).join('');
  const need = [p.water < 40 && 'Drink first: you are thirsty.', p.food < 40 && 'Eat first: you are hungry.', p.warmth < 40 && 'Get warm first: you are cold.'].filter(Boolean);
  const now = `<p class="hint">Now: Food ${Math.round(p.food)} · Water ${Math.round(p.water)} · Warmth ${Math.round(p.warmth)} · Energy ${Math.round(p.energy)}</p>${need.length ? `<p class="warn-line">⚠ ${esc(need.join(' '))}</p>` : ''}`;
  modal(`<h3>How long do you want to sleep?</h3>${now}<p class="hint">Sleep gives Energy. The fire does not burn while you sleep unless you add wood first. ☀ = you wake after 5 AM, when the weather changes.</p><div class="row">${opts}</div><button class="link" id="cancel">Cancel</button>`, (m) => {
    m.querySelectorAll('[data-hours]').forEach((b) => b.addEventListener('click', () => {
      closeModal();
      act('action', 'sleep', Number(b.dataset.hours));
    }));
    m.querySelector('#cancel').addEventListener('click', closeModal);
  });
}

function showNameDog() {
  modal(`<h3>The dog stays with you</h3><p>What do you call the dog?</p><input id="dogName" maxlength="20" placeholder="Name" autocomplete="off"><button class="primary" id="okName">OK</button>`, (m) => {
    const input = m.querySelector('#dogName');
    input.focus();
    const ok = () => { closeModal(); act('namedog', input.value); };
    m.querySelector('#okName').addEventListener('click', ok);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') ok(); });
  });
}

function legacyEpilogueHtml() {
  const ep = epilogue(state);
  if (!ep.length) return '';
  return `<h3>What you leave behind</h3><ul class="epilogue">${ep.map((e) => `<li><b>${esc(e.title)}</b> <span class="hint">${esc(e.kind)} · ${e.done} of ${e.total} steps</span><br>${esc(e.line)}</li>`).join('')}</ul>`;
}

function showDeath() {
  const d = state.dead;
  const runs = bestRuns().map((r) => `<li>${r.days} days · ${esc(r.cause)}${r.dog ? ` · with ${esc(r.dog)}` : ''}</li>`).join('');
  modal(`<h2>You died</h2>
    <p>You lived ${d.days} day${d.days === 1 ? '' : 's'} after you woke up. You died on ${formatDate(d.time)} at ${formatClock(d.time)}, of ${esc(d.cause)}.</p>
    <div class="grid"><span>Miles walked</span><b>${state.stats.miles.toFixed(1)}</b><span>Places searched</span><b>${state.stats.placesSearched}</b>
    <span>Houses searched</span><b>${state.stats.housesSearched}</b><span>Dog</span><b>${state.dog.name ? esc(state.dog.name) : 'none'}</b></div>
    ${legacyEpilogueHtml()}
    <h3>Best runs</h3><ol>${runs}</ol>
    ${startChoicesHtml()}`, bindStartChoices);
}

// ---------- start of a new run ----------
function startChoicesHtml() {
  return `<h3>Start a new run</h3>
    <div class="col">
      <button class="primary" data-start="home">Wake up at home in Aloha</button>
      <button data-start="random">Start at a random place</button>
      <button data-start="pick">Choose a place on the map</button>
    </div>`;
}

function bindStartChoices(m) {
  m.querySelectorAll('[data-start]').forEach((b) => b.addEventListener('click', () => {
    const how = b.dataset.start;
    if (how === 'home') return beginRun({});
    if (how === 'random') {
      const home = randomStartPoint();
      return beginRun({ home, homeLabel: nearLabel(home) });
    }
    pickStart();
  }));
}

function nearLabel(pos) {
  let best = null;
  let bestD = Infinity;
  for (const p of allPlaces()) {
    const d = straightMiles(pos, p);
    if (d < bestD) { bestD = d; best = p; }
  }
  if (!best) return 'in a quiet street';
  return bestD < 0.3 ? `near ${best.name}` : `${bestD.toFixed(1)} mi from ${best.name}`;
}

function beginRun(opts) {
  showBackground(opts);
}

// "Who were you?" Pick a past job and traits, then the run starts.
function showBackground(opts) {
  let job = 'nurse';
  let traits = [];
  const rec = loadLegacy();
  let legacy = earnedIds(rec).slice(0, MAX_SLOTS);
  const render = (m) => {
    const left = pointsLeft(traits);
    const jobs = Object.entries(JOBS).map(([id, J]) => {
      const sk = Object.entries(J.skills).map(([k, l]) => `${SKILLS[k].name} ${l}`).join(', ');
      return `<button class="bg-job${id === job ? ' on' : ''}" data-job="${id}"><b>${esc(J.name)}</b><small>${esc(J.text)}</small>
        <small class="good">${esc(sk)} · starts with ${esc(itemName(J.item[0]).toLowerCase())}${J.item[1] > 1 ? ` ×${J.item[1]}` : ''}</small><small class="bad">${esc(J.weakness)}</small></button>`;
    }).join('');
    const tr = Object.entries(TRAITS).map(([id, T]) => {
      const on = traits.includes(id);
      const blocked = !on && ((T.not || []).some((x) => traits.includes(x)) || pointsLeft([...traits, id]) < 0);
      return `<button class="bg-trait${on ? ' on' : ''}" data-trait="${id}" ${blocked ? 'disabled' : ''}><b>${esc(T.name)}</b> <span class="${T.cost > 0 ? 'bad' : 'good'}">${T.cost > 0 ? `costs ${T.cost}` : `gives ${-T.cost}`}</span><small>${esc(T.text)}</small></button>`;
    }).join('');
    m.querySelector('.box').innerHTML = `<h2>Who were you?</h2>
      <p class="hint">Your past job gives you some skill, one item at home and one weakness. No job is better than the others.</p>
      <div class="bg-jobs">${jobs}</div>
      <h3>Traits <small>(${left} point${left === 1 ? '' : 's'} left; you start with ${FREE_POINTS})</small></h3>
      <p class="hint">Good traits cost points. Bad traits give points.</p>
      <div class="bg-traits">${tr}</div>
      ${legacyHtml()}
      <div class="row"><button class="primary" id="bgGo">Wake up</button></div>`;
    m.querySelectorAll('[data-job]').forEach((b) => b.addEventListener('click', () => { job = b.dataset.job; render(m); }));
    m.querySelectorAll('[data-trait]').forEach((b) => b.addEventListener('click', () => {
      const id = b.dataset.trait;
      traits = traits.includes(id) ? traits.filter((x) => x !== id) : [...traits, id];
      // Taking off a bad trait can leave too few points: drop good traits until it fits.
      while (pointsLeft(traits) < 0) {
        const good = traits.filter((x) => TRAITS[x].cost > 0);
        if (!good.length) break;
        traits = traits.filter((x) => x !== good[good.length - 1]);
      }
      render(m);
    }));
    const opt = m.querySelector('#legacyOn');
    if (opt) opt.addEventListener('change', () => { rec.enabled = opt.checked; saveLegacy(rec); render(m); });
    m.querySelectorAll('[data-legacy]').forEach((b) => b.addEventListener('click', () => {
      const id = b.dataset.legacy;
      legacy = legacy.includes(id) ? legacy.filter((x) => x !== id) : [...legacy, id].slice(0, MAX_SLOTS);
      render(m);
    }));
    m.querySelector('#bgGo').addEventListener('click', () => {
      clearGame();
      state = newGame(undefined, { ...opts, job, traits: validTraits(traits), legacy: rec.enabled ? validLegacy(legacy, rec) : [] });
      closeModal();
      commit(true);
    });
  };
  // Carry-over bonuses: a game option, off by default.
  const legacyHtml = () => {
    const earned = earnedIds(rec);
    const list = rec.enabled ? `<p class="hint">Deeds over all your runs earn small bonuses. Turn on up to ${MAX_SLOTS}.</p><div class="bg-traits">${Object.entries(LEGACY).map(([id, L]) => {
      const has = earned.includes(id);
      const on = has && legacy.includes(id);
      const full = !on && legacy.filter((x) => earned.includes(x)).length >= MAX_SLOTS;
      return `<button class="bg-trait${on ? ' on' : ''}" data-legacy="${id}" ${!has || full ? 'disabled' : ''}><b>${esc(L.name)}</b> <span class="${has ? 'good' : ''}">${has ? 'earned' : esc(L.progress(rec))}</span><small>${esc(L.deed)}</small><small class="good">${esc(L.bonus)}</small></button>`;
    }).join('')}</div>` : '';
    return `<h3>Carry-over bonuses <small>(game option)</small></h3>
      <label class="bg-opt"><input type="checkbox" id="legacyOn" ${rec.enabled ? 'checked' : ''}> Use small bonuses earned in earlier runs</label>${list}`;
  };
  modal('', render);
}

let picking = false;
function pickStart() {
  closeModal();
  if (!mapApi) return beginRun({ home: randomStartPoint(), homeLabel: 'in a quiet street' });
  picking = true;
  if (popup) popup.remove();
  const banner = document.createElement('div');
  banner.className = 'pick-banner';
  banner.innerHTML = '<b>Choose your new home.</b> Click a spot on the map inside the dashed 15-mile line. <button id="pickCancel">Cancel</button>';
  $('#mapwrap').appendChild(banner);
  mapApi.map.getCanvas().style.cursor = 'crosshair';
  mapApi.map.easeTo({ center: [HOME.lon, HOME.lat], zoom: 9.6, duration: 600 });
  const finish = () => {
    picking = false;
    banner.remove();
    mapApi.map.getCanvas().style.cursor = '';
    mapApi.map.off('click', onClick);
  };
  const onClick = (e) => {
    const pos = { lat: e.lngLat.lat, lon: e.lngLat.lng };
    if (straightMiles(HOME, pos) > MAP_RADIUS_MILES) {
      banner.querySelector('b').textContent = 'That spot is outside the play area. Click inside the dashed line.';
      return;
    }
    finish();
    const label = nearLabel(pos);
    modal(`<h3>Start here?</h3><p>Your new home is a house ${esc(label)}.</p>
      <div class="col"><button class="primary" id="pickYes">Wake up here</button><button id="pickAgain">Choose again</button></div>`, (m) => {
      m.querySelector('#pickYes').addEventListener('click', () => beginRun({ home: pos, homeLabel: label }));
      m.querySelector('#pickAgain').addEventListener('click', pickStart);
    });
  };
  mapApi.map.on('click', onClick);
  banner.querySelector('#pickCancel').addEventListener('click', () => {
    finish();
    if (state && state.dead) showDeath();
    else showStartChoices();
  });
}

function showStartChoices() {
  modal(startChoicesHtml(), bindStartChoices);
}

function qualityHint(q) {
  return {
    auto: 'Auto: set from your device, and lowered if the 3D view runs slow.',
    low: 'Low: fastest. No shadows of the room, no light patches. For phones and old laptops.',
    medium: 'Medium: reflections and light patches, simple shadows.',
    high: 'High: soft shadows and all light effects. Needs a good graphics card.',
  }[q] + ' It is used the next time you go inside.';
}

function showMenu() {
  modal(`<h3>Game</h3>
    <p class="hint">The game saves in this browser after each action.</p>
    <div class="col">
      <label class="toggle"><input type="checkbox" id="fxToggle" ${fx && fx.enabled ? 'checked' : ''}> Weather effects on the map (snow, rain, fog, night)</label>
      <div class="qual-row" role="radiogroup" aria-label="3D quality">
        <span class="qual-label">3D quality</span>
        ${QUALITY_CHOICES.map((q) => `<button type="button" class="qual${getQualityChoice() === q ? ' on' : ''}" data-q="${q}" role="radio" aria-checked="${getQualityChoice() === q}">${QUALITY_LABELS[q]}</button>`).join('')}
      </div>
      <p class="hint" id="qualHint">${qualityHint(getQualityChoice())}</p>
      <button id="exp">Export a backup file</button>
      <label class="filebtn">Import a backup file<input type="file" id="imp" accept=".json,application/json" hidden></label>
      <button id="newrun" class="danger">Give up and start a new run</button>
      <button class="link" id="cancel">Close</button>
    </div>
    <p class="hint">Map data © OpenStreetMap contributors (ODbL). Map tiles: OpenFreeMap.</p>`, (m) => {
    m.querySelector('#cancel').addEventListener('click', closeModal);
    m.querySelector('#fxToggle').addEventListener('change', (e) => { if (fx) fx.setEnabled(e.target.checked); });
    m.querySelectorAll('[data-q]').forEach((b) => b.addEventListener('click', () => {
      setQualityChoice(b.dataset.q);
      m.querySelectorAll('[data-q]').forEach((x) => { const on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-checked', on); });
      m.querySelector('#qualHint').textContent = qualityHint(b.dataset.q);
    }));
    m.querySelector('#exp').addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(state)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `last-light-day${dayIndex(state.time) + 1}.json`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });
    m.querySelector('#imp').addEventListener('change', async (e) => {
      const f = e.target.files[0];
      if (!f) return;
      try {
        state = parseSave(await f.text());
        closeModal();
        commit(true);
      } catch (err) {
        alert('This file is not a Last Light save.');
      }
    });
    m.querySelector('#newrun').addEventListener('click', () => {
      if (!confirm('Start a new run? This run ends now.')) return;
      clearGame();
      closeModal();
      state = null;
      showStartChoices();
    });
  });
}

// ---------- first-person view inside a building ----------
// The 3D code is a separate file (docs/inside3d.js), loaded the first time it is used.
let insideLoading = null;
function loadInside3d() {
  if (window.LLInside3D) return Promise.resolve(window.LLInside3D);
  if (!insideLoading) {
    insideLoading = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'inside3d.js';
      s.onload = () => resolve(window.LLInside3D);
      s.onerror = () => { insideLoading = null; reject(new Error('3D view did not load')); };
      document.head.appendChild(s);
    });
  }
  return insideLoading;
}

function webglOk() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (e) { return false; }
}

async function walkInside() {
  if (!state || state.dead || document.getElementById('inside')) return;
  if (!webglOk()) {
    alert('This browser cannot show 3D. Use the search buttons in the panel.');
    return;
  }
  let api;
  try { api = await loadInside3d(); } catch (e) {
    alert('The 3D view did not load. Check the connection and try again.');
    return;
  }
  const loc = state.location;
  let plan;
  let cat;
  let bag;
  let zoneList;
  let stock;
  let counterIdx = -1;
  let title;
  let zoneName;
  if (loc.kind === 'place') {
    const place = getPlace(loc.id);
    const ps = placeState(state, place);
    cat = CATEGORIES[place.cat];
    plan = buildInterior(place.cat, place.id, ps.zones);
    zoneList = () => zonesDoneList(ps);
    stock = ps.stock;
    counterIdx = cat.lockedZone ? ps.zones - 1 : -1;
    title = place.name;
    zoneName = cat.zoneName;
  } else if (loc.kind === 'house') {
    const hs = state.houses[loc.id];
    cat = CATEGORIES.house;
    plan = buildInterior('house', loc.id, 6, { body: hs.body });
    zoneList = () => zonesDoneList(hs, 'roomsDone', 'doneList');
    stock = cat.stock;
    title = loc.label;
    zoneName = 'room';
  } else if (loc.kind === 'home') {
    // Your home: no loot to search; built projects stand in their rooms (interior.js buildHome).
    cat = { label: 'Home base' };
    plan = buildHome((id) => built(state, id));
    zoneList = () => [];
    stock = 1;
    title = 'Home (Aloha)';
    zoneName = 'room';
  } else return;
  const env = environment(state, 'work');
  const night = isNight(state.time);
  document.body.classList.add('inside-open');
  const lastLines = (n0) => state.log.slice(n0).filter((e) => e.kind === 'warn' || e.kind === 'bad' || e.kind === 'story').map((e) => e.text);
  const insideH = api.openInside({
    plan,
    title,
    subtitle: `${cat.label} · inside`,
    dark: env.dark,
    night,
    // Game time and weather for the light, sky and sound (src/engine/scene.js).
    // scene: at the time you go in; getScene(): now (time passes while inside).
    scene: sceneEnv(state),
    getScene: () => sceneEnv(state),
    stock,
    hasFlashlight: () => (state.carried.flashlight || 0) > 0,
    isLightOn: () => hasLight(state),
    lightHours: () => state.player.lightHours,
    toggleLight: () => {
      const n0 = state.log.length;
      act('action', 'flashlight');
      return state.log.slice(n0).map((e) => e.text).join(' ');
    },
    hasLoot: () => Object.keys(hereBag(state)).length > 0,
    panel: (name) => insidePanel(name),
    useItem: (id, verb) => {
      const n0 = state.log.length;
      if (verb === 'take_off') act('action', 'take_off', id);
      else act('use', id, verb, 'carried');
      return state.log.slice(n0).map((e) => e.text).join(' ');
    },
    quickUse: (action) => {
      const slot = { quick_med: 'med', quick_food: 'food', quick_utility: 'utility' }[action];
      const c = quickChoice(state, slot);
      if (c.why) return c.why;
      const n0 = state.log.length;
      act('use', c.id, c.verb, 'carried');
      return state.log.slice(n0).map((e) => e.text).join(' ');
    },
    quickSave: () => {
      const ok = saveGame(state);
      return ok ? `Game saved (Day ${dayIndex(state.time) + 1}, ${formatClock(state.time)}).` : 'The game could not save in this browser.';
    },
    canQuickLoad: () => !!loadGame(),
    isDone: (z) => zoneList().includes(z),
    isCounterOpen: () => (loc.kind === 'place' ? placeState(state, getPlace(loc.id)).counterOpen : true),
    isDead: () => !!state.dead,
    // F3: engine diagnostics (systems, random streams, last actions with changed paths).
    onDebug: (on) => setDeepActivity(on),
    gameDiag: () => diagText(state),
    getStatus: () => {
      const p = state.player;
      const low = needWarnings(state).map((n) => n.word);
      const light = (state.carried.flashlight || 0) > 0 ? `Flashlight ${p.lightHours.toFixed(1)} h${p.lightOff ? " (off)" : ""}` : 'No flashlight';
      return `<b>Day ${dayIndex(state.time) + 1} · ${formatClock(state.time)}</b> · ${packText()} · ${light}`
        + (low.length ? ` · <span class="bad">⚠ ${esc(low.join(', '))}</span>` : '');
    },
    projectInfo: (id) => homeProjectText(state, id, true),
    // Lamps at home: LED lights need the project built and charge in the battery.
    homeLamps: loc.kind === 'home' ? { led: built(state, 'led_lights') && state.home.battery > 0.2, candles: state.home.storage.candles || 0 } : null,
    describe: (n) => {
      if (n.type === 'exit') return loc.kind === 'home' ? '<kbd>E</kbd> Back to the home panel' : '<kbd>E</kbd> Leave the building <small>back to the map</small>';
      if (n.type === 'project') return homeProjectText(state, n.id, false);
      if (zoneList().includes(n.zone)) return `<span class="done">${esc(n.label)}: searched</span>${Object.keys(hereBag(state)).length ? ' <kbd>F</kbd> Take all' : ''}`;
      if (n.zone === counterIdx && !placeState(state, getPlace(loc.id)).counterOpen) {
        return `<kbd>E</kbd> Open the ${esc(cat.lockedZone.name)} gate <small>${has(state, 'pry_bar') ? 'pry bar: sure to work' : esc(oddsText(odds(state, cat.lockedZone.dc, forceBonus(state), forceOpts(state))))}</small>`;
      }
      const e = environment(state, 'work');
      return `${esc(n.label)} <small>Look at an item and press <kbd>E</kbd> to take it${e.dark && !hasLight(state) ? ' · dark, no light: 2 min an item' : ''}</small>`;
    },
    onWalk: (m) => {
      perform(state, 'action', 'walk_inside', m);
      if (state.dead) recordRun(state);
      saveGame(state);
    },
    onCounter: () => {
      const n0 = state.log.length;
      act('action', 'counter');
      return state.log.slice(n0).map((e) => e.text).join(' ') || 'The gate does not move.';
    },
    items: () => buildingItems(state).map((it) => ({ ...it, name: itemName(it.item) })),
    onPickUp: (pid) => {
      const n0 = state.log.length;
      const it = buildingItems(state).find((x) => x.pid === pid);
      const wasDead = !!state.dead;
      perform(state, 'action', 'pickup', pid);
      if (!wasDead && state.dead) recordRun(state);
      const ok = !buildingItems(state).some((x) => x.pid === pid);
      saveGame(state);
      render();
      const msgs = state.log.slice(n0).filter((e) => e.kind !== 'info' || !ok).map((e) => e.text).join(' ');
      return { ok, name: it ? itemName(it.item) : '', msg: msgs };
    },
    onSeeZone: (zone) => { if (loc.kind === 'home') return; perform(state, 'action', 'see_zone', zone); saveGame(state); },
    isOpened: (cid) => openedContainers(state).includes(cid),
    notice: () => noticeOf(state),
    onOpenContainer: (cid) => {
      perform(state, 'action', 'open_container', cid);
      if (state.dead) recordRun(state);
      saveGame(state);
      render();
      return !state.dead && openedContainers(state).includes(cid);
    },
    describeItem: (it, near, touch) => {
      const def = ITEMS[it.item];
      const need = projectNeeds()[it.item];
      const bagFull = roomFor(state, it.item, 1) < 1;
      const z = sizeOf(it.item);
      return `<kbd>E</kbd> Take ${esc(def.name)} <small>${z.w}×${z.h}${bagFull ? ' · <span class="bad">pack too full</span>' : ''}</small>`
        + (need ? `<span class="need">Needed: ${esc(need)}</span>` : '')
        + (SALVAGE[it.item] ? `<small class="more">Can be taken apart: ${esc(SALVAGE[it.item].what)}</small>` : '')
        + (near > 1 ? `<small class="more">Hold ${touch ? 'USE' : 'E'}: take all ${near} in reach</small>` : '');
    },
    onSearch: (zone) => {
      const n0 = state.log.length;
      const t0 = state.time;
      delete state.lastFound;
      const wasDead = !!state.dead;
      perform(state, 'action', loc.kind === 'place' ? 'search' : 'room', zone);
      if (!wasDead && state.dead) recordRun(state);
      const found = state.lastFound || {};
      delete state.lastFound;
      commit();
      const items = Object.entries(found).map(([id, q]) => `${itemName(id)}${q > 1 ? ` ×${q}` : ''}`);
      const label = plan.spots.find((s) => s.zone === zone)?.label || zoneName;
      const extra = lastLines(n0).join(' ');
      return {
        title: `${label} · ${formatDuration(state.time - t0)}`,
        items,
        canTake: Object.keys(hereBag(state)).length > 0,
        note: extra,
      };
    },
    onTakeAll: () => {
      const n0 = state.log.length;
      act('takeall');
      return state.log.slice(n0).map((e) => e.text).join(' ') || `You put it in your pack. ${packText()}.`;
    },
    onLeave: (died, why) => {
      document.body.classList.remove('inside-open');
      insideRefresh = null; insideToast = null;
      if (why === 'quickload') {
        const saved = loadGame();
        if (saved) state = saved;
        commit(true);
        return;
      }
      // Outside, the flashlight goes back on by itself (night walks need it).
      if (state.player.lightOff) state.player.lightOff = false;
      commit();
    },
  });
  insideRefresh = () => insideH?.refresh?.();
  insideToast = (t) => insideH?.toast?.(t);
}
let insideRefresh = null;
let insideToast = null;

// ---------- first-person view of the real streets (3D pilot area) ----------
// Cells with 3D street data: docs/data/streets/index.json (built by tools/streets/).
let streetIndex = null;
function loadStreetIndex() {
  if (!streetIndex) {
    streetIndex = fetch('data/streets/index.json').then((r) => (r.ok ? r.json() : null)).catch(() => null)
      .then((ix) => { streetCells = new Set(ix?.cells || []); streetCredit = ix?.credit || ''; return ix; });
  }
  return streetIndex;
}
let streetCells = null;
let streetCredit = '';
export function streetsHere(st = state) {
  return !!(streetCells && st && streetCells.has(cellKeyAt(st.pos)));
}

async function walkOutside() {
  if (!state || state.dead || document.getElementById('inside')) return;
  if (!webglOk()) { alert('This browser cannot show 3D.'); return; }
  const ix = await loadStreetIndex();
  if (!ix || !streetsHere()) { alert('There are no 3D streets here yet. The pilot area is about 2 km around your home.'); return; }
  let api;
  try { api = await loadInside3d(); } catch (e) { alert('The 3D view did not load. Check the connection and try again.'); return; }
  const fromBuilding = state.location.kind !== 'street';
  enterStreet(state);
  saveGame(state);
  const start = WORLD_GRID.toMeters(state.pos);
  const sc = sceneEnv(state);
  const lastLines = (n0) => state.log.slice(n0).filter((e) => e.kind === 'warn' || e.kind === 'bad' || e.kind === 'story' || e.kind === 'event').map((e) => e.text);
  const atHomeDoor = (ll) => metersBetween(ll, homeOf(state)) < 30;
  document.body.classList.add('inside-open');
  api.openStreets({
    title: 'Outside',
    start: { x: start.x, z: start.z },
    snapToDoor: fromBuilding,
    cells: ix.cells,
    credit: `Map data ${streetCredit}`,
    scene: sc,
    getScene: () => sceneEnv(state),
    bare: sc.season === 'winter' || (sc.season === 'autumn' && dayIndex(state.time) % 365 > 60),
    isLightOn: () => hasLight(state) && isNight(state.time),
    toggleLight: () => {
      const n0 = state.log.length;
      act('action', 'flashlight');
      return state.log.slice(n0).map((e) => e.text).join(' ');
    },
    getStatus: () => {
      const low = needWarnings(state).map((n) => n.word);
      return `<b>Day ${dayIndex(state.time) + 1} · ${formatClock(state.time)}</b> · ${esc(weatherInfo(state).label || '')} · ${packText()}`
        + (low.length ? ` · <span class="bad">⚠ ${esc(low.join(', '))}</span>` : '');
    },
    isDead: () => !!state.dead,
    onMove: (ll) => {
      const n0 = state.log.length;
      const wasDead = !!state.dead;
      const r = streetMove(state, ll);
      afterAction();
      if (!wasDead && state.dead) recordRun(state);
      if (r.minutes > 0 || state.log.length > n0) saveGame(state);
      return lastLines(n0).map(esc).join(' ');
    },
    describeDoor: (door, ll) => {
      if (door.placeId && getPlace(door.placeId)) return `<kbd>E</kbd> Go in: ${esc(getPlace(door.placeId).name)}`;
      if (door.kind === 0 && atHomeDoor(ll)) return '<kbd>E</kbd> Go inside your home';
      if (door.name) return `${esc(door.name)} <small>closed. Nothing to find here</small>`;
      if (door.kind === 0) return 'A house <small>Going into real houses from the street comes next. Use "Search a house" on the map for now.</small>';
      return 'The door is locked <small>nothing to find here</small>';
    },
    onDoor: (door, ll) => {
      if (door.placeId && getPlace(door.placeId)) {
        state.pos = { lat: ll.lat, lon: ll.lon };
        const r = enterPlaceFromStreet(state, door.placeId);
        if (!r.ok) return { text: 'You cannot go in here.' };
        afterAction();
        return { close: true };
      }
      if (door.kind === 0 && atHomeDoor(ll)) {
        perform(state, 'action', 'go_home');
        afterAction();
        return { close: true };
      }
      return null;
    },
    onClose: () => {
      document.body.classList.remove('inside-open');
      if (state.player.lightOff) state.player.lightOff = false;
      commit(true);
    },
  });
}

// Parts that unbuilt home projects still need: item id -> "Rain barrels 1/2".
function projectNeeds() {
  const out = {};
  for (const p of PROJECTS) {
    const st = projectStatus(state, p);
    if (st.built || st.started || st.missingReq.length) continue;
    for (const x of st.parts) if (x.have < x.need && !out[x.id]) out[x.id] = `${p.name} ${qtyText(Math.min(x.have, x.need))}/${x.need}`;
    for (const t of st.tools) if (!t.have && !out[t.id]) out[t.id] = `${p.name} (tool)`;
  }
  return out;
}

// The journal writes itself: one entry per day, newest first.
function journalHtml(maxDays) {
  const days = (state.journal || []).slice(-maxDays).reverse();
  if (!days.length) return '<p class="hint">Nothing yet.</p>';
  return days.map((d) => {
    const parts = [];
    if (d.places.length) parts.push(`You went to ${d.places.join(', ')}.`);
    if (d.taken) parts.push(`You picked up ${d.taken} item${d.taken > 1 ? 's' : ''}.`);
    if (d.searched) parts.push(`You searched ${d.searched} area${d.searched > 1 ? 's' : ''}.`);
    if (!parts.length && !d.events.length) parts.push('You stayed close to home.');
    const ev = d.events.map((t) => `<li>${esc(t)}</li>`).join('');
    return `<div class="jday"><b>Day ${d.day + 1} · ${esc(formatDate(d.day * 1440))}</b><p>${esc(parts.join(' '))}</p>${ev ? `<ul>${ev}</ul>` : ''}</div>`;
  }).join('');
}

// Panels inside the 3D view (Tab, C, J, O).
function insidePanel(name) {
  const p = state.player;
  if (name === 'inventory') {
    const here = hereBag(state);
    wantIcons([...Object.keys(here), ...Object.keys(state.carried)]);
    const use = packUse(state);
    const fill = Math.min(100, Math.round((use.used / Math.max(1, use.total)) * 100));
    const hereList = Object.keys(here).length ? `<section class="bag bag-here"><h5><span class="bag-ico" aria-hidden="true">⌕</span>Found here <span class="bag-tag">not yours yet</span>
      <button class="primary small" data-in="take">Take all that fits (F)</button></h5>${gridHtml('here', gridOpts('here'))}</section>` : '';
    return `<h4>Inventory</h4><p class="stock">${esc(stockLine(state))}</p>${selectedHtml(true)}
      <div class="grids"><section class="bag bag-pack"><h5><span class="bag-ico" aria-hidden="true">▣</span>In your pack <span class="bag-tag">yours</span> <span class="${use.over ? 'bad' : ''}">${use.used} / ${use.total} cells</span></h5>
      <div class="bag-load${use.over ? ' over' : ''}"><i style="width:${fill}%"></i></div>${gridHtml('pack', gridOpts('pack'))}</section>${hereList}</div>
      <p class="hint">Drag to move or to take · R turns a tile · tap a tile for its buttons.</p>`;
  }
  if (name === 'character') {
    const rows = Object.keys(STAT_INFO).map((k) => statRow(k, p, true)).join('')
      + risks(state).map((r) => `<div class="risk-line">⚠ ${esc(r.text)}</div>`).join('');
    const notes = [];
    for (const i of p.injuries) notes.push(`${injuryName(i)}${i.bandaged ? ' (bandaged)' : ''}`);
    if (p.illness.infection) notes.push('Infection');
    if (p.illness.stomachH > 0) notes.push('Stomach bug');
    if (p.wet) notes.push('Wet');
    return `<h4>Character</h4>${rows}
      <p class="hint">${notes.length ? esc(notes.join(' · ')) : 'No injuries or illness.'}</p>
      ${clothesHtml()}
      ${skillsHtml(true)}`;
  }
  if (name === 'journal') {
    const items = state.log.slice(-10).reverse().map((e) => `<li class="${e.kind}"><time>D${dayIndex(e.t) + 1} ${formatClock(e.t)}</time> ${esc(e.text)}</li>`).join('');
    return `<h4>Journal</h4>${journalHtml(6)}<h5>Last events</h5><ul class="jr">${items}</ul>`;
  }
  if (name === 'objectives') {
    return '<h4>Objectives</h4><p>There is nobody to save and nothing to find. Stay alive: eat, drink, keep warm, and get home before night.</p>';
  }
  return null;
}

// ---------- events ----------
function bindEvents() {
  document.body.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b || b.disabled || !state || b.closest('#modal') || b.closest('.maplibregl-popup')) return;
    // A button the 3D view already handled and redrew is no longer in the page: done.
    // (Before this check, Eat in the 3D inventory ate twice.)
    if (!b.isConnected) return;
    if (b.closest('#inside')) {
      // The 3D view handles its own buttons; only the grid's Take/Drop come here.
      if (b.dataset.take) act('take', b.dataset.take);
      else if (b.dataset.drop) act('drop', b.dataset.drop);
      else return;
      gridSel = null;
      insideRefresh?.();
      return;
    }
    if (b.dataset.act) {
      if (b.dataset.act === 'sleep') return showSleep();
      if (b.dataset.act === 'walk_in') return walkInside();
      if (b.dataset.act === 'walk_out') return walkOutside();
      act('action', b.dataset.act);
    } else if (b.dataset.use && b.dataset.verb === 'take_off') act('action', 'take_off', b.dataset.use);
    else if (b.dataset.use) act('use', b.dataset.use, b.dataset.verb, b.dataset.from);
    else if (b.dataset.take) act('take', b.dataset.take);
    else if (b.dataset.takeall) act('takeall');
    else if (b.dataset.drop) act('drop', b.dataset.drop);
    else if (b.dataset.build) act('action', 'build', b.dataset.build);
    else if (b.dataset.goalboard) showGoalBoard();
    else if (b.dataset.garden) {
      const [what, crop] = b.dataset.garden.split(':');
      act('action', `garden_${what}`, crop);
    } else if (b.dataset.sleepspot) act('action', 'sleep_spot', b.dataset.sleepspot);
    else if (b.dataset.board) act('action', 'board_window', b.dataset.board);
    else if (b.dataset.door) act('action', 'door', b.dataset.door);
    else if (b.dataset.goaldrop) {
      const why = dropGoal(state, b.dataset.goaldrop);
      if (why) alert(why); else commit();
    } else if (b.id === 'menuBtn') showMenu();
    else if (b.id === 'centerBtn' && mapApi) mapApi.flyTo(state.pos);
  });
  document.body.addEventListener('toggle', (e) => {
    const w = e.target.dataset && e.target.dataset.wing;
    if (!w) return;
    if (e.target.open) openWings.add(w); else openWings.delete(w);
  }, true);
  window.addEventListener('beforeunload', () => { if (state) saveGame(state); });
}

// F3 text from the engine diagnostics: weather, pacer, breakdown, systems, random streams,
// save size and the last 3 actions (with changed paths while F3 is open).
function diagText(state) {
  const d = diagnostics(state, { records: 3 });
  const w = d.weather;
  const shares = Object.entries(d.decay.shares).filter(([, v]) => v > 0).map(([k, v]) => `${k} ${Math.round(v * 100)}%`).join('  ');
  const streams = Object.entries(d.rng.streams).map(([k, v]) => `${k}:${(v >>> 0).toString(36)}`).join(' ');
  return [
    `day ${d.day}  ${w.label} ${w.low}-${w.high}°F${w.spell ? `  spell ${w.spell.id} (${w.spell.daysLeft} d)` : ''}`,
    `pacer: month ${d.pacer.month}  tension ${d.pacer.tension}  ${(d.pacer.chancePerHour * 100).toFixed(1)}%/h  events ${d.pacer.events}`,
    `breakdown: ${shares || 'none yet'}${d.decay.next ? `  next ${d.decay.next.id} ~day ${d.decay.next.day + 1}` : ''}`,
    `systems: ${d.systems.map((x) => x.id).join(' ')}`,
    `rng ${(d.rng.shared >>> 0).toString(36)}  ${streams}  save ${d.saveBytes == null ? '?' : `${(d.saveBytes / 1024).toFixed(0)} KB`}${d.deep ? '  deep log on' : ''}`,
    ...d.activity.slice(-3).flatMap((r) => activityText(r).split('\n').slice(0, 6)),
  ];
}

// What you see when you look at a home project in the 3D view: built (what it does) or not
// (what it still needs). long: the E text with every part.
function homeProjectText(state, id, long) {
  if (id === 'home_battery') {
    const h = state.home;
    const txt = `${h.battery.toFixed(1)} / ${h.batteryMax} kWh · charged by the solar panels`;
    return long ? `Home battery: ${txt}.` : `Home battery <small>${txt}</small>`;
  }
  const proj = PROJECTS.find((p) => p.id === id);
  if (!proj) return '';
  const st = projectStatus(state, proj);
  if (st.built) return long ? `${proj.name}: built. ${proj.effect || ''}` : `${esc(proj.name)} <small>built · ${esc(proj.effect || '')}</small>`;
  const parts = st.parts.map((x) => `${itemName(x.id).toLowerCase()} ${Math.min(x.have, x.need)}/${x.need}`).join(', ');
  const tools = st.tools.length ? ` · tools: ${st.tools.map((t) => itemName(t.id).toLowerCase() + (t.have ? '' : ' (missing)')).join(', ')}` : '';
  const req = st.missingReq.length ? ` · build first: ${st.missingReq.map((r) => PROJECTS.find((p) => p.id === r)?.name || r).join(', ')}` : '';
  if (long) return `${proj.name}: not built. Needs ${parts}${tools}${req}. ${proj.hours} h of work. Build it from the home panel.`;
  return `<span class="done">${esc(proj.name)}: not built</span> <small>needs ${esc(parts)}${esc(tools)}${esc(req)} · <kbd>E</kbd> details</small>`;
}

// Heat path (engine home.js homeHeat): where the heat comes from, each room's temperature,
// what lets it out, and where you sleep.
function renderHeat(atHome) {
  const hh = homeHeat(state);
  const src = [];
  if (hh.sources.fireHours > 0) src.push(`${hh.sources.stove ? 'Wood stove' : 'Fireplace'} (${formatDuration(hh.sources.fireHours * 60)} left)`);
  if (hh.sources.heater) src.push('Electric heater');
  const tcls = (t) => (t < 40 ? 'bad' : t < 55 ? 'warn' : 'ok');
  const rows = hh.rooms.map((r) => {
    const leaks = [];
    if (r.brokenWindows > 0) leaks.push(`${r.brokenWindows} broken window${r.brokenWindows > 1 ? 's' : ''}`);
    if (r.boardedWindows > 0) leaks.push(`${r.boardedWindows} boarded`);
    if (r.id === 'living' && hh.insulated) leaks.push('insulated');
    const board = r.brokenWindows > 0 ? `<button class="small" data-board="${r.id}" ${atHome ? '' : 'disabled'} title="1 scrap wood, 30 min">Board up a window</button>` : '';
    const door = r.doorClosed == null ? '' : `<button class="small" data-door="${r.id}:${r.doorClosed ? 0 : 1}" ${atHome ? '' : 'disabled'}>${r.doorClosed ? 'Open door' : 'Close door'}</button>`;
    const bed = r.id === 'bedroom' || r.id === 'living'
      ? (hh.sleepSpot === r.id ? '<span class="chip ok">You sleep here</span>' : `<button class="small" data-sleepspot="${r.id}" ${atHome ? '' : 'disabled'}>Sleep here</button>`)
      : '';
    const w = Math.max(4, Math.min(100, ((r.temp - 20) / 50) * 100));
    return `<div class="heat-row">
      <span class="hn">${esc(r.label)}</span>
      <span class="hbar"><i class="${tcls(r.temp)}" style="width:${w}%"></i></span>
      <b class="${tcls(r.temp)}">${Math.round(r.temp)}°F</b>
      <small>${esc(leaks.join(' · ') || 'closed up')}${r.loss > 1.05 ? ` · draft ×${r.loss.toFixed(1)}` : ''}</small>
      <span class="hb">${board}${door}${bed}</span>
    </div>`;
  }).join('');
  return `<div class="heat">
    <h3>Heat <small>outside ${hh.outside}°F</small></h3>
    <p class="sub">Heat from: ${src.length ? esc(src.join(', ')) : 'nothing now (light a fire or turn on the heater)'} → living room → rooms with open doors. Closed doors keep a room's heat in or out.</p>
    ${rows}
  </div>`;
}

// Garden (engine garden.js): beds, what grows, and what you can sow this month.
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// [1,2,3,6,7,8] -> "Feb–Apr, Jul–Sep"
function monthsText(list) {
  const m = [...list].sort((a, b) => a - b);
  const runs = [];
  for (const x of m) { const r = runs[runs.length - 1]; if (r && x === r[1] + 1) r[1] = x; else runs.push([x, x]); }
  return runs.map(([a, b]) => (a === b ? MONTHS[a] : `${MONTHS[a]}–${MONTHS[b]}`)).join(', ');
}

function renderGarden(atHome) {
  const g = gardenInfo(state);
  if (!g.beds) return '';
  const beds = [];
  for (let i = 0; i < g.beds; i++) {
    const b = g.planted[i];
    if (!b) { beds.push('<div class="bed empty"><span>Empty bed</span></div>'); continue; }
    const stage = { seedling: 'seedlings', growing: 'growing', nearly: 'nearly ready', ready: 'ready to harvest', dead: 'dead' }[b.stage] || b.stage;
    beds.push(`<div class="bed ${b.dead ? 'dead' : b.ready ? 'ready' : ''}"><b>${esc(b.name)}</b> <span>${stage}</span>
      <span class="hbar"><i class="ok" style="width:${b.growth}%"></i></span><small>${b.dead || b.ready ? '' : `${b.growth}% grown · about ${Math.max(1, Math.round((CROPS[b.crop].days * (100 - b.growth)) / 100))} days left if warm · `}water ${b.water}%</small></div>`);
  }
  const sow = g.canSow.map((id) => {
    const why = canPlant(state, id);
    return `<button class="small" data-garden="plant:${id}" ${atHome && !why ? '' : 'disabled'} title="${esc(why || '')}">Sow ${esc(CROPS[id].name.toLowerCase())}</button>`;
  }).join('');
  const any = g.planted.some((b) => !b.dead && !b.ready);
  const ripe = g.planted.some((b) => b.ready);
  return `<div class="garden">
    <h3>Garden <small>${g.planted.filter((b) => !b.dead).length} / ${g.beds} beds in use</small></h3>
    <div class="beds">${beds.join('')}</div>
    <div class="row">
      ${any ? `<button class="small" data-garden="water" ${atHome ? '' : 'disabled'}>Water the beds (15 min)</button>` : ''}
      ${ripe ? `<button class="small primary" data-garden="harvest" ${atHome ? '' : 'disabled'}>Harvest (30 min)</button>` : ''}
    </div>
    <p class="sub">${sow ? `Sow now (30 min, 1 seed packet):` : 'Nothing to sow this month.'}</p>
    <div class="row">${sow}</div>
    <p class="hint">When to sow: ${Object.values(CROPS).map((c) => `${esc(c.name.toLowerCase())} ${monthsText(c.plant)}`).join(' · ')}. In winter the soil is too cold: crops grow slowly or not at all, and frost kills tender ones.</p>
  </div>`;
}
