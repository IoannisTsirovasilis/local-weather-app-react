const WEEKDAYS = {
  SUNDAY: { long: 'Sunday', short: 'Sun', index: 0 },
  MONDAY: { long: 'Monday', short: 'Mon', index: 1 },
  TUESDAY: { long: 'Tuesday', short: 'Tue', index: 2 },
  WEDNESDAY: { long: 'Wednesday', short: 'Wed', index: 3 },
  THURSDAY: { long: 'Thursday', short: 'Thu', index: 4 },
  FRIDAY: { long: 'Friday', short: 'Fri', index: 5 },
  SATURDAY: { long: 'Saturday', short: 'Sat', index: 6 },
};

const MONTHS = {
  JANUARY: { long: 'January', short: 'Jan', index: 0 },
  FEBRUARY: { long: 'February', short: 'Feb', index: 1 },
  MARCH: { long: 'March', short: 'Mar', index: 2 },
  APRIL: { long: 'April', short: 'Apr', index: 3 },
  MAY: { long: 'May', short: 'May', index: 4 },
  JUNE: { long: 'June', short: 'Jun', index: 5 },
  JULY: { long: 'July', short: 'Jul', index: 6 },
  AUGUST: { long: 'August', short: 'Aug', index: 7 },
  SEPTEMBER: { long: 'September', short: 'Sep', index: 8 },
  OCTOBER: { long: 'October', short: 'Oct', index: 9 },
  NOVEMBER: { long: 'November', short: 'Nov', index: 10 },
  DECEMBER: { long: 'December', short: 'Dec', index: 11 },
};

const WEATHER_API_TO_WEATHER_CONDITION_MAP = {
  Clouds: 'Clouds',
  Thunderstorm: 'Thunder',
  Drizzle: 'Drizzle',
  Rain: 'Rain',
  Snow: 'Snow',
  Clear: 'Sunny',
  Haze: 'Fog',
  Mist: 'Fog',
  Dust: 'Fog',
  Smoke: 'Fog',
  Fog: 'Fog',
  Sand: 'Fog',
  Ash: 'Fog',
  Squall: 'Fog',
  Tornado: 'Fog',
}

const WEATHER_CONDITION_ICON_MAP = {
  Sunny: 'fas fa-sun',
  Rain: 'fas fa-cloud-rain',
  Clouds: 'fas fa-cloud',
  Snow: 'fas fa-snowflake',
  Windy: 'fas fa-wind',
  Fog: 'fas fa-smog',
  Thunder: 'fas fa-bolt',
  Drizzle: 'fas fa-cloud-showers-heavy',
  Unknown: 'fas fa-question'
};

const UNKNOWN_WEATHER_CONDITION = 'Unknown';

const STORE_ACTION_TYPES = {
  WeatherApiSuccess: 'weather-api/success',
}

const ERROR_TO_ACTION_TYPE_MAP = {
  UnableToGetLocationError: 'location/error',
  UnableToGetWeatherError: 'weather/error'
}


const constants = { WEEKDAYS, MONTHS, WEATHER_CONDITION_ICON_MAP, WEATHER_API_TO_WEATHER_CONDITION_MAP, UNKNOWN_WEATHER_CONDITION, STORE_ACTION_TYPES, ERROR_TO_ACTION_TYPE_MAP };

export default constants;