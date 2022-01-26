import { useSelector } from 'react-redux';
import './location-details.css'

// TODO: get location details from user's location
function LocationDetails() {
  const localAreaName = useSelector((state) => state.localAreaName);
  return (
    <div className="location-details">
      {localAreaName}
    </div>
  )
}

export default LocationDetails;