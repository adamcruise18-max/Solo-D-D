// The real map: MapLibre GL + OpenFreeMap vector tiles (OpenStreetMap data).
// If the tile server cannot be reached, the game still works on a plain map.
import { CATEGORIES } from '../data/places.js';
import { HOME, MAP_RADIUS_MILES } from '../engine/state.js';

const STYLE_URLS = [
  'https://tiles.openfreemap.org/styles/dark',
  'https://tiles.openfreemap.org/styles/positron',
];

const OFFLINE_STYLE = {
  version: 8,
  sources: {},
  layers: [{ id: 'bg', type: 'background', paint: { 'background-color': '#1b1f24' } }],
};

async function pickStyle() {
  for (const url of STYLE_URLS) {
    try {
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), 5000);
      const res = await fetch(url, { signal: ctl.signal });
      clearTimeout(timer);
      if (res.ok) return { style: await res.json(), online: true };
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

  map.addSource('edge', { type: 'geojson', data: circlePolygon(HOME, MAP_RADIUS_MILES) });
  map.addLayer({
    id: 'edge', type: 'line', source: 'edge',
    paint: { 'line-color': '#e0b85a', 'line-width': 2, 'line-dasharray': [3, 3], 'line-opacity': 0.7 },
  });
  map.addSource('places', { type: 'geojson', data: placesGeo(places, {}) });
  map.addLayer({
    id: 'places', type: 'circle', source: 'places',
    paint: {
      'circle-color': colorExpr,
      'circle-radius': ['interpolate', ['linear'], ['zoom'], 9, 2.5, 13, 5, 16, 9],
      'circle-stroke-color': ['case', ['==', ['get', 'status'], 2], '#555', '#111'],
      'circle-stroke-width': 1,
      'circle-opacity': ['case', ['==', ['get', 'status'], 2], 0.3, ['==', ['get', 'status'], 1], 0.65, 1],
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
  homeEl.textContent = '⌂';
  homeEl.addEventListener('click', (ev) => { ev.stopPropagation(); onPlaceClick('__home', null); });
  new maplibregl.Marker({ element: homeEl }).setLngLat([HOME.lon, HOME.lat]).addTo(map);

  const youEl = document.createElement('div');
  youEl.className = 'marker-you';
  youEl.title = 'You';
  const you = new maplibregl.Marker({ element: youEl }).setLngLat([HOME.lon, HOME.lat]).addTo(map);

  return {
    map,
    online,
    update(state, list) {
      map.getSource('places').setData(placesGeo(list, state.places));
      you.setLngLat([state.pos.lon, state.pos.lat]);
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
