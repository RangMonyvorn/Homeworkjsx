import React from 'react';
import img1 from "./image/nike 1.png";
import img2 from "./image/nike 4.png";
import img3 from "./image/nike 2.png";
import img4 from "./image/nike 3.png";
import img5 from "./image/nike 5.webp";
import img6 from "./image/nike 6.webp";
import { useNavigate, Link} from 'react-router-dom';
import "./cssformale.css";
const maleimage = () => {
    const navigate = useNavigate() ;


    const Images = [
       { id: 1, src: img1, name: "Nike Zoom" },
       { id: 2, src: img2, name: "Nike" },
       { id: 3, src: img3, name: "Nikenew" },
       { id: 4, src: img4, name: "Nike" },
       { id: 5, src: img5, name: "Nike Zoom" },
       { id: 6, src: img6, name: "Nike Zoom" }
    ];

    const toggleimage = (id) => {
        navigate(`/details/${id}`);
    }




  return (
    <>
      <div className="maleimg">
        <h2>All Product In the Stock For Male</h2>


        <div className="allimage">
            <div className="male-img">
                {Images.map((img)=> (
                    <Link key={img.id} to={(`/details/${img.id}`)}>
                        <img src={img.src} onClick={toggleimage(img.id)} />
                    </Link>
                ))}

            </div>

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

export default maleimage
