import orchestrator from "tests/orchestrator.js";
const consulta = require("../../../../../models/consultaAPI.js");

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
});

describe("GET /api/v1/migrations", () => {
  describe("Anonymous User", () => {
    test("should return status 200", async () => {
      const response = await consulta.func.consome(
        "http://localhost:3000/api/v1/migrations"
      );
      expect(response.status).toBe(200);
    });

    test("Should return empty Array", async () => {
      const response = await consulta.func.consome(
        "http://localhost:3000/api/v1/migrations"
      );

      const reponseBody = await response.json();

      expect(Array.isArray(reponseBody)).toBe(true);
      expect(reponseBody.length).toBeGreaterThan(0);
    });
  });
});
