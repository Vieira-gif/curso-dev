import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();
  const pgVersion = await database.query("SHOW server_version;");
  const maxConnections = await database.query("SHOW max_connections;");
  const databaseOpenedConnectionsResult = await database.query("SELECT count(*)::int FROM pg_stat_activity where datname = 'local_db'")

  const openedConnections = databaseOpenedConnectionsResult.rows[0].count;

  response.status(200).json({
    update_at: updateAt,
    settings: {
      pg_version: pgVersion.rows[0].server_version,
      max_connections: maxConnections.rows[0].max_connections,
      opened_connections: openedConnections,
    },
  });
}

export default status;
