import { useState } from 'react'
import Topbar from "./components/Topbar";
import Slider from "./Slider/Slider";
import FreeResource from './free/FreeResource';

import './App.css'


function App() {

  return (
    <>
    <Topbar/>
    <Slider/>
    <FreeResource/>
    </>
  )
}

export default App
