class ApiError extends Error {
  constructor(statusCode, message = "Something went wrong", error = []) {
    super(message);
    (this.statusCode = statusCode),
      (this.message = message),
      (this.error = error);
  }
}

export {ApiError};
