# 3D street data tools

1. `overture_dl.py OUTDIR S W N E type...` downloads Overture Maps layers for a box
   (buildings, transportation, base, places) from the public S3 bucket.
2. `process.py OUTDIR` turns them into GeoJSON (buildings, roads, landuse, infrastructure)
   and a stats report. Output for the pilot is in `data/streets-src/pilot-aloha/` (gzipped).
3. `node tools/streets/build-streets.mjs [srcDir]` writes the game cell files to
   `docs/data/streets/` on the engine world grid (`src/engine/worldgrid.js`, 256 m cells).

Codes and palettes shared with the 3D view are in `src/data/streets.js`. The view is
`src/render/streets/` (built into `docs/inside3d.js`). Data license: `docs/data/streets/LICENSE.md` (ODbL).
