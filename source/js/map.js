var mapElement = document.getElementById("map");

if (mapElement) {
  var map ="";
  google.maps.event.addDomListener(window, "load", init);
  google.maps.event.addDomListener(window, "resize", m_res );
  function init() {
    var mapOptions = {
      zoom: 15,
      mapTypeControl: false,
      zoomControl: true,
      scrollwheel: false,
      zoomControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER},
      streetViewControl: false,
      center: new google.maps.LatLng(59.936287, 30.321047),
    };

    mapElement.classList.add("page-footer--map-loaded");
    map = new google.maps.Map(mapElement, mapOptions);
    var image = {
      url: "img/icon-map-marker.svg",
      size: new google.maps.Size(36, 36),
      scaledSize: new google.maps.Size(36, 36),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(18, 18)
    };

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(59.936287, 30.321047),
      map: map,
      optimized: false,
      icon: image
    });
    m_res();
  }

  function m_res(){
    google.maps.event.trigger(map, "resize");
    map.panTo(new google.maps.LatLng(59.936287, 30.321047));
  }
}
