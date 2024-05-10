import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Alayout = () => {
  return (
    
    <div className="bg-white h-screen flex justify-center border border-red-500">
      <NavBar/>
       <section className="text-center w-[50%] p-8 rounded-lg bg-red-500 border  flex items-center border-blue-700"><Outlet/></section>
  </div>
  )
}

export default Alayout