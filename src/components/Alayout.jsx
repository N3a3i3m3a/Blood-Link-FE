import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Alayout = () => {
  return (
    
    <div className="bg-white h-screen flex justify-center">
      <NavBar/>
       <section className="text-center p-8 rounded-lg w-[40%] flex items-center "><Outlet/>
       </section>
  </div>
  )
}

export default Alayout