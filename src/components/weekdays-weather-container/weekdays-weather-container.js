import { useSelector } from 'react-redux';
import WeekdayWeather from '../weekday-weather/weekday-weather';
import './weekdays-weather-container.css';
import utils from '../../common/utils';



function WeekdaysWeatherContainer() {
  const dailyWeather = useSelector((state) => state.weather.daily); 
  const weekdaysWeather = dailyWeather.map((day, index) => {
    return <WeekdayWeather key={index} icon={utils.getWeatherConditionIcon(day.condition)} day={utils.getDayByIndex(day.id).short} temperature={day.averageTemperature} />;
  });
  return <div className="weekdays-weather-container">{weekdaysWeather}</div>;
}

export default WeekdaysWeatherContainer;