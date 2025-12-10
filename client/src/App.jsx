import { useState } from 'react'
import Topbar from "./components/Topbar";
import Slider from "./Slider/Slider";
import FreeResources from './free/Freeresources';

import './App.css'


function App() {

  return (
    <>
    <Topbar/>
    <Slider/>
    <FreeResources/>
    </>
  )
}

export default App
