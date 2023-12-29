import React from 'react';
import './Home.css';

const HomeEn: React.FC = () => {
    return (
        <div className="home-container">
            <div className="intro-wrapper">
                <h1>Hi, I'm Sivert Husebø</h1>
                <p>Welcome to my personal portfolio. I'm a passionate Software Developer with a focus on building scalable and efficient solutions. Take a look around to see my work, skills, and projects.</p>
                <a href="#about" className="cta-button">Learn More About Me</a>
                {/* Alternatively, you can use the link to your LinkedIn profile */}
                {/* <a href="https://www.linkedin.com/in/yourprofile" className="cta-button"><FaLinkedin /> Connect on LinkedIn</a> */}
            </div>
        </div>
    );
};

export default HomeEn;
