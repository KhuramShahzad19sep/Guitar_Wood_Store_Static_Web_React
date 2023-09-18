import Toast from 'react-bootstrap/Toast';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { RegExp } from 'react';
import {SiGnuprivacyguard} from 'react-icons/si'
function Toast_Function() {
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//  const ValidInformation=()=>{
//     if(username.value==""){
//         alert("Enter User Name");
//     }else if(username.value=value){
//         alert("you entered acurate name");
//     }else if(email.value==""){
//         alert("Enter Email");
//     }else if(email.value=email){
//         alert("you entered acurate email");
//     }else if(pas.value==""){
//         alert("Enter Pasword");
//     }else (pas.value=="pas")
//     {
//         alert("Login")
//     }
//     return true;
//     };
  return (
   
   <>
      {[
        'Primary',
        // 'Secondary',
        // 'Success',
        // 'Danger',
        // 'Warning',
        // 'Info',
        // 'Light',
        // 'Dark',
      ].map((variant, idx) => (
        <Toast
          className="d-inline-block m-1"
          bg={variant.toLowerCase()}
          key={idx}
        >
          <Toast.Header>
          
            <strong className="me-auto">

            <h2><SiGnuprivacyguard/></h2>
        
            </strong>
          
          </Toast.Header>
          <Toast.Body className={variant === 'Dark' && 'Dark'} style={{backgroundColor:"black"}}>
          <Form className='Class1' style={{backgroundColor:"black"}}>
          <input type='text' placeholder='user name ' id='U1'/>
          <br/>
         <br/>
         <input type='email' placeholder='email' required ='email is require' id='Email'/>
          <br/>
          <br/>
          <input type='pasword' placeholder='pasword' id='Pasword' />
          <br/>
          <br/>
          <input type='submit'  />

            </Form>
          
          </Toast.Body>
         

       
         <Toast.Body className={variant === 'Dark' && 'Dark'}>
       
            </Toast.Body>
         
          

        </Toast>
      ))}
    </>
  );
}

export default Toast_Function;