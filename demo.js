/*
    * (c) 2021 by Arcaweb - Lorenzo Conti
    * SmartMap usage and demo
*/

// Custom data matching commune names
var statdata = [{ "name": "Acquarossa", "Altitudine": "630", "Popolazione": "1807" }, { "name": "Agno", "Altitudine": "284", "Popolazione": "4376" }, { "name": "Airolo", "Altitudine": "1159", "Popolazione": "1476" }, { "name": "Alto Malcantone", "Altitudine": "865", "Popolazione": "1380" }, { "name": "Aranno", "Altitudine": "733", "Popolazione": "354" }, { "name": "Arbedo-Castione", "Altitudine": "262", "Popolazione": "5024" }, { "name": "Arogno", "Altitudine": "604", "Popolazione": "986" }, { "name": "Ascona", "Altitudine": "203", "Popolazione": "5554" }, { "name": "Astano", "Altitudine": "636", "Popolazione": "294" }, { "name": "Avegno Gordevio", "Altitudine": "337", "Popolazione": "1516" }, { "name": "Balerna", "Altitudine": "297", "Popolazione": "3240" }, { "name": "Bedano", "Altitudine": "368", "Popolazione": "1538" }, { "name": "Bedigliora", "Altitudine": "618", "Popolazione": "604" }, { "name": "Bedretto", "Altitudine": "1412", "Popolazione": "102" }, { "name": "Bellinzona", "Altitudine": "238", "Popolazione": "43360" }, { "name": "Biasca", "Altitudine": "303", "Popolazione": "6094" }, { "name": "Bioggio", "Altitudine": "301", "Popolazione": "2689" }, { "name": "Bissone", "Altitudine": "283", "Popolazione": "948" }, { "name": "Blenio", "Altitudine": "897", "Popolazione": "1770" }, { "name": "Bodio", "Altitudine": "322", "Popolazione": "937" }, { "name": "Bosco/Gurin", "Altitudine": "1494", "Popolazione": "52" }, { "name": "Breggia", "Altitudine": "459", "Popolazione": "1926" }, { "name": "Brione sopra Minusio", "Altitudine": "440", "Popolazione": "480" }, { "name": "Brissago", "Altitudine": "215", "Popolazione": "1685" }, { "name": "Brusino Arsizio", "Altitudine": "292", "Popolazione": "451" }, { "name": "Cademario", "Altitudine": "772", "Popolazione": "761" }, { "name": "Cadempino", "Altitudine": "342", "Popolazione": "1521" }, { "name": "Cadenazzo", "Altitudine": "212", "Popolazione": "2998" }, { "name": "Campo (Vallemaggia)", "Altitudine": "1272", "Popolazione": "49" }, { "name": "Canobbio", "Altitudine": "400", "Popolazione": "2302" }, { "name": "Capriasca", "Altitudine": "524", "Popolazione": "6755" }, { "name": "Caslano", "Altitudine": "278", "Popolazione": "4327" }, { "name": "Castel San Pietro", "Altitudine": "449", "Popolazione": "2194" }, { "name": "Centovalli", "Altitudine": "368", "Popolazione": "1135" }, { "name": "Cerentino", "Altitudine": "996", "Popolazione": "40" }, { "name": "Cevio", "Altitudine": "419", "Popolazione": "1142" }, { "name": "Chiasso", "Altitudine": "238", "Popolazione": "7581" }, { "name": "Coldrerio", "Altitudine": "348", "Popolazione": "2867" }, { "name": "Collina d\u2019Oro", "Altitudine": "467", "Popolazione": "4604" }, { "name": "Comano", "Altitudine": "496", "Popolazione": "2084" }, { "name": "Cugnasco-Gerra", "Altitudine": "221", "Popolazione": "2780" }, { "name": "Cureglia", "Altitudine": "426", "Popolazione": "1434" }, { "name": "Curio", "Altitudine": "566", "Popolazione": "578" }, { "name": "Dalpe", "Altitudine": "1211", "Popolazione": "174" }, { "name": "Faido", "Altitudine": "715", "Popolazione": "2823" }, { "name": "Gambarogno", "Altitudine": "215", "Popolazione": "5163" }, { "name": "Giornico", "Altitudine": "392", "Popolazione": "806" }, { "name": "Gordola", "Altitudine": "238", "Popolazione": "4650" }, { "name": "Grancia", "Altitudine": "329", "Popolazione": "477" }, { "name": "Gravesano", "Altitudine": "378", "Popolazione": "1359" }, { "name": "Isone", "Altitudine": "747", "Popolazione": "395" }, { "name": "Lamone", "Altitudine": "326", "Popolazione": "1694" }, { "name": "Lavertezzo", "Altitudine": "281", "Popolazione": "1245" }, { "name": "Lavizzara", "Altitudine": "700", "Popolazione": "500" }, { "name": "Linescio", "Altitudine": "669", "Popolazione": "42" }, { "name": "Locarno", "Altitudine": "199", "Popolazione": "15728" }, { "name": "Losone", "Altitudine": "231", "Popolazione": "6647" }, { "name": "Lugano", "Altitudine": "276", "Popolazione": "62315" }, { "name": "Lumino", "Altitudine": "266", "Popolazione": "1587" }, { "name": "Maggia", "Altitudine": "339", "Popolazione": "2611" }, { "name": "Magliaso", "Altitudine": "281", "Popolazione": "1600" }, { "name": "Manno", "Altitudine": "341", "Popolazione": "1290" }, { "name": "Massagno", "Altitudine": "382", "Popolazione": "6272" }, { "name": "Melide", "Altitudine": "280", "Popolazione": "1830" }, { "name": "Mendrisio", "Altitudine": "342", "Popolazione": "14902" }, { "name": "Mergoscia", "Altitudine": "667", "Popolazione": "201" }, { "name": "Mezzovico-Vira", "Altitudine": "436", "Popolazione": "1387" }, { "name": "Miglieglia", "Altitudine": "720", "Popolazione": "324" }, { "name": "Minusio", "Altitudine": "241", "Popolazione": "7356" }, { "name": "Monteceneri", "Altitudine": "533", "Popolazione": "4535" }, { "name": "Morbio Inferiore", "Altitudine": "341", "Popolazione": "4441" }, { "name": "Morcote", "Altitudine": "292", "Popolazione": "734" }, { "name": "Muralto", "Altitudine": "222", "Popolazione": "2604" }, { "name": "Muzzano", "Altitudine": "387", "Popolazione": "787" }, { "name": "Neggio", "Altitudine": "390", "Popolazione": "322" }, { "name": "Novaggio", "Altitudine": "645", "Popolazione": "821" }, { "name": "Novazzano", "Altitudine": "344", "Popolazione": "2338" }, { "name": "Onsernone", "Altitudine": "805", "Popolazione": "663" }, { "name": "Origlio", "Altitudine": "422", "Popolazione": "1497" }, { "name": "Orselina", "Altitudine": "450", "Popolazione": "706" }, { "name": "Paradiso", "Altitudine": "279", "Popolazione": "4368" }, { "name": "Personico", "Altitudine": "340", "Popolazione": "326" }, { "name": "Pollegio", "Altitudine": "298", "Popolazione": "800" }, { "name": "Ponte Capriasca", "Altitudine": "451", "Popolazione": "1871" }, { "name": "Porza", "Altitudine": "490", "Popolazione": "1547" }, { "name": "Prato (Leventina)", "Altitudine": "1052", "Popolazione": "388" }, { "name": "Pura", "Altitudine": "380", "Popolazione": "1346" }, { "name": "Quinto", "Altitudine": "1013", "Popolazione": "995" }, { "name": "Riva San Vitale", "Altitudine": "283", "Popolazione": "2626" }, { "name": "Riviera", "Altitudine": "272", "Popolazione": "4252" }, { "name": "Ronco sopra Ascona", "Altitudine": "372", "Popolazione": "550" }, { "name": "Sant\u2019Antonino", "Altitudine": "229", "Popolazione": "2542" }, { "name": "Savosa", "Altitudine": "425", "Popolazione": "2219" }, { "name": "Serravalle", "Altitudine": "375", "Popolazione": "2079" }, { "name": "Sorengo", "Altitudine": "370", "Popolazione": "1863" }, { "name": "Stabio", "Altitudine": "356", "Popolazione": "4491" }, { "name": "Tenero-Contra", "Altitudine": "221", "Popolazione": "3201" }, { "name": "Terre di Pedemonte", "Altitudine": "275", "Popolazione": "2627" }, { "name": "Torricella-Taverne", "Altitudine": "344", "Popolazione": "3072" }, { "name": "Tresa", "Altitudine": "331", "Popolazione": "3158" }, { "name": "Vacallo", "Altitudine": "361", "Popolazione": "3363" }, { "name": "Val Mara", "Altitudine": "290", "Popolazione": "2982" }, { "name": "Vernate", "Altitudine": "567", "Popolazione": "599" }, { "name": "Verzasca", "Altitudine": "757", "Popolazione": "799" }, { "name": "Vezia", "Altitudine": "373", "Popolazione": "1879" }, { "name": "Vico Morcote", "Altitudine": "448", "Popolazione": "422" }];

// Show popup
function showPopup(content) {
    document.getElementById('popup').innerHTML = content;
    document.getElementById('popup').classList.add('open');
}

// Hide popup
function hidePopup() {
    document.getElementById('popup').classList.remove('open');
}

// Create map instance
var map = new SmartMap({
    container: '#map_container', // DOM container element
    merge_data: statdata, // Merge custom data with map data
    onselect: function (map, commune) { // Called when a commune is selected

        // Log commune data to console
        console.log(commune);

        // Create popup content
        let popupcontent = '<b>Comune di ' + commune.name + '</b>';
        popupcontent += '<br>Distretto di ' + commune.district.name + ' - ' + commune.zone.name;
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

function resetMapData() {

    // Reset map texts to default values
    map.resetCommuneTexts();

    // Clear legend
    map.clearLegend();

    // Unselect previously selected commune
    map.unselectAll();

    // Zoom out to full map view
    map.zoomOut();

    // Unfill all commune colors
    map.unFillAll();

}

// Listen for popup click
document.getElementById('popup').addEventListener('click', () => {

    resetMapData();

});

// Listen for select change
document.getElementById('color-group-select').addEventListener('change', () => {

    // Reset map data
    resetMapData();

    let val = document.getElementById('color-group-select').value;

    if (val == 'none') {

        // Unfill all commune colors
        map.unFillAll();

    } else if (val == 'region') {

        // Get regions data
        let regions = map.getRegions();

        // Set legend (default "color" and "name" values are already set in map data)
        map.setLegend(regions);

        // Fill all regions
        regions.forEach(region => {

            map.fillRegion(region.id);

        });

    } else if (val == 'district') {

        // Get districts data
        let districts = map.getDistricts();

        // Set legend (default "color" and "name" values are already set in map data)
        map.setLegend(districts);

        // Fill all districts
        districts.forEach(district => {

            map.fillDistrict(district.id, district.color);

        });

    } else if (val == 'verzasca') {

        // Set fill colors to default
        map.unFillAll();

        // get commune by name
        let c = map.getCommuneByName('Verzasca');

        // Fill commune
        map.fillCommune(c.id, '#dfb56e');

        // Zoom to commune
        map.zoomToCommune(c.id);

        // Select commune
        map.selectCommune(c.id);


    } else if (val == 'zone') {

        // Get zones data
        let zones = map.getZones();

        // Set legend (default "color" and "name" values are already set in map data)
        map.setLegend(zones);

        // Fill all zones
        zones.forEach(zone => {

            map.fillZone(zone.id, zone.color);

        });

    } else if (val == 'green') {

        // Set random green colors to all communes
        map.getCommunes().forEach(c => {

            map.fillCommune(c.id, '#60a060' + Math.floor(Math.random() * 206 + 50).toString(16).padStart(2, '0'));

        });


    } else if (val == 'red') {

        // Set random red colors to all communes
        map.getCommunes().forEach(c => {

            map.fillCommune(c.id, '#a06060' + Math.floor(Math.random() * 206 + 50).toString(16).padStart(2, '0'));

        });

    } else if (val == 'blue') {

        // Set random blue colors to all communes
        map.getCommunes().forEach(c => {

            map.fillCommune(c.id, '#6060a0' + Math.floor(Math.random() * 206 + 50).toString(16).padStart(2, '0'));

        });

    } else if (val == 'random_gender') {

        // Apply custom legend        
        map.setLegend([
            { "name": "% Donne", "color": "hsl(280deg 80% 75%)" },
            { "name": "% Uomini", "color": "hsl(230deg 80% 75%)" }
        ]);

        // Set communes colors
        map.getCommunes().forEach(c => {

            let color = 'hsl(' + (Math.floor(Math.random() * 50) + 230) + 'deg 75% 75%)';
            map.fillCommune(c.id, color);

        });

    } else if (val == 'altitude') {

        // Create custom color palette and values
        let colors = [
            { "min": 1, "max": 200, "color": "#EBD4B8" },
            { "min": 201, "max": 400, "color": "#D3CABA" },
            { "min": 401, "max": 600, "color": "#BABFBB" },
            { "min": 601, "max": 800, "color": "#A2B5BD" },
            { "min": 801, "max": 1000, "color": "#89AABE" },
            { "min": 1001, "max": 1200, "color": "#71A0C0" },
            { "min": 1201, "max": 1400, "color": "#5895C1" },
            { "min": 1401, "max": 1600, "color": "#408BC3" }
        ]

        // Build custom legend
        let legend = [];

        colors.forEach(c => {
            legend.push({ "name": c.min + ' - ' + c.max + ' m', "color": c.color });
        });

        map.setLegend(legend);

        // Apply color and text to communes based on altitude data
        map.getCommunes().forEach(c => {

            let altitude = parseInt(c.Altitudine);
            let color = colors[0].color; // Default color

            colors.forEach(c => {
                if (altitude >= c.min && altitude <= c.max) {
                    color = c.color;
                }
            });

            // Fill commune
            map.fillCommune(c.id, color);

            // Set commune text
            map.setCommuneText(c.id, c.Altitudine + ' m');

        });

    } else if (val == 'population') {

        // Create custom color palette and values
        let colors = [
            { "min": 1, "max": 100, "color": "#C9E4CA" },
            { "min": 101, "max": 500, "color": "#A8D0B6" },
            { "min": 501, "max": 1000, "color": "#87BBA2" },
            { "min": 1001, "max": 5000, "color": "#6E9F97" },
            { "min": 5001, "max": 10000, "color": "#55828B" },
            { "min": 10001, "max": 20000, "color": "#487178" },
            { "min": 20001, "max": 50000, "color": "#3B6064" },
            { "min": 50001, "max": 70000, "color": "#364958" }
        ]

        // Build custom legend
        let legend = [];

        colors.forEach(c => {
            legend.push({ "name": c.min + ' - ' + c.max + ' ab.', "color": c.color });
        });

        map.setLegend(legend);

        // Apply color and text to communes based on population data
        map.getCommunes().forEach(c => {

            let population = parseInt(c.Popolazione);
            let color = colors[0].color;

            colors.forEach(c => {
                if (population >= c.min && population <= c.max) {
                    color = c.color;
                }
            });

            // Fill commune
            map.fillCommune(c.id, color);

            // Append commune text row
            map.setCommuneText(c.id, c.Popolazione + ' abitanti', true);

        });

    }
});
