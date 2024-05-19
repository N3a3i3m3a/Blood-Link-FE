import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setEmailError('Please enter your email address.');
      return;
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('Please enter your password.');
      return;
    } else if (password.length < 6) {
      setPasswordError('Your password must be at least 6 characters long.');
      return;
    } else {
      setPasswordError('');
    }

    try {
      const signInData = {
        email: email, 
        password: password,
      };

      const response = await axios.post(
        "https://blood-link-be.onrender.com/api/user/logIn",
        signInData
      );

      console.log(response.data);
      if (response.status === 200) {
        setSuccessMessage("Login successful!");
        setErrorMessage("");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage("Invalid email or password");
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
      setSuccessMessage("");
      console.error("Error:", error);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className='w-full h-fit flex  flex-col items-center ml-20 justify-center bg-white p-8 shadow-md'>
      <div className='w-full'>
      <h1 className="text-2xl text-gray-500 ">SIGN IN</h1>
      <form className="mt-5 flex border-none flex-col gap-5" onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="px-3 py-2 rounded-md w-[80%] border border-gray-400 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="text-blue-700">{emailError}</p>}
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="px-3 py-2 rounded-md border border-gray-400 w-[80%]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="text-blue-700">{passwordError}</p>}
        </div>
        <div>
          <button type="submit" className="bg-red-600 px-5 py-2 rounded-md text-white w-[80%] border border-red-600">
            Sign In
          </button>
        </div>
      </form>
      {successMessage && <p className="text-green-700">{successMessage}</p>}
      {errorMessage && <p className="text-red-700">{errorMessage}</p>}
      <p className="mt-3">
        Don't have an account? <Link to='/SignUp'><span className="text-red-700">Sign Up</span></Link>
        <br />
        Forgot Password? <Link to='/Resetpass'><span className="text-red-700">Reset password</span></Link>
      </p>
      </div>
    </div>
  );
};

export default Login;
