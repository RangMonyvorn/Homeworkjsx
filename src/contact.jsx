import React from 'react'
// import Slider from './slider.jsx'
import Map from './image/map.jpg'
const contact = () => {
  return (
    <>
    <h4 className='h4text'>Contact Me 💗</h4>
    <div className='Contact-header'>
       <div className="contact-left">
            <div className="item">
                 <div className="icons"><i class="fa-solid fa-location-dot"></i></div>
                 <p>This is Address For Me , Place Contact Me!</p>
            </div>
            <div className="item">
                 <div className="icons"><i class="fa-solid fa-earth-americas"></i></div>
                 <p>This is File Address in Online , Place Contact Me!</p>
            </div>
            <img src={Map} alt="" />
            
            
            
       </div>

       <div className="contact-right">
          <form action="">


               <div className="form-item">
                    <div className="items-text">
                    <p>Enter Your Name </p>
                    <div className="text-icons"><i class="fa-solid fa-user"></i></div>
                    </div>

                    <input type="text" id='text' placeholder='Enter your Name ' required/>
               </div>


               <div className="form-item">
                    <div className="items-text">
                    <p>Enter Your Email </p>
                    <div className="text-icons"><i class="fa-regular fa-envelope"></i></div>
                    </div>

                    <input type="email" id='email' placeholder='Enter your Email' required/>
               </div>



               <div className="form-item">
                    <div className="items-text">
                    <p>Enter Your PassWords </p>
                    <div className="text-icons"><i class="fa-solid fa-lock"></i></div>
                    </div>

                    <input type="password" id='password' placeholder='Enter your Passwords' required/>
               </div>



               <div className="form-item">
                    <div className="items-text">
                    <p>Enter Your Date</p>
                    <div className="text-icons"><i class="fa-solid fa-calendar-day"></i></div>
                    </div>

                    <input type="date" id='date' placeholder='Enter your Date' required/>
               </div>






               <textarea name="" id="" placeholder='Enter Your Felling of Your For Me!' required></textarea>

               <button type='submit'>Submit</button>
          </form>
            
       </div>
    </div>







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
  )
}

export default contact;
