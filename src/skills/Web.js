import React from "react";
import "./Skill.css";
import JavascriptIcon from '../assets/icons/Javascript.svg';
import CSSIcon from '../assets/icons/CSS.svg';
import ReactIcon from '../assets/icons/React.svg';
import HTMLIcon from '../assets/icons/HTML.svg';


function Web() {
    return (
        <div id="web" className="skill">
            <div className='text'>
                <h1 className='skill-title'>Web Development & Tools</h1>
            </div>
            <div className='icons-container'>
                <div><img src={JavascriptIcon} alt='Javascript' className='icon'></img></div>
                <div><img src={CSSIcon} alt='CSS3' className='icon'></img></div>
                <div><img src={ReactIcon} alt='React' className='icon'></img></div>
                <div><img src={HTMLIcon} alt='HTML5' className='icon'></img></div>
            </div>
        </div>
    );
}

export default Web;