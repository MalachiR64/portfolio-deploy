import { FaReact, FaHeart } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
            <div className="footer-links">
                    <a href="https://github.com/MalachiR64" target="_blank" rel="noopener noreferrer">GitHub</a> 
                    <a href="https://linkedin.com/in/malachirosario" target="_blank" rel="noopener noreferrer">LinkedIn</a> 
                    <a href="/contact" rel="noopener noreferrer">Contact</a> 
                    <a href="/resume" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
                <div className="copyright">
                    Copyright © {currentYear} Malachi Rosario. All rights reserved.
                </div>
                <div className="tech-stack">
                    Made with<span className="react-icon"><FaReact /> React</span>
                </div>
            </div>
        </footer>
    );
}
