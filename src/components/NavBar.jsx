import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <section className='bg-white text-gray-500 flex flex-row py-3 items-center fixed justify-between w-full'>
      <div className='flex'>
        <img className='h-20 ml-7' src='/Logo.PNG'alt="Logo" />
      </div>
      <div className="flex flex-row justify-around w-[60%] font-semibold">
        <div>
          <NavLink to="/Home" className="">Home</NavLink>
        </div>
        <div>
          <NavLink to="/About" className="">About us</NavLink>
        </div>
        <div>
          <NavLink to="/Services" className="">Services</NavLink>
        </div>
        <div>
          <NavLink to="/Process" className="">Process</NavLink>
        </div>
        <div>
          <NavLink to="/Contact" className="">Contact us</NavLink>
        </div>
        <div>
          <NavLink to="/Login" className="mx-24">Login</NavLink>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
