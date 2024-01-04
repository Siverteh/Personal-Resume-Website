import React from 'react';
import './Home.css';

//Home component for the landing page of the website
const HomeEn: React.FC<{ onLearnMoreClick: () => void }> = ({ onLearnMoreClick }) => {
    return (
        <div className="home-container">
            <div className="intro-wrapper">
                <h1>Hi, I'm Sivert Husebø</h1>
                <p>Welcome to my personal portfolio. I'm a passionate Computer Engineering Student / Developer with a focus on building scalable and efficient solutions. Take a look around to see my work, skills, and projects.</p>
                <button onClick={onLearnMoreClick} className="cta-button">Learn More About Me</button>
            </div>
        </div>
    );
};

export default HomeEn;
