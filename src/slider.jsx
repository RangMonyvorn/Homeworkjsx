import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import imglogo from './image/people nike.gif';
import imglogo2 from './image/Nike gif.gif';
import imglogo3 from './image/Nike gif2.gif';

const CarouselComponent = () => {
  return (
    <Carousel>
      {/* Slide 1 */}
      <Carousel.Item
        className="slider1"
        style={{
          height: '90vh',
          backgroundImage: `url(${imglogo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Carousel.Caption>
          <h3>Product in the Stock</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>



      {/* Slide 2 */}
      <Carousel.Item
        className="slider2"
        style={{
          height: '90vh',
          backgroundImage: `url(${imglogo2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Carousel.Caption>
          <h>Product in the Stock</h>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>




      {/* Slide 3 */}
      <Carousel.Item
        className="slider3"
        style={{
          height: '90vh',
          backgroundImage: `url(${imglogo3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Carousel.Caption>
          <h3>Product in the Stock</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  ); 
};

export default CarouselComponent;
