// Rain and snow around the player in the street view. One draw call: rain is short
// lines that fall fast and lean with the wind; snow is soft points that drift.
// set(sc) takes the scene values (src/engine/scene.js); update(dt, cameraPos) moves them.
import { BufferGeometry, BufferAttribute, LineSegments, LineBasicMaterial, Points, PointsMaterial, Group, CanvasTexture } from 'three';

const BOX = 36; // metres around the player, each way (x, z)
const TOP = 18; // metres above the eye

function flake() {
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const g = c.getContext('2d');
  const r = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.5, 'rgba(255,255,255,.6)'); r.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = r; g.fillRect(0, 0, 32, 32);
  return new CanvasTexture(c);
}

export function createPrecip({ count = 1000 } = {}) {
  let s = 12345;
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const drops = new Float32Array(count * 3); // x, y, z relative to the box
  for (let i = 0; i < count; i++) { drops[i * 3] = rnd() * BOX * 2 - BOX; drops[i * 3 + 1] = rnd() * TOP * 1.5 - 2; drops[i * 3 + 2] = rnd() * BOX * 2 - BOX; }
  const speed = new Float32Array(count);
  for (let i = 0; i < count; i++) speed[i] = 0.8 + rnd() * 0.4;

  const rainGeo = new BufferGeometry();
  const rainPos = new BufferAttribute(new Float32Array(count * 6), 3);
  rainGeo.setAttribute('position', rainPos);
  const rainMat = new LineBasicMaterial({ color: 0xb9c6d2, transparent: true, opacity: 0.45, depthWrite: false, fog: true });
  const rain = new LineSegments(rainGeo, rainMat);
  const snowGeo = new BufferGeometry();
  const snowPos = new BufferAttribute(new Float32Array(count * 3), 3);
  snowGeo.setAttribute('position', snowPos);
  const snowMat = new PointsMaterial({ color: 0xffffff, size: 0.13, map: flake(), transparent: true, opacity: 0.9, depthWrite: false, sizeAttenuation: true });
  const snow = new Points(snowGeo, snowMat);
  rain.frustumCulled = snow.frustumCulled = false;
  rain.visible = snow.visible = false;
  const object = new Group();
  object.add(rain, snow);

  let kind = 'none', strength = 0, wind = 0, t = 0;
  function set(sc) {
    kind = sc?.precip === 'rain' || sc?.precip === 'snow' ? sc.precip : 'none';
    strength = Math.max(0.15, Math.min(1, sc?.precipStrength ?? 0.6));
    wind = Math.min(40, sc?.windMph || 0);
    rain.visible = kind === 'rain';
    snow.visible = kind === 'snow';
  }
  function update(dt, cam) {
    if (kind === 'none') return;
    t += dt;
    const n = Math.floor(count * strength);
    const fall = kind === 'rain' ? 11 : 1.1;
    const lean = (kind === 'rain' ? 0.06 : 0.04) * wind; // metres sideways per metre down
    const pos = kind === 'rain' ? rainPos.array : snowPos.array;
    for (let i = 0; i < count; i++) {
      let y = drops[i * 3 + 1] - fall * speed[i] * dt;
      let x = drops[i * 3] + lean * fall * speed[i] * dt;
      if (y < -2) { y += TOP * 1.5; }
      if (x > BOX) x -= BOX * 2;
      drops[i * 3] = x; drops[i * 3 + 1] = y;
      // keep each drop in a box that follows the player (wraps at the edges)
      const wx = cam.x + ((((x - cam.x) % (BOX * 2)) + BOX * 3) % (BOX * 2)) - BOX;
      const wz = cam.z + ((((drops[i * 3 + 2] - cam.z) % (BOX * 2)) + BOX * 3) % (BOX * 2)) - BOX;
      const wy = cam.y + y;
      if (i >= n) { // lighter rain: fewer drops (hide the rest under the ground)
        if (kind === 'rain') for (let k = 0; k < 6; k++) pos[i * 6 + k] = -100;
        else { pos[i * 3] = 0; pos[i * 3 + 1] = -100; pos[i * 3 + 2] = 0; }
        continue;
      }
      if (kind === 'rain') {
        const len = 0.5 + 0.3 * strength;
        pos[i * 6] = wx; pos[i * 6 + 1] = wy; pos[i * 6 + 2] = wz;
        pos[i * 6 + 3] = wx - lean * len; pos[i * 6 + 4] = wy + len; pos[i * 6 + 5] = wz;
      } else {
        pos[i * 3] = wx + Math.sin(t * 0.9 + i) * 0.3; pos[i * 3 + 1] = wy; pos[i * 3 + 2] = wz + Math.cos(t * 0.7 + i * 1.3) * 0.3;
      }
    }
    (kind === 'rain' ? rainPos : snowPos).needsUpdate = true;
  }
  function dispose() {
    rainGeo.dispose(); snowGeo.dispose(); rainMat.dispose(); snowMat.map?.dispose(); snowMat.dispose();
  }
  return { object, set, update, dispose, kind: () => kind };
}
