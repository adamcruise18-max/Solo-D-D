// Street details on the map: abandoned cars, debris, barricades, trash bags,
// quarantine signs, medical tents, and (as time passes) bushes and young trees.
// They are placed near each real place with a fixed random pattern, so they are
// always in the same spot. They are for the look only; you cannot search them yet.
import { mulberry32, hashString } from '../rng.js';

export const DETAIL_INFO = {
  car: { label: 'Abandoned car', text: 'The doors are shut. Dust and leaves cover the glass. The battery is long dead.' },
  debris: { label: 'Debris', text: 'Broken glass, a fallen sign and bits of a shop front.' },
  barricade: { label: 'Barricade', text: 'Concrete blocks and plastic barriers from the last weeks of the outbreak.' },
  trash: { label: 'Trash', text: 'Black bags piled at the curb. Nobody came to take them away.' },
  sign: { label: 'Quarantine sign', text: 'COUNTY HEALTH ORDER. QUARANTINE AREA. NO ENTRY. The paper is wet and torn.' },
  tent: { label: 'Medical tent', text: 'A white tent with folding cots inside. It sags under the rain.' },
  bush: { label: 'Overgrowth', text: 'Weeds and blackberry vines grow over the curb.' },
  tree: { label: 'Young tree', text: 'A young tree grows out of a crack in the asphalt.' },
};

// What to put near each kind of place: [type, count]
const NEAR = {
  hospital: [['barricade', 4], ['sign', 3], ['tent', 3], ['car', 4], ['trash', 2]],
  clinic: [['barricade', 1], ['sign', 2], ['tent', 1], ['car', 2]],
  pharmacy: [['sign', 1], ['car', 2], ['trash', 1], ['debris', 1]],
  supermarket: [['car', 5], ['trash', 2], ['debris', 1], ['barricade', 1]],
  convenience: [['car', 2], ['trash', 1], ['debris', 1]],
  gas: [['car', 3], ['debris', 1]],
  hardware: [['car', 4], ['debris', 1]],
  outdoor: [['car', 2], ['trash', 1]],
  fire: [['barricade', 2], ['sign', 1], ['car', 1]],
};
const CAR_STYLES = 4;

function pointNear(rng, lat, lon, minM, maxM) {
  const a = rng() * Math.PI * 2;
  const d = minM + rng() * (maxM - minM);
  return [lon + (Math.sin(a) * d) / (111320 * Math.cos((lat * Math.PI) / 180)), lat + (Math.cos(a) * d) / 111320];
}

// g: how overgrown the city must be (0..1) before this detail shows.
export function detailFeatures(places, home) {
  const features = [];
  const add = (type, coord, rng, extra = {}) => features.push({
    type: 'Feature',
    geometry: { type: 'Point', coordinates: coord },
    properties: {
      type,
      icon: type === 'car' ? `ll-car-${Math.floor(rng() * CAR_STYLES)}` : `ll-${type}`,
      rot: Math.round(rng() * 360),
      g: 0,
      ...extra,
    },
  });
  const spots = [...places, { id: '__home', cat: 'home', lat: home.lat, lon: home.lon }];
  for (const p of spots) {
    const rng = mulberry32(hashString(`detail:${p.id}`));
    const list = p.cat === 'home' ? [['car', 3], ['trash', 1]] : NEAR[p.cat] || [];
    for (const [type, n] of list) {
      for (let i = 0; i < n; i++) add(type, pointNear(rng, p.lat, p.lon, p.cat === 'home' ? 30 : 25, type === 'car' ? 110 : 80), rng);
    }
    // Overgrowth: more bushes and trees appear as time passes.
    const greens = p.cat === 'home' ? 6 : 5;
    for (let i = 0; i < greens; i++) {
      add(rng() < 0.6 ? 'bush' : 'tree', pointNear(rng, p.lat, p.lon, 15, 130), rng, { g: 0.05 + (i / greens) * 0.8 + rng() * 0.1 });
    }
  }
  return { type: 'FeatureCollection', features };
}

// ---- icons, drawn on a canvas (our own simple shapes) ----
function canvas(size, draw) {
  const px = 2;
  const c = document.createElement('canvas');
  c.width = size * px;
  c.height = size * px;
  const x = c.getContext('2d');
  x.scale(px, px);
  draw(x, size);
  return { data: x.getImageData(0, 0, c.width, c.height), pixelRatio: px };
}

function rrect(x, a, b, w, h, r) {
  x.beginPath();
  x.moveTo(a + r, b);
  x.arcTo(a + w, b, a + w, b + h, r);
  x.arcTo(a + w, b + h, a, b + h, r);
  x.arcTo(a, b + h, a, b, r);
  x.arcTo(a, b, a + w, b, r);
  x.closePath();
}

const CAR_COLORS = ['#7d8792', '#5b6b7c', '#8a5a52', '#c9cdd2'];

export function addDetailIcons(map) {
  const icons = {};
  CAR_COLORS.forEach((col, i) => {
    icons[`ll-car-${i}`] = canvas(16, (x) => {
      x.fillStyle = 'rgba(10,20,30,0.25)';
      rrect(x, 5, 1.5, 7, 14, 2.2); x.fill();
      x.fillStyle = col; x.strokeStyle = '#26313c'; x.lineWidth = 0.8;
      rrect(x, 4.5, 1, 7, 14, 2.2); x.fill(); x.stroke();
      x.fillStyle = '#2f3d4a';
      rrect(x, 5.6, 3.6, 4.8, 2.6, 0.8); x.fill();
      rrect(x, 5.6, 10.6, 4.8, 2, 0.8); x.fill();
    });
  });
  icons['ll-debris'] = canvas(14, (x) => {
    x.fillStyle = '#8b939b'; x.strokeStyle = '#4b5560'; x.lineWidth = 0.6;
    for (const [a, b, w] of [[2, 3, 4], [7, 2, 3], [4, 8, 5], [9, 7, 3]]) {
      x.beginPath(); x.moveTo(a, b); x.lineTo(a + w, b + 1); x.lineTo(a + w - 1, b + w * 0.7); x.lineTo(a + 0.5, b + w * 0.6); x.closePath(); x.fill(); x.stroke();
    }
  });
  icons['ll-barricade'] = canvas(18, (x) => {
    x.fillStyle = '#b7bcc1'; x.strokeStyle = '#4b5560'; x.lineWidth = 0.7;
    rrect(x, 1, 6, 16, 6, 1); x.fill(); x.stroke();
    x.save(); x.beginPath(); rrect(x, 1, 6, 16, 6, 1); x.clip();
    x.fillStyle = '#c23a46';
    for (let i = -6; i < 18; i += 4) { x.beginPath(); x.moveTo(i, 12); x.lineTo(i + 2, 12); x.lineTo(i + 8, 6); x.lineTo(i + 6, 6); x.fill(); }
    x.restore();
  });
  icons['ll-trash'] = canvas(14, (x) => {
    x.strokeStyle = '#0b0f13'; x.lineWidth = 0.6;
    for (const [a, b, r] of [[5, 8, 3.4], [9, 6, 3], [8, 10, 2.8]]) {
      x.fillStyle = '#1d2329'; x.beginPath(); x.arc(a, b, r, 0, Math.PI * 2); x.fill(); x.stroke();
    }
  });
  icons['ll-sign'] = canvas(16, (x) => {
    x.fillStyle = '#f1d046'; x.strokeStyle = '#1a1a1a'; x.lineWidth = 1.2;
    rrect(x, 2, 2, 12, 12, 1); x.fill(); x.stroke();
    x.fillStyle = '#1a1a1a';
    x.fillRect(7.1, 4.2, 1.8, 5.2); x.fillRect(7.1, 10.4, 1.8, 1.8);
  });
  icons['ll-tent'] = canvas(18, (x) => {
    x.fillStyle = '#f4f6f8'; x.strokeStyle = '#5a6672'; x.lineWidth = 0.8;
    rrect(x, 2, 3, 14, 12, 1.5); x.fill(); x.stroke();
    x.strokeStyle = '#9aa6b2'; x.beginPath(); x.moveTo(9, 3); x.lineTo(9, 15); x.stroke();
    x.fillStyle = '#2f7fb8'; x.fillRect(2.5, 8, 13, 2);
  });
  icons['ll-bush'] = canvas(14, (x) => {
    x.fillStyle = 'rgba(70,120,60,0.85)';
    for (const [a, b, r] of [[5, 7, 3.5], [8.5, 5.5, 3.2], [9, 9, 3], [5.5, 10, 2.6]]) { x.beginPath(); x.arc(a, b, r, 0, Math.PI * 2); x.fill(); }
  });
  icons['ll-tree'] = canvas(18, (x) => {
    x.fillStyle = 'rgba(20,40,20,0.2)'; x.beginPath(); x.arc(10, 10, 7, 0, Math.PI * 2); x.fill();
    x.fillStyle = 'rgba(58,110,52,0.9)'; x.beginPath(); x.arc(9, 9, 6.5, 0, Math.PI * 2); x.fill();
    x.fillStyle = 'rgba(96,150,80,0.9)'; x.beginPath(); x.arc(7.5, 7.5, 3, 0, Math.PI * 2); x.fill();
  });
  for (const [id, img] of Object.entries(icons)) {
    if (!map.hasImage(id)) map.addImage(id, img.data, { pixelRatio: img.pixelRatio });
  }
}
