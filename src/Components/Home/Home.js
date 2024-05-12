import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';

import Vikram_Singh from './Vikram_Singh.pdf';

const Home = () => {
  const name = "Vikram Singh";
  const typingDelay = 200; // Delay between each letter typing
  const deletingDelay = 300; // Delay after deleting each letter
  const pauseDelay = 5000; // Delay after completing a cycle

  let isDeleting = false;
  let currentText = "";
  let timer;

  function type() {
    if (isDeleting) {
      currentText = name.substring(0, currentText.length - 1);
    } else {
      currentText = name.substring(0, currentText.length + 1);
    }

    const typingElement = document.getElementById("typing-effect");
    typingElement.innerHTML = `Hi! I am <br />${currentText}`;

    if (!isDeleting && currentText === name) {
      isDeleting = true;
      clearInterval(timer);
      timer = setTimeout(type, pauseDelay);
    } else if (isDeleting && currentText === "") {
      isDeleting = false;
      clearInterval(timer);
      timer = setTimeout(type, typingDelay);
    }

    timer = setTimeout(type, isDeleting ? deletingDelay : typingDelay);
  }

  timer = setTimeout(type, pauseDelay);



  return (
    <div className="home-container" id="Home">
      <div className="left-section">

        <motion.img
          className="my__home-img"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          
        />
        <div className='home__resume'>
          <a href={Vikram_Singh} download>
            <button className='home__cv'>Download CV</button>
          </a>
        </div>
      </div>
      <div className="right-section">
        <h1 className="home__name" id="typing-effect"> </h1>
        <p className="about-me-text">
          I am a passionate full-stack developer with 2.9+ years experience in both frontend and backend technologies.
          I thoroughly enjoy building web applications and constantly exploring new technologies to stay innovative in my work.
          With a strong focus on  development, I take pleasure in bringing designs to life and delivering intuitive
          user experiences. Additionally, I am equally skilled in backend development,
          I am committed to continuous learning, always seeking opportunities to expand my knowledge and skills. With a strong work ethic and dedication to
          personal and professional growth, I am driven to excel in my role as a developer.
        </p>
      </div>
    </div>
  );
};

export default Home;
