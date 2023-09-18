import React from "react";
import Head from "../Header and Footer/Header";
import Main from "../Main";
import Form from 'react-bootstrap/Form';
const MAIN_Page=()=>{
return(
    <body className="B1">
     
     <div className="Animation" >
     <ul>
            
            <li>Guiar</li>
            <li>Wood</li>
            <li>Center</li>
            
         
        </ul>
        
     </div>
    <>
    <Form className="control" style={{padding:"1px"}} >
   
   <Form className="form-control" >
   <Form className="form-control" style={{backgroundColor:"gray"}}>
   <Head/>
   
   <Main/>
   
   </Form>
   
   </Form>
   
    </Form>
    
    </>
    </body>
);
};export default MAIN_Page;