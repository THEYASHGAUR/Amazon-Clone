import React from 'react';
import './Header.css';
import PlaceIcon from '@mui/icons-material/Place';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <div className="left__header">
        <Link className="home" to="/">
          <img src="amazon_logo2.png" alt="" className="header__logo" width="100px" />
        </Link>
        <Link className="header__location" to="/location">
          <PlaceIcon />
          <div>
            <p>Hello</p>
            <h4>Select your Address</h4>
          </div>
        </Link>

      </div>
      <div className="search__div">
        <input type="text" className='search__input' placeholder='Search Amazon.in' />
        <div className="search__button">
          <SearchIcon />
        </div>
      </div>
      <div className="right__header">
        <Link className="sign__in" to="signup">
          <p>Hello Sign Up</p>
          <h4>Account & List</h4>
        </Link>
        <Link className="return__order" to="orders">
          <p>Return</p>
          <h4>& Orders</h4>
        </Link>
        <Link className="cart" to="/cart">
          <ShoppingCartIcon />
          <span>0</span>
          <p>Cart</p>
        </Link>
      </div>

    </div>
  )
}

export default Header;
