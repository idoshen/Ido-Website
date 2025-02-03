import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './layouts/Header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Title from './layouts/Title/Title';
import ProgrammingLang from './skills/ProgrammingLang';
import PlatformAndFrame from './skills/PlatformAndFrame';
import Web from './skills/Web';
import MachineLearning from './skills/MachineLearning';
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
          {/* <Title id="skills" title="Skills" className="skills-title" /> */}
          <ProgrammingLang />
          <PlatformAndFrame />
          <Web />
          <MachineLearning />
          {/* <Title id="projects" title="Projects" className="projects-title"/> */}
          <SynthesizerApp />
          <MazeGeneratorAndSolver />
          <Wordle />
          <HTTPServer />
          <Contact />
        </main>
        <SpeedInsights />
        <Analytics />
      </div>
  );
}

export default App;
