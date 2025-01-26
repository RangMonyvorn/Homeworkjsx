import React from 'react'
import img7 from "./image/nike grils 1.png";
import img8 from "./image/nike grils2.png";
import img9 from "./image/nike grils 3.png";
import img10 from "./image/nike grils 4.webp";
import img11 from "./image/nike grils 5.png";
import img12 from "./image/nike grils 6.jpg";
import { useParams, useNavigate } from "react-router-dom";
const femaleDetails = () => {
    const Image = [
         { id: 1, src: img7, name: "Nike Zoom" ,price: 230  },
         { id: 2, src: img8, name: "Nike"  ,price: 300 },
         { id: 3, src: img9, name: "Nikenew" ,price: 320  },
         { id: 4, src: img10, name: "Nike" ,price: 250  },
         { id: 5, src: img11, name: "Nike Zoom" ,price: 230  },
         { id: 6, src: img12, name: "Nike Zoom" ,price: 350  },

    ];

    const {id} = useParams();
    const navigate = useNavigate();

    const image = Image.find((img) => img.id == id);

  return (
    <>
      <div className="femaledetail">
        <button onClick={() => navigate(-1)} style={{ marginBottom: "20px" }}>
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
    </>
  )
}

export default femaleDetails
