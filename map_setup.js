var map; // The map object

var mapSetup = {
  lat:  68.19256,
  long:  14.341949,
  initialZoom: 10
};

var kmlPath = "https://drive.google.com/file/d/0B3Ec8AG_cOW8UmU5bHlOaTkwdW8/view?usp=sharing";

function initMap() {
  
  var myOptions = {
    zoom: mapSetup.initialZoom,
    center: new google.maps.LatLng(mapSetup.lat, mapSetup.long),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };
   
  map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);

  var runLayer = new google.maps.KmlLayer({
    url: kmlPath,
    map: map
  });
}