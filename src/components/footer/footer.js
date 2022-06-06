import React from 'react';
import { useLocation } from 'react-router-dom';
import style from './footer.module.scss';
import image from '../../assets/logo-1.png';


export default function Footer() {

  const location = useLocation();

  return (
    location.pathname !== '/404' ?
      <footer>
        <div className={style.imgs}>
          <div>
            <img
              src={image}
              alt="Company logo."
              className={style.logo}
            />
          </div>
          <ul className={`${style.ul} ${style.social}`}>
            <li>
              <a href="http://" target="_blank" rel="noreferrer">
                <i className={`fa-brands fa-instagram ${style.icon}`} aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noreferrer">
                <i className={`fa-brands fa-twitter ${style.icon}`} aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noreferrer">
                <i className={`fa-brands fa-linkedin ${style.icon}`} aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className={style.brand}>
          <h2>BRAND</h2>
          <ul className={style.ul}>
            <li>
              <a href="http://" target="_blank" rel="noreferrer">
                About Us
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noreferrer">Blog</a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noreferrer">Press</a>
            </li>
          </ul>
        </div>
        <div className={style.help}>
          <h2>HELP</h2>
          <ul className={style.ul}>
            <li>
              <a href="http://" target="_blank" rel="noreferrer">Contact Us</a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noreferrer">Returns & Exchanges</a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noreferrer">FAQ</a>
            </li>
          </ul>
        </div>
        <div className={style.newsletter}>
          <h2>NEWSLETTER</h2>
          <p>Join our mailing list and get access to news and special offers.</p>
          <form className={style.form}>
            <input type="email"
              id="email"
              pattern=".+@globex\.com"
              placeholder="Enter your email"
              aria-label="email"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className={style.copyrights}>
          ©  2022 Fake Store - All Rights Reserved.
        </div>
      </footer >
      : null
  );
};
