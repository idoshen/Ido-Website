import React from "react";
import "./Skill.css";
import JavascriptIcon from '../assets/icons/Javascript.svg';
import CSSIcon from '../assets/icons/CSS.svg';
import ReactIcon from '../assets/icons/React.svg';
import HTMLIcon from '../assets/icons/HTML.svg';


function Web() {
    return (
        <section id="web" className="skill">
            <div className="skill-container left-to-right animate">
                <div className='text'>
                    <h2 className='skill-title'>Web Development & Tools</h2>
                    <p className='skill-p'>Gained hands-on experience in web development through projects like building this portfolio 
                        website and creating a Wordle Solver game. 
                        These projects allowed me to strengthen my skills in 
                        React, JavaScript, HTML5, and CSS3.</p>
                </div>
                <div className='icons-4'>
                    <div><img src={JavascriptIcon} alt='Javascript' className='icon'></img></div>
                    <div><img src={CSSIcon} alt='CSS3' className='big-icon'></img></div>
                    <div><img src={ReactIcon} alt='React' className='icon'></img></div>
                    <div><img src={HTMLIcon} alt='HTML5' className='big-icon'></img></div>
                </div>
            </div>
        </section>
    );
}

export default Web;