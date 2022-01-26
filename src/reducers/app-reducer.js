import utils from '../common/utils';
import defaultState from '../app/default-state';


function filterTodayFromWeekdays(weekdays) {
  return weekdays.filter((day) => utils.getDayByTimestamp(day.dt).index !== utils.getTodayIndex())
}

const actionsMap = {
  'weather-api/success': (state, action) => {
    const weekdays = filterTodayFromWeekdays(action.payload.daily);

    const newState = {
      weather: {
        current: {
          temperature: utils.convertKelvinToCelsius(action.payload.current.temp),
          condition: action.payload.current.weather[0].main
        },
        daily: weekdays.map((day) => {
          return {
            id: utils.getDayByTimestamp(day.dt).index,
            averageTemperature: utils.convertKelvinToCelsius(day.temp.day),
            condition: day.weather[0].main
          };
        }) 
      }
    };
    return newState;
  },
  'weather-api/error': () => defaultState
}

export default function appReducer(state = defaultState, action) {
  return actionsMap[action.type] ? actionsMap[action.type](state, action) : state;
}