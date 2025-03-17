import React, {useState, useEffect} from 'react';
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

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setIsDarkMode(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isDarkMode;
};

function App() {

  const isDarkMode = useDarkMode();
  console.log(isDarkMode);

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header isDarkMode={isDarkMode} />
      <main className="main-content">

        <Home isDarkMode={isDarkMode} />

        <SynthesizerApp isDarkMode={isDarkMode} />
        <MazeGeneratorAndSolver isDarkMode={isDarkMode} />
        <Wordle isDarkMode={isDarkMode} />
        <HTTPServer isDarkMode={isDarkMode} />
        
        <Skills isDarkMode={isDarkMode} />

        <Contact isDarkMode={isDarkMode} />

      </main>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
