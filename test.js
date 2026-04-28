class ValidationError extends Error {
  constructor(message = "Default Error", name = "Custom Error", statusCode) {
    super(message);
    this.statusCode = 400;
    this.name = name;
  }
}

function saveUser(input) {
  if (!input) {
    throw new ReferenceError("Missing the input");
  }

  if (!input.name) {
    throw new ValidationError(
      "Missing name prop from the input",
      "Missing prop",
      400
    );
  }

  userSave();
}

try {
  saveUser({});
} catch (error) {
  if (error instanceof ReferenceError) {
    throw error;
  }

  if (error instanceof ValidationError) {
    console.log("É necessario preencher a propiedade Name");
    throw error;
  }
}
