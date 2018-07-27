if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        let long  = position.coords.longitude;
        let lat = position.coords.latitude;

        console.log(lat);
        console.log(long);
        let api = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=2c044a28375a1ac42ebebf34784efa17';
            fetch(api)
                .then(response => response.json())
                .then(data => {
                    console.log(data) // Prints result from `response.json()` in getRequest
                    //console.log(data.name)
                    let cityName = data.name;
                    let desc = data.weather[0].description;
                    let ktemp = data.main.temp;
                    let icon = data.weather[0].icon;
                    let iconURL = "http://openweathermap.org/img/w/" +icon+".png";
                    let tempDisplay = document.getElementById("temp");
                    let cityDisplay = document.getElementById("city");
                    let weatherIcon = document.getElementById("icon");
                    let weatherDescription = document.getElementById("desc");
                    let weather = document.getElementsByClassName("weather");


                    //console.log(icon);
                    //console.log(iconURL);
                    //console.log(api)

                    function kToC (){
                        cTemp = Math.round(ktemp - 273);
                    }
                    kToC();//converts temp to celsius
                

                    //for screen display
                    tempDisplay.innerHTML = cTemp;
                    cityDisplay.innerHTML = cityName;

                    weatherIcon.src = iconURL;
                    weatherDescription.innerHTML = desc;

                    weather[0].title = desc;
                        cityDisplay.innerHTML = cityName;
                    })
            .catch(error => console.error(error))      
    })
} 


