import React from "react";
import "./Skill.css";
import JavaIcon from '../assets/icons/Java.svg';
import CIcon from '../assets/icons/C.svg';
import PythonIcon from '../assets/icons/Python.svg';
import CSharpIcon from '../assets/icons/CSharp.svg';

function ProgrammingLang() {
    return (
        <div id="prog-lang" className="skill">
            <div>
                <h1 className="skill-title">Programming Languages</h1>
            </div>
            <div className="icons-container">
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
    );
}

export default ProgrammingLang;