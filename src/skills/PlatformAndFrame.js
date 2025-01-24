import React from "react";
import "./Skill.css";
import DotnetIcon from '../assets/icons/Dotnet.svg';
import LinuxIcon from '../assets/icons/Linux.svg';
import GitIcon from '../assets/icons/Git.svg';

function PlatformAndFrame() {
    return (
        <section id="plat-frame" className="skill">
            <div className="skill-container right-to-left animate">
                <div className="text text-right">
                    <h2 className="skill-title">Platforms & Frameworks</h2>
                    <p className="skill-p">
                    I manage all my projects using Git, ensuring efficient version control
                    and collaboration. I have experience working with .NET for application
                    development and gained familiarity with Linux during my system
                    programming in C course.
                    </p>
                </div>
                <div className="icons-3">
                    <div>
                    <img src={DotnetIcon} alt=".Net" className="icon"></img>
                    </div>
                    <div>
                    <img src={LinuxIcon} alt="Linux" className="icon"></img>
                    </div>
                    <div>
                    <img src={GitIcon} alt="Git" className="icon"></img>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PlatformAndFrame;