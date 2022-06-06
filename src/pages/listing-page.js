import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from "react-router-dom";
import routes from '../routes';
import { ProductCard, Filtering, Sorting, Pagination } from '../components/';
import { fetchDataStore } from '../api/fetch-data';
import style from './listing-page.module.scss';


export default function Listing() {

  const history = useHistory();
  const prodList = useRef([]);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedSorting, setSelectedSorting] = useState('--');
  const sortOptions = [
    { id: 1, label: '--', value: '--' },
    { id: 2, label: 'lowest price', value: 'asc.price' },
    { id: 3, label: 'highest price', value: 'desc.price' },
    { id: 4, label: 'user rating', value: 'desc.rating' }
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const offset = 4;


  useEffect(() => {
    fetchDataStore('')
      .then(json => {
        prodList.current = json;
        setFilteredList(json);
      })
      .catch(err => { console.log('Promisse rejected.', err.message) });
  }
    , []);


  function handleFilter(selectedFilter) {
    selectedFilter === 'all' ? setFilteredList(prodList.current) : setFilteredList(prodList.current.filter(product => product.category === selectedFilter));

    setSelectedSorting('--');
    setCurrentPage(1);
    history.push(`${routes.Listing}${selectedFilter}`);
  };


  function handleSort(value, selectedSorting) {
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

  function handlePagination(number) {
    setCurrentPage(number);
  };


  return (
    <main className={style.main}>
      <section className={style.header}>
        <h1>Find something you like</h1>
        <div className={style.btnWrapper}>
          <Filtering
            handleChange={handleFilter}
          />
          <Sorting
            options={sortOptions}
            selected={selectedSorting}
            handleChange={handleSort}
          />
        </div>
      </section>
      <section className={style.listWrapper}>
        {getPaginatedList().map(({ id, title, image, price, rating }) => (
          <ProductCard
            key={id}
            id={id}
            title={title}
            image={image}
            price={price}
            currency="€"
            ratingLabel="Average rating: "
            rating={rating}
          />
        ))
        }
      </section >
      <Pagination
        offset={offset}
        totalItems={filteredList.length}
        handleClick={handlePagination}
        currentPage={currentPage}
      />
    </main >
  );
};


