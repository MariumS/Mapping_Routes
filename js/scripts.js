mapboxgl.accessToken = 'pk.eyJ1IjoibWFyemlwYW45NCIsImEiOiJjanVrOTdwaDQxdG42NDRwNGFmbzY5dWdtIn0.4lVQxPc89QYzHas2IIWmew';



var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/outdoors-v11',
  center: [0, 0],
  zoom: 1.5
});

map.addControl(new mapboxgl.NavigationControl());

travel_data.forEach(function(travels) {

new mapboxgl.Marker({
  color: 'blue',
})
  .setLngLat([travels.Lon, travels.Lat])
  .setPopup(new mapboxgl.Popup({ offset: 10 })
  .setText(`In ${travels.Location} David Fairchild ${travels.Pop_Up}`))
  .addTo(map);
});
