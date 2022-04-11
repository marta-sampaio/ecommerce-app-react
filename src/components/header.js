import { Link, useLocation } from 'react-router-dom';
import './header.css';
import image from '../assets/logo-1.png';
import { useUserContext } from '../context/user';


export default function Header() {
  const { user, setUser } = useUserContext();

  function handleClick() {
    setUser();
    sessionStorage.removeItem('USER_SSKEY');
  };

  const location = useLocation();


  return (
    location.pathname !== '/404' ?
      <header className="wrapper-header">
        <img
          src={image}
          alt="Company logo."
          className="img-logo-header"
        />
        {user ? (
          < div className="profile">
            <i className="fas fa-user-circle user-icon"></i>
            <div className="welcome-user">
              Welcome back, <span className="user-name">{user.name.firstname}</span>!
            </div>
            <Link to={`/listing`}>
              <button
                onClick={handleClick}
                type="submit"
                className="header-btn"
              >
                Log out
              </button>
            </Link>
          </div>
        ) :
          <Link to={`/login`}>
            <button type="submit" className="header-btn">Login</button>
          </Link>
        }
      </header >
      : null
  );
};