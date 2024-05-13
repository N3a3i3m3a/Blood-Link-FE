import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Alayout = () => {
  return (
    
    <div className="bg-white h-screen flex justify-center">
      <NavBar/>
       <section className="text-center w-[50%] p-8 rounded-lg  border  flex items-center border-red-700"><Outlet/></section>
  </div>
  )
}

export default Alayout