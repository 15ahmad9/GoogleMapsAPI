function iniciarMap() {
  var coord = { lat: 31.963158, lng: 35.930359 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}