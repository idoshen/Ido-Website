import React from 'react';
import './Skills.css';
import JavaIcon from '../assets/icons/Java.svg';
import CIcon from '../assets/icons/C.svg';
import PythonIcon from '../assets/icons/Python.svg';
import CSharpIcon from '../assets/icons/CSharp.svg';
import GitIcon from '../assets/icons/Git.svg';
import DotnetIcon from '../assets/icons/Dotnet.svg';
import LinuxIcon from '../assets/icons/Linux.svg'; 
import JavascriptIcon from '../assets/icons/Javascript.svg';
import CSSIcon from '../assets/icons/CSS.svg';
import ReactIcon from '../assets/icons/React.svg';
import HTMLIcon from '../assets/icons/HTML.svg';
import PytorchIcon from '../assets/icons/Pytorch.svg';
import NumpyIcon from '../assets/icons/Numpy.svg';
import PandasIcon from '../assets/icons/Pandas.svg';
import MatplotlibIcon from '../assets/icons/Matplotlib.svg';

function Skills(){
  return (
    <section id="skills" className="skills">
      <h1 className='animate'><span className='red-text'>My Skills</span></h1>
      <div className='skills-container'>
        <div id='prog-lang' className='prog-lang animate'>
          <div className='text text-left'>
            <h2>Programming Languages</h2>
            <p>In my studies, I developed projects using Java, Python, C, and C#. I created a synthesizer in Java, worked on machine learning projects in Python (GitHub Repository), and completed two in-depth courses: one focusing on C programming and another on Object-Oriented Programming in C#.</p>
          </div>
            <div className='icons-4'>
              <div><img src={JavaIcon} alt='Java' className='icon'></img></div>
              <div><img src={CIcon} alt='C' className='icon'></img></div>
              <div><img src={PythonIcon} alt='Python' className='icon'></img></div>
              <div><img src={CSharpIcon} alt='C#' className='icon'></img></div>
          </div>
        </div>
        <div id='plat-frame' className='plat-frame animate'>
          <div className='icons-3'>
            <div><img src={DotnetIcon} alt='.Net' className='icon'></img></div>
            <div><img src={LinuxIcon} alt='Linux' className='icon'></img></div>
            <div><img src={GitIcon} alt='Git' className='icon'></img></div>
          </div>
          <div className='text text-right'>
            <h2>Platforms & Frameworks</h2>
            <p>I manage all my projects using Git, ensuring efficient version control and collaboration. I have experience working with .NET for application development and gained familiarity with Linux during my system programming in C course.</p>
          </div>
        </div>
        <div id='web' className='web animate'>
          <div className='text text-left'>
            <h2>Web Development & Tools</h2>
            <p>I have gained hands-on experience in web development through projects like building this portfolio website and creating a Wordle Solver game. These projects allowed me to strengthen my skills in JavaScript, React, HTML5, and CSS3.</p>
          </div>
          <div className='icons-4'>
            <div><img src={JavascriptIcon} alt='Javascript' className='icon'></img></div>
            <div><img src={CSSIcon} alt='CSS3' className='icon big'></img></div>
            <div><img src={ReactIcon} alt='React' className='icon'></img></div>
            <div><img src={HTMLIcon} alt='HTML5' className='icon big'></img></div>
          </div>
        </div>
        <div id='machine-learning' className='machine-learning animate'>
          <div className='icons-4'>
          <div><img src={NumpyIcon} alt='Numpy' className='icon big'></img></div>
            <div><img src={PytorchIcon} alt='Pytorch' className='icon big'></img></div>
            <div><img src={MatplotlibIcon} alt='Matplotlib' className='icon big'></img></div>
            <div><img src={PandasIcon} alt='Pandas' className='icon big'></img></div>
          </div>
          <div className='text text-right'>
            <h2>Machine Learning</h2>
            <p>I have explored various areas of machine learning through courses and self-initiated projects. My experience includes Natural Language Processing, Reinforcement Learning, Deep Learning, Computer Vision, as well as statistics and data analysis.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
