
// sets up my mapbox access token so they can track my usage of their basemap services
mapboxgl.accessToken = 'pk.eyJ1IjoibWFyemlwYW45NCIsImEiOiJjanVrOTdwaDQxdG42NDRwNGFmbzY5dWdtIn0.4lVQxPc89QYzHas2IIWmew';

var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-73.98, 40.70],
  zoom: 9.5,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

studentPizzaShops.forEach(function(StudentData) {

  var thisStudentsColor = 'steelblue';
  if (StudentData.nyuprogram === 'wagner') thisStudentsColor = 'orange';
  if (StudentData.nyuprogram === 'cusp') thisStudentsColor = 'purple';
  if (StudentData.nyuprogram === 'adjunct') thisStudentsColor = 'green';
  if (StudentData.nyuprogram === 'global liberal studies') thisStudentsColor = 'yellow';

  new mapboxgl.Marker({
    color: thisStudentsColor,
  })
    .setLngLat([StudentData.lng, StudentData.lat])
    .setPopup(new mapboxgl.Popup({ offset: 10 })
    .setText(`${StudentData.name} says their favorite pizza shop is ${StudentData.favoritepizzashop}`))
    .addTo(map);
});
