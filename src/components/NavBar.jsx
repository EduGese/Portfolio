import React, { useState } from 'react';
import logo from '../assets/resetImage.png';
import '../css/navBar.css';
import Avatar from '@mui/material/Avatar';

export const NavBar = ({ language, handleLanguageToggle, texts }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const spanishFlag = 'https://flagcdn.com/w320/es.png';
  const englishFlag = 'https://flagcdn.com/w320/gb.png';

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      {/* <img
        src={logo}
        className="custom-pointer"
        alt="Logo"
        onClick={() => { window.location.href = '#home'; handleLinkClick() }
        }
      /> */}
      <Avatar src='src/assets/avataaars.png' onClick={() => { window.location.href = '#home'; handleLinkClick() }}/>
      <Avatar onClick={handleLanguageToggle}  src={language === 'es' ? englishFlag : spanishFlag}
        alt={language === 'es' ? 'Change to English' : 'Change to Spanish'}
        sx={{ width: '24px', height: '24px' , display:{ xs: 'block', sm: 'block', md: 'none'}}}/>
       
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className="fas fa-bars"></i>
      </div>
      <ul className={isMenuOpen ? 'menu-open' : ''}>
        <li onClick={handleLinkClick}><a href="#about">{texts.about}</a></li>
        <li onClick={handleLinkClick}><a href="#technologies">{texts.technologies}</a></li>
        <li onClick={handleLinkClick}><a href="#projects">{texts.projects}</a></li>
        <li onClick={handleLinkClick}><a href="#education">{texts.education}</a></li>
        <li onClick={handleLinkClick}><a href="#contact">{texts.contact}</a></li>
      </ul>
      <Avatar onClick={handleLanguageToggle}  src={language === 'es' ? englishFlag : spanishFlag}
        alt={language === 'es' ? 'Change to English' : 'Change to Spanish'}
        sx={{ width: '24px', height: '24px' , display:{ xs: 'none', sm: 'none', md: 'block'}}}/>
    </nav>
  );
};
