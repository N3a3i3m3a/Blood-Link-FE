import React from 'react';
import Footer from './Footer'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5"


const Contact = () => {
  return (
    <div className="mt-20 bg bg-red-700 w-full px-7 text-gray-700 max-h-max pb-16 ">
      <h2 className="text-3xl text-gray-200 ml-[40%] my-7 font-semibold mt-14">Contact Us</h2>
      <div className="flex flex-wrap justify-between items-center">
        {/* Left Section - Image */}
        <div className="w-[80%] md:w-1/2 mb-8 md:mb-0">
        <p className='text-white text-2xl mt-7'>Contact informations</p>
        <br/>
        <p className='text-white'><FaLocationDot className='text-white text-2xl' />Kacyiru, Kigali</p>
        <br/>
        <p className='text-white'><MdOutlineMailOutline className='text-white text-2xl' />danb@gmail.com</p>
        <br/>
        <p className='text-white' ><IoCallSharp className='text-white text-2xl' />+2507888888888</p>
        <br/>
        </div>
        
        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 ">
          <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                placeholder="Enter your full name"
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
              ></textarea>
            </div>
            <div className="flex items-center justify-end">
              <button
                className="bg-red-500 w-full hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr className='w-[80%] ml-36'></hr>
    <Footer/>
    </div>
  );
};

export default Contact;
