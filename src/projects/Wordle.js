import React from 'react';
import './Project.css';
import WordelImg from '../assets/images/Wordle.gif';
import GitHubIcon from '../assets/icons/Github.svg';

function Wordle({isDarkMode}) {
  return (
    <section id="Wordle" className="project">
      <div className="project-container left-to-right">
        <div className='project-media-container-right-to-left'>
          <img className='project-media' src={WordelImg} alt='Wordle Solver'></img>
        </div>
        <div className='project-text'>
          <h1 className='project-title'>The Wordle Solver_</h1>
          <div className='project-tags-and-link-container'>
            <div className='project-tags'>
              <span className={`project-tag ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Information Theory</span>
              <span className={`project-tag ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Full Stack</span>
              <span className={`project-tag ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>React</span>
              <span className={`project-tag ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Python</span>
              </div>
          </div>
            <p className='project-bullet'><strong >Entropy Calculation:</strong> Assesses word information gain for optimized guesses.</p>
            <p className='project-bullet'><strong >Dynamic Word Filtering:</strong> Continuously updates possibilities based on game feedback.</p>
            <p className='project-bullet'><strong>Efficient Guessing Process:</strong> Refines solutions in real-time, minimizing the number of guesses.</p>
            <a className='github-link-button' href='https://www.github.com/idoshen/Wordle-Solver' target="_blank" rel="noopener noreferrer">
              <img className='github-icon-img' src={GitHubIcon} alt='GitHub'></img>
              <strong>GitHub</strong>
            </a>
        </div>
      </div>
    </section>
  );
}

export default Wordle;
