import React,{Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaCopyright } from "react-icons/fa";
class  Footer extends Component {
    
    render() { 
        return ( 
            <Container fluid={true}>
                <Row style={{backgroundColor:"gray"}}>
                    <Col xm={3}></Col>
                    <Col xm={6}>
                        <p>Copyright <FaCopyright />,guidance to women,2020</p>
                    </Col>
                    <Col xm={3}></Col>
                </Row>
            </Container>
         );
    }
}
 
export default Footer;