import React from 'react';
import { Link, } from 'react-router-dom';
import '../Navbar/NavBar.css';
import Burger from './Burger';
import logo from '../../assets/images/logo.svg';

function NavBar() {
  return (
    <div className="Navbar--container">
      <div className="Navbar--logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="Navbar--li">
        <ul>
          <li>
            <Link exact to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/careers" activeClassName="active">
              Careers
            </Link>
          </li>
          <li>
            <Link to="/events" activeClassName="active">
              Events
            </Link>
          </li>
          <li>
            <Link to="/products" activeClassName="active">
              Products
            </Link>
          </li>
          <li>
            <Link to="/support" activeClassName="active">
              Support
            </Link>
          </li>
  
        </ul>
      </div>
      <Burger />
    </div>
  );
}

export default NavBar;
