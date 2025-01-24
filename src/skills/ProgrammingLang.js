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
                    <h2 className="skill-title">Programming Languages</h2>
                    <p className="skill-p">
                    In my studies, I developed projects using Java, Python, C, and C#. I
                    created a synthesizer in Java, worked on machine learning projects in
                    Python (GitHub Repository), and completed two in-depth courses: one
                    focusing on C programming and another on Object-Oriented Programming
                    in C#.
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