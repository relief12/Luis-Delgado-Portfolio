import React from 'react'
import { Link } from 'react-router-dom';
import './SideDrawer.css'

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
  return (<nav className={drawerClasses}>
      <ul>
      <li>
            <a href="/luis-delgado-portfolio">Home</a>

          </li>
          <li>
            <a href="/luis-delgado-portfolio/resume">Resume</a>
          </li>
          <li>
            <a href="/luis-delgado-portfolio/aboutme">About me</a>
          </li>
          <li>
            <a href="/luis-delgado-portfolio/projects">Projects</a>
          </li>
          <li>
            <a href="/luis-delgado-portfolio/contact">Contact Me</a>
          </li>
      </ul>
    </nav>
  );
};

export default sideDrawer