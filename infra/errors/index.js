import status from "pages/api/v1/status";

export class InternalServerError extends Error {
  constructor({ cause }) {
    super("Unexpected error!", {
      cause,
    });

    this.name = "InternalServerError";
    this.action = "Notify your support team!";
    this.statusCode = 500;
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
