import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Footer.css';
import Spinner from 'react-bootstrap/Spinner';
import { Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
const Foot=()=>{
    return(
   <body>
       <Form className='control'>
       <Form className='form-control'>
       <div className='F1'>
        
        <Card className="text-center" style={{borderBlock: "dotted",borderWidth:10}}>
       
        <Card.Header style={{backgroundColor:"black"}} >
        <Card.Title style={{color:"white",font:"50%"}}>Guitar Wood Store</Card.Title>
        <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      {/* <Spinner animation="grow" variant="light" /> */}
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header> Portfolio
        
        </Accordion.Header>
        
        <Accordion.Body>
        <Spinner animation="grow" />
       <div>
       <section>
          <ul> <p style={{fontWeight:"bolder",fontSize:"30px"}} >Founder : </p>
            <li>Khuram Shahzad</li>
          
          </ul>
          <p style={{textDecoration:"2px"}}> This project is working as an demo stage of e-commerece static Web Site  </p>
          
         </section>
        
       </div>
          <Card.Body>
          <Card.Text className="CT1">
          <img src="Gws/gw2.jpeg" className="image2"></img>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>

        </Accordion.Body>
      </Accordion.Item>
     


    </Accordion>
        </Card.Header>
        
        <Card.Footer className="text-muted">
          <p className="P1">
          Guitar Wood Store
          </p>
          </Card.Footer>
      </Card>
      
      </div>
       </Form>

       </Form>
     
      </body>
    );
};export default Foot;
  