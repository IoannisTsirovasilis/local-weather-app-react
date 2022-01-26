import './weekday-weather.css';

function WeekdayWeather(props) {
  const { day, icon, temperature } = props;
  return (
    <div className='weekday-weather'>
      <span>{day}</span>
      <i className={icon}></i>
      <span>{temperature}&#176;</span>
    </div>
  );
} 

export default WeekdayWeather;