import "normalize.css";
import "./styles.css";
import feather from "feather-icons";

const inputField = document.querySelector(".input-field");
const searchButton = document.querySelector(".input-button");
const form = document.querySelector(".search");
const degreeToggler = document.querySelector(".switch-degrees");
const mainContainer = document.querySelector(".main");
const loadingOverlay = document.createElement("div");
loadingOverlay.className = "loading-overlay";
loadingOverlay.innerHTML = '<div class="spinner"></div>';

// objects

let currentCity;

const degreeSymbols = {
  celsius: "°C",
  fahrenheit: "°F",
};

const temperatureValues = {
  celsius: null,
  fahrenheit: null,
  currentUnit: "celsius",
};

const feelsLikeValues = {
  celsius: null,
  fahrenheit: null,
  currentUnit: "celsius",
};

// addEventListeners

document.addEventListener("DOMContentLoaded", async () => {
  showLoading();
  try {
    feather.replace();
    const weatherData = await getWeather("El Tigre");
    if (weatherData) {
      displayWeather(weatherData);
    }
  } finally {
    hideLoading();
  }
});

degreeToggler.addEventListener("click", () => {
  toggleTemperatureUnit();
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  showLoading();
  try {
    const city = inputField.value.trim();
    if (city) {
      const weatherData = await getWeather(city);
      if (weatherData) {
        console.log(weatherData);
        displayWeather(weatherData);
      }
    } else {
      alert("Couldn't find the city. Please, try again.");
    }
  } finally {
    hideLoading();
  }
});

// functions

async function getWeather(city) {
  const API_KEY = "17ded011b6334b73981185557241105";
  const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
  try {
    const response = await fetch(URL, { mode: "cors" });
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    alert(error);
    return null;
  }
}

function displayWeather(weatherData) {
  const location = weatherData.location;
  const current = weatherData.current;

  updateLocation(location);
  updateWeatherInfo(current);
  currentCity = location.name;
}

function updateLocation(location) {
  const titleText = document.querySelector(".location");

  titleText.textContent = `${location.name}, ${location.country}`;
}

function updateWeatherInfo(current) {
  updateObjects(current);

  const conditionText = document.querySelector(".condition");
  const temperature = document.querySelector(".bottom-left .temp");
  const feelsLikeTemperature = document.querySelector(".bottom-right .temp");
  const windText = document.querySelector(".wind-value");
  const humidityText = document.querySelector(".humidity-value");

  conditionText.textContent = current.condition.text;
  updateTempContainer(temperature);
  updateTempContainer(feelsLikeTemperature);
  windText.textContent = `${current.wind_mph} MPH`;
  humidityText.textContent = `${current.humidity}%`;
}

function updateTempContainer(container) {
  const numbers = container.querySelector(".numbers");
  const degrees = container.querySelector(".degrees");
  numbers.textContent = `${temperatureValues[temperatureValues.currentUnit]}`;
  degrees.textContent = `${degreeSymbols[temperatureValues.currentUnit]}`;
}

function updateObjects(data) {
  temperatureValues.celsius = data.temp_c;
  temperatureValues.fahrenheit = data.temp_f;

  feelsLikeValues.celsius = data.feelslike_c;
  feelsLikeValues.fahrenheit = data.feelslike_f;
}

function toggleTemperatureUnit() {
  temperatureValues.currentUnit =
    temperatureValues.currentUnit === "celsius" ? "fahrenheit" : "celsius";

  feelsLikeValues.currentUnit =
    feelsLikeValues.currentUnit === "celsius" ? "fahrenheit" : "celsius";

  const temperature = document.querySelector(".bottom-left .temp");
  const feelsLikeTemperature = document.querySelector(".bottom-right .temp");

  updateTempContainer(temperature);
  updateTempContainer(feelsLikeTemperature);
}

function showLoading() {
  mainContainer.appendChild(loadingOverlay);
  mainContainer.classList.add("blurred");
  loadingOverlay.classList.add("loading");
}

function hideLoading() {
  loadingOverlay.classList.remove("loading");
  mainContainer.classList.remove("blurred");
  setTimeout(() => {
    mainContainer.removeChild(loadingOverlay);
  }, 200);
}
