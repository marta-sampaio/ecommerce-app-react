import React from 'react'

export default function Sorting({ options, handleChange, selected }) {
  const onChange = e => {
    handleChange(e.target.value);
  };

  return (
    <>
      <label for="sorting">Sort by: </label>
      <select
        onChange={onChange}
        value={selected}
        name="sorting"
        id="sorting"
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
    </>
  )
};
