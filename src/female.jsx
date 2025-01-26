import React from 'react'
import Slider from './slider.jsx'
import Femaleimage from './femaleimage.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const female = () => {
  return (
    <>
        <section>
          <Slider />
        </section>
        <section>
          <Routes>
            <Route path='/' element={<Femaleimage />}></Route>
          </Routes>

        </section>
      
    </>
  )
}

export default female;
