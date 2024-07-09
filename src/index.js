import "./styles.css";
import * as api from "./api";
//import * as utils from "./utils";
import * as dom from "./dom";

const city = document.getElementById("location");

async function getWeatherData() {
  const weatherData = await api.getWeatherForecast(city.value);
  dom.renderWeatherData(weatherData);
}

// initial load
getWeatherData();

// change location
city.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeatherData();
    city.value = "";
  }
});
