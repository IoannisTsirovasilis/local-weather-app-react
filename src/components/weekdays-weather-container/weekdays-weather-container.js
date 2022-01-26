import WeekdayWeather from '../weekday-weather/weekday-weather';
import './weekdays-weather-container.css';
import constants from '../../common/constants';

const weatherConditionIcons = {
  SUNNY: 'fas fa-sun',
  RAIN: 'fas fa-cloud-rain',
  CLOUD: 'fas fa-cloud',
  SNOW: 'fas fa-snowflake',
  WINDY: 'fas fa-wind',
  FOG: 'fas fa-smog',
  THUNDER: 'fas fa-bolt',
  DRIZZLE: 'fas fa-cloud-showers-heavy',
  PARTLY_CLOUDY_DAY: 'fas fa-cloud-sun',
  PARTLY_CLOUDY_NIGHT: 'fas fa-cloud-moon',
};

// TODO: Replace with real data
function getRandomWeatherConditionKey() {
  const weatherConditions = Object.keys(weatherConditionIcons);
  const randomIndex = Math.floor(Math.random() * weatherConditions.length);
  return weatherConditions[randomIndex];
}

// TODO: Replace with real data
function getRandomTemperature() {
  return Math.floor(Math.random() * 40) + 20;
}

function WeekdaysWeatherContainer() {
  const weekdaysWeather = Object.values(constants.WEEKDAYS).map((day, index) => {
    const randomWeatherCondition = getRandomWeatherConditionKey();
    const randomTemperature = getRandomTemperature();
    return <WeekdayWeather key={index} icon={weatherConditionIcons[randomWeatherCondition]} day={day.short} temperature={randomTemperature} />;
  });
  return <div className="weekdays-weather-container">{weekdaysWeather}</div>;
}

export default WeekdaysWeatherContainer;