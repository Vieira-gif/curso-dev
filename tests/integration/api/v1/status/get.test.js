const consulta = require("../../../../../models/consultaAPI.js");

test("GET para /api/v1/status deve retornar o status", async () => {
  const response = await consulta.func.consome(
    "http://localhost:3000/api/v1/status",
  );
  expect(response.status).toBe(200);
});

test("GET para /api/v1/status deve retornar a data atual no body", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  const reponseBody = await response.json();
  const now = new Date(reponseBody.update_at).toISOString();

  expect(reponseBody.update_at).toBe(now);
});

test("GET para /api/v1/status versão do banco pg", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  const reponseBody = await response.json();
  expect(reponseBody.settings.pg_version).toBe("16.0");
});

test("GET para /api/v1/status max_connection do banco ", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  const reponseBody = await response.json();
  expect(reponseBody.settings.max_connections).toBe("100");
});

test("GET para /api/v1/status openedConnections do banco ", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  const reponseBody = await response.json();
  expect(reponseBody.settings.opened_connections).toEqual(0);
});
