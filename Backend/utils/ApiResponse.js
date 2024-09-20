class ApiResponse {
  constructor(statusCode, data = null, message = "Success") {
    (this.statusCode = statusCode),
      (this.data = data),
      (this.message = message);
  }
}

export {ApiResponse};
