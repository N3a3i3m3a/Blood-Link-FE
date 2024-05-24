import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <section className='h-fit flex flex-col items-center mt-32 justify-center bg-white p-4 md:p-8 shadow-md'>
      <div className='rounded w-full max-w-md'>           
        <h1 className="text-2xl text-gray-500 font-bold text-center">RESET ACCOUNT PASSWORD</h1>
        <h2 className='my-3 text-center'>Please, enter your email address</h2>
        <div className="flex flex-col gap-5 p-4 w-full items-center">
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
          <Link to="/ConfirmNewPassword">
            <button 
              onClick={handleResetPassword} 
              className="w-full md:w-[20rem] bg-red-600 py-2 rounded-md text-white"
            >
              Reset Password
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Resetpass;
