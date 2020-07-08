import React from 'react';
import logo from '../assets/img/pagelogo.png';

const Header = () => {
  return (
    <header>
      <img id="logo" src={logo} alt="Food 4 you." />
      <nav>
        <ul>
          <li>Home</li>
          <li>Random Recipe</li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
