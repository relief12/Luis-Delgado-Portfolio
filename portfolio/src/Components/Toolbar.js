import React from 'react'
import DrawerToggleButton from '../Components/DrawerToggleButton';
import './Toolbar.css'


const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar__logo">
        <a href="/">Luis Delgado</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
        <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="luis-delgado-portfolio/resume">Resume</a>
          </li>
          <li>
            <a href="luis-delgado-portfolio/aboutme">About me</a>
          </li>
          <li>
            <a href="luis-delgado-portfolio/projects">Projects</a>
          </li>
          <li>
            <a href="luis-delgado-portfolio/contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar