import database from "infra/database.js";
const consulta = require("../../../../../models/consultaAPI.js");

beforeAll(cleanDatabase)

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;")
}

test("POST para /api/v1/migrations deve retornar o status 200", async () => {
  const response = await consulta.func.consome(
    "http://localhost:3000/api/v1/migrations",
    'POST'
  );

  expect(response.status).toBe(201);
  const reponseBody = await response.json();

  expect(Array.isArray(reponseBody)).toBe(true);
  expect(reponseBody.length).toBeGreaterThan(0);

  /*********************** */

    const response2 = await consulta.func.consome(
      "http://localhost:3000/api/v1/migrations",
      "POST",
    );

    const reponseBody2 = await response2.json();

    expect(Array.isArray(reponseBody2)).toBe(true);
    expect(reponseBody2.length).toBe(0);

});

test("POST para /api/v1/migrations deve retornar o responseBody = 0", async () => {

});

