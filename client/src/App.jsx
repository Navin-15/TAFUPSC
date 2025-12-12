import { useState } from 'react'
import Topbar from "./components/Topbar";
import Slider from "./Slider/Slider";
import FreeResource from './free/FreeResource';
import Batches from './Batches/Batches'
import Centers from './Center/Centers';
import Download from './downlaod/Download';
import './App.css'



function App() {

  return (
    <>
    <Topbar/>
    <Slider/>
    <FreeResource/>
    <Batches/>
    <Centers/>
    <Download/>
    </>
  )
}

export default App
