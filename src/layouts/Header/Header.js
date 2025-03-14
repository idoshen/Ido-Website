import React from 'react';
import './Header.css';

const Header = ({ isDarkMode, setIsDarkMode }) => {
    const handleToggleChange = (event) => {
        setIsDarkMode(event.target.checked);
        console.log('Dark mode is now:', event.target.checked);
    };

    return (
        <header>
            <div className='header-name-container'>  
               IDO SHENBACH
            </div>
            <div>
                <div className='center-container'>
                <div className='header-job-container'>Software Developer</div>
                <div className="mode-button">
                    <label className="switch">
                    <input
                     type="checkbox"
                     checked={isDarkMode}
                     onChange={handleToggleChange}
                    />
                        <span className="slider"></span>
                    </label>
                </div>
                {/* TODO:: Add dark mode toggle button */}
            </div>  
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