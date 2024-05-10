import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
      <section className='flex flex-row justify-around h-20 mt-20'>
        <div className='flex flex-row'>
          <div>
        <img src='/Slogo.PNG' alt='footer' className='h-10'/>
        </div>
        <div>
        <p className='text-black'>Copyright &copy; {new Date().getFullYear()}.Blood-Link by DANB All rights reserved</p>
        </div>
        </div>
        <div className='flex flex-row gap-5'>
          <div >
        <FaGithub  className='text-black '/>
        </div>
        <div>
        <FaTwitter className='text-black '  />
        </div>
        </div>
      </section>
  )
}

export default Footer