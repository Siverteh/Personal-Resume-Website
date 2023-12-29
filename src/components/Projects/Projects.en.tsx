import React from 'react';
import './Projects.css';
import HALP from '../../assets/images/HALP_resize.jpg';
import HALPV2 from '../../assets/images/HALPV2_resize.jpg';
import car_dealership from '../../assets/images/car_dealership_resize.jpg';
import personal_resume_website from '../../assets/images/personal_resume_website_resize.jpg';
import monkey_sort_defense from '../../assets/images/monkey_sort_defense_resize.jpg';
import microcontroller_alarm_clock from '../../assets/images/microcontroller_alarm_clock_resize.jpg'
import uia_message_board from '../../assets/images/uia_message_board_resize.jpg';
import sign_language_detector from '../../assets/images/sign_language_detector_resize.jpg';
import operating_system from '../../assets/images/operating_system_resize.jpg';

// Define a type for the project card properties
type ProjectCardProps = {
    title: string;
    imageUrl: string;
    onClick: () => void; // Assuming no arguments to be passed to onClick handler
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, onClick }) => (
    <div className="project-card" onClick={onClick}>
        <img src={imageUrl} alt={title} />
        <div className="project-info">
            <h3>{title}</h3>
        </div>
    </div>
);

// Define a type for individual project data
type ProjectData = {
    id: string;
    title: string;
    imageUrl: string;
};

const ProjectsEn: React.FC = () => {
    // Example project data array
    const projects: ProjectData[] = [
        // Add your projects here
        { id: 'project1', title: 'HALP Web Edition', imageUrl: HALP },
        { id: 'project2', title: 'HALPV2 Mobile Edition', imageUrl: HALPV2 },
        { id: 'project3', title: 'Car Dealership GUI app', imageUrl: car_dealership },
        { id: 'project4', title: 'Personal Resume Website', imageUrl: personal_resume_website },
        { id: 'project5', title: 'Monkey Sort Defense', imageUrl: monkey_sort_defense },
        { id: 'project6', title: 'Microcontroller Alarm Clock', imageUrl: microcontroller_alarm_clock },
        { id: 'project7', title: 'UiA Message Board', imageUrl: uia_message_board },
        { id: 'project8', title: 'Norwegian Sign Language Detector', imageUrl: sign_language_detector },
        { id: 'project9', title: 'Operating System Made From Scratch', imageUrl: operating_system },
    ];

    const handleCardClick = (projectId: string) => {
        // Handle the click event, potentially navigating to a detailed view
        console.log(`Project with ID ${projectId} was clicked`);
    };

    return (
        <div className="projects-section">
            <h2 className="section-title">Projects</h2>
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

export default ProjectsEn;
