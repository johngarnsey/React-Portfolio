import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Projects from './pages/projects';
import About from './pages/about';
import './styles/main.css';

function Home() {
  return (
    <main style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to my Portfolio</h1>
      <p>Technology innovator with a comprehensive understanding of software development, 
        information security, and IT infrastructure. I approach technical challenges by combining 
        analytical problem-solving with modern best practices to deliver robust solutions. 
        My work reflects a commitment to clean code, secure implementations, and scalable architectures. 
        I thrive on continuous learning and actively contribute to projects that push technological 
        boundaries while maintaining high standards for quality and security.</p>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
