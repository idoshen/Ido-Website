import React from 'react';
import './Project.css';

function HTTPServer(){
  return (
    <section id="HTTPServer" className="project">
      <div className="project-grid-container">
        <div className='project-text animate'>
          <h1 className='project-title'>The Server</h1>
          <p className='project-p'><span className='bold-text'>Custom HTTP Server:</span> A fully functional web server that processes client requests and serves files from a customizable root directory.<br></br><br></br>
                                  <span className='bold-text'>Real-Time Data Logging:</span> Captures session data and displays it in dynamic HTML tables for tracking request parameters.<br></br><br></br>
                                  <span className='bold-text'>Multithreaded Request Handling:</span> Efficiently manages multiple client connections simultaneously using a thread pool, ensuring high performance under load.</p>
        </div>
        <div className='project-media-container animate'>
          <img src='./server_image.png' alt='server' className='project-media'></img>
        </div>
      </div>
    </section>
  );
}

export default HTTPServer;
