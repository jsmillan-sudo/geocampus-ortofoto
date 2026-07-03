const boundsOrtofotoUceva2026 = [[4.061115447267966, -76.20701537414645], [4.067673752489288, -76.19705661330963]];

const ortofotoUceva2026 = L.tileLayer('https://jsmillan-sudo.github.io/geocampus-ortofoto/ortofoto_uceva_2026/{z}/{x}/{y}.png', {
  minZoom: 16,
  maxZoom: 21,
  bounds: boundsOrtofotoUceva2026,
  tms: false,
  attribution: 'Ortofoto UCEVA 2026'
});
