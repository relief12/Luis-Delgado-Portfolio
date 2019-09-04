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
              <h4 style={{ color: "grey" }}>Computer Engineer</h4>
              <hr
                align="left"
                style={{
                  borderTop: "3px solid #833fb2",
                  width: "50%",
                  right: "0"
                }}
              />
              <h5 style={{ fontStyle: "italic" }}>
                “To see the world, things dangerous to come to, to see behind
                walls, draw closer, to find each other, and to feel. That is the
                purpose of life.”
              </h5>
              <p>- James Thurber, The Secret Life of Walter Mitty</p>

              <h5>Activities</h5>
              <hr
                align="left"
                style={{
                  borderTop: "3px solid #833fb2",
                  width: "50%",
                  right: "0"
                }}
              />
              <p style={{ fontWeight: "bold" }}>
                PARTICIPANT | UPS HACKATHON | JULY 2018
              </p>
              <p>· Participated in the different sponsored UPS challenges. </p>
              <p>
                · Team UPSociety and I developed a mobile application for UPS
                hubs during peak season
              </p>

              <p style={{ fontWeight: "bold" }}>
                PARTICIPANT | UPS HACKATHON | JULY 2019
              </p>
              <p>· Won the “What’s in the Box Challenge” </p>
              <p>
                · Team YEET and I were able to get emails from users using the
                Gmail API to scrape shipping information
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
              <p>· Digital Data Communication</p>
              <p>· Data Structures</p>
              <p>
                · Computer Organization, Architecture, and Assembly Language
              </p>
              <p>· Computer Communications Networks</p>
              <h5>Organizations</h5>
              <hr
                align="left"
                style={{
                  borderTop: "3px solid #833fb2",
                  width: "50%",
                  right: "0"
                }}
              />
              <p>· Society of Hispanic Professional Engineers (SHPE)</p>
              <p>· Institute of Electrical and Electronics Engineers (IEEE)</p>
            </Col>

            <Col className="resume-right-col" col={8}>
              <h2>Education</h2>

              <Education
                startYear={2014}
                endYear={2017}
                schoolName="Union County College"
                schoolDescription="Associate of Science in Computer Science"
              />
              <Education
                startYear={2017}
                endYear={2020}
                schoolName="New Jersey Institute of Technology"
                schoolDescription="Bachelors of Science in Computer Engineering"
              />
              <hr style={{ borderTop: "3px solid #e22947" }} />
              <h2>Experience</h2>
              <Experience
                startYear="June 2018"
                endYear="August 2018"
                jobName="UPS"
                jobDescription="Summer intern in the Application Developing team. 
                Developed the cross-platform UPS Observer mobile app.
                Worked on the backend code for the middleware connection between mobile apps and databases."         
                
              />
              <Experience
                startYear="June 2019"
                endYear="August 2019"
                jobName="UPS"
                jobDescription="Summer intern in the Application Developing team.
                Developed the Progressive Web Application Accountability in Disaster Event (AIDE)
                Worked on frontend with a modular design using ReactJS and Bootstrap "
              />
              <hr style={{ borderTop: "3px solid #e22947" }} />
              <h2>Skills</h2>
              <Skills skill="Javascript" progress={85} />
              <Skills skill="CSS" progress={85} />
              <Skills skill="HTML" progress={100} />
              <Skills skill="C#" progress={90} />
              <Skills skill="C++" progress={85} />
              <Skills skill="Python" progress={70} />
              <Skills skill="SQL" progress={70} />
              <Skills skill="MongoDB" progress={60} />
              <Skills skill="NodeJS" progress={80} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Resume;
