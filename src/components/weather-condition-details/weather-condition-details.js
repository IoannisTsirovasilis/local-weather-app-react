import { useSelector } from 'react-redux';
import './weather-condition-details.css';

function WeatherConditionDetails() {
  const condition = useSelector((state) => state.weather.current.condition);
  return <div className="weather-condition-details">{condition}</div>
}

export default WeatherConditionDetails;