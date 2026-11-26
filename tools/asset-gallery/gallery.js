// Dev gallery: shows procedural assets in a grid, for before/after screenshots.
// Build: npx esbuild tools/asset-gallery/gallery.js --bundle --format=iife --outfile=<dir>/gallery.js
// Open gallery.html?group=item|prop|fixture&from=0&n=24&yaw=0.6
import * as THREE from 'three';
import { makeItemModel, makeProp, makeFixture, ITEM_MODEL_IDS, PROP_KINDS, FIXTURE_TYPES } from '../../src/ui/props3d.js';

const q = new URLSearchParams(location.search);
const group = q.get('group') || 'item';
const only = q.get('ids') ? q.get('ids').split(',') : null;
const ids = only || (group === 'item' ? ITEM_MODEL_IDS : group === 'prop' ? PROP_KINDS : FIXTURE_TYPES);
const from = +(q.get('from') || 0), n = +(q.get('n') || 24);
const list = ids.slice(from, from + n);
const cols = +(q.get('cols') || 6), tile = +(q.get('tile') || 260);
const rowsN = Math.ceil(list.length / cols);
const W = cols * tile, H = rowsN * tile;
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(1);
renderer.setSize(W, H);
renderer.setScissorTest(true);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.enabled = true;
document.body.style.margin = '0';
document.body.style.background = '#2b2722';
document.body.appendChild(renderer.domElement);
const yaw = +(q.get('yaw') || 0.6);
let done = 0;
list.forEach((id, i) => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xe9dfcf);
  scene.add(new THREE.HemisphereLight(0xfff4e0, 0x6a5a48, 1.6));
  const sun = new THREE.DirectionalLight(0xffe8c8, 2.2); sun.position.set(2, 4, 3); scene.add(sun);
  let obj;
  if (group === 'item') obj = makeItemModel(id, 1);
  else if (group === 'prop') obj = makeProp(id, 1);
  else obj = makeFixture(id, 1.6, 0.7, id === 'fridge' || id === 'locker' || id === 'rack' || id === 'coolers' ? 1.9 : 0.95, 1);
  obj.rotation.y = yaw;
  scene.add(obj);
  const box = new THREE.Box3().setFromObject(obj);
  const c = box.getCenter(new THREE.Vector3()); const s = box.getSize(new THREE.Vector3());
  const R = Math.max(s.x, s.y, s.z) * 0.5 || 0.1;
  const cam = new THREE.PerspectiveCamera(30, 1, R * 0.05, R * 40);
  const dist = R / Math.sin(THREE.MathUtils.degToRad(15)) * 1.05;
  cam.position.set(c.x + dist * 0.45, c.y + dist * 0.45, c.z + dist * 0.77);
  cam.lookAt(c);
  const x = (i % cols) * tile, y = H - (Math.floor(i / cols) + 1) * tile;
  renderer.setViewport(x, y, tile, tile); renderer.setScissor(x, y, tile, tile);
  renderer.render(scene, cam);
  const lab = document.createElement('div');
  lab.textContent = id;
  Object.assign(lab.style, { position: 'absolute', left: x + 6 + 'px', top: (Math.floor(i / cols) * tile + 4) + 'px', font: '12px sans-serif', color: '#333', background: 'rgba(255,255,255,.6)', padding: '1px 4px' });
  document.body.appendChild(lab);
  done++;
});
window.__done = done;
