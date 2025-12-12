import { useState } from 'react'
import Topbar from "../../src/components/Topbar";
import Slider from "../../src/Slider/Slider";
import FreeResource from '../../src/free/FreeResource';
import Batches from '../../src/Batches/Batches'
import Centers from '../../src/Center/Centers';
import Download from '../../src/downlaod/Download';
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
