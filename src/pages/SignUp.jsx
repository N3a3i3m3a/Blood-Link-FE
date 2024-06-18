import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const signUpData = {
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://blood-link-be.onrender.com/api/user/signup",
        signUpData
      );
      setSuccessMessage("You have registered successfully!");
      setErrorMessage("");
      console.log(response.data);
      navigate("/OTP");

      console.log("Success:", response.data);
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error status:", error.response.status);
        console.error("Error data:", error.response.data);
        setErrorMessage("An error occurred while registering: " + error.response.data.message);
      } else if (error.request) {
        console.error("No response received:", error.request);
        setErrorMessage("No response received from the server. Please try again later.");
      } else {
        console.error("Error setting up the request:", error.message);
        setErrorMessage("An error occurred while setting up the request.");
      }
      setSuccessMessage("");
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    return (
      username.trim() !== '' &&
      email.trim() !== '' &&
      role.trim() !== '' &&
      password.trim() !== ''
    );
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="w-full h-fit flex mt-12 flex-col items-center ml-20 justify-center bg-white p-8 shadow-md">
      <div className='w-full'>
        <h1 className="text-2xl text-gray-700">Register your Account</h1>
        <div className="mt-5 flex flex-col gap-5">
          <div>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="px-3 py-2 border-gray-400 rounded-md w-full border"
            >
              <option value="">Select Role</option>
              <option value="donor">Donor</option>
              <option value="hospital">Hospital</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-3 py-2 border-gray-400 rounded-md w-full border"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 border-gray-400 rounded-md w-full border"
            />
          </div>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 border-gray-400 rounded-md border w-full"
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <HiOutlineEyeOff /> : <HiOutlineEye />}
            </span>
          </div>
          <button
            onClick={handleSubmit}
            className="py-2 bg-red-600 rounded-md text-white w-full border"
            disabled={loading || !validateForm()}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </div>
        {successMessage && <p className="text-green-700">{successMessage}</p>}
        {errorMessage && <p className="text-red-700">{errorMessage}</p>}
        <p className="mt-3">
          already have an account? <Link to='/Login'><span className="text-red-700 ">Login</span></Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
