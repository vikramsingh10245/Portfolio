import React from 'react';
import { FaLinkedin, FaInstagram  } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1 className='footer-text'>Be you. Always be you</h1>
        <h2 className='footer-h2-text'>To connect with me:</h2>
        <div className="icon-container">
          <a href="https://www.linkedin.com/in/vikram-07singh/" target="_blank" rel="noopener noreferrer"> 
            <FaLinkedin className="footer-icon linkedin-icon" />
          </a>
          <a href="https://www.instagram.com/vikram_07singh/" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="footer-icon instagram-icon" />
    </a>
        </div>
        <span>© 2024 Vikram Singh. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
