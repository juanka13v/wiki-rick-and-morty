import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import Search from "./components/Search";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";
import CardDetails from "./components/CardDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<CardDetails/>} />

        <Route path="/episodes" element={<Episodes/>} />
        <Route path="/episodes/:id" element={<CardDetails/>} />

        <Route path="/locations" element={<Locations/>} />
        <Route path="/locations/:id" element={<CardDetails/>} />
      </Routes>
    </Router>
  )
}


const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchData, setFetchData] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  const { info, results } = fetchData;

  const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

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
      <h1 className="text-center">
        Characters
      </h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />

      <div className="container">
        <div className="row">
          <Filters
            setSpecies={setSpecies}
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        info={info}
      />
    </div>
  );
}

export default App;
