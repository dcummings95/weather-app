const apiKey = "7c857ecece9b293b4a13489e48467655";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=winona";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
}

checkWeather();