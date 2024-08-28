
import './App.css'
import logo from './assets/logo_transparent.png';
import profilePicture from './assets/profile-picture.png';
import { LogoContainer } from './components/LogoContainer';
import { NavBar } from './components/NavBar';
import { ProfilePicture } from './components/ProfilePic';
import { logosLanguages, logosFrameworks, logosDatabase } from './constants/logo';
import { downloadFile } from './logic/logic';


function App() {


  return (
    <>
      <NavBar></NavBar>

      <section className="home" id="home">
        <div className="home-img-container">
          <ProfilePicture></ProfilePicture>
        </div>

        <div className="home-text-container">
          <div className='home-title-container'>
            <h1 className='name'>Eduardo González Seco</h1>
            <h2 className='dev-position'>Full Stack Developer</h2>
            {/* <div className='stack-container'> */}
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="100" height="100">
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
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 48 48">
            <path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path fill="#dcedc8" d="M23 28H25V36H23z"></path><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path>
            </svg>
                  </figure>
                </a>
              </div>
              <div></div>
            </div>
            {/* </div> */}

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
        <h1 className="section-title">Technologies</h1>

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
      <section id="projects">
        <h1>Projects</h1>
      </section>
      <section id="education">
        <h1>Education</h1>
      </section>
      <section id="contact">
        <h1>Contact</h1>
      </section>
    </>


  )
}

export default App
