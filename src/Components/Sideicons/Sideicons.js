import React from 'react';
import { FaHome, FaBriefcase     , FaCode, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Sideicons.css';

const Sideicons = () => {
  return (
    <div className="sidebar__icon-container">
      <Link
        to="Home"
        smooth={true}
        duration={1}
        className="sidebar__icon"
        activeClass="active"
      >
        <FaHome />
      </Link>
      <Link
        to="Projects"
        smooth={true}
        duration={1}
        className="sidebar__icon"
        activeClass="active"
      >
        <FaBriefcase      />
      </Link>
      <Link
        to="Skills"
        smooth={true}
        duration={10}
        className="sidebar__icon"
      
      >
        <FaCode />
      </Link>
      <Link
        to="Contact"
        smooth={true}
        duration={1}
        className="sidebar__icon"
       
      >
        <FaEnvelope />
      </Link>
    </div>
  );
};

export default Sideicons;
