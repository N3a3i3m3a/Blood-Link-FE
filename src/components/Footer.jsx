import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-red-700 text-white py-4 px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row justify-between items-center'>
      <div className='flex items-center mb-4 sm:mb-0'>
        <img src='/Slogo.PNG' alt='footer' className='h-10 mr-4' />
        <p className='text-black'>Copyright &copy; {new Date().getFullYear()}. Blood-Link by DANB All rights reserved</p>
      </div>
      <div className='flex gap-5'>
        <FaGithub className='text-black' />
        <FaTwitter className='text-black' />
        <FaLinkedin className='text-black' />
        <FaInstagram className='text-black' />
      </div>
    </footer>
  );
};

export default Footer;
