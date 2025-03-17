import React from 'react';
import './Project.css';
import ServerImg from '../assets/images/Server.png';
import GitHubIcon from '../assets/icons/Github_Dark.svg';


// TODO: make code lines in the media visible (in the Server.png file)
function HTTPServer({isDarkMode}) {
  return (
    <section id="HTTPServer" className="project">
      <div className="project-container right-to-left">
        <div className='project-media-container-left-to-right'>
          <img src={ServerImg} alt='server' className='project-media'></img>
        </div>
        <div className='project-text'>
          <h1 className='project-title'>The Server_</h1>
          <div className='project-tags-and-link-container'>
            <div className='project-tags'>
              <span className={`project-tag ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Computer Networks</span>
              <span className={`project-tag ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Java</span>
              <span className={`project-tag ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Multithreading</span>
              <span className={`project-tag ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Concurrency</span>
            </div>
          </div>
            <p className='project-bullet'><strong>Custom HTTP Server:</strong> A fully functional web server that processes client requests and serves files from a customizable root directory.</p>
            <p className='project-bullet'><strong>Real-Time Data Logging:</strong> Captures session data and displays it in dynamic HTML tables for tracking request parameters.</p>
            <p className='project-bullet'><strong>Multithreaded Request Handling:</strong> Efficiently manages multiple client connections simultaneously using a thread pool, ensuring high performance under load.</p>
            <a className='github-link-button' href='https://www.github.com/idoshen/HTTP-Server' target="_blank" rel="noopener noreferrer">
              <img className='github-icon-img' src={GitHubIcon} alt='GitHub'></img>
              <strong>GitHub</strong>
            </a>
        </div>
      </div>
    </section>
  );
}

export default HTTPServer;
