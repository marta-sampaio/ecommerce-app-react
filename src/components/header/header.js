import { Link, useLocation } from 'react-router-dom';
import { useUserContext } from '../../context/user';
import routes from '../../routes';
import image from '../../assets/logo-1.png';
import style from './header.module.scss';
import { useCallback } from 'react';


export default function Header() {
  const { user, setUser } = useUserContext();

  const handleClick = useCallback(() => {
    setUser(null);
  }, [setUser]);

  const location = useLocation();


  return (
    location.pathname !== '/404' ?
      <header className={style.header}>
        <div>
          <img
            src={image}
            alt="Company logo."
          />
        </div>
        {user ? (
          <div className={style.profile}>
            <i className={`fas fa-user-circle ${style.icon}`}></i>
            <div className={style.welcome}>
              Welcome back, <span className={style.username}>{user.name.firstname}</span>!
            </div>
            <Link to={`/listing`}>
              <button
                onClick={handleClick}
                type="submit"
                className={style.btn}
              >
                Log out
              </button>
            </Link>
          </div>
        ) :
          <Link to={routes.Login}>
            <button type="submit" className={style.btn}>Login</button>
          </Link>
        }
      </header>
      : null
  );
};