import { getWeather } from '../clients/weather-api-client';
import { getLocation } from '../clients/location-api-client';
import constants from  '../common/constants';

export async function getLocationAndWeather(dispatch) {
  try {
    const { lat, lon } = await getLocation();
    const weather = await getWeather({ lat, lon });
    dispatch({ type: constants.STORE_ACTION_TYPES.WeatherApiSuccess, payload: weather }) 
  } catch (error) {
    dispatch({ type: constants.ERROR_TO_ACTION_TYPE_MAP[error.name], payload: JSON.stringify(error) }) 
  }
}