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
      description: "1. Registration, ",
      
    },
    {
      id: 2,
      src: contactimg2,
      description: "2. Request by user",
    },
    {
      id: 3,
      src: Donate,
      description: "3. Linking users",
    },
    {
      id: 4,
      src: Slogo,
      description: "4. Fulfilment of request",
    },
  ];

  return (
    <section className='mt-32 text-gray-500'>
     <p className='text-gray-500 text-center text-4xl font-semibold'> Process</p>
     <p className=' text-xl'>Here are blood link's process</p>
    <div className="w-full h-[80%]">
      
      <div className="p-4 mx-auto flex flex-col justify-center w-full">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, description }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg flex flex-row gap-5">
              <div>
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 h-40 object-cover" />
              </div>
              <div>
              <p>{description}</p>
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
 