import React from 'react'
import { Outlet } from 'react-router-dom'

const Alayout = () => {
  return (
    <div className="bg-white h-screen flex justify-center items-center border border-red-500">
  <section className="text-center w-[50%] p-8 rounded-lg bg-red-500 border border-blue-700"><Outlet/></section>
  </div>
  )
}

export default Alayout