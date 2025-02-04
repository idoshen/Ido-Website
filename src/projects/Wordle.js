import React from 'react';
import './Project.css';
import WordelImg from '../assets/images/Wordle.png';
import GitProjectIcon from '../assets/GitProject.svg';

function Wordle(){
  return (
    <section id="Wordle" className="project">
      <div className="project-container left-to-right">
        <div className='project-media-container-right-to-left animate'>
          <img className='project-media' src={WordelImg} alt='Wordle Solver'></img>
        </div>
        <div className='project-text animate'>
          <h1 className='project-title'>The Wordle Solver</h1>
          <div className='project-tags'>
            <span className='project-tag'>Information Theory</span>
            <span className='project-tag'>Full Stack</span>
            <span className='project-tag'>React</span>
            <span className='project-tag'>Python</span>
          </div>
          <span className='project-span'>
            <p className='project-bullet'><strong >Entropy Calculation:</strong> Assesses word information gain for optimized guesses.</p>
            <p className='project-bullet'><strong >Dynamic Word Filtering:</strong> Continuously updates possibilities based on game feedback.</p>
            <p className='project-bullet'><strong>Efficient Guessing Process:</strong> Refines solutions in real-time, minimizing the number of guesses.</p>
          </span>
          <div className='project-link'><a className="git-project-link" href='https://www.github.com/idoshen' target="_blank" rel="noopener noreferrer"><img src={GitProjectIcon} alt="Git-Project" /></a></div>
        </div>
      </div>
    </section>
  );
}

export default Wordle;
