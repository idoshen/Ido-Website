import React from 'react';
import './Navigation.css';

function Navigation() {

  return (
    <nav className="navigation">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li className="has-submenu">
          <a href="#skills">Skills</a>
          <ul className="submenu">
            <li><a href="#prog-lang">Programming Languages</a></li>
            <li><a href="#plat-frame">Platforms & Frameworks</a></li>
            <li><a href="#web">Web Development & Tools</a></li>
            <li><a href="#machine-learning">Machine Learning</a></li>
          </ul>
        </li>
        <li className="has-submenu">
          <a href="#SynthesizerApp">Projects</a>
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
