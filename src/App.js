import './App.css';
import DailyWeatherContainer from './components/daily-weather-container/daily-weather-container';
import WeekdayWeatherList from './components/weekdays-weather-container/weekdays-weather-container';

function App() {
  return (
    <div className="App">
      <DailyWeatherContainer />
      <WeekdayWeatherList />
    </div>
  );
}

export default App;
