import React from "react";
import "./Skill.css";
import JavaIcon from '../assets/icons/Java.svg';
import CIcon from '../assets/icons/C.svg';
import PythonIcon from '../assets/icons/Python.svg';
import CSharpIcon from '../assets/icons/CSharp.svg';

function ProgrammingLang() {
    return (
        <section id="prog-lang" className="skill">
            <div className="skill-container left-to-right animate">
                <div className="text">
                    <h1 className="skill-title">Programming Languages</h1>
                    <p className="skill-p">
                    Built, learned, and explored programming.
                    I developed a synthesizer in <span className="red-text"><strong>Java</strong></span>, worked on machine learning projects in
                    <span className="red-text"><strong> Python</strong></span>, and completed two in-depth courses: one
                    focusing on <span className="red-text"><strong>C</strong></span> programming and another on Object-Oriented Programming
                    in <span className="red-text"><strong>C#</strong></span>.
                    </p>
                </div>
                <div className="icons-4">
                    <div>
                    <img src={JavaIcon} alt="Java" className="icon"></img>
                    </div>
                    <div>
                    <img src={CIcon} alt="C" className="icon"></img>
                    </div>
                    <div>
                    <img src={PythonIcon} alt="Python" className="icon"></img>
                    </div>
                    <div>
                    <img src={CSharpIcon} alt="C#" className="icon"></img>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProgrammingLang;