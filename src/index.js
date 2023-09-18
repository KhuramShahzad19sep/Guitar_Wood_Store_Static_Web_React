import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './Components/Main';
import moment from 'moment';
import Foot from './Components/Header and Footer/Footer';
// import Main from './Components/Main';
// import {  Routes, Route } from "react-router-dom";
import Guitar from './Components/Guitars/GUITAR';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
   <BrowserRouter>
   <App/>
   {/* <Guitar/> */}
   </BrowserRouter>
    
    

     {/* <App/> */}
   
    {/* <Main /> */}
  
   <p style={{textAlign:"center",backgroundColor:"silver"}}> {moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
