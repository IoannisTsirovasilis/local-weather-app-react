import { useSelector } from 'react-redux';
import DayDetails from '../day-details/day-details';
import DateLocationDetails from '../date-location-details/date-location-details';
import TemperatureDetails from '../temperature-details/temperature-details';
import WeatherConditionDetails from '../weather-condition-details/weather-condition-details';
import utils from '../../common/utils';
import constants from '../../common/constants';

import './daily-weather-container.css'

function DailyWeatherContainer() {
  const condition = useSelector((state) => state.weather.current.condition);
  return <div className='daily-weather-container' style={{
    background: `url('../images/${constants.WEATHER_IMAGES_NAMES[condition]}.jpg') no-repeat center center`,
    backgroundSize: 'cover'
  }}>
    <DayDetails day={utils.getToday().long} />
    <DateLocationDetails />
    <div className='temperature-weather-condition-details'>
      <TemperatureDetails />
      <WeatherConditionDetails />
    </div>
  </div>;
}

export default DailyWeatherContainer;