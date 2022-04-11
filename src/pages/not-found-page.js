import React from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import image from '../assets/not-found-1.png';
import './not-found-page.css';


export default function NotFound() {

  const history = useHistory();

  const back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <>
      <Redirect to='/404' />
      <main className="wrapper-error">
        <img
          src={image}
          alt="404 error illustration showing ghosts"
          className="img-error"
        />
        <div className="card-error">
          <h1>Oops!</h1>
          <p>It looks like you've reached a url that doesn't exist.</p>
          <button className="btn-error">
            <Link to="/listing">Check our products</Link>
          </button>
          <button
            onClick={back}
            type="button"
            className="btn-error"
          >
            Go back
          </button>
        </div>
      </main>
    </>
  );
};
