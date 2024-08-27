// NavBar.js
import React, { useState } from 'react';
import logo from '../assets/logo_transparent.png'; 
import '../css/navBar.css';

export const NavBar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  const handleLinkClick = () => {
    setIsChecked(false);
  };

 
  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <nav>
      <input
        type="checkbox"
        id="check"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <img
        src={logo}
        className="custom-pointer"
        alt="Logo"
        onClick={() => window.location.href = '#home'}
      />
      <ul className={isChecked ? 'menu-open' : ''}>
        <li><a href="#about" onClick={handleLinkClick}>About me</a></li>
        <li><a href="#technologies" onClick={handleLinkClick}>Technologies</a></li>
        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>
      
      <button id="dialog-button" onClick={toggleDialog}>Mostrar</button>
      {isDialogOpen && (
        <dialog id="dialog" open>
          <p>Contenido del diálogo</p>
        </dialog>
      )}
    </nav>
  );
};
