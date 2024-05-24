import React from 'react';
import { BiSolidDonateBlood } from "react-icons/bi";
import { MdBloodtype } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-red-200 to-white mt-20 py-10 md:py-20 px-4 sm:px-10 md:px-20 text-gray-700">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">Services</h2>
      <div className="flex flex-col md:flex-row gap-5 justify-between">
        <ServiceCard
          icon={<BiSolidDonateBlood className="text-red-500 text-4xl" />}
          image="/Donate.webp"
          title="Facilitating Donating blood immediately"
          description="Someone who needs to donate blood is facilitated to be linked to a nearby hospital."
        />
        <ServiceCard
          icon={<MdBloodtype className="text-red-500 text-4xl" />}
          image="/Book.jpg"
          title="Easy booking for blood donation"
          description="You can simply book a blood donation time according to your availability."
        />
        <ServiceCard
          icon={<FaAmbulance className="text-red-500 text-4xl" />}
          image="/Hospital.jpg"
          title="Blood requesting facilitation"
          description="Health institutions in need of blood can be linked with blood donors."
        />
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, image, title, description }) => {
  return (
    <div className="border rounded-lg p-5 overflow-hidden flex flex-col justify-between">
      <div className="group">
        <img src={image} alt="Service" className='h-48 w-full object-cover' />
        {icon}
      </div>
      <div className="mt-4">
        <h4 className='text-xl font-semibold'>{title}</h4>
        <p>{description}</p>
        <Link to="/About">
          <button className="mt-4 px-3 py-2 rounded-xl text-white bg-red-600">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
