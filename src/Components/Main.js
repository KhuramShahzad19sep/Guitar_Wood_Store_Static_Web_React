import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Head from "./Header and Footer/Header";
import Foot from "./Header and Footer/Footer";
import moment from "moment";
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import NAVBAR from "./Navbar/Nav";
import Form from 'react-bootstrap/Form';
import {useNavigate } from "react-router-dom";
import CONTACT from "./Contact Us/Contact";
import Ratio from 'react-bootstrap/Ratio';
const Main = () => {
  const nav=useNavigate();
  const Click=()=>{
    nav('/Contact')
    
   }
  return (
    <body style={{width:"", justifyContent:"center"}} >
      <div>
        <Carousel data-bs-theme="dark">
          <img src="Gws/gw1.jpeg" className="image"></img>

          <Carousel.Item>
            <Card className="Card" style={{ width: '20rem', marginLeft: "40%", borderRadius: "10%", padding: "3%", height: "30%" }} >
              <Card.Img variant="bottom" src="Gws/gw6.jpeg" style={{ width: "100%" }} />
              <Card.Body>
                <Card.Title>Yamaha</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary" onClick={()=>Click()} >Contact</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ width: '20rem', marginLeft: "40%", borderRadius: "10%", padding: "3%" }} className="Card">
              <Card.Img variant="top" src="Gws/gw5.jpeg" style={{ width: "64%", marginLeft: "15%" }} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>



      </div>
    </body>
  );
}; export default Main;