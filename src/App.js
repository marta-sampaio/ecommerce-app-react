import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ReferenceIdContext, ReferenceIdContextProvider } from './context/ref-prod-id'

import { Login, NotFound, Listing, Product } from './pages';
import routes from './routes';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path={routes.Login} element={<Login />} />
        <Route index element={<Listing />} />
        <Route path={routes.Listing} element={<Listing />} />
        <Route exact path="product/:id" element={<Product />} />
        {/* <Route exact path={routes.Product} element={<Product />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
