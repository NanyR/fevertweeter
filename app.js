$(()=>{
  //get api

// initiate map
  const map = initMap();

  FluTracker.all().then((fluData)=>{
    let $map = map
    let fluController = new FluController(fluData, $map)
  })

  function initMap(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        let uluru = {lat:position.coords.latitude , lng:position.coords.longitude}
        let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru,
          mapTypeId: 'satellite'
        })
        return map
      })
    }
  }
})
