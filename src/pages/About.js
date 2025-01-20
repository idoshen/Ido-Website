import React from 'react';
import './About.css';

function About(){
  return (
    <section id="about" className="about animate">
      <div className="about-top">
      <h1 className='about-title'>About <span className="red-text">Me</span></h1>
      </div>
      <div className="about-left">
        <p className='about-p'>Passionate about <span className="bold-text">software development</span>, with experience in machine learning, computer vision, and data science.<br></br><br></br> Holds a B.Sc. in Computer Science, with strong expertise in data structures, algorithms, and system programming. Eager to gain practical experience through internships to advance in software developmentand and contribute to the field.</p>
      </div>
      <div className="about-right">
        <p className='about-p'>Passionate about <span className="bold-text">software development</span>, with experience in machine learning, computer vision, and data science.<br></br><br></br> Holds a B.Sc. in Computer Science, with strong expertise in data structures, algorithms, and system programming. Eager to gain practical experience through internships to advance in software developmentand and contribute to the field.</p>
      </div>
    </section>
  );
}

export default About;
