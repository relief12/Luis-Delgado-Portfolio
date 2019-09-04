import React, {Component} from 'react';
import { Container, Row, Col } from "reactstrap";

class Experience extends Component{
    render(){
        return(
           <Container style={{paddingTop:'1rem'}}>
               <Row>
                   <Col col={4}>
                       <p style={{marginTop:'5px'}}>{this.props.startYear}-{this.props.endYear}</p>
                   </Col>
                   <Col col={8}>
                       <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
                       <p>{this.props.jobDescription}</p>
                   </Col>
               </Row>
           </Container>
        )
    }
}

export default Experience;