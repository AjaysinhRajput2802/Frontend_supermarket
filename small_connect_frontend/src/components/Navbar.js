import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
      <header>
        <a href = "/" className="logo">sConnect</a>
        <span className="right" >
          <input type="text" className="search-box" placeholder="Search Shop" ></input>
          <a href="/cart" className="cart-link">Cart</a>
          <a href="/login"><button className="btn">Sign In</button></a>
        </span>
      </header>
  );
}

export default Navbar;
