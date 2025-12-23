const consulta = require("../../../../../models/consultaAPI.js");

test("GET para /api/v1/status deve retornar o status", async () => {  
  const response = await consulta.func.consome(
    "http://localhost:3000/api/v1/status",
  );
  expect(response.status).toBe(200);
  const reponseBody = await response.json()
});

test("GET para /api/v1/status deve retornar a data atual no body", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");  

  const reponseBody = await response.json();
  const now = new Date(reponseBody.update_at).toISOString();

  expect(reponseBody.update_at).toBe(now);
});

