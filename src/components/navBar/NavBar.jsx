import { useState, useEffect, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import './NavBar.css'

export const NavBar = ({ language, handleLanguageToggle, texts }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef(null);

  const spanishFlag = 'https://flagcdn.com/w320/es.png';
  const englishFlag = 'https://flagcdn.com/w320/gb.png';

  const handleNavAction = (section = '') => {
    if (section) setActiveSection(section);
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
  };

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isMenuOpen);
  }, [isMenuOpen]);

  // Observar las secciones al hacer scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const options = {
      root: null,
      rootMargin: '-20% 0px -80% 0px', 
      threshold: 0
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
          
          if (window.history.replaceState) {
            window.history.replaceState(null, null, `#${sectionId}`);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, options);
    
    sections.forEach(section => {
      observerRef.current.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []); 

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash !== activeSection) {
        setActiveSection(hash);
      }
    };

    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && navLinks.some(link => link.href === `#${initialHash}`)) {
      setActiveSection(initialHash);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activeSection]);

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