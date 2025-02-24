import React, { useEffect } from 'react';
import './customCursor.css';

function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    const moveCursor = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return <div className="custom-cursor"></div>;
}

export default CustomCursor;
