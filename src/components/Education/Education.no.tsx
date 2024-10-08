import React from 'react';
import './Education.css';

//Component to render the education section of the website.
const EducationNo = () => {
    return (
        <div className="education-section">
            <h2 className="section-title">Utdanning</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-circle"></div>
                        <h3>Master i kunstig intelligens</h3>
                        <div className="timeline-year">08/2024 - 05/2026</div>
                        <div className="timeline-university">Universitetet i Agder, Institutt for teknologi, Grimstad, Norge</div>
                        <p className="timeline-description">Jeg holder på med en mastergrad i kunstig intelligens, med fokus på maskinlæring, design av intelligente systemer og avanserte AI-teknikker.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-circle"></div>
                        <h3>Bachelor i dataingeniør</h3>
                        <div className="timeline-year">08/2021 - 05/2024</div>
                        <div className="timeline-university">Universitetet i Agder, Institutt for teknologi, Grimstad, Norge</div>
                        <p className="timeline-description">
                            Gjennom min bachelorgrad i dataingeniør ved Universitetet i Agder i Grimstad har jeg fokusert på informasjons- og kommunikasjonsteknologi (IKT), som dekker et bredt spekter av emner fra programvareutvikling og cybersikkerhet til datamodellering og nettverkssikkerhet. Denne allsidige læreplanen, beriket med praktiske prosjekter i samarbeid med industripartnere, forberedte meg på ulike utfordringer innen den digitale teknologisektoren. Ved å spesialisere meg i programvareutvikling i mitt siste år, forbedret jeg mine ferdigheter innen områder som maskinsyn og DevOps, som kulminerte i en omfattende bacheloroppgave som understreket min beredskap for en profesjonell karriere innen IT og digitale systemer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationNo;
