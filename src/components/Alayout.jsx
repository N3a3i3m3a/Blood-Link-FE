import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Alayout = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col   ">
      <NavBar/>
      <div className='  justify-center md:flex-row lg:ml-[35%] '>
      <section className="text-center mt-32 p-4 md:p-8 rounded-lg w-full md:w-2/4 flex flex-col items-center">
        <Outlet/>
      </section>
      </div>
    </div>
  );
}

export default Alayout;
