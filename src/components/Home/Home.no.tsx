import React from 'react';
import './Home.css';

//Home component for the landing page of the website
const HomeNo: React.FC<{ onLearnMoreClick: () => void }> = ({ onLearnMoreClick }) => {
    return (
        <div className="home-container">
            <div className="intro-wrapper">
                <h1>Hei, jeg er Sivert Husebø</h1>
                <p>Velkommen til min personlige portefølje. Jeg er en lidenskapelig Dataingeniør Student / Utvikler med fokus på å bygge skalerbare og effektive løsninger. Ta en titt rundt for å se mitt arbeid, ferdigheter og prosjekter.</p>
                <button onClick={onLearnMoreClick} className="cta-button">Lær Mer Om Meg</button>
            </div>
        </div>
    );
};

export default HomeNo;
