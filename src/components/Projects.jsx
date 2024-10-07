import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../api/projectsApi';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects().then(data => setProjects(data));
    }, []);

    return (
        <section id="projects">
            <h2>Our Projects</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;
