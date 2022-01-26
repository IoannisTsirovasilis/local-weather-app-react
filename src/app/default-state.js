import constants from '../common/constants';

const defaultState = {
  weather: {
    current: {
      temperature: 0,
      condition: constants.UNKNOWN_WEATHER_CONDITION,
    },
    daily: [
      {
        id: 0,
        averageTemperature: 0,
        condition: constants.UNKNOWN_WEATHER_CONDITION,
      },
      {
        id: 1,
        averageTemperature: 0,
        condition: constants.UNKNOWN_WEATHER_CONDITION,
      },
      {
        id: 2,
        averageTemperature: 0,
        condition: constants.UNKNOWN_WEATHER_CONDITION,
      },
      {
        id: 3,
        averageTemperature: 0,
        condition: constants.UNKNOWN_WEATHER_CONDITION,
      },
      {
        id: 4,
        averageTemperature: 0,
        condition: constants.UNKNOWN_WEATHER_CONDITION,
      },
      {
        id: 5,
        averageTemperature: 0,
        condition: constants.UNKNOWN_WEATHER_CONDITION,
      }
    ]
  }
}

export default defaultState