import Sidebar from '../dashboard/Sidebar';
import Header from '../dashboard/Header';
import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';

const Dlayout = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <section className='grid-container' >
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} className=''/>
      <Outlet/>
    </section>
  )
}

export default Dlayout