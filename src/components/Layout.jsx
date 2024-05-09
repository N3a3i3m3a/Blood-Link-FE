import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <section className=' flex flex-col mx-12'>
      <NavBar />
      <Outlet />
    </section>
  );
};

export default Layout;
