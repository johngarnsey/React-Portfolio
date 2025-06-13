import React from 'react';
import '../styles/about.css';

function About() {
  return (
    <section className="about-page">
      <h2 data-aos="fade-in">About Me</h2>
      <div className="about-content">
        <p data-aos="fade-up" data-aos-delay="100">
          I'm John Garnsey, a dedicated professional with a fervent enthusiasm for continuous learning and professional growth. 
          Deeply ingrained in a familial tradition of computer proficiency, I am committed to honing my skills in cybersecurity with the aim of contributing to global safety initiatives. 
          Eager to engage with like-minded individuals, forge meaningful connections, and tackle challenges head-on.
        </p>
        <a
          href="/Resume-John Garnsey.pdf"
          download="Resume-John Garnsey.pdf"
          className="btn btn-gradient"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default About;