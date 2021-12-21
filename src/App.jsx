import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import Search from "./components/Search";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchData, setFetchData] = useState([]);
  const [search, setSearch] = useState("");



  const { info, results } = fetchData;

  const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

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

      <Search setSearch={setSearch} setPageNumber={setPageNumber}/>

      <div className="container">
        <div className="row">
          <Filters />
          <div className="col-8">
            <div className="row">
              <Cards results={results}/>
            </div>
          </div>
        </div>
      </div>

      <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} info={info}/>
    </div>
  );
}

export default App;
