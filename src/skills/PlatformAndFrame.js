import React from "react";
import "./Skill.css";
import DotnetIcon from '../assets/icons/Dotnet.svg';
import LinuxIcon from '../assets/icons/Linux.svg';
import GitIcon from '../assets/icons/Git.svg';

function PlatformAndFrame() {
    return (
        <div id="plat-frame" className="skill">
            <div>
                <h1 className="skill-title">Platforms & Frameworks</h1>
            </div>
            <div className="icons-container">
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
    );
}

export default PlatformAndFrame;