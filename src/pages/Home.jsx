import { NavLink } from 'react-router-dom';
import '../styles/Home.css';
import profilePhoto from '../assets/headshotsq.jpg';
import {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaInstagram,
    FaChevronDown
} from 'react-icons/fa';

import Experience from './Experience';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import Skills from './Skill';

export default function Home() {
    return (
        <div id="home" className="landing-page">
            <h1 className="name-header">Hi, I'm Malachi Rosario</h1>

            <div className="grid-container">
                {/* Photo Section with Social Icons Nested Inside */}
                <div className="grid-item photo">
                    <img src={profilePhoto} alt="Profile" />

                    {/* Social Links Section */}
                    <div className="social-icons">
                        <hr className="divider" />
                        <div className="icons">
                            <a
                                href="https://linkedin.com/in/malachirosario"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://github.com/MalachiR64"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>

                            <a href="mailto:mrosario5664@gmail.com">
                                <FaEnvelope />
                            </a>

                            <a
                                href="https://instagram.com/malachi_rosario"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                {/* About Me Text Section */}
                <div className="grid-item about-text">
                    <div className="about-content">
                        <div className="info-container">
                            <span className="location">📍Chicago, IL</span>
                            <div className="info-divider"></div>
                            <span className="education">
                                <span className="education-emoji">🎓</span>
                                <span className="education-text">Illinois Institute Of Technology, BS, Computer Science May 2026</span>
                            </span>
                        </div>
                        
                        <p>
                            I'm a previous Sofware Engineer Intern at BlackRock and Student. 
                            I'm a passionate problem solver who loves tackling complex challenges 
                            through software, data, and mathematics.
                        </p>

                        <NavLink to="/about" className="see-more-link">
                            See more
                        </NavLink>

                        <div className="button-container">
                            <NavLink to="/contact" className="nav-btn">Contact</NavLink>
                            <NavLink to="/resume" className="nav-btn">Resume</NavLink>
                            <NavLink to="/experience" className="nav-btn">Experience</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}