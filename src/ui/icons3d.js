// Item pictures for the grid inventory: each item's own 3D model (props3d.js), drawn once
// on a small off-screen canvas in warm, soft light and kept as an image URL.
import * as THREE from 'three';
import { makeItemModel } from './props3d.js';
import { sizeOf } from '../data/gridsize.js';

const URLS = new Map();
let R = null;
function setup() {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1);
  renderer.setSize(128, 128, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xfff4e6, 0x6a5848, 1.6));
  const key = new THREE.DirectionalLight(0xffe8cc, 2.2);
  key.position.set(2, 4, 3);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xcfe0ff, 0.8);
  rim.position.set(-3, 2, -2);
  scene.add(rim);
  const camera = new THREE.PerspectiveCamera(30, 1, 0.01, 50);
  R = { renderer, scene, camera };
}

// The picture of one item (a data URL), or null if WebGL is not there. A long item (rifle,
// fishing rod) gets a wide picture, its long side along x; the grid turns it for a tall tile.
export function iconAspect(id) {
  const s = sizeOf(id);
  const a = Math.max(s.w, s.h) / Math.min(s.w, s.h);
  return a >= 3 ? Math.min(5, a) : 1;
}
export function itemIcon(id) {
  if (URLS.has(id)) return URLS.get(id);
  let url = null;
  try {
    if (!R) setup();
    const { renderer, scene, camera } = R;
    const A = iconAspect(id);
    renderer.setSize(Math.round(112 * A), 112, false);
    camera.aspect = A;
    const m = makeItemModel(id, 1);
    // long side along x
    let box = new THREE.Box3().setFromObject(m);
    let size = box.getSize(new THREE.Vector3());
    if (size.z > size.x * 1.3) m.rotation.y = Math.PI / 2;
    m.rotation.y += A > 1 ? -0.12 : -0.45;
    scene.add(m);
    m.updateMatrixWorld(true);
    box = new THREE.Box3().setFromObject(m);
    size = box.getSize(new THREE.Vector3());
    const c = box.getCenter(new THREE.Vector3());
    let dist;
    if (A > 1) {
      // a long item: fit its length and height, seen from the front and a little above
      const vf = Math.tan((camera.fov * Math.PI) / 360);
      const fitH = (size.y + size.z * 0.35) / 2 / vf;
      dist = Math.max(size.x / 2 / (vf * A), fitH) * 1.1 + size.z / 2;
      camera.position.set(c.x, c.y + dist * 0.34, c.z + dist * 0.94);
    } else {
      const rad = Math.max(0.05, size.length() / 2);
      dist = (rad / Math.sin((camera.fov * Math.PI) / 360)) * 0.92;
      camera.position.set(c.x + dist * 0.2, c.y + dist * 0.5, c.z + dist * 0.84);
    }
    camera.lookAt(c);
    camera.near = dist / 30; camera.far = dist * 4;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
    url = renderer.domElement.toDataURL('image/png');
    scene.remove(m);
  } catch { url = null; }
  URLS.set(id, url);
  return url;
}

// Draw the pictures for many items a few at a time; done(id, url) after each one.
export function itemIcons(ids, done) {
  const todo = ids.filter((id) => !URLS.has(id));
  const step = () => {
    const t0 = performance.now();
    while (todo.length && performance.now() - t0 < 12) {
      const id = todo.shift();
      done?.(id, itemIcon(id));
    }
    if (todo.length) requestAnimationFrame(step);
  };
  if (todo.length) requestAnimationFrame(step);
  return URLS;
}
export const iconCache = URLS;
