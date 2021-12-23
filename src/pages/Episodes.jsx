import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import InputGroup from "../components/InputGroup";

const Episodes = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);

  const { air_date, name } = info;
  const url = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(url).then((res) => res.json());
      setInfo(data);

      let fetchCharacters = await Promise.all(
        data.characters.map((character) => {
          return fetch(character).then((res) => res.json());
        })
      );
      setResults(fetchCharacters)
    })();
  }, [url]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-4">
          Episode :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
            <h4 className="text-center mb-4">
                Pick Episodes
            </h4>

            <InputGroup total={51} name="Episodes" setId={setId}/>
        </div>
        <div className="col-lg-8 col-12">
            <div className="row">
                <Cards page="/episodes/" results={results} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
