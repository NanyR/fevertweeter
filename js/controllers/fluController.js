class FluController{

  constructor(fluData, $map){
    this.$map=$map
    this.fluData=fluData

  }

}

function heatMap(){
  const url= "http://localhost:3000/flutrack"
  var locations=[]

  $.getJSON(url).then(function(data){
    locations= data.map((d)=>{
      return [d.latitude, d.longitude, d.tweet_text]
      })
    return locations
  }).then(function(locations){
    heatmap = new google.maps.visualization.HeatmapLayer({
      data: getPoints(locations),
      radius: 35,
      map: map
    });
  })
}
