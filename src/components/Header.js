import React from 'react';
import logo from '../assets/img/pagelogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <img id="logo" src={logo} alt="Food 4 you." />
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <li>Random Recipe</li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
