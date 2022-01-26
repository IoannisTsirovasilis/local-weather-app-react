import DayDetails from '../day-details/day-details';
import DateLocationDetails from '../date-location-details/date-location-details';
import TemperatureDetails from '../temperature-details/temperature-details';
import WeatherConditionDetails from '../weather-condition-details/weather-condition-details';
import utils from '../../common/utils';
// TODO: Move images to an online service
import cloudy from '../../images/cloudy.jpg';
import './daily-weather-container.css'

function DailyWeatherContainer() {
  // TODO: Fill background image based on real-time weather condition
  return <div className='daily-weather-container' style={{
    background: `url(${cloudy}) no-repeat center center`,
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