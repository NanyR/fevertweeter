class FluController{

  constructor(fluData, $map, $tweets, currentLocation){
    this.$map = $map
    this.$tweets=$tweets
    this.currentLocation = currentLocation
    this.locations = this.getLocations(fluData, currentLocation)
    this.points = this.getPoints(this.locations)
    this.render()
  }

  getLocations(data, currentLocation) {
    let locations = data.map((d)=>{
      let distance= this.getDistance(d.longitude, d.latitude, currentLocation.lng, currentLocation.lat)
      return [d.latitude, d.longitude, d.tweet_text, d.user_name, distance, d.tweet_date] //+distance
    })
    return locations
  }

  getDistance(lon1, lat1, lon2, lat2) {
    var R = 6371; // Radius of the earth in km
    var dLat = ((lat2-lat1)*Math.PI/180)  // Javascript functions in radians
    var dLon = ((lon2-lon1)*Math.PI/180)
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos((lat1*Math.PI/180)) * Math.cos((lat2*Math.PI/180)) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    var distance = d * 0.62137 // convert to miles
    return Math.round(distance * 100) / 100 //return rounded number
}

  getPoints(coords){
    var coordinates = coords.map((loc)=>{
      return new google.maps.LatLng(loc[0], loc[1])
    })
    return coordinates
  }

  render() {
    FluView.renderMap(this.$map, this.locations, this.points, this.$tweets, this.currentLocation)
  }
}
