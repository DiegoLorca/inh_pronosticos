window.jQuery || document.write('<script src="/docs/4.4/assets/js/vendor/jquery.slim.min.js"><\/script>')

function iniciarMap(){
  var coord = { lat: -33.0247691, lng: -71.634644}
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: coord
  });

  var marker = new google.maps.marker({
    position: coord,
    map: map
  });
}
