import orchestrator from "tests/orchestrator.js";

beforeAll(async () => await orchestrator.waitForAllServices())

test("POST para /api/v1/status deve retornar um MethodNotAllowed", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status", {
    method: "POST",
  });
  expect(response.status).toBe(405);

  const responseBody = await response.json();

  expect(responseBody).toEqual({
    name: "MethodNotAllowed",
    message: "This method is not allowed in this endpoint",
    action: "Verify the method",
    status_code: 405,
  });
});