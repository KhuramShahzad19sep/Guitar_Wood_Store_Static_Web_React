import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
// import NAVBAR from './Components/Navbar/Nav';
import Main from './Components/Main';
import Foot from './Components/Header and Footer/Footer';
import NAVBAR from './Components/Navbar/Nav';
import Head from './Components/Header and Footer/Header';
import CONTACT from './Components/Contact Us/Contact';
import MAIN_Page from './Components/Main Page/MAIN_PAGE';
import Guitar from './Components/Guitars/GUITAR';
import {AiFillYoutube} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {FaSquareInstagram}  from 'react-icons/fa6'
// import HOME from './Components/Contact Us/Contact';
// import Main from './Components/Main';

function App() {
  return (
    <body>
      <div className="App">

      <NAVBAR/>
        <>

          
         
          <Routes>
        <Route exact path='/' element={<MAIN_Page />} />

       
            <Route path='/About' element={<Foot />} />
            <Route path='/Guitar' element={<Guitar/>} />
            <Route path='/' element={<AiFillYoutube/>} />
            <Route path='https://web.facebook.com/muzikvalley' element={<BsFacebook/>} />
            <Route path='https://www.instagram.com/guitar_wood_store/' element={<FaSquareInstagram/>} />
          </Routes>
          

        </>

      </div>
    </body>
  );
}

export default App;
