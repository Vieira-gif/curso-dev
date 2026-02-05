import image from "../public/svg/builder.png";

function Home() {
  return (
    <div>
      <h1>Aqui começa a tela de Construção</h1>
      <section>
        <h2>Endpoint /status</h2>
        <p>
          <a>https://www.stacklearn.com.br/api/v1/status</a>
        </p>
        <h2>Endpoint /migrations</h2>
        <p>
          <a>https://www.stacklearn.com.br/api/v1/migrations</a>
        </p>
      </section>
      <img src={image} width="500" height="600"></img>
    </div>
  );
}

export default Home;
