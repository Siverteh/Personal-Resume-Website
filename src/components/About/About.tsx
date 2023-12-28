import React from 'react';
import './About.css';
import yourPhoto from '../../assets/images/profilepicture.jpg'; // Ensure this is the correct path to your image

const About = () => {
    return (
        <div className="about-section">
            <h2 className="section-title">About Me</h2>
            <p className="above-image-text">
                I am a 23-year-old Computer Science student studying in Grimstad, Norway. My education journey is currently focused on earning a Bachelor's degree in Computer Science, with future plans to specialize in Artificial Intelligence through a Master's program.
            </p>
            <div className="about-main">
                <div className="about-image">
                    <img src={yourPhoto} alt="Profile" className="profile-photo" />
                </div>
                <div className="about-details">
                    <h3>Backend Developer & Aspiring AI Specialist</h3>
                    <p className="details-introduction">
                        I consider myself primarily a backend developer. I enjoy the challenge of creating complex systems and logic that power the applications we use every day. My goal is to develop scalable and efficient software that makes a difference.
                    </p>
                    <div className="details-grid">
                        <p><strong>Age:</strong> 23</p>
                        <p><strong>Study:</strong> Bachelor's in Computer Science</p>
                        <p><strong>Aspiration:</strong> Master's in Artificial Intelligence</p>
                        <p><strong>Expertise:</strong> Backend Development</p>
                        <p><strong>Location:</strong> Grimstad, Norway</p>
                        <p><strong>Skills:</strong> System Architecture, Algorithms</p>
                        <p><strong>Favorite languages:</strong> C++, Python</p>
                        <p><strong>Status:</strong> Going to have an Internship for NorKart</p>
                        <p><strong>Phone:</strong> +4746855244</p>
                        <p><strong>Email:</strong> sivertespelandhusebo@gmail.com</p>
                    </div>
                    <p className="details-conclusion">
                        I am known for my solution-oriented approach to technical challenges and value clear, effective
                        communication. My aim is to work in an environment where trust and responsibility are fundamental,
                        where collaborative decision-making is the norm, and where I can learn from industry leaders to
                        further my understanding of user-system interaction and customer service excellence.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
