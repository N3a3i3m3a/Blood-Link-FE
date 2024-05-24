import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
// import Footer from './Footer';

const Layout = () => {
  return (
    <section className=' flex flex-col mx-5'>
      <NavBar />
      <Outlet />
      {/* <Footer/> */}
    </section>
  );
};

export default Layout;
