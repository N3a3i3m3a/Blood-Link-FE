import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
      console.log("Success:", response.data); 
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Server responded with an error status:", error.response.status);
        console.error("Error data:", error.response.data);
        setErrorMessage("An error occurred while registering: " + error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
        setErrorMessage("No response received from the server. Please try again later.");
      } else {
        // Something else happened while setting up the request
        console.error("Error setting up the request:", error.message);
        setErrorMessage("An error occurred while setting up the request.");
      }
      setSuccessMessage("");
    } finally {
      setLoading(false);
    }
  };
  

  const validateForm = () => {
    // Add your form validation logic here
    // For example, checking if all fields are filled
    return (
      username.trim() !== '' &&
      email.trim() !== '' &&
      role.trim() !== '' &&
      password.trim() !== '' 
      // &&
      // // confirmPassword.trim() !== ''
    );
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl text-gray-700">Register your Account</h1>
      <div className="mt-5 flex flex-col gap-5">
        <div>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="px-3 py-2 bg-slate-300 rounded-md w-[80%] border"
          >
            <option value="">Select Role</option>
            <option value="donor">Donor</option>
            <option value="hospital">Hospital</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            id="names"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-3 py-2 bg-slate-300 rounded-md w-[80%] border"
          />
        </div>
        <div>
          <input
            type="text"
            id="username"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 bg-slate-300 rounded-md w-[80%] border"
          />
        </div>
        <div>
          <input
            type="Enter password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2 bg-gray-300 rounded-md border w-[80%]"
          />
        </div>
        {/* <div>
          <input
            type="password"
            id="confirm password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="px-3 py-2 bg-slate-300 rounded-md border w-[80%]"
          />
        </div> */}
        <button
          onClick={handleSubmit}
          className="ml-[10%] mx-9 py-2 bg-red-600 rounded-md text-white w-[80%] border"
          disabled={loading || !validateForm()}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
        </div>
        {successMessage && <p className="text-green-700">{successMessage}</p>}
        {errorMessage && <p className="text-red-700">{errorMessage}</p>}
      
      <p className="mt-3">
        already have an account? <Link to='/Login'><span className="text-red-700">Login</span></Link>
      </p>
    </div>
  );
};

export default SignUp;
