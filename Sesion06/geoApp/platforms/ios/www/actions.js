$(function(){
    document.addEventListener("deviceready",function(){
        navigator.geolocation.getCurrentPosition(function(position) {
            initialize(position.coords.latitude, position.coords.longitude);
        };, function(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        });
    },false);
});

function initialize(lat,lng) {
    //Posición del mapa
    var latlng = new google.maps.LatLng(lat,lng);
    var myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
    //Marcador
    var marker = new google.maps.Marker({
        position: latlng, 
        map: map, 
        title:"Mi posición"
    });
}