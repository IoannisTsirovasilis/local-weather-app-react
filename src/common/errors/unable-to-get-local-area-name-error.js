class UnableToGetLocalAreaNameError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnableToGetLocalAreaNameError';
  }
}

export default UnableToGetLocalAreaNameError;