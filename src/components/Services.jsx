import React from 'react';
import { BiSolidDonateBlood } from "react-icons/bi";
import { MdBloodtype } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-red-200 to-white mt-20 w-full py-20 px-7 text-gray-700">
      <h2 className="text-3xl px-60 text-gray-500 font-semibold mb-10 text-center">Services</h2>
      <div className="flex gap-7 justify-between">
        <div className="border border-red-500 rounded-lg p-5 overflow-hidden">
          <div className="services1 group">
            <img src="/Donate.webp" alt="Donate now" className='h-48' />
            <BiSolidDonateBlood className="text-red-500 text-4xl transition-all transform translate-y-0 group-hover:-translate-y-full" />
            <br />
            <br />
            <div className="text1 transition-all transform translate-y-0 group-hover:-translate-y-full">
              <h4 className='text-xl font-semibold'>Facilitating Donating blood immediately</h4>
              <p>
                Someone who needs to donate blood is facilitated to be linked to a nearby hospital.
              </p>
              <button className="px-3 w-full">
                <a href="/" className="p-2 rounded-2xl bg-red-600">Click Here</a>
              </button>
            </div>
          </div>
        </div>
        <div className="border border-red-500 rounded-lg p-5 overflow-hidden">
          <div className="services2 group">
            <img src="Book.jpg" alt="requestsimg" className='h-48 w-full' />
            <MdBloodtype className="text-red-500 text-4xl transition-all transform translate-y-0 group-hover:-translate-y-full" />
            <br />
            <br />
            <div className="text2 transition-all transform translate-y-0 group-hover:-translate-y-full">
              <h4 className='text-xl font-semibold'>Easy booking for blood donation</h4>
              <p>
                You can simply book a blood donation time according to your availability.
              </p>
              <button className="px-3 w-full">
                <a href="" className="p-2 rounded-2xl bg-red-600">Click Here</a>
              </button>
            </div>
          </div>
        </div>
        <div className="border border-red-500 rounded-lg p-5 overflow-hidden">
          <div className="services3 group">
            <img src="/Hospital.jpg" alt="donateimg" className='h-48 w-full'  />
            <FaAmbulance className="text-red-500 text-4xl transition-all transform translate-y-0 group-hover:-translate-y-full" />
            <br />
            <br />
            <div className="text3 transition-all transform translate-y-0 group-hover:-translate-y-full">
              <h4 className='text-xl font-semibold'>Blood requesting facilitation </h4>
              <p>
                Health institutions in need of blood can be linked with blood donors.
              </p>
              <button className="px-3 w-full">
                <a href="/" className="p-2 rounded-2xl bg-red-600">
                  Click Here
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
