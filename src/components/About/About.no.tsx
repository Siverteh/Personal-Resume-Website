import React from 'react';
import './About.css';
import yourPhoto from '../../assets/images/profilepicture.jpg'; // Ensure this is the correct path to your image

//About component to render the about me section.
const AboutNo = () => {
    return (
        <div className="about-section">
            <h2 className="section-title">Om Meg</h2>
            <p className="above-image-text">
                Jeg er en 24 år gammel kunstig intelligens student som studerer på Universitetet i Agder i Grimstad, Norge. Min utdanningsreise er for øyeblikket fokusert på å tjene en mastergrad i kunstig intelligens.
            </p>
            <div className="about-main">
                <div className="about-image">
                    <img src={yourPhoto} alt="Profil" className="profile-photo" />
                </div>
                <div className="about-details">
                    <h3>Backend-utvikler og Aspirerende AI-Spesialist</h3>
                    <p className="details-introduction">
                        Jeg anser meg selv primært som en backend-utvikler. Jeg liker utfordringen med å skape komplekse systemer og logikk som driver applikasjonene vi bruker hver dag. Målet mitt er å utvikle skalerbar og effektiv programvare som gjør en forskjell.
                    </p>
                    <div className="details-grid">
                        <p><strong>Alder:</strong> 24</p>
                        <p><strong>Studie:</strong> Master i kunstig intelligens</p>
                        <p><strong>Ambisjon:</strong> Å bidra til utviklingen av innovative løsninger innen kunstig intelligens.</p>
                        <p><strong>Ekspertise:</strong> Backend-utvikling</p>
                        <p><strong>Sted:</strong> Grimstad, Norge</p>
                        <p><strong>Ferdigheter:</strong> Kunstig intelligens, Systemutvikling, Algoritmer</p>
                        <p><strong>Favorittspråk:</strong> Python, C#</p>
                        <p><strong>Status:</strong> Søker etter sommerjobb</p>
                        <p><strong>Telefon:</strong> +47 468 552 44</p>
                        <p><strong>E-post:</strong> sivertespelandhusebo@gmail.com</p>
                    </div>
                    <p className="details-conclusion">
                        Jeg er kjent for min løsningsorienterte tilnærming til tekniske utfordringer og verdsetter klar, effektiv kommunikasjon. Mitt mål er å jobbe i et miljø hvor tillit og ansvar er grunnleggende, hvor samarbeidsbasert beslutningstaking er normen, og hvor jeg kan lære av bransjeledere for å videreutvikle min forståelse av brukersystem-interaksjon og kundeservice av høy kvalitet.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutNo;
