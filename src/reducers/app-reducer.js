import utils from '../common/utils';
import defaultState from '../app/default-state';
import constants from '../common/constants';


function filterOutTodayFromWeekdays(weekdays) {
  return weekdays.filter((day) => utils.getDayByTimestamp(day.dt).index !== utils.getTodayIndex())
}

const actionsMap = {
  [constants.STORE_ACTION_TYPES.WeatherApiSuccess]: (state, action) => {
    const weekdays = filterOutTodayFromWeekdays(action.payload.daily);

    const newState = {
      ...state,
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
  [constants.STORE_ACTION_TYPES.GeocodeApiSuccess]: (state, action) => {
    return {
      ...state,
      localAreaName: action.payload
    }
  },
  [constants.ERROR_TO_ACTION_TYPE_MAP.UnableToGetLocationError]: () => defaultState,
  [constants.ERROR_TO_ACTION_TYPE_MAP.UnableToGetWeatherError]: () => defaultState,
  [constants.ERROR_TO_ACTION_TYPE_MAP.UnableToGetLocalAreaNameError]: () => defaultState,
}

export default function appReducer(state = defaultState, action) {
  return actionsMap[action.type] ? actionsMap[action.type](state, action) : state;
}