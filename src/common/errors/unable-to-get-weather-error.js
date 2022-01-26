class UnableToGetWeatherError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnableToGetWeatherError';
  }
}

export default UnableToGetWeatherError;