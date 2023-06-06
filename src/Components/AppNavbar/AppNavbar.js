import React from 'react';
import { motion } from 'framer-motion';
import './AppNavbar.css';


const AppNavbar = () => {
  const navbarLinks = ['Home', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h2>Portfolio</h2>
      </div>
      <ul className="app__navbar-links">
        {navbarLinks.map((item, index) => (
          <motion.li
            className="app__flex p-text"
            key={`link-${item}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div>
              <a href={`#${item}`}>{item}</a>
            </div>
          </motion.li>
        ))}
        <li className="app__flex p-text">
          
        </li>
      </ul>
    </nav>
  );
};

export default AppNavbar;
