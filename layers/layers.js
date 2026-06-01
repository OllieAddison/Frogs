var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Frog_census_1 = new ol.format.GeoJSON();
var features_Frog_census_1 = format_Frog_census_1.readFeatures(json_Frog_census_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frog_census_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frog_census_1.addFeatures(features_Frog_census_1);
var lyr_Frog_census_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frog_census_1, 
                style: style_Frog_census_1,
                popuplayertitle: 'Frog_census',
                interactive: true,
    title: 'Frog_census<br />\
    <img src="styles/legend/Frog_census_1_0.png" /> Alpine Whistling Tree Frog<br />\
    <img src="styles/legend/Frog_census_1_1.png" /> Brown Toadlet<br />\
    <img src="styles/legend/Frog_census_1_2.png" /> Common Spadefoot Toad<br />\
    <img src="styles/legend/Frog_census_1_3.png" /> Dendy\'s Toadlet<br />\
    <img src="styles/legend/Frog_census_1_4.png" /> Eastern Banjo Frog<br />\
    <img src="styles/legend/Frog_census_1_5.png" /> Eastern Common Froglet<br />\
    <img src="styles/legend/Frog_census_1_6.png" /> Eastern Dwarf Tree Frog<br />\
    <img src="styles/legend/Frog_census_1_7.png" /> Eastern Sign-bearing Froglet<br />\
    <img src="styles/legend/Frog_census_1_8.png" /> Growling grass frog<br />\
    <img src="styles/legend/Frog_census_1_9.png" /> Growling Grass Frog<br />\
    <img src="styles/legend/Frog_census_1_10.png" /> Peron\'s Tree Frog<br />\
    <img src="styles/legend/Frog_census_1_11.png" /> Peronâ€™s Tree Frog<br />\
    <img src="styles/legend/Frog_census_1_12.png" /> Plains Brown Tree Frog<br />\
    <img src="styles/legend/Frog_census_1_13.png" /> Red-groined Froglet<br />\
    <img src="styles/legend/Frog_census_1_14.png" /> Rocky River (Lesueur\'s) Frog<br />\
    <img src="styles/legend/Frog_census_1_15.png" /> Southern Brown Tree Frog<br />\
    <img src="styles/legend/Frog_census_1_16.png" /> Southern Leaf Green Tree Frog<br />\
    <img src="styles/legend/Frog_census_1_17.png" /> Southern Toadlet<br />\
    <img src="styles/legend/Frog_census_1_18.png" /> Spotted Marsh Frog<br />\
    <img src="styles/legend/Frog_census_1_19.png" /> Striped Marsh Frog<br />\
    <img src="styles/legend/Frog_census_1_20.png" /> Tasmanian Smooth Froglet<br />\
    <img src="styles/legend/Frog_census_1_21.png" /> Victorian Smooth Froglet<br />\
    <img src="styles/legend/Frog_census_1_22.png" /> Whistling Tree Frog<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Frog_census_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Frog_census_1];
lyr_Frog_census_1.set('fieldAliases', {'Unique_ID': 'Unique_ID', 'Date': 'Date', 'Time_Start': 'Time_Start', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type_of_ob': 'Type_of_ob', 'Scientific': 'Scientific', 'Common_nam': 'Common_nam', 'Number': 'Number', });
lyr_Frog_census_1.set('fieldImages', {'Unique_ID': 'TextEdit', 'Date': 'DateTime', 'Time_Start': 'DateTime', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type_of_ob': 'TextEdit', 'Scientific': 'TextEdit', 'Common_nam': 'TextEdit', 'Number': 'TextEdit', });
lyr_Frog_census_1.set('fieldLabels', {'Unique_ID': 'no label', 'Date': 'no label', 'Time_Start': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Type_of_ob': 'no label', 'Scientific': 'no label', 'Common_nam': 'inline label - always visible', 'Number': 'no label', });
lyr_Frog_census_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});