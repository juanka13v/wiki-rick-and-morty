import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import InputGroup from "../components/InputGroup";

const Locations = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);

  const {  name, type, dimension } = info;

  const url = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(url).then((res) => res.json());
      setInfo(data);

      let fetchCharacters = await Promise.all(
        data.residents.map((resident) => {
          return fetch(resident).then((res) => res.json());
        })
      );
      setResults(fetchCharacters)
    })();
  }, [url]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-4">
          Location :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Dimension : {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h5 className="text-center">
          Type : {type === "" ? "Unknown" : type}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
            <h4 className="text-center mb-4">
                Pick Location
            </h4>

            <InputGroup total={126} name="Location" setId={setId}/>
        </div>
        <div className="col-lg-8 col-12">
            <div className="row">
                <Cards page="/locations/" results={results} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
