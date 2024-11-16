import React from 'react';
import './Css.css';
import Logo from './Screenshot 2024-11-16 122636.png';

const Header = () => {
  return (
    <div id="highlight" className="header-container">
      <img src={Logo} alt="Expre logo" className="header-image" />
      <h1>Expre</h1>
    </div>
  );
};

export default Header;
