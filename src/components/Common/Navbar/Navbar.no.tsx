import React from 'react';
import './Navbar.css';
import { FaHome, FaUser, FaWrench, FaBriefcase, FaGraduationCap, FaProjectDiagram, FaEnvelope, FaDownload, FaStar } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import profilePicture from '../../../assets/images/profilepicture.jpg';
import norwegianFlag from '../../../assets/images/engelsk_flagg.png'; // Path to your English flag icon
import CV from '../../../assets/pdfs/CV.pdf';
import grades from '../../../assets/pdfs/karakterutskrift.pdf'

interface NavbarProps {
    activeSection: string;
    toggleLanguage: () => void;
}

//Component to render the navigation bar for the website.
const NavbarNo: React.FC<NavbarProps> = ({ activeSection, toggleLanguage }) => {

    //Function to have smooth scrolling for the navigation bar.
    const scrollToSection = (sectionId: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault(); // Prevent default anchor link behavior
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    //Function to get the active section of the website.
    const isActive = (section: string) => activeSection === section ? 'active' : '';

    return (
        <div className="navbar">
            <button className="language-toggle" onClick={toggleLanguage}>
                <img src={norwegianFlag} alt="English" />
            </button>
            <div className="profile-section">
                <img src={profilePicture} alt="Profile" className="profile-pic" />
                <div className="profile-name">Sivert Husebø</div>
            </div>
            <div className="social-icons">
                <a href="https://github.com/siverteh" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/sivert-espeland-huseb%C3%B8-3672a5294/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
                <a href="https://www.facebook.com/profile.php?id=100000290574761" target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a>
            </div>
            <div className="nav-links">
                <a href="#home" className={isActive('home')} onClick={(e) => scrollToSection('home', e)}><FaHome/><span>Hjem</span></a>
                <a href="#about" className={isActive('about')} onClick={(e) => scrollToSection('about', e)}><FaUser/><span>Om meg</span></a>
                <a href="#skills" className={isActive('skills')} onClick={(e) => scrollToSection('skills', e)}><FaWrench/><span>Ferdigheter</span></a>
                <a href="#experience" className={isActive('experience')} onClick={(e) => scrollToSection('experience', e)}><FaBriefcase/><span>Erfaring</span></a>
                <a href="#education" className={isActive('education')} onClick={(e) => scrollToSection('education', e)}><FaGraduationCap/><span>Utdanning</span></a>
                <a href="#projects" className={isActive('projects')} onClick={(e) => scrollToSection('projects', e)}><FaProjectDiagram/><span>Prosjekter</span></a>
                <a href="#contact" className={isActive('contact')} onClick={(e) => scrollToSection('contact', e)}><FaEnvelope/><span>Kontakt</span></a>
            </div>
            <div className="resume-container">
                <a href={grades} target="_blank" rel="noopener noreferrer" className="resume-button"
                   style={{marginBottom: '10px'}}>
                    <FaStar/><span>Karakterutskrift</span>
                </a>
                <a href={CV} target="_blank" rel="noopener noreferrer" className="resume-button">
                    <FaDownload/><span>CV</span>
                </a>
            </div>
        </div>
    );
};

export default NavbarNo;
