import axios from "axios"
import constants from "../common/constants"


const lat = 38.012630;
const lon = 23.820551;

export async function getWeather(dispatch) {
  try {
    const response = await axios.get(`${process.env.REACT_APP_WEATHER_API_URL}/weather-app?lat=${lat}&lon=${lon}`);
    const data = {
      ...response.data
    }

    data.current.weather[0].main = constants.WEATHER_API_TO_WEATHER_CONDITION_MAP[data.current.weather[0].main];
    data.daily.forEach(day => {
      day.weather[0].main = constants.WEATHER_API_TO_WEATHER_CONDITION_MAP[day.weather[0].main];
    }); 
    dispatch({ type: 'weather-api/success', payload: data }) 
  } catch (error) {
    dispatch({ type: 'weather-api/error', payload: error })
  }
}