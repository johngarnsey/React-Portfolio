import React from 'react';
import '../styles/projectCard.css';


function projectCard({ title, description, techStack, github }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech">{tech}</span>
        ))}
      </div>
      <a href={github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  );
}

export default projectCard;
