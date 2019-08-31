import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import '../App.css'
import Avatar from "../Images/avatar3.png"
class LandingPage extends Component {
  render() {
    return (
      <div  className="landing-container" style={{ width: '100%', margin:'auto'}}>
       
        <Container fluid>
          <Row  >
            <Col md={12}>
              <img alt="Luis Delgado" className="avatar-img" style={{opacity:.8}} 
              src={Avatar}/><br/>

              <div className="banner-text">
                <h1>Full Stack Developer</h1>

                <hr/>
              <p>HTML/CSS | Bootstrap | JavaScript | ReactJS | C#</p>

              <div className="social-links">
                {/*Linkedin*/}
                <a href="https://www.linkedin.com/in/luis-delgado-891841120/" target="_blank" rel="noopener noreferrer"> 
                  <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                </a>
                 {/*Github*/}
                 <a href="https://github.com/relief12" target="_blank" rel="noopener noreferrer"> 
                  <i className="fa fa-github-square"  aria-hidden="true"/>
                </a>
                 {/*Freecodecamp*/}
                 <a href="https://www.freecodecamp.org/forum/u/relze12/summary" target="_blank" rel="noopener noreferrer"> 
                  <i className="fa fa-free-code-camp"  aria-hidden="true"/>
                </a>

              </div>



              </div>
              
             


            </Col>
            
         
          </Row>
        </Container>
      </div>
    );
  }
}
export default LandingPage;
