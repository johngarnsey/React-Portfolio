import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} John Garnsey. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
