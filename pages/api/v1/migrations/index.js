import { createRouter } from "next-connect";
import controller from "infra/controller";
import migrator from "models/migrator";

const router = createRouter();

router.post(postHandler);
router.get(getHandler);

export default router.handler(controller.errorHandlers);

async function getHandler(request, response) {
  const pedingMigations = await migrator.listPedingMigrations();
  return response.status(200).json(pedingMigations);
}

async function postHandler(request, response) {
  const migratedMigrations = await migrator.runPeddingMigrations();

  if (migratedMigrations.length > 0) {
    return response.status(201).json(migratedMigrations);
  }

  return response.status(200).json(migratedMigrations);
}
