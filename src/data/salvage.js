// Junk you can take apart for parts (research step 10).
// parts: item id -> amount (part units can be fractions: 0.25 of a roll of wire).
// tools: any one of these is needed. min: minutes with the tool (a toolkit is 25% faster).
// The parts feed home projects (wiring, hardware_parts, scrap_wood, pipe_fittings).
export const SALVAGE = {
  broken_radio: { parts: { wiring: 0.25, hardware_parts: 0.25 }, tools: ['multitool', 'toolkit', 'knife'], min: 15, what: 'wire and screws' },
  old_toaster: { parts: { wiring: 0.25, hardware_parts: 0.25 }, tools: ['multitool', 'toolkit'], min: 15, what: 'wire and screws' },
  desk_lamp: { parts: { wiring: 0.5 }, tools: ['multitool', 'toolkit', 'knife'], min: 10, what: 'wire' },
  extension_cord: { parts: { wiring: 0.5 }, tools: ['multitool', 'toolkit', 'knife'], min: 10, what: 'wire' },
  wooden_chair: { parts: { scrap_wood: 1, hardware_parts: 0.25 }, tools: ['toolkit', 'pry_bar'], min: 30, what: 'wood and screws' },
  garden_hose: { parts: { pipe_fittings: 0.5 }, tools: ['multitool', 'toolkit', 'knife'], min: 10, what: 'hose and fittings' },
  broken_bike: { parts: { hardware_parts: 0.5, pipe_fittings: 0.25, wiring: 0.25 }, tools: ['toolkit', 'multitool'], min: 30, what: 'screws, tube and cable' },
};
