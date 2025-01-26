import React from "react";
import { BrowserRouter as Router, Routes, Route ,Navigate } from "react-router-dom";
import Header from "./header.jsx"; // Adjust the path if needed
import Home from "./home.jsx";
import Male from "./male.jsx";
import Female from "./female.jsx";
import Contact from "./contact.jsx";
import HomeDetail from "./homeDetail.jsx";
import MaleDetail from "./maleDetails.jsx";
import FemaleDetails from "./femaleDetails.jsx";
function App() {
  return (
    <>
      <>
      <Header />
      <Routes>
        {/* Redirect the root path to Home */}
        <Route path="/" element={<Navigate to="/HOME" />} />
        <Route path="/HOME" element={<Home />} />
        <Route path="/MALE" element={<Male />} />
        <Route path="/FEMALE" element={<Female />} />
        <Route path="/CONTACT" element={<Contact />} />

        {/* Link Get Jol In Detail in home page */}
        
        <Route path='/detail/:id' element={<HomeDetail />}></Route>
        <Route path='/details/:id' element={<MaleDetail />}> </Route>
        <Route path="/femaleimage/:id" element={<FemaleDetails />}></Route>

      </Routes>
      </>
    </>
  );
}

export default App;
