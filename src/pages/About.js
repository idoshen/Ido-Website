import React from 'react';
import './About.css';

function About(){
  return (
    <section id="about" className=" about animate">
      <div className="about-top-left">
        <h1 className='about-title'>About <span className="red-text">Me</span></h1>
      </div>
      <div className="about-bottom-left">
        <p className='about-p'>Hi there! I’m a <strong>Software Developer</strong> with a <strong>B.Sc.</strong> in <strong>Computer Science</strong>, passionate about machine learning, algorithms, and software development.
        I enjoy exploring new technologies, learning new concepts, and creating innovative solutions. <br></br><br></br>
        I’m always looking for my next challenge - whether it’s diving deeper into cutting-edge AI technology, tackling complex algorithms, or contributing to impactful projects in tech.</p>
      </div>
      <div className="about-top-right">
      </div>
      <div className="about-bottom-right">
        <p>Some of my elevant electives include Machine Learning, Deep Learning and Image Understanding, Image Processing and Analysis, Natural Language Processing, Reinforcement Learning, Statistics and Data Analysis, and Computer Graphics.<br></br><br></br>
          These courses offer valuable insights and skills for various areas in artificial intelligence, data science, and computer vision.</p>
      </div>
    </section>
  );
}

export default About;
