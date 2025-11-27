const consulta = require("../../../../../models/consultaAPI.js");

test("GET para /api/v1/status deve retornar 200", async () => {
  const response = await consulta.func.consome(
    "http://localhost:3000/api/v1/status",
  );
  expect(response.status).toBe(200);
});
