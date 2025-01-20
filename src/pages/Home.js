import React from 'react';
import './Home.css';
import IdoShenbachCV from '../assets/files/Ido Shenbach CV.pdf';

function Home() {

  return (
    <section id="home" className="home animate">
      <div className="home-container">
        <div className="home-name-and-buttons">
          <div className='home-name-and-job'>
            <h1 className="home-name">Ido Shenbach</h1>
            <h2 className="home-job">Software Developer</h2>
            <p className="home-p">experience in machine learning, computer vision, and data science. </p>
          </div>
          <div className="home-buttons">
            <a href={IdoShenbachCV} className="home-button" download="Ido Shenbach CV.pdf">
              Download Resume
            </a>

            <a className="home-button" href='#SynthesizerApp'>
              View Projects
            </a>

            <a className="home-button"  href='https://www.linkedin.com/in/idoshen/' target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>

            <a className="home-button" href='https://www.github.com/idoshen' target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      
        
        <div className="home-image-container">
          <img src="./ido.jpg" alt="Ido Shenbach" className='home-image'></img>
        </div>
      </div>
    </section>
  );
}

export default Home;
