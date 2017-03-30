$(()=>{
  //get api

  FluTracker.all.then((fluData)=>{
    let $map=$('#map')
    let fluController= new FluController(fluData, $map)
  })
})


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
