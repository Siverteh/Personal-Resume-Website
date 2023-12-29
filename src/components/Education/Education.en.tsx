import React from 'react';
import './Education.css';

const EducationEn = () => {
    return (
        <div className="education-section">
            <h2 className="section-title">Education</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-circle"></div>
                        <h3>Planned Master in Artificial Intelligence</h3>
                        <div className="timeline-year">08/2024 - 05/2026</div>
                        <div className="timeline-university">University of Agder Institute of Technology, Grimstad Norway</div>
                        <p className="timeline-description">Intending to specialize in AI, focusing on machine learning and intelligent system design.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-circle"></div>
                        <h3>Bachelor in Computer Engineering</h3>
                        <div className="timeline-year">08/2021 - 05/2024</div>
                        <div className="timeline-university">University of Agder Institute of Technology, Grimstad Norway</div>
                        <p className="timeline-description">
                            During my Bachelor's degree in Computer Engineering at the University of Agder, Grimstad, I focused on Information and Communication Technology (IKT), encompassing a broad spectrum of subjects from software development and cybersecurity to data modeling and network security. This versatile curriculum, enriched with practical projects in collaboration with industry partners, prepared me for diverse challenges in the digital technology sector. Specializing in software development in my final year, I honed my skills in areas like machine vision and DevOps, culminating in a comprehensive Bachelor's thesis that underscored my readiness for a professional career in IT and digital systems.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationEn;
