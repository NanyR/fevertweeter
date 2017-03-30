$(()=>{
  let mapPromise = initMap()
  let fluPromise = FluTracker.all()
  Promise.all([mapPromise, fluPromise])
  .then(([map, fluData]) => {
    let $tweets = $('#tweets')
    let $map = map
    let fluController = new FluController(fluData, $map, $tweets)
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
        }, function(decline){
          let uluru = {lat:40.705123, lng:-74.014081}
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
