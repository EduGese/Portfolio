import * as React from 'react';
import { useState } from 'react';
import './App.css'
import { LogoContainer } from './components/LogoContainer';
import { NavBar } from './components/NavBar';
import { ProfilePicture } from './components/ProfilePic';
import ProjectCard from './components/ProjectCard'
import { MainEducationCard } from './components/MainEducationCard';
import Mailer from './components/Mailer';
import { EmailCard } from './components/EmailCard';
import { Footer } from './components/Footer';
import { ContactLinks } from './components/ContactLinks';
import { HomeStackLogoContainer } from './components/HomeStackLogoContainer';
import { TechnologiesAlertDialogSlide } from './components/TechnologiesAlertDialogSlide';
import { EducationAlertDialogSlide } from './components/EducationAlertDialogSlide';
import { CertificatesCard } from './components/CertificatesCard';
import { LanguagesCard } from './components/LanguagesCard';

import PersonIcon from '@mui/icons-material/Person';
import DownloadIcon from '@mui/icons-material/Download';
import WorkIcon from '@mui/icons-material/Work';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import EmailIcon from '@mui/icons-material/Email';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


import { frontEndLogos, backEndLogos, toolsLogos } from './constants/logo';
import { projects } from './constants/projects';
import { textsTranslations } from './constants/textsTranslations';


import { openFile } from './logic/logic';


import { Button, Box, Paper, Typography, Divider, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid2';

function App() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [language, setLanguage] = useState('es');
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

  return (
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
          backgroundColor: 'rgba(255, 255, 255, 0.144)',
          backdropFilter: 'grayscale(30%)'

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
              height: '100vh',
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
                xs: '40px',
                sm: '100px',
              },
              alignItems: 'center',
            }} className='home-title-container'>

              <Typography variant='h1' color='warning' sx={{ fontFamily: " 'Poppins', sans-serif", fontSize: '6vh', fontWeight: 'Bold' }}
              >Eduardo González Seco
              </Typography>
              <Avatar src='src/assets/profile-picture.png' sx={{
                display: {
                  lg: 'none',
                  xl: 'none'
                },
                width: '20vh',
                height: '20vh',
                margin: '0 20px',
                border: '1px solid black'
              }} />
              <Typography variant='h1' color='text.secondary' sx={{ fontFamily: " 'Poppins', sans-serif", fontSize: '4vh', fontWeight: 'Bold' }}>
                {/* Full Stack Developer */}
                {visibleText.role}
              </Typography>

              <Box
                sx={{
                  width: '200px',
                  textAlign: 'center'
                }}>
                <Typography variant='h6' sx={{ fontFamily: " 'Poppins', sans-serif", fontWeight: 'Bold' }}>
                  MEAN + MySql
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
            }}>
              <EmailIcon color='warning' sx={{ fontSize: '40px' }} />
              <Typography variant="body1" color='text.secondary' sx={{ fontSize: '18px', fontStyle: 'italic' }}>
                eddugonz@gmail.com
              </Typography>
            </Box>
            <Box sx={{
              height: '70%',
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
              alignItems: 'center',
              height: '20%',
            }} className="home-buttons-container">
              <Box component="a" href="#contact" sx={{ textDecoration: 'none' }}>
                <Button variant="outlined" color="warning" startIcon={<PersonIcon />}
                  sx={{ width: '150px', margin: '0 5px ', borderRadius: '50px' }}>
                  {visibleText.buttonContact}
                </Button>

              </Box>
              <Box >
                <Button variant="outlined" color="warning" startIcon={<RemoveRedEyeIcon />}
                  sx={{ width: '150px', margin: '0 5px ', borderRadius: '50px' }} onClick={openFile}>
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
            }
          }}>
          <Box
            sx={{
              width: {
                xs: '100%',
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
            <Typography variant="overline">
              {visibleText.presentation.part1}
              <strong>{visibleText.presentation.part2}</strong>
              {visibleText.presentation.part3}
              <strong>{visibleText.presentation.part4}</strong>
              {visibleText.presentation.part5}
              <strong>{visibleText.presentation.part6}</strong>
              {visibleText.presentation.part7}
              <br />
              {visibleText.presentation.part8}
              <strong>{visibleText.presentation.part9}</strong>
              {visibleText.presentation.part10}
            </Typography>

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
                <Typography variant="h5" sx={{ marginLeft: '1rem' }}>{visibleText.experience}</Typography>
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
                    {visibleText.experienceRol}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    {/* <BusinessIcon sx={{ marginRight: '8px' }} /> */}
                    <Avatar src='src/assets/scl_consulting_logo.jfif' sx={{ marginRight: '5px', border: '1px solid gray' }} />
                    <Typography variant="body1">SCL Consulting - Madrid ({visibleText.experienceModality})</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ fontStyle: 'italic' }}>mar. 2023 - jun. 2023</Typography>
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
                  paddingBottom: '10px'

                }}>
                  <Typography variant="body2" sx={{ marginTop: '10px', color: 'text.secondary' }}>
                    {visibleText.experienceAchivements.part1}
                    <strong>{visibleText.experienceAchivements.part2}</strong>
                    {visibleText.experienceAchivements.part3}
                    <strong>{visibleText.experienceAchivements.part4}</strong>
                    {visibleText.experienceAchivements.part5}
                    <strong>{visibleText.experienceAchivements.part6}</strong>
                    {visibleText.experienceAchivements.part7}
                    <strong>{visibleText.experienceAchivements.part8}</strong>
                    {visibleText.experienceAchivements.part9}
                    <strong>{visibleText.experienceAchivements.part10}</strong>
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
              }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5px' }}>
                <LocalLibraryIcon />
                <Typography variant="h5" sx={{ marginLeft: '1rem' }}>{visibleText.learning}</Typography>
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
                      <img src="src/assets/react.svg" />
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
                      <img src="src/assets/aws.svg" />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </section>
      <section id="technologies">
        <Typography sx={{ textAlign: 'center', paddingTop: '70px' }} variant="h3">
          {visibleText.technologies}
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
                  borderRadius: '50px'
                }}
              >
                <Typography variant="h5" component="h3">
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
                  borderRadius: '50px'
                }}
              >
                <Typography variant="h5" component="h3">
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
                  borderRadius: '50px'
                }}
              >
                <Typography variant="h5" component="h3">
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
                  }}
                >
                  {toolsLogos.map((logo, index) => (
                    <LogoContainer key={index} href={logo.href} svg={logo.svg} figCaption={logo.figCaption} transition={true} />
                  ))}
                </Box>
              </Paper>
            </Grid>

            <Grid
              size={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 5 }}
            >
              <Paper variant="outlined"
                sx={{
                  borderRadius: '50px'
                }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '200px',
                    width: '100%',
                    // backgroundColor:'#ffd180'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'rgb(234 179 8 )',
                      height: '100%',
                      flexGrow: 1,
                    }}>
                    <TechnologiesAlertDialogSlide visibleText={visibleText}/>
                  </Box>
                </Box>
              </Paper>

            </Grid>
          </Grid>
        </Box>
      </section>

      <section id="projects" className='projects-section'>
        <Typography sx={{ textAlign: 'center', paddingTop: '20px' }} variant="h4">{visibleText.projectsTitle}</Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            padding: '20px',

          }}>
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              image={project.image}
              description={language === 'en' ? project.descriptionEn : project.descriptionEs}
              technologies={project.technologies}
              ghLink={project.ghLink}
              demoLink={project.demoLink}
              websiteLink={project.websiteLink}
              gif={project.gif}
              gifOrientation={project.gifOrientation}
            />
          ))}
        </Box>
        {
          visibleProjects < projects.length && (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="outlined"
                color="warning"
                startIcon={<UnfoldMoreIcon />}
                onClick={showAllProjects}
                sx={{ margin: '20px auto', borderRadius: '50px' }}
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
                  sx={{ margin: '20px auto', borderRadius: '50px' }}
                >
                  {visibleText.buttonCollapse}
                </Button>
              </Box>
            </Box>
          )
        }
      </section>

      <section id="education" className='education'>
        <Typography sx={{ textAlign: 'center', paddingTop: '20px' }} variant="h4">{visibleText.educationTitle}</Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'row'
          },
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap'
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
            <MainEducationCard language={language}/>
            <LanguagesCard language={language}/>
            <EducationAlertDialogSlide language={language}/>
          </Box>
          <CertificatesCard language={language}/>
        </Box>
      </section>

      <section id="contact" className='contact' >
        <Box>
          <EmailCard visibleText={visibleText}/>
          <ContactLinks />
        </Box>
        <Mailer visibleText={visibleText}/>
      </section>

      <footer className='footer'>
        <Divider variant='middle' />
        <Footer visibleText={visibleText}/>
      </footer>

    </>
  )
}

export default App
