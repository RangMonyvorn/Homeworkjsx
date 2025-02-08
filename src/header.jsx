import React, { useState } from "react";
import imglogo from "./image/Nike gif2.gif";
import { NavLink } from "react-router-dom";
import "./App.css";

function Header() {




   const [showLoginForm , setShowLoginForm] = useState(false);
   const [showSignupForm , setShowSignupForm] = useState(false);

   const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowSignupForm(false);
   }
   const toggleSignupForm = () =>{
    setShowSignupForm(!showSignupForm);
    setShowLoginForm(false);
   }



  return (
    <>
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={imglogo} alt="Brand Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon color"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className='nav-link' >
                <NavLink to="/HOME"  className={({isActive})=>(isActive ? 'active': '')} >
                  HOME</NavLink>
              </li>

              <li className='nav-link'>
                <NavLink to="/MALE"  className={({isActive})=>(isActive ? 'active': '')}>
                MALE
                </NavLink>
               </li>

               <li className='nav-link'>
                <NavLink to="/FEMALE"  className={({isActive})=>(isActive ? 'active': '')}>
                  FEMALE</NavLink>
               </li>

               <li className='nav-link'>
                <NavLink to="/CONTACT" className={({isActive})=>(isActive ? 'active': '')}>
                  CONTACT</NavLink>
               </li>

            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <button className="btn btn-outline-light" type="button" onClick={toggleLoginForm}>
                Login
              </button>
              
            </form>
          </div>
        </div>
      </nav>

    </header>








      {showLoginForm && (
        <div className="login-form">
          <div className="login-list">
            <h2>LOGIN</h2>
            <form action="" className="form">
              <div className="form-item">
                <div className="little-login">
                  <h3>EMAIL OR USER NAME</h3>
                  <div className="login-icon">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email or User Name"
                  required
                />
              </div>



              <div className="form-item">
                <div className="little-login">
                  <h3>PASSWORDS</h3>
                  <div className="login-icon">
                  <i class="fa-solid fa-lock"></i>
                  </div>
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your Passwords"
                  required
                />
              </div>














              {/* Go to sign up form this onclick */}





              <div className="sing-upform">
                <div className="input-text">
                  <input type="checkbox" id="checkbox" required />
                  <span>Remember Me</span>
                </div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSignupForm();
                  }}
                >
                  Forget Password
                </a>
              </div>

              <div className="btns">
                <button type="submit">LOGIN</button>
              </div>
            </form>
          </div>
        </div>
      )}










      {/* Conditional Sign Up Form */}
      {showSignupForm && (
        <div className="signup-form">
          <div className="signup-list">
            <h2>SIGN UP</h2>
            <p>welcome back to Signup</p>

            <form action="" className="form">
            <div className="form-item">
                <div className="little-signup">
                  <h3>USER NAME</h3>
                  <div className="login-icon">
                  <i class="fa-solid fa-user"></i>
                  </div>
                </div>
                <input
                  type="text"
                  id="text"
                  placeholder="Enter your User Name"
                  required
                />
              </div>



              <div className="form-item">
                <div className="little-signup">
                  <h3>EMAIL</h3>
                  <div className="login-icon">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  required
                />
              </div>


              <div className="form-item">
                <div className="little-signup">
                  <h3>PASSWORDS</h3>
                  <div className="login-icon">
                  <i class="fa-solid fa-lock"></i>
                  </div>
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your Passwords"
                  required
                />
              </div>



            {/* back to form login */}





              <div className="sing-upform">
                <div className="input-text">
                  <input type="checkbox" id="checkbox" required />
                  <span>Remember Me</span>
                </div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleLoginForm();
                  }}
                >
                 #LoginForm
                </a>
              </div>





              <div className="btns">
                <button type="submit">SIGN UP</button>
              </div>
            </form>
          </div>
        </div>
      )}


    </>
  );
}

export default Header;
