import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, NotFound, Listing, Product } from './pages';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Listing />} />
        <Route path="*" element={<NotFound />} />
        <Route path={routes.Listing} element={<Listing />} />
        <Route path={routes.Login} element={<Login />} />
        <Route path={routes.Product} element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
