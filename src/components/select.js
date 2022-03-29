import React from 'react';

export default function Select({ options, handleChange, selected }) {
  const onChange = e => {
    handleChange(e.target.value);
  };

  return (
    <>
      <label for="filtering">Add filter: </label>
      <select
        onChange={onChange}
        name="categories"
        value={selected}
        id="filtering"
      >
        <option value="">All</option>
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
    </>
  );

};

