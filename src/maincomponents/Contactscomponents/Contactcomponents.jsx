import { Navbar } from "../../components/Navbar/navbar";
import bgimg from '../../assets/abautpage.jpg';
import { GoMoveToBottom } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { TbClockHour4 } from "react-icons/tb";
import '../Contactscomponents/contactcomponents.css';
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";


export const Contactcomponents = () => {
  return (
    <>
     <div className='header_wrapper1 ' style={{height:"auto"}}>
                <img src={bgimg} alt="Background" className='background_image2'  />
            <Navbar />
            
                <header className="container mx-auto sm-text-center pt-36">
                    <div className="header_title1 py-20" style={{zIndex:"1000"}}>
                        <h1 className='text-6xl font-bold'>CONTACTS</h1>
                        <p className=' py-5 text-sm'>
                        Leave your contacts by filling out the current form and we will contact you as soon <br />
                         as possible.
                        </p>
                       <p className="text-manashu py-8"><GoMoveToBottom size={28} /></p>
                    </div>
                </header>
                </div>
                <div className="contatsconponents container mx-auto flex items-center justify-between relative">
                    <div className="component_left py-12 w-full "> 
                        <h1 className="text-3xl ">
                        How we can 
                        </h1>
                        <h1 className="text-3xl ps-8">
                        help?
                        </h1>
                        <p className="py-4 text-slate-500">Leave your contacts by filling out the current form and we will contact you as soon as possible.</p>
                        <ul className="flex gap-12">
                            <li className="flex  gap-2">
                            <p className="text-manashu"><CiLocationOn size={28} /></p>
                                <div className="component_left_text">
                                    <h1 className="text-xl ">Address</h1>
                                    <p className="text-sm text-slate-500">Uzbekistan, Tashkent, National <br />
                                     Park of Uzbekistan named after <br />
                                      Alisher Navoi</p>
                                </div>
                            </li>
                            <li className="flex  gap-2">
                            <p className="text-manashu"><LuPhoneCall size={28} /></p>
                                <div className="component_left_text">
                                    <h1 className="text-xl">phone</h1>
                                    <p className="text-sm text-slate-500">+998 71 288 88 88</p>
                                </div>
                            </li>
                        </ul>
                        <ul className="py-8">
                        <li className="flex  gap-2">
                            <p className="text-manashu"><TbClockHour4 size={28} /></p>
                                <div className="component_left_text">
                                    <h1 className="text-xl">Working hours</h1>
                                    <p className="text-sm text-slate-500 ">09:00 - 18:00 Mon-Sat</p>
                                </div>
                            </li> 
                        </ul>
                    </div>
                    <div className="component_right absolute right-0 bottom-20 bg-white shadow-2xl">
                        <span className="block">
                            <label id="name">
                                Name
                            </label>
                            <input id="#name" placeholder="What is a your name?" type="text" />
                        </span>
                        <span className="block">
                            <label id="numbers">
                                Phone number 
                            </label>
                            <input id="#numbers" placeholder="+998" type="tel" />
                        </span>
                        <span className="block">
                            <label id="selects"></label>
<select name="" id="#selects">
    <option value="sales">Sales</option>
    <option value="departament">Departament</option>
    <option value="accaunting">Accaunting</option>
    <option value="oficce">Oficce</option>
    <option value="Financial">Financial</option>
</select>
                        </span>
                        <span className="block">
                            <label id="question">
                                Your question 
                            </label>
                            <input id="#question" placeholder="Leave your question" type="text" />
                        </span>
                        <span className="block">
                        <button className="bg-manashu text-white">
            feedback
        </button>
                        </span>

                    </div>
                </div>
                <div className="contact_maps">
                <iframe className="CONTACT_XARITA" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47918.862332569974!2d69.2859536!3d41.3538992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cb23888afb9%3A0x31c22300affbc36a!2z0K7QvdGD0YHQsNCx0LDQtNGB0LrQuNC5INGA0LDQudC-0L0sINCi0LDRiNC60LXQvdGCLCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1sru!2s!4v1717584422494!5m2!1sru!2s"  referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="container mx-auto flex items-center justify-between py-8">
                    <p className="text-sm">© 2022 Discover Invest. All rights reserved.</p>
                    <ul className="flex gap-4">
          <li className="hover:text-manashu cursor-pointer"><FaFacebook /></li>
          <li className="hover:text-manashu cursor-pointer"><FaInstagram /></li>
          <li className="hover:text-manashu cursor-pointer"><FaTelegram /></li>
        </ul>
                </div>

    </>
  )
}
