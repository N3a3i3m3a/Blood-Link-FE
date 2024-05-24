import React from 'react';
import process1 from '/process1.png';
import contactimg2 from '/contactimg2.jpg';
import Donate from '/Donate.webp';
import Slogo from '/Slogo.jpg';

function Process() {
  const portfolios = [
    {
      id: 1,
      src: process1,
      title: "1. Registration",
      description: "The Donors create accounts and Hospitals get credentials to use for accessing our services"
    },
    {
      id: 2,
      src: contactimg2,
      title: "2. Request by user",
      description: "Donors request for donating immediately or book appointment according to their availability and hospital in need of blood request for them"
    },
    {
      id: 3,
      src: Donate,
      title: "3. Linking users",
      description: "RBC pass through users requests and link donors with hospitals accordingly due to location, time and so on. Thereafter users receive messages from RDB for further processes."
    },
    {
      id: 4,
      src: Slogo,
      title: "4. Fulfilment of request",
      description: "Donors go to their respective hospitals and donate as well as hospitals receive the requested blood banks"
    },
  ];

  return (
    <section className='mt-20 md:mt-32 text-gray-500'>
      <p className='text-gray-500 text-center text-4xl font-semibold'>Process</p>
      <p className='text-xl px-12 text-black mx-7 text-center'>Here are blood link's process</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-12 lg:px-24 xl:px-32 mt-8">
        {portfolios.map(({ id, src, title, description }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg flex flex-col items-center justify-center gap-5">
            <div>
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 max-h-48 w-auto object-cover" />
            </div>
            <div className='text-black px-4 sm:px-8'>
              <p className='font-semibold mb-2'>{title}</p>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
