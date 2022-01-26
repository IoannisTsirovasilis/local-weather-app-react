import { getWeather } from '../clients/weather-api-client';
import { getLocation } from '../clients/location-api-client';
import { getLocalAreaName } from '../clients/geocode-api-client';
import constants from  '../common/constants';

export async function getLocationAndWeather(dispatch) {
  try {
    const { lat, lon } = await getLocation();
    const [weather, geocode] = await Promise.all([getWeather({ lat, lon }), getLocalAreaName({ lat, lon }) ]);

    dispatch({ type: constants.STORE_ACTION_TYPES.WeatherApiSuccess, payload: weather }) 
    dispatch({ type: constants.STORE_ACTION_TYPES.GeocodeApiSuccess, payload: geocode }) 
  } catch (error) {
    dispatch({ type: constants.ERROR_TO_ACTION_TYPE_MAP[error.name], payload: JSON.stringify(error) }) 
  }
}