import React, { useState } from 'react';
import './Projects.css';
import ModalNo from './Modal.no'; // Import the ModalEn component
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

const ProjectsNo: React.FC = () => {

    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    // Example project data array
    const projects: ProjectData[] = [
        {
            id: 'project1',
            title: 'HALP Webutgave',
            imageUrl: HALP,
            gifUrl: Halpgif,
            description: "HALP-prosjektet utviklet en webapplikasjon for å strømlinjeforme og organisere forespørsler om laboratorieassistanse. Det erstatter ineffektive regnearkbaserte systemer med et mer strukturert og funksjonsrikt program. Applikasjonen tilbyr en klar oversikt for studentassistenter for effektiv oppgavehåndtering. Viktige funksjoner inkluderer integrering med Time-Edit for laboratorieplaner, et billettsystem for assistanseforespørsler, prioritetskø og brukerkontoer med historikksporing. Selv om den primært er designet for utdanningsinstitusjoner, tilbyr den også funksjoner for enkelstudenter, med både innlogget og anonym bruk. Prosjektet vektlegger brukervennlighet, organisering og effektivitet.",
            reportUrl: HALPpdf,
            repoUrl: "https://github.com/Siverteh/HALP-Help-Assistent-Lab-Program-Web-Edition"
        },
        {
            id: 'project2',
            title: 'HALPV2 Mobilutgave',
            imageUrl: HALPV2,
            gifUrl: HALPV2gif,
            description: "HALPV2-prosjektet hadde som mål å skape en mobilvennlig og brukervennlig applikasjon for å bistå studenter, undervisningsassistenter og lærere under laboratorietimer ved universitetet. Basert på webapplikasjonen utviklet i forrige semester, konsentrerte HALPV2 seg om å modernisere det gamle Excel-baserte systemet for en mer oppdatert opplevelse. Integrert med Timeedit, henter den timeplan for relevante klasser og støtter funksjoner som labkøhåndtering og studentassistanseforespørsler. Utviklet med React Native og ved å bruke samme backend som forrige prosjekt, vektla HALPV2 brukervennlighet og effektiv håndtering av labtimer. Selv om den ikke er fullstendig komplett, ble kjernefunksjonaliteter prioritert, med potensial for fremtidige forbedringer.",
            reportUrl: HalpV2pdf,
            repoUrl: "https://github.com/Siverteh/HALPV2-Help-Assistent-Lab-Program-Mobile-Edition"
        },
        {
            id: 'project3',
            title: 'Bilforretning GUI-app',
            imageUrl: car_dealership,
            gifUrl: CarDearlershipgif,
            description: "Bilforretningens GUI-applikasjon, utviklet i C++ med Qt-rammeverket, inneholder en velstrukturert database for håndtering av biler og kunder, supplert med UML-dokumentasjon. Den har en sofistikert GUI som gjør det enkelt å legge til, redigere og fjerne biler og kunder. Applikasjonen legger også til rette for bil-kunde-tildelinger med intuitive valgmuligheter og inkluderer målrettede søkefunksjoner for biler og kunder innen tildelingsmodulen, noe som sikrer en strømlinjeformet brukeropplevelse for effektiv drift av bilforretninger.",
            repoUrl: "https://github.com/Siverteh/Car-dealership-database-program"
        },
        {
            id: 'project4',
            title: 'Personlig CV-nettsted',
            imageUrl: personal_resume_website,
            description: "Dette personlige CV-nettstedet, utviklet med React og TypeScript, viser en moderne og interaktiv plattform for å vise profesjonelle meritter og portefølje. Ved å utnytte Reacts robuste muligheter sammen med TypeScript sin sterke typisering, tilbyr nettstedet en sømløs og responsiv brukeropplevelse. Det er designet for å fremheve ferdigheter, arbeidshistorikk og prosjekter gjennom et rent, intuitivt grensesnitt, og sikrer at besøkende enkelt kan navigere og engasjere seg med innholdet. Nettstedet kombinerer estetisk tiltrekningskraft med funksjonell design for å skape en profesjonell online tilstedeværelse.",
            repoUrl: "https://github.com/Siverteh/Personal-Resume-Website"
        },
        {
            id: 'project5',
            title: 'Monkey Sort Defense Spill',
            imageUrl: monkey_sort_defense,
            repoUrl: "https://github.com/Siverteh/Monkey-sort-defense"
        },
        {
            id: 'project6',
            title: 'Mikrokontroller Vekkerklokke',
            imageUrl: microcontroller_alarm_clock,
            gifUrl: AlarmClockGif,
            description: "Mikrokontroller Vekkerklokken, primært utviklet med C i Mbed Studio, representerer en kombinasjon av tradisjonell tidtaking og moderne funksjonalitet. Med en tilpassbar alarm, temperatur- og fuktighetsvisning, værmelding for Grimstad, og en rullende nyhetsstrøm, fungerer denne multifunksjonelle klokken som et omfattende informasjonssenter.",
            repoUrl: "https://github.com/Siverteh/Microcontroller-project"
        },
        {
            id: 'project7',
            title: 'UiA Meldingstavle',
            imageUrl: uia_message_board,
            description: "UiA Meldingstavlen, en dynamisk webplattform, ble omhyggelig utviklet med Flask-rammeverket. Tilpasset for akademisk samfunn, fungerer nettstedet som et sentralt kommunikasjonshub hvor studenter og fakultet kan poste, dele og diskutere et bredt spekter av emner. Nettstedets design fokuserer på brukervennlighet og effektiv interaksjon, og fremmer et levende online fellesskap. Dens strømlinjeformede grensesnitt og robuste backend sikrer en sømløs og sikker brukeropplevelse, og forbedrer campus-tilkobling og engasjement.",
            reportUrl: MessageBoardpdf,
            repoUrl: "https://github.com/Siverteh/UiA-message-board"
        },
        {
            id: 'project8',
            title: 'Norsk Tegnspråkdetektor',
            imageUrl: sign_language_detector,
            description: "Prosjektet Norsk Tegnspråkdetektor, kalt 'Tolkern', hadde som mål å skape en programvare for sanntidsoversettelse av tegnspråk til tekst. Med fokus på det statiske en-hånds alfabetet, brukte det en forhåndstrent modell forbedret gjennom overført læring for å nøyaktig tolke tegnspråk. Prosjektets innovasjon ligger i bruken av maskinlæring og kameraer for å lette kommunikasjonen for døve og stumme individer, og adresserer mangelen på norske tegnspråkoversettere. Ved å konvertere tegnspråk til tekst, sikter programvaren mot å lette kommunikasjonsbarrierer, spesielt i utdannings- og yrkessammenhenger.",
            reportUrl: Tolkernpdf,
            repoUrl: "https://github.com/Siverteh/Tolkern"
        },
        {
            id: 'project9',
            title: 'Operativsystem Laget fra Bunnen',
            imageUrl: operating_system,
            description: "Operativsystemprosjektet, gjennomført i kurset IKT218 - Avanserte Operativsystemer, var en omfattende øvelse i å designe og programmere et operativsystem fra bunnen. Det hadde som mål å fordype forståelsen av operativsystemers funksjonaliteter, begynnende med en minimalistisk implementasjon og gradvis utvidende dens kapasiteter. Prosjektet omfattet ulike oppgaver, hver bygget på den forrige, med fokus på nøkkelkonsepter som oppstart, Global Descriptor Table, avbrudd, minnehåndtering og mer.",
            reportUrl: OperatingSystempdf,
            repoUrl: "https://github.com/Siverteh/ikt218-osdev"
        }
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
            {selectedProject && (
                <ModalNo project={selectedProject} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default ProjectsNo;
