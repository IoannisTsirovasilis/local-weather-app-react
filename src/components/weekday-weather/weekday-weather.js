import React from 'react';
import './weekday-weather.css';

class WeekdayWeather extends React.Component {
  render() {
    const { day, icon, temperature } = this.props;
    return (
      <div className='weekday-weather'>
        <span>{day}</span>
        <i className={icon}></i>
        <span>{temperature}&#176;</span>
      </div>
    );
  }
  
} 

export default WeekdayWeather;