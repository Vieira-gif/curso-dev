export class InternalServerError extends Error {
  constructor({ cause, statusCode }) {
    super("Unexpected error!", {
      cause,
    });

    this.name = "InternalServerError";
    this.action = "Notify your support team!";
    this.statusCode =  statusCode || 500;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}

export class ServiceError extends Error {
  constructor({ cause, message }) {
    super(message || "Service Unavailable", {
      cause,
    });

    this.name = "ServiceError";
    this.action = "Verify the available services";
    this.statusCode = 503;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}

export class MethodNotAllowed extends Error {
  constructor() {
    super("This method is not allowed in this endpoint");

    this.name = "MethodNotAllowed";
    this.action = "Verify the method";
    this.statusCode = 405;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}