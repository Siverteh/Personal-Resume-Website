import React, { useState, useEffect } from 'react';
import NavbarEn from './components/Common/Navbar/Navbar.en';
import NavbarNo from './components/Common/Navbar/Navbar.no';
import HomeEn from './components/Home/Home.en';
import HomeNo from './components/Home/Home.no';
import AboutEn from './components/About/About.en';
import AboutNo from './components/About/About.no';
import SkillsEn from './components/Skills/Skills.en';
import SkillsNo from './components/Skills/Skills.no';
import EducationEn from './components/Education/Education.en';
import EducationNo from './components/Education/Education.no';
import ExperienceEn from './components/Experience/Experience.en';
import ExperienceNo from './components/Experience/Experience.no';
import ProjectsEn from './components/Projects/Projects.en';
import ProjectsNo from './components/Projects/Projects.no';
import ContactEn from './components/Contact/Contact.en';
import ContactNo from './components/Contact/Contact.no';
import './App.css';

const App: React.FC = () => {
    // State for the currently active section
    const [activeSection, setActiveSection] = useState('');
    // State for the current language ('no' for Norwegian by default)
    const [language, setLanguage] = useState('no');

    // useEffect hook for handling scrolling and updating the active section
    useEffect(() => {
        const handleScroll = () => {
            // Defining the sections of the page
            const sections = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];
            let currentSection = '';

            // Iterating over each section to determine which one is currently active
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Checking if the section is in the current viewport
                    if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
                        currentSection = section;
                        break;
                    }
                }
            }

            // Updating the active section state
            if (currentSection !== activeSection) {
                setActiveSection(currentSection);
            }
        };
        // Adding an event listener for scrolling
        window.addEventListener('scroll', handleScroll);
        // Removing the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    // Function to toggle the language between English and Norwegian
    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'no' : 'en');
    };

    // Function for smooth scrolling to the 'about' section
    const onLearnMoreClick = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Rendering the HTML of the application, making sure all the components are on the same page.
    return (
        <div className="App">
            {language === 'en' ? (
                <NavbarEn activeSection={activeSection} toggleLanguage={toggleLanguage} />
            ) : (
                <NavbarNo activeSection={activeSection} toggleLanguage={toggleLanguage} />
            )}
            <section id="home" className="section-home">
                {language === 'en' ? <HomeEn onLearnMoreClick={onLearnMoreClick} /> : <HomeNo onLearnMoreClick={onLearnMoreClick} />}
            </section>
            <section id="about" className="section-about">
                {language === 'en' ? <AboutEn /> : <AboutNo />}
            </section>
            <section id="skills" className="section-skills">
                {language === 'en' ? <SkillsEn /> : <SkillsNo />}
            </section>
            <section id="experience" className="section-experience">
                {language === 'en' ? <ExperienceEn /> : <ExperienceNo />}
            </section>
            <section id="education" className="section-education">
                {language === 'en' ? <EducationEn /> : <EducationNo />}
            </section>
            <section id="projects" className="section-projects">
                {language === 'en' ? <ProjectsEn /> : <ProjectsNo />}
            </section>
            <section id="contact" className="section-contact">
                {language === 'en' ? <ContactEn /> : <ContactNo />}
            </section>
        </div>
    );
};

export default App;
