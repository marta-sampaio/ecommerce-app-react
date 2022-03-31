import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import image from '../assets/not-found-1.jpg';
import './not-found-page.css';


export default function NotFound() {

  let history = useHistory();

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div className="error-wrapper">
      <img
        src={image}
        alt="404 error illustration showing ghosts"
        className="img-error"
      />
      <div className="card">
        <h1>Oops!</h1>
        <p>It looks like you've reached a url that doesn't exist.</p>
        <Link to="/listing" className="btn">Check our products</Link>
        <button
          onClick={back}
          type="button"
          className="btn"
        >
          Go back
        </button>
      </div>
    </div>
  );
};
