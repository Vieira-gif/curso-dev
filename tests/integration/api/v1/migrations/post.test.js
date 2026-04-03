import orchestrator from "tests/orchestrator.js";
const consulta = require("../../../../../models/consultaAPI.js");

beforeAll(async () => {
  await orchestrator.waitForAllServices()
  await orchestrator.clearDatabase();
})

describe("POST /api/v1/migrations", () => {
  describe("Anonymous User", () => {
    describe("Retriving pending migrations", () => {
      test("First run", async () => {
        const response = await consulta.func.consome(
          "http://localhost:3000/api/v1/migrations",
          "POST"
        );

        const reponseBody = await response.json();

        expect(response.status).toBe(201);
        expect(Array.isArray(reponseBody)).toBe(true);
        expect(reponseBody.length).toBeGreaterThan(0);
      });

      test("Seccond run", async () => {
        const response = await consulta.func.consome(
          "http://localhost:3000/api/v1/migrations",
          "POST"
        );

        const reponseBody = await response.json();

        expect(Array.isArray(reponseBody)).toBe(true);
        expect(reponseBody.length).toBe(0);
      });
    });
  });
});



