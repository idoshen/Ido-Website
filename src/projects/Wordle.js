import React from 'react';
import './Project.css';
import WordelImg from '../assets/images/Wordle.gif';
import GitProjectIcon from '../assets/GitProject.svg';

function Wordle(){
  return (
    <section id="Wordle" className="project">
      <div className="project-container left-to-right">
        <div className='project-media-container-right-to-left'>
          <img className='project-media' src={WordelImg} alt='Wordle Solver'></img>
        </div>
        <div className='project-text'>
          <h1 className='project-title'>The Wordle Solver</h1>
          <div className='project-tags-and-link-container'>
            <div className='project-tags'>
              <span className='project-tag'>Information Theory</span>
              <span className='project-tag'>Full Stack</span>
              <span className='project-tag'>React</span>
              <span className='project-tag'>Python</span>
              </div>
          </div>
          <span className='project-span'>
            <p className='project-bullet'><strong >Entropy Calculation:</strong> Assesses word information gain for optimized guesses.</p>
            <p className='project-bullet'><strong >Dynamic Word Filtering:</strong> Continuously updates possibilities based on game feedback.</p>
            <p className='project-bullet'><strong>Efficient Guessing Process:</strong> Refines solutions in real-time, minimizing the number of guesses.</p>
          </span>
          <div>
            <a href='https://www.github.com/idoshen/Wordle-Solver' target="_blank" rel="noopener noreferrer"><img src={GitProjectIcon} alt="Git-Project"  className="git-project-link-img"/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wordle;
