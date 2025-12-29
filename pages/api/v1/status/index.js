import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();
  const pgVersion = await database.query("SHOW server_version;");
  const usedConnections = await database.query("SELECT COUNT(*) AS used_connections FROM pg_stat_activity;");
  const maxConnections = await database.query("SHOW max_connections;");

  response.status(200).json({
    update_at: updateAt,
    settings: {
      pg_version: pgVersion.rows[0].server_version,
      used_connections: usedConnections.rows[0].used_connections,
      max_connections: maxConnections.rows[0].max_connections,
    },
  });
}

export default status;
