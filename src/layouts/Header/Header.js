import React from 'react';
import './Header.css';

const Header = ({ isDarkMode }) => {

    return (
        <header>
            <div className='header-name-container'>  
               IDO SHENBACH
            </div>
            <div>
                <div className='center-container'>
                <div className={`header-job-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Software Developer</div>
            </div>  
            </div>
            <div className='header-navigation-container'>
                <nav className={`navigation ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;