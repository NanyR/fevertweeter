$(()=>{
  //get api

// initiate map
  const map = initMap();

  FluTracker.all.then((fluData)=>{
    let $map = map
    let fluController = new FluController(fluData, $map)
  })
})
