import '../styles/About.css';
import childhoodPhoto from '../assets/ChildhoodPhoto.JPG';
import iitLogo from '../assets/iit-logo.png';
import pikappLogo from '../assets/PiKappLogo.png';

export default function About() {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            
            <div className="sections-grid">
                <section className="intro-section">
                    <p>
                        <strong>Hi, I'm Malachi Rosario</strong>, a Sofware Engineer Intern at BlackRock
                        and Computer Science student at Illinois Institute of Technology. I'm a passionate problem solver who loves 
                        tackling complex challenges through software, data, or mathematics. 
                    </p>
                    <p>
                        I've worked with 
                        languages such as <strong>Python</strong>, <strong>Java</strong>, <strong>SQL</strong>, {' '}
                        <strong>C</strong>, and <strong>JavaScript</strong>, applying them across a range of 
                        technical domains. My experience spans <strong>data structures</strong> and {' '}
                        <strong>algorithms</strong>, <strong>database management</strong>, and building {' '}
                        <strong>data pipelines</strong> and <strong>full-stack applications</strong>. I've also 
                        worked with <strong>cloud computing</strong>, <strong>machine learning</strong>, <strong>data science</strong>, {' '}
                        <strong>visualization</strong>, and <strong>automation scripting</strong>, delivering 
                        efficient and scalable solutions to complex problems.
                    </p>
                </section>
                
                <section className="background-section">
                    <h2>Background</h2>
                    <div className="background-content">
                        <div className="background-text">
                            <p>
                                I grew up in the suburbs of Chicago, where I spent much of my time playing {' '}
                                baseball, basketball, and video games  
                                like <em>Pokémon</em>. I discovered my love for programming in the later parts of 
                                high school through robotics and coding projects. I enjoyed the problem-solving,  
                                strategy, and planning that programming provided. This passion led me to pursue Computer Science at IIT, where I have been constantly improving.
                            </p>
                        </div>
                        <div className="background-image">
                            <img src={childhoodPhoto} alt="Childhood photo with dad" />
                        </div>
                    </div>
                </section>
                
                <section className="interests-section">
                    <h2>Interests/Hobbies</h2>
                    <ul>
                        <li>Volunteering through my church</li>
                        <li>I have started to get into some sci-fi such as Red Rising and the Sun Eater Series</li>
                        <li>I enjoy playing sports like basketball, table tennis, and baseball </li>
                        <li>Fan of the Cubs, Bears, Lakers, and Arsenal </li>
                        <li>I love to run and bike</li>
                    </ul>
                </section>
                
                <section className="education-section">
                    <h2>Education</h2>
                    <div className="education-content">
                        <div className="education-text">
                            <p>
                                Some classes I have taken include Data Structures and Algorithms, Operating Systems, Database 
                                Organization, Systems Programming, Data Mining, Probability and 
                                Statistics, Linear Algebra, Object-Oriented Programming I, II, Data Science, Discrete Structures, Graph Theory, and 
                                Calculus 1, 2, and 3.
                            </p>
                            <p>
                                Outside of my classes, I have been a TA for Data Structures and Algorithms and 
                                Object-Oriented Programming. I have enjoyed my time as a TA helping students, and 
                                I have seen much improvement in my communication skills. I am also a brother of Pi 
                                Kappa Phi and have served as the risk manager. I am also a part of SHPE, Cru, and ACM.
                            </p>
                        </div>
                        <div className="education-images">
                            <div className="education-image">
                                <img src={iitLogo} alt="Illinois Institute of Technology logo" />
                            </div>
                            <div className="education-image">
                                <img src={pikappLogo} alt="Pi Kappa Phi logo" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}