// Dev view: opens the 3D streets at a world position (metres from home), with stub callbacks.
// street.html?x=30&z=10&yaw=0&q=medium&season=winter
import '../../src/ui/inside3d.js';
const q = new URLSearchParams(location.search);
fetch('data/streets/index.json').then((r) => r.json()).then((ix) => {
  const noop = () => '';
  window.LLInside3D.openStreets({
    title: 'Outside', start: { x: +(q.get('x') || 0), z: +(q.get('z') || 0) }, yaw: +(q.get('yaw') || 0),
    cells: ix.cells, credit: 'Map data © OpenStreetMap contributors',
    look: { season: q.get('season') || 'winter', growth: +(q.get('growth') || 0.1), snow: 0 },
    isLightOn: () => false, toggleLight: noop, getStatus: noop, isDead: () => false, onMove: noop, onDoor: noop, describeDoor: noop, onClose: noop,
  });
  setTimeout(async () => {
    const S = window.__llStreets, near = q.get('near');
    if (S && near) {
      await S.idle();
      const list = S.doors(near === 'car' ? 'car' : undefined).filter((d) => near === 'car' || d.kind !== 'car');
      list.sort((a, b) => Math.hypot(a.wx - S.pos.x, a.wz - S.pos.z) - Math.hypot(b.wx - S.pos.x, b.wz - S.pos.z));
      const d = list[+(q.get('i') || 0)];
      if (d) { const back = +(q.get('back') || 4); S.teleport(d.wx + d.nx * back + d.nz * 1.5, d.wz + d.nz * back - d.nx * 1.5); S.look(Math.atan2(d.nx, d.nz) + 0.3, -0.12); await S.idle(); }
    }
    setTimeout(() => { window.__ready = true; }, 2500);
  }, 5000);
});
