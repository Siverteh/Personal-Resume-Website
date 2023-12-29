import React from 'react';
import './Experience.css';

const ExperienceNo = () => {
    return (
        <div className="experience-section">
            <h2 className="section-title">Erfaring</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-circle"></div>
                        <h3>Sommerintern</h3>
                        <div className="timeline-year">06/2024 - 08/2024</div>
                        <div className="timeline-company">NorKart</div>
                        <p className="timeline-description">
                            Jeg skal jobbe som sommerintern hos NorKart, hvor jeg vil delta i praktiske prosjekter og få hands-on erfaring i feltet.
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-circle"></div>
                        <h3>Vekter</h3>
                        <div className="timeline-year">08/2021 - 08/2023</div>
                        <div className="timeline-company">Personal Service og Sikkerhet (PSS)</div>
                        <p className="timeline-description">
                            Som vekter hos PSS var jeg ansvarlig for å sikre tryggheten og sikkerheten på ulike steder, håndtere adgangskontroll, og respondere på nødsituasjoner.
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-circle"></div>
                        <h3>Militærtjeneste</h3>
                        <div className="timeline-year">08/2020 - 08/2021</div>
                        <div className="timeline-company">Norske Forsvaret, Setermoen leir</div>
                        <p className="timeline-description">
                            Min militærtjeneste ved Setermoen leir involverte intensiv trening og utvikling av ferdigheter i ulike militære disipliner. Denne erfaringen styrket mine evner innen teamarbeid, disiplin, og lederskap, noe som har gitt meg et solid fundament for profesjonelle utfordringer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceNo;
