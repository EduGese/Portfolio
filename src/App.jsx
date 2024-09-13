import * as React from 'react';
import { useState } from 'react';
import './App.css'
import { LogoContainer } from './components/LogoContainer';
import { NavBar } from './components/NavBar';
import { ProfilePicture } from './components/ProfilePic';
import ProjectCard from './components/ProjectCard'
import { MainEducationCard } from './components/MainEducationCard';
import BasicForm from './components/Mailer';
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

import { frontEndLogos, backEndLogos, toolsLogos } from './constants/logo';
import { projects } from './constants/projects';


import { downloadFile } from './logic/logic';


import { Button, Box, Paper, Typography, Divider, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid2';

function App() {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const showAllProjects = () => {
    setVisibleProjects(projects.length);
  };

  const showLessProjects = () => {
    setVisibleProjects(3);
  };

  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>


      <section className="home" id="home">
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
            marginTop: '15px',  // Sm-Mobile
          },

          '@media (max-width: 640px)': {
            height: '100vh',
            width: '100%',
            textAlign: 'center',
            margin: '10px 0 0 0',  // Mobile
          },

          '@media (min-width: 640px) and (max-width: 1024px)': {
            height: '100vh',
            width: '100%',
            textAlign: 'center',
            margin: 0,  // Tablet
          },

          '@media (min-width: 1367px) and (max-width: 1920px)': {
            height: '70vh',  // Laptop large
          }
        }} >
          <Box sx={{
            height: '60%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }} className='home-title-container'>

            <Typography variant='h1' sx={{ fontFamily: " 'Poppins', sans-serif", fontSize: '6vh', fontWeight: 'Bold' }}
            >Eduardo González Seco
            </Typography>
            <Avatar src='src/assets/profile-picture.png' sx={{
              display: {
                lg: 'none',
                xl: 'none'
              },
              width: '20vh',
              height: '20vh',
              border: '1px solid black'
            }} />
            <Typography variant='h1' sx={{ fontFamily: " 'Poppins', sans-serif", fontSize: '4vh', fontWeight: 'Bold', color: '#151a23a9' }}>
              Full Stack Developer
            </Typography>

            <Box>
              <Typography variant='h6' sx={{ fontFamily: " 'Poppins', sans-serif", fontWeight: 'Bold' }}>
                MEAN + MySql
              </Typography>
              <HomeStackLogoContainer />
            </Box>
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
              <Button variant="contained" color="success" startIcon={<PersonIcon />}
                sx={{ width: '150px', margin: '0 5px ', borderRadius: '500px' }}>
                Contact
              </Button>

            </Box>
            <Box >
              <Button variant="contained" color="primary" startIcon={<DownloadIcon />}
                sx={{ width: '150px', margin: '0 5px ', borderRadius: '500px' }} onClick={downloadFile}>
                CV
              </Button>
            </Box>
          </Box>
        </Box>

      </section>
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
              <Typography variant="h5" sx={{ marginLeft: '1rem' }}>Who am I</Typography>
            </Box>
            <Divider sx={{ margin: '5px 0 5px 0', width: '50%' }} />
            <Typography variant="overline" >
              I'm a <strong>web developer</strong> with a passion for <strong>technology</strong>, <strong>programming</strong>, and <strong>constantly learning</strong> new things.
              This is what truly excites me and makes me feel alive.
              <br />
              After living in the UK for 9 years, I've developed a <strong>strong command of English </strong>and enjoy communicating in the language.
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
                <Typography variant="h5" sx={{ marginLeft: '1rem' }}>Work experience</Typography>
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
                    Web developer
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    {/* <BusinessIcon sx={{ marginRight: '8px' }} /> */}
                    <Avatar src='src/assets/scl_consulting_logo.jfif' sx={{ marginRight: '5px', border: '1px solid gray' }} />
                    <Typography variant="body1">SCL Consulting - Madrid (Hybrid)</Typography>
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
                    I cut development time by 20% through building a RESTful API with <strong>Node.js-Nest.js</strong> and <strong>MySQL</strong> for Telefónica UK, enhancing SAP data monitoring. Improved user interfaces using <strong>Angular +13</strong>, applying <strong>CLEAN</strong> and <strong>SOLID</strong> principles, while ensuring quality with <strong>Agile</strong> | <strong>SCRUM</strong> and unit testing.
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
                borderRadius:'50px',
                margin: '0 auto',
              }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5px' }}>
                <LocalLibraryIcon />
                <Typography variant="h5" sx={{ marginLeft: '1rem' }}>Currently learning:</Typography>
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
          Technologies
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
                  Tools
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
                    <TechnologiesAlertDialogSlide />
                  </Box>
                </Box>
              </Paper>

            </Grid>
          </Grid>
        </Box>
      </section>

      <section id="projects" className='projects-section'>
        <Typography sx={{ textAlign: 'center', paddingTop: '20px' }} variant="h4">Projects</Typography>

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
              description={project.description}
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
                sx={{ margin: '20px auto' }}
              >
                Show all
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
                  sx={{ margin: '20px auto' }}
                >
                  Collapse
                </Button>
              </Box>
            </Box>
          )
        }
      </section>

      <section id="education" className='education'>
        <Typography sx={{ textAlign: 'center', paddingTop: '20px' }} variant="h4">Education</Typography>
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
            <MainEducationCard />
            <LanguagesCard />
            <EducationAlertDialogSlide />
          </Box>
          <CertificatesCard />
        </Box>
      </section>

      <section id="contact" className='contact' >
        <Box>
          <EmailCard />
          <ContactLinks />
        </Box>
        <BasicForm />
      </section>

      <footer className='footer'>
        <Divider variant='middle' />
        <Footer />
      </footer>

    </>
  )
}

export default App
