import React from 'react';
import './pagination.css';


export default function Pagination({ offset, totalItems, handleClick, currentPage }) {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / offset); i++) {
    pageNumbers.push(i);
  }


  return (
    <nav className="wrapper-pagination">
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => handleClick(number)}
              className="btn-pagination"
              id={number === currentPage ? 'active-pg' : null}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};