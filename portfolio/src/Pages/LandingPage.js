import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import '../App.css'
class LandingPage extends Component {
  render() {
    return (
      <div  className="landing-container" style={{ width: '100%', marginTop:'32px'}}>
       
        <Container fluid>
          <Row  >
            <Col md={12}>
              <img className="avatar-img" 
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=UpDown&mouthType=Smile&skinColor=Light"/>
             
            </Col>
            
         
          </Row>
        </Container>
      </div>
    );
  }
}
export default LandingPage;
