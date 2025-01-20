import React, {useState, useEffect} from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <header className={`header animate ${isScrolled ? 'scrolled-down' : 'scrolled-to-top'}`}>
            <div className='header-name-container'>  
                <a className='header-name' href="#home">IDO SHENBACH</a>
            </div>
            <div className='header-navbar'>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;