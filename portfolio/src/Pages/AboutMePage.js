import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
import Fsociety from "../Images/fsociety.PNG";
class aboutMePage extends Component {
  render() {
    return (
      <div className="aboutme-body">
        <Container className="aboutme-container">
          <Row>
            <Col col={12}>
              <img
                alt="Luis Delgado"
                className="Fsociety-img"
                style={{ opacity: 0.8 }}
                src={Fsociety}
              />
              <br />

              <h1>A little bit more about me...</h1>
              <p>
                My name is Luis Delgado, I'm 28 years old and I'm from Peru. I
                canme to the U.S. when I was 18 years old. I was living in NY
                for two years and then I moved to NJ when I was 20 years old.
                I'm a senior at NJIT and I'm graduating on May 2020. I'm
                currently attending school full-time while also having 2 jobs. I
                don't mind working under stress or being super busy all the time
                as long as I get stuff done. I love the feeling of accomplishing
                something and that's what really motivates me besides thinking
                about helping my family and having a better future.
              </p>
              <p>
                In Computer Engieering I get to see most of the hardware of a
                computer and the logic behind its components. However, I have
                been a huge fan of coding since I was little and eventhough I
                could've majored in Computer Science, I decided to see the whole
                espectrum by not only learning more coding but also
                understanding how the structure of a computer works from the
                microprocessor to the registers, ALU, etc.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default aboutMePage;
