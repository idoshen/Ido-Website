import React, {useEffect, useState} from 'react';
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
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
  
    const darkBackgroundColor = 'rgb(34, 36, 42)';
  
    function updateHeaderColor() {
      let sectionUnderHeader = null;
  
      // Loop through all sections and check if any is directly below the header
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
  
        if (rect.top <= header.offsetHeight && rect.bottom >= header.offsetHeight) {
          sectionUnderHeader = section;
        }
      });
  
      // If a section is found, check its background color
      if (sectionUnderHeader) {
        const bgColor = window.getComputedStyle(sectionUnderHeader).backgroundColor;

        if (bgColor === darkBackgroundColor) {
          setIsLight(true);
        } else if (bgColor !== darkBackgroundColor) {
          setIsLight(false);
        }
      }
    }

    updateHeaderColor();

    window.addEventListener('scroll', updateHeaderColor);
  
    return () => {
      window.removeEventListener('scroll', updateHeaderColor);
    };
  }, []);
  
  

  return (
      <div className="App">
        <Header isLight={isLight} />
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
