import React from 'react';
import './Project.css';
import { motion } from 'framer-motion';
import { images } from '../../Constants';

const Project = () => {
  const abouts = [
    { title: 'My Portfolio', description: "I proudly present my React.js portfolio, showcasing my skills and experience.With dynamic components and seamless navigation,I've crafted an engaging website. Leveraging HTML,CSS, and React libraries and much more..", imgUrl: images.portfolio, link: 'https://github.com/vikramsingh10245/Portfolio' },
    { title: 'Student Course Management', description: "I have developed a project using React.js, Spring Boot, MySQL, and other React.js libraries to manage student courses. The project allows users to add new courses, view all existing courses, delete courses, and update course information. It provides a seamless and interactive experience for managing student course data.", imgUrl: images.courselogo, link: 'https://github.com/vikramsingh10245/Student-Course-Fullstack'},
    { title: 'Employee CRUD Operations', description: " This is my first full stack project in which i have successfully implemented CRUD operations (Create, Read, Update, Delete) for managing employee data. By utilizing React.js for the front-end, Spring Boot for the back-end, and MySQL for the database, i have created a robust application.", imgUrl: images.employeinfo, link: 'https://github.com/vikramsingh10245/Employee-Info-CRUD' }
    
  ];

  return (
    <div className='project__container' id='Projects'>
      <h2 className="head-text">
        I Know That{' '}
        <span className="highlight">Good Development</span>
        <br />
        means{' '}
        <span className="highlight">Good Business</span>
        <br /><br />
        <span>Personal Projects</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <div key={about.title + index} className="app__profile-item">
            <a href={about.link} target="_blank" rel="noopener noreferrer">
              <motion.img
                src={about.imgUrl}
                alt={about.title}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="project__image"
              />
            </a>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
