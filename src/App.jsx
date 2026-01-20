// import * as React from 'react';
import { useState } from 'react';
import './App.css'
import { NavBar } from './components/navBar/NavBar';
import { ProfilePicture } from './components/profilePic/ProfilePic';
import ProjectCard from './components/ProjectCard'
import { MainEducationCard } from './components/MainEducationCard';
import { EmailCard } from './components/EmailCard';
import { Footer } from './components/Footer';
import { ContactLinks } from './components/ContactLinks';
import { HomeStackLogoContainer } from './components/HomeStackLogoContainer';
import { CertificatesCard } from './components/CertificatesCard';
import { LanguagesCard } from './components/LanguagesCard';
import { TechStackCard } from './components/TechStackCard';

import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { frontEndLogos, backEndLogos, toolsLogos } from './constants/logo';
import { projects } from './constants/projects';
import { textsTranslations } from './constants/textsTranslations';
import Link from '@mui/material/Link';
import { Button, Box, Paper, Typography, Divider, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid2';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { motion, AnimatePresence } from 'framer-motion';



const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
});

function App() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [language, setLanguage] = useState('en');
  const texts = textsTranslations;
  const visibleText = texts[language];

  const handleLanguageToggle = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
  };
  const showAllProjects = () => {
    setVisibleProjects(projects.length);
  };

  const showLessProjects = () => {
    setVisibleProjects(3);
  };
  const openFile = () => {
    if (language === 'en') {

      window.open("./files/EduardoGSEnglishPlain.pdf");
    } else {
      window.open("./files/EduardoGSPlain.pdf");
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <header>
          <NavBar
            language={language}
            handleLanguageToggle={handleLanguageToggle}
            texts={visibleText}
          />
        </header>


        <section className="home" id="home">
          <Box sx={{
            height: '100%',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',

            // Para landscape en dispositivos móviles
            '@media (max-width: 1024px) and (orientation: landscape)': {
              flexDirection: 'row', // Mantén la distribución horizontal como en desktop
              justifyContent: 'space-around',
              alignItems: 'center',
              paddingTop: '60px',
            },
          }}>

            {/* Imagen de perfil - contenedor principal */}
            <Box className="home-img-container"
              sx={{
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'none',
                  lg: 'flex',
                  xl: 'flex'
                },
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: {
                  xs: '10vh',
                  sm: '10vh',
                  md: '10vh',
                  lg: '80vh',
                  xl: '90vh'
                },
                width: {
                  xs: '100%',
                  sm: '100%',
                  md: '30%',
                  lg: '30%',
                  xl: '30%'
                },
                margin: '20px 180px',

                // Muestra en landscape de móviles/tablets
                '@media (max-width: 1024px) and (orientation: landscape)': {
                  display: 'flex',
                  height: '70vh',
                  width: '30%',
                  margin: '20px',
                  justifyContent: 'center',
                },

                // Landscape específico para pantallas más pequeñas
                '@media (max-width: 900px) and (orientation: landscape)': {
                  height: '60vh',
                  width: '35%',
                  margin: '10px',
                },
              }}>
              <ProfilePicture />
            </Box>

            {/* Contenido principal */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: {
                xs: '100%',
                sm: '100%',
                md: '100%',
                lg: '50%',
                xl: '50%'
              },
              height: {
                xs: '80vh',
                sm: '80vh',
                md: '80vh',
                lg: '80vh',
                xl: '80vh'
              },
              marginTop: 'auto',
              marginBottom: 'auto',

              // Ajustes para landscape
              '@media (max-width: 1024px) and (orientation: landscape)': {
                width: '60%',
                height: '80vh',
                justifyContent: 'space-evenly',
                margin: '0',
              },

              '@media (max-width: 400px)': {
                height: '10vh',
                marginTop: '15px',
              },

              '@media (max-width: 640px)': {
                height: '100vh',
                width: '100%',
                textAlign: 'center',
                margin: '10px 0 0 0',

                // Para landscape específico en móviles pequeños
                '@media (orientation: landscape)': {
                  height: '80vh',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                },
              },

              '@media (min-width: 640px) and (max-width: 1024px)': {
                height: '100vh',
                width: '100%',
                textAlign: 'center',
                margin: 0,

                // Landscape para tablets
                '@media (orientation: landscape)': {
                  height: '80vh',
                  width: '60%',
                },
              },

              '@media (min-width: 1367px) and (max-width: 1920px)': {
                height: '80vh',
              }
            }} >

              {/* Contenedor del título */}
              <Box sx={{
                height: {
                  xs: '100vh',
                  sm: '100vh',
                  md: '100vh',
                  lg: '100vh',
                  xl: '100vh'
                },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: {
                  xs: 'space-around',
                  sm: 'space-around',
                  md: 'space-evenly',
                  lg: 'space-evenly',
                  xl: 'space-evenly'
                },
                marginTop: {
                  xs: '10px',
                  sm: '100px',
                },
                alignItems: 'center',

                // Ajustes para landscape
                '@media (max-width: 1024px) and (orientation: landscape)': {
                  height: '50%',
                  marginTop: '0',
                  justifyContent: 'center',
                },
              }} className='home-title-container'>

                <Typography variant='h1' sx={{
                  color: 'var(--light)',
                  fontSize: {
                    xs: '5vh',
                    sm: '5.5vh',
                  },
                  fontWeight: 'Bold',
                  alignItems: {
                    xs: 'space-around',
                    sm: 'center',
                    md: 'center',
                    lg: 'center',
                    xl: 'center'
                  },
                  padding: {
                    xs: '0px 0 20px 0',
                    sm: '0 0 30px 0',
                    md: '0',
                    lg: '0',
                    xl: '0'
                  },

                  // Para landscape
                  '@media (max-width: 1024px) and (orientation: landscape)': {
                    fontSize: '4vh',
                    padding: '0 0 10px 0',
                  },
                }}>
                  Eduardo González Seco
                </Typography>

                <Typography variant='h1' sx={{
                  color: 'var(--accent)',
                  fontSize: {
                    xs: '4vh',
                    sm: '4vh',
                    md: '4vh',
                    lg: '4vh',
                    xl: '4vh',
                  },
                  fontWeight: 'Bold',

                  // Para landscape
                  '@media (max-width: 1024px) and (orientation: landscape)': {
                    fontSize: '3vh',
                  },
                }}>
                  {visibleText.role}
                </Typography>

                <Box sx={{
                  width: {
                    xs: '300px',
                    sm: '300px',
                    md: '300px',
                    lg: '300px',
                    xl: '300px'
                  },
                  textAlign: 'center',

                  // Para landscape
                  '@media (max-width: 1024px) and (orientation: landscape)': {
                    width: '250px',
                    margin: '10px 0',
                  },
                }}>
                  <Typography variant='h5' sx={{
                    color: 'var(--light)',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 'Bold',
                    fontSize: {
                      xs: '1rem',
                      sm: '1.2rem',

                      // Para landscape
                      '@media (max-width: 1024px) and (orientation: landscape)': {
                        fontSize: '1rem',
                      },
                    },
                  }}>
                    MEAN + MySQL
                  </Typography>
                  <HomeStackLogoContainer />
                </Box>
              </Box>

              {/* Imagen de perfil para móviles/tablets */}
              <Box sx={{
                display: {
                  xs: 'flex',
                  sm: 'flex',
                  md: 'flex',
                  lg: 'none',
                  xl: 'none'
                },

                // Oculta en landscape ya que se muestra en el contenedor principal
                '@media (max-width: 1024px) and (orientation: landscape)': {
                  display: 'none',
                },
              }}>
                <ProfilePicture />
              </Box>

              {/* Email */}
              <Box sx={{
                height: '20%',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: {
                  sm: '0px',
                  md: '90px',
                },

                // Para landscape
                '@media (max-width: 1024px) and (orientation: landscape)': {
                  height: '15%',
                  paddingTop: '0',
                },
              }}>
                <EmailIcon sx={{
                  color: 'var(--accent)',
                  fontSize: {
                    xs: '30px',
                    sm: '40px',

                    // Para landscape
                    '@media (max-width: 1024px) and (orientation: landscape)': {
                      fontSize: '30px',
                    },
                  }
                }} />
                <Typography variant="body1" sx={{
                  color: 'var(--light)',
                  fontSize: {
                    xs: '16px',
                    sm: '18px',

                    // Para landscape
                    '@media (max-width: 1024px) and (orientation: landscape)': {
                      fontSize: '16px',
                    },
                  },
                  fontStyle: 'italic'
                }}>
                  eddugonz@gmail.com
                </Typography>
              </Box>

              {/* Ubicación */}
              <Box sx={{
                paddingTop: '10px',
                height: '10%',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',

                // Para landscape
                '@media (max-width: 1024px) and (orientation: landscape)': {
                  height: '10%',
                  paddingTop: '0',
                },
              }}>
                <LocationOnIcon sx={{
                  color: 'var(--accent)',
                  fontSize: {
                    xs: '18px',
                    sm: '20px',

                    // Para landscape
                    '@media (max-width: 1024px) and (orientation: landscape)': {
                      fontSize: '18px',
                    },
                  },
                  verticalAlign: 'middle',
                  marginRight: '5px'
                }} />
                <Typography variant="body1" sx={{
                  color: 'var(--light)',
                  fontSize: {
                    xs: '16px',
                    sm: '18px',

                    // Para landscape
                    '@media (max-width: 1024px) and (orientation: landscape)': {
                      fontSize: '16px',
                    },
                  },
                  fontStyle: 'italic'
                }}>
                  {visibleText.personalLocation}
                </Typography>
              </Box>

              {/* Botones */}
              <Box sx={{
                height: '100%',
                width: {
                  xs: '100%',
                  sm: '100%',
                  md: '70%',
                  lg: '70%',
                  xl: '70%'
                },
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: {
                  xs: 'start',
                  sm: 'center',
                  md: 'center',
                  lg: 'end'
                },
                padding: {
                  xs: '20px',
                  sm: '20px',
                  md: '0',
                  lg: '20px'
                },

                // Para landscape
                '@media (max-width: 1024px) and (orientation: landscape)': {
                  height: '25%',
                  alignItems: 'center',
                  padding: '10px 0',
                },
              }} className="home-buttons-container">
                <Box component="a" href="#contact" sx={{ textDecoration: 'none' }}>
                  <Button variant="outlined"
                    sx={{
                      color: 'var(--light)',
                      borderColor: 'var(--light)',
                      backgroundColor: 'var(--dark)',
                      borderRadius: '10px',
                      width: {
                        xs: '140px',
                        sm: '150px',

                        // Para landscape
                        '@media (max-width: 1024px) and (orientation: landscape)': {
                          width: '140px',
                        },
                      },
                      margin: '0 5px ',
                      transition: 'all 0.5s ease',
                      '&:hover': {
                        backgroundColor: 'var(--purple-background)',
                        color: 'var(--light)',
                      }
                    }}>
                    <Typography variant='button'>{visibleText.buttonContact}</Typography>
                  </Button>
                </Box>
                <Box>
                  <Button variant="outlined"
                    sx={{
                      color: 'var(--light)',
                      borderColor: 'var(--light)',
                      backgroundColor: 'var(--dark)',
                      borderRadius: '10px',
                      width: {
                        xs: '140px',
                        sm: '150px',

                        // Para landscape
                        '@media (max-width: 1024px) and (orientation: landscape)': {
                          width: '140px',
                        },
                      },
                      margin: '0 5px ',
                      transition: 'all 0.5s ease',
                      '&:hover': {
                        backgroundColor: 'var(--purple-background)',
                        color: 'var(--light)',
                      }
                    }}
                    onClick={openFile}>
                    <Typography variant='button'>CV</Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </section>
        <section id="about" className="about">
          <Box
            sx={{
              paddingTop: '70px',
              // height: {
              //   xs: '100%',
              //   sm: '100vh',
              //   md: '100vh',
              //   lg: '100vh',
              //   xl: '100vh'
              // },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              gap: {
                xs: '5px',
                sm: '20px',
                md: '20px',
                lg: '0',
                xl: '0'
              },
              '@media (max-width: 1024px) and (orientation:landscape)': {
                height: '100%',
              },
            }}>
            <Box
              sx={{
                width: {
                  xs: '80%',
                  sm: '70%',
                  md: '100%',
                  lg: '70%',
                  xl: '60%'
                },
                margin: '0 auto',

              }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PersonIcon sx={{ color: 'var(--accent)' }} />
                <Typography variant="h5" sx={{ marginLeft: '1rem', color: 'var(--accent)' }}>{visibleText.presentationTitle}</Typography>
              </Box>
              <Divider sx={{ margin: '5px 0 5px 0', width: '50%' }} />
              <Box sx={{ textAlign: 'justify', width: '100%' }}>
                <Typography sx={{ fontSize: { xl: '1rem' }, color: 'var(--text-tertiary)' }} variant="body1">
                  {visibleText.presentation}
                </Typography>
              </Box>


            </Box>


            <Box sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                sm: 'column',
                md: 'column',
                lg: 'row',
                xl: 'row'
              },
              width: {
                xs: '80%',
                sm: '70%',
                md: '100%',
                lg: '70%',
                xl: '60%'
              },
              margin: '0 auto',
              alignItems: 'space-between',
              marginTop: '5px',
              gap: '30px',
            }}>
              <Box
                sx={{
                  width: {
                    xs: '100%',
                    sm: '100%',
                    md: '100%',
                    lg: '100%',
                    xl: '100%'
                  },
                  margin: '0 auto',
                }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                  <WorkIcon sx={{ color: 'var(--accent)' }} />
                  <Typography variant="h5" sx={{ marginLeft: '1rem', color: 'var(--accent)' }}>{visibleText.experience}</Typography>
                </Box>
                <Divider sx={{ margin: '5px 0 5px 0', width: '50%' }} />
                <Box sx={{
                  padding: '10px', display: 'flex', flexDirection: {
                    xs: 'column',
                    sm: 'column',
                    md: 'column',
                    lg: 'row',
                    xl: 'row'
                  }
                }}>

                  <Box sx={{
                    width: {
                      xs: '100%',
                      sm: '100%',
                      md: '100%',
                      lg: '40%',
                      xl: '40%'
                    },
                    paddingRight: '10px',
                    paddingBottom: '10px'

                  }}>
                    <Typography variant="h6">
                      {visibleText.companies.company2.rol}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      <Avatar src={visibleText.companies.company2.logo} sx={{ marginRight: '5px', width: 50, height: 50, border: '1px solid Gainsboro' }} />
                      <Typography variant="body1">{visibleText.companies.company2.name}
                        <Typography variant="body2"
                        >{visibleText.companies.company2.location} ({visibleText.companies.company2.modality})</Typography>
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ fontStyle: 'italic' }}>{visibleText.companies.company2.date}</Typography>
                  </Box>
                  <Box sx={{
                    width: {
                      xs: '100%',
                      sm: '100%',
                      md: '100%',
                      lg: '60%',
                      xl: '60%'
                    },
                    paddingRight: '10px',
                    paddingBottom: '10px',
                    textAlign: 'justify'

                  }}>
                    <Typography variant="body1" sx={{ marginTop: '10px', fontSize: { xl: '1rem' }, color: 'var(--text-tertiary)' }}>
                      {visibleText.companies.company2.achivements}
                    </Typography>
                    <Link href="#projects" sx={{ color: 'var(--accent)' }}>{visibleText.companies.company2.linkProjectsText}</Link>
                  </Box>
                </Box>
                <Box sx={{
                  padding: '10px', display: 'flex', flexDirection: {
                    xs: 'column',
                    sm: 'column',
                    md: 'column',
                    lg: 'row',
                    xl: 'row'
                  }
                }}>

                  <Box sx={{
                    width: {
                      xs: '100%',
                      sm: '100%',
                      md: '100%',
                      lg: '40%',
                      xl: '40%'
                    },
                    paddingRight: '10px',
                    paddingBottom: '10px'

                  }}>
                    <Typography variant="h6">
                      {visibleText.companies.company1.rol}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      <Avatar src='/assets/timeStamp.jfif' sx={{ marginRight: '5px', width: 50, height: 50, border: '1px solid Gainsboro' }} />
                      <Typography variant="body1" sx={{ color: 'var(--text-secondary)' }}>{visibleText.companies.company1.name}<Typography variant="body2" sx={{ color: 'var(--text-secondary)' }}>{visibleText.companies.company1.location} ({visibleText.companies.company1.modality})</Typography> </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ fontStyle: 'italic' }}>{visibleText.companies.company1.date}</Typography>
                  </Box>
                  <Box sx={{
                    width: {
                      xs: '100%',
                      sm: '100%',
                      md: '100%',
                      lg: '60%',
                      xl: '60%'
                    },
                    paddingRight: '10px',
                    paddingBottom: '10px',
                    textAlign: 'justify'

                  }}>
                    <Typography variant="body2" sx={{ marginTop: '10px', fontSize: { xl: '1rem' }, color: 'var(--text-tertiary)' }}>
                      {visibleText.companies.company1.achivements}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                sm: 'column',
                md: 'column',
                lg: 'row',
                xl: 'row'
              },
              width: {
                xs: '100%',
                sm: '100%',
                md: '100%',
                lg: '70%',
                xl: '60%'
              },
              margin: '0 auto',
              alignItems: 'space-between',
              marginTop: '5px',
              gap: '30px',
            }}>
              <Paper
                elevation={24}
                sx={{
                  width: {
                    xs: '100%',
                    sm: '70%',
                    md: '70%',
                    lg: '100%',
                    xl: '100%'
                  },
                  borderRadius: '10px',
                  border: '1px solid var(--purple-background)',
                  margin: '20px auto',
                  backgroundColor: 'var(--dark)'
                }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5px' }}>
                  <LocalLibraryIcon sx={{ display: { xs: 'none', sm: 'block' }, color: 'var(--accent)' }} />
                  <Typography variant="h5" sx={{ marginLeft: '1rem', color: 'var(--accent)' }}>{visibleText.learning}</Typography>
                </Box>
                <Divider sx={{ margin: '5px auto 5px auto', width: '60%', }} />

                <Box sx={{
                  padding: '10px', display: 'flex', flexDirection: {
                    xs: 'column',
                    sm: 'row',
                    md: 'row',
                    lg: 'row',
                    xl: 'row'
                  }
                }}>

                  <Box sx={{
                    width: {
                      xs: '100%',
                      sm: '100%',
                      md: '100%',
                      lg: '50%',
                      xl: '50%'
                    },
                    paddingRight: '10px',
                    paddingBottom: '10px',


                  }}>
                    <Typography variant="h6" sx={{ textAlign: 'center', color: 'var(--light)' }}>
                      Angular Signals
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                      <a href="https://angular.dev/guide/signals">
                        <img src="/assets/angular-icon.png" />
                      </a>
                    </Box>
                  </Box>
                  <Box sx={{
                    width: {
                      xs: '100%',
                      sm: '100%',
                      md: '100%',
                      lg: '50%',
                      xl: '50%'
                    },
                    paddingRight: '10px',
                    paddingBottom: '10px',
                  }}>
                    <Typography variant="h6" sx={{ textAlign: 'center', color: 'var(--light)' }}>
                      Storybook
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                      <a href="https://storybook.js.org/docs">
                        <img src="/assets/storybook-icon.png" />
                      </a>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Box>
        </section>
        <section id="technologies" className='technologies'>
          <Typography sx={{
            textAlign: 'center',
            color: 'var(--accent)',
            paddingTop: { xs: '85px', sm: '85px', md: '85px', lg: '150px', xl: '85px' },
            fontWeight: 'bold',
            typography: { xs: 'h4', sm: 'h3', xl: 'h2' }
          }} >
            <strong>{visibleText.technologies}</strong>
          </Typography>

          <Box
            sx={{
              width: '100%',
              paddingTop: '40px',
              paddingX: { xs: '20px', sm: '40px', md: '60px', lg: '80px', xl: '100px' },
            }}
          >
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="flex-start"
            >

              <TechStackCard
                title="Front-End"
                logos={frontEndLogos}
              />

              <TechStackCard
                title="Back-End"
                logos={backEndLogos}
              />

              <TechStackCard
                title={visibleText.tools}
                logos={toolsLogos}
                minHeight="200px"
                enableFlexGrow={false}
              />
            </Grid>
            {/* <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <TechnologiesAlertDialogSlide visibleText={visibleText} />
            </Box> */}

          </Box>
        </section>

        <section id="projects" className='projects-section'>
          <Typography sx={{ textAlign: 'center', paddingTop: '75px', fontWeight: 'bold', typography: { xs: 'h4', sm: 'h3', xl: 'h2' }, color: 'var(--accent)' }} >
            <strong>{visibleText.projectsTitle}</strong>
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: '20px', xl: '40px' },
              padding: '20px',
              margin: { xs: '0 auto', xl: '0 150px' },
            }}
          >
            <AnimatePresence>
              {projects.slice(0, visibleProjects).map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectCard
                    name={project.name}
                    image={project.image}
                    description={language === 'en' ? project.descriptionEn : project.descriptionEs}
                    technologies={project.technologies}
                    ghLink={project.ghLink}
                    demoLink={project.demoLink}
                    websiteLink={project.websiteLink}
                    gif={project.gif}
                    gifOrientation={project.gifOrientation}
                    swaggerDoc={project.swaggerDoc}
                    deepWiki={project.deepWiki}
                    storybookLink={project.storybookLink}
                    backgroundColor={'var(--card-dark-1)'}
                    titleFontColor={'var(--text-primary)'}
                    contentTextColor={'var(--text-tertiary)'}
                    dividerColor={'var(--text-tertiary)'}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </Box>
          {
            visibleProjects < projects.length && (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="outlined"

                  startIcon={<UnfoldMoreIcon />}
                  onClick={showAllProjects}
                  sx={{
                    color: 'var(--light)', borderColor: 'var(--light)', backgroundColor: 'var(--dark)', borderRadius: '10px', width: '150px', margin: '0 5px ', transition: 'all 0.5s ease',
                    '&:hover': {
                      backgroundColor: 'var(--purple-background)',
                      color: 'var(--light)',
                    }
                  }}
                >
                  <Typography variant='button'>{visibleText.buttonShowAll}</Typography>
                </Button>
              </Box>
            )
          }
          {
            visibleProjects > 3 && (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box component="a" href="#projects" sx={{ textDecoration: 'none' }}>
                  <Button
                    variant="outlined"
                    startIcon={<UnfoldLessIcon />}
                    onClick={showLessProjects}

                    sx={{
                      color: 'var(--light)', borderColor: 'var(--light)', backgroundColor: 'var(--dark)', borderRadius: '10px', width: '150px', margin: '0 5px ', transition: 'all 0.5s ease',
                      '&:hover': {
                        backgroundColor: 'var(--purple-background)',
                        color: 'var(--light)',
                      }
                    }}
                  >
                    <Typography variant='button'>{visibleText.buttonCollapse}</Typography>
                  </Button>
                </Box>
              </Box>
            )
          }
        </section>

        <section id="education" className='education'>
          <Typography sx={{ textAlign: 'center', paddingTop: '75px', fontWeight: 'bold', typography: { xs: 'h4', sm: 'h3', xl: 'h2' }, color: 'var(--accent)' }} >
            <strong>{visibleText.educationTitle}</strong>
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'row'
            },
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            minHeight: { lg: '80vh' },
          }}>
            <Box sx={{
              width: {
                xs: '70%',
                sm: '70%',
                md: '60%'
              },
              height: {
                xs: 'auto',
                sm: 'auto',
                md: '80vh',
                lg: '100%'
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1
            }}>
              <MainEducationCard
                language={language}
                backgroundColor={'var(--card-dark-1)'}
                titleFontColor={'var(--text-primary)'}
                contentTextColor={'var(--text-tertiary)'}
              />
              <LanguagesCard
                language={language}
                titleFontColor={'var(--text-primary)'}
              />
              {/* <EducationAlertDialogSlide language={language} /> */}
            </Box>
            <CertificatesCard
              language={language}
              backgroundColor={'var(--card-dark-1)'}
              titleFontColor={'var(--text-primary)'}
              contentTextColor={'var(--text-tertiary)'}
            />
          </Box>
        </section>

        <section id="contact" className='contact'>
          <EmailCard visibleText={visibleText} />
          <ContactLinks />
        </section>

        <footer className='footer'>
          <Footer visibleText={visibleText} />
        </footer>

      </>
    </ThemeProvider>

  )
}

export default App
