import React from 'react';
import './styles.css';

export default () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2024 Megaglaz Production. All rights reserved.</p>
        <div className="social-media-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};
