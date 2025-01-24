import React from 'react';
import './Project.css';
import SynthesizerImage from '../assets/images/Synthesizer.png';

// DSP (Digital Signal Processing)
// Java GUI Development
// Multithreading
// Audio Effects Design
// Key Event Handling
// System Integration

function SynthesizerApp(){

  return (
    <section id="SynthesizerApp" className="section project ">
      <div className="project-grid-container">
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
          <p className='project-p'><span className='bold-text'>Real-Time DSP Sound Synthesis:</span> Generates and processes audio in real-time using advanced oscillators and waveforms.<br></br>
                                   <span className='bold-text'>Comprehensive Audio Effects:</span> Includes ADSR, Saturation, Delay, Tremolo, Vibrato, and more for detailed sound manipulation.<br></br>
                                   <span className='bold-text'>Interactive DSP Control:</span> Allows users to control frequency, modulation, and effects through intuitive input and real-time adjustments.</p>
        </div>
      </div>  
    </section>
  );
}

export default SynthesizerApp;
