import React, { useState } from 'react';
import logo from '../assets/logo_transparent.png'; 
import '../css/navBar.css';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <img
        src={logo}
        className="custom-pointer"
        alt="Logo"
        onClick={() => {window.location.href = '#home'; handleLinkClick()}
        
        
        }
      />
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className="fas fa-bars"></i>
      </div>
      <ul className={isMenuOpen ? 'menu-open' : ''}>
        <li><a href="#about" onClick={handleLinkClick}>About me</a></li>
        <li><a href="#technologies" onClick={handleLinkClick}>Technologies</a></li>
        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  );
};
