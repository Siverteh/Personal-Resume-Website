import React from 'react';
import './Skills.css';

const SkillsNo = () => {
    const skillSet = [
        { skill: 'Back-end Utvikling', level: 85 },
        { skill: 'Front-end Utvikling', level: 65 },
        { skill: 'Data Modellering og Databaser', level: 80 },
        { skill: 'Algoritmer og Datastrukturer', level: 75 },
        { skill: 'Operativsystemer', level: 80 },
        { skill: 'Nettverk og Datakommunikasjon', level: 60 },
        { skill: 'Matematikk og Statistikk', level: 80 },
        { skill: 'LaTeX og Rapportskriving', level: 90 }
    ];

    return (
        <div className="skills-container">
            <h2 className="skills-title">Ferdigheter</h2>
            <p className="skills-intro">
                Gjennom mine studier og praktiske erfaringer har jeg utviklet en rekke ferdigheter som er viktige for programvareutvikling. Denne delen viser min kompetanse i nøkkelområder som back-end og front-end utvikling, datamodellering, algoritmer og mer. Fremdriftslinjene nedenfor reflekterer mitt nivå av ekspertise i hvert område, og fremhever min beredskap for både akademiske og profesjonelle utfordringer i teknologiindustrien.
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

export default SkillsNo;
