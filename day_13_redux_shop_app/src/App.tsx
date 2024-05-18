import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import CartPage from './pages/CartPage';

const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 150px)' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='product/:id' element={<DetailPage />} />
          <Route path='cart' element={<CartPage />} />
          {/* 
          <Route path='cart' element={<CartPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='order' element={<OrderPage />} />
          <Route path='*' element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
