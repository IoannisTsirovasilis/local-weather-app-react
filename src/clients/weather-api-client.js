import axios from "axios"
import constants from "../common/constants"
import UnableToGetWeatherError from "../common/errors/unable-to-get-weather-error"

export async function getWeather({ lat, lon }) {
  try {
    const response = await axios.get(`${process.env.REACT_APP_WEATHER_API_URL}/weather-app?lat=${lat}&lon=${lon}`);
    const data = {
      ...response.data
    }

    data.current.weather[0].main = constants.WEATHER_API_TO_WEATHER_CONDITION_MAP[data.current.weather[0].main];
    data.daily.forEach(day => {
      day.weather[0].main = constants.WEATHER_API_TO_WEATHER_CONDITION_MAP[day.weather[0].main];
    }); 
    
    return data;
  } catch (error) {
    console.log(error);
    throw new UnableToGetWeatherError(error.message);
  }
}