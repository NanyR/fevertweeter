$(()=>{
  let currentLocationPromise=getLocation()
  let mapPromise = currentLocationPromise.then((currentLocation)=>{
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: currentLocation,
      mapTypeId: 'satellite'
    })
      return map
  })
  let fluPromise = FluTracker.all()
  Promise.all([mapPromise, fluPromise, currentLocationPromise])
  .then(([map, fluData, currentLocation]) => {
    let $tweets = $('#tweets')
    let $map = map
    let fluController = new FluController(fluData, $map, $tweets, currentLocation)
  })

})//end document get ready


  function getLocation(){
    return new Promise(function(resolve, reject) {
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
          let uluru = {lat:position.coords.latitude , lng:position.coords.longitude}
          resolve(uluru)
        }, function(decline){
          let uluru = {lat:40.705123, lng:-74.014081}
          resolve(uluru)
        })
      }
    })
  }
