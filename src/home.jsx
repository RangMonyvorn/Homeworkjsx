import React from 'react'
import imglogo from "./image/people nike.gif";
import imglogo2 from "./image/Nike gif.gif";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homeimage from './homeimage.jsx';
import HomeDetail from './homeDetail.jsx';
import Carousel from 'react-bootstrap/Carousel';
import Homeslider from './slider.jsx';

const home = () => {

  return (

    <>
    
      <section>
      {/* <img src={imglogo} alt="" /> */}
      <Homeslider />
      
      </section>

      <section className=''>
            
              <Routes>
                <Route path='/' element={<Homeimage />}></Route>
                {/* <Route path='/detail/:id' element={<HomeDetail />}></Route> */}
              </Routes>
            
      </section>
      <div className="contact-home">
        <div className="contact-item">
          <h2>Contact Me !</h2>
          <div className="contact-list">
            <li>
              Phone Number : <i class="fa-solid fa-phone"></i>
            </li>
            <li>0888673524</li>
            <li>
              Email : <i class="fa-regular fa-envelope"></i>
            </li>
            <li>monyvornrang89@gmail.com</li>
          </div>
        </div>
        <div className="contact-item">
          <h2>Website Me !</h2>
          <div className="contact-list">
            <li>about</li>
            <li>product</li>
            <li>male</li>
            <li>female</li>
            <li>contact</li>
          </div>
        </div>
        <div className="contact-item">
          <h2>Team Member !</h2>
          <div className="contact-list">
            <li>Team family</li>
            <li>Policy</li>
            <li>Member</li>
            <li>other</li>
          </div>
        </div>
        <div className="contact-item">
          <h2>Contact Online !</h2>
          <div className="contact-list">
            <div className="contact-icons">


              <li data-label="Facebook">
                <i class="fa-brands fa-facebook"></i>
              </li>
              <li data-label="Telegram">
                <i class="fa-brands fa-telegram"></i>
              </li>
              <li data-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
              </li>
              <li data-label="GitHub">
                <i class="fa-brands fa-github"></i>
              </li>
              <li data-label="Messenger">
                <i class="fa-brands fa-facebook-messenger"></i>
              </li>

            
            </div>
          </div>
        </div>
      </div>







    </>
  );
}

export default home;
