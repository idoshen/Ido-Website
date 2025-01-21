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
       <p><strong>EDUCATION</strong></p>
        <p><strong>B.SC COMPUTER SCIENCE</strong>
        International school at Reichman University
        2021 - 2024</p>
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
