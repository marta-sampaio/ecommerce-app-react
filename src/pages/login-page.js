import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchUser } from '../api/fetch-data';
import { useUserContext } from '../context/user';
import routes from '../routes';
import './login-page.css';


export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUserContext();
  const [errorMsg, setErrorMsg] = useState(false);
  const history = useHistory();


  function handleSubmit(e) {
    e.preventDefault();
    fetchUser(username, password)
      .then(res => {
        setUser(res);
        sessionStorage.setItem('USER_SSKEY', JSON.stringify(res));
        history.push(`${routes.Listing}`);
      })
      .catch(err => {
        console.log('Promisse rejected.', err.message);
        setErrorMsg(true);
      });
  };


  function handleUserChange({ target: { value } }) {
    setUsername(value)
  };

  function handlePassChange({ target: { value } }) {
    setPassword(value)
  };

  function back(e) {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <main className="wrapper-login">

      <h1>Account Login</h1>
      <form
        onSubmit={handleSubmit}
        className="login-form"
      >
        <input
          onChange={handleUserChange}
          type="text"
          name="username"
          value={username}
          aria-label="Username"
          placeholder="Enter username..."
          id="username"
        />
        <input
          onChange={handlePassChange}
          type="password"
          name="password"
          value={password}
          aria-label="Password"
          placeholder="Enter password..."
          id="password"
        />
        <button type="submit">Login</button>
      </form >
      <button
        onClick={back}
        type="button"
        className="btn-return"
      >
        <span>&#171; </span><span> Go back</span>
      </button>
      {errorMsg &&
        <p className="login-error-msg">Wrong username/password. Please try again.</p>
      }
    </main>
  );
};