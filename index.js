// function initialize() {
//   const url= "http://localhost:3000/flutrack?s=feverANDcoughORfever"
//   var results=[]
//     $.getJSON(url, function(data){
//       results = data.map(function(d){
//         return [d.longitude,d.latitude]
//       })
//     })
//             var locations = results
//
//             var map = new google.maps.Map(document.getElementById('map'), {
//                 zoom: 11,
//                 center: new google.maps.LatLng(1.37265, 103.893658),
//                 mapTypeId: google.maps.MapTypeId.ROADMAP
//             });
//
//             var infowindow = new google.maps.InfoWindow();
//
//             var marker, i;
//
//             for (i = 0; i < locations.length; i++) {
//                 marker = new google.maps.Marker({
//                     position: new google.maps.LatLng(locations[i][0], locations[i][1]),
//                     map: map
//                 });
//             }
//         }
//         google.maps.event.addDomListener(window, 'load', initialize);
//
//   // function getAPI(){
//   //   const url= "http://localhost:3000/flutrack?s=feverANDcoughORfever"
//   //   $.getJSON(url, function(data){
//   //     var results = []
//   //     results = data.map(function(d){
//   //       return [d.longitude,d.latitude]
//   //     })
//   //
//   //     var map = new google.maps.Map(document.getElementById('map'), {
//   //               zoom: 11,
//   //               center: new google.maps.LatLng(1.37265, 103.893658),
//   //               mapTypeId: google.maps.MapTypeId.ROADMAP
//   //           });
//   //
//   //     var infowindow = new google.maps.InfoWindow();
//   //
//   //     var marker, i;
//   //
//   //     for (i = 0; i < results.length; i++) {
//   //         marker = new google.maps.Marker({
//   //             position: new google.maps.LatLng(results[i][0], results[i][1]),
//   //             map: map
//   //         });
//   //       }
//   //     google.maps.event.addDomListener(window, 'load', initialize);
//   //     debugger
//   //     console.log(results)
//   //     $("#displayData").html(results)
//   //
//   //   })
//   // }
