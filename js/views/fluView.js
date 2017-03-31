class FluView {
  static renderMap($map, locations, points, $tweets) {
    $tweets.html(this.tweetTemplate(locations))
    let heatmap = new google.maps.visualization.HeatmapLayer({
      data: points,
      radius: 35,
      map: $map
    })
    var infowindow = new google.maps.InfoWindow({});

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
      let tweetWidget=`<div class='single-tweet'>
        <h3>${tweet[3]}</h3>
        <p>${tweet[4]} miles away</p>
        <p>${tweet[2]}</p></div>`;
        return tweetWidget
    })
    return showtweets.join('')
  }
}
