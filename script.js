const apiKey = "7c857ecece9b293b4a13489e48467655";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    //Updates the names in accordance to the search for the API
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " mph";

}

//make it so when user clicks the search button we get an on click event that calls function checkWeather(city)
searchBtn.addEventListener("click", ()=>{
    //get the value of the searchbox, so grabs what user types 
    checkWeather(searchBox.value);
})
