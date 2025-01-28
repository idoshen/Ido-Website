import React from 'react';
import './About.css';

function About(){
  return (
    <section id="about" className="about animate">
      <div className="about-top-left">
        <h1 className='about-title'>About <span className="red-text">Me</span></h1>
      </div>
      <div className="about-bottom-left">
        <p className='about-p'>Hi there! I’m a <strong>Software Developer</strong> with a <strong>B.Sc.</strong> in <strong>Computer Science</strong>, passionate about machine learning, algorithms, and software development.
        I enjoy exploring new technologies, learning new concepts, and creating innovative solutions. <br></br><br></br>
        I’m always looking for my next challenge - whether it’s diving deeper into cutting-edge AI technology, tackling complex algorithms, or contributing to impactful projects in tech.</p>
      </div>
      <div className="about-top-right">
        <h1 className='education-title'>Education</h1>
      </div>
      <div className="about-bottom-right">
        <p><strong>B.SC COMPUTER SCIENCE</strong><br></br>
        Reichman University</p>
        <p><strong>GPA – 87.41</strong></p>
        <p><strong>Relevant Electives:</strong></p>
          <ul>
            <li>Machine Learning</li>
            <li>Deep Learning and Image Understanding</li>
            <li>Image Processing and Analysis</li>
            <li>Natural Language Processing</li>
            <li>Reinforcement Learning</li>
            <li>Statistics and Data Analysis</li>
            <li>Computer Graphics</li>
          </ul>
      </div>
    </section>
  );
}

export default About;
