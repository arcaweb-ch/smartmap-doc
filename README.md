# smartmap-doc
 Arcaweb SmartMap docs and demo

# Licensing
See license.txt

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

# Methods
```js
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
fillZones()  // Fill zones according to json data
fillZone(id, color)  // Fill zone by id
fillRegion(id, color)  // Fill region by id
fillDistrict(id, color)  // Fill district by id
unFillAll()  // Unfill all communes
unFillCommune(id)  // Unfill commune by id
fillCommune(id, color)  // Fill commune by id
selectCommune(id)  // Select commune by id
hoverCommune(id)  // Hover commune by id
unhoverCommune(id)  // Unhover commune by id
zoomOut()  // Zoom out
zoomToCommune(id)  // Zoom to commune by id
zoomToPath(id)  // Zoom to path by id
setLegend(legend)  // Set legend
clearLegend()  // Clear legend
addLegendItem(color, text)  // Add legend item
setCommuneText(id, text, append)  // Set commune text
resetCommuneTexts()  // Reset all commune texts
getBBox(id)  // Get bounding box of element
showLegend()  // Show legend
hideLegend()  // Hide legend
initZoom()  // Init zoom
initSvg()  // Init svg
initData()  // Init data
initElements()  // Init elements
handleZoom(event)  // Handle zoom
unselectAll()  // Unselect all
selectPath(id)  // Select path by id
hoverPath(id)  // Hover path by id
unHoverAll()  // Unhover all
mergeData(merge_data)  // Merge data with existing data
getCommuneFull(commune)  // Get commune with district, region and zone
```