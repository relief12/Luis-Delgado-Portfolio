import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
class contactPage extends Component {
  render() {
    return (
      <div className="contact-body">
        <Container style={{ width: "95%" }} className="contact-container">
          <Row>
            <Col col={6}>
              <h2>Luis Delgado</h2>
              <img src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-512.png"  ></img>
              <p>
                * The easiest way to contact me is by email and I always reply within hours.<br/>
                * If you need to call me please be aware that I'm usually busy during the day either at school
                or work so it could be difficult for me  to answer. <br/>
                * Leave me a voicemail if necessary or add me on discord or skype I'm on my laptop all day.<br/><br/>
                Thanks!
              
              </p>
            </Col>

            <Col  col={6}>
              <h2>Contact Me</h2>
              <hr />
              <div className="contact-list">
              <ListGroup  className="info-list">
                    <ListGroupItem style={{borderBottom:'4px solid', paddingLeft:"1.2rem"}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/><h4>732-474-8064 </h4>
                    </ListGroupItem>
                    <ListGroupItem style={{borderBottom:'4px solid'}}>
                    <i className="fa fa-envelope-square" aria-hidden="true"/><h4>lad34@njit.edu</h4>
                    </ListGroupItem>
                    <ListGroupItem style={{borderBottom:'4px solid',paddingRight:"3.5em"}}>
                    <i className="fab fa-discord" aria-hidden="true"/><h4>Relze#9657</h4>
                    </ListGroupItem>
                    <ListGroupItem style={{ paddingRight:"4em"}}>
                    <i className="fab fa-skype" aria-hidden="true"/><h4>relief.light </h4>
                    </ListGroupItem>
                   
                
                   
              </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default contactPage;
