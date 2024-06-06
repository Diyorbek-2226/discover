import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Navbar } from './components/Navbar/navbar';
import { Header } from './components/header/Header';
import { Abaut } from './components/Abaut/Abaut';
import { Our } from './components/Our/Our';
import Ourslider from './components/Oursliders/OurSlider';
import { Ourprojects } from './components/Our projects/Ourprojects';
import Company from './components/Company/Company';
import { Contacts } from './components/Contacts/Contacts';
import { Abautcomponents } from './maincomponents/abautcomponents/Abautcomponents';
import { Projectcomponents } from './maincomponents/Projectscomponents/Projectcomponents';
import { News } from './maincomponents/News/News';
import { Contactcomponents } from './maincomponents/Contactscomponents/Contactcomponents';
import {Routes, Route} from 'react-router-dom'
import Home from './maincomponents/home/Home';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      
   
      <Routes>
      <Route path='/' element={<Home/>}/>
        
        <Route path='/about' element={<Abautcomponents/>}/>
        <Route path='/project' element={<Projectcomponents/>}/>
        <Route path='/news' element={<News/> }/>
        <Route path='/contact' element={ <Contactcomponents/>}/>
      </Routes>
      {/* <Abautcomponents/> */}
    
      {/* <Projectcomponents/> */}
      {/* <News/> */}
      {/* <Contactcomponents/> */}
      
    </div>
  );
}

export default App;
