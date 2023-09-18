import React from "react";
import { Button, Form, ListGroup, NavDropdown } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import Table from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import { NavDropdown } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {AiFillYoutube} from 'react-icons/ai'
import { Link } from "react-router-dom";
import {BsFacebook} from 'react-icons/bs'
import {FaSquareInstagram}  from 'react-icons/fa6'
import Foot from "../Header and Footer/Footer";
const Guitar = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <body className="">
 {/* <button className="neon-button">
       hello
         </button> */}
      <h2 className="neon-button" style={{backgroundColor:"white",fontWeight:"bold"}} >Guitar Wood Store
      </h2>
      <>

        <Button className="neon-button" variant="danger" onClick={handleShow} style={{ fontSize: "100%", marginRight: "100%", width: "15%" }} > Accessosries
          {name}

        </Button>
        <Offcanvas  show={show} onHide={handleClose} {...props} style={{ backgroundColor: "grey" }}>
          <Offcanvas.Header closeButton>

            <Offcanvas.Header >
              <Navbar className="neon-button" style={{marginRight:"50%"}} bg="dark" data-bs-theme="dark"  >
                <Container style={{ width: "330px",height:"40px" }}>
                  
                  <Navbar.Brand href="/">GWC</Navbar.Brand>
                  <Nav className="me-auto" >
                 
                  </Nav>
                </Container>
              </Navbar>
            </Offcanvas.Header>
          </Offcanvas.Header>

          <Offcanvas.Body>
          < Card.Img variant="bottom" src="Gws/gw2.jpeg" style={{ width: "100%" }} />
            <Container>
            
           
              <br/>
            </Container>
            <Card style={{backgroundColor:"black"}} >
            <Card.Body className="CANVAS_CARD1" >
              <Card.Title variant="secondary">Dedario</Card.Title>
              <Card.Text>
              This project is on working stage
              </Card.Text>
               < Card.Img variant="bottom" src="Gws/gw4.jpeg" style={{ width: "100%" }} />
             

            </Card.Body>
            <Container>
              <DropdownButton id="dropdown-item-button" title="Dropdown button" variant="secondary" menuVariant="dark">
              {/* < Card.Img variant="bottom" src="Gws/gw1.jpeg" style={{ width: "100%" }} /> */}
                <Dropdown.ItemText   >Dropdown item text</Dropdown.ItemText>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">..</Dropdown.Item>
                
              </DropdownButton>
            </Container>
            </Card>
            
            <br></br>
           
            <Card style={{backgroundColor:"black"}} >
            <Card.Body className="CANVAS_CARD2">
              <Card.Title>Yamaha</Card.Title>
              <Card.Text>
              This project is on working stage
              </Card.Text>
               < Card.Img variant="bottom" src="Gws/gw1.jpeg" style={{ width: "100%" }} />
             

            </Card.Body>
            <Container>
              <DropdownButton id="dropdown-item-button" title="Dropdown button" variant="dark" menuVariant="dark">
             
                <Dropdown.ItemText   >Dropdown item text</Dropdown.ItemText>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">....</Dropdown.Item>
                
              </DropdownButton>
            </Container>
            </Card>
            
         

          </Offcanvas.Body>
        </Offcanvas>

        <div className="CARDS" style={{ borderBlock: "simple", borderWidth: 10, borderBlockColor: "black" }}>


          <Card className="Guitar_Cards_G1"

            style={{ width: '20rem', marginLeft: "8%", borderRadius: "10%", padding: "3%", height: "30%" }} >
            <Card.Header>Header</Card.Header>
            < Card.Img variant="bottom" src="Gws/gw1.jpeg" style={{ width: "100%" }} />
            <Card.Body style={{ backgroundColor: "black" }}>
              <Card.Title>Yamaha</Card.Title>
              <Card.Text>
               This project is on working stage
              </Card.Text>
              <Button variant="primary"  >Contact</Button>

            </Card.Body>
        <div>
          <br/>
          <div className="Media">            
            <Link id="1" to="https://www.youtube.com/@Guitar-wood-store">
            <AiFillYoutube style={{fontSize:"200%",color:"red"}}
            />
          
            </Link>
           
            <Link id="1" to='https://www.instagram.com/guitar_wood_store/' >
            <FaSquareInstagram  style={{fontSize:"200%",color:"dark-pink"}}
            />
            </Link>
            <Link id="1" to='https://web.facebook.com/muzikvalley' >
            <BsFacebook style={{fontSize:"200%",color:"blue"}}/>
            </Link>  
            </div>
            
            </div>
            
            
          </Card>


          <Card className="Guitar_Cards_G2"
            style={{ width: '20rem', marginLeft: "8%", borderRadius: "10%", padding: "3%", height: "30%" }} >
            <Card.Header>Header</Card.Header>
            < Card.Img variant="bottom" src="Gws/gw3.jpeg" style={{ backgroundColor: "black", width: "100%" }} />
            <Card.Body style={{ backgroundColor: "green" }}>
              <Card.Title>Yamaha</Card.Title>
              <Card.Text>
              This project is on working stage
              </Card.Text>
              <Button variant="danger"  >
             kkkk
              
              </Button>
              
            </Card.Body>
            
            <div>
          <br/>
          <div className="Media">            
            <Link id="1" to="https://www.youtube.com/@Guitar-wood-store">
            <AiFillYoutube style={{fontSize:"200%",color:"red"}}
            />
          
            </Link>
           
            <Link id="1" to='https://www.instagram.com/guitar_wood_store/' >
            <FaSquareInstagram  style={{fontSize:"200%",color:"dark-pink"}}
            />
            </Link>
            <Link id="1" to='https://web.facebook.com/muzikvalley' >
            <BsFacebook style={{fontSize:"200%",color:"blue"}}/>
            </Link>  
            </div>
            
            </div>
          </Card>



          <Card className="Guitar_Cards_G3"
            style={{ width: '20rem', marginLeft: "8%", borderRadius: "10%", padding: "3%", height: "30%" }} >
            <Card.Header>Header</Card.Header>
            < Card.Img variant="bottom" src="Gws/gw4.jpeg" style={{ backgroundColor: "black", width: "100%" }} />
            <Card.Body style={{ backgroundColor: "red" }}>
              <Card.Title>Yamaha</Card.Title>
              <Card.Text>
              This project is on working stage
              </Card.Text>
              <Button variant="primary"  >Contact</Button>

            </Card.Body>
            <div>
          <br/>
          <div className="Media">            
            <Link id="1" to="https://www.youtube.com/@Guitar-wood-store">
            <AiFillYoutube style={{fontSize:"200%",color:"red"}}
            />
          
            </Link>
           
            <Link id="1" to='https://www.instagram.com/guitar_wood_store/' >
            <FaSquareInstagram  style={{fontSize:"200%",color:"dark-pink"}}
            />
            </Link>
            <Link id="1" to='https://web.facebook.com/muzikvalley' >
            <BsFacebook style={{fontSize:"200%",color:"blue"}}/>
            </Link>  
            </div>
            
            </div>
          </Card>

          <br />

          <br></br>
          <Card className="Guitar_Cards_G4"
            style={{ width: '20rem', marginLeft: "8%", borderRadius: "10%", padding: "3%", height: "30%" }} >
            <Card.Header>Header</Card.Header>
            < Card.Img variant="bottom" src="Gws/gw5.jpeg" style={{ backgroundColor: "black", width: "100%" }} />
            <Card.Body style={{ backgroundColor: "white" }}>
              <Card.Title>Yamaha</Card.Title>
              <Card.Text>
              This project is on working stage
              </Card.Text>
              <Button variant="primary"  >Contact</Button>

            </Card.Body>
            <div>
          <br/>
          <div className="Media">            
            <Link id="1" to="https://www.youtube.com/@Guitar-wood-store">
            <AiFillYoutube style={{fontSize:"200%",color:"red"}}
            />
          
            </Link>
           
            <Link id="1" to='https://www.instagram.com/guitar_wood_store/' >
            <FaSquareInstagram  style={{fontSize:"200%",color:"dark-pink"}}
            />
            </Link>
            <Link id="1" to='https://web.facebook.com/muzikvalley' >
            <BsFacebook style={{fontSize:"200%",color:"blue"}}/>
            </Link>  
            </div>
            
            </div>
          </Card>
          <br />
          <Card className="Guitar_Cards_G5"
            style={{ width: '20rem', marginLeft: "8%", borderRadius: "10%", padding: "3%", height: "30%" }} >
            <Card.Header>Header</Card.Header>
            < Card.Img variant="bottom" src="Gws/gw5.jpeg" style={{ backgroundColor: "black", width: "100%" }} />

            <Card.Body style={{ backgroundColor: "white" }}>
              <Card.Title>Yamaha</Card.Title>
              <Card.Text>
              This project is on working stage
              </Card.Text>
              <Button variant="primary"  >Contact</Button>

            </Card.Body>
            <div>
          <br/>
          <div className="Media">            
            <Link id="1" to="https://www.youtube.com/@Guitar-wood-store">
            <AiFillYoutube style={{fontSize:"200%",color:"red"}}
            />
          
            </Link>
           
            <Link id="1" to='https://www.instagram.com/guitar_wood_store/' >
            <FaSquareInstagram  style={{fontSize:"200%",color:"dark-pink"}}
            />
            </Link>
            <Link id="1" to='https://web.facebook.com/muzikvalley' >
            <BsFacebook style={{fontSize:"200%",color:"blue"}}/>
            </Link>  
            </div>
            
            </div>
          </Card>
          <br />
          <Card className="Guitar_Cards_G6"
            style={{ width: '20rem', marginLeft: "8%", borderRadius: "10%", padding: "3%", height: "30%" }} >
            <Card.Header>Header</Card.Header>
            < Card.Img variant="bottom" src="Gws/gw5.jpeg" style={{ backgroundColor: "black", width: "100%" }} />
            <Card.Body style={{ backgroundColor: "white" }}>
              <Card.Title>Yamaha</Card.Title>
              <Card.Text>
              This project is on working stage.
              </Card.Text>
              <Button variant="primary"  >Contact</Button>

            </Card.Body>
            <div>
          <br/>
          <div className="Media">            
            <Link id="1" to="https://www.youtube.com/@Guitar-wood-store">
            <AiFillYoutube style={{fontSize:"200%",color:"red"}}
            />
          
            </Link>
           
            <Link id="1" to='https://www.instagram.com/guitar_wood_store/' >
            <FaSquareInstagram  style={{fontSize:"200%",color:"dark-pink"}}
            />
            </Link>
            <Link id="1" to='https://web.facebook.com/muzikvalley' >
            <BsFacebook style={{fontSize:"200%",color:"blue"}}/>
            </Link>  
            </div>
            
            </div>
          </Card>
        </div>

         


      </>
     
    </body>
  );
}; export default Guitar;