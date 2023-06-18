import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Requests from "./Loader";
import axios from "axios";

function App() {
  const [loader, setLoader] = useState(false);
  const [option, setOption] = useState("Sem opções");
  const handleClick = (e) => {
    setLoader(true);
    setOption(e.target.getAttribute("data-option"));
  };
  const [results, setResults] = useState("Selecione uma opção acima.");

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/${option}`)
      .then((res) => {
        setResults(JSON.stringify(res.data));
        setLoader(false);
      })
      .catch((err) => {
        alert(err);
      });
  }, [option]);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">Star Wars</h1>
        <div className="col d-flex justify-content-center gap-5">
          <button
            onClick={handleClick}
            data-option="films"
            className="btn btn-danger btn-lg col-1"
          >
            <span className="glyphicon glyphicon-film"></span> <br />
            Filmes
          </button>
          <button
            onClick={handleClick}
            data-option="people"
            className="btn btn-success btn-lg col-1"
          >
            <span className="glyphicon glyphicon-user"></span> <br />
            Personagens
          </button>
          <button
            onClick={handleClick}
            data-option="planets"
            className="btn btn-primary btn-lg col-1"
          >
            <span className="glyphicon glyphicon-globe"></span> <br />
            Planetas
          </button>
        </div>
      </div>
      <hr />
      <div className="row d-flex justify-content-center">
        <div className="col-8">
          <ul className="text-center">
            <div>{loader ? <Requests /> : JSON.stringify(results)}</div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
