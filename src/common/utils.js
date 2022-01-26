import constants from "./constants";

function getMonthByIndex(index) {
  return Object.values(constants.MONTHS).find((m) => m.index === index);
}

function getFullDate() {
  const date = new Date();
  const dayOfMonth = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return dayOfMonth + ' ' + getMonthByIndex(monthIndex).long + ', ' + year;
}

function getTodayIndex() {
  return new Date().getDay();
}

function getToday() {
  return Object.values(constants.WEEKDAYS).find((wd) => wd.index === getTodayIndex());
}

function getDayByIndex(index) {
  return Object.values(constants.WEEKDAYS).find((wd) => wd.index === index);
}

function getDateFromTimestamp(timestamp) {
  return new Date(timestamp * 1000);
}

function getDayByTimestamp(timestamp) {
  return getDayByIndex(getDateFromTimestamp(timestamp).getDay());
}

function convertKelvinToCelsius(kelvinDegrees) {
  return parseInt(kelvinDegrees - 273.15);
}

function getWeatherConditionIcon(weatherCondition) {
  return constants.WEATHER_CONDITION_ICON_MAP[weatherCondition] ?? constants.WEATHER_CONDITION_ICON_MAP[constants.UNKNOWN_WEATHER_CONDITION];
}

const utils = { getFullDate, getTodayIndex, getToday, getDayByIndex, getDayByTimestamp, convertKelvinToCelsius, getWeatherConditionIcon };

export default utils;