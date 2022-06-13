import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import routes from '../routes';
import { ProductCard, Filtering, Sorting, Pagination, Spinner } from '../components/';
import { fetchDataStore } from '../api/fetch-data';
import style from './listing-page.module.scss';
import { useParams } from 'react-router-dom';


export default function Listing() {
  const { filter } = useParams();
  const history = useHistory();
  const [productList, setProductList] = useState([]);
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
        setProductList(json);
        setFilteredList(json);
      })
      .catch(err => { console.log('Promisse rejected.', err.message) });
  }
    , []);


  function handleFilter(selectedFilter) {
    history.push(`${routes.Listing}${selectedFilter}`);
  };
  
  useEffect(() => {
    filter === 'all' ? setFilteredList(productList) : setFilteredList(productList.filter(product => product.category === filter));
  
    setSelectedSorting('--');
    setCurrentPage(1);
  }, [filter, productList])

  function handleSort(value, selectedSorting) {
    const [order, option] = value.split('.');

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
            value={filter || "all"}
          />
          <Sorting
            options={sortOptions}
            selected={selectedSorting}
            handleChange={handleSort}
          />
        </div>
      </section>
      {getPaginatedList().length ?
        (
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
        ) :
        <Spinner msg="Feeding unicorns..." />
      }
      <Pagination
        offset={offset}
        totalItems={filteredList.length}
        handleClick={handlePagination}
        currentPage={currentPage}
      />
    </main >
  );
};