import React from 'react';
import './Navbar.css';
import { FaHome, FaUser, FaWrench, FaBriefcase, FaGraduationCap, FaProjectDiagram, FaEnvelope, FaDownload } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';
import profilePicture from '../../../assets/images/profilepicture.jpg';
import norwegianFlag from '../../../assets/images/norsk_flagg.png'; // Path to your Norwegian flag icon

interface NavbarProps {
    activeSection: string;
    toggleLanguage: () => void;
}

const NavbarEn: React.FC<NavbarProps> = ({ activeSection, toggleLanguage }) => {

    const scrollToSection = (sectionId: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault(); // Prevent default anchor link behavior
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="navbar">
            <button className="language-toggle" onClick={toggleLanguage}>
                <img src={norwegianFlag} alt="Norwegian" />
            </button>
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
                <a href="#home" onClick={(e) => scrollToSection('home', e)}><FaHome/><span>Home</span></a>
                <a href="#about" onClick={(e) => scrollToSection('about', e)}><FaUser/><span>About</span></a>
                <a href="#skills" onClick={(e) => scrollToSection('skills', e)}><FaWrench/><span>Skills</span></a>
                <a href="#experience"
                   onClick={(e) => scrollToSection('experience', e)}><FaBriefcase/><span>Experience</span></a>
                <a href="#education"
                   onClick={(e) => scrollToSection('education', e)}><FaGraduationCap/><span>Education</span></a>
                <a href="#projects"
                   onClick={(e) => scrollToSection('projects', e)}><FaProjectDiagram/><span>Projects</span></a>
                <a href="#contact" onClick={(e) => scrollToSection('contact', e)}><FaEnvelope/><span>Contact</span></a>
            </div>
            <div className="resume-container">
                <a href="path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
                    <FaDownload/><span>Resume</span>
                </a>
            </div>
        </div>
    );
};

export default NavbarEn;
