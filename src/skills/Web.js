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
                    <h1 className='skill-title'>Web Development & Tools</h1>
                    <p className='skill-p'>Gained hands-on experience in web development through projects like building this portfolio website and creating a Wordle Solver game. These projects allowed me to strengthen my skills in <span className="red-text"><strong>React</strong></span> and <span className="red-text"><strong>JavaScript</strong></span> for dynamic user interfaces, as well as <span className="red-text"><strong>HTML5</strong></span> and <span className="red-text"><strong>CSS3</strong></span> for structuring and styling web pages.</p>
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