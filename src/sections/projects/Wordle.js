import React from 'react';
import './Wordle.css';

function Wordle(){
  return (
    <section id="Wordle" className="section wordle">
      <div className='wordle-gif-container'>
        <img src='./wordle_image.png' alt='wordle' className='wordle-gif'></img>
      </div>
       <div className='wordle-text'>
        <h1 className='wordle-title'>Wordle</h1>
        <p className='wordle-p'>Designed a Wordle-style game,integrating concepts from information theory, focusing on word filtering and entropy-based validation.</p>
      </div>
      
    </section>
  );
}

export default Wordle;
