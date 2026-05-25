import migrationRunner from "node-pg-migrate";
import { resolve } from "node:path";
import database from "infra/database";

const defaultMigrationOptions = {
  dryRun: true,
  dir: resolve("infra", "migrations"),
  direction: "up",
  verbose: true,
  migrationsTable: "pgmigrations",
};

async function listPedingMigrations() {
  let dbClient;

  try {
    dbClient = await database.getNewCliente();

    const pedingMigations = await migrationRunner({
      ...defaultMigrationOptions,
      dbClient,
    });
    return pedingMigations;
  } finally {
    await dbClient?.end();
  }
}

async function runPeddingMigrations() {
  let dbClient;

  try {
    dbClient = await database.getNewCliente();

    const migratedMigrations = await migrationRunner({
      ...defaultMigrationOptions,
      dbClient,
      dryRun: false,
    });

    return migratedMigrations

  } finally {
    await dbClient?.end();
  }
}


const migrator = {
  listPedingMigrations,
  runPeddingMigrations,
};

export default migrator