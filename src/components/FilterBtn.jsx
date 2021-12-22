import React from "react";

const FilterBtn = ({ item, name, index, task, setPageNumber }) => {
  return (
    <div className="">
      <style jsx="true">
        {`
          .bg:checked + label {
            background-color: #0b5ed7;
            color: #fff;
          }

          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          onClick={() => {
            setPageNumber(1);
            task(item);
          }}
          className="form-check-input bg"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
          {item}
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;
