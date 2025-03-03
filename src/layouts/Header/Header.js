import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <header>
            <div className='header-name-container'>  
               IDO SHENBACH
            </div>
            <div>
                <div className='header-job-container'>Software Developer</div>
                {/* <div className='mode-button'>dark_mode</div> */}
                {/* TODO:: Add dark mode toggle button */}
            </div>
            <div className='header-navigation-container'>
                <nav className="navigation">
                    <ul>
                        <li><a href="#home">About</a></li>
                        <li><a href="#SynthesizerApp">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;