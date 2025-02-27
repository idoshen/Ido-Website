import React from 'react';
import './Home.css';
// import '../assets/styles/AnimatedButton.css';
import ProjectIcon from '../assets/icons/Project_Light.svg';
import CVIcon from '../assets/icons/CV_Light.svg';
// import IdoImg from '../assets/images/ido.jpg';

function Home() {

  return (
    <section id="home" className="home animate">
        <div className="home-p-and-buttons">
          <p className='home-p'>Hi there! I’m a <strong>Software Developer</strong> with a <strong>B.Sc.</strong> in <strong>Computer Science</strong>, passionate about machine learning, algorithms, and software development.
          I enjoy exploring new technologies, learning new concepts, and creating innovative solutions. <br></br><br></br>
          I’m always looking for my next challenge - whether it’s diving deeper into cutting-edge AI technology, tackling complex algorithms, or contributing to impactful projects in tech.</p>
          <div className="home-buttons">
            <a href="./Ido Shenbach CV.pdf" className="home-button" download="Ido_Shenbach_CV.pdf">
              Download CV
            </a>
            <a className="home-button" href='#contact'>
              Contact
            </a>
          </div>
        </div>
        <div>
          
        </div>
        {/* <div className="home-image-container">
          <img src={IdoImg} alt="Ido Shenbach" className='home-image'></img>
        </div> */}
    </section>
  );
}

export default Home;
