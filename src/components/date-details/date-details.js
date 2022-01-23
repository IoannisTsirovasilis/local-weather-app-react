import React from 'react';
import constants from '../../common/constants';
import './date-details.css'

// TODO: This should be calculated real-time
function getFullDate() {
  const date = new Date();
  const dayOfMonth = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return dayOfMonth + ' ' + Object.values(constants.MONTHS).find((m) => m.index === monthIndex).long + ', ' + year;
}

class DateDetails extends React.Component {
  render() {
    return (
      <div className='date-details'>
        {getFullDate()}
      </div>
    );
  }
}

export default DateDetails;