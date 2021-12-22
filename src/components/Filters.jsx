import React from "react";
import Gender from "./Gender";
import Species from "./Species";
import Status from "./Status";

const Filters = ({ setPageNumber, setStatus, setGender, setSpecies }) => {
  const handleClear = () => {
    setSpecies("");
    setStatus("");
    setPageNumber(1);
    setGender("");
    window.location.reload(false);
  };

  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-4">Filter</div>
      <div
        onClick={handleClear}
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline"
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
      </div>
    </div>
  );
};

export default Filters;
