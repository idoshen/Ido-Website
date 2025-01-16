import React, {useEffect} from 'react';
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

    const allAnimatedElements = document.querySelectorAll('*');
    allAnimatedElements.forEach((element) => observer.observe(element));

    return () => {
      allAnimatedElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

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
