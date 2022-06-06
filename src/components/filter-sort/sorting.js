import React from 'react';
import style from './buttons.module.scss';


export default function Sorting({ options, handleChange, selected }) {
  function onChange(e) {
    handleChange(e.target.value);
  };

  return (
    <div>
      <div className={style.label}>Sort by: </div>
      <select
        onChange={onChange}
        value={selected}
        name="sorting"
        id="sorting"
        className={style.select}
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
