import React from 'react';
import './Education.css';

const EducationNo = () => {
    return (
        <div className="education-section">
            <h2 className="section-title">Utdanning</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-circle"></div>
                        <h3>Planlagt master i kunstig intelligens</h3>
                        <div className="timeline-year">08/2024 - 05/2026</div>
                        <div className="timeline-university">Universitetet i Agder, Institutt for teknologi, Grimstad Norge</div>
                        <p className="timeline-description">Jeg har planer om å spesialisere meg innen AI, med fokus på maskinlæring og design av intelligente systemer.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-circle"></div>
                        <h3>Bachelor i dataingeniør</h3>
                        <div className="timeline-year">08/2021 - 05/2024</div>
                        <div className="timeline-university">Universitetet i Agder, Institutt for teknologi, Grimstad Norge</div>
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
