import React from 'react';
import './Project.css';
import SynthesizerImage from '../assets/images/Synthesizer.png';
import GitProjectIcon from '../assets/GitProject.svg';

function SynthesizerApp(){

  return (
    <section id="SynthesizerApp" className="project ">
      <div className="project-container left-to-right">
        <div className='project-media-container-right-to-left animate'>
          <img src={SynthesizerImage} alt='maze' className='project-media'></img>
        </div>
        <div className='project-text animate'>
            <h1 className='project-title'>The Synthesizer</h1>
            <div className='project-tags'>
            <span className='project-tag'>DSP</span>
            <span className='project-tag'>Multithreading</span>
            <span className='project-tag'>Java</span>
            <span className='project-tag'>GUI</span>
          </div>
          <span className='project-span'>
            <p className='project-bullet'><strong>Real-Time DSP Sound Synthesis:</strong> Generates and processes audio in real-time using advanced oscillators and waveforms.</p>
            <p className='project-bullet'><strong>Comprehensive Audio Effects:</strong> Includes ADSR, Saturation, Delay, Tremolo, Vibrato, and more for detailed sound manipulation.</p>
            <p className='project-bullet'><strong>Interactive DSP Control:</strong> Allows users to control frequency, modulation, and effects through intuitive input and real-time adjustments.</p>
          </span>
          <div className='project-link'><a className="git-project-link" href='https://www.github.com/idoshen' target="_blank" rel="noopener noreferrer"><img src={GitProjectIcon} alt="Git-Project" /></a></div>
        </div>
      </div>  
    </section>
  );
}

export default SynthesizerApp;
