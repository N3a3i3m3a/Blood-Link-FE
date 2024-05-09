import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

   
    if (!username.trim()) {
      setEmailError('Please enter your email address.');
      return;
    } else if (!isValidEmail(username)) {
      setEmailError('Please inter valid password; with @, .com or .net');
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

  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && (email.includes('.com') || email.includes('.net'));
  };

  return (
    <div>
      <h1 className="text-2xl text-white font-bold">SIGN IN</h1>
      <form className="mt-5 flex flex-col gap-5" onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            id="username"
            placeholder="Email"
            className=" px-3 py-2 rounded-md w-[80%] border border-blue-700"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className=" px-3 py-2 rounded-md border border-blue-700 w-[80%]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
        </div>
        <div>
          <button className="bg-blue-700 px-5 py-2 rounded-md text-white w-[80%] border border-blue-900">
            Sign In
          </button>
        </div>
      </form>
      <p className="mt-3">
        Already have an account?<Link to='/SignUp'> <span className="text-white">Sign Up</span></Link>
        <br />
        Forgot Password? <Link to='/Reset'><span className="text-white">Reset password</span></Link>
      </p>
    </div>
  );
};

export default Login;
