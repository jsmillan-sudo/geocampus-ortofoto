# GeoCampus UCEVA - Ortofoto XYZ Tiles

Capa generada para uso directo en Leaflet.

## Estructura

```text
tiles/{z}/{x}/{y}.png
```

## Configuración Leaflet

```javascript
const ortofotoUCEVA = L.tileLayer('tiles/{z}/{x}/{y}.png', {
  minZoom: 17,
  maxZoom: 19,
  bounds: [[4.0605383589760695, -76.20785342456206], [4.069913267899691, -76.19606967217447]],
  attribution: 'UCEVA - GeoCampus UCEVA',
  tms: false,
  noWrap: true
});

const baseMaps = {
  'OpenStreetMap': osm,
  'Satélite Esri': esriSat,
  'Ortofoto UCEVA': ortofotoUCEVA
};

L.control.layers(baseMaps, overlays).addTo(map);
```

## Centro recomendado

```javascript
map.setView([4.0652258134378805, -76.20196154836827], 19);
```

## Resumen técnico

- Esquema: XYZ, compatible con Leaflet sin plugin adicional.
- Zooms: 17 a 19.
- Total de teselas: 367.
- Bounds WGS84: [-76.20785342456206, 4.0605383589760695, -76.19606967217447, 4.069913267899691].
- Formato entregado: PNG, según la ruta solicitada `tiles/{z}/{x}/{y}.png`.

## Nota arquitectónica

Para producción institucional, aloje esta carpeta `tiles` en un servidor estático, bucket público o hosting con caché HTTP. Google Apps Script puede controlar la aplicación, pero las teselas deben servirse desde almacenamiento estático para evitar límites y latencia.
