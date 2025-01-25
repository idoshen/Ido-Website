import React from 'react';
import './Project.css';
import WordelImg from '../assets/images/Wordle.png';

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
          <p className='project-p'><span className='bold-text'>Entropy Calculation:</span> Assesses word information gain for optimized guesses.<br></br>
                                  <span className='bold-text'>Dynamic Word Filtering:</span> Continuously updates possibilities based on game feedback.<br></br>
                                  <span className='bold-text'>Efficient Guessing Process:</span> Refines solutions in real-time, minimizing the number of guesses.</p>
        </div>
      </div>
    </section>
  );
}

export default Wordle;
