import React from 'react';
import './App.css';
import Header from './Components/Header';
// import Footer from './Components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Education from './sections/Education';
import Contact from './sections/Contact';
import SynthesizerApp from './sections/projects/SynthesizerApp';
import Wordle from './sections/projects/Wordle';
import HTTPServer from './sections/projects/HTTP-Server';
import MazeGeneratorAndSolver from './sections/projects/MazeGeneratorAndSolver';

function App() {
  
  return (
      <div className="App">
        <Header />

        <main className="main-content">
          <Home />
          <About />
          <Education />
          <SynthesizerApp />
          <MazeGeneratorAndSolver />
          <Wordle />
          <HTTPServer />
          <Contact />
        </main>
        {/* <Footer /> */}
      </div>
  );
}

export default App;
