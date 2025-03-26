// Projects.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Project.css';
import p33Logo from '../assets/p33-logo.png';
import compilerImage from '../assets/compiler-image.png';
import pipelineImage from '../assets/blobstorage.png';
import tinderCloneImage from '../assets/TinderCloneDesign.png';
import websiteBlocker from '../assets/website-blocker.jpg';
import jnIcon from '../assets/Jupyter_logo.svg.png';
export default function Projects() {
    const [expandedCards, setExpandedCards] = useState(new Set());
    const [expandedTitles, setExpandedTitles] = useState(new Set());

    const toggleDescription = (id) => {
        setExpandedCards((prevExpanded) => {
            const newExpanded = new Set([...prevExpanded]);
            if (newExpanded.has(id)) {
                newExpanded.delete(id);
            } else {
                newExpanded.add(id);
            }
            return newExpanded;
        });
    };

    const toggleTitle = (id) => {
        setExpandedTitles((prevExpanded) => {
            const newExpanded = new Set([...prevExpanded]);
            if (newExpanded.has(id)) {
                newExpanded.delete(id);
            } else {
                newExpanded.add(id);
            }
            return newExpanded;
        });
    };
    
    // GitHub SVG logo as inline component for consistent styling
    const GitHubIcon = () => (
        <svg 
            className="btn-icon" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
    );

    const projects = [
        {
            id: 1,
            title: "ETL Data Pipeline for Stock Market",
            image: pipelineImage,
            description: "Used Python, Airflow, and Azure to Develop an Extract, Transform, Load (ETL) pipeline to collect, process, and analyze stock market data, focusing on S&P 500 companies. The system retrieves financial data, processes it into a normalized structured format, and stores it in Azure Blob Storage and an SQL database for real-time updates and analysis by using JSON and CSV files. Used airflow to periodically update the prices and market cap of the stocks.",
            github: "https://github.com/MalachiR64/StockPriceDataPipeline",
            
        },
        {
            id: 2,
            title: "Tinder Clone",
            image: tinderCloneImage,
            description: "Developed a full-stack Tinder clone web app for a Database Organization class project using React, FastAPI, and MySQL. Configured a FastAPI backend with Pydantic SQL models for efficient database interactions and to connect to a React frontend through REST APIs. Helped design an interactive UI and implemented functionality and web-based cookies.",
            github: "https://github.com/MalachiR64/TinderAppClone",
        },
        {
            id: 3,
            title: "Intel Project-Data Analysis for Sustainability",
            image: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/137285970",
            description: "Developed SQL queries to analyze energy generation, demand, and renewable energy trends to help Intel's Sustainability Team select a data center location. Created Tableau visualizations showcasing net energy production, renewable energy by region, and energy source trends, providing key insights for sustainable decision-making."
  
        },
        {
            id: 4,
            title: "Website Blocker Python Script",
            image: websiteBlocker,
            description: "Used Python to block websites by modifying the system's host file redirecting the website to the local loopback address. This script enables users to control the duration of a website being blocked, offering temporary and permanent blocking.",
            github: "https://github.com/MalachiR64/Python-scripts-and-automations/tree/main/WebsiteBlocker",
        },
        {
            id: 5,
            title: "OCaml Compiler",
            image: compilerImage,
            description: "A simple compiler for an ML-like functional language, implemented in OCaml. This project includes a lexer, parser, type checker, and interpreter, demonstrating key compiler construction techniques.",
            github: "https://github.com/MalachiR64/OCaml-Compiler",
        },
        {
            id: 6,
            title: "Death penalty and murder rates",
            description: "Utilized data science libraries (Pandas, NumPy, and Matplotlib). Analyzed and visualized murder rates and death penalty data Applied random sampling and null hypothesis for meaningful insights.",
            image: jnIcon,
            github: "https://github.com/MalachiR64/Data-Science-151-Project-/blob/main/project_1sthalf.ipynb"
        },
        {
            id: 7,
            title: "Budgeting App: M1 Finance P33 Chicago ",
            image: p33Logo,
            description: "Collaborated with professionals from M1 Finance on designing, developing, and implementing a budgeting application using Figma and React."

        }
    ];

    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        {project.image ? (
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} />
                            </div>
                        ) : (
                            <div className="project-image-placeholder"></div>
                        )}
                        <div className="project-content">
                            <div className="title-container">
                                <h2 className={`project-title ${expandedTitles.has(project.id) ? 'expanded' : ''}`}>
                                    {project.title}
                                </h2>
                                <span 
                                    className="see-more"
                                    onClick={() => toggleTitle(project.id)}
                                >
                                    {expandedTitles.has(project.id) ? 'See Less' : 'See More'}
                                </span>
                            </div>
                            <div className="description-container">
                                <p className={`project-description ${expandedCards.has(project.id) ? 'expanded' : ''}`}>
                                    {project.description}
                                </p>
                                <span 
                                    className="see-more"
                                    onClick={() => toggleDescription(project.id)}
                                >
                                    {expandedCards.has(project.id) ? 'See Less' : 'See More'}
                                </span>
                            </div>
                            {/* Always render the buttons container, even if empty */}
                            <div className="project-buttons">
                                {project.github ? (
                                    <a 
                                        href={project.github} 
                                        className="project-btn github-btn" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <GitHubIcon />
                                        GitHub
                                    </a>
                                ) : <div className="empty-btn-space"></div>}
                                
                                {project.details ? (
                                    <Link 
                                        to={project.details} 
                                        className="project-btn details-btn"
                                    >
                                        Learn More
                                    </Link>
                                ) : <div className="empty-btn-space"></div>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a 
                href="https://github.com/MalachiR64?tab=repositories" 
                className="see-all-projects"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GitHubIcon />
                See All My Projects
            </a>
        </div>
    );
}