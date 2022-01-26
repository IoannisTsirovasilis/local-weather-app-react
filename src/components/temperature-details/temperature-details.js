import { useSelector } from 'react-redux';
import './temperature-details.css';

// TODO: Get temperature from a weather API
function TemperatureDetails() {
  const temperature = useSelector((state) => state.weather.current.temperature);
  return <div className="temperature-details">{temperature} &#176;C</div>;
  
}

export default TemperatureDetails;