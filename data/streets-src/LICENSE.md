# License of the 3D street data

The files in this folder (`index.json` and the `<cx>_<cz>.json` cell files) are made by
`tools/streets/build-streets.mjs` from Overture Maps data, which is mostly OpenStreetMap data.

- They are a derivative database of OpenStreetMap and are licensed under the
  Open Database License (ODbL) 1.0: https://opendatacommons.org/licenses/odbl/1-0/
- Credit: © OpenStreetMap contributors (https://www.openstreetmap.org/copyright),
  Overture Maps Foundation, Microsoft Global ML Building Footprints (ODbL), USGS 3DEP (heights, public domain).
- Building types, roof shapes, colours and yard trees that the data does not have are filled
  in by fixed rules. They are game guesses, not facts about real buildings.
- No Google, Apple or Bing imagery or data is used.

The game code in this repository is not covered by this license.
