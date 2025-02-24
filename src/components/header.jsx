import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/" data-aos="fade-down">Home</Link>
          </li>
          <li>
            <Link to="/about" data-aos="fade-down" data-aos-delay="100">About</Link>
          </li>
          <li>
            <Link to="/projects" data-aos="fade-down" data-aos-delay="200">Projects</Link>
          </li>
          <li>
            <Link to="/contact" data-aos="fade-down" data-aos-delay="200">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
