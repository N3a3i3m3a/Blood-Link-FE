import React from 'react'


const Footer = () => {
  return (
      <div className='h-48 w-full bg-red-700  text-white flex flex-col gap-5'>
        <div>
        <h1>Contact informations</h1>
        <p>hhh</p>
        <p>hhh</p>
        <p>hhh</p>
        </div>

        <div className='flex gap-48'>
        <img src='/Slogo.PNG' alt='footer' className='h-10'/>
        <p className=''>Copyright &copy; {new Date().getFullYear()}.Blood-Link by DANB All rights reserved</p>
        </div>
      </div>
    
  )
}

export default Footer