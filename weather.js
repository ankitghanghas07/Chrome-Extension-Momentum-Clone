const apiKey = '34ef6fed918a887b4fabcd95027ccd13';

function getLocation(callback) {
  if (!navigator.geolocation) {
    console.log("Browser don't give access to location ");
   } else {
        function success(position) {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            callback(lat, long);
        }

        function error(){
            console.log("unable to find location");
        }

        navigator.geolocation.getCurrentPosition(success, error);
    }
}

getLocation(function(lat, long){
    const apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&exclude=minutely,hourly&units=metric`;
    fetch(apiurl)
        .then(response => {return response.json();})
        .then(data => {
            console.log(data);
            document.getElementById("temp").innerHTML = data.current.temp;
            // console.log(data.current.weather[1]);
            document.getElementById("weather-icon").src = 'http://openweathermap.org/img/wn/' +  data.current.weather[0].icon + '.png';
        });
});



