import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login, NotFound, Listing, Product } from './pages';


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/product/:id([+-]?[0-9]+)`} children={<Product />} />
        <Route path="/login" children={<Login />} />
        <Route path="/listing" children={<Listing />} />
        <Route exact path="/" children={<Listing />} />
        <Route path="*" children={<NotFound />} />
      </Switch>
    </BrowserRouter >
  );
}

export default App;