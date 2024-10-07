class ErrorResponse {
  constructor(message, detail) {
    this.error = {
      message: message,
      detail: detail,
    };
  }
}

module.exports = { ErrorResponse };
