import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

function App() {
  const [loader, setLoader] = useState(false);
  const [option, setOption] = useState(null);
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  const handleClick = (e) => {
    setLoader(true);
    setOption(e.target.getAttribute("data-option"));
    setSearchBarVisible(true);
  };

  useEffect(() => {
    if (option) {
      axios
        .get(`https://swapi.dev/api/${option}`)
        .then((res) => {
          setResults(res.data.results);
          setLoader(false);
        })
        .catch((err) => {
          console.log(err);
          setLoader(false);
        });
    }
  }, [option]);

  const filteredResults = results.filter((result) => {
    const name = result.name ? result.name.toLowerCase() : "";
    const title = result.title ? result.title.toLowerCase() : "";

    return (
      name.includes(searchTerm.toLowerCase()) ||
      title.includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="container-fluid bg-dark" style={{ minHeight: "100vh" }}>
      <div className="row py-5">
        <h1 className="text-center text-warning fw-bold pb-5">Star Wars</h1>
        <div className="col d-flex justify-content-center gap-5">
          <button
            onClick={handleClick}
            data-option="films"
            className="btn btn-warning btn-lg col-3"
          >
            <span className="glyphicon glyphicon-film me-2"></span>
            Filmes
          </button>
          <button
            onClick={handleClick}
            data-option="people"
            className="btn btn-warning btn-lg col-3"
          >
            <span className="glyphicon glyphicon-user me-2"></span>
            Personagens
          </button>
          <button
            onClick={handleClick}
            data-option="planets"
            className="btn btn-warning btn-lg col-3"
          >
            <span className="glyphicon glyphicon-globe me-2"></span>
            Planetas
          </button>
        </div>
      </div>
      {searchBarVisible && (
        <div className="row mt-4">
          <div className="col-8 mx-auto">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
      <div className="row d-flex justify-content-center">
        <div className="col-8">
          {loader ? (
            <div className="text-center text-white"><Loader /></div>
          ) : (
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {filteredResults.map((result, index) => (
                <div className="col" key={index}>
                  <div className="card bg-black text-white">
                    <div className="card-body">
                      <h5 className="card-title">
                        {result.name || result.title}
                      </h5>
                      {option === "films" && (
                        <>
                          <p className="card-text">
                            <strong>Diretor:</strong> {result.director}
                          </p>
                          <p className="card-text">
                            <strong>Produtor:</strong> {result.producer}
                          </p>
                          <p className="card-text">
                            <strong>Episódio:</strong> {result.episode_id}
                          </p>
                          <p className="card-text">
                            <strong>Data de lançamento:</strong>{" "}
                            {result.release_date}
                          </p>
                        </>
                      )}
                      {option === "people" && (
                        <>
                          <p className="card-text">
                            <strong>Altura:</strong> {result.height}
                          </p>
                          <p className="card-text">
                            <strong>Peso:</strong> {result.mass}
                          </p>
                          <p className="card-text">
                            <strong>Cor do cabelo:</strong> {result.hair_color}
                          </p>
                        </>
                      )}
                      {option === "planets" && (
                        <>
                          <p className="card-text">
                            <strong>Clima:</strong> {result.climate}
                          </p>
                          <p className="card-text">
                            <strong>Diâmetro:</strong> {result.diameter}
                          </p>
                          <p className="card-text">
                            <strong>População:</strong> {result.population}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;