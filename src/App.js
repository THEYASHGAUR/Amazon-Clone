import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Location from './components/Location/Location';
import Signup from './components/Signup/Signup';
import Orders from './components/Orders/Orders.jsx';
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Main>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/location" element={<Location />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/orders" element={<Orders />} />

        </Routes>

      </Main>

    </>
  );
}

export default App;
