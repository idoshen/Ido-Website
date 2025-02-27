import React, { useState, useEffect } from 'react';
import './Project.css';
import MazeGift from '../assets/images/Maze.gif';
import GitProjectIcon from '../assets/GitProject.svg';

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

  // TODO: Work on Maze media (gif)
  return (
    <section id="MazeGeneratorAndSolver" className="project">
      <div className="project-container right-to-left">
        <div className='project-media-container-left-to-right'>
          <img src={MazeGift} alt='maze' className='project-media'></img>
        </div>
        <div className='project-text'>
          <h1 className='project-title blinking-cursor '>The Maze {currentText}</h1>
          <div className='project-tags-and-link-container'>
            <div className='project-tags'>
              <span className='project-tag'>Algorithms</span>
              <span className='project-tag'>Data Structures</span>
              <span className='project-tag'>Java</span>
              <span className='project-tag'>Problem Solving</span>
            </div>
          </div>
          <span className='project-span'>
            <p className='project-bullet'><strong>Dynamic Maze Generation:</strong> Implements an algorithm to randomly generate solvable mazes of varying difficulty levels.</p>
            <p className='project-bullet'><strong>Efficient Maze Solving:</strong> Features an optimized solver that uses algorithms like DFS or BFS to find the shortest path through the maze.</p>
            <p className='project-bullet'><strong>Interactive Visualization:</strong> Provides a real-time visual representation of the maze creation and solving process, allowing users to explore and modify the maze.</p>
          </span>
          <div>
            <a href='https://www.github.com/idoshen/Maze-Generator-And-Solver' target="_blank" rel="noopener noreferrer"><img src={GitProjectIcon} alt="git-Project"  className="git-project-link-img"/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MazeGeneratorAndSolver;
