"use client" 
import { Navbar } from '../Navbar/navbar';
import '../header/Header.css';
import bgImg from "../../../public/banner.mp4"
export const Header = () => {

  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1 // Video boshqa kontent ortida bo'lishi uchun
  };
  
 
  return (
   <div className='header_wrapper'>
    <video autoPlay loop muted style={videoStyle}>
        <source src={bgImg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

   <Navbar></Navbar>
<header className="container mx-auto sm-text-center pt-36">
  
  <div className="header_title  py-20">
    
    <h1 className=' text-6xl'>
DISCOVER</h1>
<h1 className='text-6xl pt-3'>
INVEST
</h1>

<p className='py-5'>Perfection in everything</p>
<div className="header_btn">
                <button className='button'>
                    projects
                </button>
                <button className='button2'>
                    contacts
                </button>
            </div>
  </div>
</header>
   </div>
  )
}
