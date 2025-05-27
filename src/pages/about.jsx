import React from 'react';
import '../styles/about.css';

function About() {
  return (
    <section className="about-page">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I'm John Garnsey, a dedicated professional with a fervent enthusiasm for continuous learning and professional growth. 
          Deeply ingrained in a familial tradition of computer proficiency, I am committed to honing my skills in cybersecurity with the aim of contributing to global safety initiatives. 
          Eager to engage with like-minded individuals, forge meaningful connections, and tackle challenges head-on.
        </p>
        <a
          href="/resume.pdf"
          download="Resume-John Garnsey.pdf"
          className="btn btn-gradient"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default About;