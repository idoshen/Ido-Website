import React from 'react';
import './Project.css';
import ServerImg from '../assets/images/Server.png';
import GitProjectIcon from '../assets/GitProject.svg';


// TODO: make code lines in the media visible (in the Server.png file)
function HTTPServer(){
  return (
    <section id="HTTPServer" className="project">
      <div className="project-container right-to-left">
        <div className='project-media-container-left-to-right'>
          <img src={ServerImg} alt='server' className='project-media'></img>
        </div>
        <div className='project-text'>
          <h1 className='project-title'>The Server</h1>
          <div className='project-tags-and-link-container'>
            <div className='project-tags'>
              <span className='project-tag'>Computer Networks</span>
              <span className='project-tag'>Java</span>
              <span className='project-tag'>Multithreading</span>
              <span className='project-tag'>Concurrency</span>
            </div>
          </div>
          <span className='project-span'>
            <p className='project-bullet'><strong>Custom HTTP Server:</strong> A fully functional web server that processes client requests and serves files from a customizable root directory.</p>
            <p className='project-bullet'><strong>Real-Time Data Logging:</strong> Captures session data and displays it in dynamic HTML tables for tracking request parameters.</p>
            <p className='project-bullet'><strong>Multithreaded Request Handling:</strong> Efficiently manages multiple client connections simultaneously using a thread pool, ensuring high performance under load.</p>
          </span>
          <div>
            <a href='https://www.github.com/idoshen/HTTP-Server' target="_blank" rel="noopener noreferrer"><img src={GitProjectIcon} alt="Git-Project"  className="git-project-link-img"/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HTTPServer;
