import React, { useState, useEffect } from 'react';
import './MazeGeneratorAndSolver.css';

function MazeGeneratorAndSolver(){

  const [currentText, setCurrentText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(1);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const texts = ['Generator', 'Solver'];
    const interval = setInterval(() => {
      if (isDeleting) {
        if (currentCharIndex > 0) {
          setCurrentText(texts[currentTextIndex].slice(0, currentCharIndex - 1));
          setCurrentCharIndex(currentCharIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      } else {
        if (currentCharIndex <= texts[currentTextIndex].length) {
          setCurrentText(texts[currentTextIndex].slice(0, currentCharIndex));
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000);
        }
      }
    }, 200);
  
    return () => clearInterval(interval);
  }, [currentCharIndex, currentTextIndex, isDeleting]);


  return (
    <section id="MazeGeneratorAndSolver" className="section maze">
      <div className='maze-text'>
        <h1 className='maze-title'>The Maze</h1>
        <h1 className='maze-title blinking-cursor red-text'>{currentText}</h1>
        <p className='maze-p'>Developed a maze generator and solver, applying algorithmic techniques and problem-solving strategies to efficiently generate, solve and visualize 2D mazes.</p>
      </div>
      <div className='maze-gif-container'>
        <img src='./BFS.gif' alt='maze' className='maze-gif'></img>
      </div>
    </section>
  );
}

export default MazeGeneratorAndSolver;
