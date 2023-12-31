// ModalEn.tsx
import React from 'react';
import './Modal.css';
import {FaDownload} from "react-icons/fa";

// ProjectData type definition (can be in a types.ts file or at the top of your component file)
export interface ProjectData {
    id: string;
    title: string;
    imageUrl: string;
    gifUrl?: string; // URL for the project's GIF
    description?: string;
    reportUrl?: string; // URL to download the project report
    repoUrl?: string; // URL for prosjektets repository
}

interface ModalEnProps {
    project: ProjectData;
    onClose: () => void;
}

const ModalNo: React.FC<ModalEnProps> = ({ project, onClose }) => {
    if (!project) {
        return null;
    }

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <span className="modal-close" onClick={onClose}>&times;</span>
                <h2>{project.title}</h2>
                {project.gifUrl
                    ? <img src={project.gifUrl} alt={`GIF of ${project.title}`} className="project-gif" />
                    : <img src={project.imageUrl} alt={project.title} className="modal-image" />}

                <div className="project-description">
                    <h3>Beskrivelse:</h3>
                    <p>{project.description}</p>
                </div>

                {project.reportUrl && (
                    <div className="download-report-wrapper">
                        <a href={project.reportUrl} target="_blank" rel="noopener noreferrer" className="download-report-button">
                            <FaDownload/><span>Last ned rapport</span>
                        </a>
                    </div>
                )}
                {
                    project.repoUrl && (
                        <div className="download-report-wrapper">
                            <a href={project.repoUrl} className="download-report-button">
                                <span>Gå til repository</span>
                            </a>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ModalNo;