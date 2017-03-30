class FluController{

  constructor(fluData, $map, $tweets){
    this.$map = $map
    this.$tweets=$tweets
    this.locations = this.getLocations(fluData)
    this.points = this.getPoints(this.locations)
    this.render()
  }

  getLocations(data) {
    let locations = data.map((d)=>{
      return [d.latitude, d.longitude, d.tweet_text, d.user_name]
      })
    return locations
  }

  getPoints(coords){
    var coordinates = coords.map((loc)=>{
      return new google.maps.LatLng(loc[0], loc[1])
    })
    return coordinates
  }

  render() {
    FluView.renderMap(this.$map, this.locations, this.points, this.$tweets)
  }
}
