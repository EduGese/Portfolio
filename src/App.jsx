// import * as React from 'react';
import { useState } from 'react';
import './App.css'
import { LogoContainer } from './components/LogoContainer';
import { NavBar } from './components/NavBar';
import { ProfilePicture } from './components/ProfilePic';
import ProjectCard from './components/ProjectCard'
import { MainEducationCard } from './components/MainEducationCard';
import { EmailCard } from './components/EmailCard';
import { Footer } from './components/Footer';
import { ContactLinks } from './components/ContactLinks';
import { HomeStackLogoContainer } from './components/HomeStackLogoContainer';
import { TechnologiesAlertDialogSlide } from './components/TechnologiesAlertDialogSlide';
import { EducationAlertDialogSlide } from './components/EducationAlertDialogSlide';
import { CertificatesCard } from './components/CertificatesCard';
import { LanguagesCard } from './components/LanguagesCard';

import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import EmailIcon from '@mui/icons-material/Email';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
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
            backgroundColor: 'rgba(255, 255, 255, 0.844)',
            backdropFilter: 'grayscale(100%)  blur(px)',
            '@media (max-width: 1024px) and (orientation:landscape)': {
              paddingTop: '0',
            },


          }}>
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
              }}>
              <ProfilePicture></ProfilePicture>
            </Box>

            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '50%',
              height: '80vh',
              marginTop: 'auto',
              marginBottom: 'auto',
              '@media (max-width: 400px)': {
                height: '10vh',
                marginTop: '15px',
              },

              '@media (max-width: 640px)': {
                height: '100vh',
                width: '100%',
                textAlign: 'center',
                margin: '10px 0 0 0',
              },

              '@media (min-width: 640px) and (max-width: 1024px)': {
                height: '100vh',
                width: '100%',
                textAlign: 'center',
                margin: 0,
              },

              '@media (min-width: 1367px) and (max-width: 1920px)': {
                height: '70vh',
              }
            }} >
              <Box sx={{
                height: {
                  xs: '70vh',
                  sm: '40vh',
                  md: '60%',
                  lg: '60%',
                  xl: '60%'
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
              }} className='home-title-container'>

                <Typography variant='h1' sx={{
                  fontSize: { xs: '5vh', sm: '5.5vh' }, fontWeight: 'Bold', alignItems: {
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
                }}
                >Eduardo González Seco
                </Typography>
                <Avatar src='/assets/profile-picture3.png' sx={{
                  display: {
                    lg: 'none',
                    xl: 'none'
                  },
                  width: '20vh',
                  height: '20vh',
                  margin: '0 20px',
                  border: '1px solid black'
                }} />
                <Typography variant='h1' color='text.secondary' sx={{ fontSize: '4vh', fontWeight: 'Bold' }}>
                  {visibleText.role}
                </Typography>

                <Box
                  sx={{
                    width: '200px',
                    textAlign: 'center'
                  }}>
                  <Typography variant='h6' sx={{ fontFamily: " 'Poppins', sans-serif", fontWeight: 'Bold' }}>
                    MEAN + MySQL
                  </Typography>
                  <HomeStackLogoContainer />
                </Box>
              </Box>

              <Box sx={{
                height: '20%',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '40px'
              }}>
                <EmailIcon color='warning' sx={{ fontSize: '40px' }} />
                <Typography variant="body1" color='text.secondary' sx={{ fontSize: '18px', fontStyle: 'italic' }}>
                  eddugonz@gmail.com
                </Typography>
              </Box>
              <Box sx={{
                paddingTop: '10px',
                height: '10%',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}> <LocationOnIcon sx={{ fontSize: '20px', verticalAlign: 'middle', marginRight: '5px' }} />
                <Typography variant="body1" color='text.secondary' sx={{ fontSize: '18px', fontStyle: 'italic' }}>
                 {visibleText.personalLocation}
                </Typography>
              </Box>
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
                alignItems:{ xs: 'start', sm: 'start', md: 'center', lg: 'center', xl: 'center'   },
                padding: { xs: '20px', sm: '20px', md: '0', lg: '20px' }
              }} className="home-buttons-container">
                <Box component="a" href="#contact" sx={{ textDecoration: 'none' }}>
                  <Button variant="outlined" color="warning" startIcon={<PersonIcon />}
                    sx={{
                      width: '150px', margin: '0 5px ', borderRadius: '50px', transition: 'all 0.5s ease',
                      '&:hover': {
                        backgroundColor: (theme) => theme.palette.warning.main,
                        color: '#fff',
                        borderColor: (theme) => theme.palette.warning.main
                      }
                    }}>
                    {visibleText.buttonContact}
                  </Button>
                </Box>
                <Box >
                  <Button variant="outlined" color="warning" startIcon={<RemoveRedEyeIcon />}
                    sx={{
                      width: '150px', margin: '0 5px ', borderRadius: '50px', transition: 'all 0.5s ease',
                      '&:hover': {
                        backgroundColor: (theme) => theme.palette.warning.main,
                        color: '#fff',
                        borderColor: (theme) => theme.palette.warning.main
                      }
                    }} onClick={openFile}>
                    CV
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </section >
        <section id="about" className="about">
          <Box
            sx={{
              paddingTop: '70px',
              height: {
                xs: '100%',
                sm: '100vh',
                md: '100vh',
                lg: '100vh',
                xl: '100vh'
              },
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
                <PersonIcon />
                <Typography variant="h5" sx={{ marginLeft: '1rem' }}>{visibleText.presentationTitle}</Typography>
              </Box>
              <Divider sx={{ margin: '5px 0 5px 0', width: '50%' }} />
              <Box sx={{ textAlign: 'justify', width: '100%' }}>
                <Typography sx={{ fontSize: { xl: '1rem' } }} variant="overline">
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
                  <WorkIcon />
                  <Typography variant="h5" sx={{ marginLeft: '1rem', }}>{visibleText.experience}</Typography>
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
                          sx={{ color: 'text.secondary' }}>{visibleText.companies.company2.location} ({visibleText.companies.company2.modality})</Typography>
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
                    <Typography variant="body2" sx={{ marginTop: '10px', color: 'text.secondary', fontSize: { xl: '1rem' } }}>
                      {visibleText.companies.company2.achivements}

                    </Typography>
                    <Link href="#projects" color='warning'>{visibleText.companies.company2.linkProjectsText}</Link>
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
                      <Typography variant="body1">{visibleText.companies.company1.name}<Typography variant="body2" sx={{ color: 'text.secondary' }}>{visibleText.companies.company1.location} ({visibleText.companies.company1.modality})</Typography> </Typography>
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
                    <Typography variant="body2" sx={{ marginTop: '10px', color: 'text.secondary', fontSize: { xl: '1rem' } }}>
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
                elevation={3}
                sx={{
                  width: {
                    xs: '100%',
                    sm: '70%',
                    md: '100%',
                    lg: '100%',
                    xl: '100%'
                  },
                  borderRadius: '50px',
                  margin: '0 auto',
                  backgroundColor: '#FAFAFA'
                }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5px' }}>
                  <LocalLibraryIcon sx={{ display: { xs: 'none', sm: 'block' } }} />
                  <Typography variant="h5" sx={{ marginLeft: '1rem', fontSize: '18px' }}>{visibleText.learning}</Typography>
                </Box>
                <Divider sx={{ margin: '5px auto 5px auto', width: '60%' }} />

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
                      lg: '50%',
                      xl: '50%'
                    },
                    paddingRight: '10px',
                    paddingBottom: '10px',


                  }}>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>
                      React
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                      <a href="https://react.dev/">
                        <img src="/assets/react.svg" />
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
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>
                      AWS Developer Associate
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                      <a href="https://react.dev/">
                        <img src="/assets/aws.svg" />
                      </a>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Box>
        </section>
        <section id="technologies" className='technologies'>
          <Typography sx={{ textAlign: 'center', paddingTop: { xs: '85px', sm: '85px', md: '85px', lg: '150px', xl: '85px' }, fontWeight: 'bold', typography: { xs: 'h4', sm: 'h3', xl: 'h2' } }} >
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
              <Grid
                size={{ xs: 10, sm: 10, md: 10, lg: 5, xl: 5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    height: '100%',
                    minHeight: '300px',
                    flexGrow: 1,
                    borderRadius: '50px',
                    backgroundColor: '#FAFAFA',
                    '@media (max-width: 1024px) and (orientation:landscape)': {
                      minHeight: '0',
                    },
                  }}
                >
                  <Typography variant="h5" component="h5">
                    Front-End
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '20px',
                      paddingTop: '20px',
                      '@media (max-width: 1024px) and (orientation:landscape)': {
                        gap: '50px',
                      },
                    }}
                  >
                    {frontEndLogos.map((logo, index) => (
                      <LogoContainer key={index} href={logo.href} svg={logo.svg} figCaption={logo.figCaption} transition={true} />
                    ))}
                  </Box>
                </Paper>
              </Grid>

              <Grid
                size={{ xs: 10, sm: 10, md: 10, lg: 5, xl: 5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    height: '100%',
                    minHeight: '300px',
                    flexGrow: 1,
                    borderRadius: '50px',
                    backgroundColor: '#FAFAFA',
                    '@media (max-width: 1024px) and (orientation:landscape)': {
                      minHeight: '0',
                    },
                  }}
                >
                  <Typography variant="h5" component="h5">
                    Back-End
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '20px',
                      paddingTop: '20px',
                      '@media (max-width: 1024px) and (orientation:landscape)': {
                        gap: '50px',
                      },
                    }}
                  >
                    {backEndLogos.map((logo, index) => (
                      <LogoContainer key={index} href={logo.href} svg={logo.svg} figCaption={logo.figCaption} transition={true} />
                    ))}
                  </Box>
                </Paper>
              </Grid>

              <Grid
                size={{ xs: 10, sm: 10, md: 10, lg: 5, xl: 5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    minHeight: '200px',
                    borderRadius: '50px',
                    backgroundColor: '#FAFAFA',
                    '@media (max-width: 1024px) and (orientation:landscape)': {
                      minHeight: '0',
                    },
                  }}
                >
                  <Typography variant="h5" component="h5">
                    {visibleText.tools}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '20px',
                      paddingTop: '20px',
                      '@media (max-width: 1024px) and (orientation:landscape)': {
                        gap: '50px',
                      },
                    }}
                  >
                    {toolsLogos.map((logo, index) => (
                      <LogoContainer key={index} href={logo.href} svg={logo.svg} figCaption={logo.figCaption} transition={true} />
                    ))}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <TechnologiesAlertDialogSlide visibleText={visibleText} />
            </Box>

          </Box>
        </section>

        <section id="projects" className='projects-section'>
          <Typography sx={{ textAlign: 'center', paddingTop: '75px', fontWeight: 'bold', typography: { xs: 'h4', sm: 'h3', xl: 'h2' } }} >
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
                  color="warning"
                  startIcon={<UnfoldMoreIcon />}
                  onClick={showAllProjects}
                  sx={{
                    margin: '20px auto', borderRadius: '50px', transition: 'all 0.5s ease',
                    '&:hover': {
                      backgroundColor: (theme) => theme.palette.warning.main,
                      color: '#fff',
                      borderColor: (theme) => theme.palette.warning.main
                    }
                  }}
                >
                  {visibleText.buttonShowAll}
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
                    color="warning"
                    startIcon={<UnfoldLessIcon />}
                    onClick={showLessProjects}
                    sx={{
                      margin: '20px auto', borderRadius: '50px', transition: 'all 0.5s ease',
                      '&:hover': {
                        backgroundColor: (theme) => theme.palette.warning.main,
                        color: '#fff',
                        borderColor: (theme) => theme.palette.warning.main
                      }
                    }}
                  >
                    {visibleText.buttonCollapse}
                  </Button>
                </Box>
              </Box>
            )
          }
        </section>

        <section id="education" className='education'>
          <Typography sx={{ textAlign: 'center', paddingTop: '75px', fontWeight: 'bold', typography: { xs: 'h4', sm: 'h3', xl: 'h2' } }}>
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
              <MainEducationCard language={language} />
              <LanguagesCard language={language} />
              <EducationAlertDialogSlide language={language} />
            </Box>
            <CertificatesCard language={language} />
          </Box>
        </section>

        <section id="contact" className='contact'>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'column', md: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: { xs: '80vh', sm: '80vh', md: '80vh', lg: '80vh' },
              padding: { xs: '40px 20px', sm: '60px 40px' },
              background: 'linear-gradient(to bottom, white 0%, #fAfAfA 50%, white 100%)',
            }}
          >
            <Box sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: { md: '0px' },
              textAlign: 'center'
            }}>

              <EmailCard visibleText={visibleText} />
              <ContactLinks />
            </Box>
          </Box>
        </section>



        <footer className='footer'>
          <Footer visibleText={visibleText} />
        </footer>

      </>
    </ThemeProvider>

  )
}

export default App
