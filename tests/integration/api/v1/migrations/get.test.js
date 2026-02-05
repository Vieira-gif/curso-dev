import database from "infra/database.js";
const consulta = require("../../../../../models/consultaAPI.js");

beforeAll(cleanDatabase)

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;")
}

test("GET para /api/v1/migrations deve retornar o status 200", async () => {
  const response = await consulta.func.consome(
    "http://localhost:3000/api/v1/migrations",
  );
  expect(response.status).toBe(200);
});


test("GET para /api/v1/migrations deve retornar um Array", async () => {
  const response = await consulta.func.consome(
    "http://localhost:3000/api/v1/migrations",
  );

  const reponseBody = await response.json();

  expect(Array.isArray(reponseBody)).toBe(true);
  expect(reponseBody.length).toBeGreaterThan(0);
});
