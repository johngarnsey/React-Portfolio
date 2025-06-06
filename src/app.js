import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';
import CustomCursor from './components/customCursor';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/main.css';

function Home() {
  return (
    <main className="hero" data-aos="fade-up">
      <h1 data-aos="fade-up">Welcome to my Portfolio</h1>
      <p data-aos="fade-up" data-aos-delay="100">
        Technology innovator with a comprehensive understanding of software development,
        information security, and IT infrastructure. I approach technical challenges by combining
        analytical problem-solving with modern best practices to deliver robust solutions.
        My work reflects a commitment to clean code, secure implementations, and scalable architectures.
        I thrive on continuous learning and actively contribute to projects that push technological
        boundaries while maintaining high standards for quality and security.
      </p>
    </main>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true,    // Whether animation should happen only once per element
    });
  }, []);

  return (
    <Router>
      <CustomCursor />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;