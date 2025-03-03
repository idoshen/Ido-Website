import React from 'react';
import './App.css';
import Header from './layouts/Header/Header';
import Home from './pages/Home';
import Skills from './skills/Skills';
import SynthesizerApp from './projects/SynthesizerApp';
import MazeGeneratorAndSolver from './projects/MazeGeneratorAndSolver';
import Wordle from './projects/Wordle';
import HTTPServer from './projects/HTTP-Server';
import Contact from './pages/Contact';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {

  return (
      <div className="App">
        <Header/>
        <main className="main-content">
          <Home />

          <SynthesizerApp />
          <MazeGeneratorAndSolver />
          <Wordle />
          <HTTPServer />

          {/* <About /> */}
          
          <Skills />

          <Contact />
        </main>
        <SpeedInsights />
        <Analytics />
      </div>
  );
}

export default App;
