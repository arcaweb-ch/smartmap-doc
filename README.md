# Arcaweb SmartMap docs and demo

Quickly integrate interactive maps with zoom and pan functionalities on desktop and mobile web apps.

## Features

All features are demonstrated in [demo](https://www.arcaweb.ch/smartmap/) code source:

- SVG vector maps
- Fully responsive and mobile capable
- Smooth color changes and zoom transitions
- Automatic text visibility based on zoom
- Automatic zoom to selection
- Automatic mapping of external JSON data
- Customizable callbacks on commune selection
- Ready-to-use complete map of Ticino (Switzerland)
- Up-to-date districts, regions, communes, custom zones
- Customizable legend items

![SmartMap](https://www.arcaweb.ch/smartmap/demo.png)

# Usage and requirements

## Add required JS

```html
<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
<script src="https://www.arcaweb.ch/smartmap/dist/1.0.0/smartmap.min.js"></script>
```

## Add required CSS

```html
<link rel="stylesheet" href="https://www.arcaweb.ch/smartmap/dist/1.0.0/smartmap.css">
```

## Init map instance

```js
var map = new SmartMap({
    container: '#map_container', // Container DOM selector (Required)
});
```

## Options and events

Init configuration parameters and callback events. Current available maps: ticino
```js
{
  map: "{String}", // - Map name (overrides svg and json parameters)
  maps_provider_url: "{String}", // - Maps provider url
  svg: "{String}", // - SVG string or url
  json: "{String}", // - JSON object or url
  container: "{String}", // - Container selector
  zoom: "{Boolean}", // - Enable zoom
  zoom_onselect: "{Boolean}", // - Zoom on select
  onselect: "{Function}", // - On select callback
  onzoomout: "{Function}", // - On zoom out callback
  oninit: "{Function}", // - On after init callback
}

```

## Class methods

```js

/*
* Get data
*/
getCommunes()  // Get all communes
getCommuneById(id)  // Get commune by id
getCommuneByName(name)  // Get commune by name
getCommunesByDistrict(district_id)  // Get communes by district id
getCommunesByRegion(region_id)  // Get communes by region id
getCommunesByZone(zone_id)  // Get communes by zone id
getDistricts()  // Get all districts
getDistrict(id)  // Get district by id
getRegions()  // Get all regions
getRegion(id)  // Get region by id
getZones()  // Get all zones
getZone(id)  // Get zone by id

/*
* Map interactions
*/
fillZone(id, color)  // Fill zone by id
fillRegion(id, color)  // Fill region by id
fillDistrict(id, color)  // Fill district by id
fillCommune(id, color)  // Fill commune by id
unFillAll()  // Unfill all communes
unFillCommune(id)  // Unfill commune by id
selectCommune(id)  // Select commune by id
zoomOut()  // Zoom out
zoomToCommune(id)  // Zoom to commune by id
setLegend(legend)  // Set legend
clearLegend()  // Clear legend
addLegendItem(color, text)  // Add legend item
setCommuneText(id, text, append)  // Set commune text
resetCommuneTexts()  // Reset all commune texts
unselectAll()  // Unselect all
```
