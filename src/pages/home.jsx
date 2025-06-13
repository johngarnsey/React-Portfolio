import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero gradient-hero">
        <h1 data-aos="zoom-in">Hi, I'm John Garnsey</h1>
        <p data-aos="fade-up" data-aos-delay="100">
          A passionate developer building secure and user-friendly applications.
        </p>
        <div className="hero-buttons" data-aos="slide-up" data-aos-delay="200">
          <Link to="/projects" className="btn btn-gradient">
            View My Work
          </Link>
          <Link to="/contact" className="btn">
            Get in Touch
          </Link>
        </div>
        <blockquote className="quote-box" data-aos="fade-in" data-aos-delay="300">
          "Code is like humor. When you have to explain it, it’s bad." – Cory House
        </blockquote>
      </section>
    </div>
  );
}

export default Home;