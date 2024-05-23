import React from 'react'

const ConfirmNewPass = () => {
    return (
        <section className='h-fit flex flex-col items-center ml-20 justify-center bg-white p-8 shadow-md'>
          <div className='rounded '>           
          <h1 className="text-2xl text-gray-500 font-bold">CONFIRM NEW PASSWORD</h1>
          <h2 className='my-3'>Please fill in the following form, to reset you password</h2>
          <div className=" flex flex-col gap-5 p-7 w-full items-center">
            <div className='w-full flex flex-col gap-3'>
                <div>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className=" px-3 py-2 rounded-md border w-full border-gray-400 "
              />
              </div>
              <div>
              <input
                type="password"
                id="ConfirmNewPassword"
                placeholder="Confirm new password"
              
                className=" px-3 py-2 rounded-md border w-full border-gray-400 "
              />
              </div>
            </div>
              <button className="ml-[10%] bg-red-600 mx-9 py-2 rounded-md text-white w-full">Reset Password</button>
            </div>
          </div>
        </section>
        )  
      }

export default ConfirmNewPass