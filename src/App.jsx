import * as React from 'react';
import { useState } from 'react';
import './App.css'
import { LogoContainer } from './components/LogoContainer';
import { NavBar } from './components/NavBar';
import { ProfilePicture } from './components/ProfilePic';
import ProjectCard from './components/ProjectCard'
import { ItemsList } from './components/ItemList';
import BasicForm from './components/Mailer';  
import {EmailCard} from './components/EmailCard';
import { Footer } from './components/Footer';
import { ContactLinks } from './components/ContactLinks';
import { HomeStackLogoContainer } from './components/HomeStackLogoContainer';
// import { HomeButtonsContainer } from './components/HomeButtonsContainer';

import PersonIcon from '@mui/icons-material/Person';
import DownloadIcon from '@mui/icons-material/Download';

import { logosLanguages, logosFrameworks, logosDatabase } from './constants/logo';
import { projects } from './constants/projects';
import { certificates } from './constants/education';

import { downloadFile } from './logic/logic';


import {Button, Box, Paper, List, ListItem, Typography, Divider, Avatar } from '@mui/material'; 

function App() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  // Función para mostrar más proyectos
  const showAllProjects = () => {
    setVisibleProjects(projects.length); 
  };
  const showLessProjects = () => {
    setVisibleProjects(3); 
  };
  console.log(visibleProjects);
  console.log('projects.length',projects.length)

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
          height:{
            xs: '10vh',
            sm:'10vh',
            md:'10vh',
            lg: '80vh',
            xl:'90vh'
          },
          width: {
            xs: '100%',
            sm:'100%',
            md:'30%',
            lg: '30%',
            xl: '30%'
          },
          margin: '20px 180px',
        }}>
          <ProfilePicture></ProfilePicture>
        </Box>

        <Box  sx={{
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
              display:{
                lg:'none',
                xl:'none'
              },
              width: '20vh',
              height: '20vh',
              border:'1px solid black'
            }}/>
            <Typography variant='h1' sx={{ fontFamily: " 'Poppins', sans-serif", fontSize: '4vh', fontWeight: 'Bold', color: '#151a23a9' }}>
              Full Stack Developer
            </Typography>
            <Box>
              <Typography variant='h6' sx={{ fontFamily: " 'Poppins', sans-serif", fontWeight: 'Bold' }}>
                MEAN + MySql
              </Typography>
              <HomeStackLogoContainer/>
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
                <Button  variant="contained" color="success" startIcon={<PersonIcon />} 
                sx={{  width: '150px', margin: '0 5px ', borderRadius: '500px'}}>
                Contact
              </Button>

            </Box>
            <Box >
                <Button  variant="contained" color="primary" startIcon={<DownloadIcon/>} 
                sx={{  width: '150px', margin: '0 5px ', borderRadius: '500px' }} onClick={downloadFile}>
                 CV
              </Button>
            </Box>
          </Box>
        </Box>

      </section>
      <section id="about" className="about">
      <Typography sx={{ textAlign: 'center', paddingTop: '20px' }} variant="h4">About me</Typography>
        <div className="text-about">
          <p className="typing-effect">Quien soy</p>
          <p>Que he hecho</p>
          <p>Que hago ahora</p>
          <p>Que quiero hacer en el futuro 💻</p>
          <button id="dialog-button">Mostrar</button>
          <dialog id="dialog">
            <p></p>
          </dialog>
        </div>
      </section>
      <section id="technologies" className="technologies">
        {/* <h1 className="section-title">Technologies</h1> */}
        <Typography sx={{ textAlign: 'center', paddingTop: '20px' }} variant="h4">Technologies</Typography>

        <h6>Languages</h6>
        <div className="tech-container">
          {logosLanguages.map((logo, index) => (
            <LogoContainer key={index} href={logo.href} svg={logo.svg} figCaption={logo.figCaption} />
          ))}
        </div>

        <h6>Frameworks</h6>
        <div className="tech-container">
          {logosFrameworks.map((logo, index) => (
            <LogoContainer key={index} href={logo.href} svg={logo.svg} figCaption={logo.figCaption} />
          ))}
        </div>

        <h6>Database</h6>
        <div className="tech-container">
          {logosDatabase.map((logo, index) => (
            <LogoContainer key={index} href={logo.href} svg={logo.svg} figCaption={logo.figCaption} />
          ))}
        </div>
      </section>
      <section id="projects" className='projects-section'>
        {/* <h1 className="section-title">Projects</h1> */}
        <Typography sx={{ textAlign: 'center', paddingTop: '20px' }} variant="h4">Projects</Typography>
        <div className="project-container">
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
        </div>
        {
          visibleProjects < projects.length && ( 
            <Button
              variant="contained"
              onClick={showAllProjects}
              sx={{ margin: '20px auto', display: 'block' }}
            >
              Show all
            </Button>
          )
        }
        {
          visibleProjects > 3 && (
            <Box component="a" href="#projects" sx={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                onClick={showLessProjects}
                sx={{ margin: '20px auto', display: 'block' }}
              >
                Show Less
              </Button>
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
            flexGrow: 1
          }}>
            <ItemsList />
          </Box>
          <Box sx={{
            width: {
              xs: '70%',
              sm: '70%',
              md: '30%'
            },
            height: {
              xs: 'auto',
              sm: 'auto',
              md: 'auto'
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1
          }}>
            <Paper elevation={3} sx={{ width: '100%', borderRadius: '20px', margin: '0 20px ', padding: '20px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', backgroundColor: '#2c3e50', color: 'white', padding: '10px', borderRadius: '10px' }}>
                Courses/Certificates
              </Typography>
              <List>
                {certificates.map((certificate, index) => (
                  <React.Fragment key={certificate.id}>
                    <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start', mb: 2 }}>
                      <Typography variant="subtitle1" sx={{ color: 'primary.primary', fontWeight: 'bold' }}>
                        {certificate.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.primary' }}>
                        {certificate.center}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {certificate.date}
                      </Typography>
                    </ListItem>
                    {certificate.id !== 3 && (
                      <Divider variant="middle" />
                    )}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Box>
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
      <Divider variant='middle'/>
        <Footer/>
      </footer>

    </>
  )
}

export default App
