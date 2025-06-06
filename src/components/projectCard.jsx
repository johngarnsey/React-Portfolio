import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/projects.css';

function ProjectCard({ title, description, techStack, github, image }) {
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <div className="project-card" data-aos="fade-up">
      <img
        src={hasError ? 'https://via.placeholder.com/300x200' : image || ''}
        alt={`${title} preview`}
        className="project-image"
        onError={handleImageError}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech">
            {tech}
          </span>
        ))}
      </div>
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="btn">
          <FaGithub /> View on GitHub
        </a>
      )}
    </div>
  );
}

export default ProjectCard;