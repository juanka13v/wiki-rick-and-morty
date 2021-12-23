import React from "react";

const InputGroup = ({ total, name, setId }) => {
  return (
    <div className="input-group mb-3">
      <select onChange={e => setId(e.target.value)} className="form-select" id={name} aria-label="Default select example">
        <option defaultValue value="1">Choose</option>
        {[...Array(total).keys()].map((episode, index) => {
          return (
            <option value={episode + 1} key={index}>
              {name} {episode + 1}{" "}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
