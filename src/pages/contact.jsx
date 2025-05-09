import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/main.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-heading">Get in Touch</h1>
      <p className="contact-description">
        I'm always open to connecting. Feel free to reach out through any of the platforms below.
      </p>
      <div className="contact-icons">
        <a href="https://github.com/johngarnsey" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="contact-icon" />
        </a>
        <a href="https://www.linkedin.com/johngarnsey" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="contact-icon" />
        </a>
        <a href="mailto:john.garnsey@hotmail.com" aria-label="Email">
          <FaEnvelope className="contact-icon" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
