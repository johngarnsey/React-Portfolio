import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/projectCard';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedTech, setSelectedTech] = useState('all');

  useEffect(() => {
    fetch('/data/projects.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch((error) => console.error('Error loading projects:', error));
  }, []);

  // Create a unique list of tech stacks, starting with "all"
  const techStackList = ['all', ...new Set(projects.flatMap(project => project.techStack))];

  // Handler for filtering projects
  const handleFilterChange = (e) => {
    const tech = e.target.value;
    setSelectedTech(tech);
    if (tech === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.techStack.includes(tech)));
    }
  };

  return (
    <div className="projects-page">
      <main>
        <h1>My Projects</h1>
        
        {/* Filter Component */}
        <div className="filter-container">
          <label htmlFor="tech-filter">Filter by tech:</label>
          <select id="tech-filter" value={selectedTech} onChange={handleFilterChange}>
            {techStackList.map((tech, index) => (
              <option key={index} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              github={project.github}
              image={project.image}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Projects;