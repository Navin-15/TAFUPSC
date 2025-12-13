// import { useState } from 'react'
// import { Routes, Route } from "react-router-dom";
// import Topbar from "./components/Topbar";
// import Slider from "./Slider/Slider";
// import FreeResource from './free/FreeResource';
// import Batches from './Batches/Batches'
// import Centers from './Center/Centers';
// import Download from './downlaod/Download';

// //Routing Resources
// import AboutUs from './Pages/AboutUs';

// import './App.css'

// function App() {
//   return (
//     <>
//     <Topbar/>
//     <Slider/>
//     <FreeResource/>
//     <Batches/>
//     <Centers/>
//     <Download/>
//     </>
//   )
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
