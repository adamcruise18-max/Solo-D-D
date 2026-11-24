// The real map: MapLibre GL + OpenFreeMap vector tiles (OpenStreetMap data).
// If the tile server cannot be reached, the game still works on a plain map.
import { CATEGORIES } from '../data/places.js';
import { HOME, MAP_RADIUS_MILES } from '../engine/state.js';
import { winterizeStyle, seasonPaint } from './winter-style.js';
import { detailFeatures, addDetailIcons, DETAIL_INFO } from './details.js';
import { seasonOf, overgrowth } from '../engine/season.js';

// "liberty" is the full-color OpenFreeMap style (streets, parks, water, buildings).
// Do not use "dark": its colors are almost black, so the map looks empty.
const STYLE_URLS = [
  'https://tiles.openfreemap.org/styles/liberty',
  'https://tiles.openfreemap.org/styles/bright',
  'https://tiles.openfreemap.org/styles/positron',
];

const OFFLINE_STYLE = {
  version: 8,
  sources: {},
  layers: [{ id: 'bg', type: 'background', paint: { 'background-color': '#dfe6ec' } }],
};

async function pickStyle() {
  for (const url of STYLE_URLS) {
    try {
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), 5000);
      const res = await fetch(url, { signal: ctl.signal });
      clearTimeout(timer);
      if (res.ok) return { style: winterizeStyle(await res.json()), online: true };
    } catch { /* try next */ }
  }
  return { style: OFFLINE_STYLE, online: false };
}

function circlePolygon(center, miles, n = 128) {
  const coords = [];
  const latR = miles / 69.0;
  const lonR = miles / (69.0 * Math.cos((center.lat * Math.PI) / 180));
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * 2 * Math.PI;
    coords.push([center.lon + lonR * Math.cos(a), center.lat + latR * Math.sin(a)]);
  }
  return { type: 'Feature', geometry: { type: 'LineString', coordinates: coords }, properties: {} };
}

export async function createMap(container, { places, onPlaceClick }) {
  const maplibregl = window.maplibregl;
  const { style, online } = await pickStyle();
  const map = new maplibregl.Map({
    container,
    style,
    center: [HOME.lon, HOME.lat],
    zoom: 12.5,
    minZoom: 9,
    maxZoom: 18,
    maxBounds: [[HOME.lon - 0.75, HOME.lat - 0.5], [HOME.lon + 0.75, HOME.lat + 0.5]],
    attributionControl: false,
  });
  map.addControl(new maplibregl.AttributionControl({
    compact: false,
    customAttribution: online
      ? '<a href="https://openfreemap.org" target="_blank" rel="noopener">OpenFreeMap</a> © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap contributors</a>'
      : 'Places © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap contributors</a> (map tiles offline)',
  }));
  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');

  const colorExpr = ['match', ['get', 'cat']];
  for (const [id, c] of Object.entries(CATEGORIES)) if (id !== 'house') colorExpr.push(id, c.color);
  colorExpr.push('#999');

  const ready = new Promise((resolve) => map.on('load', resolve));
  await ready;

  // Street details (cars, barricades, signs, overgrowth). Shown when you zoom in.
  addDetailIcons(map);
  map.addSource('details', { type: 'geojson', data: detailFeatures(places, HOME) });
  map.addLayer({
    id: 'details', type: 'symbol', source: 'details', minzoom: 14,
    filter: ['<=', ['get', 'g'], 0.08],
    layout: {
      'icon-image': ['get', 'icon'],
      'icon-size': ['interpolate', ['linear'], ['zoom'], 14, 0.75, 16, 1.1, 18, 1.8],
      'icon-rotate': ['match', ['get', 'type'], ['car', 'debris', 'trash', 'barricade', 'bush'], ['get', 'rot'], 0],
      'icon-rotation-alignment': 'map',
      'icon-allow-overlap': true,
      'icon-ignore-placement': true,
    },
  });
  let detailPopup = null;
  map.on('click', 'details', (e) => {
    const f = e.features && e.features[0];
    if (!f || map.queryRenderedFeatures(e.point, { layers: ['places'] }).length) return;
    const info = DETAIL_INFO[f.properties.type];
    if (detailPopup) detailPopup.remove();
    detailPopup = new maplibregl.Popup({ closeButton: true, maxWidth: '240px' })
      .setLngLat(e.lngLat).setHTML(`<h4>${info.label}</h4><p>${info.text}</p>`).addTo(map);
  });
  map.on('mouseenter', 'details', () => { map.getCanvas().style.cursor = 'help'; });
  map.on('mouseleave', 'details', () => { map.getCanvas().style.cursor = ''; });

  map.addSource('edge', { type: 'geojson', data: circlePolygon(HOME, MAP_RADIUS_MILES) });
  map.addLayer({
    id: 'edge-glow', type: 'line', source: 'edge',
    paint: { 'line-color': '#a3263b', 'line-width': 8, 'line-blur': 6, 'line-opacity': 0.18 },
  });
  map.addLayer({
    id: 'edge', type: 'line', source: 'edge',
    paint: { 'line-color': '#a3263b', 'line-width': 2, 'line-dasharray': [4, 3], 'line-opacity': 0.8 },
  });
  map.addSource('places', { type: 'geojson', data: placesGeo(places, {}) });
  // A soft ring under places you have not searched yet, like a scan contact.
  map.addLayer({
    id: 'places-ring', type: 'circle', source: 'places',
    filter: ['==', ['get', 'status'], 0],
    paint: {
      'circle-color': 'rgba(0,0,0,0)',
      'circle-radius': ['interpolate', ['linear'], ['zoom'], 9, 4, 13, 9, 16, 15],
      'circle-stroke-color': colorExpr,
      'circle-stroke-width': 1.2,
      'circle-stroke-opacity': ['interpolate', ['linear'], ['zoom'], 11, 0, 12.5, 0.55],
    },
  });
  map.addLayer({
    id: 'places', type: 'circle', source: 'places',
    paint: {
      'circle-color': ['case', ['==', ['get', 'status'], 2], '#9aa5b1', colorExpr],
      'circle-radius': ['interpolate', ['linear'], ['zoom'], 9, 2.5, 13, 5, 16, 9],
      'circle-stroke-color': ['case', ['==', ['get', 'status'], 2], '#6b7682', '#16202a'],
      'circle-stroke-width': ['interpolate', ['linear'], ['zoom'], 9, 0.8, 14, 1.6],
      'circle-opacity': ['case', ['==', ['get', 'status'], 2], 0.55, ['==', ['get', 'status'], 1], 0.8, 1],
    },
  });
  map.on('click', 'places', (e) => {
    const f = e.features && e.features[0];
    if (f) onPlaceClick(f.properties.id, e.lngLat);
  });
  map.on('mouseenter', 'places', () => { map.getCanvas().style.cursor = 'pointer'; });
  map.on('mouseleave', 'places', () => { map.getCanvas().style.cursor = ''; });

  const homeEl = document.createElement('div');
  homeEl.className = 'marker-home';
  homeEl.title = 'Home';
  homeEl.innerHTML = '<span>⌂</span>';
  homeEl.addEventListener('click', (ev) => { ev.stopPropagation(); onPlaceClick('__home', null); });
  const homeMarker = new maplibregl.Marker({ element: homeEl }).setLngLat([HOME.lon, HOME.lat]).addTo(map);

  const youEl = document.createElement('div');
  youEl.className = 'marker-you';
  youEl.title = 'You';
  youEl.innerHTML = '<i></i>';
  const you = new maplibregl.Marker({ element: youEl }).setLngLat([HOME.lon, HOME.lat]).addTo(map);

  let seasonKey = '';
  function applySeason(t) {
    const season = seasonOf(t);
    const growth = Math.round(overgrowth(t) * 20) / 20;
    const key = `${season}:${growth}`;
    if (key === seasonKey) return;
    seasonKey = key;
    for (const [id, prop, color] of seasonPaint(season, growth)) {
      if (map.getLayer(id)) map.setPaintProperty(id, prop, color);
    }
    map.setFilter('details', ['<=', ['get', 'g'], growth]);
  }

  return {
    map,
    online,
    update(state, list) {
      applySeason(state.time);
      map.getSource('places').setData(placesGeo(list, state.places));
      you.setLngLat([state.pos.lon, state.pos.lat]);
      const h = state.homePos || HOME;
      homeMarker.setLngLat([h.lon, h.lat]);
      youEl.classList.toggle('at-home', state.location.kind === 'home');
      homeEl.classList.toggle('here', state.location.kind === 'home');
    },
    flyTo(pos) {
      map.easeTo({ center: [pos.lon, pos.lat], duration: 800 });
    },
  };
}

function placesGeo(list, placeStates) {
  return {
    type: 'FeatureCollection',
    features: list.map((p) => {
      const ps = placeStates[p.id];
      const status = !ps || !ps.visited ? 0 : ps.zonesDone >= ps.zones ? 2 : 1;
      return {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [p.lon, p.lat] },
        properties: { id: p.id, cat: p.cat, status },
      };
    }),
  };
}
