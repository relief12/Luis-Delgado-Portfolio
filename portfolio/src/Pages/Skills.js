import React, { Component } from "react";
import { Container, Row, Col, Progress } from "reactstrap";

class Skills extends Component {
  render() {
    return (
      <Container style={{ paddingTop: "1rem" }}>
        <Row>
          <Col col={12}>
            <div style={{ display: "flex" }}>
              {this.props.skill}
              <Progress
                style={{ margin: "auto", width: "75%" }}
                value={this.props.progress}
                color="danger"
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Skills;
