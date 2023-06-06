import React from 'react';
import { FaReact, FaHtml5, FaJava } from 'react-icons/fa';
import { SiSpringboot, SiPostman, SiCss3, SiPython, SiMysql, SiOracle } from 'react-icons/si';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { images } from '../../Constants';
import './Skills.css';

const Skills = () => {
  return (
    <div id='Skills'>
      <h1 id='skills__text'>Skills & Experience</h1>
      <div className="skills-container">
        <div className="skill-item">
          <FaReact className="icon react" />
        </div>
        <div className="skill-item">
          <FaHtml5 className="icon html" />
        </div>
        <div className="skill-item">
          <FaJava className="icon java" />
        </div>
        <div className="skill-item">
          <SiSpringboot className="icon springboot" />
        </div>
        <div className="skill-item">
          <SiPostman className="icon postman" />
        </div>
        <div className="skill-item">
          <SiCss3 className="icon css3" />
        </div>
        <div className="skill-item">
          <SiPython className="icon python" />
        </div>
        <div className="skill-item">
          <SiMysql className="icon mysql" />
        </div>
        <div className="skill-item">
          <SiOracle className="icon oracle" />
        </div>
      </div>

      <div className="line"></div>
      <Card className="custom-card">
        <CardBody>
          <CardTitle style={{color:'white'}}> <img src={images.companylogo} style={{height:40 ,width:40 ,marginRight:30}} alt='' />
          Virtusa Engineering First
          </CardTitle>
          <CardText>
            <ul>
              <li>I have extensive experience in Java Spring Boot, building scalable web applications using its 
                robust framework. Proficient in RESTful API development, I leverage Spring Boot's features and best 
                practices to deliver efficient solutions.</li>
              <li>I possess in-depth knowledge of Oracle DB, specializing in data migration, query optimization, 
                and performance tuning. Skilled in writing complex SQL queries, I ensure accurate data retrieval, 
                manipulation, and analysis within Oracle DB environments..</li>
            </ul>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Skills;
