import DayHeader from '../day-header/day-header';
import DateDetails from '../date-details/date-details';
import LocationDetails from '../location-details/location-details';
import TemperatureHeader from '../temperature-header/temperature-header';
import WeatherConditionDetails from '../weather-condition-details/weather-condition-details';
import constants from '../../common/constants';
// TODO: Move images to an online service
import cloudy from '../../images/cloudy.jpg';
import './daily-weather-container.css'

function getTodayIndex() {
  return new Date().getDay();
}

function getTodayLongName() {
  return Object.values(constants.WEEKDAYS).find((wd) => wd.index === getTodayIndex()).long;
}

function DailyWeatherContainer() {
  // TODO: Fill background image based on real-time weather condition
  return <div className='daily-weather-container' style={{
    background: `url(${cloudy}) no-repeat center center`,
    backgroundSize: 'cover'
  }}>
    <DayHeader day={getTodayLongName()} />
    <div className='date-location-details'>
      <DateDetails />
      <span>&nbsp;</span>
      <LocationDetails />
    </div>
    <div className='temperature-weather-condition-details'>
      <TemperatureHeader />
      <WeatherConditionDetails />
    </div>
  </div>;
}

export default DailyWeatherContainer;