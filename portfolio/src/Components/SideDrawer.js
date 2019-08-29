import React from 'react'

import './SideDrawer.css'

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
  return (<nav className={drawerClasses}>
      <ul>
      <li>
            <a href="/resume">Resume</a>
          </li>
          <li>
            <a href="/aboutme">About me</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact me</a>
          </li>
      </ul>
    </nav>
  );
};

export default sideDrawer