import React, {useState, useEffect} from 'react';
import './Header.css';
import BurgerLightIcon from '../../assets/Burger_Light.svg';
import BurgerDarkIcon from '../../assets/Burger_Dark.svg';

const Header = ({ isLight }) => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsScrolled(false);
            } else {
                setIsScrolled(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header animate ${isScrolled ? 'scrolled-down' : 'scrolled-to-top'} ${isLight ? 'light-header' : ''}`}>
            <div className='header-name-container'>  
                <a className='header-name' href="#home">IDO SHENBACH</a>
            </div>
            <div className="burger-menu" >
                <img src={isLight ? BurgerDarkIcon : BurgerLightIcon } alt="Menu" className='burger-icon' onClick={toggleMenu}/>
            </div>
            <div className={`menu-container ${isMenuOpen ? "open" : "close"} ${isLight ? 'light-header' : ''}`}>
                <nav className={`navigation ${isLight ? 'light-header' : ''}`}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li className="has-submenu">
                        <a href="#skills">Skills</a>
                        <ul className="submenu ">
                            <li><a href="#prog-lang">Programming Languages</a></li>
                            <li><a href="#plat-frame">Platforms & Frameworks</a></li>
                            <li><a href="#web">Web Development & Tools</a></li>
                            <li><a href="#ml">Machine Learning</a></li>
                        </ul>
                        </li>
                        <li className="has-submenu">
                        <a href="#SynthesizerApp">Projects</a>
                        <ul className="submenu">
                            <li><a href="#SynthesizerApp">Synthesizer App</a></li>
                            <li><a href="#MazeGeneratorAndSolver">Maze Generator And Solver</a></li>
                            <li><a href="#Wordle">Wordle Solver</a></li>
                            <li><a href="#HTTPServer">HTTP-Server</a></li>
                        </ul>
                        </li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;