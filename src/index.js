import "./styles.css";
import * as api from "./api";
//import * as utils from "./utils";
import * as dom from "./dom";

const city = document.getElementById("location");
const searchBtn = document.querySelector(".search-btn");

async function getWeatherData() {
  const weatherData = await api.getWeatherForecast(city.value);
  dom.renderWeatherData(weatherData);
  city.value = "";
}

// initial load
getWeatherData();

// change location
city.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeatherData();
  }
});

searchBtn.addEventListener("click", () => {
  getWeatherData();
});
