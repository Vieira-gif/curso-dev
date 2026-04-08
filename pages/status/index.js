import useSWR from "swr";

async function fetcher(key) {
  const response = await fetch(key);
  const responseBody = await response.json();

  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdateAt />
    </>
  );
}

function UpdateAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetcher, {
    refreshInterval: 200,
  });

  let StatusDataBase = "Carregando...";
  

  if (!isLoading && data) {
    return (
      <>
        <p>Update_At: {new Date(data.update_at).toLocaleDateString("pt-BR")}</p>
        <p>pg_Version: {data.settings.pg_version}</p>
        <p>max_connections: {data.settings.max_connections}</p>
        <p>opened_connections: {data.settings.opened_connections}</p>
      </>
    );
  }

  return (
    <>
      <p>Update_At: {StatusDataBase}</p>
      <p>pg_Version: {StatusDataBase}</p>
      <p>max_connections: {StatusDataBase}</p>
      <p>opened_connections: {StatusDataBase}</p>
    </>
  );
}