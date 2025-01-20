import React from 'react';
import './Project.css';

function Wordle(){
  return (
    <section id="Wordle" className="section project">
      <div className='project-media-container'>
        
      </div>
       <div className='project-text animate'>
        <h1 className='project-title'>Wordle</h1>
        <p className='project-p'><span className='bold-text'>Entropy Calculation:</span> Assesses word information gain for optimized guesses.<br></br><br></br>
                                <span className='bold-text'>Dynamic Word Filtering:</span> Continuously updates possibilities based on game feedback.<br></br><br></br>
                                <span className='bold-text'>Efficient Guessing Process:</span> Refines solutions in real-time, minimizing the number of guesses.</p>
      </div>
    </section>
  );
}

export default Wordle;
