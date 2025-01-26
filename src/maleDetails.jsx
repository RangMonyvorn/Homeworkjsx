
import React from 'react';
import img1 from "./image/nike 1.png";
import img2 from "./image/nike 4.png";
import img3 from "./image/nike 2.png";
import img4 from "./image/nike 3.png";
import img5 from "./image/nike 5.webp";
import img6 from "./image/nike 6.webp";
import { useParams, useNavigate } from "react-router-dom";
const maleDetails = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    
    const images = [
        { id: 1, src: img1, name: "Nike Zoom" ,price: 200 },
        { id: 2, src: img2, name: "Nike" ,price: 300 },
        { id: 3, src: img3, name: "Nikenew" ,price: 240 },
        { id: 4, src: img4, name: "Nike" ,price: 400 },
        { id: 5, src: img5, name: "Nike Zoom" ,price: 500 },
        { id: 6, src: img6, name: "Nike Zoom" ,price: 600 },
     ];


    const image = images.find((img) => img.id == id);
    

  return (
    <>

    <div className="maledetails">
    <button onClick={ () => navigate(-1)} style={{ marginBottom: "20px" }}>
        Back
    </button>

        <div className="Details">
          <div className="detail-left">
          <img src={image.src} />
          </div>
          <div className="detail-right">
            <h3>Place Welcome To Page Me !</h3>
            <p>This is detail of Product in the Store </p>
            <div className="name-product">
            <h4>{image.name}</h4>
            <h5>{image.price} $</h5>
            </div>

            <div className="size">
              <span>L</span>
              <span>XL</span>
              <span>S</span>
            </div>
            <button>BUY NOW</button>
          </div>

        </div>

        
      {/* </div> */}
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
  );
}

export default maleDetails;
