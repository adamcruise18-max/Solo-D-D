// Legacy board (research feature 24): what the last person chooses to preserve, repair,
// document or leave behind. The builder thread owns this file. Rules: src/engine/goals.js.
//
// { id, kind: 'preserve'|'repair'|'document'|'leave', title, why: one line,
//   steps: [{ id, text, check(state) -> true when done }],
//   epilogue: { none, some, all } (one plain line each, for the end of the run) }
//
// Every step is checkable from the game state and possible alone with normal systems
// (carry, build, travel, time). No names, no real addresses, no story about real people.
// Steps are done in any order; a step counts once, the first time its check is true.
import { built } from '../engine/base.js';
import { gameDay } from '../core/clock.js';

const stored = (s, id) => s.home?.storage?.[id] || 0;
const storedAny = (s, ids) => ids.reduce((a, id) => a + stored(s, id), 0);
const BOOKS = ['book_first_aid', 'book_repair', 'book_cooking', 'book_survival'];
const dayNow = (s) => gameDay(s.time);

export const GOAL_KINDS = {
  preserve: { label: 'Preserve', hint: 'Keep something alive or safe for later.' },
  repair: { label: 'Repair', hint: 'Make something work again.' },
  document: { label: 'Document', hint: 'Keep a record of the city as it changes.' },
  leave: { label: 'Leave behind', hint: 'Make something for whoever comes after.' },
};

export const GOALS = [
  {
    id: 'seed_bank', kind: 'preserve', title: 'Seed bank',
    why: 'Seeds stay alive for years if they are dry and cool.',
    steps: [
      { id: 'seeds_1', text: 'Store a packet of seeds at home', check: (s) => stored(s, 'seeds') >= 1 },
      { id: 'seeds_5', text: 'Store 5 packets of seeds', check: (s) => stored(s, 'seeds') >= 5 },
      { id: 'dry_store', text: 'Build the sealed food store (dry, safe from mice)', check: (s) => built(s, 'sealed_store') },
      { id: 'seeds_12', text: 'Store 12 packets of seeds', check: (s) => stored(s, 'seeds') >= 12 },
      { id: 'water_for_bed', text: 'Have a rain barrel system to water a test bed', check: (s) => built(s, 'rain_barrels') },
    ],
    epilogue: {
      none: 'The seed packets stayed in the stores, and the mice found them.',
      some: 'A few jars of seeds sit dry on a shelf in a house in Aloha.',
      all: 'A dry store in Aloha holds seeds for a whole garden, labeled and sealed.',
    },
  },
  {
    id: 'library_shelf', kind: 'preserve', title: 'A shelf of books',
    why: 'Paper rots in a wet city. A dry shelf keeps what people knew.',
    steps: [
      { id: 'books_1', text: 'Bring a book home', check: (s) => storedAny(s, BOOKS) >= 1 },
      { id: 'books_4', text: 'Have 4 books on the shelf at home', check: (s) => storedAny(s, BOOKS) >= 4 },
      { id: 'books_kinds', text: 'Have one of each kind of book (first aid, repair, cooking, survival)', check: (s) => BOOKS.every((b) => stored(s, b) >= 1) },
      { id: 'dry_room', text: 'Insulate the living room to keep the shelf dry', check: (s) => built(s, 'insulate_living') },
      { id: 'books_10', text: 'Have 10 books on the shelf', check: (s) => storedAny(s, BOOKS) >= 10 },
    ],
    epilogue: {
      none: 'The libraries stood open to the rain, and the books swelled and fell apart.',
      some: 'A short row of books stays dry in one living room.',
      all: 'A dry shelf in Aloha keeps how to heal, fix, cook and live, for whoever reads next.',
    },
  },
  {
    id: 'animal_care', kind: 'preserve', title: 'Animal care',
    why: 'The animals did not choose this either.',
    steps: [
      { id: 'dog_joined', text: 'Take in the stray dog', check: (s) => s.dog?.stage === 'joined' },
      { id: 'dog_food_5', text: 'Store 5 bags of dog food at home', check: (s) => stored(s, 'dog_food') >= 5 },
      { id: 'flea_spray', text: 'Keep flea spray at home', check: (s) => stored(s, 'flea_spray') >= 1 },
      { id: 'bond_80', text: 'Earn the dog’s full trust (bond 80)', check: (s) => s.dog?.stage === 'joined' && s.dog.bond >= 80 },
      { id: 'dog_60_days', text: 'Keep the dog alive and with you for 60 days', check: (s) => s.dog?.stage === 'joined' && dayNow(s) >= 60 },
    ],
    epilogue: {
      none: 'The dogs of the city went wild, and then went quiet.',
      some: 'One dog was fed and named, for a while.',
      all: 'A dog grew old and safe in a warm house, and never went hungry.',
    },
  },
  {
    id: 'light_on_hill', kind: 'repair', title: 'Light in the window',
    why: 'One lit window, every night, in a dark city.',
    steps: [
      { id: 'battery_module', text: 'Bring home a battery module', check: (s) => stored(s, 'battery_module') >= 1 },
      { id: 'led', text: 'Build LED lights on the battery', check: (s) => built(s, 'led_lights') },
      { id: 'second_battery', text: 'Build a second battery', check: (s) => built(s, 'second_battery') },
      { id: 'candles_10', text: 'Store 10 candles for the nights the battery is empty', check: (s) => stored(s, 'candles') >= 10 },
    ],
    epilogue: {
      none: 'At night the whole city was dark, to the last house.',
      some: 'For a while, one window in Aloha was lit at night.',
      all: 'Every night a window in Aloha lights up on its own, as long as the sun charges the battery.',
    },
  },
  {
    id: 'water_for_anyone', kind: 'repair', title: 'Water for anyone',
    why: 'Clean water is the first thing anyone needs.',
    steps: [
      { id: 'barrels', text: 'Build the rain barrel system', check: (s) => built(s, 'rain_barrels') },
      { id: 'filter', text: 'Build the water filter station', check: (s) => built(s, 'filter_station') },
      { id: 'safe_20', text: 'Have 20 gal of safe water in store', check: (s) => (s.home?.safeGal || 0) >= 20 },
      { id: 'tablets', text: 'Store 3 packs of water tablets for later', check: (s) => stored(s, 'water_tablets') >= 3 },
    ],
    epilogue: {
      none: 'The taps went dry, and the rain ran into the drains.',
      some: 'A barrel by a house in Aloha still fills with rain.',
      all: 'Rain still turns into clean water at a house in Aloha, with nobody to turn a tap.',
    },
  },
  {
    id: 'radio', kind: 'repair', title: 'The radio',
    why: 'Nobody answers. You keep the radio working anyway.',
    steps: [
      { id: 'radio_home', text: 'Bring a radio home', check: (s) => stored(s, 'radio') >= 1 },
      { id: 'radio_parts', text: 'Store wiring and hardware parts for repairs', check: (s) => stored(s, 'wiring') >= 1 && stored(s, 'hardware_parts') >= 1 },
      { id: 'radio_power', text: 'Build LED lights on the battery (the radio runs on it too)', check: (s) => built(s, 'led_lights') },
      { id: 'radio_batteries', text: 'Store 4 sets of batteries for the radio', check: (s) => stored(s, 'batteries') >= 4 },
    ],
    epilogue: {
      none: 'The air was only static, on every band.',
      some: 'A radio in Aloha was switched on each evening for a while.',
      all: 'A radio in Aloha was kept working to the end, listening to the static.',
    },
  },
  {
    id: 'city_atlas', kind: 'document', title: 'City atlas',
    why: 'Walk it and mark it: what is left, and where.',
    steps: [
      { id: 'miles_10', text: 'Walk 10 miles', check: (s) => (s.stats?.miles || 0) >= 10 },
      { id: 'places_10', text: 'Search 10 places', check: (s) => (s.stats?.placesSearched || 0) >= 10 },
      { id: 'map_carried', text: 'Keep a paper map with you to mark', check: (s) => (s.carried?.paper_map || 0) >= 1 || stored(s, 'paper_map') >= 1 },
      { id: 'miles_50', text: 'Walk 50 miles', check: (s) => (s.stats?.miles || 0) >= 50 },
      { id: 'places_40', text: 'Search 40 places', check: (s) => (s.stats?.placesSearched || 0) >= 40 },
      { id: 'houses_20', text: 'Search 20 houses', check: (s) => (s.stats?.housesSearched || 0) >= 20 },
    ],
    epilogue: {
      none: 'Nobody knew any more which stores still had food.',
      some: 'A paper map in Aloha has marks on it: searched, empty, water here.',
      all: 'A worn paper map in Aloha shows every store, every road, and what was left in each.',
    },
  },
  {
    id: 'weather_record', kind: 'document', title: 'Weather record',
    why: 'Write down every day. Someone may need to know the seasons here.',
    steps: [
      { id: 'days_14', text: 'Keep the record for 14 days', check: (s) => dayNow(s) >= 14 },
      { id: 'days_30', text: 'Keep the record for 30 days', check: (s) => dayNow(s) >= 30 },
      { id: 'first_snow', text: 'Live through a day of snow', check: (s) => s.weather?.type === 'snow' },
      { id: 'days_90', text: 'Keep the record for 90 days', check: (s) => dayNow(s) >= 90 },
      { id: 'days_365', text: 'Keep the record for a full year', check: (s) => dayNow(s) >= 365 },
    ],
    epilogue: {
      none: 'Nobody wrote down the weather any more.',
      some: 'A notebook in Aloha lists the weather, day by day, for a season.',
      all: 'A shelf of notebooks in Aloha holds a full year of weather, one line a day.',
    },
  },
  {
    id: 'time_capsule', kind: 'leave', title: 'Time capsule',
    why: 'A box of small things that say how people lived.',
    steps: [
      { id: 'tc_bin', text: 'Bring home a metal bin to seal it in', check: (s) => stored(s, 'metal_bin') >= 1 },
      { id: 'tc_comfort', text: 'Keep a comfort item for it', check: (s) => stored(s, 'comfort') >= 1 },
      { id: 'tc_book', text: 'Keep a book for it', check: (s) => storedAny(s, BOOKS) >= 1 },
      { id: 'tc_radio', text: 'Keep a radio for it', check: (s) => stored(s, 'radio') >= 1 },
      { id: 'tc_map', text: 'Keep a paper map for it', check: (s) => stored(s, 'paper_map') >= 1 },
      { id: 'tc_seal', text: 'Store plastic sheet and duct tape to seal it', check: (s) => stored(s, 'plastic_sheet') >= 1 && stored(s, 'duct_tape') >= 1 },
    ],
    epilogue: {
      none: 'The small things of daily life were lost with everything else.',
      some: 'A metal bin in Aloha holds a few small things from before.',
      all: 'A sealed bin in Aloha holds a toy, a map, a book and a radio, for someone to open one day.',
    },
  },
  {
    id: 'message_wall', kind: 'leave', title: 'Signs for later',
    why: 'Practical advice, painted large, for anyone who comes later.',
    steps: [
      { id: 'mw_tools', text: 'Keep a toolkit and scrap wood for sign boards', check: (s) => stored(s, 'toolkit') >= 1 && stored(s, 'scrap_wood') >= 2 },
      { id: 'mw_water', text: 'Know where water is: build the filter station', check: (s) => built(s, 'filter_station') },
      { id: 'mw_places', text: 'Search 20 places, so the signs say what is left', check: (s) => (s.stats?.placesSearched || 0) >= 20 },
      { id: 'mw_miles', text: 'Walk 30 miles to put the signs up across the city', check: (s) => (s.stats?.miles || 0) >= 30 },
    ],
    epilogue: {
      none: 'The streets gave no advice to anyone.',
      some: 'A few hand-painted signs say where to find water.',
      all: 'Painted signs across the west side say where water is, which roads are open and which stores still have food.',
    },
  },
];
