import React from 'react';
import './Skills.css';

const SkillsEn = () => {
    const skillSet = [
        { skill: 'Back-end Development', level: 85 },
        { skill: 'Front-end Development', level: 65 },
        { skill: 'Data Modeling and Databases', level: 80 },
        { skill: 'Algorithms and Data Structures', level: 75 },
        { skill: 'Operating Systems', level: 80 },
        { skill: 'Networking and Data Communication', level: 60 },
        { skill: 'Mathematic and Statistics', level: 80 },
        { skill: 'Latex and Report Writing', level: 90 }
    ];

    return (
        <div className="skills-container">
            <h2 className="skills-title">Skills</h2>
            <p className="skills-intro">
                Through my studies and practical experiences, I've developed a range of skills important for software
                development. This section shows my confidence in key areas like back-end and front-end development, data
                modeling, algorithms, and more. The progress bars below reflect my level of expertise in each area,
                highlighting my preparedness for both academic and professional challenges in the tech industry.
            </p>
            <div className="skills-grid">
                {skillSet.map((item, index) => (
                    <div className="skill-item" key={index}>
                        <strong>
                            <div className="skill-label">{item.skill}</div>
                        </strong>
                        <div className="skill-percentage">{item.level}%</div>
                        <div className="skill-progress-bar">
                        <div className="skill-progress" style={{width: `${item.level}%`}}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsEn;
