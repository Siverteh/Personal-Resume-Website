import React, { useState, useEffect } from 'react';
import Navbar from './components/Common/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

const App = () => {
        const [activeSection, setActiveSection] = useState('');

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

            // Update URL without reloading the page
            if (currentSection && window.location.hash !== `#${currentSection}`) {
                window.history.pushState(null, '', `#${currentSection}`);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
            <div className="App">
                    <Navbar activeSection={activeSection} />
                    <section id="home" className="section-home">
                            {/* Home Section Content */}
                    </section>
                    <section id="about" className="section-about">
                            <About />
                    </section>
                    <section id="skills" className="section-skills">
                            <Skills />
                    </section>
                    <section id="experience" className="section-experience">
                            <Experience />
                    </section>
                    <section id="education" className="section-education">
                            <Education />
                    </section>
                    <section id="projects" className="section-projects">
                            <Projects />
                    </section>
                    <section id="contact" className="section-contact">
                            <Contact />
                    </section>
            </div>
        );
}

export default App;
