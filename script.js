const apiKey = "7c857ecece9b293b4a13489e48467655";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    //Updates the names in accordance to the search for the API
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " mph";

    
    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
    }

}

//make it so when user clicks the search button we get an on click event that calls function checkWeather(city)
searchBtn.addEventListener("click", ()=>{
    //get the value of the searchbox, so grabs what user types 
    checkWeather(searchBox.value);
})
