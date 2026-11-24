// Screen: side panel, buttons, popups and dialogs.
import { ITEMS, itemName } from '../data/items.js';
import { CATEGORIES } from '../data/places.js';
import {
  newGame, formatClock, formatDate, formatDuration, dayIndex, bagWeight, carryLimit, HOME, homeOf, randomStartPoint, MAP_RADIUS_MILES, has, hasLight,
} from '../engine/state.js';
import { airTemp, isNight, sunFor, weatherInfo } from '../engine/world.js';
import { feltTemp, INJURY_NAMES, environment } from '../engine/tick.js';
import { forceOpts, listActions, itemUses, hereBag, locationLabel, searchMinutes, zonesDoneList, quickChoice, buildingItems, openedContainers } from '../engine/actions.js';
import { buildInterior } from '../engine/interior.js';
import { odds, oddsText } from '../engine/checks.js';
import { allSkills, SKILLS, noticeOf, forceBonus } from '../engine/skills.js';
import { SLOTS, SLOT_NAMES, normalizeWorn, wornText } from '../engine/clothes.js';
import { statStage, needWarnings, risks } from '../engine/status.js';
import { stockLine, powerSummary } from '../engine/stock.js';
import { estimateTrip, describeTrip, straightMiles } from '../engine/travel.js';
import { placeState } from '../engine/loot.js';
import { perform } from '../engine/game.js';
import { setPlaces, getPlace, allPlaces } from '../engine/placesdb.js';
import { saveGame, loadGame, clearGame, parseSave, recordRun, bestRuns } from '../engine/save.js';
import { createMap } from './map.js';
import { createFx } from './fx.js';
import { PROJECTS } from '../data/projects.js';
import { seasonOf, SEASONS } from '../engine/season.js';
import { projectStatus, wingSummary, builtCount, WORK_BLOCK_H } from '../engine/base.js';

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
  fx = createFx($('#mapwrap'));
  $('#legend').innerHTML = Object.entries(CATEGORIES).filter(([k]) => k !== 'house')
    .map(([, c]) => `<span><i style="background:${c.color}"></i>${c.label}</span>`).join('')
    + '<span><i class="part"></i>Visited, not all searched</span><span><i class="done"></i>All searched</span>'
    + '<span><i class="edge"></i>15-mile edge</span>';
  try {
    mapApi = await createMap($('#map'), { places: allPlaces(), onPlaceClick: showPlacePopup });
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
    <div class="wx">${SEASONS[seasonOf(t)].label} · ${esc(weatherInfo(state).label)} · ${air}°F outside · wind ${w.wind} mph · ${sunText}</div>`;
}

// Skills: level 0..5, a bar to the next level, and what the skill does.
// Clothes by layer, with the warmth each gives, the wetness and the "feels like" number.
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
document.addEventListener('toggle', (e) => {
  if (!e.target.classList) return;
  if (e.target.classList.contains('skills')) skillsOpen = e.target.open;
  if (e.target.classList.contains('clothes')) clothesOpen = e.target.open;
}, true);
function skillsHtml(open) {
  const rows = allSkills(state).map((k) => {
    const sk = SKILLS[k.key];
    const next = k.next == null ? 'max level' : `${k.next} xp to level ${k.level + 1}`;
    return `<div class="skill" title="${esc(`${sk.how} ${sk.perLevel}`)}"><span class="sl">${esc(k.name)}</span><span class="lv">${k.level}</span><span class="bar"><i style="width:${Math.round(k.frac * 100)}%"></i></span><span class="sn">${esc(next)}</span><span class="sh">${esc(sk.perLevel)}</span></div>`;
  }).join('');
  const read = (state.skills && state.skills.books || []).length;
  return `<details class="skills"${open || skillsOpen ? ' open' : ''}><summary>Skills</summary>${rows}<p class="hint">You learn by doing. A book teaches a skill once${read ? ` (${read} read)` : ''}.</p></details>`;
}

function renderStats() {
  const p = state.player;
  const rows = Object.keys(STAT_INFO).map((k) => statRow(k, p, true)).join('');
  const chips = riskChips();
  if (p.weak) chips.push(['warn', `Weak (Energy max ${p.energyMax})`]);
  if (p.wet) chips.push(['bad', 'Wet']);
  for (const i of p.injuries) chips.push(['bad', `${INJURY_NAMES[i.type]}${i.bandaged ? ' (bandaged)' : ''}`]);
  if (p.illness.infection) chips.push(['bad', `Infection${p.illness.infection.abxH != null ? ' (on antibiotics)' : ''}`]);
  if (p.illness.stomachH > 0) chips.push(['bad', 'Stomach bug']);
  if (p.painH > 0) chips.push(['ok', 'Pain pills']);
  const felt = Math.round(feltTemp(state, 'rest'));
  chips.push(['', `Feels like ${felt}°F`]);
  if ((state.carried.flashlight || 0) > 0) chips.push([p.lightHours > 0 ? '' : 'warn', `Flashlight ${p.lightHours.toFixed(1)} h`]);
  if (p.wetness >= 10) chips.push([p.wetness >= 50 ? 'bad' : 'warn', `Wet ${Math.round(p.wetness)}%`]);
  chips.push(['', `Wearing: ${wornText(p)}`]);
  $('#stats').innerHTML = '<div class="eyebrow">Vitals</div>' + rows + `<div class="chips">${chips.map(([c, t]) => `<span class="chip ${c}">${esc(t)}</span>`).join('')}</div>` + `<details class="clothes"${clothesOpen ? ' open' : ''}><summary>Clothes</summary>${clothesHtml()}</details>` + skillsHtml(false);
}

function renderLocation() {
  const loc = state.location;
  let sub = '';
  if (loc.kind === 'place') {
    const p = getPlace(loc.id);
    sub = CATEGORIES[p.cat].label;
  } else if (loc.kind === 'home') sub = 'Your house. One story, a fireplace, solar panels and a home battery.';
  else sub = 'A house. Search it room by room.';
  const acts = listActions(state).map((a) => {
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

function itemRow(id, q, from, buttons) {
  const it = ITEMS[id];
  const w = Math.round(it.weight * q * 10) / 10;
  return `<li><span class="in">${esc(it.name)}</span><span class="iq">${qtyText(q)} ${esc(it.unit)}</span><span class="iw">${w} lb</span><span class="ib">${buttons}</span></li>`;
}

function useButtons(id, from) {
  return itemUses(state, id).map((u) => `<button data-use="${id}" data-verb="${u.verb}" data-from="${from}">${esc(u.label)}</button>`).join('');
}

// Auto-sort: items in groups by kind, then by name.
const KIND_GROUPS = [
  ['Food', ['food', 'dogfood']], ['Water', ['drink']], ['Medicine', ['med']],
  ['Light and tools', ['tool', 'batteries']], ['Clothes', ['wear']],
  ['Fuel and parts', ['fuel', 'part']], ['Books', ['book']], ['Other', ['misc', 'comfort', 'warm']],
];
function groupOf(id) {
  const k = ITEMS[id] ? ITEMS[id].kind : 'misc';
  const i = KIND_GROUPS.findIndex(([, kinds]) => kinds.includes(k));
  return i < 0 ? KIND_GROUPS.length - 1 : i;
}
function sortedIds(bag) {
  return Object.keys(bag).sort((a, b) => groupOf(a) - groupOf(b) || itemName(a).localeCompare(itemName(b)));
}
// Item rows with a small group header when the group changes.
function groupedRows(ids, row) {
  let last = -1;
  return ids.map((id) => {
    const g = groupOf(id);
    const head = g !== last ? `<li class="grp">${KIND_GROUPS[g][0]}</li>` : '';
    last = g;
    return head + row(id);
  }).join('');
}

function renderItems() {
  const loc = state.location;
  const here = hereBag(state);
  const hereIds = sortedIds(here);
  const hereTitle = loc.kind === 'home' ? 'House storage' : 'Items you found here';
  let hereHtml = groupedRows(hereIds, (id) => itemRow(id, here[id], 'here',
    (loc.kind === 'home' ? useButtons(id, 'storage') : '') + `<button data-take="${id}">Take</button>`));
  if (!hereIds.length) hereHtml = `<li class="empty">${loc.kind === 'home' ? 'Nothing stored.' : 'Nothing here yet. Search to find items.'}</li>`;
  const takeAll = hereIds.length && loc.kind !== 'home' ? '<button class="small" data-takeall="1">Take all that fits</button>' : '';

  const carried = state.carried;
  const cIds = sortedIds(carried);
  const weight = bagWeight(carried);
  const limit = carryLimit(state);
  const over = weight > limit;
  let cHtml = groupedRows(cIds, (id) => itemRow(id, carried[id], 'carried',
    useButtons(id, 'carried') + `<button data-drop="${id}">${loc.kind === 'home' ? 'Store' : 'Drop'}</button>`));
  if (!cIds.length) cHtml = '<li class="empty">You carry nothing.</li>';
  $('#items').innerHTML = `
    <p class="stock">${esc(stockLine(state))} <small>at rest, carried + stored at home</small></p>
    <h3>${hereTitle} ${takeAll}</h3><ul class="items">${hereHtml}</ul>
    <h3>You carry <span class="${over ? 'bad' : ''}">${weight} / ${limit} lb${over ? ' (too heavy: slow)' : ''}</span></h3>
    <ul class="items">${cHtml}</ul>`;
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
      <span>Boiled water</span><b>${h.safeGal.toFixed(1)} gal</b>
      <span>Unsafe water</span><b>${h.rawGal.toFixed(1)} gal</b>
      <span>Kitchen tap</span><b>${h.tapWorks ? 'weak flow' : 'stopped'}</b>
    </div>
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
  const list = Object.entries(need).map(([id, q]) => `<span class="chip">${esc(itemName(id))} ×${q}</span>`).join('');
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
    const est = estimateTrip(state, pos);
    html = `<h4>Home</h4><p>Your house ${esc(state.homeLabel || 'in Aloha')}.</p>${atHome ? '<p><i>You are here.</i></p>'
      : `<p>${describeTrip(state, est)}</p><button class="go" data-gohome="1">Walk home</button>`}`;
  } else {
    const p = getPlace(id);
    pos = p;
    const cat = CATEGORIES[p.cat];
    const ps = state.places[p.id];
    const status = !ps || !ps.visited ? 'Not searched' : ps.zonesDone >= ps.zones ? 'Searched: nothing left' : `Searched ${ps.zonesDone} of ${ps.zones} ${cat.zoneName}s`;
    const here = state.location.kind === 'place' && state.location.id === id;
    const est = estimateTrip(state, p);
    const fromHome = straightMiles(homeOf(state), p).toFixed(1);
    html = `<h4>${esc(p.name)}</h4><p>${cat.label} · ${fromHome} mi from home</p><p><i>${status}</i></p>
      ${here ? '<p><i>You are here.</i></p>' : `<p>${describeTrip(state, est)}${est.why.length ? `<br><small>Slow: ${est.why.join(', ')}</small>` : ''}</p>
      <button class="go" data-goplace="${p.id}">Walk here</button>`}`;
  }
  popup = new maplibregl.Popup({ closeButton: true, maxWidth: '260px' })
    .setLngLat(lngLat || [pos.lon, pos.lat]).setHTML(html).addTo(mapApi.map);
  const el = popup.getElement();
  el.querySelector('[data-goplace]')?.addEventListener('click', (e) => {
    popup.remove();
    travelTo(e.currentTarget.dataset.goplace);
  });
  el.querySelector('[data-gohome]')?.addEventListener('click', () => {
    popup.remove();
    travelTo('__home');
  });
}

function travelTo(id) {
  if (state.dead) return;
  if (state.location.kind === 'house') perform(state, 'action', 'leave_house');
  if (id === '__home') perform(state, 'action', 'go_home');
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
      state = newGame();
      closeModal();
      commit(true);
    });
  });
}

function showSleep() {
  const opts = [1, 2, 4, 6, 8, 10].map((h) => `<button data-hours="${h}">${h} h</button>`).join('');
  modal(`<h3>How long do you want to sleep?</h3><p class="hint">Sleep gives Energy. The fire does not burn while you sleep unless you add wood first.</p><div class="row">${opts}</div><button class="link" id="cancel">Cancel</button>`, (m) => {
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

function showDeath() {
  const d = state.dead;
  const runs = bestRuns().map((r) => `<li>${r.days} days · ${esc(r.cause)}${r.dog ? ` · with ${esc(r.dog)}` : ''}</li>`).join('');
  modal(`<h2>You died</h2>
    <p>You lived ${d.days} day${d.days === 1 ? '' : 's'} after you woke up. You died on ${formatDate(d.time)} at ${formatClock(d.time)}, of ${esc(d.cause)}.</p>
    <div class="grid"><span>Miles walked</span><b>${state.stats.miles.toFixed(1)}</b><span>Places searched</span><b>${state.stats.placesSearched}</b>
    <span>Houses searched</span><b>${state.stats.housesSearched}</b><span>Dog</span><b>${state.dog.name ? esc(state.dog.name) : 'none'}</b></div>
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
  clearGame();
  state = newGame(undefined, opts);
  closeModal();
  commit(true);
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

function showMenu() {
  modal(`<h3>Game</h3>
    <p class="hint">The game saves in this browser after each action.</p>
    <div class="col">
      <label class="toggle"><input type="checkbox" id="fxToggle" ${fx && fx.enabled ? 'checked' : ''}> Weather effects on the map (snow, rain, fog, night)</label>
      <button id="exp">Export a backup file</button>
      <label class="filebtn">Import a backup file<input type="file" id="imp" accept=".json,application/json" hidden></label>
      <button id="newrun" class="danger">Give up and start a new run</button>
      <button class="link" id="cancel">Close</button>
    </div>
    <p class="hint">Map data © OpenStreetMap contributors (ODbL). Map tiles: OpenFreeMap.</p>`, (m) => {
    m.querySelector('#cancel').addEventListener('click', closeModal);
    m.querySelector('#fxToggle').addEventListener('change', (e) => { if (fx) fx.setEnabled(e.target.checked); });
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
  } else return;
  const env = environment(state, 'work');
  const night = isNight(state.time);
  document.body.classList.add('inside-open');
  const lastLines = (n0) => state.log.slice(n0).filter((e) => e.kind === 'warn' || e.kind === 'bad' || e.kind === 'story').map((e) => e.text);
  api.openInside({
    plan,
    title,
    subtitle: `${cat.label} · inside`,
    dark: env.dark,
    night,
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
    getStatus: () => {
      const p = state.player;
      const low = needWarnings(state).map((n) => n.word);
      const light = (state.carried.flashlight || 0) > 0 ? `Flashlight ${p.lightHours.toFixed(1)} h${p.lightOff ? " (off)" : ""}` : 'No flashlight';
      return `<b>Day ${dayIndex(state.time) + 1} · ${formatClock(state.time)}</b> · Bag ${bagWeight(state.carried)} / ${carryLimit(state)} lb · ${light}`
        + (low.length ? ` · <span class="bad">⚠ ${esc(low.join(', '))}</span>` : '');
    },
    describe: (n) => {
      if (n.type === 'exit') return '<kbd>E</kbd> Leave the building <small>back to the map</small>';
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
    onSeeZone: (zone) => { perform(state, 'action', 'see_zone', zone); saveGame(state); },
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
      const bagFull = def.weight > carryLimit(state) * 1.5 - bagWeight(state.carried) + 1e-9;
      return `<kbd>E</kbd> Take ${esc(def.name)} <small>${def.weight} lb${bagFull ? ' · <span class="bad">pack too full</span>' : ''}</small>`
        + (need ? `<span class="need">Needed: ${esc(need)}</span>` : '')
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
      return state.log.slice(n0).map((e) => e.text).join(' ') || `You put it in your pack. Bag: ${bagWeight(state.carried)} / ${carryLimit(state)} lb.`;
    },
    onLeave: (died, why) => {
      document.body.classList.remove('inside-open');
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
    const c = state.carried;
    const ids = sortedIds(c);
    const rows = groupedRows(ids, (id) => {
      const it = ITEMS[id];
      const btns = itemUses(state, id).filter((u) => u.verb !== 'feeddog' || state.dog.withPlayer)
        .map((u) => `<button class="small" data-use="${id}" data-verb="${u.verb}">${esc(u.label)}</button>`).join('');
      return `<li><span>${esc(it.name)}</span><span class="q">${qtyText(c[id])} ${esc(it.unit)}</span><span class="b">${btns}</span></li>`;
    }) || '<li class="empty">You carry nothing.</li>';
    const here = hereBag(state);
    const hereIds = Object.keys(here);
    const hereList = hereIds.length ? `<h5>Found here, not taken</h5><ul class="inv">${hereIds.map((id) => `<li><span>${esc(itemName(id))}</span><span class="q">${qtyText(here[id])}</span></li>`).join('')}</ul>
      <button class="primary small" data-in="take">Take all that fits (F)</button>` : '';
    return `<h4>Inventory · ${bagWeight(state.carried)} / ${carryLimit(state)} lb</h4><p class="stock">${esc(stockLine(state))}</p><ul class="inv">${rows}</ul>${hereList}`;
  }
  if (name === 'character') {
    const rows = Object.keys(STAT_INFO).map((k) => statRow(k, p, true)).join('')
      + risks(state).map((r) => `<div class="risk-line">⚠ ${esc(r.text)}</div>`).join('');
    const notes = [];
    for (const i of p.injuries) notes.push(`${INJURY_NAMES[i.type]}${i.bandaged ? ' (bandaged)' : ''}`);
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
    if (b.dataset.act) {
      if (b.dataset.act === 'sleep') return showSleep();
      if (b.dataset.act === 'walk_in') return walkInside();
      act('action', b.dataset.act);
    } else if (b.dataset.use && b.dataset.verb === 'take_off') act('action', 'take_off', b.dataset.use);
    else if (b.dataset.use) act('use', b.dataset.use, b.dataset.verb, b.dataset.from);
    else if (b.dataset.take) act('take', b.dataset.take);
    else if (b.dataset.takeall) act('takeall');
    else if (b.dataset.drop) act('drop', b.dataset.drop);
    else if (b.dataset.build) act('action', 'build', b.dataset.build);
    else if (b.id === 'menuBtn') showMenu();
    else if (b.id === 'centerBtn' && mapApi) mapApi.flyTo(state.pos);
  });
  document.body.addEventListener('toggle', (e) => {
    const w = e.target.dataset && e.target.dataset.wing;
    if (!w) return;
    if (e.target.open) openWings.add(w); else openWings.delete(w);
  }, true);
  window.addEventListener('beforeunload', () => { if (state) saveGame(state); });
}
