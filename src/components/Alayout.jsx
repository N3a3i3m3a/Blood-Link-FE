import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Alayout = () => {
  return (
    
    <div className="bg-white h-screen flex justify-center border">
      <NavBar/>
       <section className="text-center w-[50%] p-8 rounded-lg  border  flex items-center "><Outlet/></section>
  </div>
  )
}

export default Alayout