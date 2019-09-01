import React from 'react'
import DrawerToggleButton from '../Components/DrawerToggleButton';
import { Link } from 'react-router-dom';
import './Toolbar.css'


const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar__logo">
        <a href="/luis-delgado-portfolio">Luis Delgado's Portfolio</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
        <li>
            <Link to="/luis-delgado-portfolio">Home</Link>

          </li>
          <li>
            <Link to="/luis-delgado-portfolio/resume">Resume</Link>
          </li>
          <li>
            <Link to="/luis-delgado-portfolio/aboutme">About me</Link>
          </li>
          <li>
            <Link to="/luis-delgado-portfolio/projects">Projects</Link>
          </li>
          <li>
            <Link to="/luis-delgado-portfolio/contact">Contact Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar