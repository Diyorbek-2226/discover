import { SlPeople } from "react-icons/sl";
import { MdTextsms } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import '../Our/Our.css';

export const Our = () => {
  return (
   <div data-aos="fade-right" className="our">
        <div className="container mx-auto ">
           <div className="our_title">
            <h1 className="text-4xl font-bold">Our</h1>
            <h1 className="text-4xl ps-8 font-bold">
            advantages 
            </h1>
           </div>
           <ul className="flex align-center mx-auto  justify-between  py-12">
            <li className="list">
             <div className="icons">
             <SlPeople size={70}/>
              </div>
              <div className="icons_title">
                <h1 className="py-2 font-bold text-xl">Our team</h1>
                <p className="py-2">The company recruits experienced employees on a <br /> competitive basis</p>
                </div> 
            </li>
            <li className="list">
             <div className="icons">
             <MdTextsms size={70}/>
              </div>
              <div className="icons_title">
                <h1 className="py-2 font-bold text-xl">Positive customer approach</h1>
                <p className="py-2">By looking at the great work we have done through our <br />
                 website, you will be sure that we have earned the trust of <br />
                  our customers</p>
                </div> 
            </li>
            <li className="list">
             <div className="icons">
             <IoShieldCheckmarkOutline size={70} />
              </div>
              <div className="icons_title">
                <h1 className="py-2 font-bold text-xl">All work guaranteed</h1>
                <p className="py-2 ">We perform our mission carefully and appreciate your <br />
                 belief in our company All mistakes were clearly <br />  corrected</p>
                </div> 
            </li>
            
            
           </ul>
        </div>
        </div>
  )
}

