import SkillCard from '../components/SkillCard.jsx';
import '../styles/Skill.css';
import tableauIcon from '../assets/tableau-icon.svg';
import githubIcon from '../assets/github-icon.svg';
import bachIcon from '../assets/BashLogo.svg.png';
import kafkaIcon from '../assets/kafaka-logo.png';
import SnowflakeIcon from '../assets/snowflake.svg';
import jnIcon from '../assets/Jupyter_logo.svg.png';


//icon search https://github.com/devicons/devicon/tree/v2.16.0/icons
const languages = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
    { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "OCaml", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-original.svg" },
    { name: "Bash", icon: bachIcon }
];

const frameworks_libraries = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Streamlit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-plain.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-plain.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Scikit-Learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-plain.svg" },
    { name: "SQLalchemy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }

];

const tools_technologies = [
    { name: "Git", icon: "https://cdn-icons-png.flaticon.com/512/4494/4494748.png" },
    { name: "GitHub", icon: githubIcon },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Snowflake", icon: SnowflakeIcon },
    { name: "Airflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kafka", icon: kafkaIcon },
    { name: "Linux", icon: "https://cdn-icons-png.flaticon.com/512/6124/6124995.png" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Tableau", icon: tableauIcon },
    { name: "Jupyter", icon: jnIcon },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }

];

const technical_expertise = [
    { name: "Data Structures and Algorithms" },
    { name: "ETL & Data Pipelines" },
    { name: "Operating Systems" },
    { name: "Cloud Architecture" },
    { name: "Database Design & Management" },
    { name: "Machine Learning" },
    { name: "Probability & Statistics" },
    { name: "Data Mining & Analysis" },
    { name: "Linear Algebra" },
    { name: "Networking" },
    { name: "Data Visualization" },
    { name: "API Development & Integration" }
];

const certifications = [
    {
        name: "Illinois Institute of Technology - Coding for Data Track",
        image: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/143037922",
        link: "https://www.credential.net/13664769-dee2-4f00-9a40-228f682d431e#acc.F20vXTQt"
    },
    {
        name: "Python Specialist",
        image: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/142539204",
        link: "https://www.credential.net/fc0c2775-80ef-4f26-aed5-498a90d2626e#acc.cR0DtKw4"
    },
    {
        name: "SQL Specialist",
        image: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/136952754",
        link: "https://www.credential.net/26363f2e-d37e-4d47-a171-485cdafb117f#acc.NkAz86uH"
    },
    {
        name: "Intercultural Skills",
        image: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/142923356",
        link: "https://www.credential.net/22c04344-e604-4548-9702-f99ec6df3a3f#acc.DSE4lIYv"
    }
    


];

export default function Skill() {
    return (
        <div className="skills-page">
            <h1>Skills</h1>
            <div className="skills-content">
                <div className="skills-section">
                    <h2>Programming Languages</h2>
                    <SkillCard skills={languages} />
                </div>

                <div className="skills-section">
                    <h2>Frameworks & Libraries</h2>
                    <SkillCard skills={frameworks_libraries} />
                </div>

                <div className="skills-section">
                    <h2>Tools & Technologies</h2>
                    <SkillCard skills={tools_technologies} />
                </div>

                <div className="skills-section">
                    <h2>Technical Expertise</h2>
                    <SkillCard skills={technical_expertise} variant="text-only" />
                </div>

                <div className="skills-section">
                    <h2>Certifications</h2>
                    <div className="certifications-grid">
                        {certifications.map((cert, index) => (
                            <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="certification-card">
                                <img src={cert.image} alt={cert.name} />
                                <p>{cert.name}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
