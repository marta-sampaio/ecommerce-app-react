import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchDataStore } from '../api/fetch-data';
import './product-page.css';


export default function Product() {

  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const history = useHistory();


  useEffect(() => {
    fetchDataStore(`/${id}`)
      .then(product => setProduct(product))
      .catch(err => { console.log('Promisse rejected.', err.message) });
  }
    , [id]);

  function back(e) {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <>
      {product ? (
        <main className="product-page-wrapper" >
          <button
            onClick={back}
            type="button"
            className="btn-return"
          >
            <span>&#171; </span><span> Go back</span>
          </button>
          <div className="wrapper-img">
            <img src={product.image} alt={product.title}></img>
          </div >
          <div className="prod-info">
            <div className="product-page-rating">Average rating: {product.rating.rate}</div>
            <h1 className="product-page-title">{product.title}</h1>
            <div className="product-page-price">{product.price} €</div>
            <button
              type="submit"
              className="product-page-btn"
            >
              Add to cart
            </button>
          </div>
          <div className="prod-description">
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>
        </main >
      ) : null}
    </>
  );
};
