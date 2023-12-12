# smartmap-doc
 Arcaweb SmartMap docs and demo

# Licensing
See license.txt

# Working Demo url
https://www.arcaweb.ch/smartmap/


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
    container: '#map_container', // Container DOM selector
});
```

# Options and events
## Init map instance

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

# Methods
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
