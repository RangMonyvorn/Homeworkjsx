import React from 'react';
import img1 from "./image/nike 1.png";
import img2 from "./image/nike 4.png";
import img3 from "./image/nike 2.png";
import img4 from "./image/nike 3.png";
import img5 from "./image/nike 5.webp";
import img6 from "./image/nike 6.webp";

import img7 from "./image/nike grils 1.png";
import img8 from "./image/nike grils2.png";
import img9 from "./image/nike grils 3.png";
import img10 from "./image/nike grils 4.webp";
import img11 from "./image/nike grils 5.png";
import img12 from "./image/nike grils 6.jpg";
import { useNavigate, Link} from 'react-router-dom';

const HomeImage = () => {
  const navigate = useNavigate();

  const Images = [
    { id: 1, src: img1, name: "Nike Zoom" },
    { id: 2, src: img2, name: "Nike" },
    { id: 3, src: img3, name: "Nikenew" },
    { id: 4, src: img4, name: "Nike" },
    { id: 5, src: img5, name: "Nike Zoom" },
    { id: 6, src: img6, name: "Nike Zoom" },
    { id: 7, src: img7, name: "Nike Zoom" },  
    { id: 8, src: img8, name: "Nike" },
    { id: 9, src: img9, name: "Nikenew" },
    { id: 10, src: img10, name: "Nike" },
    { id: 11, src: img11, name: "Nike Zoom" },
    { id: 12, src: img12, name: "Nike Zoom" },

  ];



  const toggleDetailProduct = (id) => {
    navigate(`/detail/${id}`);
  };



  
  return (
  
    <div className="homeimage">
      <h2>All Product In The Stock</h2>
      <h5>
        See all <i className="fa-solid fa-arrow-right"></i>
      </h5>

      <div className="allimage">
        <div className="img-home">
          {Images.map((image) => (
            // Link for Click Imgae In Home page
            <Link key={image.id} to={`/detail/${image.id}`}>
            <img 
              
              src={image.src}
              onClick={() => toggleDetailProduct(image.id)}
              style={{ cursor: "pointer", margin: "10px", border: "1px solid #ccc" }}
            />
            </Link>
          ))}
          
        </div>
      </div>

    </div>

  );
};

export default HomeImage;
