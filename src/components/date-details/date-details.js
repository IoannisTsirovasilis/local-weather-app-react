import utils from '../../common/utils';
import './date-details.css'

function DateDetails () {
  return (
    <div className='date-details'>
      {utils.getFullDate()}
    </div>
  );
}

export default DateDetails;