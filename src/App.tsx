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

const App = () => {
    const [activeSection, setActiveSection] = useState('');
    const [language, setLanguage] = useState('no'); // 'en' for English, 'no' for Norwegian

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];
            let currentSection = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        currentSection = section;
                        break;
                    }
                }
            }

            setActiveSection(currentSection);

            if (currentSection && window.location.hash !== `#${currentSection}`) {
                window.history.pushState(null, '', `#${currentSection}`);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'no' : 'en');
    };

    return (
        <div className="App">
            {language === 'en' ? (
                <>
                    <NavbarEn activeSection={activeSection} toggleLanguage={toggleLanguage} />
                    <section id="home" className="section-home"><HomeEn /></section>
                    <section id="about" className="section-about"><AboutEn /></section>
                    <section id="skills" className="section-skills"><SkillsEn /></section>
                    <section id="experience" className="section-experience"><ExperienceEn /></section>
                    <section id="education" className="section-education"><EducationEn /></section>
                    <section id="projects" className="section-projects"><ProjectsEn /></section>
                    <section id="contact" className="section-contact"><ContactEn /></section>
                </>
            ) : (
                <>
                    <NavbarNo activeSection={activeSection} toggleLanguage={toggleLanguage} />
                    <section id="home" className="section-home"><HomeNo /></section>
                    <section id="about" className="section-about"><AboutNo /></section>
                    <section id="skills" className="section-skills"><SkillsNo /></section>
                    <section id="experience" className="section-experience"><ExperienceNo /></section>
                    <section id="education" className="section-education"><EducationNo /></section>
                    <section id="projects" className="section-projects"><ProjectsNo /></section>
                    <section id="contact" className="section-contact"><ContactNo /></section>
                </>
            )}
        </div>
    );
}

export default App;
