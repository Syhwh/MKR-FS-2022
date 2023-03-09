class ServiceError extends Error {
  constructor(message, status, scope) {
    super(message);
    this.status = status;
    this.scope = scope;
  }
}

module.exports = ServiceError;