const apiKey = "68c8d7c1ff284c1dacd200606240507";

async function getWeatherForecast(city) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&days=8&q=${city}`;

  try {
    const response = await fetch(url, { mode: "cors" });
    const weatherData = await response.json();
    const data = processData(weatherData);
    return data;
  } catch (error) {
    console.log(error);
  }
}

function processData(weatherData) {
  const data = {
    current: {
      location: weatherData.location.name + ", " + weatherData.location.country,
      date: weatherData.location.localtime,
      condition_text: weatherData.current.condition.text,
      condition_icon: weatherData.current.condition.icon,
      temp: weatherData.current.temp_c,
      feels_like: weatherData.current.feelslike_c,
      humidity: weatherData.current.humidity,
      wind_speed: weatherData.current.wind_kph,
    },
    forecast: {
      d1: {
        day: weatherData.forecast.forecastday[1].date,
        max_temp: weatherData.forecast.forecastday[1].day.maxtemp_c,
        min_temp: weatherData.forecast.forecastday[1].day.mintemp_c,
        condition_icon: weatherData.forecast.forecastday[1].day.condition.icon,
      },
      d2: {
        day: weatherData.forecast.forecastday[2].date,
        max_temp: weatherData.forecast.forecastday[2].day.maxtemp_c,
        min_temp: weatherData.forecast.forecastday[2].day.mintemp_c,
        condition_icon: weatherData.forecast.forecastday[2].day.condition.icon,
      },
      d3: {
        day: weatherData.forecast.forecastday[3].date,
        max_temp: weatherData.forecast.forecastday[3].day.maxtemp_c,
        min_temp: weatherData.forecast.forecastday[3].day.mintemp_c,
        condition_icon: weatherData.forecast.forecastday[3].day.condition.icon,
      },
      d4: {
        day: weatherData.forecast.forecastday[4].date,
        max_temp: weatherData.forecast.forecastday[4].day.maxtemp_c,
        min_temp: weatherData.forecast.forecastday[4].day.mintemp_c,
        condition_icon: weatherData.forecast.forecastday[4].day.condition.icon,
      },
      d5: {
        day: weatherData.forecast.forecastday[5].date,
        max_temp: weatherData.forecast.forecastday[5].day.maxtemp_c,
        min_temp: weatherData.forecast.forecastday[5].day.mintemp_c,
        condition_icon: weatherData.forecast.forecastday[5].day.condition.icon,
      },
      d6: {
        day: weatherData.forecast.forecastday[6].date,
        max_temp: weatherData.forecast.forecastday[6].day.maxtemp_c,
        min_temp: weatherData.forecast.forecastday[6].day.mintemp_c,
        condition_icon: weatherData.forecast.forecastday[6].day.condition.icon,
      },
      d7: {
        day: weatherData.forecast.forecastday[7].date,
        max_temp: weatherData.forecast.forecastday[7].day.maxtemp_c,
        min_temp: weatherData.forecast.forecastday[7].day.mintemp_c,
        condition_icon: weatherData.forecast.forecastday[7].day.condition.icon,
      },
    },
  };
  return data;
}

export { getWeatherForecast };
