import React from 'react';
import './Navigation.css';

function Navigation() {

  return (
    <nav className="navigation">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li className="has-submenu">
          <a href="#projects">Projects</a>
          <ul className="submenu">
            <li><a href="#SynthesizerApp">Synthesizer App</a></li>
            <li><a href="#MazeGeneratorAndSolver">Maze Generator And Solver</a></li>
            <li><a href="#Wordle">Wordle</a></li>
            <li><a href="#HTTPServer">HTTP-Server</a></li>
          </ul>
        </li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
