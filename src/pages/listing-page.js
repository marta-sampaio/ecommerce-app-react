import React, { useEffect, useState } from 'react';
import { ProductCard, Select, Sorting } from '../components/';
import fetchDataStore from '../api/fetch-data';
import './listing-page.css';
import data from '../api/data';


export default function Listing() {

  const [prodList, setProdList] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [selectedSorting, setSelectedSorting] = useState('none,none');

  const sortOptions = [
    { id: 1, label: '--', value: 0 },
    { id: 2, label: 'Lowest Price', value: 'asc.price' },
    { id: 3, label: 'Highest Price', value: 'desc.price' },
    { id: 4, label: 'User rating', value: 'desc.rating' }
  ];

  /*
   useEffect(() => {
     fetchDataStore('')
       .then(prodList => setProdList(prodList))
       .catch(err => { console.log('Promisse 1 rejected.', err.message) });
     setOptions([...new Set(prodList.map(product => product.category))]);
   }
     , []);
 
 */

  useEffect(() => {
    setProdList(data);
    setOptions([...new Set(data.map(product => product.category))]);
  }
    , []);


  useEffect(() => {
    setFilteredList([...prodList]);
  }
    , [prodList]);


  function updateFilter(selectedFilter) {
    setSelectedFilter(selectedFilter);
    selectedFilter ? setFilteredList([...prodList].filter(product => product.category === selectedFilter)) : setFilteredList([...prodList]);

    setSelectedSorting('none,none')
  };



  function sortList(value, selectedSorting) {
    const order = value.split('.')[0];
    const option = value.split('.')[1];

    if (option === 'price') {
      order === 'asc' ? setFilteredList([...filteredList].sort((a, b) => a[option] - b[option])) : setFilteredList([...filteredList].sort((a, b) => b[option] - a[option]));
    } else if (option === 'rating') {
      setFilteredList([...filteredList].sort((a, b) => b[option].rate - a[option].rate));
    }

    setSelectedSorting(selectedSorting);
  };


  return (
    <div className="main-wrapper">
      <div className="flex results-header">
        <h1>Find someting you like</h1>
        <div className="flex btn-wrapper">
          <div className="btn1">
            <Select
              options={options}
              selected={selectedFilter}
              handleChange={updateFilter}
            />
          </div>
          <div className="btn2">
            <Sorting
              options={sortOptions}
              selected={selectedSorting}
              handleChange={sortList}
            />
          </div>
        </div>
      </div>
      <div className="grid-wrapper">
        {filteredList.map(({ id, title, image, price, rating }) => (
          <div className="grid-item">
            <div className="product-card">
              <ProductCard
                key={id}
                title={title}
                image={image}
                price={price}
                currency="€"
                ratingLabel="Average rating: "
                rating={rating}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};