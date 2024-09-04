import * as React from 'react';
import './App.css'
import { LogoContainer } from './components/LogoContainer';
import { NavBar } from './components/NavBar';
import { ProfilePicture } from './components/ProfilePic';
import MediaCard from './components/Card'
import { ItemsList } from './components/ItemList';
import { logosLanguages, logosFrameworks, logosDatabase } from './constants/logo';
import { projects } from './constants/projects';
import { certificates } from './constants/education';


import { downloadFile } from './logic/logic';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; // Importar Paper correctamente
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';




function App() {


  return (
    <>
    <header>
      <NavBar></NavBar>
    </header>
      

      <section className="home" id="home">
        <div className="home-img-container">
          <ProfilePicture></ProfilePicture>
        </div>

        <div className="home-text-container">
          <div className='home-title-container'>
            <h1 className='name'>Eduardo González Seco</h1>
            <h2 className='dev-position'>Full Stack Developer</h2>

            <div>
              <h3><span className="upperCase">mean</span> Stack + MySql</h3>
              <div className='stack-logo-container'>
                <div>
                  <a href="https://angular.dev/">
                    <figure>
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                        <path fill="#bdbdbd" d="M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z"></path>
                        <path fill="#b71c1c" d="M42.818 10.527L24 4.135 24 43.695 39.832 35.017z"></path>
                        <path fill="#dd2c00" d="M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z"></path>
                        <path fill="#bdbdbd" d="M24 5.996L24 15.504 32.578 34 36.987 34z"></path>
                        <path fill="#eee" d="M11.013 34L15.422 34 24 15.504 24 5.996z"></path>
                        <path fill="#bdbdbd" d="M24 24H30V28H24z"></path>
                        <path fill="#eee" d="M18 24H24V28H18z"></path>
                      </svg>
                    </figure>
                  </a>
                </div>
                <div>
                  <a href="https://expressjs.com/">
                    <figure>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" >
                        <g fill="#548dbf" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt"
                          strokeLinejoin="miter" strokeMiterlimit="10" style={{ mixBlendMode: 'normal' }}>
                          <g transform="scale(5.12, 5.12)">
                            <path d="M49.729,11h-0.85c-1.051,0 -2.041,0.49 -2.68,1.324l-8.7,11.377l-8.7,-11.377c-0.637,-0.834 -1.628,-1.324 -2.678,-1.324h-0.85l10.971,14.346l-11.206,14.654h0.85c1.051,0 2.041,-0.49 2.679,-1.324l8.935,-11.684l8.935,11.684c0.638,0.834 1.628,1.324 2.679,1.324h0.85l-11.206,-14.654zM21.289,34.242c-2.554,3.881 -7.582,5.87 -12.389,4.116c-4.229,-1.543 -6.9,-5.747 -6.9,-10.249v-1.109h12v0h11v-4.134c0,-6.505 -4.818,-12.2 -11.295,-12.809c-7.432,-0.699 -13.705,5.153 -13.705,12.443v5.573c0,5.371 3.215,10.364 8.269,12.183c6.603,2.376 13.548,-1.17 15.896,-7.256v0h-0.638c-0.911,0 -1.738,0.481 -2.238,1.242zM2,22.5c0,-5.79 4.71,-10.5 10.5,-10.5c5.79,0 10.5,4.71 10.5,10.5v2.5h-21z"></path>
                          </g>
                        </g>
                      </svg>
                    </figure>
                  </a>
                </div>
                <div>
                  <a href="https://nodejs.org/en">
                    <figure>
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                        <path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path>
                        <path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path>
                      </svg>
                    </figure>
                  </a>
                </div>
                <div>
                  <a href="https://www.mongodb.com/">
                    <figure>
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                        <path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path fill="#dcedc8" d="M23 28H25V36H23z"></path><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path>
                      </svg>
                    </figure>
                  </a>
                </div>
                <div>
                  <a href="https://www.mysql.com/">
                    <figure>
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                        <path fill="#00796b" d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z"></path><path fill="#00796b" d="M13.441,29.281h1.92v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92 c0.008,0,0,5.968,0,5.993c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0 c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281 z"></path><path fill="#f57f17" d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536v-1.368 c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z"></path><path fill="#f57f17" d="M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96h-4.435 c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z"></path><path fill="#f57f17" d="M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"></path><path fill="#00796b" d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"></path><path fill="#00796b" d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"></path>
                      </svg>
                    </figure>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="home-buttons-container">
            <button onClick={() => window.location.href = '#contact'}>Contact</button>
            <button id="download-button" className="custom-pointer" onClick={downloadFile}>Download CV</button>
          </div>
        </div>

      </section>
      <section id="about" className="about">
        <h1 className="section-title">About me</h1>
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
        <Typography sx={{ textAlign: 'center', paddingTop: '20px' }} variant="h4">Contact</Typography>

        <h2>Languages</h2>
        <div className="tech-container">
          {logosLanguages.map((logo, index) => (
            <LogoContainer key={index} href={logo.href} svg={logo.svg} figCaption={logo.figCaption} />
          ))}
        </div>

        <h2>Frameworks</h2>
        <div className="tech-container">
          {logosFrameworks.map((logo, index) => (
            <LogoContainer key={index} href={logo.href} svg={logo.svg} figCaption={logo.figCaption} />
          ))}
        </div>

        <h2>Database</h2>
        <div className="tech-container">
          {logosDatabase.map((logo, index) => (
            <LogoContainer key={index} href={logo.href} svg={logo.svg} figCaption={logo.figCaption} />
          ))}
        </div>
      </section>
      <section id="projects" className='projects-section'>
        <h1 className="section-title">Projects</h1>
        <div className="project-container">
          {projects.map((project, index) => (
            <MediaCard
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
            ></MediaCard>
          ))}
        </div>

      </section>
      <section id="education" className='education'>
        <Typography sx={{ textAlign: 'center', paddingTop: '20px' }} variant="h4">Education</Typography>
        {/* <h1 >Education</h1> */}
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
            // flexDirection: 'column',
            // alignItems: {
            //   xs: 'center',
            //   sm: 'center',
            //   lg: 'flex-start'
            // },
            // justifyContent: 'center',
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
                      <Divider variant="middle"  />
                    )}
                  </React.Fragment>
                ))}
              </List>

            </Paper>



          </Box>
        </Box>
      </section>

      <section id="contact" className='contact'>
      <Typography sx={{ textAlign: 'center', paddingTop: '20px' }} variant="h4">Contact</Typography>

      </section>
      <footer>

      </footer>
    </>
  )
}

export default App
