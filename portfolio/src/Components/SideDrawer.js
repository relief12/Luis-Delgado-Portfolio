import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";
import profilepic from "../Images/relze.PNG"
const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <br/><center> <img src={profilepic} style={{height:"90px", width:"90px", borderRadius:"50%"}}></img><h4>Luis Delgado</h4></center>
     
      <ul>
        <li>
        <i class="fa fa-home" style={{fontSize:"35px", marginLeft:"20px"}} aria-hidden="true">
          <a href="/luis-delgado-portfolio">Home</a>
          </i>
        </li>

        <li>
          <i class="fa fa-file-pdf-o" style={{fontSize:"35px", marginLeft:"20px"}} aria-hidden="true">
            <a href="/luis-delgado-portfolio/resume">Resume</a>
          </i>
        </li>

        <li>
        <i class="fa fa-address-card" style={{fontSize:"35px",  marginLeft:"9px"}} aria-hidden="true">
        <a href="/luis-delgado-portfolio/aboutme">About me</a>
          </i>
        </li>
        <li>
        <i class="fa fa-code" style={{fontSize:"35px",  marginLeft:"10px"}} aria-hidden="true">
          <a href="/luis-delgado-portfolio/projects">Projects</a>
          </i>
        </li>
        <li>
        <i class="fa fa-envelope" style={{fontSize:"35px",  marginLeft:"10px"}} aria-hidden="true">
          <a href="/luis-delgado-portfolio/contact">Contact Me</a>
          </i>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
