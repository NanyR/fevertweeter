class FluView {
  static renderMap($map, locations, points, $tweets, currentLocation) {
    $tweets.html(this.tweetTemplate(locations))
    let heatmap = new google.maps.visualization.HeatmapLayer({
      data: points,
      radius: 35,
      map: $map
    })
    var infowindow = new google.maps.InfoWindow({});
    var image = {
        url: 'http://www.iconninja.com/files/978/634/410/map-point-marker-pin-location-pointer-place-icon.png', // image is 512 x 512
        scaledSize : new google.maps.Size(40, 48)
    };
    let current=new google.maps.Marker({
      position: new google.maps.LatLng(currentLocation.lat, currentLocation.lng),
      icon: image,
      opacity: 1,
      map: $map
    })

    locations.forEach(function(location) {
            let marker = new google.maps.Marker({
            position: new google.maps.LatLng(location[0], location[1]),
            title: location[2],
            opacity: 0,
            map: $map
        });
        google.maps.event.addListener(marker,'mouseover', function() {
            infowindow.setContent(marker["title"])
            infowindow.open($map, this);
        });

        google.maps.event.addListener(marker,'mouseout', function() {
            infowindow.close();
        });
      })
  }

  static tweetTemplate(tweets){
    let sortTweets= tweets.sort((a,b)=>{
      return a[4]-b[4]
    })

    let showtweets=sortTweets.map((tweet)=>{
      let date = new Date(tweet[5] * 1000);
      let stringdate=String(date).substring(0,15)
      let tweetWidget=`<div class='single-tweet'>
        <h3>${tweet[3]}</h3>
        <p>${tweet[4]} miles away, on ${stringdate}</p>
        <p>${tweet[2]}</p></div>`;
        return tweetWidget
    })
    return showtweets.join('')
  }
}
