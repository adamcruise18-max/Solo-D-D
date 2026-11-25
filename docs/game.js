(() => {
  // src/data/items.js
  var ITEMS = {
    canned_food: { name: "Canned food", unit: "can", weight: 1, kind: "food", cal: 400, portion: 1 },
    dry_food: { name: "Rice or pasta (bag)", unit: "bag", weight: 2, kind: "food", cal: 3e3, portion: 0.25, needsCooking: true },
    peanut_butter: { name: "Peanut butter", unit: "jar", weight: 1, kind: "food", cal: 2600, portion: 0.25 },
    snacks: { name: "Snacks (crackers, bars)", unit: "pack", weight: 0.5, kind: "food", cal: 600, portion: 0.5 },
    formula: { name: "Liquid nutrition bag", unit: "bag", weight: 1, kind: "food", cal: 250, water: 8, portion: 1 },
    dog_food: { name: "Dog food bag", unit: "bag", weight: 15, kind: "dogfood", portion: 1 / 15 },
    energy_bar: { name: "Energy bar", unit: "bar", weight: 0.15, kind: "food", cal: 250, portion: 1 },
    canned_fruit: { name: "Canned fruit", unit: "can", weight: 1, kind: "food", cal: 300, water: 6, portion: 1 },
    instant_noodles: { name: "Instant noodles", unit: "pack", weight: 0.2, kind: "food", cal: 380, portion: 1 },
    chips: { name: "Bag of chips", unit: "bag", weight: 0.6, kind: "food", cal: 1400, portion: 0.5 },
    jerky: { name: "Beef jerky", unit: "pack", weight: 0.2, kind: "food", cal: 400, portion: 0.5 },
    // Fresh food spoils (perish: days at room temperature; engine/food.js). From fishing and hunting.
    fresh_fish: { name: "Fresh fish", unit: "fish", weight: 1.5, kind: "food", cal: 700, portion: 1, needsCooking: true, perish: 2 },
    raw_meat: { name: "Raw meat", unit: "lb", weight: 1, kind: "food", cal: 900, portion: 1, needsCooking: true, perish: 2 },
    oatmeal: { name: "Oatmeal (canister)", unit: "can", weight: 2.6, kind: "food", cal: 4500, portion: 0.1, needsCooking: true },
    water_bottle: { name: "Bottled water (1 gal)", unit: "gal", weight: 8.3, kind: "drink", water: 25, portion: 0.25 },
    saline: { name: "Saline bag (sterile)", unit: "bag", weight: 2.2, kind: "drink", water: 27, portion: 1 },
    ors: { name: "Oral rehydration salts", unit: "pack", weight: 0.1, kind: "med", med: "ors", portion: 1 },
    soda: { name: "Soda (2 liter)", unit: "bottle", weight: 4.6, kind: "drink", water: 25, portion: 0.5 },
    sports_drink: { name: "Sports drink", unit: "bottle", weight: 1.8, kind: "drink", water: 20, portion: 1 },
    first_aid: { name: "First aid kit", unit: "kit", weight: 1, kind: "med", med: "bandage", portion: 0.2 },
    antibiotics: { name: "Antibiotics (one course)", unit: "course", weight: 0.1, kind: "med", med: "antibiotics", portion: 1 },
    pain_pills: { name: "Pain pills", unit: "bottle", weight: 0.2, kind: "med", med: "pain", portion: 0.1 },
    bandages: { name: "Bandages and gauze", unit: "box", weight: 0.3, kind: "med", med: "bandage", portion: 0.25 },
    ibuprofen: { name: "Ibuprofen", unit: "bottle", weight: 0.2, kind: "med", med: "pain", portion: 0.1 },
    flashlight: { name: "Flashlight", unit: "pc", weight: 0.5, kind: "tool" },
    batteries: { name: "Batteries (1 set)", unit: "set", weight: 0.2, kind: "batteries", portion: 1 },
    pry_bar: { name: "Pry bar", unit: "pc", weight: 3, kind: "tool" },
    backpack: { name: "Backpack", unit: "pc", weight: 1, kind: "tool" },
    winter_coat: { name: "Winter coat (down)", unit: "pc", weight: 3, kind: "wear", slot: "mid", warmth: 18, wind: 0.5, wetWarm: false, short: "winter coat" },
    winter_hat: { name: "Winter hat (wool)", unit: "pc", weight: 0.3, kind: "wear", slot: "hat", warmth: 4, wetWarm: true, short: "hat" },
    gloves: { name: "Winter gloves", unit: "pair", weight: 0.3, kind: "wear", slot: "gloves", warmth: 3, wetWarm: false, short: "gloves" },
    boots: { name: "Winter boots", unit: "pair", weight: 2.5, kind: "wear", slot: "boots", warmth: 4, wetWarm: true, short: "boots" },
    rain_jacket: { name: "Rain jacket", unit: "pc", weight: 1, kind: "wear", slot: "shell", warmth: 3, wind: 0.8, wetWarm: true, waterproof: true, short: "rain jacket" },
    thermal_underwear: { name: "Thermal underwear (synthetic)", unit: "set", weight: 0.5, kind: "wear", slot: "base", warmth: 6, wetWarm: true, short: "thermals" },
    fleece_jacket: { name: "Fleece jacket", unit: "pc", weight: 1, kind: "wear", slot: "mid", warmth: 10, wind: 0.2, wetWarm: true, short: "fleece" },
    wool_sweater: { name: "Wool sweater", unit: "pc", weight: 1.2, kind: "wear", slot: "mid", warmth: 9, wind: 0.2, wetWarm: true, short: "wool sweater" },
    cotton_hoodie: { name: "Cotton hoodie", unit: "pc", weight: 1, kind: "wear", slot: "mid", warmth: 6, wind: 0.1, wetWarm: false, short: "hoodie" },
    windbreaker: { name: "Windbreaker", unit: "pc", weight: 0.6, kind: "wear", slot: "shell", warmth: 2, wind: 0.7, wetWarm: true, short: "windbreaker" },
    firewood: { name: "Firewood bundle", unit: "bundle", weight: 20, kind: "fuel" },
    propane_1lb: { name: "Propane cylinder (1 lb)", unit: "can", weight: 1.5, kind: "misc" },
    tarp: { name: "Tarp", unit: "pc", weight: 3, kind: "misc" },
    bleach: { name: "Unscented bleach", unit: "jug", weight: 8, kind: "misc" },
    water_filter: { name: "Water filter (squeeze)", unit: "pc", weight: 0.3, kind: "misc" },
    n95: { name: "N95 mask", unit: "pc", weight: 0.05, kind: "misc" },
    flea_spray: { name: "Flea spray", unit: "can", weight: 1, kind: "misc" },
    seeds: { name: "Seed packet", unit: "pack", weight: 0.05, kind: "misc" },
    lighter: { name: "Lighter", unit: "pc", weight: 0.05, kind: "misc" },
    comfort: { name: "Book or deck of cards", unit: "pc", weight: 1, kind: "comfort", comfortText: "You read and play cards for a while. Your mind is calmer." },
    radio: { name: "Hand-crank radio", unit: "pc", weight: 1.2, kind: "comfort", comfortText: "You turn the crank and scan the bands. Only static and an old emergency loop. Still, a voice helps." },
    // Supplies with no use of their own yet (more uses come with crafting and home projects).
    candles: { name: "Candles", unit: "box", weight: 0.8, kind: "comfort", portion: 0.1, comfortText: "You light a candle and sit by the small flame for a while. The dark feels less heavy." },
    matches: { name: "Matches", unit: "box", weight: 0.1, kind: "misc" },
    duct_tape: { name: "Duct tape", unit: "roll", weight: 0.6, kind: "part" },
    rope: { name: "Rope (50 ft)", unit: "coil", weight: 2, kind: "misc" },
    knife: { name: "Folding knife", unit: "pc", weight: 0.3, kind: "misc" },
    multitool: { name: "Multitool", unit: "pc", weight: 0.5, kind: "misc" },
    can_opener: { name: "Can opener", unit: "pc", weight: 0.2, kind: "misc" },
    cooking_pot: { name: "Cooking pot", unit: "pc", weight: 2, kind: "misc" },
    blanket: { name: "Wool blanket", unit: "pc", weight: 3, kind: "misc", sleepWarm: 8 },
    sleeping_bag: { name: "Sleeping bag (winter)", unit: "pc", weight: 4, kind: "misc", sleepWarm: 15 },
    hand_warmers: { name: "Hand warmers", unit: "pair", weight: 0.1, kind: "warm", warmth: 15, portion: 1 },
    wool_socks: { name: "Wool socks", unit: "pair", weight: 0.2, kind: "wear", slot: "socks", warmth: 2, wetWarm: true, short: "wool socks" },
    trash_bags: { name: "Trash bags (box)", unit: "box", weight: 1, kind: "misc" },
    paper_map: { name: "Paper map of Portland", unit: "pc", weight: 0.2, kind: "misc" },
    toilet_paper: { name: "Toilet paper", unit: "roll", weight: 0.3, kind: "misc" },
    soap: { name: "Bar of soap", unit: "bar", weight: 0.25, kind: "comfort", portion: 0.1, comfortText: "You wash with soap and cold water. You feel more like yourself." },
    toothpaste: { name: "Toothpaste", unit: "tube", weight: 0.25, kind: "misc" },
    water_tablets: { name: "Water purification tablets", unit: "pack", weight: 0.05, kind: "misc", portion: 0.1 },
    vitamins: { name: "Vitamins", unit: "bottle", weight: 0.3, kind: "misc" },
    // Books teach a skill once (kind 'book', skill: a key of SKILLS in engine/skills.js).
    book_first_aid: { name: "First-aid handbook", unit: "pc", weight: 0.8, kind: "book", skill: "first_aid" },
    book_repair: { name: "Home repair manual", unit: "pc", weight: 1, kind: "book", skill: "tinkering" },
    book_cooking: { name: "Camp cooking book", unit: "pc", weight: 0.8, kind: "book", skill: "cooking" },
    book_survival: { name: "Wilderness survival guide", unit: "pc", weight: 0.8, kind: "book", skill: "survival" },
    // Parts for home base projects (kind 'part': no use on their own).
    toolkit: { name: "Tool kit", unit: "kit", weight: 6, kind: "tool" },
    scrap_wood: { name: "Lumber and plywood", unit: "pc", weight: 6, kind: "part" },
    hardware_parts: { name: "Nails, screws and brackets", unit: "box", weight: 1, kind: "part" },
    wiring: { name: "Electrical wire and connectors", unit: "roll", weight: 2, kind: "part" },
    pipe_fittings: { name: "Pipe, hose and fittings", unit: "set", weight: 2, kind: "part" },
    plastic_sheet: { name: "Plastic sheeting", unit: "roll", weight: 3, kind: "part" },
    insulation: { name: "Foam board insulation", unit: "pack", weight: 4, kind: "part" },
    metal_bin: { name: "Metal can with lid", unit: "pc", weight: 8, kind: "part" },
    rain_barrel: { name: "Rain barrel (55 gal, empty)", unit: "pc", weight: 15, kind: "part" },
    stove_kit: { name: "Wood stove and pipe kit", unit: "kit", weight: 40, kind: "part" },
    battery_module: { name: "Home battery module", unit: "pc", weight: 40, kind: "part" }
  };
  function itemName(id) {
    return ITEMS[id] ? ITEMS[id].name : id;
  }

  // src/data/places.js
  var CATEGORIES = {
    supermarket: {
      label: "Supermarket",
      color: "#d9a441",
      stock: 0.55,
      zones: 8,
      zoneMinutes: 20,
      dark: true,
      zoneName: "aisle",
      loot: [
        { id: "canned_food", w: 30 },
        { id: "dry_food", w: 18 },
        { id: "water_bottle", w: 10 },
        { id: "peanut_butter", w: 8 },
        { id: "snacks", w: 10 },
        { id: "dog_food", w: 6 },
        { id: "batteries", w: 6 },
        { id: "bleach", w: 3 },
        { id: "pain_pills", w: 3 },
        { id: "flea_spray", w: 2 },
        { id: "lighter", w: 3 },
        { id: "comfort", w: 2 },
        { id: "canned_fruit", w: 8 },
        { id: "instant_noodles", w: 8 },
        { id: "chips", w: 5 },
        { id: "oatmeal", w: 5 },
        { id: "soda", w: 4 },
        { id: "sports_drink", w: 4 },
        { id: "candles", w: 2 },
        { id: "matches", w: 2 },
        { id: "trash_bags", w: 2 },
        { id: "toilet_paper", w: 3 },
        { id: "soap", w: 2 },
        { id: "toothpaste", w: 2 },
        { id: "can_opener", w: 1 },
        { id: "cooking_pot", w: 1 },
        { id: "vitamins", w: 1 },
        { id: "book_cooking", w: 0.6 },
        { id: "cotton_hoodie", w: 0.8 }
      ],
      entryText: "The doors are open. The air smells of rotten food. It is dark inside."
    },
    convenience: {
      label: "Convenience store",
      color: "#c98b3c",
      stock: 0.5,
      zones: 2,
      zoneMinutes: 10,
      zoneName: "shelf area",
      loot: [
        { id: "snacks", w: 30 },
        { id: "water_bottle", w: 15 },
        { id: "canned_food", w: 10 },
        { id: "batteries", w: 12 },
        { id: "lighter", w: 12 },
        { id: "pain_pills", w: 5 },
        { id: "energy_bar", w: 10 },
        { id: "jerky", w: 8 },
        { id: "chips", w: 10 },
        { id: "soda", w: 8 },
        { id: "sports_drink", w: 6 },
        { id: "instant_noodles", w: 5 },
        { id: "matches", w: 3 },
        { id: "ibuprofen", w: 3 },
        { id: "hand_warmers", w: 2 }
      ],
      entryText: "The glass door is broken. Shelves are half empty."
    },
    gas: {
      label: "Gas station",
      color: "#9c6b3a",
      stock: 0.6,
      zones: 2,
      zoneMinutes: 15,
      zoneName: "shop area",
      loot: [
        { id: "snacks", w: 30 },
        { id: "water_bottle", w: 12 },
        { id: "lighter", w: 12 },
        { id: "batteries", w: 8 },
        { id: "propane_1lb", w: 8 },
        { id: "tarp", w: 3 },
        { id: "wiring", w: 4 },
        { id: "pipe_fittings", w: 3 },
        { id: "metal_bin", w: 3 },
        { id: "energy_bar", w: 8 },
        { id: "jerky", w: 8 },
        { id: "chips", w: 8 },
        { id: "soda", w: 6 },
        { id: "sports_drink", w: 5 },
        { id: "duct_tape", w: 3 },
        { id: "paper_map", w: 4 },
        { id: "hand_warmers", w: 2 }
      ],
      entryText: "The pumps have no power. The small shop is still closed."
    },
    pharmacy: {
      label: "Pharmacy",
      color: "#5fb3a6",
      stock: 0.4,
      zones: 4,
      zoneMinutes: 20,
      dark: true,
      zoneName: "section",
      lockedZone: { dc: 12, name: "pharmacy counter" },
      loot: [
        { id: "pain_pills", w: 15 },
        { id: "first_aid", w: 15 },
        { id: "antibiotics", w: 8 },
        { id: "ors", w: 10 },
        { id: "snacks", w: 10 },
        { id: "water_bottle", w: 6 },
        { id: "n95", w: 8 },
        { id: "batteries", w: 6 },
        { id: "flea_spray", w: 3 },
        { id: "bandages", w: 12 },
        { id: "ibuprofen", w: 10 },
        { id: "vitamins", w: 5 },
        { id: "sports_drink", w: 4 },
        { id: "energy_bar", w: 4 },
        { id: "soap", w: 3 },
        { id: "toothpaste", w: 3 },
        { id: "toilet_paper", w: 3 },
        { id: "water_tablets", w: 2 },
        { id: "hand_warmers", w: 2 },
        { id: "book_first_aid", w: 1.5 }
      ],
      entryText: "The store is dark. The pharmacy counter at the back has a metal gate."
    },
    clinic: {
      label: "Clinic",
      color: "#4f9c92",
      stock: 0.7,
      zones: 3,
      zoneMinutes: 20,
      zoneName: "room",
      bodies: true,
      loot: [
        { id: "first_aid", w: 20 },
        { id: "antibiotics", w: 6 },
        { id: "n95", w: 15 },
        { id: "pain_pills", w: 10 },
        { id: "saline", w: 10 },
        { id: "ors", w: 6 },
        { id: "bandages", w: 15 },
        { id: "ibuprofen", w: 6 },
        { id: "soap", w: 3 },
        { id: "book_first_aid", w: 1.5 }
      ],
      entryText: "Notices about the outbreak cover the door."
    },
    hospital: {
      label: "Hospital",
      color: "#7fd1c4",
      stock: 0.7,
      zones: 12,
      zoneMinutes: 30,
      dark: true,
      zoneName: "ward",
      bodies: true,
      entryMorale: -5,
      loot: [
        { id: "first_aid", w: 18 },
        { id: "antibiotics", w: 12 },
        { id: "saline", w: 15 },
        { id: "pain_pills", w: 12 },
        { id: "n95", w: 12 },
        { id: "ors", w: 8 },
        { id: "snacks", w: 5 },
        { id: "bandages", w: 15 },
        { id: "ibuprofen", w: 6 },
        { id: "blanket", w: 4 },
        { id: "sports_drink", w: 3 },
        { id: "book_first_aid", w: 1 }
      ],
      entryText: "The hospital is dark and silent. Many people came here at the end."
    },
    hardware: {
      label: "Hardware store",
      color: "#8a8f99",
      stock: 0.7,
      zones: 8,
      zoneMinutes: 20,
      dark: true,
      zoneName: "aisle",
      loot: [
        { id: "tarp", w: 15 },
        { id: "pry_bar", w: 6 },
        { id: "propane_1lb", w: 12 },
        { id: "batteries", w: 10 },
        { id: "flashlight", w: 6 },
        { id: "gloves", w: 8 },
        { id: "seeds", w: 8 },
        { id: "bleach", w: 5 },
        { id: "lighter", w: 6 },
        { id: "firewood", w: 4 },
        { id: "toolkit", w: 6 },
        { id: "scrap_wood", w: 12 },
        { id: "hardware_parts", w: 14 },
        { id: "wiring", w: 10 },
        { id: "pipe_fittings", w: 10 },
        { id: "plastic_sheet", w: 10 },
        { id: "insulation", w: 8 },
        { id: "metal_bin", w: 6 },
        { id: "rain_barrel", w: 5 },
        { id: "stove_kit", w: 2 },
        { id: "water_filter", w: 3 },
        { id: "duct_tape", w: 10 },
        { id: "rope", w: 6 },
        { id: "multitool", w: 3 },
        { id: "knife", w: 3 },
        { id: "candles", w: 3 },
        { id: "matches", w: 3 },
        { id: "trash_bags", w: 5 },
        { id: "radio", w: 2 },
        { id: "book_repair", w: 1.5 }
      ],
      entryText: "Long dark aisles. The tool racks are partly empty."
    },
    outdoor: {
      label: "Outdoor store",
      color: "#6f9a5b",
      stock: 0.5,
      zones: 4,
      zoneMinutes: 20,
      zoneName: "section",
      loot: [
        { id: "water_filter", w: 10 },
        { id: "winter_coat", w: 8 },
        { id: "winter_hat", w: 10 },
        { id: "gloves", w: 10 },
        { id: "boots", w: 8 },
        { id: "rain_jacket", w: 10 },
        { id: "propane_1lb", w: 8 },
        { id: "flashlight", w: 6 },
        { id: "snacks", w: 6 },
        { id: "backpack", w: 3 },
        { id: "plastic_sheet", w: 6 },
        { id: "sleeping_bag", w: 6 },
        { id: "wool_socks", w: 8 },
        { id: "hand_warmers", w: 8 },
        { id: "rope", w: 6 },
        { id: "knife", w: 5 },
        { id: "multitool", w: 4 },
        { id: "cooking_pot", w: 4 },
        { id: "water_tablets", w: 6 },
        { id: "energy_bar", w: 6 },
        { id: "jerky", w: 5 },
        { id: "paper_map", w: 3 },
        { id: "radio", w: 3 },
        { id: "matches", w: 4 },
        { id: "book_survival", w: 2 },
        { id: "book_cooking", w: 1 },
        { id: "thermal_underwear", w: 6 },
        { id: "fleece_jacket", w: 6 },
        { id: "wool_sweater", w: 3 },
        { id: "windbreaker", w: 3 }
      ],
      entryText: "Racks of jackets and boots. This place has good winter gear."
    },
    fire: {
      label: "Fire station",
      color: "#c0584a",
      stock: 0.9,
      zones: 3,
      zoneMinutes: 20,
      zoneName: "room",
      locked: true,
      loot: [
        { id: "first_aid", w: 20 },
        { id: "n95", w: 15 },
        { id: "pry_bar", w: 6 },
        { id: "flashlight", w: 8 },
        { id: "batteries", w: 8 },
        { id: "water_bottle", w: 10 },
        { id: "gloves", w: 6 },
        { id: "toolkit", w: 8 },
        { id: "bandages", w: 12 },
        { id: "blanket", w: 6 },
        { id: "rope", w: 6 },
        { id: "radio", w: 3 },
        { id: "energy_bar", w: 6 },
        { id: "book_first_aid", w: 1 },
        { id: "book_survival", w: 0.5 },
        { id: "thermal_underwear", w: 1 }
      ],
      entryText: "The engine bay is empty. The crews went out on calls and did not come back."
    },
    house: {
      label: "House",
      color: "#aaaaaa",
      stock: 0.8,
      zones: 6,
      zoneMinutes: 10,
      zoneName: "room",
      loot: [
        { id: "canned_food", w: 20 },
        { id: "dry_food", w: 8 },
        { id: "snacks", w: 8 },
        { id: "peanut_butter", w: 5 },
        { id: "water_bottle", w: 5 },
        { id: "pain_pills", w: 6 },
        { id: "first_aid", w: 4 },
        { id: "antibiotics", w: 2 },
        { id: "batteries", w: 6 },
        { id: "winter_hat", w: 4 },
        { id: "gloves", w: 4 },
        { id: "rain_jacket", w: 3 },
        { id: "comfort", w: 5 },
        { id: "firewood", w: 4 },
        { id: "dog_food", w: 2 },
        { id: "lighter", w: 4 },
        { id: "toolkit", w: 2 },
        { id: "scrap_wood", w: 3 },
        { id: "hardware_parts", w: 3 },
        { id: "wiring", w: 2 },
        { id: "pipe_fittings", w: 2 },
        { id: "metal_bin", w: 2 },
        { id: "rain_barrel", w: 1 },
        { id: "battery_module", w: 0.6 },
        { id: "canned_fruit", w: 5 },
        { id: "instant_noodles", w: 4 },
        { id: "oatmeal", w: 3 },
        { id: "chips", w: 3 },
        { id: "soda", w: 3 },
        { id: "bandages", w: 3 },
        { id: "ibuprofen", w: 3 },
        { id: "candles", w: 4 },
        { id: "matches", w: 3 },
        { id: "blanket", w: 4 },
        { id: "wool_socks", w: 3 },
        { id: "toilet_paper", w: 4 },
        { id: "soap", w: 3 },
        { id: "toothpaste", w: 2 },
        { id: "can_opener", w: 2 },
        { id: "cooking_pot", w: 2 },
        { id: "duct_tape", w: 2 },
        { id: "knife", w: 1 },
        { id: "radio", w: 1 },
        { id: "book_first_aid", w: 0.6 },
        { id: "book_repair", w: 0.6 },
        { id: "book_cooking", w: 0.8 },
        { id: "book_survival", w: 0.4 },
        { id: "thermal_underwear", w: 2 },
        { id: "wool_sweater", w: 3 },
        { id: "cotton_hoodie", w: 4 },
        { id: "fleece_jacket", w: 2 },
        { id: "windbreaker", w: 1 }
      ]
    }
  };
  var BIG_BRANDS = ["Costco", "WinCo", "Fred Meyer", "Walmart", "Home Depot", "Lowe's", "Target"];
  var HOUSE_ROOMS = ["kitchen", "living room", "bedroom", "bathroom", "second bedroom", "garage"];

  // src/rng.js
  function mulberry32(a) {
    return function next() {
      a |= 0;
      a = a + 1831565813 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function hashString(str) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }
  function rand(state2) {
    let a = state2.rngState | 0;
    a = a + 1831565813 | 0;
    state2.rngState = a;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
  function randInt(state2, min, max) {
    return min + Math.floor(rand(state2) * (max - min + 1));
  }
  function chance(state2, p) {
    return rand(state2) < p;
  }
  function weightedPick(rng, entries) {
    const total = entries.reduce((s, e) => s + e.w, 0);
    let r = rng() * total;
    for (const e of entries) {
      r -= e.w;
      if (r <= 0) return e;
    }
    return entries[entries.length - 1];
  }

  // src/sun.js
  var HOME_LAT = 45.4826;
  var HOME_LON = -122.8738;
  var RAD = Math.PI / 180;
  var EPOCH_UTC_MS = Date.UTC(2026, 10, 24, 8, 0, 0);
  function sunTimes(day, lat = HOME_LAT, lon = HOME_LON) {
    const localNoonMs = EPOCH_UTC_MS + day * 864e5 + 12 * 36e5;
    const jd = localNoonMs / 864e5 + 24405875e-1;
    const n = Math.round(jd - 2451545 + 8e-4);
    const jStar = n - lon / 360;
    const M = (357.5291 + 0.98560028 * jStar) % 360;
    const C = 1.9148 * Math.sin(M * RAD) + 0.02 * Math.sin(2 * M * RAD) + 3e-4 * Math.sin(3 * M * RAD);
    const lambda = (M + C + 180 + 102.9372) % 360;
    const jTransit = 2451545 + jStar + 53e-4 * Math.sin(M * RAD) - 69e-4 * Math.sin(2 * lambda * RAD);
    const sinDec = Math.sin(lambda * RAD) * Math.sin(23.44 * RAD);
    const cosDec = Math.cos(Math.asin(sinDec));
    const cosW = (Math.sin(-0.833 * RAD) - Math.sin(lat * RAD) * sinDec) / (Math.cos(lat * RAD) * cosDec);
    const w = Math.acos(Math.max(-1, Math.min(1, cosW))) / RAD;
    const toLocalMin = (j) => ((j - 24405875e-1) * 864e5 - (EPOCH_UTC_MS + day * 864e5)) / 6e4;
    return { rise: toLocalMin(jTransit - w / 360), set: toLocalMin(jTransit + w / 360) };
  }

  // src/data/climate.js
  var CLIMATE = [
    { high: 48, low: 36, rainDays: 18, solar: 5 },
    { high: 52, low: 37, rainDays: 15, solar: 9 },
    { high: 57, low: 40, rainDays: 17, solar: 15 },
    { high: 62, low: 43, rainDays: 15, solar: 22 },
    { high: 69, low: 48, rainDays: 11, solar: 27 },
    { high: 74, low: 53, rainDays: 7, solar: 30 },
    { high: 82, low: 57, rainDays: 2, solar: 34 },
    { high: 82, low: 58, rainDays: 3, solar: 30 },
    { high: 76, low: 53, rainDays: 6, solar: 22 },
    { high: 64, low: 46, rainDays: 12, solar: 12 },
    { high: 52, low: 40, rainDays: 18, solar: 6 },
    { high: 47, low: 36, rainDays: 19, solar: 4 }
  ];
  var WEATHER_TYPES = {
    clear: { label: "Clear", solar: 1.4 },
    cloudy: { label: "Cloudy", solar: 0.8 },
    fog: { label: "Fog", solar: 0.6 },
    rain: { label: "Rain", solar: 0.5, wetAfter: 30 },
    heavy_rain: { label: "Heavy rain", solar: 0.3, wetAfter: 10 },
    windstorm: { label: "Windstorm", solar: 0.5, wetAfter: 30 },
    snow: { label: "Snow", solar: 0.1, speed: 0.6 }
  };

  // src/engine/world.js
  var dayOf = (t) => Math.floor(t / 1440);
  function monthOfDay(day) {
    return new Date(Date.UTC(2026, 10, 24) + day * 864e5).getUTCMonth();
  }
  function rollType(state2, month, prevType) {
    const c = CLIMATE[month];
    const winter = month >= 10 || month <= 2;
    if (winter && prevType && rand(state2) < 0.6) return prevType === "windstorm" ? "rain" : prevType;
    if (winter && rand(state2) < 0.04) return "windstorm";
    if (rand(state2) < c.rainDays / 30) return rand(state2) < 0.2 ? "heavy_rain" : "rain";
    const r = rand(state2);
    return r < 0.35 ? "clear" : r < 0.85 ? "cloudy" : "fog";
  }
  function windFor(state2, type) {
    if (type === "windstorm") return randInt(state2, 30, 60);
    if (type === "rain" || type === "heavy_rain") return randInt(state2, 5, 20);
    return randInt(state2, 0, 10);
  }
  function finishDay(state2, w, month) {
    if ((w.type === "rain" || w.type === "heavy_rain") && w.low <= 32 && (month === 11 || month <= 1)) {
      w.type = "snow";
      w.snowInches = randInt(state2, 1, 6);
    }
    if (w.type === "clear") w.nextLow -= 5;
    return w;
  }
  function initWeather(state2) {
    const day = 0;
    const month = monthOfDay(day);
    const c = CLIMATE[month];
    const delta = randInt(state2, -6, 6);
    const type = rollType(state2, month, null);
    state2.weather = finishDay(state2, {
      day,
      type,
      wind: windFor(state2, type),
      low: c.low + delta,
      high: c.high + delta,
      prevHigh: c.high + delta,
      nextLow: c.low + randInt(state2, -8, 8)
    }, month);
  }
  function rollWeather(state2, day) {
    const month = monthOfDay(day);
    const c = CLIMATE[month];
    const old = state2.weather;
    const type = rollType(state2, month, old.type);
    const low = old.nextLow;
    state2.weather = finishDay(state2, {
      day,
      type,
      wind: windFor(state2, type),
      low,
      high: low + (c.high - c.low) + randInt(state2, -3, 3),
      prevHigh: old.high,
      nextLow: c.low + randInt(state2, -8, 8)
    }, month);
  }
  function sunFor(t) {
    return sunTimes(dayOf(t));
  }
  function isNight(t) {
    const m = (t % 1440 + 1440) % 1440;
    const s = sunFor(t);
    return m < s.rise || m > s.set;
  }
  function airTemp(state2, t) {
    const w = state2.weather;
    const m = (t % 1440 + 1440) % 1440;
    const s = sunFor(t);
    const peak = 15 * 60;
    const ease = (a, b, f) => a + (b - a) * (1 - Math.cos(Math.PI * Math.max(0, Math.min(1, f)))) / 2;
    if (m < s.rise) {
      const span2 = 1440 - peak + s.rise;
      return ease(w.prevHigh, w.low, (m + 1440 - peak) / span2);
    }
    if (m <= peak) return ease(w.low, w.high, (m - s.rise) / (peak - s.rise));
    const span = 1440 - peak + s.rise;
    return ease(w.high, w.nextLow, (m - peak) / span);
  }
  function weatherInfo(state2) {
    return WEATHER_TYPES[state2.weather.type];
  }
  function isBadWeather(state2) {
    return ["heavy_rain", "windstorm", "snow"].includes(state2.weather.type);
  }
  function solarToday(state2) {
    const month = monthOfDay(state2.weather.day);
    return CLIMATE[month].solar * WEATHER_TYPES[state2.weather.type].solar;
  }

  // src/engine/state.js
  var SAVE_VERSION = 1;
  var START_MINUTE = 9 * 60 + 5;
  var HOME = { lat: HOME_LAT, lon: HOME_LON };
  var MAP_RADIUS_MILES = 15;
  var homeOf = (state2) => state2.homePos || HOME;
  function randomStartPoint(rng = Math.random) {
    const r = 12 * Math.sqrt(rng());
    const a = rng() * 2 * Math.PI;
    return {
      lat: HOME.lat + r * Math.sin(a) / 69.09,
      lon: HOME.lon + r * Math.cos(a) / (69.09 * Math.cos(HOME.lat * Math.PI / 180))
    };
  }
  function newGame(seed = Math.floor(Math.random() * 2 ** 31), opts = {}) {
    const homePos = opts.home ? { lat: +opts.home.lat, lon: +opts.home.lon } : { ...HOME };
    const r = mulberry32(hashString("setup" + seed));
    const state2 = {
      version: SAVE_VERSION,
      seed,
      rngState: seed,
      time: START_MINUTE,
      player: {
        food: 40,
        water: 35,
        warmth: 60,
        energy: 40,
        health: 70,
        morale: 40,
        energyMax: 60,
        weak: true,
        weakGoodHours: 0,
        wet: false,
        wetMinutes: 0,
        dryMinutes: 0,
        worn: { _v: 2, base: false, mid: false, shell: false, hat: false, gloves: false, boots: false, socks: false },
        wetness: 0,
        injuries: [],
        illness: { stomachH: 0, infection: null },
        painH: 0,
        lightHours: 10,
        lastComfortDay: -1,
        bodySeenDay: -1,
        lastDogPlayDay: -1
      },
      homePos,
      homeLabel: opts.homeLabel || null,
      pos: { ...homePos },
      location: { kind: "home" },
      carried: { backpack: 1 },
      home: {
        storage: {
          formula: 4,
          saline: 2,
          first_aid: 1,
          antibiotics: 1,
          pain_pills: 1,
          canned_food: 6,
          snacks: 1,
          dry_food: 1,
          flashlight: 1,
          winter_coat: 1,
          firewood: 3
        },
        indoorTemp: 47,
        fireHours: 0,
        heaterOn: false,
        battery: 5.4,
        batteryMax: 13.5,
        tapWorks: true,
        tapStopDay: 9 + Math.floor(r() * 21),
        // day 10 to 30
        tankGal: 40,
        toiletGal: 3,
        rawGal: 0,
        safeGal: 0,
        furniture: 12,
        fridgeOpened: false,
        projects: {},
        // built home base projects (see data/projects.js)
        work: {}
        // hours of work done on started projects
      },
      places: {},
      houses: {},
      houseAreas: {},
      dog: {
        stage: "none",
        arriveDay: 1 + Math.floor(r() * 4),
        // day 2 to 5
        revisitUsed: false,
        revisitDay: null,
        feedDays: [],
        name: null,
        food: 60,
        water: 80,
        health: 80,
        bond: 30,
        withPlayer: true,
        warned: 0
      },
      weather: null,
      stats: { miles: 0, placesSearched: 0, zonesSearched: 0, housesSearched: 0 },
      flags: {},
      log: [],
      dead: null,
      pendingPrompt: null
    };
    initWeather(state2);
    if (opts.homeLabel) log(state2, `This run starts in a different house: ${opts.homeLabel}. It is your home now.`, "story");
    log(state2, "You wake up in a hospital bed in your own living room. The feeding pump beeps. Its bag is empty.", "story");
    log(state2, "The house is cold and silent. Nobody comes when you call out.", "story");
    log(state2, "Hint: drink, eat, and get the house warm before the first night.", "hint");
    return state2;
  }
  var dayIndex = (t) => Math.floor(t / 1440);
  var minuteOfDay = (t) => (t % 1440 + 1440) % 1440;
  function formatClock(t) {
    const m = Math.floor(minuteOfDay(t));
    let h = Math.floor(m / 60);
    const mm = String(m % 60).padStart(2, "0");
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${h}:${mm} ${ampm}`;
  }
  var DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function calendar(t) {
    const d = new Date(Date.UTC(2026, 10, 24) + dayIndex(t) * 864e5);
    return { year: d.getUTCFullYear(), month: d.getUTCMonth(), date: d.getUTCDate(), weekday: d.getUTCDay() };
  }
  function formatDate(t) {
    const c = calendar(t);
    return `${DAYS[c.weekday]} ${c.date} ${MONTHS[c.month]} ${c.year}`;
  }
  function formatDuration(min) {
    min = Math.round(min);
    const h = Math.floor(min / 60);
    const m = min % 60;
    if (h && m) return `${h} h ${m} min`;
    if (h) return `${h} h`;
    return `${m} min`;
  }
  function addItem(bag, id, qty = 1) {
    bag[id] = Math.round(((bag[id] || 0) + qty) * 1e3) / 1e3;
    if (bag[id] <= 1e-4) delete bag[id];
  }
  function bagWeight(bag) {
    let w = 0;
    for (const [id, q] of Object.entries(bag)) w += (ITEMS[id]?.weight || 0) * q;
    return Math.round(w * 10) / 10;
  }
  function carryLimit(state2) {
    let lim = state2.carried.backpack ? 30 : 10;
    if (state2.player.weak) lim *= 0.5;
    if (state2.player.food < 25) lim *= 0.9;
    return Math.round(lim);
  }
  function has(state2, id) {
    return (state2.carried[id] || 0) > 0 || state2.location.kind === "home" && (state2.home.storage[id] || 0) > 0;
  }
  function hasLight(state2) {
    return (state2.carried.flashlight || 0) > 0 && state2.player.lightHours > 0 && !state2.player.lightOff;
  }
  function log(state2, text, kind = "info") {
    state2.log.push({ t: state2.time, text, kind });
    if (state2.log.length > 300) state2.log.splice(0, state2.log.length - 300);
    journalNote(state2, text, kind);
  }
  function journalNote(state2, text, kind) {
    if (!state2.journal) state2.journal = [];
    const day = dayIndex(state2.time);
    let d = state2.journal[state2.journal.length - 1];
    if (!d || d.day !== day) {
      d = { day, places: [], taken: 0, searched: 0, events: [] };
      state2.journal.push(d);
    }
    const arrive = /^You arrive at (.+)\.$/.exec(text);
    if (arrive) {
      if (!d.places.includes(arrive[1])) d.places.push(arrive[1]);
      return;
    }
    if (/^You walk to a house/.test(text)) {
      if (!d.places.includes("a house")) d.places.push("a house");
      return;
    }
    if (/^You take: /.test(text)) {
      d.taken += 1;
      return;
    }
    if (/^You search the /.test(text)) {
      d.searched = (d.searched || 0) + 1;
      return;
    }
    if ((kind === "danger" || kind === "good" || kind === "warn") && d.events.length < 8 && !d.events.includes(text)) d.events.push(text);
  }

  // src/engine/vitals.js
  var CAL_PER_FOOD_POINT = 70;
  var WATER_PER_QUART = 25;
  var FOOD_LOSS_PER_HOUR = 1.5;
  var WATER_LOSS_PER_HOUR = 2.5;
  var WORK_FACTOR = 1.5;
  var SLEEP_FACTOR = 0.75;
  var ENERGY_LOSS = { rest: 3, work: 5, walk: 6, heavy: 9 };
  var STARVING_DAMAGE = 0.2;
  var DEHYDRATED_DAMAGE = 2;
  var SEARCH_INJURY_CHANCE = 0.03;

  // src/engine/placesdb.js
  var LIST = [];
  var INDEX = {};
  function setPlaces(list) {
    LIST = list;
    INDEX = Object.fromEntries(list.map((p) => [p.id, p]));
  }
  var getPlace = (id) => INDEX[id];
  var allPlaces = () => LIST;

  // src/engine/season.js
  var SEASONS = {
    winter: { label: "Winter", months: [10, 11, 0, 1] },
    // Nov to Feb: cold, wet, dark
    spring: { label: "Spring", months: [2, 3, 4] },
    summer: { label: "Summer", months: [5, 6, 7] },
    fall: { label: "Fall", months: [8, 9] }
  };
  function seasonOf(t) {
    const m = calendar(t).month;
    return Object.keys(SEASONS).find((k) => SEASONS[k].months.includes(m));
  }
  function overgrowth(t) {
    const days = Math.max(0, dayIndex(t));
    return Math.min(1, 0.08 + days / 730);
  }
  var SEASON_START_TEXT = {
    spring: "Spring. The days are longer. Green shoots push up through the cracks in the roads.",
    summer: "Summer. The city is green and quiet. Grass grows tall in the streets and on the lawns.",
    fall: "Fall. The leaves turn and drop. They pile up on the cars and fill the gutters.",
    winter: "Winter. Cold rain and short days. Dead weeds bend over the sidewalks."
  };
  var GROWTH_TEXT = [
    "Moss grows on the north side of the parked cars.",
    "Weeds come up in the cracks of the parking lots.",
    "Blackberry vines climb over the fences on your street.",
    "Ivy covers the walls of the stores. Some windows are green now.",
    "Small trees grow in the gutters and on the flat roofs.",
    "The lawns are fields now. Deer walk down the middle of the street.",
    "Grass hides the road lines. Some side streets look like trails.",
    "Young alder trees stand in the parking lots, taller than the cars."
  ];
  function seasonDaily(state2, day) {
    const t = day * 1440;
    const prev = state2.season || seasonOf(t);
    const now = seasonOf(t);
    if (now !== prev) log(state2, SEASON_START_TEXT[now], "story");
    state2.season = now;
    if (calendar(t).date === 24 && day > 0) {
      const n = Math.round(day / 30.4) - 1;
      log(state2, GROWTH_TEXT[Math.min(GROWTH_TEXT.length - 1, Math.max(0, n))], "story");
    }
  }

  // src/data/projects.js
  var WINGS = {
    power: { label: "Power", icon: "\u26A1", blurb: "Solar panels and the home battery." },
    water: { label: "Water", icon: "\u{1F4A7}", blurb: "Collect, store and clean water." },
    heat: { label: "Heat and shelter", icon: "\u{1F525}", blurb: "Keep the living room warm with less fuel." },
    medical: { label: "Medical", icon: "\u271A", blurb: "Heal faster and stay healthy." },
    food: { label: "Food", icon: "\u{1F96B}", blurb: "Cook and store food." }
  };
  var PROJECTS = [
    // ---- Power ----
    {
      id: "led_lights",
      wing: "power",
      name: "LED lights on the battery",
      effect: "Light at home after dark. Morale +3 each day.",
      needs: { wiring: 1, hardware_parts: 1 },
      tools: ["toolkit"],
      hours: 2
    },
    {
      id: "second_battery",
      wing: "power",
      name: "Second battery",
      effect: "Battery storage 13.5 \u2192 27 kWh.",
      needs: { battery_module: 1, wiring: 2 },
      tools: ["toolkit"],
      requires: ["led_lights"],
      hours: 8
    },
    // ---- Water ----
    {
      id: "rain_barrels",
      wing: "water",
      name: "Rain barrel system",
      effect: "Rain fills 2 barrels from the gutter (110 gal). Boil or filter it before you drink.",
      needs: { rain_barrel: 2, pipe_fittings: 1 },
      tools: [],
      hours: 3
    },
    {
      id: "filter_station",
      wing: "water",
      name: "Water filter station",
      effect: "Filter 2 gal of unsafe water in 10 min, with no fire or power.",
      needs: { water_filter: 1, pipe_fittings: 1, scrap_wood: 1 },
      tools: [],
      requires: ["rain_barrels"],
      hours: 2
    },
    // ---- Heat ----
    {
      id: "insulate_living",
      wing: "heat",
      name: "Insulate the living room",
      effect: "The house loses heat half as fast.",
      needs: { insulation: 2, plastic_sheet: 1, hardware_parts: 1 },
      tools: [],
      hours: 4
    },
    {
      id: "wood_stove",
      wing: "heat",
      name: "Wood stove",
      effect: "Fire gives more heat (+30 \xB0F), and one bundle burns 4 h, not 2 h.",
      needs: { stove_kit: 1, pipe_fittings: 1, hardware_parts: 2 },
      tools: ["toolkit"],
      requires: ["insulate_living"],
      hours: 16
    },
    // ---- Medical ----
    {
      id: "sick_room",
      wing: "medical",
      name: "Clean sick room",
      effect: "When you sleep at home, injuries heal 50% faster and you get back more Health.",
      needs: { bleach: 1, plastic_sheet: 1, first_aid: 1 },
      tools: [],
      hours: 2
    },
    {
      id: "med_cabinet",
      wing: "medical",
      name: "Locked medicine cabinet",
      effect: "Medicine is sorted and ready: pain pills work 9 h, not 6 h.",
      needs: { scrap_wood: 2, hardware_parts: 1 },
      tools: ["toolkit"],
      requires: ["sick_room"],
      hours: 3
    },
    // ---- Food ----
    {
      id: "rocket_stove",
      wing: "food",
      name: "Rocket stove in the garage",
      effect: "Cook and boil water with scrap wood: no fire in the fireplace and no battery power needed.",
      needs: { metal_bin: 1, hardware_parts: 1, scrap_wood: 1 },
      tools: [],
      hours: 3
    },
    {
      id: "sealed_store",
      wing: "food",
      name: "Sealed food store",
      effect: "Morale +5 one time. Then Morale +2 each day while 10 or more food items are in storage.",
      needs: { metal_bin: 3 },
      tools: [],
      requires: ["rocket_stove"],
      hours: 1
    }
  ];
  var PROJECT_BY_ID = Object.fromEntries(PROJECTS.map((p) => [p.id, p]));

  // src/engine/base.js
  var WORK_BLOCK_H = 2;
  var MIN_WORK_ENERGY = 15;
  function base(state2) {
    const h = state2.home;
    if (!h.projects) h.projects = {};
    if (!h.work) h.work = {};
    return h;
  }
  function built(state2, id) {
    return !!(state2.home.projects && state2.home.projects[id]);
  }
  function builtCount(state2) {
    return PROJECTS.filter((p) => built(state2, p.id)).length;
  }
  function haveQty(state2, id) {
    return (state2.home.storage[id] || 0) + (state2.carried[id] || 0);
  }
  function projectStatus(state2, proj) {
    const h = base(state2);
    const started = h.work[proj.id] != null;
    const doneH = h.work[proj.id] || 0;
    const parts = Object.entries(proj.needs).map(([id, need]) => ({ id, need, have: haveQty(state2, id) }));
    const tools = (proj.tools || []).map((id) => ({ id, have: haveQty(state2, id) > 0 }));
    const missingReq = (proj.requires || []).filter((r) => !built(state2, r));
    const partsOk = started || parts.every((x) => x.have >= x.need);
    const toolsOk = tools.every((t) => t.have);
    let blocked = null;
    if (built(state2, proj.id)) blocked = "Built";
    else if (missingReq.length) blocked = `Build first: ${missingReq.map((r) => PROJECT_BY_ID[r].name).join(", ")}`;
    else if (!partsOk) blocked = "Missing parts";
    else if (!toolsOk) blocked = `Needs ${tools.filter((t) => !t.have).map((t) => itemName(t.id).toLowerCase()).join(", ")}`;
    else if (state2.location.kind !== "home") blocked = "Go home to work on it";
    else if (state2.player.energy < MIN_WORK_ENERGY) blocked = `Too tired (Energy ${MIN_WORK_ENERGY}+)`;
    return {
      built: built(state2, proj.id),
      started,
      doneH,
      leftH: Math.max(0, proj.hours - doneH),
      parts,
      tools,
      missingReq,
      blocked,
      canWork: !blocked
    };
  }
  function wingSummary(state2) {
    return Object.entries(WINGS).map(([id, w]) => {
      const list = PROJECTS.filter((p) => p.wing === id);
      return { id, ...w, projects: list, built: list.filter((p) => built(state2, p.id)).length };
    });
  }
  function takeParts(state2, needs) {
    for (const [id, need] of Object.entries(needs)) {
      let left = need;
      for (const bag of [state2.home.storage, state2.carried]) {
        const take = Math.min(left, bag[id] || 0);
        if (take > 0) addItem(bag, id, -take);
        left -= take;
      }
    }
  }
  function workOnProject(state2, id) {
    const proj = PROJECT_BY_ID[id];
    if (!proj) return;
    const h = base(state2);
    const st = projectStatus(state2, proj);
    if (!st.canWork) {
      log(state2, `You cannot work on "${proj.name}": ${st.blocked}.`, "warn");
      return;
    }
    if (!st.started) {
      takeParts(state2, proj.needs);
      h.work[id] = 0;
      log(state2, `You start a project: ${proj.name}. You lay out the parts.`);
    }
    const hours = Math.min(WORK_BLOCK_H, st.leftH);
    advanceTime(state2, Math.round(hours * 60), "heavy");
    if (state2.dead) return;
    h.work[id] += hours;
    if (h.work[id] >= proj.hours - 1e-9) {
      delete h.work[id];
      h.projects[id] = true;
      finishProject(state2, proj);
    } else {
      log(state2, `You work on ${proj.name.toLowerCase()} for ${formatDuration(hours * 60)}. ${formatDuration((proj.hours - h.work[id]) * 60)} of work left.`);
    }
  }
  function finishProject(state2, proj) {
    const h = state2.home;
    const p = state2.player;
    if (proj.id === "second_battery") h.batteryMax = 27;
    let morale = 5;
    if (proj.id === "sealed_store") morale += 5;
    p.morale = Math.min(100, p.morale + morale);
    log(state2, `Project done: ${proj.name}. ${proj.effect}`, "good");
  }
  var fireHoursPerBundle = (state2) => built(state2, "wood_stove") ? 4 : 2;
  var fireHeat = (state2) => built(state2, "wood_stove") ? 30 : 20;
  var heatLossFactor = (state2) => built(state2, "insulate_living") ? 0.5 : 1;
  var painPillHours = (state2) => built(state2, "med_cabinet") ? 9 : 6;
  function foodItemsStored(state2) {
    return Object.entries(state2.home.storage).filter(([id]) => ITEMS[id] && ITEMS[id].kind === "food").reduce((n, [, q]) => n + q, 0);
  }

  // src/engine/skills.js
  var SKILLS = {
    scavenging: {
      name: "Scavenging",
      how: "Take items, search shelves and rooms, open boxes.",
      perLevel: "Searches take 8% less time per level.",
      notice: ["", "You notice how many items are near you.", "You hear how many items are in a closed box.", "You notice items a little further away.", "", "You see loot from far away."]
    },
    tinkering: {
      name: "Tinkering",
      how: "Force doors and gates, break furniture for wood.",
      perLevel: "+1 to force doors and gates per level.",
      notice: []
    },
    first_aid: {
      name: "First aid",
      how: "Bandage wounds, treat illness.",
      perLevel: "A bandaged wound heals 8% faster per level. Wound infection risk is 10% lower per level.",
      notice: []
    },
    cooking: {
      name: "Cooking",
      how: "Cook hot meals, boil and treat water.",
      perLevel: "Hot meals give +1 morale per level. Boiling takes 10% less time per level.",
      notice: []
    },
    survival: {
      name: "Survival",
      how: "Keep a fire, collect and filter water.",
      perLevel: "Firewood burns 6% longer per level. Stomach bug risk from raw water is 10% lower per level.",
      notice: []
    }
  };
  var LEVEL_XP = [0, 15, 40, 80, 140, 220];
  var MAX_LEVEL = 5;
  var BOOK_XP = 25;
  var READ_MINUTES = 120;
  function skillsOf(state2) {
    if (!state2.skills || typeof state2.skills !== "object") state2.skills = {};
    const s = state2.skills;
    if (!s.xp || typeof s.xp !== "object") s.xp = {};
    if (!Array.isArray(s.books)) s.books = [];
    return s;
  }
  function levelFor(xp) {
    let lvl = 0;
    for (let i = 1; i <= MAX_LEVEL; i++) if (xp >= LEVEL_XP[i]) lvl = i;
    return lvl;
  }
  function skillLevel(state2, key) {
    const xp = state2.skills && state2.skills.xp ? state2.skills.xp[key] || 0 : 0;
    return levelFor(xp);
  }
  var DAILY_FULL = 20;
  function practice(state2, key, amount = 1, { book = false } = {}) {
    if (!SKILLS[key] || !(amount > 0)) return skillLevel(state2, key);
    const s = skillsOf(state2);
    if (!book) {
      const day = dayIndex(state2.time);
      if (!s.today || s.today.day !== day) s.today = { day, uses: {} };
      const n = (s.today.uses[key] || 0) + 1;
      s.today.uses[key] = n;
      if (n > DAILY_FULL) amount /= 2;
    }
    const before = levelFor(s.xp[key] || 0);
    s.xp[key] = (s.xp[key] || 0) + amount;
    const after = levelFor(s.xp[key]);
    if (after > before) {
      const sk = SKILLS[key];
      const extra = sk.notice[after] ? ` ${sk.notice[after]}` : "";
      log(state2, `${sk.name} skill is now level ${after}. ${sk.perLevel}${extra}`, "good");
    }
    return after;
  }
  function skillProgress(state2, key) {
    const xp = state2.skills && state2.skills.xp ? state2.skills.xp[key] || 0 : 0;
    const lvl = levelFor(xp);
    if (lvl >= MAX_LEVEL) return { key, name: SKILLS[key].name, level: lvl, xp, next: null, frac: 1 };
    const lo = LEVEL_XP[lvl];
    const hi = LEVEL_XP[lvl + 1];
    return { key, name: SKILLS[key].name, level: lvl, xp, next: hi - xp, frac: (xp - lo) / (hi - lo) };
  }
  function allSkills(state2) {
    return Object.keys(SKILLS).map((k) => skillProgress(state2, k));
  }
  function hasRead(state2, bookId) {
    return !!(state2.skills && Array.isArray(state2.skills.books) && state2.skills.books.includes(bookId));
  }
  function searchTimeFactor(state2) {
    return 1 - 0.08 * skillLevel(state2, "scavenging");
  }
  function forceBonus(state2) {
    const l = skillLevel(state2, "tinkering");
    return l ? [["tinkering", l]] : [];
  }
  function bandageHealFactor(state2) {
    return 1 - 0.08 * skillLevel(state2, "first_aid");
  }
  function infectRiskFactor(state2) {
    return 1 - 0.1 * skillLevel(state2, "first_aid");
  }
  function cookMoraleBonus(state2) {
    return skillLevel(state2, "cooking");
  }
  function boilTimeFactor(state2) {
    return 1 - 0.1 * skillLevel(state2, "cooking");
  }
  function fireBonusFactor(state2) {
    return 1 + 0.06 * skillLevel(state2, "survival");
  }
  function rawWaterRiskFactor(state2) {
    return 1 - 0.1 * skillLevel(state2, "survival");
  }
  function noticeOf(state2) {
    const l = skillLevel(state2, "scavenging");
    return {
      level: l,
      countRadius: l >= 1 ? l >= 3 ? 8 : 5 : 0,
      boxCount: l >= 2,
      lootGlow: l >= 5 ? 1 : l >= 3 ? 0.5 : 0
    };
  }

  // src/engine/food.js
  var STALE_AT = 0.5;
  var RISK = { fresh: 0, stale: 0.1, spoiled: 0.5 };
  var WARM_FED_HOURS = 6;
  function isPerishable(id) {
    return !!(ITEMS[id] && ITEMS[id].perish);
  }
  function spoilRate(tempF) {
    if (tempF <= 34) return 0.14;
    if (tempF >= 75) return 1.5;
    if (tempF >= 65) return 1 + (tempF - 65) * 0.05;
    return 0.14 + (tempF - 34) / (65 - 34) * 0.86;
  }
  function freshOf(state2) {
    if (!state2.fresh || typeof state2.fresh !== "object") state2.fresh = {};
    return state2.fresh;
  }
  function stageOf(state2, id) {
    if (!isPerishable(id)) return "keeps";
    const s = freshOf(state2)[id] || 0;
    return s >= 1 ? "spoiled" : s >= STALE_AT ? "stale" : "fresh";
  }
  function ageFood(state2, dt, tempAt) {
    const f = freshOf(state2);
    for (const id of Object.keys(ITEMS)) {
      if (!isPerishable(id)) continue;
      const c = state2.carried[id] || 0;
      const st = state2.home && state2.home.storage[id] || 0;
      if (c + st <= 0) {
        delete f[id];
        continue;
      }
      const temp = st > c ? tempAt("storage") : tempAt("carried");
      f[id] = (f[id] || 0) + dt / 24 / ITEMS[id].perish * spoilRate(temp);
    }
  }
  function eatRisk(state2, id, cooked = false) {
    const r = RISK[stageOf(state2, id)] || 0;
    return cooked ? r / 2 : r;
  }
  function stageLabel(state2, id) {
    const st = stageOf(state2, id);
    return st === "keeps" ? "" : st === "fresh" ? "Fresh" : st === "stale" ? "Stale" : "Spoiled";
  }

  // src/engine/clothes.js
  var SLOTS = ["base", "mid", "shell", "hat", "gloves", "boots", "socks"];
  var SLOT_NAMES = { base: "Base layer", mid: "Warm layer", shell: "Shell", hat: "Hat", gloves: "Gloves", boots: "Boots", socks: "Socks" };
  var NORMAL_CLOTHES = { warmth: 10, wind: 0.1, wetWarm: false };
  var OLD = { coat: ["mid", "winter_coat"], rain: ["shell", "rain_jacket"], hat: ["hat", "winter_hat"], gloves: ["gloves", "gloves"], boots: ["boots", "boots"], socks: ["socks", "wool_socks"] };
  var WET_LIMIT = 50;
  function normalizeWorn(p) {
    const w = p.worn || {};
    if (!w._v) {
      const next = { _v: 2 };
      for (const s of SLOTS) next[s] = false;
      for (const [old, [slot, id]] of Object.entries(OLD)) if (w[old] === true) next[slot] = id;
      for (const s of SLOTS) if (typeof w[s] === "string" && ITEMS[w[s]]) next[s] = w[s];
      p.worn = next;
    }
    if (typeof p.wetness !== "number") p.wetness = p.wet ? 80 : 0;
    return p.worn;
  }
  function wornItems(p) {
    const w = normalizeWorn(p);
    return SLOTS.filter((s) => w[s]).map((s) => ({ slot: s, id: w[s], it: ITEMS[w[s]] }));
  }
  function clothingWarmth(p) {
    const wet = Math.min(1, (p.wetness ?? (p.wet ? 80 : 0)) / 100);
    const part = (warmth, wetWarm) => warmth * (wetWarm ? 1 - 0.15 * wet : 1 - 0.5 * wet);
    let r = part(NORMAL_CLOTHES.warmth, false);
    for (const { it } of wornItems(p)) r += part(it.warmth || 0, !!it.wetWarm);
    return r;
  }
  function windBlock(p) {
    return Math.max(NORMAL_CLOTHES.wind, ...wornItems(p).map(({ it }) => it.wind || 0));
  }
  function wetGainPerHour(p, weatherType, wetAfter) {
    if (!wetAfter) return 0;
    const base2 = WET_LIMIT / wetAfter * 60;
    const shell = wornItems(p).find(({ slot }) => slot === "shell");
    if (shell && shell.it.waterproof) return base2 * (weatherType === "heavy_rain" ? 0.4 : 0.1);
    return base2;
  }
  function dryPerHour(temp, byFire) {
    if (byFire) return 40;
    if (temp >= 55) return 15;
    if (temp >= 40) return 6;
    return 2;
  }
  function putOn(p, id) {
    const it = ITEMS[id];
    if (!it || it.kind !== "wear" || !SLOTS.includes(it.slot)) return null;
    const w = normalizeWorn(p);
    const old = w[it.slot] || null;
    w[it.slot] = id;
    return old;
  }
  function takeOff(p, slot) {
    const w = normalizeWorn(p);
    const old = w[slot] || null;
    w[slot] = false;
    return old;
  }
  function wornText(p) {
    const list = wornItems(p).map(({ it }) => it.short || it.name.toLowerCase());
    return list.length ? list.join(", ") : "normal clothes";
  }

  // src/engine/tick.js
  var clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  function clothingRating(state2) {
    return clothingWarmth(state2.player);
  }
  function environment(state2, mode, t = state2.time) {
    const air = airTemp(state2, t);
    const night = isNight(t);
    if (mode === "walk") {
      return { outside: true, temp: air, wind: state2.weather.wind, precip: !!weatherInfo(state2).wetAfter, dark: night, air };
    }
    if (state2.location.kind === "home") {
      return { outside: false, temp: state2.home.indoorTemp, wind: 0, precip: false, dark: night && !built(state2, "led_lights"), air, home: true };
    }
    let dark = night;
    if (state2.location.kind === "place") {
      const p = getPlace(state2.location.id);
      if (p && CATEGORIES[p.cat]?.dark) dark = true;
    }
    return { outside: false, temp: air + 5, wind: 0, precip: false, dark, air };
  }
  function feltTemp(state2, mode, env = environment(state2, mode)) {
    let felt = env.temp + clothingRating(state2);
    if (env.outside) felt -= env.wind / 10 * 7 * (1 - windBlock(state2.player));
    if (mode === "sleep") {
      if (env.home) felt += 10;
      felt += Math.max(0, ...Object.keys(ITEMS).filter((id) => ITEMS[id].sleepWarm && has(state2, id)).map((id) => ITEMS[id].sleepWarm));
      const d = state2.dog;
      if (d.stage === "joined" && d.bond >= 80) felt += 5;
    }
    return felt;
  }
  function warmthRate(felt) {
    if (felt >= 70) return 10;
    if (felt >= 55) return 3;
    if (felt >= 40) return -3;
    if (felt >= 25) return -7;
    return -12;
  }
  function damage(state2, amount, cause) {
    if (amount <= 0) return;
    state2.player.health -= amount;
    state2._damage = state2._damage || {};
    state2._damage[cause] = (state2._damage[cause] || 0) + amount;
  }
  function advanceTime(state2, minutes, mode = "rest") {
    let left = minutes;
    while (left > 1e-4 && !state2.dead) {
      const step = Math.min(10, left);
      const before = state2.time;
      state2.time += step;
      left -= step;
      const dBefore = dayIndex(before - 300);
      const dAfter = dayIndex(state2.time - 300);
      for (let d = dBefore + 1; d <= dAfter; d++) dailyRollover(state2, d);
      tickStep(state2, step / 60, mode);
    }
  }
  function tickStep(state2, dt, mode) {
    const p = state2.player;
    const env = environment(state2, mode);
    const sleeping = mode === "sleep";
    const working = mode === "walk" || mode === "work" || mode === "heavy";
    const wx = weatherInfo(state2);
    normalizeWorn(p);
    const wasWet = p.wetness >= WET_LIMIT;
    if (env.outside && wx.wetAfter) p.wetness = clamp(p.wetness + wetGainPerHour(p, state2.weather.type, wx.wetAfter) * dt, 0, 100);
    else if (!env.outside) p.wetness = clamp(p.wetness - dryPerHour(env.temp, env.home && state2.home.fireHours > 0) * dt, 0, 100);
    p.wet = p.wetness >= WET_LIMIT;
    if (p.wet && !wasWet) log(state2, "Your clothes are wet through. Cotton and down keep little heat when wet; wool and fleece keep most.", "warn");
    if (!p.wet && wasWet) log(state2, "Your clothes are dry again.");
    const felt = feltTemp(state2, mode, env);
    let wr = warmthRate(felt);
    if (p.warmFedH > 0) {
      if (wr < 0) wr *= 0.5;
      p.warmFedH = Math.max(0, p.warmFedH - dt);
    }
    p.warmth = clamp(p.warmth + wr * dt, 0, 100);
    ageFood(state2, dt, (where) => where === "storage" ? state2.home.indoorTemp : env.temp);
    const cold = p.warmth < 50;
    const pace = working ? WORK_FACTOR : sleeping ? SLEEP_FACTOR : 1;
    let foodLoss = FOOD_LOSS_PER_HOUR * pace * (cold ? 1.3 : 1);
    let waterLoss = WATER_LOSS_PER_HOUR * pace * (p.illness.stomachH > 0 ? 2 : 1);
    if (felt > 90 && working) waterLoss *= 2;
    p.food = clamp(p.food - foodLoss * dt, 0, 100);
    p.water = clamp(p.water - waterLoss * dt, 0, 100);
    if (sleeping) {
      let gain = felt >= 55 ? 10 : 6;
      if (p.morale < 50) gain *= 0.75;
      if (p.health < 50) gain *= 0.75;
      if (p.food < 25) gain *= 0.75;
      p.energy = clamp(p.energy + gain * dt, 0, p.energyMax);
    } else {
      let loss = ENERGY_LOSS[mode] || ENERGY_LOSS.rest;
      if (cold) loss *= 1.5;
      if (mode === "walk" && bagWeight(state2.carried) > carryLimit(state2)) loss *= 1.5;
      p.energy = clamp(p.energy - loss * dt, 0, p.energyMax);
    }
    if (p.food <= 0) damage(state2, STARVING_DAMAGE * dt, "starvation");
    if (p.water <= 0) damage(state2, DEHYDRATED_DAMAGE * dt, "dehydration");
    if (p.warmth <= 0) damage(state2, 5 * dt, "hypothermia");
    for (const inj of p.injuries) {
      if (inj.type === "deep_cut" && !inj.bandaged) damage(state2, 2 * dt, "bleeding");
      inj.ageH += dt;
      let slow = p.food < 25 || p.water < 25 ? 0.5 : 1;
      if (sleeping && state2.location.kind === "home" && built(state2, "sick_room")) slow *= 1.5;
      inj.healH -= dt * slow;
      if (!inj.bandaged && !inj.infectRolled && inj.ageH >= 6 && inj.infectRisk) {
        inj.infectRolled = true;
        if (chance(state2, inj.infectRisk)) startInfection(state2);
      }
    }
    const healed = p.injuries.filter((i) => i.healH <= 0);
    for (const i of healed) log(state2, `Your ${INJURY_NAMES[i.type].toLowerCase()} has healed.`, "good");
    p.injuries = p.injuries.filter((i) => i.healH > 0);
    const inf = p.illness.infection;
    if (inf) {
      inf.ageH += dt;
      if (inf.ageH >= 48) damage(state2, 1 * dt, "infection");
      if (inf.abxH != null) {
        inf.abxH += dt;
        if (inf.abxH >= 72) {
          p.illness.infection = null;
          log(state2, "The fever is gone. The antibiotics worked.", "good");
        }
      }
    }
    if (p.illness.stomachH > 0) {
      p.illness.stomachH = Math.max(0, p.illness.stomachH - dt);
      if (p.illness.stomachH === 0) log(state2, "Your stomach is better now.", "good");
    }
    if (p.painH > 0) p.painH = Math.max(0, p.painH - dt);
    const ok = p.food >= 25 && p.water >= 25 && p.warmth >= 25 && !p.illness.infection && p.illness.stomachH <= 0;
    const sickRoom = sleeping && state2.location.kind === "home" && built(state2, "sick_room");
    if (ok) p.health += (sleeping ? sickRoom ? 1.5 : 1 : 0.25) * dt;
    p.health = Math.min(100, p.health);
    if (p.weak && p.food > 50 && p.water > 50) p.weakGoodHours += dt;
    if (env.dark && !sleeping && hasLight(state2) && (mode === "walk" || state2.location.kind !== "home")) {
      p.lightHours = Math.max(0, p.lightHours - dt);
      if (p.lightHours === 0) log(state2, "The flashlight goes dark. The batteries are empty.", "warn");
    }
    homeStep(state2, dt, env);
    dogStep(state2, dt, sleeping);
    if (p.health <= 0) {
      p.health = 0;
      const causes = Object.entries(state2._damage || {}).sort((a, b) => b[1] - a[1]);
      die(state2, causes.length ? causes[0][0] : "unknown");
    }
    state2._damage = {};
  }
  function homeStep(state2, dt, env) {
    const h = state2.home;
    const air = env.air;
    let heat = 0;
    if (h.fireHours > 0) {
      heat += fireHeat(state2);
      h.fireHours = Math.max(0, h.fireHours - dt);
      if (h.fireHours === 0 && state2.location.kind === "home") log(state2, "The fire in the fireplace burns out.");
    }
    if (h.heaterOn) {
      h.battery -= 1.5 * dt;
      heat += 20;
      if (h.battery <= 0) {
        h.battery = 0;
        h.heaterOn = false;
        log(state2, "The home battery is empty. The electric heater stops.", "warn");
      }
    }
    const passive = air + 6;
    const target = Math.min(75, passive + heat);
    const rate = heat > 0 ? 0.25 : 0.05 * heatLossFactor(state2);
    h.indoorTemp += (target - h.indoorTemp) * (1 - Math.pow(1 - rate, dt));
    const m = (state2.time % 1440 + 1440) % 1440;
    const s = sunFor(state2.time);
    if (m > s.rise && m < s.set) {
      const hours = (s.set - s.rise) / 60;
      h.battery = Math.min(h.batteryMax, h.battery + solarToday(state2) / hours * dt);
    }
    if (built(state2, "rain_barrels") && h.rawGal < 110) {
      const t = state2.weather.type;
      const perH = t === "heavy_rain" ? 5 : t === "rain" || t === "windstorm" ? 2 : 0;
      if (perH) h.rawGal = Math.min(110, h.rawGal + perH * dt);
    }
    if (h.tapWorks && (air < 25 || dayIndex(state2.time) >= h.tapStopDay)) {
      h.tapWorks = false;
      log(state2, air < 25 ? "Hard freeze. The water pipes are frozen. The kitchen tap stops." : "The kitchen tap coughs and stops. The city water is gone now.", "warn");
    }
  }
  function dogStep(state2, dt, sleeping) {
    const d = state2.dog;
    if (d.stage !== "joined") return;
    d.food = clamp(d.food - 4 * dt, 0, 100);
    d.water = 80;
    if (d.food <= 0) d.health -= 1 * dt;
    else if (sleeping) d.health = Math.min(100, d.health + 1 * dt);
    if (d.health <= 50 && d.warned < 1) {
      d.warned = 1;
      log(state2, `${d.name} is weak. Feed ${d.name} and let ${d.name} rest.`, "warn");
    }
    if (d.health <= 25 && d.warned < 2) {
      d.warned = 2;
      log(state2, `${d.name} is very sick. ${d.name} needs food or medicine now.`, "danger");
    }
    if (d.health > 60) d.warned = 0;
    if (d.health <= 0) {
      d.health = 0;
      d.stage = "dead";
      log(state2, `${d.name} lies down and does not get up again. ${d.name} is gone.`, "danger");
      state2.player.morale = Math.max(0, state2.player.morale - 25);
    }
  }
  function dailyRollover(state2, day) {
    const p = state2.player;
    rollWeather(state2, day);
    seasonDaily(state2, day);
    log(state2, `A new day. Weather: ${weatherInfo(state2).label}, high ${Math.round(state2.weather.high)}\xB0F, low ${Math.round(state2.weather.low)}\xB0F.`, "day");
    if (state2.weather.type === "snow") log(state2, `Snow: ${state2.weather.snowInches} inches. Walking is slow today.`, "warn");
    if (state2.weather.type === "windstorm") log(state2, `Windstorm. Wind ${state2.weather.wind} mph. Stay inside if you can.`, "warn");
    p.morale -= 2;
    if (p.food < 50) p.morale -= 5;
    if (state2.location.kind === "home" && state2.home.indoorTemp < 50) p.morale -= 5;
    if (built(state2, "led_lights")) p.morale += 3;
    if (built(state2, "sealed_store") && foodItemsStored(state2) >= 10) p.morale += 2;
    if (state2.dog.stage === "joined") {
      p.morale += 8;
      if (state2.dog.food >= 25) state2.dog.bond += 3;
      else state2.dog.bond -= 10;
      state2.dog.bond = clamp(state2.dog.bond, 0, 100);
    }
    p.morale = clamp(p.morale, 0, 100);
    if (p.weak) {
      if (p.weakGoodHours >= 12) {
        p.energyMax = Math.min(100, p.energyMax + 2);
        log(state2, "Your body is a little stronger today.", "good");
      }
      p.weakGoodHours = 0;
      if (p.energyMax >= 100) {
        p.weak = false;
        log(state2, "You are strong again. The weakness from the coma is gone.", "good");
      }
    }
    for (const inj of p.injuries) {
      if (!inj.bandaged && inj.infectRisk && chance(state2, inj.infectRisk)) startInfection(state2);
    }
    dogDaily(state2, day);
  }
  function dogDaily(state2, day) {
    const d = state2.dog;
    const lastFed = d.feedDays.length ? d.feedDays[d.feedDays.length - 1] : null;
    if (d.stage === "none" && day >= d.arriveDay) {
      d.stage = "visiting";
      d.visitStart = day;
      log(state2, "A thin dog watches the house from the street. It does not come near.", "story");
    } else if (d.stage === "visiting") {
      const since = lastFed == null ? day - d.visitStart : day - lastFed;
      if (since > 3) {
        if (!d.revisitUsed) {
          d.stage = "away";
          d.revisitUsed = true;
          d.revisitDay = day + randInt(state2, 5, 8);
          log(state2, "The dog is not in the street today.");
        } else {
          d.stage = "gone";
          log(state2, "The dog does not come back.");
        }
      }
    } else if (d.stage === "away" && day >= d.revisitDay) {
      d.stage = "visiting";
      d.visitStart = day;
      d.feedDays = [];
      log(state2, "The thin dog is back in the street. It looks at your door.", "story");
    }
  }
  var INJURY_NAMES = {
    small_cut: "Small cut",
    deep_cut: "Deep cut",
    sprain: "Sprain",
    bite: "Animal bite"
  };
  var INJURY_DATA = {
    small_cut: { hp: 5, healH: 48, infectRisk: 0.2 },
    deep_cut: { hp: 15, healH: 168, infectRisk: 0.2 },
    sprain: { hp: 5, healH: 120, infectRisk: 0 },
    bite: { hp: 10, healH: 168, infectRisk: 0.4 }
  };
  function addInjury(state2, type) {
    const d = INJURY_DATA[type];
    state2.player.injuries.push({ type, bandaged: false, ageH: 0, healH: d.healH, infectRisk: d.infectRisk * infectRiskFactor(state2), infectRolled: false });
    damage(state2, d.hp, type === "bite" ? "an animal attack" : "an injury");
    log(state2, `Injury: ${INJURY_NAMES[type]} (Health \u2212${d.hp}).` + (type === "deep_cut" ? " It bleeds. Bandage it fast." : ""), "danger");
    if (state2.player.health <= 0) die(state2, type === "bite" ? "an animal attack" : "an injury");
  }
  function startInfection(state2) {
    if (state2.player.illness.infection) return;
    state2.player.illness.infection = { ageH: 0, abxH: null };
    log(state2, "A wound is red, hot and swollen. It is infected. You need antibiotics.", "danger");
  }
  function startStomachBug(state2) {
    if (state2.player.illness.stomachH > 0) return;
    state2.player.illness.stomachH = 48;
    state2.player.energy = Math.max(0, state2.player.energy - 20);
    log(state2, "Stomach cramps. The water was bad. You have a stomach bug.", "danger");
  }
  var CAUSE_TEXT = {
    starvation: "starvation",
    dehydration: "dehydration (no water)",
    hypothermia: "the cold",
    bleeding: "blood loss",
    infection: "an infected wound",
    "an injury": "an injury",
    "an animal attack": "an animal attack",
    unknown: "unknown causes"
  };
  function die(state2, cause) {
    if (state2.dead) return;
    const p = state2.player;
    p.health = Math.max(0, p.health);
    if (cause === "an injury" || cause === "an animal attack") {
      if (p.water <= 0) cause = "dehydration";
      else if (p.food <= 0) cause = "starvation";
      else if (p.warmth <= 0) cause = "hypothermia";
    }
    state2.dead = {
      cause: CAUSE_TEXT[cause] || cause,
      time: state2.time,
      days: dayIndex(state2.time) + 1
    };
    log(state2, `You died of ${state2.dead.cause}.`, "danger");
  }

  // src/engine/checks.js
  function standardMods(state2, { outside = false } = {}) {
    const p = state2.player;
    const mods = [];
    if (p.energy < 50 && p.energy >= 25) mods.push(["tired", -2]);
    if (p.water < 25) mods.push(["very thirsty", -2]);
    if (p.warmth < 25) mods.push(["hypothermia", -3]);
    if (p.health < 25) mods.push(["badly hurt", -3]);
    if (p.morale < 25) mods.push(["despair", -2]);
    return mods;
  }
  var RAIN = ["rain", "heavy_rain", "windstorm"];
  function edges(state2, opts = {}) {
    const p = state2.player;
    const adv = [...opts.adv || []];
    const dis = [...opts.dis || []];
    if (opts.outside && !isNight(state2.time)) adv.push("daylight");
    const d = state2.dog;
    if (opts.outside && d && d.stage === "joined" && d.withPlayer && d.bond >= 50) adv.push(`${d.name || "dog"} helps`);
    const limb = p.injuries.some((i) => i.type === "sprain" || i.type === "deep_cut");
    if (limb && p.painH <= 0) dis.push("injured");
    if (opts.outside && state2.weather && RAIN.includes(state2.weather.type)) dis.push("rain");
    if (opts.outside && isNight(state2.time)) dis.push("night");
    if (p.energy < 25) dis.push("very tired");
    const mode = adv.length && !dis.length ? "adv" : dis.length && !adv.length ? "dis" : "normal";
    return { mode, adv, dis };
  }
  function check(state2, label, dc, extraMods = [], opts = {}) {
    const mods = [...standardMods(state2, opts), ...extraMods];
    const e = edges(state2, opts);
    const a = randInt(state2, 1, 20);
    const b = e.mode === "normal" ? a : randInt(state2, 1, 20);
    const roll = e.mode === "adv" ? Math.max(a, b) : e.mode === "dis" ? Math.min(a, b) : a;
    const total = roll + mods.reduce((s, m) => s + m[1], 0);
    const success = roll === 20 ? true : roll === 1 ? false : total >= dc;
    const modText = mods.map(([n, v]) => ` ${v >= 0 ? "+" : "\u2212"} ${Math.abs(v)} (${n})`).join("");
    const edgeText = e.mode === "adv" ? ` [adv.: ${e.adv.join(", ")}; ${a} and ${b}]` : e.mode === "dis" ? ` [disadv.: ${e.dis.join(", ")}; ${a} and ${b}]` : "";
    const note = roll === 20 ? " natural 20!" : roll === 1 ? " natural 1!" : "";
    log(state2, `\u{1F3B2} ${label}: d20 ${roll}${edgeText}${modText} = ${total} vs DC ${dc} \u2192 ${success ? "SUCCESS" : "FAIL"}${note}`, success ? "roll-ok" : "roll-fail");
    return { roll, total, dc, success, mode: e.mode };
  }
  function odds(state2, dc, extraMods = [], opts = {}) {
    const mods = [...standardMods(state2, opts), ...extraMods];
    const e = edges(state2, opts);
    const sum = mods.reduce((s, m) => s + m[1], 0);
    let ok = 0;
    for (let roll = 1; roll <= 20; roll++) if (roll === 20 || roll !== 1 && roll + sum >= dc) ok += 1;
    const p1 = ok / 20;
    const p = e.mode === "adv" ? 1 - (1 - p1) ** 2 : e.mode === "dis" ? p1 * p1 : p1;
    return { dc, mods, sum, pct: Math.round(p * 100), mode: e.mode, adv: e.adv, dis: e.dis };
  }
  function oddsText(o) {
    const top = [...o.mods].sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));
    const shown = top.slice(0, 3).map(([n, v]) => ` ${v >= 0 ? "+" : "\u2212"}${Math.abs(v)} ${n}`).join("");
    const more = top.length > 3 ? ` (+${top.length - 3} more)` : "";
    const edge = o.mode === "adv" ? ` adv. (${o.adv.join(", ")})` : o.mode === "dis" ? ` disadv. (${o.dis.join(", ")})` : "";
    return `d20${edge}${shown}${more} vs DC ${o.dc} \xB7 ${o.pct}%`;
  }

  // src/engine/status.js
  var STAGES = {
    food: [
      [50, "", ""],
      [25, "Hungry", "Below 25: wounds heal at half speed and health stops refilling."],
      [0.01, "Very hungry", "Wounds heal at half speed. Health does not refill. Sleep rests you less."],
      [0, "Starving", "You lose health every hour."]
    ],
    water: [
      [50, "", ""],
      [25, "Thirsty", "Below 25: \u22122 on d20 rolls and health stops refilling."],
      [0.01, "Very thirsty", "\u22122 on d20 rolls. Wounds heal at half speed. Health does not refill."],
      [0, "Dehydrated", "You lose 2 health every hour."]
    ],
    warmth: [
      [50, "", ""],
      [25, "Cold", "You get hungry and tired faster."],
      [0.01, "Hypothermia", "\u22123 on d20 rolls. Health does not refill."],
      [0, "Freezing", "You lose 5 health every hour."]
    ],
    energy: [
      [50, "", ""],
      [25, "Tired", "\u22122 on d20 rolls."],
      [0.01, "Exhausted", "\u22122 on d20 rolls. Sleep soon."],
      [0, "Asleep", "You fall asleep where you are."]
    ],
    health: [
      [50, "", ""],
      [25, "Hurt", "Sleep rests you less."],
      [0.01, "Badly hurt", "\u22123 on d20 rolls. Sleep rests you less."],
      [0, "Dead", ""]
    ],
    morale: [
      [50, "", ""],
      [25, "Low", "Sleep rests you less."],
      [0.01, "Despair", "\u22122 on d20 rolls. Sleep rests you less."],
      [0, "Despair", "\u22122 on d20 rolls. Sleep rests you less."]
    ]
  };
  function statStage(key, v) {
    const rows = STAGES[key];
    for (let i = 0; i < rows.length; i++) if (v >= rows[i][0]) return { stage: i, word: rows[i][1], effect: rows[i][2] };
    const last = rows.length - 1;
    return { stage: last, word: rows[last][1], effect: rows[last][2] };
  }
  function needWarnings(state2) {
    const p = state2.player;
    return Object.keys(STAGES).map((key) => ({ key, ...statStage(key, p[key]) })).filter((s) => s.stage > 0 && s.word).sort((a, b) => b.stage - a.stage);
  }
  function risks(state2) {
    const p = state2.player;
    const out = [];
    if (!p.illness.infection) {
      const open = p.injuries.filter((i) => !i.bandaged && i.infectRisk);
      if (open.length) {
        const pct = Math.round((1 - open.reduce((q, i) => q * (1 - i.infectRisk), 1)) * 100);
        out.push({ id: "infection", text: `Infection risk ${pct}% a day: bandage the open wound${open.length > 1 ? "s" : ""}` });
      }
    }
    const rate = warmthRate(feltTemp(state2, "rest"));
    if (p.warmth >= 25 && p.warmth < 60 && rate < 0) {
      const h = (p.warmth - 25) / -rate;
      out.push({ id: "hypothermia", text: `Hypothermia in about ${h < 1 ? `${Math.max(5, Math.round(h * 60 / 5) * 5)} min` : `${Math.round(h)} h`} here: get warm` });
    }
    if (p.wetness >= 50 && feltTemp(state2, "rest") < 60) out.push({ id: "wet", text: `Wet clothes (${Math.round(p.wetness)}%): you lose heat fast. Dry them inside, best by a fire` });
    if (p.water >= 25 && p.water < 40) out.push({ id: "dehydration", text: "Water is low: drink soon" });
    if (p.food >= 25 && p.food < 35) out.push({ id: "hunger", text: "Food is low: eat soon" });
    return out;
  }
  var RAW_WATER_SICK = 0.3;

  // src/engine/loot.js
  function placeState(state2, place) {
    let ps = state2.places[place.id];
    if (!ps) {
      const r = mulberry32(hashString(`${state2.seed}:${place.id}:init`));
      const cat = CATEGORIES[place.cat];
      const big = BIG_BRANDS.some((b) => (place.name || "").includes(b));
      const empty = r() < 0.2;
      ps = state2.places[place.id] = {
        zonesDone: 0,
        zones: cat.zones + (big ? 2 : 0),
        stock: Math.min(0.95, cat.stock * (big ? 1.25 : 1) * (empty ? 0.15 : 1)),
        emptyHint: empty,
        unlocked: !cat.locked,
        counterOpen: !cat.lockedZone,
        leftovers: {},
        visited: false
      };
    }
    return ps;
  }
  function rollZone(state2, key, catId, stock, zone, extraRolls = 0) {
    const r = mulberry32(hashString(`${state2.seed}:${key}:zone${zone}`));
    const cat = CATEGORIES[catId];
    const n = 2 + Math.floor(r() * 4) + extraRolls;
    const found = {};
    for (let i = 0; i < n; i++) {
      if (r() >= stock) continue;
      const e = weightedPick(r, cat.loot);
      found[e.id] = (found[e.id] || 0) + 1;
    }
    return found;
  }

  // src/engine/travel.js
  var ROUTE_FACTOR = 1.25;
  function straightMiles(a, b) {
    const R = 3958.8;
    const toR = Math.PI / 180;
    const dLat = (b.lat - a.lat) * toR;
    const dLon = (b.lon - a.lon) * toR;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * toR) * Math.cos(b.lat * toR) * Math.sin(dLon / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  var routeMiles = (a, b) => straightMiles(a, b) * ROUTE_FACTOR;
  function walkSpeed(state2, t = state2.time) {
    const p = state2.player;
    let mph = 3;
    const why = [];
    const apply = (f, w) => {
      mph *= f;
      why.push(w);
    };
    if (p.weak) apply(0.7, "weak");
    if (isNight(t) && !hasLight(state2)) apply(0.6, "dark, no light");
    if (state2.weather.type === "snow") apply(0.6, "snow");
    if (bagWeight(state2.carried) > carryLimit(state2)) apply(0.7, "heavy pack");
    if (p.injuries.some((i) => i.type === "sprain")) apply(0.7, "sprain");
    if (p.warmth < 25) apply(0.8, "hypothermia");
    if (p.energy < 25) apply(0.7, "exhausted");
    if (p.health < 25) apply(0.7, "badly hurt");
    return { mph, why };
  }
  function estimateTrip(state2, dest) {
    const miles = routeMiles(state2.pos, dest);
    const { mph, why } = walkSpeed(state2);
    const minutes = miles / mph * 60;
    const overload = bagWeight(state2.carried) > carryLimit(state2);
    const energy = minutes / 60 * 8 * (overload ? 1.5 : 1) * (state2.player.warmth < 50 ? 1.5 : 1);
    return { miles, minutes, energy, mph, why };
  }
  function lerp(a, b, f) {
    return { lat: a.lat + (b.lat - a.lat) * f, lon: a.lon + (b.lon - a.lon) * f };
  }
  function travel(state2, dest, destLabel) {
    const start2 = { ...state2.pos };
    const total = routeMiles(start2, dest);
    log(state2, `You walk toward ${destLabel} (${total.toFixed(1)} mi).`, "travel");
    let done = 0;
    while (done < total - 1e-6 && !state2.dead) {
      const seg = Math.min(1, total - done);
      const { mph } = walkSpeed(state2);
      advanceTime(state2, seg / mph * 60, "walk");
      done += seg;
      state2.stats.miles += seg;
      state2.pos = lerp(start2, dest, done / total);
      if (seg >= 0.5 && !state2.dead) roadEvent(state2);
      if (!state2.dead && state2.player.energy <= 0) {
        log(state2, "You are too tired to walk on. You sit down by a wall and sleep.", "warn");
        advanceTime(state2, 180, "sleep");
      }
    }
    if (state2.dead) return false;
    state2.pos = { ...dest };
    const fromHome = straightMiles(HOME, dest);
    if (fromHome > MAP_RADIUS_MILES) log(state2, "You are past the edge of the known area. There is nothing to search here.", "warn");
    return true;
  }
  function dogWithPlayer(state2) {
    return state2.dog.stage === "joined" && state2.dog.withPlayer;
  }
  function loseRandomItem(state2, filter = () => true) {
    const ids = Object.keys(state2.carried).filter((id2) => id2 !== "backpack" && filter(id2));
    if (!ids.length) return;
    const id = ids[randInt(state2, 0, ids.length - 1)];
    addItem(state2.carried, id, -1);
    log(state2, `You lose: ${itemName(id)}.`, "warn");
  }
  function roadEvent(state2) {
    let roll = randInt(state2, 1, 100);
    if (isNight(state2.time)) roll += 10;
    if (isBadWeather(state2)) roll += 10;
    roll = Math.min(roll, 100);
    if (roll <= 80) return;
    const dog = dogWithPlayer(state2);
    const warn = dog && state2.dog.bond >= 40;
    const animalMods = [];
    if (warn) animalMods.push(["dog warned you", 4]);
    const out = { outside: true };
    if (roll <= 85) {
      log(state2, "Broken glass and debris cover the road.");
      if (!check(state2, "Step past the debris", 8, [], out).success) addInjury(state2, "small_cut");
    } else if (roll <= 88) {
      log(state2, "Water floods the street ahead.");
      const r = check(state2, "Cross the flooded street", 12, [], out);
      if (!r.success) {
        state2.player.wet = true;
        log(state2, "You slip and fall in the cold water. You are wet.", "warn");
        loseRandomItem(state2);
      }
    } else if (roll <= 91) {
      log(state2, "A fallen tree and a downed line block the road.");
      if (!check(state2, "Climb over the tree", 10, [], out).success) addInjury(state2, "sprain");
    } else if (roll <= 95) {
      log(state2, "A pack of loose dogs runs at you, barking.", "danger");
      const mods = [...animalMods];
      if (hasLight(state2) && isNight(state2.time)) mods.push(["light", 3]);
      if (dog) mods.push([`${state2.dog.name} stands with you`, 3]);
      if (!check(state2, "Scare off the dog pack", 13, mods, out).success) {
        addInjury(state2, "bite");
        if (dog) {
          state2.dog.health -= 15;
          log(state2, `${state2.dog.name} fights them off but is bitten (dog Health \u221215).`, "warn");
        }
      } else log(state2, "The pack runs away.");
    } else if (roll <= 99) {
      log(state2, "Coyotes follow you along the road.", "danger");
      if (!check(state2, "Make the coyotes go away", 11, animalMods, out).success) {
        if (chance(state2, 0.5)) addInjury(state2, "bite");
        else {
          log(state2, "A coyote runs off with some of your food.", "warn");
          loseRandomItem(state2, (id) => ["canned_food", "snacks", "peanut_butter", "dry_food", "dog_food"].includes(id));
        }
      } else log(state2, "The coyotes go away.");
    } else {
      const found = rollZone(state2, `road${state2.time}`, "house", 0.9, 0, 1);
      const names = [];
      for (const [id, q] of Object.entries(found)) {
        addItem(state2.carried, id, q);
        names.push(`${itemName(id)}${q > 1 ? " \xD7" + q : ""}`);
      }
      log(state2, `You find an abandoned backpack by the road. Inside: ${names.join(", ") || "nothing useful"}.`, "good");
    }
  }
  function describeTrip(state2, est) {
    return `${est.miles.toFixed(1)} mi \xB7 about ${formatDuration(est.minutes)} \xB7 Energy \u2212${Math.round(est.energy)}`;
  }

  // src/engine/actions.js
  var COOK_ORDER = () => [...Object.keys(ITEMS).filter((id) => isPerishable(id) && ITEMS[id].kind === "food"), "dry_food", "canned_food"];
  var clamp2 = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  function source(state2, from) {
    return from === "storage" ? state2.home.storage : from === "here" ? hereBag(state2) : state2.carried;
  }
  function hereBag(state2) {
    const loc = state2.location;
    if (loc.kind === "home") return state2.home.storage;
    if (loc.kind === "place") return placeState(state2, getPlace(loc.id)).leftovers;
    if (loc.kind === "house") return state2.houses[loc.id].leftovers;
    return {};
  }
  function locationLabel(state2) {
    const loc = state2.location;
    if (loc.kind === "home") return "Home (Aloha)";
    if (loc.kind === "place") return getPlace(loc.id)?.name || "Unknown place";
    if (loc.kind === "house") return loc.label;
    return "";
  }
  function canHeat(state2, kwh) {
    return state2.home.fireHours > 0 || built(state2, "rocket_stove") || state2.home.battery >= kwh;
  }
  function useHeat(state2, kwh) {
    if (state2.home.fireHours > 0) return "on the fire";
    if (built(state2, "rocket_stove")) return "on the rocket stove";
    state2.home.battery -= kwh;
    return "on the electric hot plate";
  }
  function seeBody(state2, text) {
    const p = state2.player;
    const day = dayIndex(state2.time);
    log(state2, text, "story");
    if (p.bodySeenDay !== day) {
      p.bodySeenDay = day;
      p.morale = clamp2(p.morale - (day >= 30 ? 1 : 3), 0, 100);
    }
  }
  function addFood(state2, points) {
    const p = state2.player;
    if (p.illness.stomachH > 0) points /= 2;
    p.food = clamp2(p.food + points, 0, 100);
  }
  function addWater(state2, points) {
    state2.player.water = clamp2(state2.player.water + points, 0, 100);
  }
  function freeWeight(state2) {
    return carryLimit(state2) * 1.5 - bagWeight(state2.carried);
  }
  function itemUses(state2, id) {
    const it = ITEMS[id];
    if (!it) return [];
    const uses = [];
    if (it.kind === "food" && !it.needsCooking) uses.push({ verb: "eat", label: id === "formula" ? "Drink" : "Eat" });
    if (it.kind === "drink") uses.push({ verb: "drink", label: "Drink" });
    if (it.kind === "med") uses.push({ verb: "med", label: "Use" });
    if (it.kind === "wear") uses.push({ verb: "wear", label: "Wear" });
    if (it.kind === "batteries") uses.push({ verb: "batteries", label: "Put in flashlight" });
    if (it.kind === "comfort") uses.push({ verb: "comfort", label: "Use" });
    if (it.kind === "warm") uses.push({ verb: "warm", label: "Use" });
    if (it.kind === "book") uses.push({ verb: "read", label: hasRead(state2, id) ? "Read again" : "Read", note: `${READ_MINUTES / 60} h \xB7 ${SKILLS[it.skill].name}` });
    if (it.kind === "food" && state2.dog.stage === "joined") uses.push({ verb: "feeddog", label: "Give to dog" });
    if (it.kind === "dogfood" && state2.dog.stage === "joined") uses.push({ verb: "feeddog", label: "Feed dog" });
    return uses;
  }
  function useItem(state2, id, verb, from = "carried") {
    const bag = source(state2, from);
    const it = ITEMS[id];
    if (!bag[id] || !it) return;
    const p = state2.player;
    switch (verb) {
      case "eat": {
        if (id === "canned_food" && chance(state2, 0.05)) {
          addItem(bag, id, -1);
          log(state2, "This can is swollen. The food is bad. You throw it away.", "warn");
          advanceTime(state2, 2);
          return;
        }
        const risk = eatRisk(state2, id);
        addItem(bag, id, -it.portion);
        addFood(state2, it.cal * it.portion / CAL_PER_FOOD_POINT);
        if (it.water) addWater(state2, it.water);
        log(state2, `You eat: ${it.name}${it.portion < 1 ? " (one portion)" : ""}.`);
        advanceTime(state2, 15);
        if (risk > 0 && chance(state2, risk)) {
          log(state2, "It tasted off. Your stomach turns.", "warn");
          startStomachBug(state2);
        }
        return;
      }
      case "drink": {
        addItem(bag, id, -it.portion);
        addWater(state2, it.water);
        log(state2, `You drink: ${it.name}${it.portion < 1 ? " (1 quart)" : ""}.`);
        advanceTime(state2, 5);
        return;
      }
      case "med":
        return useMed(state2, id, bag);
      case "wear": {
        addItem(bag, id, -1);
        const old = putOn(p, id);
        if (old) addItem(bag, old, 1);
        log(state2, old ? `You take off the ${itemName(old).toLowerCase()} and put on the ${it.name.toLowerCase()}.` : `You put on the ${it.name.toLowerCase()}.`);
        advanceTime(state2, 3);
        return;
      }
      case "batteries": {
        if (!has2(state2, "flashlight")) {
          log(state2, "You need a flashlight first.");
          return;
        }
        addItem(bag, id, -1);
        p.lightHours = 10;
        log(state2, "You put new batteries in the flashlight (10 h of light).");
        advanceTime(state2, 2);
        return;
      }
      case "comfort": {
        const day = dayIndex(state2.time);
        if (p.lastComfortDay === day) {
          log(state2, "You already did that today. It does not help again.");
          return;
        }
        p.lastComfortDay = day;
        p.morale = clamp2(p.morale + 5, 0, 100);
        if (it.portion) addItem(bag, id, -it.portion);
        log(state2, it.comfortText || "You rest your mind for a while.", "good");
        advanceTime(state2, 60);
        return;
      }
      case "warm": {
        addItem(bag, id, -1);
        p.warmth = clamp2(p.warmth + it.warmth, 0, 100);
        log(state2, `You open the ${it.name.toLowerCase()}. Warmth +${it.warmth}.`, "good");
        advanceTime(state2, 1);
        return;
      }
      case "feeddog":
        return feedDog(state2, id, bag);
      case "read":
        return readBook(state2, id);
      default:
    }
  }
  function has2(state2, id) {
    return (state2.carried[id] || 0) > 0 || state2.location.kind === "home" && (state2.home.storage[id] || 0) > 0;
  }
  function readBook(state2, id) {
    const it = ITEMS[id];
    if (!it || it.kind !== "book") return false;
    const env = environment(state2, "work");
    if (env.dark && !hasLight(state2)) {
      log(state2, "It is too dark to read. Use a light.");
      return false;
    }
    const s = skillsOf(state2);
    const first = !s.books.includes(id);
    advanceTime(state2, READ_MINUTES);
    if (state2.dead) return true;
    if (first) {
      s.books.push(id);
      log(state2, `You read the ${it.name.toLowerCase()} and take notes.`, "good");
      practice(state2, it.skill, BOOK_XP, { book: true });
    } else {
      log(state2, `You read the ${it.name.toLowerCase()} again. You know it well now. It passes the time.`);
      state2.player.morale = clamp2(state2.player.morale + 2, 0, 100);
    }
    return true;
  }
  function useMed(state2, id, bag) {
    const p = state2.player;
    const it = ITEMS[id];
    if (it.med === "bandage") {
      const order = ["deep_cut", "bite", "small_cut", "sprain"];
      const open = p.injuries.filter((i) => !i.bandaged).sort((a, b) => order.indexOf(a.type) - order.indexOf(b.type));
      if (!open.length) {
        log(state2, "You have no wound that needs a bandage.");
        return;
      }
      const inj = open[0];
      addItem(bag, id, -it.portion);
      inj.bandaged = true;
      inj.healH *= bandageHealFactor(state2);
      practice(state2, "first_aid", 3);
      log(state2, `You clean and bandage the ${INJURY_NAMES[inj.type].toLowerCase()}.`, "good");
      advanceTime(state2, 15);
      return;
    }
    if (it.med === "antibiotics") {
      const inf = p.illness.infection;
      if (!inf) {
        log(state2, "You have no infection. Keep the antibiotics for later.");
        return;
      }
      if (inf.abxH != null) {
        log(state2, "You already take a course of antibiotics.");
        return;
      }
      addItem(bag, id, -1);
      inf.abxH = 0;
      practice(state2, "first_aid", 2);
      log(state2, "You start a 3-day course of antibiotics.", "good");
      advanceTime(state2, 2);
      return;
    }
    if (it.med === "pain") {
      addItem(bag, id, -it.portion);
      p.painH = painPillHours(state2);
      log(state2, `You take pain pills. The pain is less for ${p.painH} hours.`);
      advanceTime(state2, 2);
      return;
    }
    if (it.med === "ors") {
      if (p.illness.stomachH <= 0) {
        log(state2, "You do not need this now.");
        return;
      }
      addItem(bag, id, -1);
      p.illness.stomachH = Math.min(p.illness.stomachH, 24);
      practice(state2, "first_aid", 2);
      addWater(state2, WATER_PER_QUART / 2);
      log(state2, "You drink the rehydration salts. You feel a little better.", "good");
      advanceTime(state2, 5);
    }
  }
  function takeItem(state2, id, qty) {
    const bag = hereBag(state2);
    const have = bag[id] || 0;
    if (!have) return;
    const w = ITEMS[id].weight;
    const maxByWeight = w > 0 ? Math.floor(freeWeight(state2) / w * 1e3) / 1e3 : have;
    let n = Math.min(qty ?? have, have, maxByWeight);
    if (["part", "tool", "wear"].includes(ITEMS[id].kind)) n = Math.floor(n + 1e-9);
    if (n <= 0) {
      log(state2, `Your pack is too full to take the ${itemName(id).toLowerCase()}.`, "warn");
      return;
    }
    addItem(bag, id, -n);
    addItem(state2.carried, id, n);
    advanceTime(state2, 1);
  }
  function takeAll(state2) {
    const bag = hereBag(state2);
    const ids = Object.keys(bag).sort((a, b) => ITEMS[a].weight - ITEMS[b].weight);
    let left = false;
    for (const id of ids) {
      const before = bag[id];
      const w = ITEMS[id].weight;
      const maxN = Math.floor(freeWeight(state2) / w);
      const n = Math.min(Math.floor(before), maxN);
      if (n > 0) {
        addItem(bag, id, -n);
        addItem(state2.carried, id, n);
      }
      if (bag[id]) left = true;
    }
    if (left) log(state2, "Your pack is full. Some items stay here.", "warn");
    advanceTime(state2, 2);
  }
  function dropItem(state2, id, qty) {
    const have = state2.carried[id] || 0;
    if (!have) return;
    const n = Math.min(qty ?? have, have);
    addItem(state2.carried, id, -n);
    addItem(hereBag(state2), id, n);
    if (state2.location.kind !== "home") log(state2, `You leave the ${itemName(id).toLowerCase()} here.`);
    advanceTime(state2, 1);
  }
  function storeAll(state2) {
    for (const [id, q] of Object.entries(state2.carried)) {
      if (id === "backpack" || id === "flashlight") continue;
      addItem(state2.carried, id, -q);
      addItem(state2.home.storage, id, q);
    }
    log(state2, "You put your supplies away in the house.");
    advanceTime(state2, 5);
  }
  function rest(state2, hours) {
    log(state2, `You rest for ${hours} h.`);
    advanceTime(state2, hours * 60, "rest");
  }
  function sleep(state2, hours) {
    const where = state2.location.kind === "home" ? "in your bed" : "on the floor";
    log(state2, `You sleep ${where} for ${hours} h.`);
    advanceTime(state2, hours * 60, "sleep");
    if (!state2.dead) log(state2, "You wake up.");
  }
  function homeAction(state2, id) {
    const h = state2.home;
    const p = state2.player;
    switch (id) {
      case "drink_tank":
        h.tankGal = Math.max(0, h.tankGal - 0.25);
        addWater(state2, WATER_PER_QUART);
        log(state2, "You drain water from the water heater tank and drink a quart. It is clean.");
        advanceTime(state2, 10);
        return;
      case "fill_jug": {
        const fromSafe = h.safeGal >= 1;
        if (fromSafe) h.safeGal -= 1;
        else h.tankGal -= 1;
        addItem(state2.carried, "water_bottle", 1);
        log(state2, `You fill a 1-gallon jug with clean water from the ${fromSafe ? "boiled water pot" : "water heater tank"}.`);
        advanceTime(state2, 10);
        return;
      }
      case "collect_tap":
        h.rawGal += 2;
        log(state2, "The tap gives a weak flow. You fill two jugs (2 gal). This water is not safe to drink before you boil it.");
        advanceTime(state2, 15);
        practice(state2, "survival", 1);
        return;
      case "collect_toilet":
        h.rawGal += h.toiletGal;
        log(state2, `You take the water from the toilet tanks (${h.toiletGal} gal). Boil it before you drink it.`);
        h.toiletGal = 0;
        advanceTime(state2, 10);
        return;
      case "drink_raw":
        h.rawGal = Math.max(0, h.rawGal - 0.25);
        addWater(state2, WATER_PER_QUART);
        log(state2, "You drink a quart of water that you did not boil.", "warn");
        advanceTime(state2, 5);
        if (chance(state2, RAW_WATER_SICK * rawWaterRiskFactor(state2))) startStomachBug(state2);
        return;
      case "boil": {
        const how = useHeat(state2, 0.4);
        const g = Math.min(1, h.rawGal);
        h.rawGal -= g;
        h.safeGal += g;
        log(state2, `You boil ${g} gal of water ${how}. It is safe to drink now.`);
        advanceTime(state2, Math.round(20 * boilTimeFactor(state2)));
        practice(state2, "cooking", 2);
        return;
      }
      case "purify": {
        const bag = (state2.carried.water_tablets || 0) > 0 ? state2.carried : h.storage;
        const g = Math.min(1, h.rawGal);
        addItem(bag, "water_tablets", -ITEMS.water_tablets.portion);
        h.rawGal -= g;
        h.safeGal += g;
        log(state2, `You drop a tablet in ${g} gal of water and wait. It is safe to drink now.`);
        advanceTime(state2, 30);
        practice(state2, "cooking", 1);
        return;
      }
      case "filter_water": {
        const g = Math.min(2, h.rawGal);
        h.rawGal -= g;
        h.safeGal += g;
        log(state2, `You run ${g.toFixed(1)} gal of water through the filter station. It is safe to drink now.`);
        advanceTime(state2, 10);
        practice(state2, "survival", 1);
        return;
      }
      case "drink_safe":
        h.safeGal = Math.max(0, h.safeGal - 0.25);
        addWater(state2, WATER_PER_QUART);
        log(state2, "You drink a quart of boiled water.");
        advanceTime(state2, 5);
        return;
      case "cook": {
        const food = COOK_ORDER().find((f) => (h.storage[f] || 0) > 0 || (state2.carried[f] || 0) > 0);
        const bag = (h.storage[food] || 0) > 0 ? h.storage : state2.carried;
        const it = ITEMS[food];
        if (food === "dry_food") {
          const water = h.safeGal >= 0.125 ? "safeGal" : h.rawGal >= 0.125 ? "rawGal" : h.tankGal >= 0.125 ? "tankGal" : null;
          if (!water) {
            log(state2, "You need water to cook rice or pasta.");
            return;
          }
          h[water] -= 0.125;
        }
        const how = useHeat(state2, 0.5);
        const risk = eatRisk(state2, food, true);
        const stage = stageLabel(state2, food);
        addItem(bag, food, -it.portion);
        addFood(state2, it.cal * it.portion / CAL_PER_FOOD_POINT);
        p.warmth = clamp2(p.warmth + 10, 0, 100);
        p.morale = clamp2(p.morale + 5 + cookMoraleBonus(state2), 0, 100);
        p.warmFedH = WARM_FED_HOURS;
        practice(state2, "cooking", 3);
        log(state2, `You cook a hot meal (${it.name.toLowerCase()}${stage && stage !== "Fresh" ? `, ${stage.toLowerCase()}` : ""}) ${how}. Warm and fed: you lose heat slower for ${WARM_FED_HOURS} h.`, "good");
        advanceTime(state2, 30);
        if (risk > 0 && chance(state2, risk)) {
          log(state2, "The food was bad. Your stomach turns.", "warn");
          startStomachBug(state2);
        }
        return;
      }
      case "add_wood": {
        const bag = (h.storage.firewood || 0) > 0 ? h.storage : state2.carried;
        addItem(bag, "firewood", -1);
        const lit = h.fireHours > 0;
        const per = Math.round(fireHoursPerBundle(state2) * fireBonusFactor(state2) * 10) / 10;
        const where = built(state2, "wood_stove") ? "wood stove" : "fireplace";
        h.fireHours += per;
        log(state2, lit ? `You put more wood on the fire (+${per} h).` : `You light a fire in the ${where}. One bundle burns for about ${per} hours.`, "good");
        advanceTime(state2, lit ? 5 : 15);
        practice(state2, "survival", lit ? 1 : 2);
        return;
      }
      case "break_furniture":
        h.furniture -= 1;
        addItem(h.storage, "firewood", 1);
        log(state2, "You break up old furniture into firewood (+1 bundle). It is hard work.");
        advanceTime(state2, 60, "heavy");
        practice(state2, "tinkering", 2);
        return;
      case "heater":
        h.heaterOn = !h.heaterOn;
        log(state2, h.heaterOn ? "You turn on the electric space heater. It uses the battery fast (1.5 kWh per hour)." : "You turn off the electric heater.");
        advanceTime(state2, 1);
        return;
      case "dry_clothes":
        p.wet = false;
        p.wetness = 0;
        p.wetMinutes = 0;
        p.dryMinutes = 0;
        log(state2, "You change into dry clothes and hang the wet ones up.");
        advanceTime(state2, 10);
        return;
      case "fridge":
        h.fridgeOpened = true;
        p.morale = clamp2(p.morale - 2, 0, 100);
        log(state2, "You open the fridge. Everything inside is rotten. You close it fast.", "warn");
        advanceTime(state2, 2);
        return;
      case "store_all":
        return storeAll(state2);
      case "feed_stray":
        return feedStray(state2);
      default:
    }
  }
  function anyFood(state2) {
    const all = { ...state2.home.storage };
    for (const [k, v] of Object.entries(state2.carried)) all[k] = (all[k] || 0) + v;
    return ["dog_food", "canned_food", "snacks", "peanut_butter", "formula"].find((f) => (all[f] || 0) > 0);
  }
  function feedStray(state2) {
    const d = state2.dog;
    const day = dayIndex(state2.time);
    const food = anyFood(state2);
    if (!food) {
      log(state2, "You have no food to give the dog.");
      return;
    }
    const bag = (state2.home.storage[food] || 0) > 0 ? state2.home.storage : state2.carried;
    addItem(bag, food, -ITEMS[food].portion);
    d.feedDays.push(day);
    advanceTime(state2, 10);
    const days = new Set(d.feedDays).size;
    if (days >= 3) {
      d.stage = "joined";
      d.food = 70;
      d.bond = 30;
      log(state2, "The dog walks past you, into the house, and lies down near the fireplace. It stays.", "good");
      state2.pendingPrompt = "name_dog";
    } else if (days === 1) {
      log(state2, "You put food on the porch and go back inside. Later, the bowl is empty.", "story");
    } else {
      log(state2, "The dog eats while you watch from the door. It comes a little closer today.", "story");
    }
  }
  function feedDog(state2, id, bag) {
    const d = state2.dog;
    const it = ITEMS[id];
    addItem(bag, id, -it.portion);
    const points = it.kind === "dogfood" ? 100 : it.cal * it.portion / 10;
    d.food = clamp2(d.food + points, 0, 100);
    d.bond = clamp2(d.bond + 1, 0, 100);
    log(state2, `You feed ${d.name}.`);
    advanceTime(state2, 5);
  }
  function nameDog(state2, name) {
    const clean = String(name || "").replace(/[^\p{L}\p{N} '\-]/gu, "").trim().slice(0, 20) || "Dog";
    state2.dog.name = clean;
    state2.pendingPrompt = null;
    log(state2, `You call the dog ${clean}. ${clean} wags once.`, "good");
  }
  function playWithDog(state2) {
    const d = state2.dog;
    const p = state2.player;
    const day = dayIndex(state2.time);
    if (p.lastDogPlayDay === day) {
      log(state2, `${d.name} is resting. You already played today.`);
      return;
    }
    p.lastDogPlayDay = day;
    d.bond = clamp2(d.bond + 2, 0, 100);
    p.morale = clamp2(p.morale + 3, 0, 100);
    log(state2, `You play with ${d.name} for a while. For a moment, things feel normal.`, "good");
    advanceTime(state2, 20);
  }
  function toggleDogFollow(state2) {
    const d = state2.dog;
    d.withPlayer = !d.withPlayer;
    log(state2, d.withPlayer ? `${d.name} will come with you.` : `${d.name} will stay home and guard the house.`);
  }
  function enterPlace(state2, place) {
    const ps = placeState(state2, place);
    const cat = CATEGORIES[place.cat];
    if (!ps.visited) {
      ps.visited = true;
      state2.stats.placesSearched += 1;
      log(state2, cat.entryText, "story");
      if (ps.emptyHint) log(state2, "Most shelves here are already empty. People took a lot in the first weeks.");
      if (cat.entryMorale) state2.player.morale = clamp2(state2.player.morale + cat.entryMorale, 0, 100);
    }
    if (cat.bodies && chance(state2, 0.5)) seeBody(state2, "There are bodies here, under sheets and in the chairs. You do not look long.");
  }
  function forceOpts(state2) {
    return has2(state2, "toolkit") ? { adv: ["tool kit"] } : {};
  }
  function forceEntry(state2) {
    const place = getPlace(state2.location.id);
    const ps = placeState(state2, place);
    if (has2(state2, "pry_bar")) {
      ps.unlocked = true;
      log(state2, "You open the locked door with the pry bar.");
      advanceTime(state2, 5, "work");
      return;
    }
    state2.player.energy = clamp2(state2.player.energy - 5, 0, 100);
    advanceTime(state2, 5, "heavy");
    if (check(state2, "Kick open the locked door", 12, forceBonus(state2), forceOpts(state2)).success) {
      ps.unlocked = true;
      log(state2, "The door breaks open.");
      practice(state2, "tinkering", 4);
    } else {
      practice(state2, "tinkering", 2);
      if (chance(state2, 0.3)) addInjury(state2, "sprain");
    }
  }
  function openCounter(state2) {
    const place = getPlace(state2.location.id);
    const ps = placeState(state2, place);
    const lz2 = CATEGORIES[place.cat].lockedZone;
    if (has2(state2, "pry_bar")) {
      ps.counterOpen = true;
      log(state2, `You open the ${lz2.name} gate with the pry bar.`);
      advanceTime(state2, 5, "work");
      return;
    }
    advanceTime(state2, 10, "heavy");
    if (check(state2, `Force the ${lz2.name} gate`, lz2.dc, forceBonus(state2), forceOpts(state2)).success) {
      ps.counterOpen = true;
      log(state2, "The gate bends open.");
      practice(state2, "tinkering", 4);
    } else {
      practice(state2, "tinkering", 2);
      if (chance(state2, 0.25)) addInjury(state2, "small_cut");
    }
  }
  function searchMinutes(state2, base2, dark) {
    const p = state2.player;
    let m = base2 * searchTimeFactor(state2);
    if (dark && !hasLight(state2)) m *= 2;
    if (p.water < 25) m *= 1.25;
    if (p.injuries.some((i) => i.type === "sprain")) m *= 1.3;
    const extra = Math.max(0, bagWeight(state2.carried) - 10);
    m *= 1 + Math.floor(extra / 10) * 0.1;
    return m;
  }
  function dogExtra(state2) {
    return state2.dog.stage === "joined" && state2.dog.withPlayer && state2.dog.bond >= 50 ? 1 : 0;
  }
  function zoneInjuryCheck(state2) {
    let p = SEARCH_INJURY_CHANCE;
    if (environment(state2, "work").dark && !hasLight(state2)) p *= 2;
    if (state2.player.energy < 25) p *= 1.5;
    if (chance(state2, p)) {
      log(state2, "You slip on broken glass in the dark corner.", "warn");
      addInjury(state2, chance(state2, 0.8) ? "small_cut" : "sprain");
    }
  }
  function reportFound(state2, found, where) {
    const names = Object.entries(found).map(([id, q]) => `${itemName(id)}${q > 1 ? " \xD7" + q : ""}`);
    if (names.length) log(state2, `You search the ${where}. You find: ${names.join(", ")}.`, "good");
    else log(state2, `You search the ${where}. You find nothing useful.`);
  }
  function zonesDoneList(ps, countKey = "zonesDone", listKey = "doneList") {
    if (!Array.isArray(ps[listKey])) ps[listKey] = Array.from({ length: ps[countKey] || 0 }, (_, i) => i);
    return ps[listKey];
  }
  function nextZone(ps, counterIdx = -1) {
    const done = zonesDoneList(ps);
    for (let i = 0; i < ps.zones; i++) if (i !== counterIdx && !done.includes(i)) return i;
    if (counterIdx >= 0 && !done.includes(counterIdx)) return counterIdx;
    return -1;
  }
  function counterIndex(place, ps) {
    return CATEGORIES[place.cat].lockedZone ? ps.zones - 1 : -1;
  }
  function zoneCtx(state2) {
    const loc = state2.location;
    if (loc.kind === "place") {
      const place = getPlace(loc.id);
      const ps = placeState(state2, place);
      return { holder: ps, key: place.id, catId: place.cat, stock: ps.stock, zones: ps.zones, counterIdx: counterIndex(place, ps), house: false, place };
    }
    if (loc.kind === "house") {
      const hs = state2.houses[loc.id];
      return { holder: hs, key: loc.id, catId: "house", stock: CATEGORIES.house.stock, zones: HOUSE_ROOMS.length, counterIdx: -1, house: true };
    }
    return null;
  }
  function doneListOf(ctx) {
    return ctx.house ? zonesDoneList(ctx.holder, "roomsDone", "doneList") : zonesDoneList(ctx.holder);
  }
  function markZoneDone(ctx, zone) {
    const done = doneListOf(ctx);
    if (done.includes(zone)) return;
    done.push(zone);
    if (ctx.house) ctx.holder.roomsDone = done.length;
    else ctx.holder.zonesDone = done.length;
  }
  function zoneItemList(state2, ctx, zone) {
    const h = ctx.holder;
    if (!h.zoneItems) h.zoneItems = {};
    if (!h.taken) h.taken = [];
    if (!h.zoneItems[zone]) {
      const found = rollZone(state2, ctx.key, ctx.catId, ctx.stock, zone, dogExtra(state2));
      if (zone === ctx.counterIdx) found.antibiotics = (found.antibiotics || 0) + (ctx.stock > 0.2 ? 1 : 0);
      const list = [];
      for (const [item, q] of Object.entries(found)) for (let i = 0; i < q; i++) list.push({ pid: `z${zone}i${list.length}`, item });
      h.zoneItems[zone] = list;
    }
    return h.zoneItems[zone];
  }
  function buildingItems(state2) {
    const ctx = zoneCtx(state2);
    if (!ctx) return [];
    const done = doneListOf(ctx);
    const out = [];
    for (let z = 0; z < ctx.zones; z++) {
      if (done.includes(z) && !(ctx.holder.zoneItems && ctx.holder.zoneItems[z])) continue;
      for (const it of zoneItemList(state2, ctx, z)) if (!ctx.holder.taken.includes(it.pid)) out.push({ ...it, zone: z });
    }
    return out;
  }
  function zoneLeft(ctx, zone) {
    const list = ctx.holder.zoneItems && ctx.holder.zoneItems[zone] || [];
    return list.filter((it) => !ctx.holder.taken.includes(it.pid));
  }
  function touchZone(state2, ctx, zone) {
    const h = ctx.holder;
    if (!h.touched) h.touched = [];
    if (h.touched.includes(zone)) return;
    h.touched.push(zone);
    zoneInjuryCheck(state2);
    if (ctx.catId === "supermarket" && h.touched.length === 1) {
      state2.player.morale = clamp2(state2.player.morale - 3, 0, 100);
      log(state2, "The fresh food section is black and rotten. Rats run under the shelves.", "warn");
    }
  }
  var PICKUP_MINUTES = 1;
  function pickUp(state2, pid) {
    const ctx = zoneCtx(state2);
    if (!ctx) return false;
    const zone = Number(String(pid).slice(1).split("i")[0]);
    if (ctx.place && !ctx.holder.unlocked) return false;
    if (zone === ctx.counterIdx && !ctx.holder.counterOpen) {
      log(state2, "It is behind the locked counter gate. Open the gate first.", "warn");
      return false;
    }
    const it = zoneItemList(state2, ctx, zone).find((x) => x.pid === pid);
    if (!it || ctx.holder.taken.includes(pid)) return false;
    const w = ITEMS[it.item].weight;
    if (w > freeWeight(state2) + 1e-9) {
      log(state2, `Your pack is too full to take the ${itemName(it.item).toLowerCase()} (${w} lb).`, "warn");
      return false;
    }
    const env = environment(state2, "work");
    advanceTime(state2, PICKUP_MINUTES * (env.dark && !hasLight(state2) ? 2 : 1), "work");
    if (state2.dead) return true;
    touchZone(state2, ctx, zone);
    ctx.holder.taken.push(pid);
    addItem(state2.carried, it.item, 1);
    log(state2, `You take: ${itemName(it.item)}.`);
    practice(state2, "scavenging", 1);
    if (!zoneLeft(ctx, zone).length && !doneListOf(ctx).includes(zone)) {
      markZoneDone(ctx, zone);
      state2.stats.zonesSearched += 1;
    }
    return true;
  }
  function seeZone(state2, zone) {
    const ctx = zoneCtx(state2);
    if (!ctx || doneListOf(ctx).includes(zone)) return;
    if (zone === ctx.counterIdx && !ctx.holder.counterOpen) return;
    zoneItemList(state2, ctx, zone);
    if (!zoneLeft(ctx, zone).length) {
      markZoneDone(ctx, zone);
      state2.stats.zonesSearched += 1;
      log(state2, `The ${ctx.house ? HOUSE_ROOMS[zone] : `${CATEGORIES[ctx.catId].zoneName} ${zone + 1}`} is empty. Nothing useful is left.`);
    }
  }
  var CONTAINER_MINUTES = 1;
  function openContainer(state2, cid) {
    const ctx = zoneCtx(state2);
    if (!ctx || typeof cid !== "string" || !/^c\d+$/.test(cid)) return false;
    const h = ctx.holder;
    h.opened || (h.opened = []);
    if (h.opened.includes(cid)) return false;
    const env = environment(state2, "work");
    advanceTime(state2, CONTAINER_MINUTES * (env.dark && !hasLight(state2) ? 2 : 1), "work");
    if (state2.dead) return true;
    h.opened.push(cid);
    log(state2, "You open it and look inside.");
    practice(state2, "scavenging", 1);
    return true;
  }
  function openedContainers(state2) {
    const ctx = zoneCtx(state2);
    return ctx ? (ctx.holder.opened || []).slice() : [];
  }
  function searchZone(state2, index) {
    const ctx = zoneCtx(state2);
    if (!ctx || ctx.house) return false;
    const { holder: ps, place } = ctx;
    const cat = CATEGORIES[place.cat];
    if (!ps.unlocked) return false;
    const cIdx = ctx.counterIdx;
    const done = zonesDoneList(ps);
    const zone = index == null ? nextZone(ps, cIdx) : Number(index);
    if (!(zone >= 0 && zone < ps.zones) || done.includes(zone)) return false;
    const counterZone = zone === cIdx;
    if (counterZone && !ps.counterOpen) return false;
    const env = environment(state2, "work");
    advanceTime(state2, searchMinutes(state2, cat.zoneMinutes, env.dark), "work");
    if (state2.dead) return true;
    zoneItemList(state2, ctx, zone);
    touchZone(state2, ctx, zone);
    const found = {};
    for (const it of zoneLeft(ctx, zone)) {
      ps.taken.push(it.pid);
      found[it.item] = (found[it.item] || 0) + 1;
    }
    markZoneDone(ctx, zone);
    state2.stats.zonesSearched += 1;
    for (const [id, q] of Object.entries(found)) addItem(ps.leftovers, id, q);
    practice(state2, "scavenging", 2);
    reportFound(state2, found, counterZone ? lz(cat) : `${cat.zoneName} ${zone + 1} (${ps.zonesDone} of ${ps.zones} done)`);
    state2.lastFound = found;
    return true;
  }
  var lz = (cat) => cat.lockedZone.name;
  var INSIDE_M_PER_MIN = 60;
  function walkInside(state2, meters) {
    const m = Number(meters);
    if (!(m > 0)) return;
    advanceTime(state2, m / INSIDE_M_PER_MIN, "work");
  }
  function toggleFlashlight(state2) {
    const p = state2.player;
    if (!(state2.carried.flashlight || 0)) {
      log(state2, "You have no flashlight.");
      return;
    }
    p.lightOff = !p.lightOff;
    if (!p.lightOff && p.lightHours <= 0) log(state2, "You switch on the flashlight. Nothing. The batteries are empty.", "warn");
    else log(state2, p.lightOff ? "You switch off the flashlight to save the batteries." : "You switch on the flashlight.");
  }
  function quickChoice(state2, slot) {
    const c = state2.carried;
    const p = state2.player;
    const haveAny = (ids) => ids.find((id) => (c[id] || 0) > 0);
    if (slot === "med") {
      const open = p.injuries.some((i) => !i.bandaged);
      if (open && haveAny(["first_aid"])) return { id: "first_aid", verb: "med" };
      if (p.illness.infection && p.illness.infection.abxH == null && haveAny(["antibiotics"])) return { id: "antibiotics", verb: "med" };
      if (p.illness.stomachH > 0 && haveAny(["ors"])) return { id: "ors", verb: "med" };
      if ((p.injuries.length || p.health < 60) && !(p.painH > 0) && haveAny(["pain_pills"])) return { id: "pain_pills", verb: "med" };
      if (!haveAny(["first_aid", "antibiotics", "ors", "pain_pills"])) return { why: "You carry no medical items." };
      return { why: "You do not need medicine now." };
    }
    if (slot === "food") {
      const drink = haveAny(["water_bottle", "saline"]);
      const food = haveAny(["snacks", "peanut_butter", "canned_food", "formula"]);
      if (!drink && !food) return { why: "You carry no food or water you can use now." };
      const wantDrink = drink && (!food || p.water <= p.food);
      if (wantDrink) return { id: drink, verb: "drink" };
      return { id: food, verb: "eat" };
    }
    if (slot === "utility") {
      if (!(c.flashlight || 0)) return { why: "You have no flashlight." };
      if (!(c.batteries || 0)) return { why: "You carry no batteries." };
      if (p.lightHours > 9) return { why: "The flashlight batteries are still good." };
      return { id: "batteries", verb: "batteries" };
    }
    return { why: "Nothing for this key yet." };
  }
  function areaKey(state2) {
    return state2.location.kind === "place" ? state2.location.id : "home";
  }
  function nearbyHousesLeft(state2) {
    return 12 - (state2.houseAreas[areaKey(state2)] || 0);
  }
  function enterNearbyHouse(state2) {
    const key = areaKey(state2);
    const n = (state2.houseAreas[key] || 0) + 1;
    state2.houseAreas[key] = n;
    const id = `${key}#${n}`;
    const near = key === "home" ? "on your street" : `near ${getPlace(key)?.name || "here"}`;
    const label = `House ${n} ${near}`;
    const r = randInt(state2, 0, 999) / 1e3;
    state2.houses[id] = { roomsDone: 0, leftovers: {}, body: r < 0.6 };
    const parent = { ...state2.location, pos: { ...state2.pos } };
    const ang = randInt(state2, 0, 359) * Math.PI / 180;
    const meters = randInt(state2, 80, 250);
    const pos = {
      lat: parent.pos.lat + meters * Math.sin(ang) / 111320,
      lon: parent.pos.lon + meters * Math.cos(ang) / (111320 * Math.cos(parent.pos.lat * Math.PI / 180))
    };
    state2.houses[id].pos = pos;
    state2.pos = { ...pos };
    advanceTime(state2, 5, "walk");
    log(state2, `You walk to a house ${near}.`);
    if (chance(state2, 0.7)) {
      if (has2(state2, "pry_bar")) {
        log(state2, "The door is locked. You open it with the pry bar.");
        advanceTime(state2, 5, "work");
      } else if (chance(state2, 0.1)) {
        log(state2, "The door is locked, but you find a spare key under a flower pot.");
        advanceTime(state2, 2);
      } else {
        state2.player.energy = clamp2(state2.player.energy - 5, 0, 100);
        if (!check(state2, "Kick open the locked door", 12, forceBonus(state2), forceOpts(state2)).success) {
          log(state2, "The door holds. You break a window and climb in.");
          if (chance(state2, 0.25)) addInjury(state2, "small_cut");
        }
        advanceTime(state2, 5, "heavy");
      }
    } else {
      log(state2, "The door is not locked.");
    }
    state2.stats.housesSearched += 1;
    state2.location = { kind: "house", id, label, parent };
    if (state2.houses[id].body) seeBody(state2, "Someone is in the bedroom. You close the door.");
    else log(state2, "The house is empty and cold. A family lived here.");
  }
  function searchRoom(state2, index) {
    const ctx = zoneCtx(state2);
    if (!ctx || !ctx.house) return false;
    const hs = ctx.holder;
    const done = doneListOf(ctx);
    const room = index == null ? HOUSE_ROOMS.findIndex((_, i) => !done.includes(i)) : Number(index);
    if (!(room >= 0 && room < HOUSE_ROOMS.length) || done.includes(room)) return false;
    const env = environment(state2, "work");
    advanceTime(state2, searchMinutes(state2, CATEGORIES.house.zoneMinutes, env.dark), "work");
    if (state2.dead) return true;
    zoneItemList(state2, ctx, room);
    touchZone(state2, ctx, room);
    const found = {};
    for (const it of zoneLeft(ctx, room)) {
      hs.taken.push(it.pid);
      found[it.item] = (found[it.item] || 0) + 1;
    }
    markZoneDone(ctx, room);
    state2.stats.zonesSearched += 1;
    for (const [id, q] of Object.entries(found)) addItem(hs.leftovers, id, q);
    practice(state2, "scavenging", 2);
    reportFound(state2, found, HOUSE_ROOMS[room]);
    state2.lastFound = found;
    return true;
  }
  function leaveHouse(state2) {
    const parent = state2.location.parent;
    state2.location = { kind: parent.kind, ...parent.id ? { id: parent.id } : {} };
    state2.pos = { ...parent.pos };
    log(state2, "You walk back.");
    advanceTime(state2, 5, "walk");
  }
  function goToPlace(state2, placeId) {
    const place = getPlace(placeId);
    if (!place) return;
    const ok = travel(state2, place, place.name);
    if (!ok) return;
    state2.location = { kind: "place", id: placeId };
    log(state2, `You arrive at ${place.name}.`, "travel");
    enterPlace(state2, place);
  }
  function goHome(state2) {
    const ok = travel(state2, homeOf(state2), "home");
    if (!ok) return;
    state2.location = { kind: "home" };
    log(state2, "You are home. You lock the door behind you.", "travel");
  }
  function listActions(state2) {
    const loc = state2.location;
    const p = state2.player;
    const h = state2.home;
    const acts = [];
    const add = (id, label, opts = {}) => acts.push({ id, label, ...opts });
    if (loc.kind === "home") {
      add("drink_tank", "Drink from the water heater tank", { disabled: h.tankGal < 0.25 && "The tank is empty", note: `${h.tankGal.toFixed(1)} gal left` });
      if (h.safeGal >= 0.25) add("drink_safe", "Drink boiled water", { note: `${h.safeGal.toFixed(1)} gal` });
      add("fill_jug", "Fill a 1 gal jug to carry", { disabled: h.safeGal < 1 && h.tankGal < 1 && "No clean water" });
      if (h.tapWorks) add("collect_tap", "Collect tap water (2 gal, unsafe)");
      if (h.toiletGal > 0) add("collect_toilet", "Take water from the toilet tanks");
      if (h.rawGal > 0) {
        add("boil", "Boil 1 gal of water", { disabled: !canHeat(state2, 0.4) && "Light a fire or charge the battery", note: `${h.rawGal.toFixed(1)} gal unsafe` });
        if (built(state2, "filter_station")) add("filter_water", "Filter 2 gal of water (no fuel)", { note: "10 min" });
        if (has2(state2, "water_tablets")) add("purify", "Purify 1 gal with a tablet (no fuel)", { note: "30 min" });
        add("drink_raw", "Drink water without boiling", { note: `${Math.round(RAW_WATER_SICK * 100)}% stomach bug`, risk: true });
      }
      const fuel = (h.storage.firewood || 0) + (state2.carried.firewood || 0);
      add("add_wood", h.fireHours > 0 ? "Add wood to the fire" : `Light a fire in the ${built(state2, "wood_stove") ? "wood stove" : "fireplace"}`, { disabled: fuel < 1 && "No firewood", note: `${fuel} bundles` });
      if (h.furniture > 0) add("break_furniture", "Break furniture for firewood (1 h)", { note: `${h.furniture} left` });
      add("heater", h.heaterOn ? "Turn off the electric heater" : "Turn on the electric heater", { disabled: !h.heaterOn && h.battery < 1 && "Battery too low" });
      const cookId = COOK_ORDER().find((f) => (h.storage[f] || 0) > 0 || (state2.carried[f] || 0) > 0);
      const food = !!cookId;
      const cr = cookId ? eatRisk(state2, cookId, true) : 0;
      add("cook", "Cook a hot meal", { note: cookId ? `${itemName(cookId).toLowerCase()}${cr ? ` \xB7 ${Math.round(cr * 100)}% food poisoning` : ""} \xB7 warm and fed ${WARM_FED_HOURS} h` : void 0, risk: cr > 0, disabled: !food && "No food to cook" || !canHeat(state2, 0.5) && "Light a fire or charge the battery" });
      if (p.wet) add("dry_clothes", "Change into dry clothes");
      if (!h.fridgeOpened) add("fridge", "Open the fridge");
      if (Object.keys(state2.carried).some((k) => k !== "backpack" && k !== "flashlight")) add("store_all", "Put away everything you carry");
      if (state2.dog.stage === "visiting") {
        const fedToday = state2.dog.feedDays.includes(dayIndex(state2.time));
        const night = isNight(state2.time);
        add("feed_stray", "Leave food outside for the dog", { disabled: fedToday && "You fed it today" || night && "The dog comes only in the day" || !anyFood(state2) && "You have no food to give" });
      }
      add("house", "Search a house on your street", { disabled: nearbyHousesLeft(state2) <= 0 && "No more houses near here" });
    }
    if (loc.kind === "place") {
      const place = getPlace(loc.id);
      const cat = CATEGORIES[place.cat];
      const ps = placeState(state2, place);
      if (!ps.unlocked) add("force", "Force the locked door", { note: has2(state2, "pry_bar") ? "pry bar: sure to work" : `${oddsText(odds(state2, 12, forceBonus(state2), forceOpts(state2)))} \xB7 fail: 30% sprain`, risk: !has2(state2, "pry_bar") });
      else if (ps.zonesDone < ps.zones) {
        if (nextZone(ps, counterIndex(place, ps)) === counterIndex(place, ps) && !ps.counterOpen) {
          add("counter", `Open the ${cat.lockedZone.name}`, { note: has2(state2, "pry_bar") ? "pry bar: sure to work" : `${oddsText(odds(state2, cat.lockedZone.dc, forceBonus(state2), forceOpts(state2)))} \xB7 fail: 25% cut`, risk: !has2(state2, "pry_bar") });
        } else {
          const env = environment(state2, "work");
          const min = searchMinutes(state2, cat.zoneMinutes, env.dark);
          add("search", `Search the next ${cat.zoneName}`, { note: `${ps.zonesDone}/${ps.zones} done \xB7 ${formatDuration(min)}${env.dark && !hasLight(state2) ? " (dark, no light)" : ""}` });
        }
      } else add("search", "Nothing left to search", { disabled: "You searched all of it" });
      if (ps.unlocked) add("walk_in", "Walk inside (first person)", { note: "look for loot yourself" });
      add("house", "Search a house nearby", { disabled: nearbyHousesLeft(state2) <= 0 && "No more houses near here" });
      add("go_home", "Walk home");
    }
    if (loc.kind === "house") {
      const hs = state2.houses[loc.id];
      const nextRoom = HOUSE_ROOMS.findIndex((_, i) => !zonesDoneList(hs, "roomsDone", "doneList").includes(i));
      if (nextRoom >= 0) add("room", `Search the ${HOUSE_ROOMS[nextRoom]}`, { note: `${hs.roomsDone}/${HOUSE_ROOMS.length} rooms` });
      else add("room", "All rooms searched", { disabled: "Nothing left" });
      add("walk_in", "Walk inside (first person)", { note: "look for loot yourself" });
      add("leave_house", "Leave the house");
    }
    add("rest", "Rest 1 hour");
    add("sleep", state2.location.kind === "home" ? "Sleep in your bed\u2026" : "Sleep here on the floor\u2026");
    if (state2.dog.stage === "joined") {
      add("play_dog", `Play with ${state2.dog.name}`);
      if (loc.kind === "home") add("dog_follow", state2.dog.withPlayer ? `${state2.dog.name}: stay home` : `${state2.dog.name}: come with me`);
    }
    return acts;
  }
  function takeOffSlot(state2, slot) {
    const old = takeOff(state2.player, slot);
    if (!old) return false;
    addItem(state2.carried, old, 1);
    log(state2, `You take off the ${itemName(old).toLowerCase()}.`);
    advanceTime(state2, 2);
    return true;
  }
  function doAction(state2, id, arg) {
    if (state2.dead) return;
    switch (id) {
      case "rest":
        return rest(state2, 1);
      case "sleep":
        return sleep(state2, Number(arg) || 8);
      case "search":
        return searchZone(state2, arg);
      case "force":
        return forceEntry(state2);
      case "counter":
        return openCounter(state2);
      case "house":
        return enterNearbyHouse(state2);
      case "room":
        return searchRoom(state2, arg);
      case "walk_inside":
        return walkInside(state2, arg);
      case "flashlight":
        return toggleFlashlight(state2);
      case "pickup":
        return pickUp(state2, arg);
      case "see_zone":
        return seeZone(state2, Number(arg));
      case "open_container":
        return openContainer(state2, String(arg));
      case "take_off":
        return takeOffSlot(state2, String(arg));
      case "leave_house":
        return leaveHouse(state2);
      case "go_home":
        return goHome(state2);
      case "go_place":
        return goToPlace(state2, arg);
      case "play_dog":
        return playWithDog(state2);
      case "dog_follow":
        return toggleDogFollow(state2);
      case "build":
        return workOnProject(state2, arg);
      default:
        return homeAction(state2, id);
    }
  }

  // src/engine/interior.js
  var T = 0.2;
  var HALL = {
    supermarket: { len: 18, front: 6, fixture: "shelf" },
    hardware: { len: 18, front: 5, fixture: "rack" },
    pharmacy: { len: 9, front: 5, fixture: "shelf" },
    outdoor: { len: 10, front: 5, fixture: "clothes" },
    convenience: { len: 6, front: 4, fixture: "shelf" },
    gas: { len: 5, front: 4, fixture: "shelf" }
  };
  var HOUSE_FURNITURE = {
    kitchen: ["counter", "fridge", "table"],
    "living room": ["sofa", "table", "cabinet"],
    bedroom: ["bed", "dresser"],
    bathroom: ["tub", "cabinet"],
    "second bedroom": ["bed", "dresser"],
    garage: ["rack", "bench"]
  };
  function buildInterior(cat, key, zones, opts = {}) {
    const r = mulberry32(hashString(`interior:${key}`));
    const plan = HALL[cat] ? hallPlan(cat, zones, r) : roomsPlan(cat, zones, r, opts);
    plan.cat = cat;
    plan.dark = !!CATEGORIES[cat]?.dark;
    addDebris(plan, r);
    return plan;
  }
  function wallBox(x1, z1, x2, z2) {
    return { x: (x1 + x2) / 2, z: (z1 + z2) / 2, w: Math.max(T, Math.abs(x2 - x1)), d: Math.max(T, Math.abs(z2 - z1)) };
  }
  function outerWalls(W, D) {
    const h = W / 2;
    return [
      wallBox(-h, 0, -1, 0),
      wallBox(1, 0, h, 0),
      // front, with door gap
      wallBox(-h, -D, h, -D),
      // back
      wallBox(-h, 0, -h, -D),
      wallBox(h, 0, h, -D)
      // sides
    ];
  }
  function hallPlan(cat, zones, r) {
    const cfg = HALL[cat];
    const counter = !!CATEGORIES[cat].lockedZone;
    const aisles = counter ? zones - 1 : zones;
    const AISLE = 2.4;
    const SHELF = 1;
    const W = Math.max(8, aisles * AISLE + (aisles + 1) * SHELF + 6);
    const back = counter ? 5 : 3;
    const D = cfg.front + cfg.len + back;
    const plan = { kind: "hall", size: { w: W, d: D, h: cat === "convenience" || cat === "gas" ? 3 : 5 }, walls: outerWalls(W, D), fixtures: [], spots: [], bodies: [], debris: [] };
    const rowZ = -(cfg.front + cfg.len / 2);
    const total = aisles * AISLE + (aisles + 1) * SHELF;
    const mid = Math.floor((aisles - 1) / 2);
    let x = -(mid * (SHELF + AISLE) + SHELF + AISLE / 2);
    for (let i = 0; i <= aisles; i++) {
      const cx = x + SHELF / 2;
      const tipped = cat !== "gas" && cat !== "convenience" && r() < 0.08;
      plan.fixtures.push({ type: cfg.fixture, x: cx, z: rowZ, w: SHELF, d: cfg.len, h: cfg.fixture === "clothes" ? 1.5 : 2, leftZone: i - 1 >= 0 ? i - 1 : null, rightZone: i < aisles ? i : null, tipped, solid: true });
      if (cfg.fixture === "shelf" && !tipped) plan.fixtures.push({ type: "endcap", x: cx, z: rowZ + cfg.len / 2 + 0.28, w: SHELF, d: 0.55, h: 1.7, solid: true });
      if (i < aisles) {
        const ax = cx + SHELF / 2 + AISLE / 2;
        plan.spots.push({ zone: i, x: ax, z: rowZ, label: `${CATEGORIES[cat].zoneName} ${i + 1}`, area: { x1: ax - AISLE / 2, x2: ax + AISLE / 2, z1: rowZ - cfg.len / 2 - 0.5, z2: rowZ + cfg.len / 2 + 0.5 } });
      }
      x += SHELF + AISLE;
    }
    const nReg = Math.max(1, Math.min(4, Math.floor(W / 6)));
    for (let i = 0; i < nReg; i++) {
      const side = i % 2 === 0 ? -1 : 1;
      const k = Math.floor(i / 2);
      plan.fixtures.push({ type: "checkout", x: side * (2.6 + k * 2.6), z: -cfg.front / 2, w: 0.9, d: 2.2, h: 1, solid: true });
    }
    if (cat === "supermarket") {
      plan.fixtures.push({ type: "coolers", x: 0, z: -D + 0.7, w: W - 2, d: 1, h: 2.1, solid: true });
      for (let i = 0; i < 3; i++) plan.debris.push({ kind: "cart", x: (r() - 0.5) * (W - 3), z: -1.5 - r() * (cfg.front - 2.5), rot: r() * 6.28 });
    }
    if (counter) {
      const lz2 = CATEGORIES[cat].lockedZone;
      const cz = -D + 2.2;
      plan.fixtures.push({ type: "rx_counter", x: 0, z: cz, w: W - 4, d: 0.9, h: 1.1, solid: true });
      plan.fixtures.push({ type: "gate", x: 0, z: cz + 0.6, w: W - 4, d: 0.1, h: 2.6, zone: zones - 1, solid: false });
      plan.spots.push({ zone: zones - 1, x: 0, z: cz + 1.4, label: lz2.name, counter: true });
    }
    plan.exit = { x: 0, z: 0.6 };
    plan.start = { x: 0, z: -1.2, yaw: 0 };
    plan.windows = "front";
    return plan;
  }
  function roomsPlan(cat, zones, r, opts) {
    const house = cat === "house";
    const RW = house ? 4.2 : 4.6;
    const RD = house ? 4.2 : 4.6;
    const HALLW = house ? 1.6 : 2.4;
    const rows = Math.ceil(zones / 2);
    const ENTRY = house ? 2.2 : 3.4;
    const W = HALLW + 2 * RW;
    const D = ENTRY + rows * RD;
    const plan = { kind: "rooms", size: { w: W, d: D, h: house ? 2.6 : 3 }, walls: outerWalls(W, D), fixtures: [], spots: [], bodies: [], debris: [] };
    const hx = HALLW / 2;
    const DOOR = 1.1;
    const names = house ? HOUSE_ROOMS : null;
    for (let i = 0; i < zones; i++) {
      const side = i % 2 === 0 ? -1 : 1;
      const row = Math.floor(i / 2);
      const z1 = -(ENTRY + row * RD);
      const z2 = z1 - RD;
      const zc = (z1 + z2) / 2;
      const xin = side * hx;
      const xout = side * (hx + RW);
      plan.walls.push(wallBox(xin, z1, xin, zc + DOOR / 2), wallBox(xin, zc - DOOR / 2, xin, z2));
      if (row === 0) plan.walls.push(wallBox(xin, z1, xout, z1));
      plan.walls.push(wallBox(xin, z2, xout, z2));
      const rcx = (xin + xout) / 2;
      const name = names ? names[i] : `${CATEGORIES[cat].zoneName} ${i + 1}`;
      plan.spots.push({ zone: i, x: xin + side * 1, z: zc, label: name, area: { x1: Math.min(xin, xout), x2: Math.max(xin, xout), z1: z2, z2: z1 } });
      furnishRoom(plan, cat, name, i, { cx: rcx, cz: zc, side, RW, RD, xout }, r, opts);
    }
    if (zones % 2 === 1) {
      const z1 = -(ENTRY + (rows - 1) * RD);
      plan.walls.push(wallBox(hx, z1, hx, z1 - RD));
      plan.fixtures.push({ type: "cabinet", x: hx + 0.4, z: z1 - RD / 2, w: 0.6, d: 1.2, h: 1.8, solid: true });
    }
    if (cat === "clinic" || cat === "hospital") plan.fixtures.push({ type: "desk", x: -hx - RW + 1.6, z: -ENTRY / 2, w: 2.4, d: 0.8, h: 1.1, solid: true });
    if (cat === "fire") plan.fixtures.push({ type: "bench", x: hx + 1.5, z: -ENTRY / 2, w: 2.4, d: 0.5, h: 0.5, solid: true });
    plan.exit = { x: 0, z: 0.6 };
    plan.start = { x: 0, z: -1, yaw: 0 };
    plan.windows = "rooms";
    return plan;
  }
  function furnishRoom(plan, cat, name, zone, room, r, opts) {
    const { cx, cz, side, RW, RD, xout } = room;
    const wallX = xout - side * 0.55;
    const put = (type, x, z, w, d, h, extra = {}) => plan.fixtures.push({ type, x, z, w, d, h, zone, solid: true, ...extra });
    let items;
    if (cat === "house") items = HOUSE_FURNITURE[name] || ["cabinet"];
    else if (cat === "hospital") items = ["bed", "bed", "cart"];
    else if (cat === "clinic") items = ["bed", "cabinet"];
    else items = zone === 0 ? ["locker", "locker", "bench"] : ["bed", "locker"];
    let slot = 0;
    for (const it of items) {
      const zz = cz + (slot === 0 ? RD / 4 : slot === 1 ? -RD / 4 : 0);
      slot += 1;
      if (it === "bed") {
        put("bed", cx + side * 0.6, zz, 2, 1, 0.6);
        const bodyHere = cat === "hospital" || cat === "clinic" ? r() < 0.45 : cat === "house" && opts.body && name === "bedroom" && slot === 1;
        if (bodyHere) plan.bodies.push({ x: cx + side * 0.6, z: zz, y: 0.6, rot: 0 });
      } else if (it === "fridge") put("fridge", wallX, cz - RD / 3, 0.8, 0.8, 1.8);
      else if (it === "counter") put("counter", wallX, cz + RD / 6, 0.7, RD * 0.6, 0.95);
      else if (it === "sofa") put("sofa", wallX, zz, 0.9, 2, 0.8);
      else if (it === "tub") put("tub", wallX, zz, 0.8, 1.7, 0.6);
      else if (it === "rack") put("rack", wallX, zz, 0.6, 2.2, 1.9);
      else if (it === "locker") put("locker", wallX, zz, 0.5, 1.6, 1.9);
      else if (it === "dresser") put("dresser", wallX, zz, 0.5, 1.2, 1);
      else if (it === "cart") put("cart", cx - side * 0.6, zz, 0.6, 0.9, 1);
      else if (it === "table") put("table", cx, zz, 1.2, 1.2, 0.75);
      else if (it === "bench") put("bench", wallX, zz, 0.6, 2, 0.9);
      else put("cabinet", wallX, zz, 0.6, 1, 1.4);
    }
  }
  function addDebris(plan, r) {
    const { w, d } = plan.size;
    const n = Math.round(w * d / (plan.kind === "hall" ? 10 : 7));
    for (let i = 0; i < n; i++) {
      const x = (r() - 0.5) * (w - 1);
      const z = -0.8 - r() * (d - 1.6);
      if (Math.abs(x) < 1.2 && z > -2.5) continue;
      const kind = r() < 0.5 ? "box" : r() < 0.6 ? "can" : "paper";
      plan.debris.push({ kind, x, z, s: 0.15 + r() * 0.35, rot: r() * 6.28 });
    }
  }

  // src/engine/stock.js
  var QUARTS_PER_GAL = 4;
  var HEATER_KW = 1.5;
  function addBag(bag, totals) {
    for (const [id, q] of Object.entries(bag || {})) {
      const it = ITEMS[id];
      if (!it || q <= 0) continue;
      if (it.kind === "food" && it.cal) totals.cal += it.cal * q;
      if (it.water) totals.water += it.water * (q / (it.portion || 1));
    }
  }
  function stockSummary(state2) {
    const t = { cal: 0, water: 0 };
    addBag(state2.carried, t);
    addBag(state2.home.storage, t);
    const h = state2.home;
    t.water += (h.tankGal + h.safeGal) * QUARTS_PER_GAL * WATER_PER_QUART;
    const foodDayPts = FOOD_LOSS_PER_HOUR * 24;
    const waterDayPts = WATER_LOSS_PER_HOUR * 24;
    return {
      foodDays: t.cal / CAL_PER_FOOD_POINT / foodDayPts,
      waterDays: t.water / waterDayPts,
      rawGal: h.rawGal
    };
  }
  function stockLine(state2) {
    const s = stockSummary(state2);
    const d = (x) => x < 1 ? `${Math.round(x * 24)} h` : `${x < 10 ? x.toFixed(1) : Math.round(x)} days`;
    return `Food: ${d(s.foodDays)} \xB7 Water: ${d(s.waterDays)}${s.rawGal >= 0.25 ? ` (+${s.rawGal.toFixed(1)} gal to boil)` : ""}`;
  }
  function powerSummary(state2) {
    const h = state2.home;
    const inToday = solarToday(state2);
    const outKw = h.heaterOn ? HEATER_KW : 0;
    return {
      inToday,
      outKw,
      hoursLeft: outKw > 0 ? h.battery / outKw : null,
      heaterHoursFull: h.battery / HEATER_KW
    };
  }

  // src/core/clock.js
  var DAY_START_MINUTE = 5 * 60;
  var dayIndex2 = (t) => Math.floor(t / 1440);
  var gameDay = (t) => dayIndex2(t - DAY_START_MINUTE);

  // src/engine/preview.js
  var DAY_START = 300;
  function weatherEffects(state2) {
    const w = state2.weather;
    const info = weatherInfo(state2);
    const p = state2.player;
    const out = [];
    if (w.type === "snow") out.push({ id: "slow", text: "Walking is slower (snow).", level: "warn" });
    if (info.wetAfter) {
      const perHour = wetGainPerHour(p, w.type, info.wetAfter);
      const toWet = perHour > 0 ? Math.max(0, (WET_LIMIT - (p.wetness || 0)) / perHour) * 60 : Infinity;
      if (perHour <= 0) out.push({ id: "wet", text: "You stay dry outside.", level: "ok" });
      else if (toWet === 0) out.push({ id: "wet", text: "You are wet already. Outside you get wetter.", level: "danger" });
      else out.push({ id: "wet", text: `Outside you are wet through after about ${formatDuration(toWet)}.`, level: toWet < 60 ? "warn" : "ok" });
    }
    const env = environment(state2, "walk");
    const chill = Math.round(feltTemp(state2, "walk", { ...env, wind: 0 }) - feltTemp(state2, "walk", env));
    if (chill >= 3) {
      out.push({ id: "wind", text: `Wind ${w.wind} mph: outside it feels ${chill} \xB0F colder.`, level: w.wind >= 30 ? "danger" : "warn" });
    }
    return out;
  }
  function nextDayStart(t) {
    return (gameDay(t) + 1) * 1440 + DAY_START;
  }
  function weatherOutlook(state2, t = state2.time) {
    const w = state2.weather;
    const next = nextDayStart(t);
    return {
      type: w.type,
      label: WEATHER_TYPES[w.type].label,
      airF: Math.round(airTemp(state2, t)),
      windMph: w.wind,
      highF: Math.round(w.high),
      lowF: Math.round(w.low),
      night: isNight(t),
      effects: weatherEffects(state2),
      // The next weather change: the weather rolls once a day at 5 AM.
      // Tomorrow's low is known now (it is the end of today's temperature curve).
      next: { at: next, atText: formatClock(next), inMinutes: Math.round(next - t), lowF: Math.round(w.nextLow) }
    };
  }
  function actionTiming(state2, minutes) {
    const end = state2.time + minutes;
    const next = nextDayStart(state2.time);
    const crosses = end >= next;
    return {
      minutes,
      durationText: formatDuration(minutes),
      end,
      endText: formatClock(end),
      crossesDayStart: crosses,
      dayStartText: crosses ? `The new day starts at ${formatClock(next)}: the weather can change.` : null
    };
  }
  function tripPreview(state2, dest) {
    const trip = estimateTrip(state2, dest);
    const timing = actionTiming(state2, trip.minutes);
    return {
      miles: trip.miles,
      minutes: trip.minutes,
      energy: trip.energy,
      mph: trip.mph,
      slowBecause: trip.why,
      weather: weatherOutlook(state2),
      darkOnArrival: isNight(timing.end),
      ...timing
    };
  }

  // src/engine/game.js
  function perform(state2, kind, a, b, c) {
    if (state2.dead) return;
    switch (kind) {
      case "action":
        doAction(state2, a, b);
        break;
      case "use":
        useItem(state2, a, b, c);
        break;
      case "take":
        takeItem(state2, a, b);
        break;
      case "takeall":
        takeAll(state2);
        break;
      case "drop":
        dropItem(state2, a, b);
        break;
      case "namedog":
        nameDog(state2, a);
        break;
      default:
    }
    afterAction(state2);
  }
  function afterAction(state2) {
    const p = state2.player;
    if (!state2.dead && p.energy <= 0) {
      log(state2, "You are too tired to stay awake. You fall asleep where you are.", "warn");
      advanceTime(state2, 240, "sleep");
    }
  }

  // src/engine/save.js
  var KEY = "lastlight.save.v1";
  var RUNS_KEY = "lastlight.runs.v1";
  function store() {
    try {
      return globalThis.localStorage || null;
    } catch {
      return null;
    }
  }
  function saveGame(state2) {
    const s = store();
    if (!s) return false;
    try {
      s.setItem(KEY, JSON.stringify(state2));
      return true;
    } catch {
      return false;
    }
  }
  function loadGame() {
    const s = store();
    if (!s) return null;
    try {
      const raw = s.getItem(KEY);
      if (!raw) return null;
      return parseSave(raw);
    } catch {
      return null;
    }
  }
  function parseSave(raw) {
    const st = JSON.parse(raw);
    if (!st || st.version !== SAVE_VERSION || !st.player || !st.home) throw new Error("Not a Last Light save file");
    return st;
  }
  function clearGame() {
    const s = store();
    if (s) try {
      s.removeItem(KEY);
    } catch {
    }
  }
  function recordRun(state2) {
    const s = store();
    if (!s || !state2.dead) return [];
    let runs = [];
    try {
      runs = JSON.parse(s.getItem(RUNS_KEY) || "[]");
    } catch {
      runs = [];
    }
    if (!runs.some((r) => r.seed === state2.seed && r.time === state2.dead.time)) {
      runs.push({ seed: state2.seed, time: state2.dead.time, days: state2.dead.days, cause: state2.dead.cause, miles: Math.round(state2.stats.miles * 10) / 10, dog: state2.dog.name });
      runs.sort((a, b) => b.days - a.days);
      runs = runs.slice(0, 10);
      try {
        s.setItem(RUNS_KEY, JSON.stringify(runs));
      } catch {
      }
    }
    return runs;
  }
  function bestRuns() {
    const s = store();
    if (!s) return [];
    try {
      return JSON.parse(s.getItem(RUNS_KEY) || "[]");
    } catch {
      return [];
    }
  }

  // src/ui/winter-style.js
  var COLOR_RE = /^(#[0-9a-f]{3,8}|rgba?\([^)]*\)|hsla?\([^)]*\))$/i;
  function parseColor(str) {
    if (typeof str !== "string") return null;
    const s = str.trim().toLowerCase();
    if (!COLOR_RE.test(s)) return null;
    if (s[0] === "#") {
      let h = s.slice(1);
      if (h.length === 3 || h.length === 4) h = [...h].map((c) => c + c).join("");
      if (h.length !== 6 && h.length !== 8) return null;
      const n = (i) => parseInt(h.slice(i, i + 2), 16);
      return { r: n(0), g: n(2), b: n(4), a: h.length === 8 ? n(6) / 255 : 1 };
    }
    const nums = s.slice(s.indexOf("(") + 1, -1).split(/[\s,/]+/).filter(Boolean).map((v) => parseFloat(v));
    if (nums.length < 3 || nums.some(Number.isNaN)) return null;
    const a = nums.length > 3 ? nums[3] : 1;
    if (s.startsWith("rgb")) return { r: nums[0], g: nums[1], b: nums[2], a };
    return { ...hslToRgb(nums[0], nums[1] / 100, nums[2] / 100), a };
  }
  function hslToRgb(h, s, l) {
    h = (h % 360 + 360) % 360;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(h / 60 % 2 - 1));
    const m = l - c / 2;
    const [r, g, b] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
    return { r: (r + m) * 255, g: (g + m) * 255, b: (b + m) * 255 };
  }
  function toCss({ r, g, b, a }) {
    const k = (v) => Math.round(Math.max(0, Math.min(255, v)));
    return `rgba(${k(r)},${k(g)},${k(b)},${Math.round(a * 1e3) / 1e3})`;
  }
  var SNOW = { r: 222, g: 231, b: 238 };
  function coolColor(str, { desat = 0.45, toward = 0.15 } = {}) {
    const c = parseColor(str);
    if (!c) return str;
    const gray = 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;
    const mix2 = (v, t) => v + (t - v) * toward;
    return toCss({
      r: mix2(c.r + (gray - c.r) * desat, SNOW.r),
      g: mix2(c.g + (gray - c.g) * desat, SNOW.g),
      b: mix2(c.b + (gray - c.b) * desat, SNOW.b) + 4,
      a: c.a
    });
  }
  function coolValue(v) {
    if (typeof v === "string") return coolColor(v);
    if (Array.isArray(v)) return v.map(coolValue);
    if (v && typeof v === "object" && Array.isArray(v.stops)) {
      return { ...v, stops: v.stops.map(([z, c]) => [z, coolValue(c)]) };
    }
    return v;
  }
  var WINTER = [
    ["background", { "background-color": "#eaeff3" }],
    ["park_outline", { "line-color": "rgba(160,184,170,0.6)" }],
    ["park", { "fill-color": "#d6e2da", "fill-outline-color": "rgba(140,170,150,0.7)" }],
    ["landcover_wood", { "fill-color": "rgba(170,196,180,0.65)" }],
    ["landcover_grass", { "fill-color": "#dbe5de" }],
    ["landcover_ice", { "fill-color": "#f4f8fa" }],
    ["landuse_residential", { "fill-color": "rgba(212,221,229,0.55)" }],
    ["landuse_hospital", { "fill-color": "#ecdde2" }],
    ["landuse_school", { "fill-color": "#e3e6dc" }],
    ["water", { "fill-color": "#86aac4" }],
    ["waterway", { "line-color": "#86aac4" }],
    ["building-3d", { "fill-extrusion-color": "#c9d1d9" }],
    ["building", { "fill-color": "#cdd5dc", "fill-outline-color": "rgba(150,163,176,0.8)" }]
  ];
  function roadPaint(id) {
    if (!/^(road|bridge|tunnel)_/.test(id)) return null;
    if (/rail/.test(id)) return { "line-color": "#8d99a6" };
    if (/casing/.test(id)) return { "line-color": /motorway|trunk|primary|secondary/.test(id) ? "#8796a5" : "#b3bec8" };
    if (/motorway/.test(id)) return { "line-color": "#e9cf96" };
    if (/trunk_primary|secondary_tertiary|_link/.test(id)) return { "line-color": "#fbf6ea" };
    if (/minor|service|street|path/.test(id)) return { "line-color": "#ffffff" };
    return null;
  }
  function winterizeStyle(style) {
    const out = JSON.parse(JSON.stringify(style));
    for (const layer of out.layers || []) {
      const paint = layer.paint || (layer.paint = {});
      for (const key of Object.keys(paint)) {
        if (/color/.test(key)) paint[key] = coolValue(paint[key]);
      }
      const fixed = WINTER.find(([prefix]) => layer.id === prefix || layer.id.startsWith(prefix + "_") || layer.id.startsWith(prefix + "-")) || (layer["source-layer"] === "water" && layer.type === "fill" ? WINTER.find(([p]) => p === "water") : null);
      const road = roadPaint(layer.id);
      for (const [k, v] of Object.entries({ ...fixed ? fixed[1] : {}, ...road || {} })) {
        if (k.split("-")[0] === layer.type.split("-")[0] || layer.type === "fill-extrusion" && k.startsWith("fill-extrusion")) paint[k] = v;
      }
      if (layer.type === "raster") {
        paint["raster-saturation"] = -0.6;
        paint["raster-brightness-min"] = 0.25;
      }
      if (layer.type === "symbol") {
        if (paint["text-color"] !== void 0 || layer.layout?.["text-field"]) {
          paint["text-color"] = layer.id.startsWith("label_") ? "#1f2a35" : /water/.test(layer.id) ? "#3d6585" : "#4a5663";
          paint["text-halo-color"] = "rgba(244,247,250,0.9)";
        }
      }
    }
    return out;
  }
  function mix(a, b, f) {
    const x = parseColor(a);
    const y = parseColor(b);
    return toCss({ r: x.r + (y.r - x.r) * f, g: x.g + (y.g - x.g) * f, b: x.b + (y.b - x.b) * f, a: x.a + (y.a - x.a) * f });
  }
  var SEASON_COLORS = {
    winter: ["#eaeff3", "#d6e2da", "#dbe5de", "rgba(170,196,180,0.65)", "rgba(212,221,229,0.55)", "#ffffff"],
    spring: ["#edf0e8", "#c8dfbc", "#d0e4c3", "rgba(132,184,128,0.7)", "rgba(214,226,206,0.55)", "#ffffff"],
    summer: ["#eceee2", "#b2d39c", "#bfdba8", "rgba(104,166,96,0.75)", "rgba(204,222,188,0.6)", "#fdfdf7"],
    fall: ["#efede5", "#d4d6a6", "#dcdcb4", "rgba(196,158,96,0.7)", "rgba(222,220,200,0.55)", "#fffdf6"]
  };
  var WILD = ["#e3ead8", "#9cc884", "#a9d08f", "rgba(84,150,80,0.8)", "rgba(176,206,150,0.65)", "#e6eedb"];
  var WILD_WINTER = ["#e6ece4", "#c3d6c2", "#c9dbc8", "rgba(130,170,140,0.75)", "rgba(196,212,200,0.6)", "#eef2ec"];
  function seasonPaint(season, growth) {
    const base2 = SEASON_COLORS[season] || SEASON_COLORS.winter;
    const wild = season === "winter" ? WILD_WINTER : WILD;
    const g = Math.max(0, Math.min(1, growth)) * (season === "winter" ? 0.6 : 0.85);
    const c = base2.map((col, i) => mix(col, wild[i], g));
    return [
      ["background", "background-color", c[0]],
      ["park", "fill-color", c[1]],
      ["landcover_grass", "fill-color", c[2]],
      ["landuse_pitch", "fill-color", c[2]],
      ["landuse_cemetery", "fill-color", c[2]],
      ["landcover_wood", "fill-color", c[3]],
      ["landuse_residential", "fill-color", c[4]],
      ["road_minor", "line-color", c[5]],
      ["road_service_track", "line-color", c[5]],
      ["road_path_pedestrian", "line-color", c[5]],
      ["tunnel_minor", "line-color", c[5]]
    ];
  }

  // src/ui/details.js
  var DETAIL_INFO = {
    car: { label: "Abandoned car", text: "The doors are shut. Dust and leaves cover the glass. The battery is long dead." },
    debris: { label: "Debris", text: "Broken glass, a fallen sign and bits of a shop front." },
    barricade: { label: "Barricade", text: "Concrete blocks and plastic barriers from the last weeks of the outbreak." },
    trash: { label: "Trash", text: "Black bags piled at the curb. Nobody came to take them away." },
    sign: { label: "Quarantine sign", text: "COUNTY HEALTH ORDER. QUARANTINE AREA. NO ENTRY. The paper is wet and torn." },
    tent: { label: "Medical tent", text: "A white tent with folding cots inside. It sags under the rain." },
    bush: { label: "Overgrowth", text: "Weeds and blackberry vines grow over the curb." },
    tree: { label: "Young tree", text: "A young tree grows out of a crack in the asphalt." }
  };
  var NEAR = {
    hospital: [["barricade", 4], ["sign", 3], ["tent", 3], ["car", 4], ["trash", 2]],
    clinic: [["barricade", 1], ["sign", 2], ["tent", 1], ["car", 2]],
    pharmacy: [["sign", 1], ["car", 2], ["trash", 1], ["debris", 1]],
    supermarket: [["car", 5], ["trash", 2], ["debris", 1], ["barricade", 1]],
    convenience: [["car", 2], ["trash", 1], ["debris", 1]],
    gas: [["car", 3], ["debris", 1]],
    hardware: [["car", 4], ["debris", 1]],
    outdoor: [["car", 2], ["trash", 1]],
    fire: [["barricade", 2], ["sign", 1], ["car", 1]]
  };
  var CAR_STYLES = 4;
  function pointNear(rng, lat, lon, minM, maxM) {
    const a = rng() * Math.PI * 2;
    const d = minM + rng() * (maxM - minM);
    return [lon + Math.sin(a) * d / (111320 * Math.cos(lat * Math.PI / 180)), lat + Math.cos(a) * d / 111320];
  }
  function detailFeatures(places, home) {
    const features = [];
    const add = (type, coord, rng, extra = {}) => features.push({
      type: "Feature",
      geometry: { type: "Point", coordinates: coord },
      properties: {
        type,
        icon: type === "car" ? `ll-car-${Math.floor(rng() * CAR_STYLES)}` : `ll-${type}`,
        rot: Math.round(rng() * 360),
        g: 0,
        ...extra
      }
    });
    const spots = [...places, { id: "__home", cat: "home", lat: home.lat, lon: home.lon }];
    for (const p of spots) {
      const rng = mulberry32(hashString(`detail:${p.id}`));
      const list = p.cat === "home" ? [["car", 3], ["trash", 1]] : NEAR[p.cat] || [];
      for (const [type, n] of list) {
        for (let i = 0; i < n; i++) add(type, pointNear(rng, p.lat, p.lon, p.cat === "home" ? 30 : 25, type === "car" ? 110 : 80), rng);
      }
      const greens = p.cat === "home" ? 6 : 5;
      for (let i = 0; i < greens; i++) {
        add(rng() < 0.6 ? "bush" : "tree", pointNear(rng, p.lat, p.lon, 15, 130), rng, { g: 0.05 + i / greens * 0.8 + rng() * 0.1 });
      }
    }
    return { type: "FeatureCollection", features };
  }
  function canvas(size, draw) {
    const px = 2;
    const c = document.createElement("canvas");
    c.width = size * px;
    c.height = size * px;
    const x = c.getContext("2d");
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
  var CAR_COLORS = ["#7d8792", "#5b6b7c", "#8a5a52", "#c9cdd2"];
  function addDetailIcons(map) {
    const icons = {};
    CAR_COLORS.forEach((col, i) => {
      icons[`ll-car-${i}`] = canvas(16, (x) => {
        x.fillStyle = "rgba(10,20,30,0.25)";
        rrect(x, 5, 1.5, 7, 14, 2.2);
        x.fill();
        x.fillStyle = col;
        x.strokeStyle = "#26313c";
        x.lineWidth = 0.8;
        rrect(x, 4.5, 1, 7, 14, 2.2);
        x.fill();
        x.stroke();
        x.fillStyle = "#2f3d4a";
        rrect(x, 5.6, 3.6, 4.8, 2.6, 0.8);
        x.fill();
        rrect(x, 5.6, 10.6, 4.8, 2, 0.8);
        x.fill();
      });
    });
    icons["ll-debris"] = canvas(14, (x) => {
      x.fillStyle = "#8b939b";
      x.strokeStyle = "#4b5560";
      x.lineWidth = 0.6;
      for (const [a, b, w] of [[2, 3, 4], [7, 2, 3], [4, 8, 5], [9, 7, 3]]) {
        x.beginPath();
        x.moveTo(a, b);
        x.lineTo(a + w, b + 1);
        x.lineTo(a + w - 1, b + w * 0.7);
        x.lineTo(a + 0.5, b + w * 0.6);
        x.closePath();
        x.fill();
        x.stroke();
      }
    });
    icons["ll-barricade"] = canvas(18, (x) => {
      x.fillStyle = "#b7bcc1";
      x.strokeStyle = "#4b5560";
      x.lineWidth = 0.7;
      rrect(x, 1, 6, 16, 6, 1);
      x.fill();
      x.stroke();
      x.save();
      x.beginPath();
      rrect(x, 1, 6, 16, 6, 1);
      x.clip();
      x.fillStyle = "#c23a46";
      for (let i = -6; i < 18; i += 4) {
        x.beginPath();
        x.moveTo(i, 12);
        x.lineTo(i + 2, 12);
        x.lineTo(i + 8, 6);
        x.lineTo(i + 6, 6);
        x.fill();
      }
      x.restore();
    });
    icons["ll-trash"] = canvas(14, (x) => {
      x.strokeStyle = "#0b0f13";
      x.lineWidth = 0.6;
      for (const [a, b, r] of [[5, 8, 3.4], [9, 6, 3], [8, 10, 2.8]]) {
        x.fillStyle = "#1d2329";
        x.beginPath();
        x.arc(a, b, r, 0, Math.PI * 2);
        x.fill();
        x.stroke();
      }
    });
    icons["ll-sign"] = canvas(16, (x) => {
      x.fillStyle = "#f1d046";
      x.strokeStyle = "#1a1a1a";
      x.lineWidth = 1.2;
      rrect(x, 2, 2, 12, 12, 1);
      x.fill();
      x.stroke();
      x.fillStyle = "#1a1a1a";
      x.fillRect(7.1, 4.2, 1.8, 5.2);
      x.fillRect(7.1, 10.4, 1.8, 1.8);
    });
    icons["ll-tent"] = canvas(18, (x) => {
      x.fillStyle = "#f4f6f8";
      x.strokeStyle = "#5a6672";
      x.lineWidth = 0.8;
      rrect(x, 2, 3, 14, 12, 1.5);
      x.fill();
      x.stroke();
      x.strokeStyle = "#9aa6b2";
      x.beginPath();
      x.moveTo(9, 3);
      x.lineTo(9, 15);
      x.stroke();
      x.fillStyle = "#2f7fb8";
      x.fillRect(2.5, 8, 13, 2);
    });
    icons["ll-bush"] = canvas(14, (x) => {
      x.fillStyle = "rgba(70,120,60,0.85)";
      for (const [a, b, r] of [[5, 7, 3.5], [8.5, 5.5, 3.2], [9, 9, 3], [5.5, 10, 2.6]]) {
        x.beginPath();
        x.arc(a, b, r, 0, Math.PI * 2);
        x.fill();
      }
    });
    icons["ll-tree"] = canvas(18, (x) => {
      x.fillStyle = "rgba(20,40,20,0.2)";
      x.beginPath();
      x.arc(10, 10, 7, 0, Math.PI * 2);
      x.fill();
      x.fillStyle = "rgba(58,110,52,0.9)";
      x.beginPath();
      x.arc(9, 9, 6.5, 0, Math.PI * 2);
      x.fill();
      x.fillStyle = "rgba(96,150,80,0.9)";
      x.beginPath();
      x.arc(7.5, 7.5, 3, 0, Math.PI * 2);
      x.fill();
    });
    for (const [id, img] of Object.entries(icons)) {
      if (!map.hasImage(id)) map.addImage(id, img.data, { pixelRatio: img.pixelRatio });
    }
  }

  // src/ui/map.js
  var STYLE_URLS = [
    "https://tiles.openfreemap.org/styles/liberty",
    "https://tiles.openfreemap.org/styles/bright",
    "https://tiles.openfreemap.org/styles/positron"
  ];
  var OFFLINE_STYLE = {
    version: 8,
    sources: {},
    layers: [{ id: "bg", type: "background", paint: { "background-color": "#dfe6ec" } }]
  };
  async function pickStyle() {
    for (const url of STYLE_URLS) {
      try {
        const ctl = new AbortController();
        const timer = setTimeout(() => ctl.abort(), 5e3);
        const res = await fetch(url, { signal: ctl.signal });
        clearTimeout(timer);
        if (res.ok) return { style: winterizeStyle(await res.json()), online: true };
      } catch {
      }
    }
    return { style: OFFLINE_STYLE, online: false };
  }
  function circlePolygon(center, miles, n = 128) {
    const coords = [];
    const latR = miles / 69;
    const lonR = miles / (69 * Math.cos(center.lat * Math.PI / 180));
    for (let i = 0; i <= n; i++) {
      const a = i / n * 2 * Math.PI;
      coords.push([center.lon + lonR * Math.cos(a), center.lat + latR * Math.sin(a)]);
    }
    return { type: "Feature", geometry: { type: "LineString", coordinates: coords }, properties: {} };
  }
  async function createMap(container, { places, onPlaceClick }) {
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
      attributionControl: false
    });
    map.addControl(new maplibregl.AttributionControl({
      compact: false,
      customAttribution: online ? '<a href="https://openfreemap.org" target="_blank" rel="noopener">OpenFreeMap</a> \xA9 <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap contributors</a>' : 'Places \xA9 <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap contributors</a> (map tiles offline)'
    }));
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
    const colorExpr = ["match", ["get", "cat"]];
    for (const [id, c] of Object.entries(CATEGORIES)) if (id !== "house") colorExpr.push(id, c.color);
    colorExpr.push("#999");
    const ready = new Promise((resolve) => map.on("load", resolve));
    await ready;
    addDetailIcons(map);
    map.addSource("details", { type: "geojson", data: detailFeatures(places, HOME) });
    map.addLayer({
      id: "details",
      type: "symbol",
      source: "details",
      minzoom: 14,
      filter: ["<=", ["get", "g"], 0.08],
      layout: {
        "icon-image": ["get", "icon"],
        "icon-size": ["interpolate", ["linear"], ["zoom"], 14, 0.75, 16, 1.1, 18, 1.8],
        "icon-rotate": ["match", ["get", "type"], ["car", "debris", "trash", "barricade", "bush"], ["get", "rot"], 0],
        "icon-rotation-alignment": "map",
        "icon-allow-overlap": true,
        "icon-ignore-placement": true
      }
    });
    let detailPopup = null;
    map.on("click", "details", (e) => {
      const f = e.features && e.features[0];
      if (!f || map.queryRenderedFeatures(e.point, { layers: ["places"] }).length) return;
      const info = DETAIL_INFO[f.properties.type];
      if (detailPopup) detailPopup.remove();
      detailPopup = new maplibregl.Popup({ closeButton: true, maxWidth: "240px" }).setLngLat(e.lngLat).setHTML(`<h4>${info.label}</h4><p>${info.text}</p>`).addTo(map);
    });
    map.on("mouseenter", "details", () => {
      map.getCanvas().style.cursor = "help";
    });
    map.on("mouseleave", "details", () => {
      map.getCanvas().style.cursor = "";
    });
    map.addSource("edge", { type: "geojson", data: circlePolygon(HOME, MAP_RADIUS_MILES) });
    map.addLayer({
      id: "edge-glow",
      type: "line",
      source: "edge",
      paint: { "line-color": "#a3263b", "line-width": 8, "line-blur": 6, "line-opacity": 0.18 }
    });
    map.addLayer({
      id: "edge",
      type: "line",
      source: "edge",
      paint: { "line-color": "#a3263b", "line-width": 2, "line-dasharray": [4, 3], "line-opacity": 0.8 }
    });
    map.addSource("places", { type: "geojson", data: placesGeo(places, {}) });
    map.addLayer({
      id: "places-ring",
      type: "circle",
      source: "places",
      filter: ["==", ["get", "status"], 0],
      paint: {
        "circle-color": "rgba(0,0,0,0)",
        "circle-radius": ["interpolate", ["linear"], ["zoom"], 9, 4, 13, 9, 16, 15],
        "circle-stroke-color": colorExpr,
        "circle-stroke-width": 1.2,
        "circle-stroke-opacity": ["interpolate", ["linear"], ["zoom"], 11, 0, 12.5, 0.55]
      }
    });
    map.addLayer({
      id: "places",
      type: "circle",
      source: "places",
      paint: {
        "circle-color": ["case", ["==", ["get", "status"], 2], "#9aa5b1", colorExpr],
        "circle-radius": ["interpolate", ["linear"], ["zoom"], 9, 2.5, 13, 5, 16, 9],
        // Your marks: amber ring = partly searched, grey = searched.
        "circle-stroke-color": ["match", ["get", "status"], 2, "#6b7682", 1, "#e3b04b", "#16202a"],
        "circle-stroke-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          9,
          ["case", ["==", ["get", "status"], 1], 1.6, 0.8],
          14,
          ["case", ["==", ["get", "status"], 1], 3, 1.6]
        ],
        "circle-opacity": ["case", ["==", ["get", "status"], 2], 0.55, 1]
      }
    });
    map.on("click", "places", (e) => {
      const f = e.features && e.features[0];
      if (f) onPlaceClick(f.properties.id, e.lngLat);
    });
    map.on("mouseenter", "places", () => {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseleave", "places", () => {
      map.getCanvas().style.cursor = "";
    });
    const homeEl = document.createElement("div");
    homeEl.className = "marker-home";
    homeEl.title = "Home";
    homeEl.innerHTML = "<span>\u2302</span>";
    homeEl.addEventListener("click", (ev) => {
      ev.stopPropagation();
      onPlaceClick("__home", null);
    });
    const homeMarker = new maplibregl.Marker({ element: homeEl }).setLngLat([HOME.lon, HOME.lat]).addTo(map);
    const youEl = document.createElement("div");
    youEl.className = "marker-you";
    youEl.title = "You";
    youEl.innerHTML = "<i></i>";
    const you = new maplibregl.Marker({ element: youEl }).setLngLat([HOME.lon, HOME.lat]).addTo(map);
    let seasonKey = "";
    function applySeason(t) {
      const season = seasonOf(t);
      const growth = Math.round(overgrowth(t) * 20) / 20;
      const key = `${season}:${growth}`;
      if (key === seasonKey) return;
      seasonKey = key;
      for (const [id, prop, color] of seasonPaint(season, growth)) {
        if (map.getLayer(id)) map.setPaintProperty(id, prop, color);
      }
      map.setFilter("details", ["<=", ["get", "g"], growth]);
    }
    return {
      map,
      online,
      update(state2, list) {
        applySeason(state2.time);
        map.getSource("places").setData(placesGeo(list, state2.places));
        you.setLngLat([state2.pos.lon, state2.pos.lat]);
        const h = state2.homePos || HOME;
        homeMarker.setLngLat([h.lon, h.lat]);
        youEl.classList.toggle("at-home", state2.location.kind === "home");
        homeEl.classList.toggle("here", state2.location.kind === "home");
      },
      flyTo(pos) {
        map.easeTo({ center: [pos.lon, pos.lat], duration: 800 });
      }
    };
  }
  function placesGeo(list, placeStates) {
    return {
      type: "FeatureCollection",
      features: list.map((p) => {
        const ps = placeStates[p.id];
        const status = !ps || !ps.visited ? 0 : ps.zonesDone >= ps.zones ? 2 : 1;
        return {
          type: "Feature",
          geometry: { type: "Point", coordinates: [p.lon, p.lat] },
          properties: { id: p.id, cat: p.cat, status }
        };
      })
    };
  }

  // src/ui/fx.js
  var FX_KEY = "lastlight.fx";
  function fxEnabled() {
    try {
      const v = localStorage.getItem(FX_KEY);
      if (v !== null) return v === "1";
    } catch {
    }
    return !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  }
  function setFxEnabled(on) {
    try {
      localStorage.setItem(FX_KEY, on ? "1" : "0");
    } catch {
    }
  }
  function createFx(wrap) {
    const layer = document.createElement("div");
    layer.className = "fx";
    layer.innerHTML = '<div class="fx-season"></div><div class="fx-night"></div><div class="fx-fog"></div><canvas class="fx-fall"></canvas><div class="fx-grid"></div><div class="fx-vignette"></div>';
    wrap.appendChild(layer);
    const canvas2 = layer.querySelector("canvas");
    const ctx = canvas2.getContext("2d");
    let kind = "none";
    let strength = 0;
    let wind = 0;
    let parts = [];
    let raf = 0;
    let enabled = fxEnabled();
    function resize() {
      const r = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas2.width = Math.max(1, r.width * dpr);
      canvas2.height = Math.max(1, r.height * dpr);
      canvas2.style.width = `${r.width}px`;
      canvas2.style.height = `${r.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function spawn(w, h, anywhere) {
      const snow = kind === "snow" || kind === "leaves";
      return {
        x: Math.random() * (w + 200) - 100,
        y: anywhere ? Math.random() * h : -10,
        r: kind === "leaves" ? 2.5 + Math.random() * 2.5 : snow ? 1.1 + Math.random() * 2.4 : 0.6 + Math.random() * 0.6,
        c: ["#b5652b", "#c9952f", "#8f4a2a", "#a8892f"][Math.floor(Math.random() * 4)],
        v: snow ? 0.4 + Math.random() * 0.9 : 7 + Math.random() * 5,
        p: Math.random() * Math.PI * 2
      };
    }
    function frame() {
      raf = 0;
      const w = canvas2.clientWidth;
      const h = canvas2.clientHeight;
      ctx.clearRect(0, 0, w, h);
      if (!enabled || kind === "none" || document.hidden) return;
      const want = Math.round((kind === "snow" ? 160 : kind === "leaves" ? 40 : 220) * strength * Math.min(1, w * h / 6e5 + 0.3));
      while (parts.length < want) parts.push(spawn(w, h, true));
      if (parts.length > want) parts.length = want;
      const drift = wind / 12;
      if (kind === "snow") {
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.shadowColor = "rgba(80,110,140,0.55)";
        ctx.shadowBlur = 2;
        for (const s of parts) {
          s.p += 0.02;
          s.y += s.v;
          s.x += Math.sin(s.p) * 0.4 + drift;
          if (s.y > h + 5 || s.x < -110 || s.x > w + 110) Object.assign(s, spawn(w, h, false));
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.shadowBlur = 0;
      } else if (kind === "leaves") {
        for (const s of parts) {
          s.p += 0.05;
          s.y += s.v * 0.9;
          s.x += Math.sin(s.p) * 0.8 + drift * 1.5;
          if (s.y > h + 5 || s.x < -110 || s.x > w + 110) Object.assign(s, spawn(w, h, false));
          ctx.save();
          ctx.translate(s.x, s.y);
          ctx.rotate(s.p);
          ctx.fillStyle = s.c;
          ctx.beginPath();
          ctx.ellipse(0, 0, s.r, s.r * 0.5, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      } else {
        ctx.strokeStyle = "rgba(60,90,120,0.38)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (const s of parts) {
          s.y += s.v;
          s.x += drift * 3;
          if (s.y > h + 5 || s.x < -110 || s.x > w + 110) Object.assign(s, spawn(w, h, false));
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x + drift * 3, s.y + s.v * 1.6);
        }
        ctx.stroke();
      }
      raf = requestAnimationFrame(frame);
    }
    function run() {
      if (!raf) raf = requestAnimationFrame(frame);
    }
    new ResizeObserver(resize).observe(wrap);
    resize();
    document.addEventListener("visibilitychange", run);
    return {
      // weather: a weather type id from data/climate.js; night: true or false; windMph: number.
      update({ weather, night, windMph, season }) {
        const windy = weather === "windstorm" || (windMph || 0) >= 12;
        const nextKind = weather === "snow" ? "snow" : weather === "rain" || weather === "heavy_rain" ? "rain" : season === "fall" && windy ? "leaves" : "none";
        if (nextKind !== kind) parts = [];
        kind = nextKind;
        strength = weather === "heavy_rain" ? 1 : weather === "rain" ? 0.5 : weather === "snow" ? 0.8 : nextKind === "leaves" ? 1 : 0;
        for (const s of ["winter", "spring", "summer", "fall"]) layer.classList.toggle(`is-${s}`, season === s);
        wind = (windMph || 0) * (weather === "windstorm" ? 1.5 : 1);
        layer.classList.toggle("is-night", !!night);
        layer.classList.toggle("is-fog", weather === "fog");
        layer.classList.toggle("is-storm", weather === "windstorm" || weather === "heavy_rain");
        layer.classList.toggle("off", !enabled);
        run();
      },
      setEnabled(on) {
        enabled = on;
        setFxEnabled(on);
        layer.classList.toggle("off", !on);
        if (!on) ctx.clearRect(0, 0, canvas2.width, canvas2.height);
        run();
      },
      get enabled() {
        return enabled;
      }
    };
  }

  // src/ui/app.js
  var state = null;
  var mapApi = null;
  var popup = null;
  var fx = null;
  var openWings = /* @__PURE__ */ new Set();
  var $ = (sel) => document.querySelector(sel);
  var esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  var STAT_INFO = {
    food: { label: "Food" },
    water: { label: "Water" },
    warmth: { label: "Warmth" },
    energy: { label: "Energy" },
    health: { label: "Health" },
    morale: { label: "Morale" }
  };
  function statRow(k, p, withEffect) {
    const v = Math.round(p[k]);
    const max = k === "energy" ? p.energyMax : 100;
    const st = statStage(k, p[k]);
    const cls = ["ok", "warn", "bad", "bad"][st.stage];
    return `<div class="stat ${cls}"><span class="sl">${STAT_INFO[k].label}</span>
      <span class="bar"><i style="width:${v}%"></i>${max < 100 ? `<s style="left:${max}%"></s>` : ""}</span>
      <span class="sv">${v}</span><span class="sw">${st.word}</span>${withEffect && st.effect ? `<span class="se">${esc(st.effect)}</span>` : ""}</div>`;
  }
  function riskChips() {
    return risks(state).map((r) => ["risk", r.text]);
  }
  async function start() {
    setPlaces(window.LL_PLACES || []);
    state = loadGame();
    bindEvents();
    fx = createFx($("#mapwrap"));
    $("#legend").innerHTML = Object.entries(CATEGORIES).filter(([k]) => k !== "house").map(([, c]) => `<span><i style="background:${c.color}"></i>${c.label}</span>`).join("") + '<span><i class="part"></i>Visited, not all searched</span><span><i class="done"></i>All searched</span><span><i class="edge"></i>15-mile edge</span>';
    try {
      mapApi = await createMap($("#map"), { places: allPlaces(), onPlaceClick: showPlacePopup });
      window.__llMap = mapApi.map;
      const showCoords = () => {
        const c = mapApi.map.getCenter();
        $("#coords").textContent = `${Math.abs(c.lat).toFixed(4)}\xB0${c.lat >= 0 ? "N" : "S"}  ${Math.abs(c.lng).toFixed(4)}\xB0${c.lng >= 0 ? "E" : "W"}  \xB7  Z${mapApi.map.getZoom().toFixed(1)}`;
      };
      mapApi.map.on("move", showCoords);
      showCoords();
    } catch (e) {
      console.error(e);
      $("#map").innerHTML = '<div class="map-error">The map could not load. You can still play from the panel.</div>';
    }
    if (!state) showIntro();
    else render();
  }
  function commit(focus) {
    saveGame(state);
    render();
    if (focus && mapApi) mapApi.flyTo(state.pos);
    if (state.dead) showDeath();
    else if (state.pendingPrompt === "name_dog") showNameDog();
  }
  function act(kind, a, b, c) {
    const wasDead = !!state.dead;
    perform(state, kind, a, b, c);
    if (!wasDead && state.dead) recordRun(state);
    commit();
  }
  function render() {
    if (!state) return;
    renderHeader();
    renderStats();
    renderLocation();
    renderItems();
    renderHome();
    renderDog();
    renderLog();
    renderHud();
    if (mapApi) mapApi.update(state, allPlaces());
  }
  function renderHud() {
    const t = state.time;
    const night = isNight(t);
    const w = state.weather;
    const p = state.player;
    const low = needWarnings(state).map((n) => n.word);
    const rk = risks(state).length;
    $("#hud").innerHTML = `
    <span class="h-day">DAY ${dayIndex(t) + 1}</span>
    <span class="h-time">${formatClock(t)}</span>
    <span class="h-season">${SEASONS[seasonOf(t)].label}</span>
    <span class="h-wx">${night ? "\u263E" : "\u2600"} ${esc(weatherInfo(state).label)}</span>
    <span class="h-temp">${Math.round(airTemp(state, t))}\xB0F</span>
    ${low.length ? `<span class="h-alert">\u26A0 ${esc(low.join(" \xB7 "))}</span>` : ""}${rk ? `<span class="h-risk">${rk} risk${rk > 1 ? "s" : ""}</span>` : ""}`;
    $("#hud").hidden = false;
    if (fx) fx.update({ weather: w.type, night, windMph: w.wind, season: seasonOf(t) });
  }
  function renderHeader() {
    const t = state.time;
    const sun = sunFor(t);
    const night = isNight(t);
    const air = Math.round(airTemp(state, t));
    const w = state.weather;
    const sunText = night ? `Sunrise ${formatClock(dayIndex(t) * 1440 + sun.rise)}` : `Sunset ${formatClock(dayIndex(t) * 1440 + sun.set)}`;
    $("#clock").innerHTML = `
    <div class="eyebrow">Status</div>
    <div class="day">Day ${dayIndex(t) + 1}</div>
    <div class="when">${formatDate(t)} \xB7 <b>${formatClock(t)}</b> ${night ? '<span class="badge night">Night</span>' : '<span class="badge day">Day</span>'}</div>
    <div class="wx">${SEASONS[seasonOf(t)].label} \xB7 ${esc(weatherInfo(state).label)} \xB7 ${air}\xB0F outside \xB7 wind ${w.wind} mph \xB7 ${sunText}</div>
    ${outlookHtml()}`;
  }
  function outlookHtml() {
    const o = weatherOutlook(state);
    const fx2 = o.effects.map((e) => `<li class="wx-${e.level}">${esc(e.text)}</li>`).join("");
    return `<div class="wx-next">Weather changes at ${o.next.atText} (in ${formatDuration(o.next.inMinutes)}). Low tonight ${o.next.lowF}\xB0F.</div>${fx2 ? `<ul class="wx-fx">${fx2}</ul>` : ""}`;
  }
  function tripHtml(dest) {
    const t = tripPreview(state, dest);
    const fx2 = t.weather.effects.filter((e) => e.level !== "ok").map((e) => esc(e.text)).join("<br>");
    return `<p>${describeTrip(state, t)}<br>You arrive at ${t.endText}${t.darkOnArrival ? " (dark)" : ""}.${t.dayStartText ? `<br><small>${esc(t.dayStartText)}</small>` : ""}</p>${t.slowBecause.length ? `<p><small>Slow: ${t.slowBecause.join(", ")}</small></p>` : ""}${fx2 ? `<p class="wx-trip"><small>${fx2}</small></p>` : ""}`;
  }
  function freshTag(id) {
    const l = stageLabel(state, id);
    return l ? ` <small class="fresh-${l.toLowerCase()}">${l}</small>` : "";
  }
  function clothesHtml() {
    const p = state.player;
    normalizeWorn(p);
    const rows = SLOTS.map((sl) => {
      const id = p.worn[sl];
      const it = id && ITEMS[id];
      const tags = it ? [`+${it.warmth || 0}\xB0F`, it.wind ? `wind ${Math.round(it.wind * 100)}%` : "", it.waterproof ? "waterproof" : "", it.wetWarm ? "warm when wet" : "cold when wet"].filter(Boolean).join(" \xB7 ") : "";
      return `<li><span>${esc(SLOT_NAMES[sl])}</span><span class="q">${it ? esc(it.name) : "\u2014"}</span><span class="b">${it ? `<small>${esc(tags)}</small> <button class="small" data-use="${sl}" data-verb="take_off">Take off</button>` : ""}</span></li>`;
    }).join("");
    const out = environment(state, "walk");
    const feltOut = Math.round(feltTemp(state, "walk", out));
    return `<h5>Clothes</h5><ul class="inv wear">${rows}</ul>
    <p class="hint">Feels like ${Math.round(feltTemp(state, "rest"))}\xB0F here \xB7 ${feltOut}\xB0F outside now \xB7 Wet ${Math.round(p.wetness || 0)}%${p.wet ? " (wet through: cotton and down lose heat)" : ""}</p>`;
  }
  var skillsOpen = false;
  var clothesOpen = false;
  document.addEventListener("toggle", (e) => {
    if (!e.target.classList) return;
    if (e.target.classList.contains("skills")) skillsOpen = e.target.open;
    if (e.target.classList.contains("clothes")) clothesOpen = e.target.open;
  }, true);
  function skillsHtml(open) {
    const rows = allSkills(state).map((k) => {
      const sk = SKILLS[k.key];
      const next = k.next == null ? "max level" : `${k.next} xp to level ${k.level + 1}`;
      return `<div class="skill" title="${esc(`${sk.how} ${sk.perLevel}`)}"><span class="sl">${esc(k.name)}</span><span class="lv">${k.level}</span><span class="bar"><i style="width:${Math.round(k.frac * 100)}%"></i></span><span class="sn">${esc(next)}</span><span class="sh">${esc(sk.perLevel)}</span></div>`;
    }).join("");
    const read = (state.skills && state.skills.books || []).length;
    return `<details class="skills"${open || skillsOpen ? " open" : ""}><summary>Skills</summary>${rows}<p class="hint">You learn by doing. A book teaches a skill once${read ? ` (${read} read)` : ""}.</p></details>`;
  }
  function renderStats() {
    const p = state.player;
    const rows = Object.keys(STAT_INFO).map((k) => statRow(k, p, true)).join("");
    const chips = riskChips();
    if (p.weak) chips.push(["warn", `Weak (Energy max ${p.energyMax})`]);
    if (p.wet) chips.push(["bad", "Wet"]);
    for (const i of p.injuries) chips.push(["bad", `${INJURY_NAMES[i.type]}${i.bandaged ? " (bandaged)" : ""}`]);
    if (p.illness.infection) chips.push(["bad", `Infection${p.illness.infection.abxH != null ? " (on antibiotics)" : ""}`]);
    if (p.illness.stomachH > 0) chips.push(["bad", "Stomach bug"]);
    if (p.painH > 0) chips.push(["ok", "Pain pills"]);
    if (p.warmFedH > 0) chips.push(["ok", `Warm and fed (${Math.ceil(p.warmFedH)} h)`]);
    const felt = Math.round(feltTemp(state, "rest"));
    chips.push(["", `Feels like ${felt}\xB0F`]);
    if ((state.carried.flashlight || 0) > 0) chips.push([p.lightHours > 0 ? "" : "warn", `Flashlight ${p.lightHours.toFixed(1)} h`]);
    if (p.wetness >= 10) chips.push([p.wetness >= 50 ? "bad" : "warn", `Wet ${Math.round(p.wetness)}%`]);
    chips.push(["", `Wearing: ${wornText(p)}`]);
    $("#stats").innerHTML = '<div class="eyebrow">Vitals</div>' + rows + `<div class="chips">${chips.map(([c, t]) => `<span class="chip ${c}">${esc(t)}</span>`).join("")}</div><details class="clothes"${clothesOpen ? " open" : ""}><summary>Clothes</summary>${clothesHtml()}</details>` + skillsHtml(false);
  }
  function renderLocation() {
    const loc = state.location;
    let sub = "";
    if (loc.kind === "place") {
      const p = getPlace(loc.id);
      sub = CATEGORIES[p.cat].label;
    } else if (loc.kind === "home") sub = "Your house. One story, a fireplace, solar panels and a home battery.";
    else sub = "A house. Search it room by room.";
    const acts = listActions(state).map((a) => {
      const dis = a.disabled ? "disabled" : "";
      const note = a.disabled ? a.disabled : a.note || "";
      return `<button class="act${a.risk && !a.disabled ? " risky" : ""}" data-act="${a.id}" ${dis}><span>${esc(a.label)}</span>${note ? `<small>${esc(note)}</small>` : ""}</button>`;
    }).join("");
    const hint = loc.kind !== "house" ? '<p class="hint">Tap a dot on the map to walk to a real place.</p>' : "";
    $("#location").innerHTML = `<div class="eyebrow">Location</div><h2>${esc(locationLabel(state))}</h2><p class="sub">${esc(sub)}</p><div class="acts">${acts}</div>${hint}`;
  }
  function qtyText(q) {
    return Number.isInteger(q) ? String(q) : q.toFixed(2).replace(/0$/, "");
  }
  function itemRow(id, q, from, buttons) {
    const it = ITEMS[id];
    const w = Math.round(it.weight * q * 10) / 10;
    return `<li><span class="in">${esc(it.name)}${freshTag(id)}</span><span class="iq">${qtyText(q)} ${esc(it.unit)}</span><span class="iw">${w} lb</span><span class="ib">${buttons}</span></li>`;
  }
  function useButtons(id, from) {
    return itemUses(state, id).map((u) => `<button data-use="${id}" data-verb="${u.verb}" data-from="${from}">${esc(u.label)}</button>`).join("");
  }
  var KIND_GROUPS = [
    ["Food", ["food", "dogfood"]],
    ["Water", ["drink"]],
    ["Medicine", ["med"]],
    ["Light and tools", ["tool", "batteries"]],
    ["Clothes", ["wear"]],
    ["Fuel and parts", ["fuel", "part"]],
    ["Books", ["book"]],
    ["Other", ["misc", "comfort", "warm"]]
  ];
  function groupOf(id) {
    const k = ITEMS[id] ? ITEMS[id].kind : "misc";
    const i = KIND_GROUPS.findIndex(([, kinds]) => kinds.includes(k));
    return i < 0 ? KIND_GROUPS.length - 1 : i;
  }
  function sortedIds(bag) {
    return Object.keys(bag).sort((a, b) => groupOf(a) - groupOf(b) || itemName(a).localeCompare(itemName(b)));
  }
  function groupedRows(ids, row) {
    let last = -1;
    return ids.map((id) => {
      const g = groupOf(id);
      const head = g !== last ? `<li class="grp">${KIND_GROUPS[g][0]}</li>` : "";
      last = g;
      return head + row(id);
    }).join("");
  }
  function renderItems() {
    const loc = state.location;
    const here = hereBag(state);
    const hereIds = sortedIds(here);
    const hereTitle = loc.kind === "home" ? "House storage" : "Items you found here";
    let hereHtml = groupedRows(hereIds, (id) => itemRow(
      id,
      here[id],
      "here",
      (loc.kind === "home" ? useButtons(id, "storage") : "") + `<button data-take="${id}">Take</button>`
    ));
    if (!hereIds.length) hereHtml = `<li class="empty">${loc.kind === "home" ? "Nothing stored." : "Nothing here yet. Search to find items."}</li>`;
    const takeAll2 = hereIds.length && loc.kind !== "home" ? '<button class="small" data-takeall="1">Take all that fits</button>' : "";
    const carried = state.carried;
    const cIds = sortedIds(carried);
    const weight = bagWeight(carried);
    const limit = carryLimit(state);
    const over = weight > limit;
    let cHtml = groupedRows(cIds, (id) => itemRow(
      id,
      carried[id],
      "carried",
      useButtons(id, "carried") + `<button data-drop="${id}">${loc.kind === "home" ? "Store" : "Drop"}</button>`
    ));
    if (!cIds.length) cHtml = '<li class="empty">You carry nothing.</li>';
    $("#items").innerHTML = `
    <p class="stock">${esc(stockLine(state))} <small>at rest, carried + stored at home</small></p>
    <h3>${hereTitle} ${takeAll2}</h3><ul class="items">${hereHtml}</ul>
    <h3>You carry <span class="${over ? "bad" : ""}">${weight} / ${limit} lb${over ? " (too heavy: slow)" : ""}</span></h3>
    <ul class="items">${cHtml}</ul>`;
  }
  function renderHome() {
    const h = state.home;
    const atHome = state.location.kind === "home";
    const pct = Math.round(h.battery / h.batteryMax * 100);
    const pw = powerSummary(state);
    const hrs = (x) => x >= 10 ? `${Math.round(x)} h` : `${x.toFixed(1)} h`;
    $("#home").innerHTML = `
    <div class="eyebrow">Home base</div>
    <h3>House status ${atHome ? "" : "<small>(you are away)</small>"}</h3>
    <div class="grid">
      <span>Inside temp</span><b>${Math.round(h.indoorTemp)}\xB0F</b>
      <span>Fire</span><b>${h.fireHours > 0 ? `burning (${formatDuration(h.fireHours * 60)})` : "out"}</b>
      <span>Battery</span><b>${pct}% (${h.battery.toFixed(1)} of ${h.batteryMax} kWh)</b>
      <span>Power in</span><b>Solar today ${pw.inToday.toFixed(1)} kWh (in daylight)</b>
      <span>Power out</span><b>${pw.outKw ? `Heater ${pw.outKw} kW \xB7 battery lasts ${hrs(pw.hoursLeft)}` : `Nothing on \xB7 heater would run ${hrs(pw.heaterHoursFull)}`}</b>
      <span>Water heater tank</span><b>${h.tankGal.toFixed(1)} gal (clean)</b>
      <span>Boiled water</span><b>${h.safeGal.toFixed(1)} gal</b>
      <span>Unsafe water</span><b>${h.rawGal.toFixed(1)} gal</b>
      <span>Kitchen tap</span><b>${h.tapWorks ? "weak flow" : "stopped"}</b>
    </div>
    ${renderBase()}`;
  }
  function renderBase() {
    const done = builtCount(state);
    const wings = wingSummary(state).map((w) => {
      const pips = w.projects.map((p) => `<i class="${projectStatus(state, p).built ? "on" : ""}"></i>`).join("");
      const cards = w.projects.map(projectCard).join("");
      return `<details class="wing" data-wing="${w.id}" ${openWings.has(w.id) ? "open" : ""}>
      <summary><span class="wi">${w.icon}</span><span class="wn">${esc(w.label)}</span><span class="pips">${pips}</span></summary>
      <p class="hint">${esc(w.blurb)}</p>${cards}</details>`;
    }).join("");
    const need = {};
    for (const p of PROJECTS) {
      const st = projectStatus(state, p);
      if (st.built || st.started || st.missingReq.length) continue;
      for (const x of st.parts) if (x.have < x.need) need[x.id] = Math.max(need[x.id] || 0, x.need - x.have);
      for (const t of st.tools) if (!t.have) need[t.id] = 1;
    }
    const list = Object.entries(need).map(([id, q]) => `<span class="chip">${esc(itemName(id))} \xD7${q}</span>`).join("");
    return `<div class="base">
    <h3>Base projects <small>${done} / ${PROJECTS.length} built</small></h3>
    <div class="basebar"><i style="width:${done / PROJECTS.length * 100}%"></i></div>
    ${wings}
    ${list ? `<p class="sub">Look for these parts (hardware stores, houses, gas stations):</p><div class="chips">${list}</div>` : ""}
  </div>`;
  }
  function projectCard(p) {
    const st = projectStatus(state, p);
    const parts = st.parts.map((x) => `<span class="chip ${st.started || x.have >= x.need ? "ok" : "bad"}">${esc(itemName(x.id))} ${st.started ? "\u2713" : `${qtyText(Math.min(x.have, x.need))}/${x.need}`}</span>`).join("");
    const tools = st.tools.map((t) => `<span class="chip ${t.have ? "ok" : "bad"}">\u{1F527} ${esc(itemName(t.id))}</span>`).join("");
    let foot;
    if (st.built) foot = '<span class="built">\u2713 Built</span>';
    else {
      const block = Math.min(WORK_BLOCK_H, st.leftH);
      const label = st.started ? `Work ${block} h (${st.leftH} h left)` : `Start project (${p.hours} h total)`;
      foot = `${st.started ? `<div class="basebar small"><i style="width:${st.doneH / p.hours * 100}%"></i></div>` : ""}
      <button class="small" data-build="${p.id}" ${st.canWork ? "" : "disabled"}>${label}</button>
      ${st.blocked ? `<small class="why">${esc(st.blocked)}</small>` : ""}`;
    }
    return `<div class="proj ${st.built ? "is-built" : ""}">
    <div class="pn">${esc(p.name)}</div>
    <div class="pe">${esc(p.effect)}</div>
    ${st.built ? "" : `<div class="chips">${parts}${tools}</div>`}
    <div class="pf">${foot}</div>
  </div>`;
  }
  function renderDog() {
    const d = state.dog;
    let html = "";
    if (d.stage === "joined") {
      const bar = (label, v) => `<div class="stat ${v < 25 ? "bad" : v < 50 ? "warn" : "ok"}"><span class="sl">${label}</span><span class="bar"><i style="width:${Math.round(v)}%"></i></span><span class="sv">${Math.round(v)}</span><span class="sw"></span></div>`;
      html = `<h3>${esc(d.name)} <small>${d.withPlayer ? "with you" : "at home"}</small></h3>${bar("Food", d.food)}${bar("Health", d.health)}${bar("Bond", d.bond)}
      <p class="hint">Bond 40+: warns of animals. 50+: finds extra items. 80+: sleeps next to you (warmer).</p>`;
    } else if (d.stage === "visiting") {
      html = '<h3>Stray dog</h3><p class="hint">A thin dog comes near the house in the day. Leave food outside on three different days.</p>';
    } else if (d.stage === "dead") {
      html = `<h3>${esc(d.name || "The dog")}</h3><p class="hint">Gone.</p>`;
    }
    $("#dog").innerHTML = html;
    $("#dog").hidden = !html;
  }
  function renderLog() {
    const items = state.log.slice(-60).reverse().map((e) => `<li class="${e.kind}"><time>D${dayIndex(e.t) + 1} ${formatClock(e.t)}</time> ${esc(e.text)}</li>`).join("");
    $("#log").innerHTML = `<h3>Journal</h3><div class="journal">${journalHtml(3)}</div><h3>Log</h3><ul>${items}</ul>`;
  }
  function showPlacePopup(id, lngLat) {
    if (!state || !mapApi || picking) return;
    const maplibregl = window.maplibregl;
    if (popup) popup.remove();
    let html;
    let pos;
    if (id === "__home") {
      pos = homeOf(state);
      const atHome = state.location.kind === "home";
      html = `<h4>Home</h4><p>Your house ${esc(state.homeLabel || "in Aloha")}.</p>${atHome ? "<p><i>You are here.</i></p>" : `${tripHtml(pos)}<button class="go" data-gohome="1">Walk home</button>`}`;
    } else {
      const p = getPlace(id);
      pos = p;
      const cat = CATEGORIES[p.cat];
      const ps = state.places[p.id];
      const status = !ps || !ps.visited ? "Not searched" : ps.zonesDone >= ps.zones ? "Searched: nothing left" : `Searched ${ps.zonesDone} of ${ps.zones} ${cat.zoneName}s`;
      const here = state.location.kind === "place" && state.location.id === id;
      const fromHome = straightMiles(homeOf(state), p).toFixed(1);
      html = `<h4>${esc(p.name)}</h4><p>${cat.label} \xB7 ${fromHome} mi from home</p><p><i>${status}</i></p>
      ${here ? "<p><i>You are here.</i></p>" : `${tripHtml(p)}
      <button class="go" data-goplace="${p.id}">Walk here</button>`}`;
    }
    popup = new maplibregl.Popup({ closeButton: true, maxWidth: "260px" }).setLngLat(lngLat || [pos.lon, pos.lat]).setHTML(html).addTo(mapApi.map);
    const el = popup.getElement();
    el.querySelector("[data-goplace]")?.addEventListener("click", (e) => {
      popup.remove();
      travelTo(e.currentTarget.dataset.goplace);
    });
    el.querySelector("[data-gohome]")?.addEventListener("click", () => {
      popup.remove();
      travelTo("__home");
    });
  }
  function travelTo(id) {
    if (state.dead) return;
    if (state.location.kind === "house") perform(state, "action", "leave_house");
    if (id === "__home") perform(state, "action", "go_home");
    else perform(state, "action", "go_place", id);
    if (state.dead) recordRun(state);
    commit(true);
  }
  function modal(html, onBind) {
    const m = $("#modal");
    m.innerHTML = `<div class="box">${html}</div>`;
    m.hidden = false;
    onBind && onBind(m);
  }
  function closeModal() {
    $("#modal").hidden = true;
    $("#modal").innerHTML = "";
  }
  function showIntro() {
    modal(`<h2>Last Light: Portland</h2>
    <p>Late November 2026. Three months ago, a plague went through the world. Everyone died.</p>
    <p>You were in a coma in your own home in Aloha, Oregon. A machine fed you. Now its bags are empty, and you wake up.</p>
    <p>You are the last person alive. There is nobody to save and nobody to find. You must stay alive as long as you can.</p>
    <h3>How to play</h3>
    <ul>
      <li>Each action costs game time. Time stops when you read or look at the map.</li>
      <li>Watch Food, Water, Warmth, Energy, Health and Morale. If Health gets to 0, you die.</li>
      <li>Tap a dot on the map to walk to a real store, pharmacy, clinic or other place. Search it, take what you can carry, and walk home.</li>
      <li>Keep the house warm with the fireplace. Boil water before you drink it.</li>
      <li>The game saves after each action. You have one life.</li>
    </ul>
    <button class="primary" id="startBtn">Wake up</button>`, (m) => {
      m.querySelector("#startBtn").addEventListener("click", () => {
        state = newGame();
        closeModal();
        commit(true);
      });
    });
  }
  function showSleep() {
    const opts = [1, 2, 4, 6, 8, 10].map((h) => {
      const a = actionTiming(state, h * 60);
      return `<button data-hours="${h}" title="${esc(a.dayStartText || "")}">${h} h<small>until ${a.endText}${a.crossesDayStart ? " \u2600" : ""}</small></button>`;
    }).join("");
    modal(`<h3>How long do you want to sleep?</h3><p class="hint">Sleep gives Energy. The fire does not burn while you sleep unless you add wood first. \u2600 = you wake after 5 AM, when the weather changes.</p><div class="row">${opts}</div><button class="link" id="cancel">Cancel</button>`, (m) => {
      m.querySelectorAll("[data-hours]").forEach((b) => b.addEventListener("click", () => {
        closeModal();
        act("action", "sleep", Number(b.dataset.hours));
      }));
      m.querySelector("#cancel").addEventListener("click", closeModal);
    });
  }
  function showNameDog() {
    modal(`<h3>The dog stays with you</h3><p>What do you call the dog?</p><input id="dogName" maxlength="20" placeholder="Name" autocomplete="off"><button class="primary" id="okName">OK</button>`, (m) => {
      const input = m.querySelector("#dogName");
      input.focus();
      const ok = () => {
        closeModal();
        act("namedog", input.value);
      };
      m.querySelector("#okName").addEventListener("click", ok);
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") ok();
      });
    });
  }
  function showDeath() {
    const d = state.dead;
    const runs = bestRuns().map((r) => `<li>${r.days} days \xB7 ${esc(r.cause)}${r.dog ? ` \xB7 with ${esc(r.dog)}` : ""}</li>`).join("");
    modal(`<h2>You died</h2>
    <p>You lived ${d.days} day${d.days === 1 ? "" : "s"} after you woke up. You died on ${formatDate(d.time)} at ${formatClock(d.time)}, of ${esc(d.cause)}.</p>
    <div class="grid"><span>Miles walked</span><b>${state.stats.miles.toFixed(1)}</b><span>Places searched</span><b>${state.stats.placesSearched}</b>
    <span>Houses searched</span><b>${state.stats.housesSearched}</b><span>Dog</span><b>${state.dog.name ? esc(state.dog.name) : "none"}</b></div>
    <h3>Best runs</h3><ol>${runs}</ol>
    ${startChoicesHtml()}`, bindStartChoices);
  }
  function startChoicesHtml() {
    return `<h3>Start a new run</h3>
    <div class="col">
      <button class="primary" data-start="home">Wake up at home in Aloha</button>
      <button data-start="random">Start at a random place</button>
      <button data-start="pick">Choose a place on the map</button>
    </div>`;
  }
  function bindStartChoices(m) {
    m.querySelectorAll("[data-start]").forEach((b) => b.addEventListener("click", () => {
      const how = b.dataset.start;
      if (how === "home") return beginRun({});
      if (how === "random") {
        const home = randomStartPoint();
        return beginRun({ home, homeLabel: nearLabel(home) });
      }
      pickStart();
    }));
  }
  function nearLabel(pos) {
    let best = null;
    let bestD = Infinity;
    for (const p of allPlaces()) {
      const d = straightMiles(pos, p);
      if (d < bestD) {
        bestD = d;
        best = p;
      }
    }
    if (!best) return "in a quiet street";
    return bestD < 0.3 ? `near ${best.name}` : `${bestD.toFixed(1)} mi from ${best.name}`;
  }
  function beginRun(opts) {
    clearGame();
    state = newGame(void 0, opts);
    closeModal();
    commit(true);
  }
  var picking = false;
  function pickStart() {
    closeModal();
    if (!mapApi) return beginRun({ home: randomStartPoint(), homeLabel: "in a quiet street" });
    picking = true;
    if (popup) popup.remove();
    const banner = document.createElement("div");
    banner.className = "pick-banner";
    banner.innerHTML = '<b>Choose your new home.</b> Click a spot on the map inside the dashed 15-mile line. <button id="pickCancel">Cancel</button>';
    $("#mapwrap").appendChild(banner);
    mapApi.map.getCanvas().style.cursor = "crosshair";
    mapApi.map.easeTo({ center: [HOME.lon, HOME.lat], zoom: 9.6, duration: 600 });
    const finish = () => {
      picking = false;
      banner.remove();
      mapApi.map.getCanvas().style.cursor = "";
      mapApi.map.off("click", onClick);
    };
    const onClick = (e) => {
      const pos = { lat: e.lngLat.lat, lon: e.lngLat.lng };
      if (straightMiles(HOME, pos) > MAP_RADIUS_MILES) {
        banner.querySelector("b").textContent = "That spot is outside the play area. Click inside the dashed line.";
        return;
      }
      finish();
      const label = nearLabel(pos);
      modal(`<h3>Start here?</h3><p>Your new home is a house ${esc(label)}.</p>
      <div class="col"><button class="primary" id="pickYes">Wake up here</button><button id="pickAgain">Choose again</button></div>`, (m) => {
        m.querySelector("#pickYes").addEventListener("click", () => beginRun({ home: pos, homeLabel: label }));
        m.querySelector("#pickAgain").addEventListener("click", pickStart);
      });
    };
    mapApi.map.on("click", onClick);
    banner.querySelector("#pickCancel").addEventListener("click", () => {
      finish();
      if (state && state.dead) showDeath();
      else showStartChoices();
    });
  }
  function showStartChoices() {
    modal(startChoicesHtml(), bindStartChoices);
  }
  function showMenu() {
    modal(`<h3>Game</h3>
    <p class="hint">The game saves in this browser after each action.</p>
    <div class="col">
      <label class="toggle"><input type="checkbox" id="fxToggle" ${fx && fx.enabled ? "checked" : ""}> Weather effects on the map (snow, rain, fog, night)</label>
      <button id="exp">Export a backup file</button>
      <label class="filebtn">Import a backup file<input type="file" id="imp" accept=".json,application/json" hidden></label>
      <button id="newrun" class="danger">Give up and start a new run</button>
      <button class="link" id="cancel">Close</button>
    </div>
    <p class="hint">Map data \xA9 OpenStreetMap contributors (ODbL). Map tiles: OpenFreeMap.</p>`, (m) => {
      m.querySelector("#cancel").addEventListener("click", closeModal);
      m.querySelector("#fxToggle").addEventListener("change", (e) => {
        if (fx) fx.setEnabled(e.target.checked);
      });
      m.querySelector("#exp").addEventListener("click", () => {
        const blob = new Blob([JSON.stringify(state)], { type: "application/json" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `last-light-day${dayIndex(state.time) + 1}.json`;
        a.click();
        setTimeout(() => URL.revokeObjectURL(a.href), 1e3);
      });
      m.querySelector("#imp").addEventListener("change", async (e) => {
        const f = e.target.files[0];
        if (!f) return;
        try {
          state = parseSave(await f.text());
          closeModal();
          commit(true);
        } catch (err) {
          alert("This file is not a Last Light save.");
        }
      });
      m.querySelector("#newrun").addEventListener("click", () => {
        if (!confirm("Start a new run? This run ends now.")) return;
        clearGame();
        closeModal();
        state = null;
        showStartChoices();
      });
    });
  }
  var insideLoading = null;
  function loadInside3d() {
    if (window.LLInside3D) return Promise.resolve(window.LLInside3D);
    if (!insideLoading) {
      insideLoading = new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = "inside3d.js";
        s.onload = () => resolve(window.LLInside3D);
        s.onerror = () => {
          insideLoading = null;
          reject(new Error("3D view did not load"));
        };
        document.head.appendChild(s);
      });
    }
    return insideLoading;
  }
  function webglOk() {
    try {
      const c = document.createElement("canvas");
      return !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch (e) {
      return false;
    }
  }
  async function walkInside2() {
    if (!state || state.dead || document.getElementById("inside")) return;
    if (!webglOk()) {
      alert("This browser cannot show 3D. Use the search buttons in the panel.");
      return;
    }
    let api;
    try {
      api = await loadInside3d();
    } catch (e) {
      alert("The 3D view did not load. Check the connection and try again.");
      return;
    }
    const loc = state.location;
    let plan;
    let cat;
    let bag;
    let zoneList;
    let stock;
    let counterIdx = -1;
    let title;
    let zoneName;
    if (loc.kind === "place") {
      const place = getPlace(loc.id);
      const ps = placeState(state, place);
      cat = CATEGORIES[place.cat];
      plan = buildInterior(place.cat, place.id, ps.zones);
      zoneList = () => zonesDoneList(ps);
      stock = ps.stock;
      counterIdx = cat.lockedZone ? ps.zones - 1 : -1;
      title = place.name;
      zoneName = cat.zoneName;
    } else if (loc.kind === "house") {
      const hs = state.houses[loc.id];
      cat = CATEGORIES.house;
      plan = buildInterior("house", loc.id, 6, { body: hs.body });
      zoneList = () => zonesDoneList(hs, "roomsDone", "doneList");
      stock = cat.stock;
      title = loc.label;
      zoneName = "room";
    } else return;
    const env = environment(state, "work");
    const night = isNight(state.time);
    document.body.classList.add("inside-open");
    const lastLines = (n0) => state.log.slice(n0).filter((e) => e.kind === "warn" || e.kind === "bad" || e.kind === "story").map((e) => e.text);
    api.openInside({
      plan,
      title,
      subtitle: `${cat.label} \xB7 inside`,
      dark: env.dark,
      night,
      stock,
      hasFlashlight: () => (state.carried.flashlight || 0) > 0,
      isLightOn: () => hasLight(state),
      lightHours: () => state.player.lightHours,
      toggleLight: () => {
        const n0 = state.log.length;
        act("action", "flashlight");
        return state.log.slice(n0).map((e) => e.text).join(" ");
      },
      hasLoot: () => Object.keys(hereBag(state)).length > 0,
      panel: (name) => insidePanel(name),
      useItem: (id, verb) => {
        const n0 = state.log.length;
        if (verb === "take_off") act("action", "take_off", id);
        else act("use", id, verb, "carried");
        return state.log.slice(n0).map((e) => e.text).join(" ");
      },
      quickUse: (action) => {
        const slot = { quick_med: "med", quick_food: "food", quick_utility: "utility" }[action];
        const c = quickChoice(state, slot);
        if (c.why) return c.why;
        const n0 = state.log.length;
        act("use", c.id, c.verb, "carried");
        return state.log.slice(n0).map((e) => e.text).join(" ");
      },
      quickSave: () => {
        const ok = saveGame(state);
        return ok ? `Game saved (Day ${dayIndex(state.time) + 1}, ${formatClock(state.time)}).` : "The game could not save in this browser.";
      },
      canQuickLoad: () => !!loadGame(),
      isDone: (z) => zoneList().includes(z),
      isCounterOpen: () => loc.kind === "place" ? placeState(state, getPlace(loc.id)).counterOpen : true,
      isDead: () => !!state.dead,
      getStatus: () => {
        const p = state.player;
        const low = needWarnings(state).map((n) => n.word);
        const light = (state.carried.flashlight || 0) > 0 ? `Flashlight ${p.lightHours.toFixed(1)} h${p.lightOff ? " (off)" : ""}` : "No flashlight";
        return `<b>Day ${dayIndex(state.time) + 1} \xB7 ${formatClock(state.time)}</b> \xB7 Bag ${bagWeight(state.carried)} / ${carryLimit(state)} lb \xB7 ${light}` + (low.length ? ` \xB7 <span class="bad">\u26A0 ${esc(low.join(", "))}</span>` : "");
      },
      describe: (n) => {
        if (n.type === "exit") return "<kbd>E</kbd> Leave the building <small>back to the map</small>";
        if (zoneList().includes(n.zone)) return `<span class="done">${esc(n.label)}: searched</span>${Object.keys(hereBag(state)).length ? " <kbd>F</kbd> Take all" : ""}`;
        if (n.zone === counterIdx && !placeState(state, getPlace(loc.id)).counterOpen) {
          return `<kbd>E</kbd> Open the ${esc(cat.lockedZone.name)} gate <small>${has(state, "pry_bar") ? "pry bar: sure to work" : esc(oddsText(odds(state, cat.lockedZone.dc, forceBonus(state), forceOpts(state))))}</small>`;
        }
        const e = environment(state, "work");
        return `${esc(n.label)} <small>Look at an item and press <kbd>E</kbd> to take it${e.dark && !hasLight(state) ? " \xB7 dark, no light: 2 min an item" : ""}</small>`;
      },
      onWalk: (m) => {
        perform(state, "action", "walk_inside", m);
        if (state.dead) recordRun(state);
        saveGame(state);
      },
      onCounter: () => {
        const n0 = state.log.length;
        act("action", "counter");
        return state.log.slice(n0).map((e) => e.text).join(" ") || "The gate does not move.";
      },
      items: () => buildingItems(state).map((it) => ({ ...it, name: itemName(it.item) })),
      onPickUp: (pid) => {
        const n0 = state.log.length;
        const it = buildingItems(state).find((x) => x.pid === pid);
        const wasDead = !!state.dead;
        perform(state, "action", "pickup", pid);
        if (!wasDead && state.dead) recordRun(state);
        const ok = !buildingItems(state).some((x) => x.pid === pid);
        saveGame(state);
        render();
        const msgs = state.log.slice(n0).filter((e) => e.kind !== "info" || !ok).map((e) => e.text).join(" ");
        return { ok, name: it ? itemName(it.item) : "", msg: msgs };
      },
      onSeeZone: (zone) => {
        perform(state, "action", "see_zone", zone);
        saveGame(state);
      },
      isOpened: (cid) => openedContainers(state).includes(cid),
      notice: () => noticeOf(state),
      onOpenContainer: (cid) => {
        perform(state, "action", "open_container", cid);
        if (state.dead) recordRun(state);
        saveGame(state);
        render();
        return !state.dead && openedContainers(state).includes(cid);
      },
      describeItem: (it, near, touch) => {
        const def = ITEMS[it.item];
        const need = projectNeeds()[it.item];
        const bagFull = def.weight > carryLimit(state) * 1.5 - bagWeight(state.carried) + 1e-9;
        return `<kbd>E</kbd> Take ${esc(def.name)} <small>${def.weight} lb${bagFull ? ' \xB7 <span class="bad">pack too full</span>' : ""}</small>` + (need ? `<span class="need">Needed: ${esc(need)}</span>` : "") + (near > 1 ? `<small class="more">Hold ${touch ? "USE" : "E"}: take all ${near} in reach</small>` : "");
      },
      onSearch: (zone) => {
        const n0 = state.log.length;
        const t0 = state.time;
        delete state.lastFound;
        const wasDead = !!state.dead;
        perform(state, "action", loc.kind === "place" ? "search" : "room", zone);
        if (!wasDead && state.dead) recordRun(state);
        const found = state.lastFound || {};
        delete state.lastFound;
        commit();
        const items = Object.entries(found).map(([id, q]) => `${itemName(id)}${q > 1 ? ` \xD7${q}` : ""}`);
        const label = plan.spots.find((s) => s.zone === zone)?.label || zoneName;
        const extra = lastLines(n0).join(" ");
        return {
          title: `${label} \xB7 ${formatDuration(state.time - t0)}`,
          items,
          canTake: Object.keys(hereBag(state)).length > 0,
          note: extra
        };
      },
      onTakeAll: () => {
        const n0 = state.log.length;
        act("takeall");
        return state.log.slice(n0).map((e) => e.text).join(" ") || `You put it in your pack. Bag: ${bagWeight(state.carried)} / ${carryLimit(state)} lb.`;
      },
      onLeave: (died, why) => {
        document.body.classList.remove("inside-open");
        if (why === "quickload") {
          const saved = loadGame();
          if (saved) state = saved;
          commit(true);
          return;
        }
        if (state.player.lightOff) state.player.lightOff = false;
        commit();
      }
    });
  }
  function projectNeeds() {
    const out = {};
    for (const p of PROJECTS) {
      const st = projectStatus(state, p);
      if (st.built || st.started || st.missingReq.length) continue;
      for (const x of st.parts) if (x.have < x.need && !out[x.id]) out[x.id] = `${p.name} ${qtyText(Math.min(x.have, x.need))}/${x.need}`;
      for (const t of st.tools) if (!t.have && !out[t.id]) out[t.id] = `${p.name} (tool)`;
    }
    return out;
  }
  function journalHtml(maxDays) {
    const days = (state.journal || []).slice(-maxDays).reverse();
    if (!days.length) return '<p class="hint">Nothing yet.</p>';
    return days.map((d) => {
      const parts = [];
      if (d.places.length) parts.push(`You went to ${d.places.join(", ")}.`);
      if (d.taken) parts.push(`You picked up ${d.taken} item${d.taken > 1 ? "s" : ""}.`);
      if (d.searched) parts.push(`You searched ${d.searched} area${d.searched > 1 ? "s" : ""}.`);
      if (!parts.length && !d.events.length) parts.push("You stayed close to home.");
      const ev = d.events.map((t) => `<li>${esc(t)}</li>`).join("");
      return `<div class="jday"><b>Day ${d.day + 1} \xB7 ${esc(formatDate(d.day * 1440))}</b><p>${esc(parts.join(" "))}</p>${ev ? `<ul>${ev}</ul>` : ""}</div>`;
    }).join("");
  }
  function insidePanel(name) {
    const p = state.player;
    if (name === "inventory") {
      const c = state.carried;
      const ids = sortedIds(c);
      const rows = groupedRows(ids, (id) => {
        const it = ITEMS[id];
        const btns = itemUses(state, id).filter((u) => u.verb !== "feeddog" || state.dog.withPlayer).map((u) => `<button class="small" data-use="${id}" data-verb="${u.verb}">${esc(u.label)}</button>`).join("");
        return `<li><span>${esc(it.name)}${freshTag(id)}</span><span class="q">${qtyText(c[id])} ${esc(it.unit)}</span><span class="b">${btns}</span></li>`;
      }) || '<li class="empty">You carry nothing.</li>';
      const here = hereBag(state);
      const hereIds = Object.keys(here);
      const hereList = hereIds.length ? `<h5>Found here, not taken</h5><ul class="inv">${hereIds.map((id) => `<li><span>${esc(itemName(id))}</span><span class="q">${qtyText(here[id])}</span></li>`).join("")}</ul>
      <button class="primary small" data-in="take">Take all that fits (F)</button>` : "";
      return `<h4>Inventory \xB7 ${bagWeight(state.carried)} / ${carryLimit(state)} lb</h4><p class="stock">${esc(stockLine(state))}</p><ul class="inv">${rows}</ul>${hereList}`;
    }
    if (name === "character") {
      const rows = Object.keys(STAT_INFO).map((k) => statRow(k, p, true)).join("") + risks(state).map((r) => `<div class="risk-line">\u26A0 ${esc(r.text)}</div>`).join("");
      const notes = [];
      for (const i of p.injuries) notes.push(`${INJURY_NAMES[i.type]}${i.bandaged ? " (bandaged)" : ""}`);
      if (p.illness.infection) notes.push("Infection");
      if (p.illness.stomachH > 0) notes.push("Stomach bug");
      if (p.wet) notes.push("Wet");
      return `<h4>Character</h4>${rows}
      <p class="hint">${notes.length ? esc(notes.join(" \xB7 ")) : "No injuries or illness."}</p>
      ${clothesHtml()}
      ${skillsHtml(true)}`;
    }
    if (name === "journal") {
      const items = state.log.slice(-10).reverse().map((e) => `<li class="${e.kind}"><time>D${dayIndex(e.t) + 1} ${formatClock(e.t)}</time> ${esc(e.text)}</li>`).join("");
      return `<h4>Journal</h4>${journalHtml(6)}<h5>Last events</h5><ul class="jr">${items}</ul>`;
    }
    if (name === "objectives") {
      return "<h4>Objectives</h4><p>There is nobody to save and nothing to find. Stay alive: eat, drink, keep warm, and get home before night.</p>";
    }
    return null;
  }
  function bindEvents() {
    document.body.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b || b.disabled || !state || b.closest("#modal") || b.closest(".maplibregl-popup")) return;
      if (b.dataset.act) {
        if (b.dataset.act === "sleep") return showSleep();
        if (b.dataset.act === "walk_in") return walkInside2();
        act("action", b.dataset.act);
      } else if (b.dataset.use && b.dataset.verb === "take_off") act("action", "take_off", b.dataset.use);
      else if (b.dataset.use) act("use", b.dataset.use, b.dataset.verb, b.dataset.from);
      else if (b.dataset.take) act("take", b.dataset.take);
      else if (b.dataset.takeall) act("takeall");
      else if (b.dataset.drop) act("drop", b.dataset.drop);
      else if (b.dataset.build) act("action", "build", b.dataset.build);
      else if (b.id === "menuBtn") showMenu();
      else if (b.id === "centerBtn" && mapApi) mapApi.flyTo(state.pos);
    });
    document.body.addEventListener("toggle", (e) => {
      const w = e.target.dataset && e.target.dataset.wing;
      if (!w) return;
      if (e.target.open) openWings.add(w);
      else openWings.delete(w);
    }, true);
    window.addEventListener("beforeunload", () => {
      if (state) saveGame(state);
    });
  }

  // src/main.js
  start();
})();
