import React from 'react';
import './Project.css';
import SynthesizerImage from '../assets/images/Synthesizer.png';
import GitHubIcon from '../assets/icons/Github_Dark.svg';

function SynthesizerApp({isDarkMode}) {

  return (
    <section id="projects" className="project ">
      <div className="project-container left-to-right">
        <div className='project-media-container-right-to-left'>
          <img src={SynthesizerImage} alt='maze' className='project-media'></img>
        </div>
        <div className='project-text'>
            <h1 className='project-title'>The Synthesizer_</h1>
            <div className='project-tags-and-link-container'>
              <div className='project-tags'>
              <span className={`project-tag ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>DSP</span>
              <span className={`project-tag ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Multithreading</span>
              <span className={`project-tag ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Java</span>
              <span className={`project-tag ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>GUI</span>
              </div>
          </div>
            <p className='project-bullet'><strong>Real-Time DSP Sound Synthesis:</strong> Generates and processes audio in real-time using advanced oscillators and waveforms.</p>
            <p className='project-bullet'><strong>Comprehensive Audio Effects:</strong> Includes ADSR, Saturation, Delay, Tremolo, Vibrato, and more for detailed sound manipulation.</p>
            <p className='project-bullet'><strong>Interactive DSP Control:</strong> Allows users to control frequency, modulation, and effects through intuitive input and real-time adjustments.</p>
            <a className='github-link-button' href='https://www.github.com/idoshen/Synthesizer-App' target="_blank" rel="noopener noreferrer">
              <img className='github-icon-img' src={GitHubIcon} alt='GitHub'></img>
              <strong>GitHub</strong>
            </a>
        </div>
      </div>  
    </section>
  );
}

export default SynthesizerApp;
