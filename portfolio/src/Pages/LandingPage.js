import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import '../App.css'
import Avatar from "../Images/avatar.svg"
class LandingPage extends Component {
  render() {
    return (
      <div  className="landing-container" style={{ width: '100%', marginTop:'32px'}}>
       
        <Container fluid>
          <Row  >
            <Col md={8}>
              <img alt="Luis Delgado" className="avatar-img" 
              src={Avatar}/>
             
            </Col>
            
         
          </Row>
        </Container>
      </div>
    );
  }
}
export default LandingPage;
