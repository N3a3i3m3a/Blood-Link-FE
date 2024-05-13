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
      description: "1. Registration; The Donors create accounts and Hospitals get credentials to use for accessing aour services",
      
    },
    {
      id: 2,
      src: contactimg2,
      description: "2. Request by user; Donors request for donating immediately or book appointment according to their avalability and hospital in need of blood request for them",
    },
    {
      id: 3,
      src: Donate,
      description: "3. Linking users, RBC pass through users requests and link donors with hospitals accordingly due to location, time and so on. Thereafter users receive messages from RDB for further processes.",
    },
    {
      id: 4,
      src: Slogo,
      description: "4. Fulfilment of request; Donors go to their respective hospitlas and donate as well as hospitals receive the requested blood banks ",
    },
  ];

  return (
    <section className='mt-32 text-gray-500'>
     <p className='text-gray-500 text-center text-4xl font-semibold'> Process</p>
     <p className=' text-xl px-12 text-black'>Here are blood link's process</p>
    <div className="w-full h-[80%]">
      
      <div className="p-4 mx-auto flex flex-col justify-center w-full">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, description }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg flex flex-col items-center justify-center gap-5">
              <div>
                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 max-h-32 w-auto object-cover" />
              </div>
              <div>
                <p className='text-black px-12'>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}

export default Process;
