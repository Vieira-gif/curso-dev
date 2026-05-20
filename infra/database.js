import { Client } from "pg";
import { ServiceError } from "./errors"; 

async function query(queryObject) {
  let client;

  try {
    client = await getNewCliente();
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    const serviceErrorObject = new ServiceError({
      message: "An error occurred on database or query",
      cause: error
    });

    throw serviceErrorObject
  } finally {
    await client.end();
    console.log("Client has disconnected");
  }
} 

async function getNewCliente() {
    const client = new Client({
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      user: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      ssl: getSSLValues(),
    });

    await client.connect();
    return client;
}
const database = {
  query,
  getNewCliente
};

export default database

function getSSLValues(){
  if(process.env.POSTGRES_CA) {
    return {
      ca: process.env.POSTGRES_CA,
    };
  }

  return process.env.NODE_ENV === "production" ? true : false;
}