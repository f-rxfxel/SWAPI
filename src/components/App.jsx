import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div classNameName="App">
      <div class="container my-5">
        <div className="row">
            <h1 className="text-center">Star Wars</h1>
          <div className="col">
            <h3>Selecione uma opção ao lado</h3>
            <p>
              HAHAHAHAHAHAHAHAHAHAHHHHHHHHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ou pesquisa aq em baixo
            </p>
            <input type="text" />
          </div>
          <div className="col row d-flex justify-content-center gap-5">
            <a href="#" className="btn btn-danger btn-lg" role="button">
              <span className="glyphicon glyphicon-film"></span> <br />
              Filmes
            </a>
            <a href="#" className="btn btn-success btn-lg" role="button">
              <span className="glyphicon glyphicon-user"></span> <br />
              Personagens
            </a>
            <a href="#" className="btn btn-primary btn-lg" role="button">
              <span className="glyphicon glyphicon-globe"></span> <br />
              Planetas
            </a>
          </div>
        </div>
        <hr />
        <div className="row d-flex justify-content-center">
          <div className="col-8">
            <h1 className="text-center">Resultado</h1>
            <ul>
              <li>AHHASDHSDHFSHETGHDRGDJXRKGUBZYDRJKYHG</li>
              <li>AHHASDHSDHFSHETGHDRGDJXRKGUBZYDRJKYHG</li>
              <li>AHHASDHSDHFSHETGHDRGDJXRKGUBZYDRJKYHG</li>
              <li>AHHASDHSDHFSHETGHDRGDJXRKGUBZYDRJKYHG</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
