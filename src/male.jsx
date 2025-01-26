import React from 'react'
import imglogo from './image/Nike gif2.gif'
import Slider from './slider.jsx';
import Maleimage from './maleimage.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const male = () => {
  return (
    <>
      <section>
            <Slider />
      </section>
      <section>
          <Routes>
              <Route path='/' element={<Maleimage />} ></Route>
          </Routes>
      </section>
    </>
  );
}

export default male;
