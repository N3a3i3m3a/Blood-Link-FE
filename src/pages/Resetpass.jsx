import React from 'react'

const Resetpass = () => {
  return (
    
    <div className='w-full'>           
    <h1 className="text-2xl text-white font-bold">RESET ACCOUNT PASSWORD</h1>
    <h3></h3>
    <div className="mt-5 flex flex-col gap-5">

      <div>
        <input
          type="password"
          id="password"
          placeholder="Enter new password"
          value=''
          className=" px-3 py-2 rounded-md border border-red-700 w-[80%]"
        />
      </div>
      <div>
        <input
          type="password"
          id=""
          placeholder="Confirm new password"
          value=''
          className=" px-3 py-2 rounded-md border border-red-700 w-[80%]"
        />
      </div>
        <button className="ml-[10%] bg-red-700 mx-9 py-2 rounded-md text-white w-[80%] border">Reset Password</button>
      </div>
    </div>
  )  
}

export default Resetpass