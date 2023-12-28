import React from 'react';
import './Navbar.css';
import { FaHome, FaUser, FaWrench, FaBriefcase, FaGraduationCap, FaProjectDiagram, FaEnvelope, FaDownload } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';
import profilePicture from '../../../assets/images/profilepicture.jpg'; // Update the path as necessary

interface NavbarProps {
    activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
    return (
        <div className="navbar">
            <div className="profile-section">
                <img src={profilePicture} alt="Profile" className="profile-pic" />
                <div className="profile-name">Sivert Husebø</div>
            </div>
            <div className="social-icons">
                <a href="https://github.com/siverteh" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/sivert-espeland-huseb%C3%B8-3672a5294/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
                <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a>
                <a href="https://discord.com/users/youruserid" target="_blank" rel="noopener noreferrer"><SiDiscord /></a>
            </div>
            <div className="nav-links">
                <a href="#home" className={activeSection === 'home' ? 'active' : ''}><FaHome /><span>Home</span></a>
                <a href="#about" className={activeSection === 'about' ? 'active' : ''}><FaUser /><span>About</span></a>
                <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}><FaWrench /><span>Skills</span></a>
                <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}><FaBriefcase /><span>Experience</span></a>
                <a href="#education" className={activeSection === 'education' ? 'active' : ''}><FaGraduationCap /><span>Education</span></a>
                <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}><FaProjectDiagram /><span>Projects</span></a>
                <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}><FaEnvelope /><span>Contact</span></a>
            </div>
            <div className="resume-container">
                <a href="path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
                    <FaDownload /><span>Resume</span>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
