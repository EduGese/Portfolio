
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
          
            {/* <div className="frame">
            <img className="front" src={profilePicture} alt="Profile Picture" />
            <img className="back" src={profilePicture} alt="Profile Picture Back" />
            </div> */}
            <ProfilePicture></ProfilePicture>
            <div className="home-buttons-container">
              <button onClick={() => window.location.href = '#contact'}>Contact</button>
              <button id="download-button" className="custom-pointer" onClick={downloadFile}>Download CV</button>
            </div>
        </div>

        <div className="home-text-container">
          <h3>Eduardo González Seco</h3>
          <h1>Full Stack Developer</h1>
          <h3><span className="upperCase">mean</span> Stack + MySql</h3>
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
