import React from 'react';
import { Chrono } from "react-chrono";
import '../styles/experience.css';
import iitLogo from '../assets/iit-logo.png';
import treevahPhoto from '../assets/treevah-photo.jpg'; 
import treevahLogo from '../assets/treevah-logo.jpg'; 
import exelonLogo from '../assets/exelon-logo.jpg';
import gbsLogo from '../assets/gbs-logo.jpg';
import iitLogoCoc from '../assets/iit-logo-coc.jpg';
import iitSkyline from '../assets/iit-skyline.webp';
import BlackRockLogo from '../assets/blackrock-logo.png';
export default function Experience() {
    const items = [
        {
            title: "Current",
            cardTitle: "💻 Incoming Summer Analyst Intern: Software Engineering",
            cardSubtitle: "BlackRock, Atlanta, GA",
            cardDetailedText: "",

        },
        {
            title: "08/2024 – 12/2024",
            cardTitle: "✏️ Teaching Assistant (TA): CS 331 Data Structures and Algorithms",
            cardSubtitle: "Illinois Institute of Technology, Chicago, IL",
            cardDetailedText: "Taught lessons on essential data structures, basic sorting and searching algorithms, and object-oriented design principles. Guided students, led labs, and offered office hours focused on data abstraction and the practical application of data structures.",

        },
        {
            title: "05/2024 – 08/2024",
            cardTitle: "💻 Full Stack Software Engineer Intern",
            cardSubtitle: "Treevah, Chicago, IL",
            cardDetailedText: "Team lead for the demo which raised over $5000+ from investors such as Microsoft for Startup. I also provided the database and infrastructure design for this tech startup for deployment in Microsoft Azure. I spearheaded the functionality of an online file management system using JavaScript and no-code-based software to build a working prototype.",
            media: {
                type: "IMAGE",
                source: {
                    url: treevahPhoto
                }
            }
        },
        {
            title: "01/2024 – 05/2024",
            cardTitle: "✏️ Teaching Assistant (TA): CS 116 Object-Oriented Programming II",
            cardSubtitle: "Illinois Institute of Technology, Chicago, IL",
            cardDetailedText: "Guided students, led labs, and offered office hours for Object-Oriented Programming II. Material covered were Object-Oriented Programming, algorithms, data structures, recursion, and APIs in Java",

        },
        {
            title: "07/2023 – 08/2023",
            cardTitle: "✏️ Calculus 1 Teaching Assistant",
            cardSubtitle: "Exelon Summer Institute, Chicago, IL",
            cardDetailedText: "I taught and prepared lessons in Calculus 1 during this exclusive bridge program for incoming freshmen. Handled administrative tasks including planning out lessons, organization, and scheduling",

        },
        {
            title: "08/2022 – Current",
            cardTitle: "🎓 Illinois Institute of Technology",
            cardSubtitle: "Bachelor of Science in Computer Science | Expected Graduation 05/2026",
            cardDetailedText:`Activities: Pi Kappa Phi, SHPE, Exelon Summer Institute, Cru, and ACM
                Relevant Classwork: Data Structures and Algorithms | Database Organization | Systems Programming | Data Science | Linear Algebra | Probability and Statistics | Object-Oriented Programming I, II | Discrete Structures | Graph Theory | Calculus 1, 2, and 3`.split('\n').map((line, index) => <p key={index}>{line}</p>),
            media: {
                type: "IMAGE",
                source: {
                    url: iitSkyline
                }
            }
        },           
        {
            title: "08/2018 – 05/2022",
            cardTitle: "🎓 Glenbrook South High School",
            cardSubtitle: "High School Diploma",
            cardDetailedText:`Activities: Baseball, Table Tenis and Engineering Club`,
        }           
    ];

    return (
        <div className="experience-container">
            <h1>Experience</h1>
            <div className="timeline-container">
                <Chrono
                    items={items}
                    mode="VERTICAL_ALTERNATING"
                    theme={{
                        primary: "var(--navy-blue)",
                        secondary: "var(--primary-red)",
                        cardBgColor: "var(--off-white)",
                        titleColor: "var(--navy-blue)",
                        cardTitleColor: "var(--navy-blue)",
                        cardSubtitleColor: "var(--navy-blue)",
                        cardDetailsColor: "var(--charcoal)",
                    }}
                    fontSizes={{
                        title: "1rem",
                        cardTitle: ".9rem",
                        cardSubtitle: ".8rem",
                    }}    
                    cardWidth={400} // Increased from 400
                    cardHeight={80} // Reduced from 100
                    mediaHeight={100} // Add this to control image height
                    contentDetailsHeight={80} // sets the height of the detailed text to 80px
                    scrollable={{ scrollbar: true }}
                    disableInteraction={true}
                    enableOutline={true}
                    flipLayout
                    slideShow
                    readMore={true} 
                    slideItemDuration={4500}
                    disableToolbar={true}
                    showAllCardsHorizontal={false}
                    timelinePointShape="square"
                    disableTimelinePoint={true}
                    timelinePointDimension={60}
                    mediaSettings={{
                        align: "center", // Image alignment: center, left, right
                        fit: "contain" // Image fit: cover, contain, fill, none, scale-down
                    }}
                >


                    <div className="chrono-icons">
                        <img src={BlackRockLogo} alt="BlackRock Logo" />
                        <img src={iitLogoCoc} alt="IIT Logo" />
                        <img src={treevahLogo} alt="Treevah Logo" />
                        <img src={iitLogoCoc} alt="IIT Logo" />
                        <img src={exelonLogo} alt="Exelon Logo" />
                        <img src={iitLogo} alt="IIT Logo" />
                        <img src={gbsLogo} alt="GBS Logo" />
                    </div>

                </Chrono>
            </div>
        </div>
    );
}