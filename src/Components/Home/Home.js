import React, { useEffect, useState } from 'react';
import './Home.css';
import Vikram_Singh_Resume from '../../Constants/Vikram_Singh_Resume.pdf'

const Home = () => {
  const name = "Vikram Singh";
  const typingDelay = 50; // Delay between each letter typing
  const deletingDelay = 80; // Delay after deleting each letter
  const pauseDelay = 400; // Delay after completing a cycle

  const [currentText, setCurrentText] = useState("V"); // Start with 'V'
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    const type = () => {
      if (isDeleting) {
        setCurrentText(name.substring(0, Math.max(1, currentText.length - 1)));
      } else {
        setCurrentText(name.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === name) {
        setIsDeleting(true);
        timer = setTimeout(type, pauseDelay);
      } else if (isDeleting && currentText === "V") { // Stop at 'V'
        setIsDeleting(false);
        timer = setTimeout(type, typingDelay);
      } else {
        timer = setTimeout(type, isDeleting ? deletingDelay : typingDelay);
      }
    };

    timer = setTimeout(type, pauseDelay);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [currentText, isDeleting]);
  return (
    <div className="home-container" id="Home">
      <div className="left-section">
        <div className='home__resume'>
          <a href={Vikram_Singh_Resume} download="Vikram_Singh_Resume.pdf">
            <button className='home__cv'>Download CV</button>
          </a>
        </div>
      </div>
      <div className="right-section">
        <h1 className="home__name">
          Hi! I am <br />{currentText}
        </h1>
        <p className="about-me-text">
        Experienced Full Stack Developer with over 3 years of expertise in Telecom, Healthcare, Ecommerce, and Banking sectors. 
        Proficient in Java, Spring Boot, and ReactJS, with strong skills in data structures, algorithms, and problem-solving. 
        Adept at building dynamic, responsive front-end applications and robust, scalable back-end systems. 
        Skilled in secure coding practices, database management using Oracle SQL, and leveraging AWS for cloud-based deployments. 
        Proficient in DevOps with hands-on experience in CI/CD pipelines using Jenkins. 
        Continuously learning and applying best practices in Docker, Kubernetes, and container orchestration.
        </p>
      </div>
    </div>
  );
};

export default Home;
