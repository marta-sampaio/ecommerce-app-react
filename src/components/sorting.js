import React from 'react'


export default function Sorting({ options, handleChange, selected }) {
  function onChange(e) {
    handleChange(e.target.value);
  };

  return (
    <div>
      <div className="select-box-label">Sort by: </div>
      <select
        onChange={onChange}
        value={selected}
        name="sorting"
        id="sorting"
        className="select-box"
      >
        {options.map(option => {
          return (
            <option
              key={option.id}
              value={option.value}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  )
};
