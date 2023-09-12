const apiKey = "7c857ecece9b293b4a13489e48467655";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=winona";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    //Updates the names in accordance to the search for the API
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " mph";

}

checkWeather();