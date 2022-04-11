import React from 'react';


export default function Filtering({ options, handleChange, selected }) {
  function onChange(e) {
    handleChange(e.target.value);
  };

  return (
    <div>
      <div className="select-box-label">Add a filter: </div>
      <select
        onChange={onChange}
        name="categories"
        value={selected}
        id="filtering"
        className="select-box"
      >
        <option value="All">All</option>
        {options.map(category => {
          return (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          );
        })}
      </select>
    </div >
  );

};

