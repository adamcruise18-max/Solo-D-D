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
6. At a place or in a house, click **Walk inside (first person)** to walk through it in 3D and
   search it yourself (see below). The old panel buttons still work too.
7. You can also search houses on your street or near any place.
8. A stray dog comes near the house in the first days. Leave food outside on three different days.
9. The game saves in your browser after each action. You have one life.
   Use **☰ Game** to export or import a backup file.

### Inside a building (first person)

- Computer: click the view to look with the mouse. Press **Esc** to see the full key list.
  The main keys: **W A S D** walk, **Space** jump, **Shift** sprint, **Ctrl** crouch, **Z** stand / crouch / prone,
  **Caps Lock** slow walk, **E** use a door or gate, **hold E** search, **F** take all that fits, **L** flashlight,
  **Tab** inventory, **C** character, **M** floor plan, **J** journal, **5** medicine, **7** eat or drink,
  **9** new batteries, **F5** save, **F9** load. Right mouse looks closer. Middle mouse marks a spot.
  Weapon keys (left mouse, R, 1–4, G, V, Q and others) show "not yet in the game".
- Phone or tablet: drag on the left half of the screen to walk, drag on the right half to look,
  hold **USE** to search, tap **USE** for doors. Buttons on the right: jump, crouch, light, bag, map.
- A blue ring on the floor marks a place you did not search yet. A grey ring is done.
- Walk to the front door and press **E** to go back to the map.
- Game time: each search costs the same time as before (for example 20 min for a supermarket aisle,
  2× in the dark with no flashlight). Walking inside costs 1 game minute for each 60 m you walk.
  Time does not move when you stand still or when the menu is open.
- Big stores, hospitals and all places at night are dark. A flashlight in your pack lights the way.

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
- Seasons and overgrowth: the game starts in winter. The seasons change with the calendar, and the map
  gets greener and wilder each month (parks, lawns and side streets). The journal notes each new season
  and how the city changes each month. Fall wind blows leaves across the map.
- Street details when you zoom in: abandoned cars, debris, barricades, trash bags, quarantine signs and
  medical tents near real places, and bushes and young trees that appear as time passes. Click one to read about it.
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
- First-person search inside every place and house (three.js). Each place type gets its own simple
  floor plan: stores have rows of shelves and one aisle for each search zone; clinics, hospitals,
  fire stations and houses have rooms off one hallway. Shelves get empty when you search them.
- Walking with road events (debris, floods, fallen trees, dog packs, coyotes).
- Injuries, infection, stomach bug, medicine.
- Stray dog that joins you, with Food, Health and Bond.
- Autosave, one life, death screen, best runs list.
- New run after death (or after "Give up"): wake up at home in Aloha, start at a random place,
  or choose a spot on the map. The house at that spot is your new home.

Not yet in this version (later work): real street routing, bikes and cars, the five home zones,
roof/damp/pests, garden, hunting and fishing, more illnesses, schools, a self-hosted PMTiles map file,
offline mode.

## For developers

- `src/` game code (ES modules). `src/engine/` has the rules and has no browser code.
- `docs/` the playable site. `docs/game.js` is built from `src/`. `docs/inside3d.js` (the 3D view, three.js)
  is built from `src/ui/inside3d.js` and loads only when the player walks inside.
- `src/engine/interior.js` makes the floor plans (no browser code, tested in `test/interior.test.js`).
- `npm install`, then `npm run build` (bundle), `npm test` (engine tests), `npm run places` (rebuild the places file from `data/poi-15mi-97078.csv`).
- Rule numbers come from the game rules doc. Change numbers in `src/data/` and `src/engine/`.

## Credits

- Map data and places © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), ODbL 1.0.
- Map tiles: [OpenFreeMap](https://openfreemap.org).
- Map library: [MapLibre GL JS](https://maplibre.org) (BSD-3-Clause, see `docs/vendor/maplibre-LICENSE.txt`).
- Store names are real names from OpenStreetMap. The game uses no brand logos.
