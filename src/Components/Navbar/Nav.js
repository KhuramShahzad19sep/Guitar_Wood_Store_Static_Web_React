import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from "react-router-dom";
import Foot from "../Header and Footer/Footer";
import Image from 'react-bootstrap/Image';
// import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";
import NavLink from "react-bootstrap";
import{PiGuitarThin} from 'react-icons/pi'

const NAVBAR = () => {
  const nav = useNavigate();
  const Click = () => {
    nav('/Contact')

  }
  return (
    <>
     
      <a class="navbar-brand" href="#"><img  width="100px"/>
      
      </a>
      <Navbar style={{marginRight:""}} bg="dark" data-bs-theme="dark"  >
     
        <Container>
      <Nav style={{marginRight:""}}>
<Navbar.Brand href="/">GWC
          
          </Navbar.Brand>
      </Nav>
        
          {/* <Image src="SVG/logo.svg"><Image> */}
         
          <Nav className="me-auto" >
            <Nav.Link href='/About'  >About us</Nav.Link>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Our Products"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/Guitar">Guitar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Voilin
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Uculele</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>

  );
}; export default NAVBAR;