import React, { useState } from 'react';
import axios from 'axios';

const Resetpass = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.post('https://blood-link-be.onrender.com/api/user/forgotPassword', { email });
      console.log(response.data); // Handle success
    } catch (error) {
      console.error(error.response?.data || error.message); // Handle error
    }
  };

  return (
    <section className='h-fit flex flex-col items-center ml-20 justify-center bg-white p-8 shadow-md'>
      <div className='rounded'>           
        <h1 className="text-2xl text-gray-500 font-bold">RESET ACCOUNT PASSWORD</h1>
        <h2 className='my-3'>Please, enter your email address</h2>
        <div className="flex flex-col gap-5 p-7 w-full items-center">
          <div className='w-full'>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter email"
              className="px-3 py-2 rounded-md border w-full border-gray-400"
            />
          </div>
          <button 
            onClick={handleResetPassword} 
            className="ml-[10%] bg-red-600 mx-9 py-2 rounded-md text-white w-full"
          >
            Reset Password
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resetpass;
