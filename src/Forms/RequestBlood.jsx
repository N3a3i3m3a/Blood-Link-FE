import React, { useState } from 'react';

const RequestBlood = () => {
  const [emergencyBloodType, setEmergencyBloodType] = useState('');
  const [hospital, setHospital] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Requesting ${quantity} units of ${emergencyBloodType} blood for ${hospital}`);
  };

  return (
    <section className='h-fit flex flex-col items-center ml-20 justify-center bg-white p-8 shadow-md'>
      <div className='rounded'>
        <h1 className="text-2xl text-gray-500 font-bold">REQUEST BLOOD</h1>
        <h2 className='my-3'>Please enter the details for the blood request</h2>
        <form className="flex flex-col gap-5 p-7 w-full items-center" onSubmit={handleSubmit}>
          <div className='w-full'>
            <input
              type="text"
              id="bloodType"
              placeholder="Enter Blood Type"
              value={emergencyBloodType}
              onChange={(e) => setEmergencyBloodType(e.target.value)}
              className="px-3 py-2 rounded-md border w-full border-gray-400"
              required
            />
          </div>
          <div className='w-full'>
            <input
              type="text"
              id="hospital"
              placeholder="Enter Hospital Name"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              className="px-3 py-2 rounded-md border w-full border-gray-400"
              required
            />
          </div>
          <div className='w-full'>
            <input
              type="number"
              id="quantity"
              placeholder="Enter Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="px-3 py-2 rounded-md border w-full border-gray-400"
              required
            />
          </div>
          <button type="submit" className="ml-[10%] bg-red-600 mx-9 py-2 rounded-md text-white w-full">
            Request Blood
          </button>
        </form>
      </div>
    </section>
  );
};

export default RequestBlood;
