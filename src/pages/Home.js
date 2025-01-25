import React from 'react';
import './Home.css';
import '../assets/styles/AnimatedButton.css';
import IdoShenbachCV from '../assets/files/Ido Shenbach CV.pdf';
import ProjectIcon from '../assets/icons/Project.svg';
import CVIcon from '../assets/icons/CV.svg';
import LinkedInIcon from '../assets/icons/Linkedin_Dark.svg';
import GithubIcon from '../assets/icons/Github_Dark.svg';
import IdoImg from '../assets/images/ido.jpg';

function Home() {

  return (
    <section id="home" className="home animate">
        <div className="home-name-and-buttons">
          <div className='home-name-and-job'>
            <h1 className="home-name">Ido Shenbach</h1>
            <h2 className="home-job">Software Developer</h2>
            <p className="home-p">Coding like it's my cardio.</p>
          </div>
          <div className="home-buttons">
            <a href={IdoShenbachCV} className="home-button animated-button" download="Ido Shenbach CV.pdf">
              <span>Download Resume</span>
              <img src={CVIcon} alt="CV" />
            </a>

            <a className="home-button animated-button" href='#projects'>
              <span>View Projects</span>
              <img src={ProjectIcon} alt="Project" />
            </a>

            <a className="home-button animated-button"  href='https://www.linkedin.com/in/idoshen/' target="_blank" rel="noopener noreferrer">
            <span>LinkedIn</span>
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>

            <a className="home-button animated-button" href='https://www.github.com/idoshen' target="_blank" rel="noopener noreferrer">
              <span>GitHub</span>
              <img src={GithubIcon} alt="Github" />
            </a>
          </div>
        </div>
      
        
        <div className="home-image-container">
          <img src={IdoImg} alt="Ido Shenbach" className='home-image'></img>
        </div>
    </section>
  );
}

export default Home;
