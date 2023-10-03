import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import burgerImg from '../../assets/images/icon-hamburger.svg';
import closeImg from '../../assets/images/icon-close.svg';
import './NavBar.css'
function Burger() {
  const [burger, setBurger] = useState(false);

  const closeMenu = () => {
    setBurger(false);
  };

  return (
    <div className="Navbar--liBurger">
      <div className="Navbar--iconBurger">
        <img src={burger ? closeImg : burgerImg} alt="icon-burger" onClick={() => setBurger(!burger)} />
      </div>
      {burger && (
        <div className="Navbar--ulBurger">
          <ul>
            <li>
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/careers" onClick={closeMenu}>
                Careers
              </Link>
            </li>
            <li>
              <Link to="/events" onClick={closeMenu}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={closeMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/support" onClick={closeMenu}>
                Support
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Burger;
