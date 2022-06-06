import React from 'react';
import style from './pagination.module.scss';


export default function Pagination({ offset, totalItems, handleClick, currentPage }) {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / offset); i++) {
    pageNumbers.push(i);
  }


  return (
    <nav>
      <ul className={style.ul}>
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => handleClick(number)}
              className={style.btn}
              id={number === currentPage ? `${style.active}` : null}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};