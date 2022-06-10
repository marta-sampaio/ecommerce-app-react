import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchDataStore } from '../api/fetch-data';
import { Spinner } from '../components/';
import style from './product-page.module.scss';


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
        <main className={style.main}>
          <button
            onClick={back}
            type="button"
            className={style.back}
          >
            <span>&#171; </span><span> Go back</span>
          </button>
          <div className={style.wrapper}>
            <img src={product.image} alt={product.title}></img>
          </div >
          <div>
            <div className={style.rating}>Average rating: {product.rating.rate}</div>
            <h1 className={style.title}>{product.title}</h1>
            <div className={style.price}>{product.price} €</div>
            <button
              type="submit"
              className={style.btn}
            >
              Add to cart
            </button>
          </div>
          <div className={style.description}>
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>
        </main >
      ) : <Spinner msg="Thanks for your patience" />}
    </>
  );
};
