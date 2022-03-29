import React from 'react';
import './product-card.css';

export default function ProductCard({ title, image, price, rating, currency, ratingLabel }) {
  return (
    <>
      <div className="img-wrapper">
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <div className="price">{price} {currency}</div>
      <div className="rating">{ratingLabel}{rating.rate}</div>
    </>
  );
};