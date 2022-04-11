import React from 'react';
import { useLocation } from 'react-router-dom';
import './footer.css';
import image from '../assets/logo-1.png';


export default function Footer() {

  const location = useLocation();

  return (
    location.pathname !== '/404' ?
      < footer >
        <div className="footer-social">
          <div className="logo">
            <img
              src={image}
              alt="Company logo."
              className="img-logo-footer"
            />
          </div>
          <p>Lorem ipsum dolor sit amet. Est quod nihil qui soluta cupiditate qui odio saepe sunt quia est voluptatem recusandae.</p>
          <ul className="list-footer social-icons">
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram social-i" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter social-i" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin social-i" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-brand">
          <h2>BRAND</h2>
          <ul className="list-footer">
            <li>
              <a href="#">
                About Us
              </a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Returns and exchanges</a>
            </li>
          </ul>
        </div>
        <div className="footer-help">
          <h2>HELP</h2>
          <ul className="list-footer">
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy settings</a>
            </li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h2>NEWSLETTER</h2>
          <p>Join our mailing list and get access to news and special offers</p>
          <form className="form-newsletter">
            <input type="email"
              id="email"
              pattern=".+@globex\.com"
              placeholder="Enter your email"
              aria-label="email"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-copyrights">
          ©  2022 Fake Store - All Rights Reserved.
        </div>
      </footer >
      : null
  );
};
