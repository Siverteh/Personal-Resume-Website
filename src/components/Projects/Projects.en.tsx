import React, { useState } from 'react';
import './Projects.css';
import ModalEn from './Modal.en'; // Import the ModalEn component
import HALP from '../../assets/images/HALP_resize.jpg';
import HALPV2 from '../../assets/images/HALPV2_resize.jpg';
import car_dealership from '../../assets/images/car_dealership_resize.jpg';
import personal_resume_website from '../../assets/images/personal_resume_website_resize.jpg';
import monkey_sort_defense from '../../assets/images/monkey_sort_defense_resize.jpg';
import microcontroller_alarm_clock from '../../assets/images/microcontroller_alarm_clock_resize.jpg';
import uia_message_board from '../../assets/images/uia_message_board_resize.jpg';
import sign_language_detector from '../../assets/images/sign_language_detector_resize.jpg';
import operating_system from '../../assets/images/operating_system_resize.jpg';
import AlarmClockGif from '../../assets/gifs/alarm_clock_demo.gif';
import Halpgif from '../../assets/gifs/halp demo.gif';
import HALPpdf from '../../assets/pdfs/Ikt201g22h_prosjektRapport .pdf';
import HALPV2gif from '../../assets/gifs/HALPV2 demo.gif';
import HalpV2pdf from '../../assets/pdfs/report.pdf';
import CarDearlershipgif from '../../assets/gifs/car dealership demo.gif';
import MessageBoardpdf from '../../assets/pdfs/Assignment_3__User_Authentication.pdf';
import Tolkernpdf from '../../assets/pdfs/Project_report___Tolkern.pdf';
import OperatingSystempdf from '../../assets/pdfs/Operating_systems_report.pdf';

// Define a type for the project card properties
type ProjectCardProps = {
    title: string;
    imageUrl: string;
    onClick: () => void;
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
// ProjectData type definition (can be in a types.ts file or at the top of your component file)
export interface ProjectData {
    id: string;
    title: string;
    imageUrl: string;
    gifUrl?: string; // URL for the project's GIF
    description?: string;
    reportUrl?: string; // URL to download the project report
    repoUrl?: string;
}

const ProjectsEn: React.FC = () => {

    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    // Example project data array
    const projects: ProjectData[] = [
        // Add your projects here
        {
            id: 'project1',
            title: 'HALP Web Edition',
            imageUrl: HALP,
            gifUrl: Halpgif,
            description: "The HALP project developed a web application to streamline and organize lab assistance requests. It aimed to replace inefficient spreadsheet-based systems with a more structured and feature-rich program. The application provided a clear overview for student assistants to manage tasks efficiently. Key features included the integration with Time-Edit for lab schedules, a ticket system for assistance requests, priority queuing, and user accounts with history tracking. Though primarily designed for educational institutions, it also catered to individual students, offering both logged-in and anonymous usage. The project emphasized user-friendliness, organization, and efficiency.",
            reportUrl: HALPpdf,
            repoUrl: "https://github.com/Siverteh/HALP-Help-Assistent-Lab-Program-Web-Edition"
        },

        {
            id: 'project2',
            title: 'HALPV2 Mobile Edition',
            imageUrl: HALPV2,
            gifUrl: HALPV2gif,
            description: "The HALPV2 project aimed to create a mobile-friendly, easy-to-use application to assist students, teaching assistants, and teachers during lab hours at university. Building on the web application developed in the previous semester, HALPV2 focused on modernizing the old Excel sheet-based system, offering a more updated experience. Integrated with Timeedit, it fetches the schedule for relevant classes and supports features like lab queue management and student assistance requests. Developed using React Native and leveraging the same backend as the previous project, HALPV2 emphasized usability and effective lab hour management. Though not fully complete, core functionalities were prioritized, with potential for future enhancements.\n",
            reportUrl: HalpV2pdf,
            repoUrl: "https://github.com/Siverteh/HALPV2-Help-Assistent-Lab-Program-Mobile-Edition"
        },

        {
            id: 'project3',
            title: 'Car Dealership GUI app',
            imageUrl: car_dealership,
            gifUrl: CarDearlershipgif,
            description: "The Car Dealership GUI Application, crafted in C++ with a Qt framework, features a well-structured database for managing cars and customers, complemented by UML documentation. It boasts a sophisticated GUI, enabling easy addition, editing, and removal of cars and customers. The application also facilitates car-customer assignments with intuitive selection mechanisms, and includes targeted search functionalities for cars and customers within the assignment module, ensuring a streamlined user experience for effective dealership management.\n",
            repoUrl: "https://github.com/Siverteh/Car-dealership-database-program"
        },

        {
            id: 'project4',
            title: 'Personal Resume Website',
            imageUrl: personal_resume_website,
            description: "This personal resume website, developed using React and TypeScript, showcases a modern, interactive platform to display professional credentials and portfolio pieces. Leveraging the robust capabilities of React coupled with the strong typing provided by TypeScript, the website offers a seamless and responsive user experience. It's designed to highlight skills, work history, and projects through a clean, intuitive interface, ensuring that visitors can easily navigate and engage with the content. The site effectively blends aesthetic appeal with functional design to create a professional online presence.",
            repoUrl: "https://github.com/Siverteh/Personal-Resume-Website"
        },

        {
            id: 'project5',
            title: 'Monkey Sort Defense Game',
            imageUrl: monkey_sort_defense,
            repoUrl: "https://github.com/Siverteh/Monkey-sort-defense"
        },

        {
            id: 'project6',
            title: 'Microcontroller Alarm Clock',
            imageUrl: microcontroller_alarm_clock,
            gifUrl: AlarmClockGif,
            description: "The Microcontroller Alarm Clock, engineered primarily using C in Mbed Studio, epitomizes a blend of traditional timekeeping and modern functionality. Starting from the Unix epoch time at initialization, it features a customizable alarm with snooze capabilities, enabled or disabled easily across its user-friendly interface. Besides its core alarm function, the device stands out with its ability to display room temperature and humidity, offer a weather forecast specifically for Grimstad, and scroll the top three news feeds, updating every 30 minutes. Additionally, it sets its Real-Time Clock (RTC) using Unix time, accounting for time zones and daylight savings, ensuring accuracy in its time display. This multifunctional alarm clock, with its diverse features, serves not just as a timekeeping tool but as a comprehensive information hub, suitable for both home and office environments.",
            repoUrl: "https://github.com/Siverteh/Microcontroller-project"
        },

        {
            id: 'project7',
            title: 'UiA Message Board',
            imageUrl: uia_message_board,
            description: "The University of Agder Message Board, a dynamic web platform, was meticulously developed using the Flask framework. Tailored for the academic community, this site serves as a centralized hub for communication, where students and faculty can post, share, and discuss a wide range of topics. The website's design focuses on ease of use and efficient interaction, fostering a vibrant online community. Its streamlined interface and robust backend ensure a seamless and secure user experience, enhancing campus connectivity and engagement.",
            reportUrl: MessageBoardpdf,
            repoUrl: "https://github.com/Siverteh/UiA-message-board"
        },

        {
            id: 'project8',
            title: 'Norwegian Sign Language Detector',
            imageUrl: sign_language_detector,
            description: "The Norwegian Sign Language Detector project, named \"Tolkern,\" aimed to create a real-time sign language to text translation software. Focusing on the static one-handed alphabet, it utilized a pre-trained model enhanced through transferred learning to interpret sign language accurately. The project's innovation lies in its application of machine learning and cameras to facilitate communication for deaf and mute individuals, addressing the gap in Norwegian-based sign language translators. By converting sign language into text, the software aims to ease communication barriers, especially in educational and professional settings. The project was a significant step towards inclusive technology, though future work involves expanding to dynamic signs and complete word translation for more comprehensive communication.",
            reportUrl: Tolkernpdf,
            repoUrl: "https://github.com/Siverteh/Tolkern"
        },

        {
            id: 'project9',
            title: 'Operating System Made From Scratch',
            imageUrl: operating_system,
            description: "The Operating System project, undertaken in the course IKT218 - Advanced Operating Systems, was a comprehensive exercise in designing and programming an operating system from scratch. It aimed to deepen the understanding of operating system functionalities, starting with a minimalistic implementation and gradually expanding its capabilities. The project encompassed various assignments, each building upon the previous, focusing on key concepts like booting, Global Descriptor Table, interrupts, memory management, and more. Challenges faced during the development process and design decisions were highlighted, offering insights into the intricacies of operating system design and implementation.",
            reportUrl: OperatingSystempdf,
            repoUrl: "https://github.com/Siverteh/ikt218-osdev"
        },
    ];

    const handleCardClick = (projectId: string) => {
        const project = projects.find(p => p.id === projectId);
        setSelectedProject(project || null);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
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
            {selectedProject && (
                <ModalEn project={selectedProject} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default ProjectsEn;
