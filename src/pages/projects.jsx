import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/projectCard';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/projects.css';


function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Womp Womp! Error loading projects:', error));
  }, []);

  return (
    <div className="projects-page">
      <Header />
      <main>
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              github={project.github}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Projects;
