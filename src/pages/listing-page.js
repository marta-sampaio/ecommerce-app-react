import React, { useEffect, useState } from 'react';
import { ProductCard, Select, Sorting, Pagination } from '../components/';
import './listing-page.css';

import fetchDataStore from '../api/fetch-data';
import data from '../api/data';


export default function Listing() {

  const [prodList, setProdList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedSorting, setSelectedSorting] = useState('--');
  const sortOptions = [
    { id: 1, label: '--', value: '--' },
    { id: 2, label: 'Lowest Price', value: 'asc.price' },
    { id: 3, label: 'Highest Price', value: 'desc.price' },
    { id: 4, label: 'User rating', value: 'desc.rating' }
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const offset = 4;


  /*
    useEffect(() => {
      fetchDataStore('')
        .then(prodList => setProdList(prodList))
        .catch(err => { console.log('Promisse rejected.', err.message) });
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

    setSelectedSorting('--')
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



  function getPaginatedList() {
    const startIndex = (currentPage - 1) * offset;
    const endIndex = startIndex + offset;
    return filteredList.slice(startIndex, endIndex);
  };


  function paginate(number) {
    setCurrentPage(number);
  };


  return (
    <div className="wrapper-list-page">
      <div className="header-btn-list">
        <h1>Find someting you like</h1>
        <div className="wrapper-btn-list">
          <div className="btn-1-list">
            <Select
              options={options}
              selected={selectedFilter}
              handleChange={updateFilter}
            />
          </div>
          <div className="btn-2-list">
            <Sorting
              options={sortOptions}
              selected={selectedSorting}
              handleChange={sortList}
            />
          </div>
        </div>
      </div>
      <div className="wrapper-grid-list">
        {getPaginatedList().map(({ id, title, image, price, rating }) => (
          <div key={id} className="grid-item-list">
            <ProductCard
              id={id}
              title={title}
              image={image}
              price={price}
              currency="€"
              ratingLabel="Average rating: "
              rating={rating}
            />
          </div>
        ))
        }
      </div >
      <Pagination
        offset={offset}
        totalItems={filteredList.length}
        handleClick={paginate}
      />
    </div >
  );
};


