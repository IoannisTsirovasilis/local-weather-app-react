import DayDetails from '../day-details/day-details';
import DateLocationDetails from '../date-location-details/date-location-details';
import TemperatureDetails from '../temperature-details/temperature-details';
import WeatherConditionDetails from '../weather-condition-details/weather-condition-details';
import constants from '../../common/constants';
// TODO: Move images to an online service
import cloudy from '../../images/cloudy.jpg';
import './daily-weather-container.css'
import React from 'react';

function getTodayIndex() {
  return new Date().getDay();
}

function getTodayLongName() {
  return Object.values(constants.WEEKDAYS).find((wd) => wd.index === getTodayIndex()).long;
}

class DailyWeatherContainer extends React.Component {
  // TODO: Fill background image based on real-time weather condition
  render() {
    return (
      <div className='daily-weather-container' style={{
        background: `url(${cloudy}) no-repeat center center`,
        backgroundSize: 'cover'
      }}>
        <DayDetails day={getTodayLongName()} />
        <DateLocationDetails />
        <div className='temperature-weather-condition-details'>
          <TemperatureDetails />
          <WeatherConditionDetails />
        </div>
      </div>
    );
  }
}

export default DailyWeatherContainer;