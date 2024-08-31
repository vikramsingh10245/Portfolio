import React, { useEffect, useState } from 'react';
import './Home.css';
import Vikram_Singh_Resume from '../../Constants/Vikram_Singh_Resume.pdf'

const Home = () => {
  const name = "Vikram Singh";
  const typingDelay = 50; // Delay between each letter typing
  const deletingDelay = 80; // Delay after deleting each letter
  const pauseDelay =400; // Delay after completing a cycle

  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    const type = () => {
      if (isDeleting) {
        setCurrentText(name.substring(0, currentText.length - 1));
      } else {
        setCurrentText(name.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === name) {
        setIsDeleting(true);
        timer = setTimeout(type, pauseDelay);
      } else if (isDeleting && currentText === "") {
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
          Innovative Full Stack Java Developer with over 3 years of experience in architecting, developing,
          and deploying high-performance web applications. Expertise in Java, ReactJS, Spring Boot, SQL, and Oracle DB,
          with a proven track record of implementing scalable solutions and optimizing database performance. Skilled in
          utilizing modern development tools such as Git for version control and collaboration, ensuring streamlined workflows
          and high-quality code. Adept at integrating RESTful APIs, enhancing user experiences through dynamic front-end interfaces,
          and building robust server-side architectures. Strong understanding of Agile methodologies, enabling efficient and
          iterative development processes. Committed to continuous improvement and staying abreast of industry advancements to
          deliver cutting-edge solutions that drive business success and innovation.
        </p>
      </div>
    </div>
  );
};

export default Home;
