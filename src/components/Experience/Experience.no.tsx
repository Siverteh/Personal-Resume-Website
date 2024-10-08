import React from 'react';
import './Experience.css';

//Component to render the experience section of the website.
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
                        <div className="timeline-company">NorKart AS, Kristiansand, Norge</div>
                        <ul className="timeline-description">
                            <li>Utviklet Beam, en Python-pakke for chunking-metoder, PDF-til-tekst-konvertering og embedding-modeller for informasjonsinnhenting.</li>
                            <li>Implementerte et evalueringsmodul for chunking-metoder og embedding-modeller, med støtte for NDCG, MAP, F1 og nøyaktighetsmålinger.</li>
                            <li>Forsket på og utviklet en semantisk chunking-metode som reduserte tokenbruk med 70 % i RAG-arkitekturer, samtidig som ytelsen ble opprettholdt.</li>
                            <li>Implementerte en RAG-arkitektur for plandeterminering ved bruk av BEAM via Microsoft Azure.</li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-circle"></div>
                        <h3>Studentassistent</h3>
                        <div className="timeline-year">01/2024 - Nåværende</div>
                        <div className="timeline-company">Universitetet i Agder</div>
                        <ul className="timeline-description">
                            <li>Hjelper studenter under labtimer og sikrer forståelse av fagstoff.</li>
                            <li>Gir veiledning og støtte til studenter på fagrelaterte spørsmål og oppgaver.</li>
                            <li>Retter innleveringer og gir tilbakemeldinger for å forbedre studentenes læring.</li>
                            <li>Samarbeider med faglærere for å forbedre undervisningsmetoder og faginnhold.</li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-circle"></div>
                        <h3>Vekter</h3>
                        <div className="timeline-year">08/2021 - 08/2023</div>
                        <div className="timeline-company">Personal Service og Sikkerhet (PSS)</div>
                        <ul className="timeline-description">
                            <li>Utførte regelmessige sikkerhetsrunder og overvåket eiendom for å sikre trygghet og
                                forebygge uautorisert adgang.
                            </li>
                            <li>Håndterte tilgangskontroll og identifiserte besøkende for å opprettholde
                                sikkerhetsprotokoller ved inngangspunkter.
                            </li>
                            <li>Bidro til utvikling og implementering av forbedrede sikkerhetstiltak og prosedyrer.</li>
                            <li>Opprettholdt detaljerte loggføringer og rapporterte sikkerhetshendelser og observasjoner
                                til overordnede.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-circle"></div>
                        <h3>Menig</h3>
                        <div className="timeline-year">08/2020 - 08/2021</div>
                        <div className="timeline-company">Norske Forsvaret, Setermoen leir</div>
                        <ul className="timeline-description">
                            <li>Gjennomførte grunnleggende militærtrening, inkludert fysisk trening, våpenhåndtering, og
                                taktisk trening.
                            </li>
                            <li>Deltok aktivt i feltøvelser og manøvrer, og utviklet ferdigheter i teamarbeid og ledelse
                                under press.
                            </li>
                            <li>Utførte regelmessig vedlikehold av militært utstyr og kjøretøy for å sikre operativ
                                beredskap.
                            </li>
                            <li>Deltok i kurs og opplæring i førstehjelp, overlevelsesteknikker og krisehåndtering.</li>
                            <li>Samarbeidet effektivt med enheten for å utføre oppdrag og deltakelse i organiserte
                                treninger og øvelser.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceNo;
