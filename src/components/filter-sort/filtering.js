import React, { useEffect, useRef } from 'react';
import { fetchDataStore } from '../../api/fetch-data';
import style from './buttons.module.scss';


export default function Filtering({ handleChange, value }) {

  const options = useRef([]);

  useEffect(() => {
    fetchDataStore(`categories`)
      .then(json => options.current = json)
      .catch(err => { console.log('Promisse rejected.', err.message) });
  }
    , []);


  function onChange(e) {
    handleChange(e.target.value);
  };

  return (
    <div>
      <div className={style.label}>Choose a category: </div>
      <select
        onChange={onChange}
        name="categories"
        id="filtering"
        className={style.select}
        value={value}
      >
        <option value="all">all</option>
        {options.current.map(category => {
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

