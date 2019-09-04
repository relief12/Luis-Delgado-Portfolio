import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import profilepic from "../Images/relze.PNG";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
class Resume extends Component {
  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <Container>
          <Row>
            <Col col={4}>
              <div style={{ textAlign: "center" }}>
                <img
                  src={profilepic}
                  alt="Luis Delgado"
                  style={{ height: "200px", borderRadius: "50%" }}
                />
              </div>
              <h2 style={{ paddingTop: "1em" }}>Luis Delgado</h2>
              <h4 style={{ color: "grey" }}>Programmer</h4>
              <hr
                align="left"
                style={{
                  borderTop: "3px solid #833fb2",
                  width: "50%",
                  right: "0"
                }}
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>

              <h5>Activities</h5>
              <hr
                align="left"
                style={{
                  borderTop: "3px solid #833fb2",
                  width: "50%",
                  right: "0"
                }}
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
              <h5>Courses</h5>
              <hr
                align="left"
                style={{
                  borderTop: "3px solid #833fb2",
                  width: "50%",
                  right: "0"
                }}
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
              <h5>Organizations</h5>
              <hr
                align="left"
                style={{
                  borderTop: "3px solid #833fb2",
                  width: "50%",
                  right: "0"
                }}
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
            </Col>

            <Col className="resume-right-col" col={8}>
              <h2>Education</h2>

              <Education
                startYear={2015}
                endYear={2017}
                schoolName="Union County College"
                schoolDescription=" Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."/>
              <Education
                startYear={2015}
                endYear={2017}
                schoolName="Union County College"
                schoolDescription=" Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."/>
              <hr style={{borderTop:'3px solid #e22947'}}/>
              <h2>Experience</h2>
              <Experience
               startYear={2014}
               endYear={2019}
               jobName="Seasons 52"
               jobDescription=" Lorem Ipsum is simply dummy text of the printing and typesetting
             industry."/>
              <Experience
               startYear={2014}
               endYear={2019}
               jobName="Seasons 52"
               jobDescription=" Lorem Ipsum is simply dummy text of the printing and typesetting
             industry."/>
              <hr style={{borderTop:'3px solid #e22947'}}/>
              <h2>Skills</h2>
              <Skills
              skill="Javascript"
              progress={100}/>
              <Skills
              skill="Javascript"
              progress={80}/>
              <Skills
              skill="Javascript"
              progress={70}/>
              <Skills
              skill="Javascript"
              progress={50}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Resume;
