import React from 'react';
import '../styles/main.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Let's Connect</h1>
      <p className="contact-subtitle">
        I'm always open to discussing new opportunities or collaborations.
      </p>
      <div className="social-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default Contact;