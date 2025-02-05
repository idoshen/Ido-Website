import React, {useState, useEffect, useRef} from 'react';
import './Header.css';
import BurgerLightIcon from '../../assets/Burger_Light.svg';
import BurgerDarkIcon from '../../assets/Burger_Dark.svg';

const Header = ({ isLight }) => {

    const [isScrolledDown, setIsScrolledDown] = useState(window.scrollY !== 0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSkillsOpen, setIsSkillsOpen] = useState(false);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const menuRef = useRef(null);
    const burgerButtonRef = useRef(null);
    const skillsButtonRef = useRef(null);
    const projectsButtonRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolledDown(window.scrollY !== 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = (menuType) => {
        if (menuType === 'menu') {
            setIsMenuOpen((prevState) => !prevState);
        } else if (menuType === 'skills') {
            setIsSkillsOpen((prevState) => !prevState);
            if (!isSkillsOpen) {
                setIsProjectsOpen(false);
            }
        } else if (menuType === 'projects') {
            setIsProjectsOpen((prevState) => !prevState);
            if (!isProjectsOpen) {
                setIsSkillsOpen(false);
            }
        }
    };

    const handleClickOutside = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            burgerButtonRef.current &&
            !burgerButtonRef.current.contains(event.target)
        ) {
            setIsMenuOpen(false);
            setIsSkillsOpen(false);
            setIsProjectsOpen(false);
        }
    };


    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className={`header animate ${isScrolledDown ? 'scrolled-down' : 'scrolled-to-top'} ${isLight ? 'light-header' : ''}`}>
            <div className='header-name-container'>  
                <a className='header-name' href="#home">IDO SHENBACH</a>
            </div>
            <div className="burger-menu" >
                <img src={isLight ? BurgerDarkIcon : BurgerLightIcon } alt="Menu" className='burger-icon' ref={burgerButtonRef} onClick={() => toggleMenu('menu')}/>
            </div>
            <div ref={menuRef} className={`first-submenu-container ${isMenuOpen ? "open" : "close"} ${isLight ? 'light-header' : ''}`}>
                <nav className={`navigation ${isLight ? 'light-header' : ''}`}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li className="has-submenu">
                        <a href="#skills" ref={skillsButtonRef} onClick={() => toggleMenu('skills')}>Skills</a>
                        <ul className={`second-submenu-container ${isSkillsOpen ? "open" : "close"}`}>
                            <li><a href="#prog-lang">Programming Languages</a></li>
                            <li><a href="#plat-frame">Platforms & Frameworks</a></li>
                            <li><a href="#web">Web Development & Tools</a></li>
                            <li><a href="#ml">Machine Learning</a></li>
                        </ul>
                        </li>
                        <li className="has-submenu">
                        <a href="#projects" ref={projectsButtonRef} onClick={() => toggleMenu('projects')}>Projects</a>
                        <ul className={`second-submenu-container  ${isProjectsOpen ? "open" : "close"}`} ref={projectsButtonRef}>
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