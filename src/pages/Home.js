import React from 'react';
import './Home.css';

function Home({isDarkMode}) {

  return (
    <section id="about" className="home animate">
        <div className="home-p-and-buttons">
          <p className='home-p'>Hi there! I’m a <strong>Software Developer</strong> with a <strong>B.Sc.</strong> in <strong>Computer Science</strong>, 
            passionate about machine learning, algorithms, and software development.
            I enjoy exploring new technologies, learning new concepts, and creating innovative solutions.
          </p>
          <p className='home-p'>
            I’m always looking for my next challenge - whether it’s diving deeper into cutting-edge AI technology, 
            tackling complex algorithms, or contributing to impactful projects in tech.
          </p>
          <div className="home-buttons">
            <a href="./Ido Shenbach CV.pdf" className={`home-cv-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`} target="_blank" rel="noopener noreferrer">
              <strong>Download CV</strong>
            </a>
            <a className={`home-contact-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`} href='#contact'>
            <strong>Contact</strong>
            </a>
          </div>
        </div>
        <div>
          
        </div>
        <div className="home-image-container">
          <img src='./ido.jpg' alt="Ido Shenbach" className='home-image'></img>
        </div>
    </section>
  );
}

export default Home;
