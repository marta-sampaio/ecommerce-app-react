import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
import { Login, NotFound, Listing, Product } from './pages';
import { Header, Footer } from './components';
import { UserContext } from './context/user';


function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('USER_SSKEY')));
  }
    , []);


  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={routes.Product} children={<Product />} />
          <Route path={routes.Login} children={<Login />} />
          <Route path={routes.Listing} children={<Listing />} />
          <Route exact path="/" children={<Listing />} />
          <Route path={routes.NotFound} children={<NotFound />} />
        </Switch>
        <Footer />
      </BrowserRouter >
    </UserContext.Provider>
  );
}

export default App;