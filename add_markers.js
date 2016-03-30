function infowindowOpen(infowindow, marker) {
  return function() {
    infowindow.open(map, marker);
  };
}

function infowindowClose(infowindow, marker) {
  return function () {
    infowindow.close(map, marker);
  };
}

function addMarker (markerPosition, markerTitle, markerCaption) {
  var marker = new google.maps.Marker({
      position: markerPosition,
      map: map, 
      title: markerTitle,
      //icon: "../icons/memorial.png"
  });

  var infowindow = new google.maps.InfoWindow({
    content: "<div class=infowindow><h1>" + markerTitle + "</h1><p>Caption: " + markerCaption + "</p></div>"});

  google.maps.event.addListener(marker, 'mouseover', infowindowOpen(infowindow, marker));
  google.maps.event.addListener(marker, 'mouseout', infowindowClose(infowindow, marker));
}