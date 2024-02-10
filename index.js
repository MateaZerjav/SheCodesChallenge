function displayWeatherCondition(response) {
  console.log(response);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;

  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityName = searchInputElement.value;

  //Homework
  let apiKey = "636ft3f4ca7b895f0259dd71a1354d0o";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
