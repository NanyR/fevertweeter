$(()=>{
  //get api

// initiate map
  //const map = initMap();
  let mapPromise = initMap()
  let fluPromise = FluTracker.all()
  Promise.all([mapPromise, fluPromise])
  .then(([map, fluData]) => {
    let $map = map
    let fluController = new FluController(fluData, $map)
  })

})


  function initMap(){
    return new Promise(function(resolve, reject) {
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
          let uluru = {lat:position.coords.latitude , lng:position.coords.longitude}
          let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: uluru,
            mapTypeId: 'satellite'
          })
          resolve(map)
        })
      }
    })
  }