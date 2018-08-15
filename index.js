const API_KEY = '03680f182807b2105be583b70dad3a65a1cef68f'

function handleFormSubmit(event) {
  event.preventDefault();
  // select the element with an id of "city"
  // get the value of that element, set a variable city = that value
  // fetchCurrentWeather(city)
  
  let city = document.getElementById("city").value
  fetchCurrentWeather(city)
}

function fetchCurrentWeather(city) {
  // https://api.openweathermap.org/data/2.5/weather?q=THECITY&APPID=your api key&units=imperial
  // `hi ${city}`
  // "hi " + city
  fetch("https://api.openweathermap.org/data/2.5/weather?q=city&APPID=03680f182807b2105be583b70dad3a65a1cef68fkey&units=imperial")
  .then(response => response.json())
  .then(displayCurrentWeather)

}

function displayCurrentWeather(json) {
  let temp = weatherJson.main.temp
  let tempRow = document.getElementById("temp")
  //render current weather data to the DOM using provided IDs and json from API
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  // alert("Form Submitted!") 
  
  let aThing = document.getElementById("cityForm");
  aThing.addEventListener("submit", handleFormSubmit)
  //add event listener here for form submission
  
})
