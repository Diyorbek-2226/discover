import { useEffect, useRef, useState } from 'react';
import logo from '../img/logo.svg';
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { Link } from 'react-router-dom';

export const Navbar = ({ isAboutSection }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarRef = useRef();

  const handleScroll = () => {
    const position = window.scrollY || window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 100) {
      navbarRef.current.style.backgroundColor = 'white';
    } else if (scrollPosition < 100) {
      navbarRef.current.style.backgroundColor = 'transparent';
    }
  }, [scrollPosition]);

  return (
    <nav ref={navbarRef} className="z-20 w-screen p-4 border border-bottom-1 fixed left-0 top-0">
      <div className="container m-auto navbar_title flex items-center justify-between">
        <div className="nav-img bg-gray-300 p-2">
          <Link to={'/'}><img className="w-40" src={logo} alt="Logo" /></Link>
        </div>
        <ul className="flex gap-10">
          <li className="hover:text-manashu cursor-pointer"><Link to={'/about'}>About</Link></li>
          <li className="hover:text-manashu cursor-pointer"><Link to={'/project'}>Projects</Link></li>
          <li className="hover:text-manashu cursor-pointer"><a target='blank' href="https://hr.di.uz/">Career</a></li>
          <li className="hover:text-manashu cursor-pointer"><Link to={'/news'}>News</Link></li>
          <li className="hover:text-manashu cursor-pointer"><Link to={'/contact'}>Contacts</Link></li>
        </ul>
        <ul className="flex gap-4">
          <li className="hover:text-manashu cursor-pointer"><FaFacebook /></li>
          <li className="hover:text-manashu cursor-pointer"><FaInstagram /></li>
          <li className="hover:text-manashu cursor-pointer"><FaTelegram /></li>
        </ul>
        <select className="hover:text-manashu cursor-pointer">
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
          <option defaultValue="en">ENG</option>
        </select>
        <ul className="flex gap-4">
          <li className="hover:text-manashu cursor-pointer">+998939992226</li>
          <li className="hover:text-manashu cursor-pointer"><IoCall /></li>
        </ul>
      </div>
    </nav>
  );
};
