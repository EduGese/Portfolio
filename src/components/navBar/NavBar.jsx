import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import './navBar.css'

export const NavBar = ({ language, handleLanguageToggle, texts }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const spanishFlag = 'https://flagcdn.com/w320/es.png';
  const englishFlag = 'https://flagcdn.com/w320/gb.png';

  const handleNavAction = (section = '') => {
    if (section) setActiveSection(section);
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
  };


  // const handleHomeClick = () => {
  //   setActiveSection('home');
  //   setIsMenuOpen(false);
  //   document.body.classList.remove('no-scroll');
  //   window.location.href = '#home';
  // };

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isMenuOpen);
  }, [isMenuOpen]);


  const FlagAvatar = ({ display }) => (
    <Avatar
      onClick={handleLanguageToggle}
      src={language === 'es' ? englishFlag : spanishFlag}
      alt={language === 'es' ? 'Change to English' : 'Change to Spanish'}
      sx={{ width: '24px', height: '24px', display, cursor: 'pointer' }}
    />
  );

  const navLinks = [
    { href: '#home', text: texts.home },
    { href: '#about', text: texts.about },
    { href: '#technologies', text: texts.technologies },
    { href: '#projects', text: texts.projects },
    { href: '#education', text: texts.education },
    { href: '#contact', text: texts.contact }
  ];

  return (
    <nav>
      {/* <Avatar
        // src='/assets/avataaars.png'
        // onClick={handleHomeClick}
        // sx={{ cursor: 'pointer' }}
      /> */}


      <FlagAvatar display={{ xs: 'block', sm: 'block', md: 'none' }} />

      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className="fas fa-bars"></i>
      </div>

      <ul className={isMenuOpen ? 'menu-open' : 'menu-close'}>
        {navLinks.map((link) => {
          const section = link.href.replace('#', '');
          return (
            <li key={section} onClick={() => handleNavAction(section)}>
              <a
                href={link.href}
                className={activeSection === section ? 'active' : ''}
              >
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>

      <FlagAvatar display={{ xs: 'none', sm: 'none', md: 'block' }} />
    </nav>
  );
};