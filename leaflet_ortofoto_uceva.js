// GeoCampus UCEVA - Capa Ortofoto XYZ
const ortofotoUCEVA = L.tileLayer('tiles/{z}/{x}/{y}.png', {
  minZoom: 17,
  maxZoom: 19,
  bounds: [[4.0605383589760695, -76.20785342456206], [4.069913267899691, -76.19606967217447]],
  attribution: 'UCEVA - GeoCampus UCEVA',
  tms: false,
  noWrap: true,
  maxNativeZoom: 19
});

// Ejemplo de control de capas
const baseMaps = {
  'OpenStreetMap': osm,
  'Satélite Esri': esriSat,
  'Ortofoto UCEVA': ortofotoUCEVA
};

L.control.layers(baseMaps, overlays, { collapsed: false }).addTo(map);
