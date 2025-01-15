import React from 'react';
import './MazeGeneratorAndSolver.css';

function MazeGeneratorAndSolver(){
  return (
    <section id="MazeGeneratorAndSolver" className="section maze fade-in">
      <div className='maze-text'>
        <h1 className='maze-title'>The Maze Solver</h1>
        <p className='maze-p'>Developed a maze generator and solver, applying algorithmic techniques and problem-solving strategies to efficiently generate and solve 2D mazes.</p>
      </div>
      <div className='maze-image'>
        <img src='./bfs-tilt.gif' alt='maze'></img>
      </div>
    </section>
  );
}

export default MazeGeneratorAndSolver;
