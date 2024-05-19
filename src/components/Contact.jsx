import React, { useState } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';
import Footer from './Footer'; // Import your Footer component if it's defined in a separate file


const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://blood-link-be.onrender.com/api/contact-us/contact", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSuccess('Form submitted successfully!');
      setError('');
      setFormData({ fullName: '', email: '', message: '' });
    } catch (err) {
      setError('Error submitting form. Please try again later.');
      setSuccess('');
    }
  };

  return (
    <div className="mt-20 bg-red-700 w-full px-7 text-gray-700 max-h-max pb-16">
      <h2 className="text-3xl text-gray-200 ml-[40%] my-7 font-semibold mt-14">Contact Us</h2>
      <div className="flex flex-wrap justify-between items-center">
        {/* Left Section - Contact Information */}
        <div className="w-[80%] md:w-1/2 mb-8 md:mb-0">
          <p className="text-white text-2xl mt-7">Contact Information</p>
          <br />
          <p className="text-white"><IoLocationSharp  className="text-white text-2xl" /> Kacyiru, Kigali</p>
          <br />
          <p className="text-white"><MdOutlineMailOutline className="text-white text-2xl" /> danb@gmail.com</p>
          <br />
          <p className="text-white"><IoCallSharp className="text-white text-2xl" /> +2507888888888</p>
          <br />
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2">
          <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Enter your message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
            {success && <p className="text-green-500 text-xs italic">{success}</p>}
            <div className="flex items-center justify-end">
              <button
                className="bg-red-500 w-full hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr className="w-[80%] ml-36" />
      <Footer />
    </div>
  );
};

export default Contact;
