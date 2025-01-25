import React, { useState, useEffect } from 'react';
import './Project.css';
import MazeGift from '../assets/images/BFS.gif';

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
    <section id="MazeGeneratorAndSolver" className="project">
      <div className="project-container right-to-left">
        <div className='project-media-container-left-to-right animate'>
          <img src={MazeGift} alt='maze' className='project-media'></img>
        </div>
        <div className='project-text animate'>
          <h1 className='project-title'>The Maze</h1>
          <h1 className='project-title blinking-cursor red-text'>{currentText}</h1>
          <div className='project-tags'>
            <span className='project-tag'>Algorithms</span>
            <span className='project-tag'>Data Structures</span>
            <span className='project-tag'>Java</span>
            <span className='project-tag'>Problem Solving</span>
          </div>
          <p className='project-p'><span className='bold-text'>Dynamic Maze Generation:</span> Implements an algorithm to randomly generate solvable mazes of varying difficulty levels.<br></br>
                                <span className='bold-text'>Efficient Maze Solving:</span> Features an optimized solver that uses algorithms like DFS or BFS to find the shortest path through the maze.<br></br>
                                <span className='bold-text'>Interactive Visualization:</span> Provides a real-time visual representation of the maze creation and solving process, allowing users to explore and modify the maze.</p>
        </div>
        
      </div>
    </section>
  );
}

export default MazeGeneratorAndSolver;
