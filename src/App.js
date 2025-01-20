import React, {useEffect} from 'react';
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
    const navigation = document.querySelector('.navigation');
    const sections = document.querySelectorAll('section'); // Select all sections
  
    if (!header || sections.length === 0) {
      console.error('Header or sections not found.');
      return;
    }
  
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
          header.classList.add('light-header');
          navigation.classList.add('light-header');
        } else if (bgColor !== darkBackgroundColor) {
          header.classList.remove('light-header');
          navigation.classList.remove('light-header');
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
        <Header />
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
