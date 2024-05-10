import React from 'react'



const Footer = () => {
  return (
      <div className=' w-full bg-red-700  text-black flex flex-col gap-5'>
      
        <div className='flex gap-48 px-7'>
        <img src='/Slogo.PNG' alt='footer' className='h-10'/>
        <p className=''>Copyright &copy; {new Date().getFullYear()}.Blood-Link by DANB All rights reserved</p>
        </div>
      </div>
    
  )
}

export default Footer