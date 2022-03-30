import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchDataStore from '../api/fetch-data';
import './product-page.css';


export default function Product() {

  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchDataStore(`/${id}`)
      .then(product => setProduct(product))
      .catch(err => { console.log('Promisse rejected.', err.message) });
  }
    , [id]);


  if (!product) return null;

  return (
    <article className="flex">
      <div className="grid product-wrapper">
        <img src={product.image} alt={product.title}></img>
        <div className="prod-info">
          <div>Average rating: {product.rating.rate}</div>
          <h1>{product.title}</h1>
          <div>{product.price} €</div>
          <button>Add to cart</button>
        </div>
        <p className="prod-description">product.description</p>
      </div>
    </article>
  );
};
