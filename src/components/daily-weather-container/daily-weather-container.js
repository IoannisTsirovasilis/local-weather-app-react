import DayHeader from '../day-header/day-header';
import WEEKDAYS from '../../common/constants';
import './daily-weather-container.css'

function getTodayIndex() {
  return new Date().getDay();
}

function getTodayLongName() {
  return Object.values(WEEKDAYS).find((wd) => wd.index === getTodayIndex()).long;
}

function DailyWeatherContainer() {
  return <div className='daily-weather-container'>
    <DayHeader day={getTodayLongName()} />
  </div>;
}

export default DailyWeatherContainer;