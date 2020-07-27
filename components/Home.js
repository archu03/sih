import React ,{Component} from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { FaCog } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import stock from './assets/stock.jpeg';
import ban from './assets/ban.jpeg';
import mf from './assets/mf.jpeg';
import w4 from './assets/w4.jpeg';
import Footer from './Footer';
import Dropdown from 'react-bootstrap/Dropdown'
class Home extends Component {
  
  render() { 
    return ( 
      <Container fluid={true}>
        <Row className="header">
        <Dropdown className="dropdown">
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Select Language
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Tamil</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Hindi</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Malayalam</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Telugu</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Gujarathi</Dropdown.Item>
                </Dropdown.Menu>
        </Dropdown>
        <div className="header-icons">
           <Button className="button" variant="default"><FaCog id="profile-icon" /></Button>
           <Button className="button" variant="default"><FaUserCircle id="profile-icon" /></Button>
        </div>
        </Row>
        <Row >
            <div className="welcome-content">
            <h2 >Welcome!</h2>
            <div className="welcome-img">
            <p>
              Investing can feel like a chore, especially for women inventors. Make use of online financial tools.
              Make the investment in a easy way. Don't rely on others. This page provides you a complete guidance of various online financial 
              tools. So that you can gain a clear knowledge  about the online financial tools. Understand how much you will need to save for financially secure.
              Make a investment in a correct way.
             </p>
             <img src={w4} id="img" />

             </div>
             </div>
             
        </Row>
        <Row >
          <Col >
      <CardGroup>
          <Card className="cards">
            <Card.Img variant="top" src={stock} height="220px"/>
            <Card.Body>
              <Card.Title>Stock Trading</Card.Title>
              <Card.Text>
              Stock trading, also known as refers to the buying and selling of shares in a particular company;
               if you own the stock, you own a piece of the company.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button href="#" variant="primary">view</Button>
            </Card.Footer>
          </Card>
        <Card className="cards">
          <Card.Img variant="top" src={ban} />
          <Card.Body>
            <Card.Title>Banking</Card.Title>
            <Card.Text>
            Banking is an industry that handles cash, credit, and other financial transactions. 
            Banks provide a safe place to store extra cash and credit.  Banks use these deposits to make loans.
             Banking is one of the key drivers of the U.S. economy.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button  href="#" variant="primary">view</Button>
          </Card.Footer>
        </Card>
        <Card className="cards">
          <Card.Img variant="top" src={mf} height="220px"/>
          <Card.Body>
            <Card.Title>Mutual Fund</Card.Title>
            <Card.Text>
            A mutual fund is a type of financial vehicle made up of a pool of money collected from many 
            investors to invest in securities like stocks, bonds, money market instruments, and other assets.Feb
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button  href="#" variant="primary">view</Button>
          </Card.Footer>
        </Card>
</CardGroup>
</Col>

</Row>
<br></br>
<br></br>
<Footer />
</Container>

     );
    
  }
}
 
export default Home;
