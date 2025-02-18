import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">React-Portfolio</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
