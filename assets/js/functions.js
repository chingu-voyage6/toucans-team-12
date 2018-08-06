// API Implementation for displaying current weather

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

// API Implementation for getting and displaying quotes


let xhr = new XMLHttpRequest();
xhr.responseType = "json"; // xhr.response will be parsed into a JSON object
xhr.open('GET', "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", true);
xhr.send();

xhr.onreadystatechange = processRequest;

const theQuote = document.querySelector('.the-quote');
const author = document.querySelector('.author');

function processRequest(e) {

    if (xhr.readyState == 4 && xhr.status == 200) {
        function stripHtmlTags(str) {
            if ((str === null) || (str === ''))
                return false;
            else
                str = str.toString();
            return str.replace(/<[^>]*>/g, '');
        }
        
        let quote = xhr.response[0].content;
        quote = stripHtmlTags(quote);
        theQuote.innerHTML = quote;
        const authorName = xhr.response[0].title;
        author.textContent = authorName;
        console.log(quote + " " + authorName); // no parsing needed
    }else{
        console.log(`There's an error with this response code ${xhr.status} `);
    }
}



// This Function Displays time

const timeDiv = document.querySelector('#time');
const greetings = document.querySelector('.greetings');

function startTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    // let seconds = today.getSeconds();
    minutes = checkTime(minutes);
    // seconds = checkTime(seconds);
    let format = "AM";
    let partOfTheDay = "Good Morning Champ";
    if (hours >= 12) {
        format = "PM";
        partOfTheDay = "Good Afternoon Champ";
        hours = hours - 12;
    }
    if (hours == 0) {
        hours = 12;
    }
    timeDiv.innerHTML =
        `${hours} : ${minutes} ${format}`;
    greetings.textContent = partOfTheDay;

    setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}


startTime();


