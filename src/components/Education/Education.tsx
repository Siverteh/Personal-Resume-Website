import React from 'react';
function Education() {
    return (
        <section className="education-section">
            <h2>My Education Journey</h2>
            <div className="education-timeline">
                <div className="education-item">
                    <div className="education-year">2021 - 2024</div>
                    <div className="education-details">
                        <h3>Bachelor of Science in Computer Engineering</h3>
                        <span>University of Agder</span>
                        <p>Acquiring a solid foundation in computer engineering, focusing on software and hardware integration.</p>
                    </div>
                </div>
                <div className="education-item">
                    <div className="education-year">2024 - 2026</div>
                    <div className="education-details">
                        <h3>Master of Science in Artificial Intelligence</h3>
                        <span>University of Agder</span>
                        <p>Diving deeper into the world of AI, exploring machine learning, neural networks, and advanced AI algorithms.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
