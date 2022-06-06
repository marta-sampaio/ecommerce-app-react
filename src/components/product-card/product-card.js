import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import style from './product-card.module.scss';


export default function ProductCard({ id, title, image, price, rating: { rate }, currency, ratingLabel }) {

  return (
    <Link to={`${routes.Product}${id}`} className={style.wrapper} >
      <div
        data-text={title}
        className={`${style.imgWrapper} ${style.tooltip}`}>
        <img src={image} alt={title} className={style.img} />
      </div>
      <h2 className={style.title}>{title}</h2>
      <div className={style.price}>{price} {currency}</div>
      <div className={style.rating}>{ratingLabel}{rate}</div>
    </Link >
  );
};