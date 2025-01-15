import React from 'react';
import './About.css';

function About(){
  return (
    <section id="about" className="section about fade-in">
      <div className="about-left">
      </div>
      <div className="about-right">
        <h1>About <span className="red-text">Me</span></h1>
        <p className='about-text'>Passionate about <span className="bold-text">software development</span>, with experience in machine learning, computer vision, and data science.<br></br><br></br> Holds a B.Sc. in Computer Science, with strong expertise in data structures, algorithms, and system programming. Eager to gain practical experience through internships to advance in software developmentand and contribute to the field.</p>
      </div>
    </section>
  );
}

export default About;
