# Last Light: Portland

A solo survival game in the browser. It uses the real map of the Portland, Oregon area.
Late November 2026. A plague killed everyone. You wake up from a coma in your home in Aloha.
You are the last person alive. Stay alive as long as you can.

This is the **first playable version**: a small part of the full game.

## How to play

1. Open the game (see "Run the game" below) and click **Wake up**.
2. Watch your six stats: Food, Water, Warmth, Energy, Health, Morale. If Health gets to 0, you die.
3. Each action costs game time. Time stops while you read or look at the map.
4. At home: drink from the water heater tank, eat, wear the coat, light the fireplace,
   collect and boil water, cook hot meals, sleep.
5. Click a dot on the map to see a real place (Safeway, Walgreens, clinics, gas stations
   and more). Click **Walk here**. Search it zone by zone, take what you can carry, and walk home.
6. You can also search houses on your street or near any place.
7. A stray dog comes near the house in the first days. Leave food outside on three different days.
8. The game saves in your browser after each action. You have one life.
   Use **☰ Game** to export or import a backup file.

## Run the game

- **On the web:** after this is on `main`, turn on GitHub Pages
  (Settings → Pages → Deploy from a branch → `main`, folder `/docs`).
  The game is then at `https://adamcruise18-max.github.io/Solo-D-D/`.
- **On your computer:** `npm run serve`, then open http://localhost:8080.
  (Opening `docs/index.html` with a double-click also works, but the map tiles may not load.)

## What is in this version

- Real map (MapLibre GL + OpenFreeMap tiles) with 1,453 real places from OpenStreetMap
  in a 15-mile circle around ZIP 97078. The circle edge is shown on the map.
- Winter tactical look: dark glass panels with thin lines and corner marks, a readout at the top
  of the map (day, time, weather, temperature, warnings), and a light, snowy map palette.
  The map stays light and in color. Snow, rain, fog and a night tint show on the map
  (turn them off in **☰ Game**). The look takes ideas from modern "city after a disaster" games,
  but all art and layout are our own.
- Home base projects: 10 projects in 5 wings (Power, Water, Heat and shelter, Medical, Food).
  Find parts in the city (hardware stores, houses, gas stations), bring them home, and work on a
  project in blocks of up to 2 hours. Each project has one clear effect, for example a second battery,
  rain barrels, a wood stove or a sick room. The panel shows which parts you still need.
- Turn-based clock, real sunrise and sunset for Aloha, daily weather from Portland averages.
- Player stats and their effects, from the game rules doc. "Weak" status after the coma.
- Visible d20 risk checks (D&D style) for doors, searches and road events.
- Home: indoor temperature, fireplace and firewood, solar battery and electric heater,
  water heater tank, tap water that stops, boiling, cooking.
- Scavenging: fixed loot for each place (it never comes back), dark stores, pharmacy counters,
  locked fire stations, nearby houses.
- Walking with road events (debris, floods, fallen trees, dog packs, coyotes).
- Injuries, infection, stomach bug, medicine.
- Stray dog that joins you, with Food, Health and Bond.
- Autosave, one life, death screen, best runs list.

Not yet in this version (later work): real street routing, bikes and cars, the five home zones,
roof/damp/pests, garden, hunting and fishing, more illnesses, schools, a self-hosted PMTiles map file,
offline mode.

## For developers

- `src/` game code (ES modules). `src/engine/` has the rules and has no browser code.
- `docs/` the playable site. `docs/game.js` is built from `src/`.
- `npm install`, then `npm run build` (bundle), `npm test` (engine tests), `npm run places` (rebuild the places file from `data/poi-15mi-97078.csv`).
- Rule numbers come from the game rules doc. Change numbers in `src/data/` and `src/engine/`.

## Credits

- Map data and places © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), ODbL 1.0.
- Map tiles: [OpenFreeMap](https://openfreemap.org).
- Map library: [MapLibre GL JS](https://maplibre.org) (BSD-3-Clause, see `docs/vendor/maplibre-LICENSE.txt`).
- Store names are real names from OpenStreetMap. The game uses no brand logos.
