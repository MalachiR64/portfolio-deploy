import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/rose-lion-prototype6.png';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const menuRef = useRef(null);

    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && 
                !menuRef.current.contains(event.target) &&
                !event.target.closest('.hamburger')) {
                closeMenu();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className="navbar" ref={navRef}>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            
            <div className="logo-container">
                <NavLink to="/" id="homescreen">
                    <img id="logo" alt="rose lion" src={logo} />
                </NavLink>
            </div>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`} ref={menuRef}>
                <li><NavLink to="/experience" activeclassname="active" onClick={closeMenu}>EXPERIENCE</NavLink></li>
                <li><NavLink to="/projects" activeclassname="active" onClick={closeMenu}>PROJECTS</NavLink></li>
                <li><NavLink to="/skills" activeclassname="active" onClick={closeMenu}>SKILLS</NavLink></li>
                <li><NavLink to="/about" activeclassname="active" onClick={closeMenu}>ABOUT ME</NavLink></li>
                <li><NavLink to="/contact" activeclassname="active" onClick={closeMenu}>CONTACT</NavLink></li>
                <li><NavLink to="/resume" activeclassname="active" onClick={closeMenu}>RESUME</NavLink></li>
            </ul>
        </nav>
    );
}