import React from 'react';
import './HTTP-Server.css';

function HTTPServer(){
  return (
    <section id="HTTPServer" className="server">
      <div className='server-text'>
        <h1 className='server-title'>The Server</h1>
        <p className='server-p'>Developed a lightweight HTTP server from scratch, showcasing strong networking and server-side development skills.</p>
      </div>
      <div className='server-gif-container'>
        <img src='./server_image.png' alt='server' className='server-gif'></img>
      </div>
    </section>
  );
}

export default HTTPServer;
