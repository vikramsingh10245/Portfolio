import React from 'react';
import { FaReact, FaHtml5, FaJava, FaGit, FaAws } from 'react-icons/fa'; // Add FaAws here
import { SiSpringboot, SiPostman, SiCss3, SiMysql, SiOracle, SiDocker, SiKubernetes, SiJenkins } from 'react-icons/si';
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
          <FaGit className="icon git" />
        </div>
        <div className="skill-item">
          <SiMysql className="icon mysql" />
        </div>
        <div className="skill-item">
          <SiOracle className="icon oracle" />
        </div>
        {/* Updated AWS icon */}
        <div className="skill-item">
          <FaAws className="icon aws" />
        </div>
        <div className="skill-item">
          <SiDocker className="icon docker" />
        </div>
        <div className="skill-item">
          <SiKubernetes className="icon kubernetes" />
        </div>
        <div className="skill-item">
          <SiJenkins className="icon jenkins" />
        </div>
      </div>

      <div className="cards-container">
        {/* First Card */}
        <Card className="custom-card">
          <CardBody>
            <CardTitle style={{ color: 'white' }}>
              <img src={images.companylogo} style={{ height: 40, width: 40, marginRight: 30 }} alt='' />
              Virtusa Engineering First<br />
              <img src={images.btlogo} style={{ height: 40, width: 40, marginRight: 30 }} alt='' />
              British Telecommunications - Client
            </CardTitle>
            <CardText>
              <ul>
                <li>Defect Tracking and Resolution: Addressed migration issues using Oracle DB and React.js for seamless front-end integration.</li>
                <li>RESTful Web Services: Developed APIs to enhance React.js front-end functionality and improve user experience.</li>
                <li>Oracle Database Management: Managed SQL queries, resolved errors, and ensured data accuracy.</li>
                <li>Data Quality and Triggers: Established data quality rules and implemented triggers to maintain data integrity and boost user engagement.</li>
              </ul>
            </CardText>
          </CardBody>
        </Card>

        {/* Second Card */}
        <Card className="custom-card">
          <CardBody>
            <CardTitle style={{ color: 'white' }}>
              <img src={images.companylogo} style={{ height: 40, width: 40, marginRight: 30 }} alt='' />
              Virtusa Engineering First
            </CardTitle>
            <CardText>
              <ul>
                <li>Healthcare System: Developed a comprehensive application to enhance healthcare management using modern technologies.</li>
                <li>Backend: Utilized Spring Boot to develop robust and scalable RESTful APIs, enabling efficient CRUD operations and advanced security features. This framework facilitated seamless integration with the frontend.</li>
                <li>Frontend: Designed with ReactJS to deliver a highly dynamic and responsive user interface, featuring intuitive navigation and real-time updates for an enhanced user experience.</li>
                <li>Database: Employed Oracle DB for secure, scalable data storage, ensuring consistent handling of healthcare data.</li>
              </ul>
            </CardText>
          </CardBody>
        </Card>

        {/* Third Card */}
        <Card className="custom-card">
          <CardBody>
            <CardTitle style={{ color: 'white' }}>
              <img src={images.companylogo} style={{ height: 40, width: 40, marginRight: 30 }} alt='' />
              Virtusa Engineering First
            </CardTitle>
            <CardText>
              <ul>
                <li> Enhanced front-end functionalities by implementing Restful web services, ensuring seamless user
                  interaction and elevating overall user experience.</li>
                <li>Developed login page and user creation module with role-based access control using Java and Spring Boot,
                  integrated with JWT token authentication for enhanced security measures within the application.</li>
                <li>Implemented JWT token security feature within the application to enhance authentication and
                  authorization mechanisms, ensuring robust security measures, and deployed the updated system for
                  immediate utilization.</li>
              </ul>
            </CardText>
          </CardBody>
        </Card>

        {/* Fourth Card */}
        <Card className="custom-card">
          <CardBody>
            <CardTitle style={{ color: 'white' }}>
              <img src={images.companylogo} style={{ height: 40, width: 40, marginRight: 30 }} alt='' />
              Virtusa Engineering First<br />
              <img src={images.jpmorgan} style={{ height: 40, width: 40, marginRight: 30 }} alt='' />
              JpMorganChase &Co - Client
            </CardTitle>
            <CardText>
              <ul>
                <li>Led the upgrade of Mandate-UI Payment Service from Java 8 to Java 17, enhancing functionality and
                  performance.</li>
                  <li>Developed backend components with Spring Boot, managed code refactoring, and ensured
                  compatibility.</li>
                 <li> Deployed the application on AWS EKS, handling container orchestration and scalable management.</li>
                <li>  Collaborated with Zenith on tool integration and optimized the CI/CD pipeline for smooth deployment.</li>
                  <li>Oversaw the entire deployment lifecycle and monitored performance to ensure operational excellence. </li>
              </ul>
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
