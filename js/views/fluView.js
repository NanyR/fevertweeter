class FluView {
  static renderMap($map, locations, points) {
    let heatmap = new google.maps.visualization.HeatmapLayer({
      data: points,
      radius: 35,
      map: $map

    })
    var infowindow = new google.maps.InfoWindow({});

    locations.forEach(function(location) {
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(location[0], location[1]),
            icon: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Ski_trail_rating_symbol_red_circle.png",
            title: location[2],
            map: map
        });
        google.maps.event.addListener(marker,'mouseover', function() {
            infowindow.setContent(marker["title"])
            infowindow.open(map, this);
        });

        google.maps.event.addListener(marker,'mouseout', function() {
            infowindow.close();
        });
      })
  }
}
