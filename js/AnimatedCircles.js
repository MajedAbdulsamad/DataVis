// Provide your access token
L.mapbox.accessToken = 'pk.eyJ1IjoibWFqZWRhYmR1bHNhbWFkIiwiYSI6ImNpenE3eDJtMjAxNjUzM240aGd1Y2dydmgifQ.t_Lg2vwlVY6dBifgfRSBTg';
// Create a map in the div #map
var map = L.mapbox.map('map', 'piratefsh.nknilk08');

// Create a divicon
var icon = L.divIcon({
  iconSize: [30, 30],
  iconAnchor: [15, 15],
  popupAnchor: [10, 0],
  shadowSize: [0, 0],
  className: 'animated-icon my-icon',
  html: ''
});

//marker latlng
var ll = L.latLng(4.7110, -74.0721)
// CHANGE THE LOCATION HERE FOR THE MARKER

// create marker
var marker = L.marker(ll, {
  icon: icon,
  title: 'INCIDENT'
})

marker.addTo(map)

// Create a divicon
var icon2 = L.divIcon({
  iconSize: [50, 50],
  iconAnchor: [15, 15],
  popupAnchor: [10, 0],
  shadowSize: [0, 0],
  className: 'animated-icon my-icon',
  html: ''
});

//marker latlng
var ll = L.latLng(4.7000, -74.0700)
// CHANGE THE LOCATION HERE FOR THE MARKER

// create marker
var marker = L.marker(ll, {
  icon: icon2,
  title: 'INCIDENT'
})

marker.addTo(map)

// do stuff after marker has been added
marker.on('add', function(){

  doAnimations()
  // putting this in setInterval so it runs forever
  setInterval(function(){
    doAnimations()
  }, 5000)
})
  
function doAnimations(){
   var myIcon = document.querySelector('.my-icon')
  
   setTimeout(function(){
      myIcon.style.width = '50px'
      myIcon.style.height = '50px'
      myIcon.style.marginLeft = '-25px'
      myIcon.style.marginTop = '-25px'
    }, 1000)

    setTimeout(function(){
      myIcon.style.borderRadius = '50%'
      myIcon.style.backgroundColor = "#ffffff"
    }, 2000)

    setTimeout(function(){
      myIcon.style.width = '30px'
      myIcon.style.height = '30px'
      myIcon.style.borderRadius = '50%'
      myIcon.style.marginLeft = '-15px'
      myIcon.style.marginTop = '-15px'
    }, 3000)
}