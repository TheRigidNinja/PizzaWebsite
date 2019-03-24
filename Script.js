
window.onload = function(){
    var myLatLng = {lat: -37.7518787, lng:145.0094587};
    var mapProp= {
      center:new google.maps.LatLng(myLatLng),
      panControl: false,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      overviewMapControl: true,
      center: myLatLng,
      zoom:13,
    };
    var map = new google.maps.Map(document.querySelector(".map"),mapProp);

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
      });
}
