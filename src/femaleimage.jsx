import React from 'react'
import img7 from "./image/nike grils 1.png";
import img8 from "./image/nike grils2.png";
import img9 from "./image/nike grils 3.png";
import img10 from "./image/nike grils 4.webp";
import img11 from "./image/nike grils 5.png";
import img12 from "./image/nike grils 6.jpg";
import { useNavigate, Link} from 'react-router-dom';
const femaleimage = () => {
    const navigate = useNavigate();
    const Image=[

        { id: 1, src: img7, name: "Nike Zoom" },
        { id: 2, src: img8, name: "Nike" },
        { id: 3, src: img9, name: "Nikenew" },
        { id: 4, src: img10, name: "Nike" },
        { id: 5, src: img11, name: "Nike Zoom" },
        { id: 6, src: img12, name: "Nike Zoom" },
    ];
    const toggleimage = (id) => {
        navigate(`/femaleimage/${id}`);
    }

  return (
    <>
      <div className="female">
        <h4>All Product In The Stock 💗</h4>
        <div className="img-female">
            <div className="img-items">
                {Image.map((img) => (
                    <Link key={img.id} to={`/femaleimage/${img.id}`}>
                        <img src={img.src} alt=""  onClick={toggleimage(img.id)} />
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

export default femaleimage
