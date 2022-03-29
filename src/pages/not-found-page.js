import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/not-found-1.jpg';
import routes from '../routes';
import './not-found-page.css';

export default function NotFound() {
  return (
    <div className="container">
      <img
        src={image}
        alt="404 error illustration showing ghosts"
        className="img-error"
      />
      <div className="card">
        <h1>Oops!</h1>
        <p>It looks like you've reached a url that doesn't exist.</p>
        <Link to={routes.Listing} className="btn">Back to our products</Link>
      </div>
    </div>
  );
};
