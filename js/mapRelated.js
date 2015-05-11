var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

//Minhas variáveis
var clientLatitude;
var clientLongitude;
var localAtual;
var casa=new google.maps.LatLng(-19.821023, -43.971364);
var trabalho= new google.maps.LatLng(-19.874194, -43.976312);


function initialize() {
    //descobre meu local
    localAtual=getMeuLocal();
    console.log(localAtual);
    var options = {
    zoom: 8,
    center: localAtual,
    mapTypeControl: false,
    navigationControlOptions: {
    	style: google.maps.NavigationControlStyle.SMALL
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
    map = new google.maps.Map(document.getElementById("mapDiv"), options);

    var marker = new google.maps.Marker({
      position: localAtual,
      map: map,
      title:"Local Destino Somente"
    });
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(printRota);
    }    
}

function getMeuLocal(){
    var dia= new Date().getDay();
    //fim de semana é sempre em casa
    if(dia==0||dia==6){
        return casa;
    }
    var hora=new Date().getHours();
    if(hora<20&&hora>=14){
        return trabalho;
    }
    return casa;
}

function printRota(position) {
    console.log('entrou');
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
    var clientCoords = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

    
    console.log(localAtual);
    console.log(clientCoords);
    
    var mapOptions = {
        origin: clientCoords,
        destination: localAtual,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(mapOptions, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

function printRotaAntiga(){
    navigator.geolocation.getCurrentPosition(function(position){
        clientLongitude = position.coords.longitude
        clientLatitude = position.coords.latitude;
    });
    var origemRota = new google.maps.LatLng(clientLatitude,clientLongitude);
    var mapOptions = {
        origin: origemRota,
        destination: localAtual,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(mapOptions, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}


//carrega o mapa após o carregamento da página
google.maps.event.addDomListener(window, 'load', initialize);
