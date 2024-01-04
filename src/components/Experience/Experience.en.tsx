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
                        <div className="timeline-company">NorKart</div>
                        <p className="timeline-description">
                            I will be working as a summer intern at NorKart, engaging in practical projects and gaining hands-on experience in the field.
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-circle"></div>
                        <h3>Security Guard</h3>
                        <div className="timeline-year">08/2021 - 08/2023</div>
                        <div className="timeline-company">Personal Service and Security (PSS)</div>
                        <p className="timeline-description">
                            As a Security Guard at PSS, I was responsible for ensuring the safety and security of premises, managing access control, and responding to emergencies.
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-circle"></div>
                        <h3>Military Service</h3>
                        <div className="timeline-year">08/2020 - 08/2021</div>
                        <div className="timeline-company">Norwegian Armed Forces, Setermoen leir</div>
                        <p className="timeline-description">
                            My military service at Setermoen leir involved rigorous training and skill development in various military disciplines. This experience honed my abilities in teamwork, discipline, and leadership, providing me with a strong foundation for professional challenges.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceEn;
