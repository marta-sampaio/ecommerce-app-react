import React from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import image from '../assets/not-found-1.png';
import style from './not-found-page.module.scss';


export default function NotFound() {

  const history = useHistory();

  const back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <>
      <Redirect to='/404' />
      <main className={style.main}>
        <img
          src={image}
          alt="404 error illustration showing ghosts"
          className={style.img}
        />
        <div className={style.card}>
          <h1>Oops!</h1>
          <p>It looks like you've reached a url that doesn't exist.</p>
          <button className={style.btn}>
            <Link to="/listing">Check our products</Link>
          </button>
          <button
            onClick={back}
            type="button"
            className={style.btn}
          >
            <span>&#171; </span><span> Go back</span>
          </button>
        </div>
      </main>
    </>
  );
};
