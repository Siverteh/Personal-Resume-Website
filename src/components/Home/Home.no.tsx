import React from 'react';
import './Home.css';

const HomeNo: React.FC = () => {
    return (
        <div className="home-container">
            <div className="intro-wrapper">
                <h1>Hei, jeg er Sivert Husebø</h1>
                <p>Velkommen til min personlige portefølje. Jeg er en lidenskapelig programvareutvikler med fokus på å bygge skalerbare og effektive løsninger. Ta en titt rundt for å se mitt arbeid, ferdigheter og prosjekter.</p>
                <a href="#about" className="cta-button">Lær Mer Om Meg</a>
                {/* Alternativt kan du bruke linken til din LinkedIn-profil */}
                {/* <a href="https://www.linkedin.com/in/dinprofil" className="cta-button"><FaLinkedin /> Koble til på LinkedIn</a> */}
            </div>
        </div>
    );
};

export default HomeNo;
