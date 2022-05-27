import React, { useEffect, useRef } from 'react';
import { fetchDataStore } from '../api/fetch-data';


export default function Filtering({ handleChange }) {

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
      <div className="select-box-label">Add a filter: </div>
      <select
        onChange={onChange}
        name="categories"
        id="filtering"
        className="select-box"
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

