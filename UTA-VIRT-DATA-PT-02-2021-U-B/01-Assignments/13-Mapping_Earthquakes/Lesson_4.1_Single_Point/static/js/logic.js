// Add console.log to check to see if our code is working.
console.log("working");

// We create the map object with options.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

//  Add a circle to the map.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// L.circle([34.0522, -118.2437], {
// 	radius: 100
// }).addTo(map);

//  Add a circle to the map
L.circleMarker([34.0522, -118.2437], {
	radius: 300,
	color: "black",
	fillColor: '#ffffa1'
}).addTo(map);


// We create the tile layer that will be the background of our map.
let darkmap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
darkmap.addTo(map);
