import React from 'react'

const Resetpass = () => {
  return (
  <section className='h-fit flex flex-col items-center ml-20 justify-center bg-white p-8 shadow-md'>
    <div className='rounded '>           
    <h1 className="text-2xl text-gray-500 font-bold">RESET ACCOUNT PASSWORD</h1>
    <h2 className='my-3'>Plese, inter your email address</h2>
    <div className=" flex flex-col gap-5 p-7 w-full items-center">
      <div className='w-full'>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
        
          className=" px-3 py-2 rounded-md border w-full border-gray-400 "
        />
      </div>
        <button className="ml-[10%] bg-red-600 mx-9 py-2 rounded-md text-white w-full">Reset Password</button>
      </div>
    </div>
  </section>
  )  
}

export default Resetpass