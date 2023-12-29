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
    const [activeSection, setActiveSection] = useState('');
    const [language, setLanguage] = useState('no');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];
            let currentSection = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Adjust the condition to determine the active section
                    if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
                        currentSection = section;
                        break;
                    }
                }
            }

            if (currentSection !== activeSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'no' : 'en');
    };

    const onLearnMoreClick = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
