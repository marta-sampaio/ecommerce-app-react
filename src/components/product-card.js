import React from 'react';
import './product-card.css';
import { Link } from 'react-router-dom';


export default function ProductCard({ id, title, image, price, rating, currency, ratingLabel }) {

  return (
    <Link to={`product/${id}`} className="wrapper-product-card">
      <div className="wrapper-img-prod-card">
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <div className="price">{price} {currency}</div>
      <div className="rating">{ratingLabel}{rating.rate}</div>
    </Link>
  );
};