import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './layouts/Header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import SynthesizerApp from './projects/SynthesizerApp';
import Wordle from './projects/Wordle';
import HTTPServer from './projects/HTTP-Server';
import MazeGeneratorAndSolver from './projects/MazeGeneratorAndSolver';

function App() {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const visibleThreshold = 0.5; // Threshold for "is-visible"
    const hiddenThreshold = 0.5; // Threshold for "is-hidden"
  
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const visibilityRatio = entry.intersectionRatio;
  
          if (visibilityRatio >= visibleThreshold) {
            entry.target.classList.add('is-visible');
            entry.target.classList.remove('is-hidden');
          } else if (visibilityRatio < hiddenThreshold) {
            entry.target.classList.add('is-hidden');
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: [visibleThreshold, hiddenThreshold] }
    );

    const allAnimatedElements = document.querySelectorAll('.animate');
    allAnimatedElements.forEach((element) => observer.observe(element));

    return () => {
      allAnimatedElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

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
          <About />
          <Skills />
          <SynthesizerApp />
          <MazeGeneratorAndSolver />
          <Wordle />
          <HTTPServer />
          <Contact />
        </main>
      </div>
  );
}

export default App;
