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
    getCurrentWeatherData(position);
}


//Previsão de Tempo

//current weather URL
var BASE_URL = "http://api.openweathermap.org/data/2.5/weather?";
var UrlParams = "&lang=pt&units=metric&type=accurate&mode=json";
// Image base URL
var IMG_URL = "http://openweathermap.org/img/w/";

// get the Current Weather for User location
function getCurrentWeatherData(position) {
	// Build the OpenAPI URL for current Weather
	var WeatherNowAPIurl = BASE_URL + "lat=" + position.coords.latitude
			+ "&lon=" + position.coords.longitude + UrlParams;
	// OpenWeather API call for Current Weather
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var JSONobj = JSON.parse(xmlhttp.responseText);
			Parse(JSONobj);
		}
	}
	xmlhttp.open("GET", WeatherNowAPIurl, true);
	xmlhttp.send();

}
// display the current weather and location
function Parse(obj) {

	// current weather
	document.getElementById("weatherNow").innerHTML = "<img src='" + IMG_URL
			+ obj.weather[0].icon + ".png'> " + " Condição: "
			+ obj.weather[0].description + " | " + "Temp: " + obj.main.temp
			+ " C | " + "Vento: "
			+ (3.6*obj.wind.speed).toFixed(2).replace(/0+$/,'') + " km/s";
    
    if(obj.weather[0].id<=200&&obj.weather[0].id>=321){
        //condições extremas
        document.getElementById("mapTitle").innerHTML = "Não venha me encontrar!!";
        document.getElementById("mapSubtitle").innerHTML = "Esse é o caminho, mas as condições climáticas estão perigosas hoje, e nem todo mundo é sayajin pra sair assim...";
    }else{
        if(obj.weather[0].id<=200&&obj.weather[0].id>=232){
        //Tempestade perigosa
            document.getElementById("mapTitle").innerHTML = "Estou aqui!";
        document.getElementById("mapSubtitle").innerHTML = "Se vier me econtrar, tenha cuidado: Tempestade lá fora!";
        }else{
            if(obj.weather[0].id<=300&&obj.weather[0].id>=531){
                //chuva
                document.getElementById("mapTitle").innerHTML = "Que tal um café nessa chuva?";
        document.getElementById("mapSubtitle").innerHTML = "Afinal, ninguém é feito de açúcar (falar é fácil, pra quem sabe teleportar, hehe)";
            }else{
                if(obj.weather[0].id<=600&&obj.weather[0].id>=622){
                    //neve
                    document.getElementById("mapTitle").innerHTML = "Venha tomar um chocolate quente comigo!";
        document.getElementById("mapSubtitle").innerHTML = "Nada melhor com essa neve toda lá fora...";
                }else{
                    if(obj.main.temp<=22){
                        document.getElementById("mapSubtitle").innerHTML = "Mas traga um agasalho, está um pouco frio.";
                    }else{
                        document.getElementById("mapSubtitle").innerHTML = "Estou esperando você! :D";
                    }
                }
            }
        }
    }
    

}




//carrega o mapa após o carregamento da página
google.maps.event.addDomListener(window, 'load', initialize);
