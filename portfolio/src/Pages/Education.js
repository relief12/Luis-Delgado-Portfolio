import React, {Component} from 'react';
import { Container, Row, Col } from "reactstrap";

class Education extends Component{
    render(){
        return(
           <Container style={{paddingTop:'1rem'}}>
               <Row>
                   <Col col={4}>
                       <p>{this.props.startYear}-{this.props.endYear}</p>
                   </Col>
                   <Col col={8}>
                       <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
                       <p>{this.props.schoolDescription}</p>
                   </Col>
               </Row>
           </Container>
        )
    }
}

export default Education;