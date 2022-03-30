import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../assets/not-found-1.jpg';
import routes from '../routes';
import './not-found-page.css';

export default function NotFound() {

  let navigate = useNavigate();

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
        <Link to={routes.Listing} className="btn">Check our products</Link>
        <button
          type="button"
          className="btn"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
    </div>
  );
};
