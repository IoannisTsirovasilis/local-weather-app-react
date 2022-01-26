class UnableToGetLocationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnableToGetLocationError';
  }
}

export default UnableToGetLocationError;