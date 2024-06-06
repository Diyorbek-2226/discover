import { Contacts } from '../../components/Contacts/Contacts';
import { Navbar } from '../../components/Navbar/navbar';
import '../../components/header/Header.css';
import bgi from '../../assets/abautpage.jpg';
import simg from '../../assets/bg-company.jpg'
import fon1 from '../../components/img/abaut.jpg'
import "./about.css"
export const Abautcomponents = () => {
    return (
        <>
            <div className='header_wrapper1' style={{height:"auto"}}>
                <img src={bgi} alt="Background" className='background_image1'  />
            <Navbar />
            
                <header className="container mx-auto sm-text-center pt-36">
                    <div className="header_title1 py-20" style={{zIndex:"1000"}}>
                        <h1 className='text-6xl font-bold'>ABOUT</h1>
                        <h1 className='text-6xl pt-3 font-bold'>COMPANY</h1>
                        <p className=' py-5 text-sm'>
                            We don't just create projects, we create new opportunities. By building state-scale
                            <br /> facilities, we are building the future. We care about the environment:
                        </p>
                        <button className='button my-8'>Taqdimotni yuklash</button>
                    </div>
                </header>
                <div data-aos="zoom-in-right" className="about-left2 py-40 container mx-auto flex atems-center justify-between">
           <div className="title_about w-full ">
           <h1>About</h1>
            <h1 className='hx'>Company</h1>
           </div>
           <div data-aos="fade-up-left" className="rasm_abaut w-full">
            <img src={simg} alt="" />
            <p data-aos="flip-down" className='py-4'>We don't just create projects, we create new opportunities. By building state-scale facilities, we are building the  <br />
            future. We care about the environment: the company takes full responsibility for the environmental aspects <br />
  related to the construction and operation of buildings and infrastructure.
</p>
<button className='button2 mt-8 '> projects</button>
           </div>
          </div>
          <div className="ourmision container mx-auto">
           <div className="url_about">
           <ul className='flex items-center justify-between' >
            <li data-aos="fade-up-right" className='left-about w-full'>
           <h1 className='text-2xl font-bold'>1 Our mission</h1>
            <p className='py-8 ps-4'>Our mission We introduce the most advanced <br />
             technologies in construction in Uzbekistan and create <br /> 
             modern design solutions. Relying on first-class workers, <br />
              we build affordable housing and industrial buildings for <br />
               many years.</p>
            </li>
            <li data-aos="fade-up-left" className='w-full mt-52'> <img className='w-full h-80' src={fon1} alt="" /></li>
           </ul>
           <ul className='flex items-center justify-between' >
            <li data-aos="fade-up-right" className='left-about w-full'>
           <h1 className='text-2xl font-bold'>2 Our Vision</h1>
            <p className='py-8 ps-4'>Creation of the best project company in Central Asia, <br />
             which provides an opportunity to: - Society - to improve <br /> 
             the standard of living of people by setting high <br /> standards in work. - Clients - to <br />
              enjoy joint activities, to build long-term and open relationships. - Employees - <br /> constant growth,</p>
            </li>
            <li data-aos="fade-up-left" className='w-full mt-52'> <img className='w-full h-80' src='https://di.uz/img/about/m-2.jpg' alt="" /></li>
           </ul>
           <ul className='flex items-center justify-between' >
            <li data-aos="fade-up-right" className='left-about w-full'>
           <h1 className='text-2xl font-bold'>3 Our values</h1>
            <p className='py-8 ps-4'>Our values Since the founding (LLC) "Discover Invest" in <br />
             2008, we have been working only with professionals. Our <br />
              specialists use advanced technologies and an <br />
               innovative approach to business.Regardless of the time <br />
                and place of operation, we remain committed to our <br /> values: staff and safety, continuous improvement and <br /> the trust of our customers.</p>
            </li>
            <li data-aos="fade-up-left" className='w-full mt-52'> <img className='w-full h-80' src='https://di.uz/img/about/m-3.jpg' alt="" /></li>
           </ul>
           </div>
           
          </div>
          <div data-aos="zoom-in-left"  className="about-right flex container m-auto px-12 justify-between flex-wrap">
               <div className="wrap_box2 justify-center font-bold flex gap-4 py-4">
               <span className="box">
                    <h1>14</h1>
                    <p>14 years on marketplace</p>
                    </span>
                    <span className="box">
                    <h1>4000+</h1>
                    <p>The number of employees</p>
                    </span>
                    <span className="box">
               <h1>150+</h1>
                    <p>projects</p>
                    </span>
                    <span className="box"> 
                    <h1>16</h1>
                    <p>Residential campilexes</p>
                    </span>
               </div>
              
               <div className="wrap_box w-screen  flex justify-start p-0 gap-4 font-bold">
               <div className="box"> 
                    <h1>250+</h1>
                    <p>Special techniques recuperated</p>
                    </div>
                    <div className="box">
                    <h1>9+</h1>
                    <p>Hospitals</p>
                    </div>
               </div>
              
            </div>
            <div className="contact mx-auto pt-20">
            <Contacts/>
            </div>
            </div>
           
        </>
    );
}
