import { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Navbar } from './components/Navbar/navbar';
import { Header } from './components/header/Header';
import { Abaut } from './components/Abaut/Abaut';
import { Our } from './components/Our/Our';
import Ourslider from './components/Oursliders/OurSlider';
import { Ourprojects } from './components/Our projects/Ourprojects';


function App() {
  
  return (
    <>

      {/* <Navbar/> */}
     
      <Header/>
      <Abaut/>
      <Our/>
      <Ourslider/>
      <Ourprojects/>

      
     
      
    </>
  );
}

export default App;
