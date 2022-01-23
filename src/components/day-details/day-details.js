import React from "react";
import './day-details.css'

class DayDetails extends React.Component {
  render() {
    return <div className='day-details'>{this.props.day}</div>
  }
  
}

export default DayDetails;