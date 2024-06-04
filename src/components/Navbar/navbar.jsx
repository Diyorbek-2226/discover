import { useEffect, useRef, useState } from 'react';
import logo from '../img/logo.svg';
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

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
          <img className="w-40" src={logo} alt="Logo" />
        </div>
        <ul className="flex gap-10">
          <li className="hover:text-lime-500 cursor-pointer">About</li>
          <li className="hover:text-lime-500 cursor-pointer">Projects</li>
          <li className="hover:text-lime-500 cursor-pointer">Career</li>
          <li className="hover:text-lime-500 cursor-pointer">News</li>
          <li className="hover:text-lime-500 cursor-pointer">Contacts</li>
        </ul>
        <ul className="flex gap-4">
          <li className="hover:text-lime-500 cursor-pointer"><FaFacebook /></li>
          <li className="hover:text-lime-500 cursor-pointer"><FaInstagram /></li>
          <li className="hover:text-lime-500 cursor-pointer"><FaTelegram /></li>
        </ul>
        <select className="hover:text-lime-500 cursor-pointer">
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
          <option defaultValue="en">ENG</option>
        </select>
        <ul className="flex gap-4">
          <li className="hover:text-lime-500 cursor-pointer">+998939992226</li>
          <li className="hover:text-lime-500 cursor-pointer"><IoCall /></li>
        </ul>
      </div>
    </nav>
  );
};
