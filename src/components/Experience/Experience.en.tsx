import React from 'react';
import './Experience.css';

//Component to render the experience section of the website.
const ExperienceEn = () => {
    return (
        <div className="experience-section">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-circle"></div>
                        <h3>Summer Intern</h3>
                        <div className="timeline-year">06/2024 - 08/2024</div>
                        <div className="timeline-company">NorKart AS, Kristiansand, Norway</div>
                        <ul className="timeline-description">
                            <li>Developed Beam, a Python package for chunking methods, PDF-to-text conversion, and embedding models for information retrieval.</li>
                            <li>Implemented an evaluation module for chunking methods and embedding models, supporting NDCG, MAP, F1, and accuracy metrics.</li>
                            <li>Researched and developed a semantic chunking method, reducing token usage by 70% in Retrieval-Augmented Generation (RAG) architectures, while maintaining performance.</li>
                            <li>Implemented a RAG architecture for plan determinations using BEAM via Microsoft Azure.</li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-circle"></div>
                        <h3>Student Assistant</h3>
                        <div className="timeline-year">01/2024 - Current</div>
                        <div className="timeline-company">University of Agder</div>
                        <ul className="timeline-description">
                            <li>Assisted students during lab hours and helped them understand the course material.</li>
                            <li>Provided guidance and support for students on academic-related questions and
                                assignments.
                            </li>
                            <li>Evaluated submissions and provided feedback to enhance students' learning.</li>
                            <li>Collaborated with faculty to improve teaching methods and course content.</li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-circle"></div>
                        <h3>Security Guard</h3>
                        <div className="timeline-year">08/2021 - 08/2023</div>
                        <div className="timeline-company">Personal Service and Security (PSS)</div>
                        <ul className="timeline-description">
                            <li>Conducted regular security rounds and monitored premises to ensure safety and prevent
                                unauthorized access.
                            </li>
                            <li>Managed access control and identified visitors to maintain security protocols at entry
                                points.
                            </li>
                            <li>Contributed to the development and implementation of enhanced security measures and
                                procedures.
                            </li>
                            <li>Maintained detailed records and reported security incidents and observations to
                                superiors.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-circle"></div>
                        <h3>Private</h3>
                        <div className="timeline-year">08/2020 - 08/2021</div>
                        <div className="timeline-company">Norwegian Armed Forces, Setermoen leir</div>
                        <ul className="timeline-description">
                            <li>Completed basic military training, including physical fitness, weapon handling, and
                                tactical training.
                            </li>
                            <li>Actively participated in field exercises and maneuvers, developing teamwork and
                                leadership skills under pressure.
                            </li>
                            <li>Performed regular maintenance of military equipment and vehicles to ensure operational
                                readiness.
                            </li>
                            <li>Participated in courses and training in first aid, survival techniques, and crisis
                                management.
                            </li>
                            <li>Effectively collaborated with the unit to execute missions and participate in organized
                                drills and exercises.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    );
};

export default ExperienceEn;
