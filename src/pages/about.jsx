import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/about.css';

function About() {
  return (
    <div className="about-page">
      <Header />
      <main className="about-content">
        <h1>About Me</h1>
        <p>
          Hi, I'm John Garnsey, a dedicated professional with a fervent enthusiasm for continuous learning and professional growth. Deeply ingrained in a familial tradition of computer proficiency, I am committed to honing my skills in cybersecurity with the aim of contributing to global safety initiatives. Eager to engage with like-minded individuals, forge meaningful connections, and tackle challenges head-on..
        </p>
        <p>
          I enjoy working on projects that blend technology and creativity, building modern, responsive web applications.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default About;
