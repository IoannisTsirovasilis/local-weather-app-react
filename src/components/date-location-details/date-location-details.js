import DateDetails from "../date-details/date-details";
import LocationDetails from "../location-details/location-details";
import './date-location-details.css'

function DateLocationDetails() {
  return (
    <div className="date-location-details">
      <DateDetails />
      <span className="date-location-details-separator"></span>
      <LocationDetails />
    </div>
    
  )
}

export default DateLocationDetails;