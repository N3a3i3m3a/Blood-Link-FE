import React from 'react'
import ADashboard from '../dasboards/components/ADashboard'
import Header from '../dasboards/components/Header'
import Sidebar from '../dasboards/components/Sidebar'

const Admin = () => {
  return (
   <section className='flex flex-row w-full bg-gray-100'>
      <div className='flex fixed '>
      <Sidebar/>
      </div>
      <div className='flex flex-col  '>
      <div className=' flex fixed ml-60'>
       <Header/>
      </div>
      <div className='w-[100%] ml-60 mt-20'>
        <ADashboard/>
      </div>
      </div>
   </section>
  )
}

export default Admin