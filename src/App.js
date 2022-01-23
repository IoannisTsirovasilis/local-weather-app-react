import React from 'react';
import './App.css';
import DailyWeatherContainer from './components/daily-weather-container/daily-weather-container';
import WeekdayWeatherList from './components/weekdays-weather-container/weekdays-weather-container';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DailyWeatherContainer />
        <WeekdayWeatherList />
      </div>
    );
  }
}

export default App;
