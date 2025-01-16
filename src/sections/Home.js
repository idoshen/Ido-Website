import React from 'react';
import './Home.css';

function Home() {

  return (
    <section className="home">
      <div className="home-container">
        <div className="home-name-and-buttons">
          <h1 className="home-name">Ido Shenbach</h1>
          <p className="home-job">Software Developer</p>

          <div className="home-buttons">
            <button className="home-button-resume">
              <a href="Ido Shenbach CV.pdf" download>Download Resume</a>
            </button>

            <button className="home-button-proj" onClick={() => window.location.href = '#projects'}>
              View Projects
            </button>
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
