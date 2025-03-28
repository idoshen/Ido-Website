import React, { useState, useEffect } from 'react';
import './Project.css';
import MazeGift from '../assets/images/Maze.gif';
import GitHubIcon from '../assets/icons/Github.svg';

function MazeGeneratorAndSolver({isDarkMode}) {

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
        <div className='project-media-container-left-to-right'>
          <img src={MazeGift} alt='maze' className='project-media square'></img>
        </div>
        <div className='project-text'>
          <h1 className='project-title blinking-cursor '>The Maze <span className='green-text'>{currentText}</span></h1>
          <div className='project-tags-and-link-container'>
            <div className='project-tags'>
              <span className={`project-tag ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Algorithms</span>
              <span className={`project-tag ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Data Structures</span>
              <span className={`project-tag ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Java</span>
              <span className={`project-tag ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Problem Solving</span>
            </div>
          </div>
            <p className='project-bullet'><strong>Dynamic Maze Generation:</strong> Implements an algorithm to randomly generate solvable mazes of varying difficulty levels.</p>
            <p className='project-bullet'><strong>Efficient Maze Solving:</strong> Features an optimized solver that uses algorithms like DFS or BFS to find the shortest path through the maze.</p>
            <p className='project-bullet'><strong>Interactive Visualization:</strong> Provides a real-time visual representation of the maze creation and solving process, allowing users to explore and modify the maze.</p>
            <a className='github-link-button' href='https://www.github.com/idoshen/Maze-Generator-And-Solver' target="_blank" rel="noopener noreferrer">
              <img className='github-icon-img' src={GitHubIcon} alt='GitHub'></img>
              <strong>GitHub</strong>
            </a>
        </div>
      </div>
    </section>
  );
}

export default MazeGeneratorAndSolver;
