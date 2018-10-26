('use strict');
// var map;
// var service;
// var infowindow;

// function initMap() {
//   var mapCenter = new google.maps.LatLng(47.603230, -122.330276);
//   map = new google.maps.Map(document.getElementById('map'),{
//     center: mapCenter,
//     zoom: 15
//   });

// initMap();

//   var request = {
//       query: 'Space Needle',
//       fields: ['photos', 'formatted_address', 'name', 'rating', 'opening hours', 'geometry'],
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.findPlaceFromQuery(request, callback);
// }

// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       createMarker(results[i]);
//     }
//   }
// }




// var map = new google.maps.map(document.getElementById('map'), options);

// var marker = new google.maps.Marker({
//     position: {lat: 47.603230, lng: -122.330276},
//     map:map,
//     icon:

// });

// var infowindow = new google.maps.InfoWindow({
//     content:"Hello World!"
//     });

//     marker.addListener('click', function(){
//         infowindow.open(map, marker);
//     });

//   google.maps.event.addListener(marker, 'click', function() {
//     infowindow.open(map,marker);
//     });

































// // Initialize and add the map
// var initMap = function () {
//   // The location of Seattle
//   var seattle = {lat: 47.603230, lng: -122.330276};
//   // The map, centered at Seattle
//   var map = new google.maps.Map(
//     document.getElementById('map'), {zoom: 4, center: seattle});
//   // The marker, positioned at Seattle
//   var marker = new google.maps.Marker({position: seattle, map: map});
// };
// initMap();

