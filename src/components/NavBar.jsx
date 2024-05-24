import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='bg-white text-gray-500 flex flex-row py-3 z-10 items-center fixed justify-between w-full shadow-lg'>
      <div className='flex'>
        <img className='h-20 ml-7' src='/Logo.PNG' alt="Logo" />
      </div>
      <div className='md:hidden ml-20 flex items-center mr-7'>
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div className={`md:flex md:flex-row justify-around w-full md:w-[60%] font-semibold ${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className='md:ml-7 mt-2 md:mt-0'>
          <NavLink to="/" className="block md:inline">Home</NavLink>
        </div>
        <div className='mt-2 md:mt-0'>
          <NavLink to="/About" className="block md:inline">About us</NavLink>
        </div>
        <div className='mt-2 md:mt-0'>
          <NavLink to="/Services" className="block md:inline">Services</NavLink>
        </div>
        <div className='mt-2 md:mt-0'>
          <NavLink to="/Process" className="block md:inline">Process</NavLink>
        </div>
        <div className='mt-2 md:mt-0'>
          <NavLink to="/Contact" className="block md:inline">Contact us</NavLink>
        </div>
        <div className='mt-2 md:mt-0 md:mr-24'>
          <NavLink to="/Login" className="block md:inline text-red-500 font-bold">Login</NavLink>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
