import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OTP = () => {
  const [otp, setOTP] = useState(['', '', '', '', '', '']); // Array to hold OTP digits

  const handleChange = (index, e) => {
    const newOTP = [...otp];
    newOTP[index] = e.target.value;
    setOTP(newOTP);
  };

  const handleClick = (index) => {
    const inputRef = inputRefs.current[index];
    inputRef.focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      // Move focus to the previous input field if Backspace is pressed
      const inputRef = inputRefs.current[index - 1];
      inputRef.focus();
    }
  };

  const inputRefs = React.useRef([]); // Ref for storing input references

  return (
    <div className={`bg-gray-100 w-[35rem] h-[27rem] pt-10 px-14 rounded-sm flex flex-col gap-10 shadow-lg`}>
      <div className='flex flex-col justify-center text-gray-500 gap-2 items-center'>
        <h2 className='font-bold text-2xl'>Verify Your Account</h2>
        <p>Enter 6 digit code sent to the registered email id. </p>
      </div>
      <div>
        {otp.map((value, index) => (
          <input
            key={index}
            ref={(input) => (inputRefs.current[index] = input)}
            type="text"
            value={value}
            maxLength={1}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className='w-[55px] h-[50px] m-[7px] text-center text-xl border-2 border-gray-500'
          />
        ))}
      </div>
      <p className='text-gray-500'>Did not receive a code ? <Link to={"/SignUp"} className='text-blue-600'>Resend</Link></p>
      <div>
        <button
          type="submit"
          className={`block w-full rounded-lg px-5 py-3 text-sm font-medium text-white hover:bg-slate-700`}
        >
          <Link to ="/Login">Verify</Link>
        </button>
      </div>
      <p className='text-red-400'>Don't share the verification code with anyone!</p>
    </div>
  );
};

export default OTP;
