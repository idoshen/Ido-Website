import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Ido Shenbach</h1>
    </header>
  );
}

function Image() {
  return (
    <div>
      <img src="ido.jpg" alt="Ido Shenbach" className="profile-image"/>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a to="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function MainContent() {
  return (
    <main className="main-content">
      <div className="left-column">
        <Image />
      </div>
      <div className="right-column">
        <Home />
        <About />
        <Education />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

function Home(){
  return (
    <section id="home">
      <h1>Ido</h1>
      <h1>Shenbach</h1>
      <p>Software Developer</p>
    </section>
  );
}

function About(){
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>Passionate about software development, with experience in machine learning, computer vision, and data science. Holds a B.Sc. in Computer Science, with strong expertise in data structures, algorithms, and system programming. Eager to gain practical experience through internships to advance in software developmentand and contribute to the field.</p>
    </section>
  );
}

function Education(){
  return (
    <section id="education" className="section">
      <h2>My Education</h2>
      <div className="education-list">
        <div className="education-item">
          <h3>B.Sc. Computer Science</h3>
          <p>International school at Reichman University</p>
        </div>
      </div>
    </section>
  );
}

function Projects(){
  const projects = [
    {
      title: "SynthesizerApp",
      description: "Built a live synthesizer app in Java.",
      demoImage: "synth-thumbnail.jpg",
      link: "#"
    },
    {
      title: "Wordle",
      description: "Designed a Wordle-style game.",
      demoImage: "wordle-thumbnail.jpg",
      link: "#"
    },
    {
      title: "HTTP-Server",
      description: "Built a lightweight HTTP server from scratch.",
      demoImage: "http-server-thumbnail.jpg",
      link: "#"
    },
    {
      title: "MazeGeneratorAndSolver",
      description: "Developed a maze generator and solver.",
      demoImage: "maze-thumbnail.png",
      link: "https://github.com/idoshen/MazeGeneratorAndSolver"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Next and Previous clicks
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const project = projects[currentIndex];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="carousel-container">
        <div className="carousel">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
          <div className="carousel-item">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-demo">
              <img src={project.demoImage} alt={project.title} />
            </div>
          </div>
          </a>
        </div>

        <div className="carousel-controls">
          <button className="prev" onClick={handlePrev}>←</button>
          <button className="next" onClick={handleNext}>→</button>
        </div>
      </div>
    </section>
  );
}

// function Contact(){
//   return (
//     <section id="contact" className="section">
//       <h2>Contact Me</h2>
//       <p>If you'd like to work together or have any questions, don't hesitate to reach out.</p>
//     </section>
//   );
// }

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Ido Shenbach. All rights reserved.</p>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
