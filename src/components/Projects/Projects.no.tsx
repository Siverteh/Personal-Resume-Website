import React from 'react';
import './Projects.css';
import HALP from '../../assets/images/HALP_resize.jpg';
import HALPV2 from '../../assets/images/HALPV2_resize.jpg';
import car_dealership from '../../assets/images/car_dealership_resize.jpg';
import personal_resume_website from '../../assets/images/personal_resume_website_resize.jpg';
import monkey_sort_defense from '../../assets/images/monkey_sort_defense_resize.jpg';
import microcontroller_alarm_clock from '../../assets/images/microcontroller_alarm_clock_resize.jpg';
import uia_message_board from '../../assets/images/uia_message_board_resize.jpg';
import sign_language_detector from '../../assets/images/sign_language_detector_resize.jpg';
import operating_system from '../../assets/images/operating_system_resize.jpg';

// Definer en type for egenskapene til prosjektkort
type ProjectCardProps = {
    title: string;
    imageUrl: string;
    onClick: () => void; // Anta ingen argumenter som skal sendes til onClick-håndtereren
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, onClick }) => (
    <div className="project-card" onClick={onClick}>
        <img src={imageUrl} alt={title} />
        <div className="project-info">
            <h3>{title}</h3>
        </div>
    </div>
);

// Definer en type for individuell prosjektdata
type ProjectData = {
    id: string;
    title: string;
    imageUrl: string;
};

const ProjectsNo: React.FC = () => {
    // Eksempel på prosjektdata-array
    const projects: ProjectData[] = [
        // Legg til dine prosjekter her
        { id: 'project1', title: 'HALP Webutgave', imageUrl: HALP },
        { id: 'project2', title: 'HALPV2 Mobilutgave', imageUrl: HALPV2 },
        { id: 'project3', title: 'Bruktbilforhandlers GUI-app', imageUrl: car_dealership },
        { id: 'project4', title: 'Personlig CV-nettside', imageUrl: personal_resume_website },
        { id: 'project5', title: 'Monkey Sort Defense', imageUrl: monkey_sort_defense },
        { id: 'project6', title: 'Mikrokontroller Vekkeklokke', imageUrl: microcontroller_alarm_clock },
        { id: 'project7', title: 'UiA Meldingstavle', imageUrl: uia_message_board },
        { id: 'project8', title: 'Norsk Tegnspråkdetektor', imageUrl: sign_language_detector },
        { id: 'project9', title: 'Operativsystem Laget fra Bunnen', imageUrl: operating_system },
    ];

    const handleCardClick = (projectId: string) => {
        // Håndter klikkhendelsen, potensielt naviger til en detaljert visning
        console.log(`Prosjekt med ID ${projectId} ble klikket`);
    };

    return (
        <div className="projects-section">
            <h2 className="section-title">Prosjekter</h2>
            <div className="projects-container">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        imageUrl={project.imageUrl}
                        onClick={() => handleCardClick(project.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectsNo;
