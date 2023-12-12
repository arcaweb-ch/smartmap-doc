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
    container: '#map_container', // DOM container element
    merge_data: statdata, // Merge custom data with map data
    onselect: function (map, commune) { // Called when a commune is selected

        // Log commune data to console
        console.log(commune);

        // Create popup content
        let popupcontent = '<b>Comune di ' + commune.name + '</b>';
        popupcontent += '<br>Distretto di ' + commune.district.name + '  // ' + commune.zone.name;
        popupcontent += '<br>Altitudine: ' + commune.Altitudine + ' m';
        popupcontent += '<br>Abitanti: ' + commune.Popolazione;

        // Show popup
        showPopup(popupcontent);
    },
    onzoomout: function (map) { // Called when map is zoomed out

        // Hide popup
        hidePopup();

    },
});

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