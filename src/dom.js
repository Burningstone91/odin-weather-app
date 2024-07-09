import * as utils from "./utils";

function renderWeatherData(weatherData) {
  // ##############################
  // Render current values
  // ##############################
  const conditionText = document.querySelector(".current > .condition-text");
  const location = document.querySelector(".current > .location");
  const date = document.querySelector(".current > .date");
  const time = document.querySelector(".current > .time");
  const conditionIcon = document.querySelector(".current > .condition-icon");
  const temp = document.querySelector(".current > .temp");
  const feelsLike = document.querySelector(".current > .feels-like");
  const humidity = document.querySelector(".current > .humidity");
  const windSpeed = document.querySelector(".current > .wind-speed");

  conditionText.textContent = weatherData.current.condition_text;
  location.textContent = weatherData.current.location;
  date.textContent = utils.getFullDate(weatherData.current.date);
  time.textContent = utils.getTime(weatherData.current.date);
  conditionIcon.src = "https:" + weatherData.current.condition_icon;
  temp.textContent = weatherData.current.temp + " °C";
  feelsLike.textContent = weatherData.current.feels_like + " °C";
  humidity.textContent = weatherData.current.humidity + " %";
  windSpeed.textContent = weatherData.current.wind_speed + " km/h";

  // ##############################
  // Render forecast values
  // ##############################
  for (let i = 1; i < 8; i++) {
    // render day name
    const dayName = document.querySelector(
      ".forecast-d-" + CSS.escape(i) + " > .day-name"
    );
    dayName.textContent = utils.getDayName(weatherData.forecast["d" + i].day);

    // render condition icon
    const conditionIcon = document.querySelector(
      ".forecast-d-" + CSS.escape(i) + " > .condition-icon"
    );
    conditionIcon.src = "https:" + weatherData.forecast["d" + i].condition_icon;

    // render max temp
    const maxTemp = document.querySelector(
      ".forecast-d-" + CSS.escape(i) + " > .max-temp"
    );
    maxTemp.textContent = weatherData.forecast["d" + i].max_temp + " °C";

    // render min temp
    const minTemp = document.querySelector(
      ".forecast-d-" + CSS.escape(i) + " > .min-temp"
    );
    minTemp.textContent = weatherData.forecast["d" + i].min_temp + " °C";
  }
}

export { renderWeatherData };
