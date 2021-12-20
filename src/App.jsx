import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";

function App() {
  const [pageNumber, setPageNumber] = useState(2);
  const [fetchData, setFetchData] = useState([]);

  const { info, results } = fetchData;

  const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(url)
        .then((res) => res.json())
        .catch((res) => console.log(res));
      setFetchData(data);
    })();
  }, [url]);

  return (
    <div className="App">
      <h1 className="text-center my-4">
        Rick & Morty <span className="text-primary ubuntu">Wiki</span>
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results}/>
            </div>
          </div>
        </div>
      </div>

      <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
    </div>
  );
}

export default App;
