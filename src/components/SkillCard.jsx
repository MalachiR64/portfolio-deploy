import React from 'react';
import './SkillCard.css';

export default function SkillCard({ skills, variant = 'with-icon' }) {
    return (
        <div className="skill-container">
            <div className="skill-list">
                {skills.map(skill => (
                    <div key={skill.name} className={`skill-card ${variant}`}>
                        {skill.icon && <img src={skill.icon} alt={skill.name} className="skill-icon" />}
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}