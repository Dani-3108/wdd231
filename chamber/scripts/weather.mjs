//************************Weather section*******************//
//Variables
const weatherIcon = document.querySelector("#weather-icon");
const currentTemperature = document.querySelector("#current-temp");
const iconDescription = document.querySelector("#weather-icon-description");
const highestTemperature = document.querySelector("#highest-temp");
const lowestTemperature = document.querySelector("#lowest-temp");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.28&lon=-123.14&units=imperial&appid=9ded8b8010c37d660115adb3e96d684f";
//display results function
function displayResults(data) {
    //weather icon
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", `${data.weather[0].description}`);
    //current temperature
    currentTemperature.innerHTML = `Temperature: ${data.main.temp}&deg;F`;
    //icon description
    iconDescription.innerHTML = `${data.weather[0].description}`;
    //highest temperature
    highestTemperature.innerHTML = `Highest: ${data.main.temp_max}°`;
    //lowest temperature
    lowestTemperature.innerHTML = `Lowest: ${data.main.temp_min}°`;
    //humidity
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    //sunrise
    const sunriseFormat = new Date(data.sys.sunrise * 1000);
    sunrise.innerHTML = `Sunrise: ${sunriseFormat.toLocaleTimeString()}`;
    //sunset
    const sunsetFormat = new Date(data.sys.sunset * 1000);
    sunset.innerHTML = `Sunset: ${sunsetFormat.toLocaleTimeString()}`;
}
//Fetch API
export async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
//****************Forecast Section***************//
const forecastOne = document.querySelector("#forecast-one");
const forecastTwo = document.querySelector("#forecast-two");
const forecastThree = document.querySelector("#forecast-three");
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=49.28&lon=-123.14&units=imperial&appid=9ded8b8010c37d660115adb3e96d684f";
//display function
function displayForecast(data) {
    //today forecast
    const todayForecast = new Date(data.list[0].dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
    forecastOne.innerHTML = `${todayForecast}: ${data.list[0].main.temp}°F`;
    //tomorrow forecast
    const tomorrowForecast = new Date(data.list[8].dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
    forecastTwo.innerHTML = `${tomorrowForecast}: ${data.list[8].main.temp}°F`;
    //day after forecast
    const dayAfterForecast = new Date(data.list[16].dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
    forecastThree.innerHTML = `${dayAfterForecast}: ${data.list[16].main.temp}°F`;
}
//fetch API
export async function forecastApiFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}