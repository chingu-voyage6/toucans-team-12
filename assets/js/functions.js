function getWeatherData(url, callback){
    
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState ==  4 && xmlhttp.status == 200){
            let data = JSON.parse(xmlhttp.responseText);
            //console.log(data);
            callback(data);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
//get user location if allowed 
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        let long  = position.coords.longitude;
        let lat = position.coords.latitude;
        getWeatherData('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=2c044a28375a1ac42ebebf34784efa17', function(data){
            

            let ktemp = data.main.temp;
            let cityName = data.name;
            //console.log(cityName);
            let desc = data.weather[0].description;
            let icon = data.weather[0].icon;
            //console.log(icon);
            var iconURL = "http://openweathermap.org/img/w/" +icon+".png";
            //console.log(iconURL);
            
            function kToC (){
                cTemp = Math.round(ktemp - 273);
            }
            kToC(); //convert temp to celsius
        
            //for screen display
            let tempDisplay = document.getElementById("temp");
            let weatherDesc = document.getElementById("weather_description");
            let cityDisplay = document.getElementById("city");
            let weatherIcon = document.getElementById("icon");
            let weather = document.getElementById("weather");

            tempDisplay.innerHTML = cTemp;
            cityDisplay.innerHTML = cityName;

            weatherDesc.innerHTML = desc;

            weatherIcon.src = iconURL;

            weather.title = desc;
        })
    })
} 

